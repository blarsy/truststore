package keeper

import (
	"github.com/blarsy/truststore/x/truststore/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetGlobal set global in the store
func (k Keeper) SetGlobal(ctx sdk.Context, global types.Global) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GlobalKey))
	b := k.cdc.MustMarshal(&global)
	store.Set([]byte{0}, b)
}

// GetGlobal returns global
func (k Keeper) GetGlobal(ctx sdk.Context) (val types.Global, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GlobalKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveGlobal removes global from the store
func (k Keeper) RemoveGlobal(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GlobalKey))
	store.Delete([]byte{0})
}
