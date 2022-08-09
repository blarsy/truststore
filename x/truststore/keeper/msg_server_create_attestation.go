package keeper

import (
	"context"
	"fmt"
	"net/mail"
	"regexp"

	"github.com/blarsy/truststore/x/truststore/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

type IdentifierTypeGetter interface {
	GetIdentifierType(sdk.Context, string) (types.IdentifierType, bool)
}

var (
	validTwitterHandle     = regexp.MustCompile("^@[A-Za-z_]{4,15}$")
	validFacebookUid       = regexp.MustCompile("^[0-9]+$")
	validPhoneNumber       = regexp.MustCompile(`^\+[0-9]{8,13}$`)
	ValidateIdentifierType = func(ctx sdk.Context, identifierType string, identifier string, identifierTypeGetter IdentifierTypeGetter) error {
		//Check identifier type exists
		foundIdentifierType, found := identifierTypeGetter.GetIdentifierType(ctx, identifierType)
		if !found {
			return fmt.Errorf("identifier type with index %s not found", identifierType)
		}

		//Verify identifier format (email, phone number, twitter, ...)
		var err error
		switch foundIdentifierType.Index {
		case "1": //email
			{
				_, err = mail.ParseAddress(identifier)
			}
		case "2": //Twitter
			{
				valid := validTwitterHandle.Match([]byte(identifier))
				if !valid {
					err = fmt.Errorf("invalid Twitter handle format")
				}
				// TODO: probably would make sense to check the account exists via Twitter API
			}
		case "3": //Facebook identifier
			{
				valid := validFacebookUid.Match([]byte(identifier))
				if !valid {
					err = fmt.Errorf("invalid Facebook user id format")
				}
				// TODO: probably would make sense to check the profile exists via Facebook API
			}
		case "4": //Phone number
			{
				valid := validPhoneNumber.Match([]byte(identifier))
				if !valid {
					err = fmt.Errorf("invalid mobile phone number format")
				}
			}
		default:
			{
				err = fmt.Errorf("don't know how to validate identifier type %v", identifierType)
			}
		}
		return err
	}
)

func (k msgServer) CreateAttestation(goCtx context.Context, msg *types.MsgCreateAttestation) (*types.MsgCreateAttestationResponse, error) {
	return CreateAttestation(goCtx, msg, k)
}

type AttestationCreator interface {
	GetGlobal(sdk.Context) (types.Global, bool)
	SetGlobal(sdk.Context, types.Global)
	SetAttestation(sdk.Context, types.Attestation)
	GetIdentifierType(sdk.Context, string) (types.IdentifierType, bool)
}

func CreateAttestation(goCtx context.Context, msg *types.MsgCreateAttestation, attestationCreator AttestationCreator) (*types.MsgCreateAttestationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	err := ValidateIdentifierType(ctx, msg.IdentifierType, msg.Identifier, attestationCreator)
	if err != nil {
		return nil, err
	}

	global, found := attestationCreator.GetGlobal(ctx)
	if !found {
		return nil, fmt.Errorf("global state object not found")
	}

	attestation := types.Attestation{
		Index:          fmt.Sprint(global.NextId),
		Identifier:     msg.Identifier,
		IdentifierType: msg.IdentifierType,
		Rating:         msg.Rating,
		Creator:        msg.Creator,
	}

	global.NextId += 1
	attestationCreator.SetAttestation(ctx, attestation)
	attestationCreator.SetGlobal(ctx, global)

	return &types.MsgCreateAttestationResponse{IdValue: attestation.Index}, nil
}
