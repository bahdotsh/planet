package keeper

import (
	"context"
	"fmt"

	"github.com/app/planet/x/blog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateSentPost(goCtx context.Context, msg *types.MsgCreateSentPost) (*types.MsgCreateSentPostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendSentPost(
		ctx,
		msg.Creator,
		msg.PostID,
		msg.Title,
		msg.Chain,
	)

	return &types.MsgCreateSentPostResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateSentPost(goCtx context.Context, msg *types.MsgUpdateSentPost) (*types.MsgUpdateSentPostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var sentPost = types.SentPost{
		Creator: msg.Creator,
		Id:      msg.Id,
		PostID:  msg.PostID,
		Title:   msg.Title,
		Chain:   msg.Chain,
	}

	// Checks that the element exists
	if !k.HasSentPost(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetSentPostOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetSentPost(ctx, sentPost)

	return &types.MsgUpdateSentPostResponse{}, nil
}

func (k msgServer) DeleteSentPost(goCtx context.Context, msg *types.MsgDeleteSentPost) (*types.MsgDeleteSentPostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasSentPost(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetSentPostOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveSentPost(ctx, msg.Id)

	return &types.MsgDeleteSentPostResponse{}, nil
}
