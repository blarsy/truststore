package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUpdateAttestation = "update_attestation"

var _ sdk.Msg = &MsgUpdateAttestation{}

func NewMsgUpdateAttestation(creator string, index string, identifier string, identifierType string, rating uint64) *MsgUpdateAttestation {
	return &MsgUpdateAttestation{
		Creator:        creator,
		Index:          index,
		Identifier:     identifier,
		IdentifierType: identifierType,
		Rating:         rating,
	}
}

func (msg *MsgUpdateAttestation) Route() string {
	return RouterKey
}

func (msg *MsgUpdateAttestation) Type() string {
	return TypeMsgUpdateAttestation
}

func (msg *MsgUpdateAttestation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateAttestation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateAttestation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
