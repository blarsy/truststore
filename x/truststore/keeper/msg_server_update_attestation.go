package keeper

import (
	"context"
	"fmt"

	"github.com/blarsy/truststore/x/truststore/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) UpdateAttestation(goCtx context.Context, msg *types.MsgUpdateAttestation) (*types.MsgUpdateAttestationResponse, error) {
	return UpdateAttestation(goCtx, msg, k)
}

type AttestationUpdater interface {
	SetAttestation(sdk.Context, types.Attestation)
	GetIdentifierType(sdk.Context, string) (types.IdentifierType, bool)
	GetParams(ctx sdk.Context) types.Params
	GetAttestation(ctx sdk.Context, index string) (val types.Attestation, found bool)
}

func UpdateAttestation(goCtx context.Context, msg *types.MsgUpdateAttestation, k AttestationUpdater) (*types.MsgUpdateAttestationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	currentHeight := ctx.BlockHeight()
	params := k.GetParams(ctx)
	if currentAttestationData, found := k.GetAttestation(ctx, msg.Index); found {
		if currentAttestationData.LastUpdatedAtHeight+int64(params.AttestationRewardlessUpdatePeriod) < ctx.BlockHeight() {
			if err := ValidateCorrection(ctx, msg, &currentAttestationData, k); err != nil {
				return nil, err
			}
		} else {
			if err := ValidateUpdate(msg, &currentAttestationData); err != nil {
				return nil, err
			}
		}
	} else {
		return nil, fmt.Errorf(`no attestation found with provided index`)
	}

	k.SetAttestation(ctx, types.Attestation{
		Index:               msg.Index,
		Identifier:          msg.Identifier,
		IdentifierType:      msg.IdentifierType,
		Rating:              msg.Rating,
		LastUpdatedAtHeight: currentHeight,
	})

	return &types.MsgUpdateAttestationResponse{}, nil
}
