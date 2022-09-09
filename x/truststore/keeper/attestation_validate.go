package keeper

import (
	"fmt"
	"net/mail"
	"regexp"

	"github.com/blarsy/truststore/x/truststore/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

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
	ValidateUpdate = func(msg *types.MsgUpdateAttestation, currentAttestationData *types.Attestation) error {
		if msg.IdentifierType != currentAttestationData.IdentifierType {
			return fmt.Errorf(`identifier type cannot be changed, please create another attestation instead`)
		} else if msg.Identifier != currentAttestationData.Identifier {
			return fmt.Errorf(`identifier cannot be changed, please create another attestation instead`)
		} else if msg.Creator != currentAttestationData.Creator {
			return fmt.Errorf(`unauthorized`)
		}
		return nil
	}
	ValidateCorrection = func(ctx sdk.Context, msg *types.MsgUpdateAttestation, currentAttestationData *types.Attestation, k AttestationUpdater) error {
		if msg.Creator != currentAttestationData.Creator {
			return fmt.Errorf(`unauthorized`)
		}
		return ValidateIdentifierType(ctx, msg.IdentifierType, msg.Identifier, k)
	}
)
