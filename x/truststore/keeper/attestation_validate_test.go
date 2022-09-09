package keeper_test

import (
	"fmt"
	"testing"

	mocks "github.com/blarsy/truststore/mocks/keeper"
	keepertest "github.com/blarsy/truststore/testutil/keeper"
	keeper "github.com/blarsy/truststore/x/truststore/keeper"
	"github.com/blarsy/truststore/x/truststore/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/require"
)

func TestValidateIdentifierType(t *testing.T) {
	ctrl := gomock.NewController(t)
	ctx := keepertest.GetFakeCtx()
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

			require.Equal(t, wants[i], keeper.ValidateIdentifierType(sdkCtx, input.identifierType, input.identifier, idtGetter))
		})
	}
}

func TestValidateUpdate(t *testing.T) {
	creator, identifier, identifierType := "creator", "id", "idType"
	inputs := []struct {
		name     string
		msg      *types.MsgUpdateAttestation
		existing *types.Attestation
	}{
		{name: "Happy path",
			msg: &types.MsgUpdateAttestation{
				Creator:        creator,
				Identifier:     identifier,
				IdentifierType: identifierType,
			},
			existing: &types.Attestation{
				Creator:        creator,
				Identifier:     identifier,
				IdentifierType: identifierType,
			}},
		{name: "Cannot change identifier type",
			msg: &types.MsgUpdateAttestation{
				Creator:        creator,
				Identifier:     identifier,
				IdentifierType: identifierType,
			},
			existing: &types.Attestation{
				Creator:        creator,
				Identifier:     identifier,
				IdentifierType: "othervalue",
			}},
		{name: "Cannot change identifier",
			msg: &types.MsgUpdateAttestation{
				Creator:        creator,
				Identifier:     identifier,
				IdentifierType: identifierType,
			},
			existing: &types.Attestation{
				Creator:        creator,
				Identifier:     "othervalue",
				IdentifierType: identifierType,
			}},
		{name: "Only creator can change attestation",
			msg: &types.MsgUpdateAttestation{
				Creator:        creator,
				Identifier:     identifier,
				IdentifierType: identifierType,
			},
			existing: &types.Attestation{
				Creator:        "othervalue",
				Identifier:     identifier,
				IdentifierType: identifierType,
			}},
	}
	wants := []string{
		"",
		"identifier type cannot be changed, please create another attestation instead",
		"identifier cannot be changed, please create another attestation instead",
		"unauthorized",
	}
	for i, input := range inputs {
		t.Run(input.name, func(t *testing.T) {
			result := keeper.ValidateUpdate(input.msg, input.existing)
			if wants[i] == "" {
				require.Nil(t, result)
			} else {
				require.Equal(t, wants[i], result.Error())
			}
		})
	}
}

func TestValidateCorrection(t *testing.T) {
	creator := "creator"
	ctx := sdk.UnwrapSDKContext(keepertest.GetFakeCtx())
	keeperObj := keeper.Keeper{}
	someErr := fmt.Errorf("Some error")

	inputs := []struct {
		name     string
		msg      *types.MsgUpdateAttestation
		existing *types.Attestation
	}{
		{name: "Happy path",
			msg: &types.MsgUpdateAttestation{
				Creator: creator,
			},
			existing: &types.Attestation{
				Creator: creator,
			}},
		{name: "Only creator can change attestation",
			msg: &types.MsgUpdateAttestation{
				Creator: creator,
			},
			existing: &types.Attestation{
				Creator: "othervalue",
			}},
	}
	wants := []string{
		"",
		"unauthorized",
	}
	for i, input := range inputs {
		t.Run(input.name, func(t *testing.T) {
			keeper.ValidateIdentifierType = func(passedCtx sdk.Context, identifierType, identifier string, passedKeeper keeper.IdentifierTypeGetter) error {
				require.Equal(t, ctx, passedCtx)
				require.Equal(t, keeperObj, passedKeeper)
				return someErr
			}

			result := keeper.ValidateCorrection(ctx, input.msg, input.existing, keeperObj)
			if wants[i] == "" {
				require.Equal(t, result, someErr)
			} else {
				require.Equal(t, wants[i], result.Error())
			}
		})
	}
}
