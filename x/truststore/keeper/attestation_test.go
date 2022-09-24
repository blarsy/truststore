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

func createNAttestation(keeper *keeper.Keeper, ctx sdk.Context, creator string, n int) []types.Attestation {
	items := make([]types.Attestation, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)
		items[i].Creator = creator

		keeper.SetAttestation(ctx, items[i])
	}
	return items
}

func TestAttestationGet(t *testing.T) {
	keeper, ctx := keepertest.TruststoreKeeper(t)
	items := createNAttestation(keeper, ctx, "creator", 10)
	for _, item := range items {
		rst, found := keeper.GetAttestation(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestAttestationRemove(t *testing.T) {
	keeper, ctx := keepertest.TruststoreKeeper(t)
	creator := "creator"
	items := createNAttestation(keeper, ctx, creator, 10)

	for _, item := range items {
		keeper.RemoveAttestation(ctx,
			item.Index,
		)
		_, found := keeper.GetAttestation(ctx,
			item.Index,
		)
		require.False(t, found)
		attestationsForCreator := keeper.GetAttestationsByCreator(ctx, creator)
		for _, attestation := range attestationsForCreator {
			require.False(t, item.Index == attestation.Index)
		}
	}
}

func TestAttestationGetAll(t *testing.T) {
	keeper, ctx := keepertest.TruststoreKeeper(t)
	items := createNAttestation(keeper, ctx, "creator", 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllAttestation(ctx)),
	)
}

func TestAttestationGetByCreator(t *testing.T) {
	keeper, ctx := keepertest.TruststoreKeeper(t)
	keeper.SetAttestation(ctx, types.Attestation{Index: "1", Creator: "abc"})
	keeper.SetAttestation(ctx, types.Attestation{Index: "2", Creator: "def"})
	keeper.SetAttestation(ctx, types.Attestation{Index: "3", Creator: "abc"})

	result := keeper.GetAttestationsByCreator(ctx, "abc")
	require.Equal(t, "1", result[0].Index)
	require.Equal(t, "3", result[1].Index)
}

func TestCreatorHasAttestation(t *testing.T) {
	keeper, ctx := keepertest.TruststoreKeeper(t)
	creator, identifier, identifierType := "creator", "id", "idType"
	keeper.SetAttestation(ctx, types.Attestation{
		Index: "1", Identifier: identifier,
		Creator: creator, IdentifierType: identifierType})

	require.True(t, keeper.CreatorHasAttestation(ctx, creator, identifierType, identifier))
	require.False(t, keeper.CreatorHasAttestation(ctx, creator, identifierType, "other"))
	require.False(t, keeper.CreatorHasAttestation(ctx, creator, "other", identifier))
}
