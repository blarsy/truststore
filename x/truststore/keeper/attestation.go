package keeper

import (
	"github.com/blarsy/truststore/x/truststore/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) AppendAttestation(ctx sdk.Context, createMsg types.MsgCreateAttestation) uint64 {
	nextId := k.GetNextId(ctx)

	
}
