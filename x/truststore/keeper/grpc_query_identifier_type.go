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

func (k Keeper) IdentifierTypeAll(c context.Context, req *types.QueryAllIdentifierTypeRequest) (*types.QueryAllIdentifierTypeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var identifierTypes []types.IdentifierType
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	identifierTypeStore := prefix.NewStore(store, types.KeyPrefix(types.IdentifierTypeKeyPrefix))

	pageRes, err := query.Paginate(identifierTypeStore, req.Pagination, func(key []byte, value []byte) error {
		var identifierType types.IdentifierType
		if err := k.cdc.Unmarshal(value, &identifierType); err != nil {
			return err
		}

		identifierTypes = append(identifierTypes, identifierType)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllIdentifierTypeResponse{IdentifierType: identifierTypes, Pagination: pageRes}, nil
}

func (k Keeper) IdentifierType(c context.Context, req *types.QueryGetIdentifierTypeRequest) (*types.QueryGetIdentifierTypeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetIdentifierType(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetIdentifierTypeResponse{IdentifierType: val}, nil
}
