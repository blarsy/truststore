package keeper

import (
	"context"

	"github.com/blarsy/truststore/x/truststore/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateAttestation(goCtx context.Context, msg *types.MsgCreateAttestation) (*types.MsgCreateAttestationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateAttestationResponse{}, nil
}
