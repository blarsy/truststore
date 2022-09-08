package keeper

import (
	"context"
	"fmt"
	"testing"

	mocks "github.com/blarsy/truststore/mocks/keeper"
	"github.com/blarsy/truststore/x/truststore/types"
	"github.com/cosmos/cosmos-sdk/codec"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	"github.com/cosmos/cosmos-sdk/store"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	typesparams "github.com/cosmos/cosmos-sdk/x/params/types"
	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/require"
	"github.com/tendermint/tendermint/libs/log"
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"
	tmdb "github.com/tendermint/tm-db"
)

func GetFakeCtx() context.Context {
	return GetFakeCtxWithHeight(int64(1))
}

func GetFakeCtxWithHeight(height int64) context.Context {
	storeKey := sdk.NewKVStoreKey(types.StoreKey)
	memStoreKey := storetypes.NewMemoryStoreKey(types.MemStoreKey)

	db := tmdb.NewMemDB()
	stateStore := store.NewCommitMultiStore(db)
	stateStore.MountStoreWithDB(storeKey, sdk.StoreTypeIAVL, db)
	stateStore.MountStoreWithDB(memStoreKey, sdk.StoreTypeMemory, nil)

	sdkContext := sdk.NewContext(stateStore, tmproto.Header{Height: height}, false, log.NewNopLogger())
	return sdk.WrapSDKContext(sdkContext)
}

func GetTestKeeper(ctx sdk.Context) *Keeper {
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
	k := NewKeeper(
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
	ctx := GetFakeCtxWithHeight(height)
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
			ValidateIdentifierType = func(passedCtx sdk.Context, passedIdentifierType string, passedIdentifier string, identifierTypeGetter IdentifierTypeGetter) error {
				require.Equal(t, sdkCtx, passedCtx)
				require.Equal(t, identifier, passedIdentifier)
				require.Equal(t, identifierType, passedIdentifierType)
				require.Equal(t, attestationCreatorMock, identifierTypeGetter)
				return input.validateIdentifierTypeResult
			}

			res, err := CreateAttestation(ctx, &msg, attestationCreatorMock)

			require.Equal(t, wants[i].res, res)
			require.Equal(t, wants[i].err, err)
		})
	}
}

func TestValidateIdentifierType(t *testing.T) {
	ctrl := gomock.NewController(t)
	ctx := GetFakeCtx()
	sdkCtx := sdk.UnwrapSDKContext(ctx)
	//identifier, identifierType := "identifier", "identifierType"
	idtGetter := mocks.NewMockIdentifierTypeGetter(ctrl)

	inputs := []struct {
		name              string
		identifierType    string
		identifier        string
		identifierTypeObj *types.IdentifierType
	}{
		{name: "Happy path email", identifierType: "1", identifier: "me@me.com", identifierTypeObj: &types.IdentifierType{Index: "1"}},
		{name: "Invalid email", identifierType: "1", identifier: "me@.com", identifierTypeObj: &types.IdentifierType{Index: "1"}},
		{name: "Happy path twitter", identifierType: "2", identifier: "@theman", identifierTypeObj: &types.IdentifierType{Index: "2"}},
		{name: "Invalid twitter handle", identifierType: "2", identifier: "theman", identifierTypeObj: &types.IdentifierType{Index: "2"}},
		{name: "Happy path twitter", identifierType: "3", identifier: "1234567890", identifierTypeObj: &types.IdentifierType{Index: "3"}},
		{name: "Invalid twitter handle", identifierType: "3", identifier: "12345.56789", identifierTypeObj: &types.IdentifierType{Index: "3"}},
		{name: "Happy path mobile number", identifierType: "4", identifier: "+32499123456", identifierTypeObj: &types.IdentifierType{Index: "4"}},
		{name: "Invalid mobile number", identifierType: "4", identifier: "+12345", identifierTypeObj: &types.IdentifierType{Index: "4"}},
		{name: "Unknown identifier type", identifierType: "32", identifier: "whatever", identifierTypeObj: &types.IdentifierType{Index: "32"}},
		{name: "Identifier type not found", identifierType: "12", identifier: "whatever", identifierTypeObj: nil},
	}
	wants := []error{
		nil,
		fmt.Errorf("mail: no angle-addr"),
		nil,
		fmt.Errorf("invalid Twitter handle format"),
		nil,
		fmt.Errorf("invalid Facebook user id format"),
		nil,
		fmt.Errorf("invalid mobile phone number format"),
		fmt.Errorf("don't know how to validate identifier type 32"),
		fmt.Errorf("identifier type with index 12 not found"),
	}
	for i, input := range inputs {
		t.Run(input.name, func(t *testing.T) {
			var identifierTypeObj types.IdentifierType
			if input.identifierTypeObj == nil {
				identifierTypeObj = types.IdentifierType{}
			} else {
				identifierTypeObj = *input.identifierTypeObj
			}
			idtGetter.EXPECT().GetIdentifierType(sdkCtx, input.identifierType).Return(identifierTypeObj, input.identifierTypeObj != nil)

			require.Equal(t, wants[i], ValidateIdentifierType(sdkCtx, input.identifierType, input.identifier, idtGetter))
		})
	}
}
