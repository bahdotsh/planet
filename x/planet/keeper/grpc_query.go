package keeper

import (
	"github.com/app/planet/x/planet/types"
)

var _ types.QueryServer = Keeper{}
