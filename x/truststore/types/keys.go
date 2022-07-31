package types

const (
	// ModuleName defines the module name
	ModuleName = "truststore"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_truststore"

	NewId          = "new_id"
	AttestationKey = "Attestation-value-"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
