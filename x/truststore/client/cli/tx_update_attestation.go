package cli

import (
	"strconv"

	"github.com/blarsy/truststore/x/truststore/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdUpdateAttestation() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-attestation [index] [identifier] [identifier-type] [rating]",
		Short: "Broadcast message UpdateAttestation",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argIndex := args[0]
			argIdentifier := args[1]
			argIdentifierType := args[2]
			argRating, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateAttestation(
				clientCtx.GetFromAddress().String(),
				argIndex,
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
