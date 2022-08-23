package cli

import (
	"strconv"

	"github.com/blarsy/truststore/x/truststore/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdAttestationByCreatorIdentifier() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "attestation-by-creator-identifier [creator] [identifier-type] [identifier]",
		Short: "Query AttestationByCreatorIdentifier",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqCreator := args[0]
			reqIdentifierType := args[1]
			reqIdentifier := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAttestationByCreatorIdentifierRequest{

				Creator:        reqCreator,
				IdentifierType: reqIdentifierType,
				Identifier:     reqIdentifier,
			}

			res, err := queryClient.AttestationByCreatorIdentifier(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
