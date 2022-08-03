package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/blarsy/truststore/testutil/keeper"
	"github.com/blarsy/truststore/testutil/nullify"
	"github.com/blarsy/truststore/x/truststore/keeper"
	"github.com/blarsy/truststore/x/truststore/types"
)

func createTestGlobal(keeper *keeper.Keeper, ctx sdk.Context) types.Global {
	item := types.Global{}
	keeper.SetGlobal(ctx, item)
	return item
}

func TestGlobalGet(t *testing.T) {
	keeper, ctx := keepertest.TruststoreKeeper(t)
	item := createTestGlobal(keeper, ctx)
	rst, found := keeper.GetGlobal(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestGlobalRemove(t *testing.T) {
	keeper, ctx := keepertest.TruststoreKeeper(t)
	createTestGlobal(keeper, ctx)
	keeper.RemoveGlobal(ctx)
	_, found := keeper.GetGlobal(ctx)
	require.False(t, found)
}
