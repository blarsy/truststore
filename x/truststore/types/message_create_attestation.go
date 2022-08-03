package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateAttestation = "create_attestation"

var _ sdk.Msg = &MsgCreateAttestation{}

func NewMsgCreateAttestation(creator string, identifier string, identifierType string, rating uint64) *MsgCreateAttestation {
	return &MsgCreateAttestation{
		Creator:        creator,
		Identifier:     identifier,
		IdentifierType: identifierType,
		Rating:         rating,
	}
}

func (msg *MsgCreateAttestation) Route() string {
	return RouterKey
}

func (msg *MsgCreateAttestation) Type() string {
	return TypeMsgCreateAttestation
}

func (msg *MsgCreateAttestation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateAttestation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateAttestation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
