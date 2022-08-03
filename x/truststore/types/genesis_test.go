package types_test

import (
	"testing"

	"github.com/blarsy/truststore/x/truststore/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				AttestationList: []types.Attestation{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				IdentifierTypeList: []types.IdentifierType{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				Global: &types.Global{
					NextId: 88,
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated attestation",
			genState: &types.GenesisState{
				AttestationList: []types.Attestation{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated identifierType",
			genState: &types.GenesisState{
				IdentifierTypeList: []types.IdentifierType{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
