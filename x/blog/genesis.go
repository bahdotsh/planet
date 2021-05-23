package blog

import (
	"github.com/app/planet/x/blog/keeper"
	"github.com/app/planet/x/blog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the timedoutPost
	for _, elem := range genState.TimedoutPostList {
		k.SetTimedoutPost(ctx, *elem)
	}

	// Set timedoutPost count
	k.SetTimedoutPostCount(ctx, uint64(len(genState.TimedoutPostList)))

	// Set all the sentPost
	for _, elem := range genState.SentPostList {
		k.SetSentPost(ctx, *elem)
	}

	// Set sentPost count
	k.SetSentPostCount(ctx, uint64(len(genState.SentPostList)))

	// Set all the post
	for _, elem := range genState.PostList {
		k.SetPost(ctx, *elem)
	}

	// Set post count
	k.SetPostCount(ctx, uint64(len(genState.PostList)))

	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all timedoutPost
	timedoutPostList := k.GetAllTimedoutPost(ctx)
	for _, elem := range timedoutPostList {
		elem := elem
		genesis.TimedoutPostList = append(genesis.TimedoutPostList, &elem)
	}

	// Get all sentPost
	sentPostList := k.GetAllSentPost(ctx)
	for _, elem := range sentPostList {
		elem := elem
		genesis.SentPostList = append(genesis.SentPostList, &elem)
	}

	// Get all post
	postList := k.GetAllPost(ctx)
	for _, elem := range postList {
		elem := elem
		genesis.PostList = append(genesis.PostList, &elem)
	}

	genesis.PortId = k.GetPort(ctx)

	return genesis
}
