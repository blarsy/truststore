package keeper

import (
	"context"
	"fmt"

	"github.com/blarsy/truststore/x/truststore/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

type IdentifierTypeGetter interface {
	GetIdentifierType(sdk.Context, string) (types.IdentifierType, bool)
}

func (k msgServer) CreateAttestation(goCtx context.Context, msg *types.MsgCreateAttestation) (*types.MsgCreateAttestationResponse, error) {
	return CreateAttestation(goCtx, msg, k)
}

type AttestationCreator interface {
	GetGlobal(sdk.Context) (types.Global, bool)
	SetGlobal(sdk.Context, types.Global)
	SetAttestation(sdk.Context, types.Attestation)
	GetIdentifierType(sdk.Context, string) (types.IdentifierType, bool)
}

func CreateAttestation(goCtx context.Context, msg *types.MsgCreateAttestation, attestationCreator AttestationCreator) (*types.MsgCreateAttestationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	err := ValidateIdentifierType(ctx, msg.IdentifierType, msg.Identifier, attestationCreator)
	if err != nil {
		return nil, err
	}

	global, found := attestationCreator.GetGlobal(ctx)
	if !found {
		return nil, fmt.Errorf("global state object not found")
	}

	attestation := types.Attestation{
		Index:               fmt.Sprint(global.NextId),
		Identifier:          msg.Identifier,
		IdentifierType:      msg.IdentifierType,
		Rating:              msg.Rating,
		Creator:             msg.Creator,
		LastUpdatedAtHeight: ctx.BlockHeight(),
	}

	global.NextId += 1
	attestationCreator.SetAttestation(ctx, attestation)
	attestationCreator.SetGlobal(ctx, global)

	return &types.MsgCreateAttestationResponse{IdValue: attestation.Index}, nil
}
