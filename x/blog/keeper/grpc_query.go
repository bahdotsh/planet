package keeper

import (
	"github.com/app/planet/x/blog/types"
)

var _ types.QueryServer = Keeper{}
