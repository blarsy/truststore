package keeper_test

import (
	"fmt"
	"testing"

	mocks "github.com/blarsy/truststore/mocks/keeper"
	keepertest "github.com/blarsy/truststore/testutil/keeper"
	keeper "github.com/blarsy/truststore/x/truststore/keeper"
	"github.com/blarsy/truststore/x/truststore/types"
	"github.com/cosmos/cosmos-sdk/codec"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	typesparams "github.com/cosmos/cosmos-sdk/x/params/types"
	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/require"
)

func GetTestKeeper(ctx sdk.Context) *keeper.Keeper {
	storeKey := sdk.NewKVStoreKey(types.StoreKey)
	memStoreKey := storetypes.NewMemoryStoreKey(types.MemStoreKey)

	registry := codectypes.NewInterfaceRegistry()
	cdc := codec.NewProtoCodec(registry)

	paramsSubspace := typesparams.NewSubspace(cdc,
		types.Amino,
		storeKey,
		memStoreKey,
		"TruststoreParams",
	)
	k := keeper.NewKeeper(
		cdc,
		storeKey,
		memStoreKey,
		paramsSubspace,
	)

	// Initialize params
	k.SetParams(ctx, types.DefaultParams())

	return k
}

type incrementedNextId struct {
	global         types.Global
	originalNextId uint64
}

func (i incrementedNextId) Matches(x interface{}) bool {
	return x.(types.Global).NextId == i.originalNextId+1
}
func (i incrementedNextId) String() string {
	return fmt.Sprintf("Expected next id to be %d, but got %d", i.global.NextId+1, i.global.NextId)
}
func newIncrementNextId(glob types.Global) incrementedNextId {
	return incrementedNextId{
		global:         glob,
		originalNextId: glob.NextId,
	}
}

type attestationMatcher struct {
	attestation types.Attestation
}

func (attestationMatcher *attestationMatcher) Matches(x interface{}) bool {
	switch x := x.(type) {
	case types.Attestation:
		{
			return x.Creator == attestationMatcher.attestation.Creator &&
				x.Identifier == attestationMatcher.attestation.Identifier &&
				x.IdentifierType == attestationMatcher.attestation.IdentifierType &&
				x.Index == attestationMatcher.attestation.Index &&
				x.Rating == attestationMatcher.attestation.Rating
		}
	default:
		return false
	}
}
func (attestationMatcher *attestationMatcher) String() string {
	return fmt.Sprint(attestationMatcher.attestation)
}
func newAttestationMatcher(attestation types.Attestation) gomock.Matcher {
	return &attestationMatcher{attestation: attestation}
}

func TestCreateAttestation(t *testing.T) {
	ctrl := gomock.NewController(t)
	height := int64(321)
	ctx := keepertest.GetFakeCtxWithHeight(height)
	sdkCtx := sdk.UnwrapSDKContext(ctx)
	identifier, identifierType, creator := "identifier", "identifierType", "creator"
	nextId, rating := uint64(123), uint64(3)
	msg := types.MsgCreateAttestation{
		Creator: creator, Identifier: identifier, IdentifierType: identifierType, Rating: rating,
	}
	fakeGlobal := types.Global{NextId: nextId}
	attestationCreatorMock := mocks.NewMockAttestationCreator(ctrl)
	someErr := fmt.Errorf("some err")

	inputs := []struct {
		name                         string
		validateIdentifierTypeResult error
		setupMock                    func()
	}{
		{
			name:                         "Happy path",
			validateIdentifierTypeResult: nil,
			setupMock: func() {
				gomock.InOrder(
					attestationCreatorMock.EXPECT().GetGlobal(sdkCtx).Return(fakeGlobal, true),
					attestationCreatorMock.EXPECT().CreatorHasAttestation(sdkCtx, creator, identifierType, identifier).Return(false),
					attestationCreatorMock.EXPECT().SetAttestation(sdkCtx, newAttestationMatcher(
						types.Attestation{
							Index:               fmt.Sprint(nextId),
							Identifier:          identifier,
							IdentifierType:      identifierType,
							Rating:              rating,
							Creator:             creator,
							LastUpdatedAtHeight: height})),
					attestationCreatorMock.EXPECT().SetGlobal(sdkCtx, newIncrementNextId(fakeGlobal)),
				)
			},
		},
		{
			name:                         "Attenpt to create duplicate attestation",
			validateIdentifierTypeResult: nil,
			setupMock: func() {
				gomock.InOrder(
					attestationCreatorMock.EXPECT().GetGlobal(sdkCtx).Return(fakeGlobal, true),
					attestationCreatorMock.EXPECT().CreatorHasAttestation(sdkCtx, creator, identifierType, identifier).Return(true),
				)
			},
		},
		{
			name:                         "Validate identifier type fails",
			validateIdentifierTypeResult: someErr,
			setupMock:                    func() {},
		},
		{
			name:                         "Global not found",
			validateIdentifierTypeResult: nil,
			setupMock: func() {
				attestationCreatorMock.EXPECT().GetGlobal(sdkCtx).Return(types.Global{}, false)
			},
		},
	}
	wants := []struct {
		res *types.MsgCreateAttestationResponse
		err error
	}{
		{
			res: &types.MsgCreateAttestationResponse{IdValue: fmt.Sprint(nextId)},
			err: nil,
		},
		{
			res: nil,
			err: fmt.Errorf("attempt to create duplicate attestation"),
		},
		{
			res: nil,
			err: someErr,
		},
		{
			res: nil,
			err: fmt.Errorf("global state object not found"),
		},
	}

	for i, input := range inputs {
		t.Run(input.name, func(t *testing.T) {
			input.setupMock()
			keeper.ValidateIdentifierType = func(passedCtx sdk.Context, passedIdentifierType string, passedIdentifier string, identifierTypeGetter keeper.IdentifierTypeGetter) error {
				require.Equal(t, sdkCtx, passedCtx)
				require.Equal(t, identifier, passedIdentifier)
				require.Equal(t, identifierType, passedIdentifierType)
				require.Equal(t, attestationCreatorMock, identifierTypeGetter)
				return input.validateIdentifierTypeResult
			}

			res, err := keeper.CreateAttestation(ctx, &msg, attestationCreatorMock)

			require.Equal(t, wants[i].res, res)
			require.Equal(t, wants[i].err, err)
		})
	}
}
