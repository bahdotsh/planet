package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateSentPost{}

func NewMsgCreateSentPost(creator string, postID string, title string, chain string) *MsgCreateSentPost {
	return &MsgCreateSentPost{
		Creator: creator,
		PostID:  postID,
		Title:   title,
		Chain:   chain,
	}
}

func (msg *MsgCreateSentPost) Route() string {
	return RouterKey
}

func (msg *MsgCreateSentPost) Type() string {
	return "CreateSentPost"
}

func (msg *MsgCreateSentPost) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSentPost) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSentPost) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSentPost{}

func NewMsgUpdateSentPost(creator string, id uint64, postID string, title string, chain string) *MsgUpdateSentPost {
	return &MsgUpdateSentPost{
		Id:      id,
		Creator: creator,
		PostID:  postID,
		Title:   title,
		Chain:   chain,
	}
}

func (msg *MsgUpdateSentPost) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSentPost) Type() string {
	return "UpdateSentPost"
}

func (msg *MsgUpdateSentPost) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSentPost) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSentPost) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateSentPost{}

func NewMsgDeleteSentPost(creator string, id uint64) *MsgDeleteSentPost {
	return &MsgDeleteSentPost{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteSentPost) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSentPost) Type() string {
	return "DeleteSentPost"
}

func (msg *MsgDeleteSentPost) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSentPost) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSentPost) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
