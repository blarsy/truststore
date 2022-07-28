package keeper

import (
	"github.com/blarsy/truststore/x/truststore/types"
)

var _ types.QueryServer = Keeper{}
