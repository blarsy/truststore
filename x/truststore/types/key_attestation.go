package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// AttestationKeyPrefix is the prefix to retrieve all Attestation
	AttestationKeyPrefix = "Attestation/value/"
)

// AttestationKey returns the store key to retrieve a Attestation from the index fields
func AttestationKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
