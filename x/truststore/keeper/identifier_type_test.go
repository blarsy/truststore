package keeper_test

import (
	"strconv"
	"testing"

	keepertest "github.com/blarsy/truststore/testutil/keeper"
	"github.com/blarsy/truststore/testutil/nullify"
	"github.com/blarsy/truststore/x/truststore/keeper"
	"github.com/blarsy/truststore/x/truststore/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNIdentifierType(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.IdentifierType {
	items := make([]types.IdentifierType, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetIdentifierType(ctx, items[i])
	}
	return items
}

func TestIdentifierTypeGet(t *testing.T) {
	keeper, ctx := keepertest.TruststoreKeeper(t)
	items := createNIdentifierType(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetIdentifierType(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestIdentifierTypeRemove(t *testing.T) {
	keeper, ctx := keepertest.TruststoreKeeper(t)
	items := createNIdentifierType(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveIdentifierType(ctx,
			item.Index,
		)
		_, found := keeper.GetIdentifierType(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestIdentifierTypeGetAll(t *testing.T) {
	keeper, ctx := keepertest.TruststoreKeeper(t)
	items := createNIdentifierType(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllIdentifierType(ctx)),
	)
}
