package truststore_test

import (
	"testing"

	keepertest "github.com/blarsy/truststore/testutil/keeper"
	"github.com/blarsy/truststore/testutil/nullify"
	"github.com/blarsy/truststore/x/truststore"
	"github.com/blarsy/truststore/x/truststore/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		AttestationList: []types.Attestation{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TruststoreKeeper(t)
	truststore.InitGenesis(ctx, *k, genesisState)
	got := truststore.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.AttestationList, got.AttestationList)
	// this line is used by starport scaffolding # genesis/test/assert
}
