package keeper

import (
	"github.com/blarsy/truststore/x/truststore/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetAttestation set a specific attestation in the store from its index
func (k Keeper) SetAttestation(ctx sdk.Context, attestation types.Attestation) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AttestationKeyPrefix))
	b := k.cdc.MustMarshal(&attestation)
	store.Set(types.AttestationKey(
		attestation.Index,
	), b)
}

// GetAttestation returns a attestation from its index
func (k Keeper) GetAttestation(
	ctx sdk.Context,
	index string,

) (val types.Attestation, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AttestationKeyPrefix))

	b := store.Get(types.AttestationKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveAttestation removes a attestation from the store
func (k Keeper) RemoveAttestation(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AttestationKeyPrefix))
	store.Delete(types.AttestationKey(
		index,
	))
}

// GetAllAttestation returns all attestation
func (k Keeper) GetAllAttestation(ctx sdk.Context) (list []types.Attestation) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AttestationKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Attestation
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
