package keeper

import (
	"context"

	"github.com/blarsy/truststore/x/truststore/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) AttestationByCreator(goCtx context.Context, req *types.QueryAttestationByCreatorRequest) (*types.QueryAttestationByCreatorResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	attestationsByUser := k.GetAttestationsByCreator(ctx, req.Creator)
	var result []*types.Attestation
	for i := range attestationsByUser {
		result = append(result, &attestationsByUser[i])
	}

	return &types.QueryAttestationByCreatorResponse{Attestations: result}, nil
}
