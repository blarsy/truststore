package keeper

import (
	"context"

	"github.com/blarsy/truststore/x/truststore/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) AttestationAll(c context.Context, req *types.QueryAllAttestationRequest) (*types.QueryAllAttestationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var attestations []types.Attestation
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	attestationStore := prefix.NewStore(store, types.KeyPrefix(types.AttestationKeyPrefix))

	pageRes, err := query.Paginate(attestationStore, req.Pagination, func(key []byte, value []byte) error {
		var attestation types.Attestation
		if err := k.cdc.Unmarshal(value, &attestation); err != nil {
			return err
		}

		attestations = append(attestations, attestation)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAttestationResponse{Attestation: attestations, Pagination: pageRes}, nil
}

func (k Keeper) Attestation(c context.Context, req *types.QueryGetAttestationRequest) (*types.QueryGetAttestationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetAttestation(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetAttestationResponse{Attestation: val}, nil
}
