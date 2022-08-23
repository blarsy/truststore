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

	// Store the index of the attestation in a separate kvStore, that then acts as an index to
	// quicken queries by creator
	storeIndexedByCreator := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AttestationByCreatorKeyPrefix))
	var itemToStore types.Ids
	creatorBytes := []byte(attestation.Creator)
	attestationsByCreator := storeIndexedByCreator.Get(creatorBytes)
	if attestationsByCreator == nil {
		itemToStore = types.Ids{Indexes: []string{attestation.Index}}
	} else {
		k.cdc.MustUnmarshal(attestationsByCreator, &itemToStore)
		itemToStore.Indexes = append(itemToStore.Indexes, attestation.Index)
	}

	b = k.cdc.MustMarshal(&itemToStore)
	storeIndexedByCreator.Set(creatorBytes, b)
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

func (k Keeper) GetAttestationsByCreator(ctx sdk.Context, creator string) (list []types.Attestation) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AttestationKeyPrefix))
	storeIndexedByCreator := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AttestationByCreatorKeyPrefix))
	b := storeIndexedByCreator.Get([]byte(creator))
	indexes := types.Ids{}
	k.cdc.MustUnmarshal(b, &indexes)

	for _, index := range indexes.Indexes {
		attestation := types.Attestation{}
		attestationBytes := store.Get(types.AttestationKey(
			index,
		))
		k.cdc.MustUnmarshal(attestationBytes, &attestation)
		list = append(list, attestation)
	}

	return
}
