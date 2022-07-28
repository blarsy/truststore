package keeper_test

import (
	"testing"

	testkeeper "github.com/blarsy/truststore/testutil/keeper"
	"github.com/blarsy/truststore/x/truststore/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.TruststoreKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
