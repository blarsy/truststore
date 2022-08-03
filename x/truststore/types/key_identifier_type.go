package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// IdentifierTypeKeyPrefix is the prefix to retrieve all IdentifierType
	IdentifierTypeKeyPrefix = "IdentifierType/value/"
)

// IdentifierTypeKey returns the store key to retrieve a IdentifierType from the index fields
func IdentifierTypeKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
