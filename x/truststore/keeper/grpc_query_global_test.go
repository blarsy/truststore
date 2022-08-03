package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/blarsy/truststore/testutil/keeper"
	"github.com/blarsy/truststore/testutil/nullify"
	"github.com/blarsy/truststore/x/truststore/types"
)

func TestGlobalQuery(t *testing.T) {
	keeper, ctx := keepertest.TruststoreKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestGlobal(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetGlobalRequest
		response *types.QueryGetGlobalResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetGlobalRequest{},
			response: &types.QueryGetGlobalResponse{Global: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Global(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
