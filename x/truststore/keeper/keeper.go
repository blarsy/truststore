package keeper

import (
	"encoding/binary"
	"fmt"

	"github.com/tendermint/tendermint/libs/log"

	"github.com/blarsy/truststore/x/truststore/types"
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
)

type (
	Keeper struct {
		cdc        codec.BinaryCodec
		storeKey   sdk.StoreKey
		memKey     sdk.StoreKey
		paramstore paramtypes.Subspace
	}
)

func NewKeeper(
	cdc codec.BinaryCodec,
	storeKey,
	memKey sdk.StoreKey,
	ps paramtypes.Subspace,

) *Keeper {
	// set KeyTable if it has not already been set
	if !ps.HasKeyTable() {
		ps = ps.WithKeyTable(types.ParamKeyTable())
	}

	return &Keeper{

		cdc:        cdc,
		storeKey:   storeKey,
		memKey:     memKey,
		paramstore: ps,
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}

func (k Keeper) GetNextId(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NewId))

	nextId := store.Get(types.KeyPrefix(types.AttestationKey))
	if nextId == nil {
		return 0
	}

	return binary.BigEndian.Uint64(nextId)
}

func (k Keeper) SetNextId(ctx sdk.Context, newNextId uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NewId))

	// Convert count from uint64 to string and get bytes
	nextId := make([]byte, 8)
	binary.BigEndian.PutUint64(nextId, newNextId)

	// Set the value of Post-count- to count
	store.Set(types.KeyPrefix(types.AttestationKey), nextId)
}
