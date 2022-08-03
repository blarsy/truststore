package truststore

import (
	"github.com/blarsy/truststore/x/truststore/keeper"
	"github.com/blarsy/truststore/x/truststore/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the attestation
	for _, elem := range genState.AttestationList {
		k.SetAttestation(ctx, elem)
	}
	// Set all the identifierType
	for _, elem := range genState.IdentifierTypeList {
		k.SetIdentifierType(ctx, elem)
	}
	// Set if defined
	if genState.Global != nil {
		k.SetGlobal(ctx, *genState.Global)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.AttestationList = k.GetAllAttestation(ctx)
	genesis.IdentifierTypeList = k.GetAllIdentifierType(ctx)
	// Get all global
	global, found := k.GetGlobal(ctx)
	if found {
		genesis.Global = &global
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
