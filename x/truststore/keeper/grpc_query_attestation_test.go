package keeper_test

import (
	"strconv"
	"strings"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/blarsy/truststore/testutil/keeper"
	"github.com/blarsy/truststore/testutil/nullify"
	"github.com/blarsy/truststore/x/truststore/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestAttestationQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.TruststoreKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNAttestation(keeper, ctx, "creator", 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetAttestationRequest
		response *types.QueryGetAttestationResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetAttestationRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetAttestationResponse{Attestation: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetAttestationRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetAttestationResponse{Attestation: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetAttestationRequest{
				Index: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Attestation(wctx, tc.request)
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

func TestAttestationQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.TruststoreKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNAttestation(keeper, ctx, "creator", 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllAttestationRequest {
		return &types.QueryAllAttestationRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.AttestationAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Attestation), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Attestation),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.AttestationAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Attestation), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Attestation),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.AttestationAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Attestation),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.AttestationAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}

func TestAttestationQueryByCreatorIdentifier(t *testing.T) {
	keeper, ctx := keepertest.TruststoreKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)

	attestations := []types.Attestation{
		{
			Index:          "1",
			Creator:        "c1",
			IdentifierType: "1",
			Identifier:     "Id1",
		}, {

			Index:          "2",
			Creator:        "c2",
			IdentifierType: "2",
			Identifier:     "Id2",
		},
	}
	for _, attestation := range attestations {
		keeper.SetAttestation(ctx, attestation)
	}

	t.Run("Gets the first", func(t *testing.T) {
		res, err := keeper.AttestationByCreatorIdentifier(wctx, &types.QueryAttestationByCreatorIdentifierRequest{
			Creator:        "c1",
			IdentifierType: "1",
			Identifier:     "Id1",
		})
		require.Nil(t, err)
		require.Equal(t, "1", res.Attestation.Index)
	})
	t.Run("Gets the second", func(t *testing.T) {
		res, err := keeper.AttestationByCreatorIdentifier(wctx, &types.QueryAttestationByCreatorIdentifierRequest{
			Creator:        "c2",
			IdentifierType: "2",
			Identifier:     "Id2",
		})
		require.Nil(t, err)
		require.Equal(t, "2", res.Attestation.Index)
	})
	t.Run("Invalid requast", func(t *testing.T) {
		res, err := keeper.AttestationByCreatorIdentifier(wctx, nil)
		require.Nil(t, res)
		require.True(t, strings.Contains(err.Error(), "invalid request"))
	})
	t.Run("Not found", func(t *testing.T) {
		res, err := keeper.AttestationByCreatorIdentifier(wctx, &types.QueryAttestationByCreatorIdentifierRequest{
			Creator:        "doesnotexist",
			IdentifierType: "2",
			Identifier:     "Id2",
		})
		require.Nil(t, res)
		require.True(t, strings.Contains(err.Error(), "no attestation found matching the provided arguments"))
	})
}

func TestAttestationQueryByCreator(t *testing.T) {
	keeper, ctx := keepertest.TruststoreKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)

	attestations := []types.Attestation{
		{
			Index:          "1",
			Creator:        "c1",
			IdentifierType: "1",
			Identifier:     "Id1",
		}, {

			Index:          "2",
			Creator:        "c2",
			IdentifierType: "2",
			Identifier:     "Id2",
		}, {

			Index:          "3",
			Creator:        "c1",
			IdentifierType: "3",
			Identifier:     "Id3",
		},
	}
	for _, attestation := range attestations {
		keeper.SetAttestation(ctx, attestation)
	}

	t.Run("Gets several results", func(t *testing.T) {
		res, err := keeper.AttestationByCreator(wctx, &types.QueryAttestationByCreatorRequest{
			Creator: "c1",
		})
		require.Nil(t, err)
		require.Equal(t, 2, len(res.Attestations))
		require.Equal(t, "1", res.Attestations[0].Index)
		require.Equal(t, "3", res.Attestations[1].Index)

	})
	t.Run("Gets one result as list of 1 item", func(t *testing.T) {
		res, err := keeper.AttestationByCreator(wctx, &types.QueryAttestationByCreatorRequest{
			Creator: "c2",
		})
		require.Nil(t, err)
		require.Equal(t, 1, len(res.Attestations))
		require.Equal(t, "2", res.Attestations[0].Index)
	})
	t.Run("Invalid requast", func(t *testing.T) {
		res, err := keeper.AttestationByCreator(wctx, nil)
		require.Nil(t, res)
		require.True(t, strings.Contains(err.Error(), "invalid request"))
	})
	t.Run("Not found", func(t *testing.T) {
		res, err := keeper.AttestationByCreator(wctx, &types.QueryAttestationByCreatorRequest{
			Creator: "doesnotexist",
		})
		require.Nil(t, err)
		require.Equal(t, 0, len(res.Attestations))
	})
}
