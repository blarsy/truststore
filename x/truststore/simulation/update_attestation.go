package simulation

import (
	"math/rand"

	"github.com/blarsy/truststore/x/truststore/keeper"
	"github.com/blarsy/truststore/x/truststore/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgUpdateAttestation(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgUpdateAttestation{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the UpdateAttestation simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "UpdateAttestation simulation not implemented"), nil, nil
	}
}
