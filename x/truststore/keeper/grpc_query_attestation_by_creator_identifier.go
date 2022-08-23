package keeper

import (
	"context"

	"github.com/blarsy/truststore/x/truststore/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) AttestationByCreatorIdentifier(goCtx context.Context, req *types.QueryAttestationByCreatorIdentifierRequest) (*types.QueryAttestationByCreatorIdentifierResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	attestationsByUser := k.GetAttestationsByCreator(ctx, req.Creator)

	for _, attestation := range attestationsByUser {
		if attestation.IdentifierType == req.IdentifierType && attestation.Identifier == req.Identifier {
			return &types.QueryAttestationByCreatorIdentifierResponse{Attestation: &attestation}, nil
		}
	}

	return nil, status.Error(codes.NotFound, "no attestation found matching the provided arguments")
}
