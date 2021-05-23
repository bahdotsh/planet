package keeper

import (
	"context"
	"fmt"

	"github.com/app/planet/x/blog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateTimedoutPost(goCtx context.Context, msg *types.MsgCreateTimedoutPost) (*types.MsgCreateTimedoutPostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendTimedoutPost(
		ctx,
		msg.Creator,
		msg.Title,
		msg.Chain,
	)

	return &types.MsgCreateTimedoutPostResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateTimedoutPost(goCtx context.Context, msg *types.MsgUpdateTimedoutPost) (*types.MsgUpdateTimedoutPostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var timedoutPost = types.TimedoutPost{
		Creator: msg.Creator,
		Id:      msg.Id,
		Title:   msg.Title,
		Chain:   msg.Chain,
	}

	// Checks that the element exists
	if !k.HasTimedoutPost(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetTimedoutPostOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetTimedoutPost(ctx, timedoutPost)

	return &types.MsgUpdateTimedoutPostResponse{}, nil
}

func (k msgServer) DeleteTimedoutPost(goCtx context.Context, msg *types.MsgDeleteTimedoutPost) (*types.MsgDeleteTimedoutPostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasTimedoutPost(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetTimedoutPostOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveTimedoutPost(ctx, msg.Id)

	return &types.MsgDeleteTimedoutPostResponse{}, nil
}
