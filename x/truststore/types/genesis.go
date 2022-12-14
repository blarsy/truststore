package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		AttestationList:    []Attestation{},
		IdentifierTypeList: []IdentifierType{},
		Global:             &Global{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in attestation
	attestationIndexMap := make(map[string]struct{})

	for _, elem := range gs.AttestationList {
		index := string(AttestationKey(elem.Index))
		if _, ok := attestationIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for attestation")
		}
		attestationIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in identifierType
	identifierTypeIndexMap := make(map[string]struct{})

	for _, elem := range gs.IdentifierTypeList {
		index := string(IdentifierTypeKey(elem.Index))
		if _, ok := identifierTypeIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for identifierType")
		}
		identifierTypeIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
