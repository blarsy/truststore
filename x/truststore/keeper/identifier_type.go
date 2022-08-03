package keeper

import (
	"github.com/blarsy/truststore/x/truststore/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetIdentifierType set a specific identifierType in the store from its index
func (k Keeper) SetIdentifierType(ctx sdk.Context, identifierType types.IdentifierType) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IdentifierTypeKeyPrefix))
	b := k.cdc.MustMarshal(&identifierType)
	store.Set(types.IdentifierTypeKey(
		identifierType.Index,
	), b)
}

// GetIdentifierType returns a identifierType from its index
func (k Keeper) GetIdentifierType(
	ctx sdk.Context,
	index string,

) (val types.IdentifierType, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IdentifierTypeKeyPrefix))

	b := store.Get(types.IdentifierTypeKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveIdentifierType removes a identifierType from the store
func (k Keeper) RemoveIdentifierType(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IdentifierTypeKeyPrefix))
	store.Delete(types.IdentifierTypeKey(
		index,
	))
}

// GetAllIdentifierType returns all identifierType
func (k Keeper) GetAllIdentifierType(ctx sdk.Context) (list []types.IdentifierType) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IdentifierTypeKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.IdentifierType
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
