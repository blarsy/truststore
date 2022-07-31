package cli

import (
	"strconv"

	"github.com/blarsy/truststore/x/truststore/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCreateAttestation() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-attestation [identifier] [identifier-type] [rating]",
		Short: "Creates an attestation of the integrity of the person identified by the provided identifier",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argIdentifier := args[0]
			argIdentifierType := args[1]
			argRating := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateAttestation(
				clientCtx.GetFromAddress().String(),
				argIdentifier,
				argIdentifierType,
				argRating,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
