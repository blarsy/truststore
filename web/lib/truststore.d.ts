import * as $protobuf from "protobufjs";
/** Namespace cosmos. */
export namespace cosmos {

    /** Namespace base. */
    namespace base {

        /** Namespace query. */
        namespace query {

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Properties of a PageRequest. */
                interface IPageRequest {

                    /** PageRequest key */
                    key?: (Uint8Array|null);

                    /** PageRequest offset */
                    offset?: (number|Long|null);

                    /** PageRequest limit */
                    limit?: (number|Long|null);

                    /** PageRequest countTotal */
                    countTotal?: (boolean|null);

                    /** PageRequest reverse */
                    reverse?: (boolean|null);
                }

                /** Represents a PageRequest. */
                class PageRequest implements IPageRequest {

                    /**
                     * Constructs a new PageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cosmos.base.query.v1beta1.IPageRequest);

                    /** PageRequest key. */
                    public key: Uint8Array;

                    /** PageRequest offset. */
                    public offset: (number|Long);

                    /** PageRequest limit. */
                    public limit: (number|Long);

                    /** PageRequest countTotal. */
                    public countTotal: boolean;

                    /** PageRequest reverse. */
                    public reverse: boolean;

                    /**
                     * Creates a new PageRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PageRequest instance
                     */
                    public static create(properties?: cosmos.base.query.v1beta1.IPageRequest): cosmos.base.query.v1beta1.PageRequest;

                    /**
                     * Encodes the specified PageRequest message. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
                     * @param message PageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cosmos.base.query.v1beta1.IPageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PageRequest message, length delimited. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
                     * @param message PageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cosmos.base.query.v1beta1.IPageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.query.v1beta1.PageRequest;

                    /**
                     * Decodes a PageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.query.v1beta1.PageRequest;

                    /**
                     * Verifies a PageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): cosmos.base.query.v1beta1.PageRequest;

                    /**
                     * Creates a plain object from a PageRequest message. Also converts values to other types if specified.
                     * @param message PageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cosmos.base.query.v1beta1.PageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PageResponse. */
                interface IPageResponse {

                    /** PageResponse nextKey */
                    nextKey?: (Uint8Array|null);

                    /** PageResponse total */
                    total?: (number|Long|null);
                }

                /** Represents a PageResponse. */
                class PageResponse implements IPageResponse {

                    /**
                     * Constructs a new PageResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cosmos.base.query.v1beta1.IPageResponse);

                    /** PageResponse nextKey. */
                    public nextKey: Uint8Array;

                    /** PageResponse total. */
                    public total: (number|Long);

                    /**
                     * Creates a new PageResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PageResponse instance
                     */
                    public static create(properties?: cosmos.base.query.v1beta1.IPageResponse): cosmos.base.query.v1beta1.PageResponse;

                    /**
                     * Encodes the specified PageResponse message. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
                     * @param message PageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cosmos.base.query.v1beta1.IPageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PageResponse message, length delimited. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
                     * @param message PageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cosmos.base.query.v1beta1.IPageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PageResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.query.v1beta1.PageResponse;

                    /**
                     * Decodes a PageResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.query.v1beta1.PageResponse;

                    /**
                     * Verifies a PageResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PageResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PageResponse
                     */
                    public static fromObject(object: { [k: string]: any }): cosmos.base.query.v1beta1.PageResponse;

                    /**
                     * Creates a plain object from a PageResponse message. Also converts values to other types if specified.
                     * @param message PageResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cosmos.base.query.v1beta1.PageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PageResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}

/** Namespace blarsy. */
export namespace blarsy {

    /** Namespace truststore. */
    namespace truststore {

        /** Namespace truststore. */
        namespace truststore {

            /** Properties of an Attestation. */
            interface IAttestation {

                /** Attestation index */
                index?: (string|null);

                /** Attestation identifier */
                identifier?: (string|null);

                /** Attestation identifierType */
                identifierType?: (string|null);

                /** Attestation rating */
                rating?: (number|Long|null);

                /** Attestation creator */
                creator?: (string|null);
            }

            /** Represents an Attestation. */
            class Attestation implements IAttestation {

                /**
                 * Constructs a new Attestation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IAttestation);

                /** Attestation index. */
                public index: string;

                /** Attestation identifier. */
                public identifier: string;

                /** Attestation identifierType. */
                public identifierType: string;

                /** Attestation rating. */
                public rating: (number|Long);

                /** Attestation creator. */
                public creator: string;

                /**
                 * Creates a new Attestation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Attestation instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IAttestation): blarsy.truststore.truststore.Attestation;

                /**
                 * Encodes the specified Attestation message. Does not implicitly {@link blarsy.truststore.truststore.Attestation.verify|verify} messages.
                 * @param message Attestation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Attestation message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.Attestation.verify|verify} messages.
                 * @param message Attestation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Attestation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Attestation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.Attestation;

                /**
                 * Decodes an Attestation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Attestation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.Attestation;

                /**
                 * Verifies an Attestation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Attestation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Attestation
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.Attestation;

                /**
                 * Creates a plain object from an Attestation message. Also converts values to other types if specified.
                 * @param message Attestation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.Attestation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Attestation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Ids. */
            interface IIds {

                /** Ids indexes */
                indexes?: (string[]|null);
            }

            /** Represents an Ids. */
            class Ids implements IIds {

                /**
                 * Constructs a new Ids.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IIds);

                /** Ids indexes. */
                public indexes: string[];

                /**
                 * Creates a new Ids instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Ids instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IIds): blarsy.truststore.truststore.Ids;

                /**
                 * Encodes the specified Ids message. Does not implicitly {@link blarsy.truststore.truststore.Ids.verify|verify} messages.
                 * @param message Ids message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IIds, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Ids message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.Ids.verify|verify} messages.
                 * @param message Ids message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IIds, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Ids message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Ids
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.Ids;

                /**
                 * Decodes an Ids message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Ids
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.Ids;

                /**
                 * Verifies an Ids message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Ids message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Ids
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.Ids;

                /**
                 * Creates a plain object from an Ids message. Also converts values to other types if specified.
                 * @param message Ids
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.Ids, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Ids to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AttestationIdsByCreator. */
            interface IAttestationIdsByCreator {

                /** AttestationIdsByCreator ids */
                ids?: ({ [k: string]: blarsy.truststore.truststore.IIds }|null);
            }

            /** Represents an AttestationIdsByCreator. */
            class AttestationIdsByCreator implements IAttestationIdsByCreator {

                /**
                 * Constructs a new AttestationIdsByCreator.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IAttestationIdsByCreator);

                /** AttestationIdsByCreator ids. */
                public ids: { [k: string]: blarsy.truststore.truststore.IIds };

                /**
                 * Creates a new AttestationIdsByCreator instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AttestationIdsByCreator instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IAttestationIdsByCreator): blarsy.truststore.truststore.AttestationIdsByCreator;

                /**
                 * Encodes the specified AttestationIdsByCreator message. Does not implicitly {@link blarsy.truststore.truststore.AttestationIdsByCreator.verify|verify} messages.
                 * @param message AttestationIdsByCreator message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IAttestationIdsByCreator, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AttestationIdsByCreator message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.AttestationIdsByCreator.verify|verify} messages.
                 * @param message AttestationIdsByCreator message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IAttestationIdsByCreator, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AttestationIdsByCreator message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AttestationIdsByCreator
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.AttestationIdsByCreator;

                /**
                 * Decodes an AttestationIdsByCreator message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AttestationIdsByCreator
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.AttestationIdsByCreator;

                /**
                 * Verifies an AttestationIdsByCreator message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AttestationIdsByCreator message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AttestationIdsByCreator
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.AttestationIdsByCreator;

                /**
                 * Creates a plain object from an AttestationIdsByCreator message. Also converts values to other types if specified.
                 * @param message AttestationIdsByCreator
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.AttestationIdsByCreator, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AttestationIdsByCreator to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an IdentifierType. */
            interface IIdentifierType {

                /** IdentifierType index */
                index?: (string|null);

                /** IdentifierType name */
                name?: (string|null);

                /** IdentifierType description */
                description?: (string|null);
            }

            /** Represents an IdentifierType. */
            class IdentifierType implements IIdentifierType {

                /**
                 * Constructs a new IdentifierType.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IIdentifierType);

                /** IdentifierType index. */
                public index: string;

                /** IdentifierType name. */
                public name: string;

                /** IdentifierType description. */
                public description: string;

                /**
                 * Creates a new IdentifierType instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns IdentifierType instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IIdentifierType): blarsy.truststore.truststore.IdentifierType;

                /**
                 * Encodes the specified IdentifierType message. Does not implicitly {@link blarsy.truststore.truststore.IdentifierType.verify|verify} messages.
                 * @param message IdentifierType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IIdentifierType, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified IdentifierType message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.IdentifierType.verify|verify} messages.
                 * @param message IdentifierType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IIdentifierType, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IdentifierType message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IdentifierType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.IdentifierType;

                /**
                 * Decodes an IdentifierType message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns IdentifierType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.IdentifierType;

                /**
                 * Verifies an IdentifierType message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an IdentifierType message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns IdentifierType
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.IdentifierType;

                /**
                 * Creates a plain object from an IdentifierType message. Also converts values to other types if specified.
                 * @param message IdentifierType
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.IdentifierType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this IdentifierType to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a Query */
            class Query extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Query service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Query service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Query;

                /**
                 * Calls Params.
                 * @param request QueryParamsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QueryParamsResponse
                 */
                public params(request: blarsy.truststore.truststore.IQueryParamsRequest, callback: blarsy.truststore.truststore.Query.ParamsCallback): void;

                /**
                 * Calls Params.
                 * @param request QueryParamsRequest message or plain object
                 * @returns Promise
                 */
                public params(request: blarsy.truststore.truststore.IQueryParamsRequest): Promise<blarsy.truststore.truststore.QueryParamsResponse>;

                /**
                 * Calls Attestation.
                 * @param request QueryGetAttestationRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QueryGetAttestationResponse
                 */
                public attestation(request: blarsy.truststore.truststore.IQueryGetAttestationRequest, callback: blarsy.truststore.truststore.Query.AttestationCallback): void;

                /**
                 * Calls Attestation.
                 * @param request QueryGetAttestationRequest message or plain object
                 * @returns Promise
                 */
                public attestation(request: blarsy.truststore.truststore.IQueryGetAttestationRequest): Promise<blarsy.truststore.truststore.QueryGetAttestationResponse>;

                /**
                 * Calls AttestationAll.
                 * @param request QueryAllAttestationRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QueryAllAttestationResponse
                 */
                public attestationAll(request: blarsy.truststore.truststore.IQueryAllAttestationRequest, callback: blarsy.truststore.truststore.Query.AttestationAllCallback): void;

                /**
                 * Calls AttestationAll.
                 * @param request QueryAllAttestationRequest message or plain object
                 * @returns Promise
                 */
                public attestationAll(request: blarsy.truststore.truststore.IQueryAllAttestationRequest): Promise<blarsy.truststore.truststore.QueryAllAttestationResponse>;

                /**
                 * Calls IdentifierType.
                 * @param request QueryGetIdentifierTypeRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QueryGetIdentifierTypeResponse
                 */
                public identifierType(request: blarsy.truststore.truststore.IQueryGetIdentifierTypeRequest, callback: blarsy.truststore.truststore.Query.IdentifierTypeCallback): void;

                /**
                 * Calls IdentifierType.
                 * @param request QueryGetIdentifierTypeRequest message or plain object
                 * @returns Promise
                 */
                public identifierType(request: blarsy.truststore.truststore.IQueryGetIdentifierTypeRequest): Promise<blarsy.truststore.truststore.QueryGetIdentifierTypeResponse>;

                /**
                 * Calls IdentifierTypeAll.
                 * @param request QueryAllIdentifierTypeRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QueryAllIdentifierTypeResponse
                 */
                public identifierTypeAll(request: blarsy.truststore.truststore.IQueryAllIdentifierTypeRequest, callback: blarsy.truststore.truststore.Query.IdentifierTypeAllCallback): void;

                /**
                 * Calls IdentifierTypeAll.
                 * @param request QueryAllIdentifierTypeRequest message or plain object
                 * @returns Promise
                 */
                public identifierTypeAll(request: blarsy.truststore.truststore.IQueryAllIdentifierTypeRequest): Promise<blarsy.truststore.truststore.QueryAllIdentifierTypeResponse>;

                /**
                 * Calls Global.
                 * @param request QueryGetGlobalRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QueryGetGlobalResponse
                 */
                public global(request: blarsy.truststore.truststore.IQueryGetGlobalRequest, callback: blarsy.truststore.truststore.Query.GlobalCallback): void;

                /**
                 * Calls Global.
                 * @param request QueryGetGlobalRequest message or plain object
                 * @returns Promise
                 */
                public global(request: blarsy.truststore.truststore.IQueryGetGlobalRequest): Promise<blarsy.truststore.truststore.QueryGetGlobalResponse>;

                /**
                 * Calls AttestationByCreatorIdentifier.
                 * @param request QueryAttestationByCreatorIdentifierRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QueryAttestationByCreatorIdentifierResponse
                 */
                public attestationByCreatorIdentifier(request: blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierRequest, callback: blarsy.truststore.truststore.Query.AttestationByCreatorIdentifierCallback): void;

                /**
                 * Calls AttestationByCreatorIdentifier.
                 * @param request QueryAttestationByCreatorIdentifierRequest message or plain object
                 * @returns Promise
                 */
                public attestationByCreatorIdentifier(request: blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierRequest): Promise<blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse>;

                /**
                 * Calls AttestationByCreator.
                 * @param request QueryAttestationByCreatorRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QueryAttestationByCreatorResponse
                 */
                public attestationByCreator(request: blarsy.truststore.truststore.IQueryAttestationByCreatorRequest, callback: blarsy.truststore.truststore.Query.AttestationByCreatorCallback): void;

                /**
                 * Calls AttestationByCreator.
                 * @param request QueryAttestationByCreatorRequest message or plain object
                 * @returns Promise
                 */
                public attestationByCreator(request: blarsy.truststore.truststore.IQueryAttestationByCreatorRequest): Promise<blarsy.truststore.truststore.QueryAttestationByCreatorResponse>;
            }

            namespace Query {

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Query#params}.
                 * @param error Error, if any
                 * @param [response] QueryParamsResponse
                 */
                type ParamsCallback = (error: (Error|null), response?: blarsy.truststore.truststore.QueryParamsResponse) => void;

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Query#attestation}.
                 * @param error Error, if any
                 * @param [response] QueryGetAttestationResponse
                 */
                type AttestationCallback = (error: (Error|null), response?: blarsy.truststore.truststore.QueryGetAttestationResponse) => void;

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Query#attestationAll}.
                 * @param error Error, if any
                 * @param [response] QueryAllAttestationResponse
                 */
                type AttestationAllCallback = (error: (Error|null), response?: blarsy.truststore.truststore.QueryAllAttestationResponse) => void;

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Query#identifierType}.
                 * @param error Error, if any
                 * @param [response] QueryGetIdentifierTypeResponse
                 */
                type IdentifierTypeCallback = (error: (Error|null), response?: blarsy.truststore.truststore.QueryGetIdentifierTypeResponse) => void;

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Query#identifierTypeAll}.
                 * @param error Error, if any
                 * @param [response] QueryAllIdentifierTypeResponse
                 */
                type IdentifierTypeAllCallback = (error: (Error|null), response?: blarsy.truststore.truststore.QueryAllIdentifierTypeResponse) => void;

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Query#global}.
                 * @param error Error, if any
                 * @param [response] QueryGetGlobalResponse
                 */
                type GlobalCallback = (error: (Error|null), response?: blarsy.truststore.truststore.QueryGetGlobalResponse) => void;

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Query#attestationByCreatorIdentifier}.
                 * @param error Error, if any
                 * @param [response] QueryAttestationByCreatorIdentifierResponse
                 */
                type AttestationByCreatorIdentifierCallback = (error: (Error|null), response?: blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse) => void;

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Query#attestationByCreator}.
                 * @param error Error, if any
                 * @param [response] QueryAttestationByCreatorResponse
                 */
                type AttestationByCreatorCallback = (error: (Error|null), response?: blarsy.truststore.truststore.QueryAttestationByCreatorResponse) => void;
            }

            /** Properties of a QueryParamsRequest. */
            interface IQueryParamsRequest {
            }

            /** Represents a QueryParamsRequest. */
            class QueryParamsRequest implements IQueryParamsRequest {

                /**
                 * Constructs a new QueryParamsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IQueryParamsRequest);

                /**
                 * Creates a new QueryParamsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryParamsRequest instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IQueryParamsRequest): blarsy.truststore.truststore.QueryParamsRequest;

                /**
                 * Encodes the specified QueryParamsRequest message. Does not implicitly {@link blarsy.truststore.truststore.QueryParamsRequest.verify|verify} messages.
                 * @param message QueryParamsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryParamsRequest message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryParamsRequest.verify|verify} messages.
                 * @param message QueryParamsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryParamsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryParamsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.QueryParamsRequest;

                /**
                 * Decodes a QueryParamsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryParamsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.QueryParamsRequest;

                /**
                 * Verifies a QueryParamsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryParamsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryParamsRequest
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.QueryParamsRequest;

                /**
                 * Creates a plain object from a QueryParamsRequest message. Also converts values to other types if specified.
                 * @param message QueryParamsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.QueryParamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryParamsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryParamsResponse. */
            interface IQueryParamsResponse {

                /** QueryParamsResponse params */
                params?: (blarsy.truststore.truststore.IParams|null);
            }

            /** Represents a QueryParamsResponse. */
            class QueryParamsResponse implements IQueryParamsResponse {

                /**
                 * Constructs a new QueryParamsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IQueryParamsResponse);

                /** QueryParamsResponse params. */
                public params?: (blarsy.truststore.truststore.IParams|null);

                /**
                 * Creates a new QueryParamsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryParamsResponse instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IQueryParamsResponse): blarsy.truststore.truststore.QueryParamsResponse;

                /**
                 * Encodes the specified QueryParamsResponse message. Does not implicitly {@link blarsy.truststore.truststore.QueryParamsResponse.verify|verify} messages.
                 * @param message QueryParamsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryParamsResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryParamsResponse.verify|verify} messages.
                 * @param message QueryParamsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryParamsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryParamsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.QueryParamsResponse;

                /**
                 * Decodes a QueryParamsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryParamsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.QueryParamsResponse;

                /**
                 * Verifies a QueryParamsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryParamsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryParamsResponse
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.QueryParamsResponse;

                /**
                 * Creates a plain object from a QueryParamsResponse message. Also converts values to other types if specified.
                 * @param message QueryParamsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.QueryParamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryParamsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryGetAttestationRequest. */
            interface IQueryGetAttestationRequest {

                /** QueryGetAttestationRequest index */
                index?: (string|null);
            }

            /** Represents a QueryGetAttestationRequest. */
            class QueryGetAttestationRequest implements IQueryGetAttestationRequest {

                /**
                 * Constructs a new QueryGetAttestationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IQueryGetAttestationRequest);

                /** QueryGetAttestationRequest index. */
                public index: string;

                /**
                 * Creates a new QueryGetAttestationRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryGetAttestationRequest instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IQueryGetAttestationRequest): blarsy.truststore.truststore.QueryGetAttestationRequest;

                /**
                 * Encodes the specified QueryGetAttestationRequest message. Does not implicitly {@link blarsy.truststore.truststore.QueryGetAttestationRequest.verify|verify} messages.
                 * @param message QueryGetAttestationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IQueryGetAttestationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryGetAttestationRequest message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryGetAttestationRequest.verify|verify} messages.
                 * @param message QueryGetAttestationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IQueryGetAttestationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryGetAttestationRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryGetAttestationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.QueryGetAttestationRequest;

                /**
                 * Decodes a QueryGetAttestationRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryGetAttestationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.QueryGetAttestationRequest;

                /**
                 * Verifies a QueryGetAttestationRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryGetAttestationRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryGetAttestationRequest
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.QueryGetAttestationRequest;

                /**
                 * Creates a plain object from a QueryGetAttestationRequest message. Also converts values to other types if specified.
                 * @param message QueryGetAttestationRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.QueryGetAttestationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryGetAttestationRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryGetAttestationResponse. */
            interface IQueryGetAttestationResponse {

                /** QueryGetAttestationResponse attestation */
                attestation?: (blarsy.truststore.truststore.IAttestation|null);
            }

            /** Represents a QueryGetAttestationResponse. */
            class QueryGetAttestationResponse implements IQueryGetAttestationResponse {

                /**
                 * Constructs a new QueryGetAttestationResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IQueryGetAttestationResponse);

                /** QueryGetAttestationResponse attestation. */
                public attestation?: (blarsy.truststore.truststore.IAttestation|null);

                /**
                 * Creates a new QueryGetAttestationResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryGetAttestationResponse instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IQueryGetAttestationResponse): blarsy.truststore.truststore.QueryGetAttestationResponse;

                /**
                 * Encodes the specified QueryGetAttestationResponse message. Does not implicitly {@link blarsy.truststore.truststore.QueryGetAttestationResponse.verify|verify} messages.
                 * @param message QueryGetAttestationResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IQueryGetAttestationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryGetAttestationResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryGetAttestationResponse.verify|verify} messages.
                 * @param message QueryGetAttestationResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IQueryGetAttestationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryGetAttestationResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryGetAttestationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.QueryGetAttestationResponse;

                /**
                 * Decodes a QueryGetAttestationResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryGetAttestationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.QueryGetAttestationResponse;

                /**
                 * Verifies a QueryGetAttestationResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryGetAttestationResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryGetAttestationResponse
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.QueryGetAttestationResponse;

                /**
                 * Creates a plain object from a QueryGetAttestationResponse message. Also converts values to other types if specified.
                 * @param message QueryGetAttestationResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.QueryGetAttestationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryGetAttestationResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryAllAttestationRequest. */
            interface IQueryAllAttestationRequest {

                /** QueryAllAttestationRequest pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
            }

            /** Represents a QueryAllAttestationRequest. */
            class QueryAllAttestationRequest implements IQueryAllAttestationRequest {

                /**
                 * Constructs a new QueryAllAttestationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IQueryAllAttestationRequest);

                /** QueryAllAttestationRequest pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

                /**
                 * Creates a new QueryAllAttestationRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryAllAttestationRequest instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IQueryAllAttestationRequest): blarsy.truststore.truststore.QueryAllAttestationRequest;

                /**
                 * Encodes the specified QueryAllAttestationRequest message. Does not implicitly {@link blarsy.truststore.truststore.QueryAllAttestationRequest.verify|verify} messages.
                 * @param message QueryAllAttestationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IQueryAllAttestationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryAllAttestationRequest message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryAllAttestationRequest.verify|verify} messages.
                 * @param message QueryAllAttestationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IQueryAllAttestationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryAllAttestationRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryAllAttestationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.QueryAllAttestationRequest;

                /**
                 * Decodes a QueryAllAttestationRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryAllAttestationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.QueryAllAttestationRequest;

                /**
                 * Verifies a QueryAllAttestationRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryAllAttestationRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryAllAttestationRequest
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.QueryAllAttestationRequest;

                /**
                 * Creates a plain object from a QueryAllAttestationRequest message. Also converts values to other types if specified.
                 * @param message QueryAllAttestationRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.QueryAllAttestationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryAllAttestationRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryAllAttestationResponse. */
            interface IQueryAllAttestationResponse {

                /** QueryAllAttestationResponse attestation */
                attestation?: (blarsy.truststore.truststore.IAttestation[]|null);

                /** QueryAllAttestationResponse pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
            }

            /** Represents a QueryAllAttestationResponse. */
            class QueryAllAttestationResponse implements IQueryAllAttestationResponse {

                /**
                 * Constructs a new QueryAllAttestationResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IQueryAllAttestationResponse);

                /** QueryAllAttestationResponse attestation. */
                public attestation: blarsy.truststore.truststore.IAttestation[];

                /** QueryAllAttestationResponse pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

                /**
                 * Creates a new QueryAllAttestationResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryAllAttestationResponse instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IQueryAllAttestationResponse): blarsy.truststore.truststore.QueryAllAttestationResponse;

                /**
                 * Encodes the specified QueryAllAttestationResponse message. Does not implicitly {@link blarsy.truststore.truststore.QueryAllAttestationResponse.verify|verify} messages.
                 * @param message QueryAllAttestationResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IQueryAllAttestationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryAllAttestationResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryAllAttestationResponse.verify|verify} messages.
                 * @param message QueryAllAttestationResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IQueryAllAttestationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryAllAttestationResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryAllAttestationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.QueryAllAttestationResponse;

                /**
                 * Decodes a QueryAllAttestationResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryAllAttestationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.QueryAllAttestationResponse;

                /**
                 * Verifies a QueryAllAttestationResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryAllAttestationResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryAllAttestationResponse
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.QueryAllAttestationResponse;

                /**
                 * Creates a plain object from a QueryAllAttestationResponse message. Also converts values to other types if specified.
                 * @param message QueryAllAttestationResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.QueryAllAttestationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryAllAttestationResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryGetIdentifierTypeRequest. */
            interface IQueryGetIdentifierTypeRequest {

                /** QueryGetIdentifierTypeRequest index */
                index?: (string|null);
            }

            /** Represents a QueryGetIdentifierTypeRequest. */
            class QueryGetIdentifierTypeRequest implements IQueryGetIdentifierTypeRequest {

                /**
                 * Constructs a new QueryGetIdentifierTypeRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IQueryGetIdentifierTypeRequest);

                /** QueryGetIdentifierTypeRequest index. */
                public index: string;

                /**
                 * Creates a new QueryGetIdentifierTypeRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryGetIdentifierTypeRequest instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IQueryGetIdentifierTypeRequest): blarsy.truststore.truststore.QueryGetIdentifierTypeRequest;

                /**
                 * Encodes the specified QueryGetIdentifierTypeRequest message. Does not implicitly {@link blarsy.truststore.truststore.QueryGetIdentifierTypeRequest.verify|verify} messages.
                 * @param message QueryGetIdentifierTypeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IQueryGetIdentifierTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryGetIdentifierTypeRequest message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryGetIdentifierTypeRequest.verify|verify} messages.
                 * @param message QueryGetIdentifierTypeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IQueryGetIdentifierTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryGetIdentifierTypeRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryGetIdentifierTypeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.QueryGetIdentifierTypeRequest;

                /**
                 * Decodes a QueryGetIdentifierTypeRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryGetIdentifierTypeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.QueryGetIdentifierTypeRequest;

                /**
                 * Verifies a QueryGetIdentifierTypeRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryGetIdentifierTypeRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryGetIdentifierTypeRequest
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.QueryGetIdentifierTypeRequest;

                /**
                 * Creates a plain object from a QueryGetIdentifierTypeRequest message. Also converts values to other types if specified.
                 * @param message QueryGetIdentifierTypeRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.QueryGetIdentifierTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryGetIdentifierTypeRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryGetIdentifierTypeResponse. */
            interface IQueryGetIdentifierTypeResponse {

                /** QueryGetIdentifierTypeResponse identifierType */
                identifierType?: (blarsy.truststore.truststore.IIdentifierType|null);
            }

            /** Represents a QueryGetIdentifierTypeResponse. */
            class QueryGetIdentifierTypeResponse implements IQueryGetIdentifierTypeResponse {

                /**
                 * Constructs a new QueryGetIdentifierTypeResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IQueryGetIdentifierTypeResponse);

                /** QueryGetIdentifierTypeResponse identifierType. */
                public identifierType?: (blarsy.truststore.truststore.IIdentifierType|null);

                /**
                 * Creates a new QueryGetIdentifierTypeResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryGetIdentifierTypeResponse instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IQueryGetIdentifierTypeResponse): blarsy.truststore.truststore.QueryGetIdentifierTypeResponse;

                /**
                 * Encodes the specified QueryGetIdentifierTypeResponse message. Does not implicitly {@link blarsy.truststore.truststore.QueryGetIdentifierTypeResponse.verify|verify} messages.
                 * @param message QueryGetIdentifierTypeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IQueryGetIdentifierTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryGetIdentifierTypeResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryGetIdentifierTypeResponse.verify|verify} messages.
                 * @param message QueryGetIdentifierTypeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IQueryGetIdentifierTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryGetIdentifierTypeResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryGetIdentifierTypeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.QueryGetIdentifierTypeResponse;

                /**
                 * Decodes a QueryGetIdentifierTypeResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryGetIdentifierTypeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.QueryGetIdentifierTypeResponse;

                /**
                 * Verifies a QueryGetIdentifierTypeResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryGetIdentifierTypeResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryGetIdentifierTypeResponse
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.QueryGetIdentifierTypeResponse;

                /**
                 * Creates a plain object from a QueryGetIdentifierTypeResponse message. Also converts values to other types if specified.
                 * @param message QueryGetIdentifierTypeResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.QueryGetIdentifierTypeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryGetIdentifierTypeResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryAllIdentifierTypeRequest. */
            interface IQueryAllIdentifierTypeRequest {

                /** QueryAllIdentifierTypeRequest pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
            }

            /** Represents a QueryAllIdentifierTypeRequest. */
            class QueryAllIdentifierTypeRequest implements IQueryAllIdentifierTypeRequest {

                /**
                 * Constructs a new QueryAllIdentifierTypeRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IQueryAllIdentifierTypeRequest);

                /** QueryAllIdentifierTypeRequest pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

                /**
                 * Creates a new QueryAllIdentifierTypeRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryAllIdentifierTypeRequest instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IQueryAllIdentifierTypeRequest): blarsy.truststore.truststore.QueryAllIdentifierTypeRequest;

                /**
                 * Encodes the specified QueryAllIdentifierTypeRequest message. Does not implicitly {@link blarsy.truststore.truststore.QueryAllIdentifierTypeRequest.verify|verify} messages.
                 * @param message QueryAllIdentifierTypeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IQueryAllIdentifierTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryAllIdentifierTypeRequest message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryAllIdentifierTypeRequest.verify|verify} messages.
                 * @param message QueryAllIdentifierTypeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IQueryAllIdentifierTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryAllIdentifierTypeRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryAllIdentifierTypeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.QueryAllIdentifierTypeRequest;

                /**
                 * Decodes a QueryAllIdentifierTypeRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryAllIdentifierTypeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.QueryAllIdentifierTypeRequest;

                /**
                 * Verifies a QueryAllIdentifierTypeRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryAllIdentifierTypeRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryAllIdentifierTypeRequest
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.QueryAllIdentifierTypeRequest;

                /**
                 * Creates a plain object from a QueryAllIdentifierTypeRequest message. Also converts values to other types if specified.
                 * @param message QueryAllIdentifierTypeRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.QueryAllIdentifierTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryAllIdentifierTypeRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryAllIdentifierTypeResponse. */
            interface IQueryAllIdentifierTypeResponse {

                /** QueryAllIdentifierTypeResponse identifierType */
                identifierType?: (blarsy.truststore.truststore.IIdentifierType[]|null);

                /** QueryAllIdentifierTypeResponse pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
            }

            /** Represents a QueryAllIdentifierTypeResponse. */
            class QueryAllIdentifierTypeResponse implements IQueryAllIdentifierTypeResponse {

                /**
                 * Constructs a new QueryAllIdentifierTypeResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IQueryAllIdentifierTypeResponse);

                /** QueryAllIdentifierTypeResponse identifierType. */
                public identifierType: blarsy.truststore.truststore.IIdentifierType[];

                /** QueryAllIdentifierTypeResponse pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

                /**
                 * Creates a new QueryAllIdentifierTypeResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryAllIdentifierTypeResponse instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IQueryAllIdentifierTypeResponse): blarsy.truststore.truststore.QueryAllIdentifierTypeResponse;

                /**
                 * Encodes the specified QueryAllIdentifierTypeResponse message. Does not implicitly {@link blarsy.truststore.truststore.QueryAllIdentifierTypeResponse.verify|verify} messages.
                 * @param message QueryAllIdentifierTypeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IQueryAllIdentifierTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryAllIdentifierTypeResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryAllIdentifierTypeResponse.verify|verify} messages.
                 * @param message QueryAllIdentifierTypeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IQueryAllIdentifierTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryAllIdentifierTypeResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryAllIdentifierTypeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.QueryAllIdentifierTypeResponse;

                /**
                 * Decodes a QueryAllIdentifierTypeResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryAllIdentifierTypeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.QueryAllIdentifierTypeResponse;

                /**
                 * Verifies a QueryAllIdentifierTypeResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryAllIdentifierTypeResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryAllIdentifierTypeResponse
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.QueryAllIdentifierTypeResponse;

                /**
                 * Creates a plain object from a QueryAllIdentifierTypeResponse message. Also converts values to other types if specified.
                 * @param message QueryAllIdentifierTypeResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.QueryAllIdentifierTypeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryAllIdentifierTypeResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryGetGlobalRequest. */
            interface IQueryGetGlobalRequest {
            }

            /** Represents a QueryGetGlobalRequest. */
            class QueryGetGlobalRequest implements IQueryGetGlobalRequest {

                /**
                 * Constructs a new QueryGetGlobalRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IQueryGetGlobalRequest);

                /**
                 * Creates a new QueryGetGlobalRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryGetGlobalRequest instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IQueryGetGlobalRequest): blarsy.truststore.truststore.QueryGetGlobalRequest;

                /**
                 * Encodes the specified QueryGetGlobalRequest message. Does not implicitly {@link blarsy.truststore.truststore.QueryGetGlobalRequest.verify|verify} messages.
                 * @param message QueryGetGlobalRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IQueryGetGlobalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryGetGlobalRequest message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryGetGlobalRequest.verify|verify} messages.
                 * @param message QueryGetGlobalRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IQueryGetGlobalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryGetGlobalRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryGetGlobalRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.QueryGetGlobalRequest;

                /**
                 * Decodes a QueryGetGlobalRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryGetGlobalRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.QueryGetGlobalRequest;

                /**
                 * Verifies a QueryGetGlobalRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryGetGlobalRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryGetGlobalRequest
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.QueryGetGlobalRequest;

                /**
                 * Creates a plain object from a QueryGetGlobalRequest message. Also converts values to other types if specified.
                 * @param message QueryGetGlobalRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.QueryGetGlobalRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryGetGlobalRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryGetGlobalResponse. */
            interface IQueryGetGlobalResponse {

                /** QueryGetGlobalResponse Global */
                Global?: (blarsy.truststore.truststore.IGlobal|null);
            }

            /** Represents a QueryGetGlobalResponse. */
            class QueryGetGlobalResponse implements IQueryGetGlobalResponse {

                /**
                 * Constructs a new QueryGetGlobalResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IQueryGetGlobalResponse);

                /** QueryGetGlobalResponse Global. */
                public Global?: (blarsy.truststore.truststore.IGlobal|null);

                /**
                 * Creates a new QueryGetGlobalResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryGetGlobalResponse instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IQueryGetGlobalResponse): blarsy.truststore.truststore.QueryGetGlobalResponse;

                /**
                 * Encodes the specified QueryGetGlobalResponse message. Does not implicitly {@link blarsy.truststore.truststore.QueryGetGlobalResponse.verify|verify} messages.
                 * @param message QueryGetGlobalResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IQueryGetGlobalResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryGetGlobalResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryGetGlobalResponse.verify|verify} messages.
                 * @param message QueryGetGlobalResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IQueryGetGlobalResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryGetGlobalResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryGetGlobalResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.QueryGetGlobalResponse;

                /**
                 * Decodes a QueryGetGlobalResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryGetGlobalResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.QueryGetGlobalResponse;

                /**
                 * Verifies a QueryGetGlobalResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryGetGlobalResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryGetGlobalResponse
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.QueryGetGlobalResponse;

                /**
                 * Creates a plain object from a QueryGetGlobalResponse message. Also converts values to other types if specified.
                 * @param message QueryGetGlobalResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.QueryGetGlobalResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryGetGlobalResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryAttestationByCreatorIdentifierRequest. */
            interface IQueryAttestationByCreatorIdentifierRequest {

                /** QueryAttestationByCreatorIdentifierRequest creator */
                creator?: (string|null);

                /** QueryAttestationByCreatorIdentifierRequest identifierType */
                identifierType?: (string|null);

                /** QueryAttestationByCreatorIdentifierRequest identifier */
                identifier?: (string|null);
            }

            /** Represents a QueryAttestationByCreatorIdentifierRequest. */
            class QueryAttestationByCreatorIdentifierRequest implements IQueryAttestationByCreatorIdentifierRequest {

                /**
                 * Constructs a new QueryAttestationByCreatorIdentifierRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierRequest);

                /** QueryAttestationByCreatorIdentifierRequest creator. */
                public creator: string;

                /** QueryAttestationByCreatorIdentifierRequest identifierType. */
                public identifierType: string;

                /** QueryAttestationByCreatorIdentifierRequest identifier. */
                public identifier: string;

                /**
                 * Creates a new QueryAttestationByCreatorIdentifierRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryAttestationByCreatorIdentifierRequest instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierRequest): blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest;

                /**
                 * Encodes the specified QueryAttestationByCreatorIdentifierRequest message. Does not implicitly {@link blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest.verify|verify} messages.
                 * @param message QueryAttestationByCreatorIdentifierRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryAttestationByCreatorIdentifierRequest message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest.verify|verify} messages.
                 * @param message QueryAttestationByCreatorIdentifierRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryAttestationByCreatorIdentifierRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryAttestationByCreatorIdentifierRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest;

                /**
                 * Decodes a QueryAttestationByCreatorIdentifierRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryAttestationByCreatorIdentifierRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest;

                /**
                 * Verifies a QueryAttestationByCreatorIdentifierRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryAttestationByCreatorIdentifierRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryAttestationByCreatorIdentifierRequest
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest;

                /**
                 * Creates a plain object from a QueryAttestationByCreatorIdentifierRequest message. Also converts values to other types if specified.
                 * @param message QueryAttestationByCreatorIdentifierRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryAttestationByCreatorIdentifierRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryAttestationByCreatorIdentifierResponse. */
            interface IQueryAttestationByCreatorIdentifierResponse {

                /** QueryAttestationByCreatorIdentifierResponse attestation */
                attestation?: (blarsy.truststore.truststore.IAttestation|null);
            }

            /** Represents a QueryAttestationByCreatorIdentifierResponse. */
            class QueryAttestationByCreatorIdentifierResponse implements IQueryAttestationByCreatorIdentifierResponse {

                /**
                 * Constructs a new QueryAttestationByCreatorIdentifierResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierResponse);

                /** QueryAttestationByCreatorIdentifierResponse attestation. */
                public attestation?: (blarsy.truststore.truststore.IAttestation|null);

                /**
                 * Creates a new QueryAttestationByCreatorIdentifierResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryAttestationByCreatorIdentifierResponse instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierResponse): blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse;

                /**
                 * Encodes the specified QueryAttestationByCreatorIdentifierResponse message. Does not implicitly {@link blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse.verify|verify} messages.
                 * @param message QueryAttestationByCreatorIdentifierResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryAttestationByCreatorIdentifierResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse.verify|verify} messages.
                 * @param message QueryAttestationByCreatorIdentifierResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryAttestationByCreatorIdentifierResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryAttestationByCreatorIdentifierResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse;

                /**
                 * Decodes a QueryAttestationByCreatorIdentifierResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryAttestationByCreatorIdentifierResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse;

                /**
                 * Verifies a QueryAttestationByCreatorIdentifierResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryAttestationByCreatorIdentifierResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryAttestationByCreatorIdentifierResponse
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse;

                /**
                 * Creates a plain object from a QueryAttestationByCreatorIdentifierResponse message. Also converts values to other types if specified.
                 * @param message QueryAttestationByCreatorIdentifierResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryAttestationByCreatorIdentifierResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryAttestationByCreatorRequest. */
            interface IQueryAttestationByCreatorRequest {

                /** QueryAttestationByCreatorRequest creator */
                creator?: (string|null);
            }

            /** Represents a QueryAttestationByCreatorRequest. */
            class QueryAttestationByCreatorRequest implements IQueryAttestationByCreatorRequest {

                /**
                 * Constructs a new QueryAttestationByCreatorRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IQueryAttestationByCreatorRequest);

                /** QueryAttestationByCreatorRequest creator. */
                public creator: string;

                /**
                 * Creates a new QueryAttestationByCreatorRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryAttestationByCreatorRequest instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IQueryAttestationByCreatorRequest): blarsy.truststore.truststore.QueryAttestationByCreatorRequest;

                /**
                 * Encodes the specified QueryAttestationByCreatorRequest message. Does not implicitly {@link blarsy.truststore.truststore.QueryAttestationByCreatorRequest.verify|verify} messages.
                 * @param message QueryAttestationByCreatorRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IQueryAttestationByCreatorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryAttestationByCreatorRequest message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryAttestationByCreatorRequest.verify|verify} messages.
                 * @param message QueryAttestationByCreatorRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IQueryAttestationByCreatorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryAttestationByCreatorRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryAttestationByCreatorRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.QueryAttestationByCreatorRequest;

                /**
                 * Decodes a QueryAttestationByCreatorRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryAttestationByCreatorRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.QueryAttestationByCreatorRequest;

                /**
                 * Verifies a QueryAttestationByCreatorRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryAttestationByCreatorRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryAttestationByCreatorRequest
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.QueryAttestationByCreatorRequest;

                /**
                 * Creates a plain object from a QueryAttestationByCreatorRequest message. Also converts values to other types if specified.
                 * @param message QueryAttestationByCreatorRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.QueryAttestationByCreatorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryAttestationByCreatorRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryAttestationByCreatorResponse. */
            interface IQueryAttestationByCreatorResponse {

                /** QueryAttestationByCreatorResponse attestations */
                attestations?: (blarsy.truststore.truststore.IAttestation[]|null);
            }

            /** Represents a QueryAttestationByCreatorResponse. */
            class QueryAttestationByCreatorResponse implements IQueryAttestationByCreatorResponse {

                /**
                 * Constructs a new QueryAttestationByCreatorResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IQueryAttestationByCreatorResponse);

                /** QueryAttestationByCreatorResponse attestations. */
                public attestations: blarsy.truststore.truststore.IAttestation[];

                /**
                 * Creates a new QueryAttestationByCreatorResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryAttestationByCreatorResponse instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IQueryAttestationByCreatorResponse): blarsy.truststore.truststore.QueryAttestationByCreatorResponse;

                /**
                 * Encodes the specified QueryAttestationByCreatorResponse message. Does not implicitly {@link blarsy.truststore.truststore.QueryAttestationByCreatorResponse.verify|verify} messages.
                 * @param message QueryAttestationByCreatorResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IQueryAttestationByCreatorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryAttestationByCreatorResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryAttestationByCreatorResponse.verify|verify} messages.
                 * @param message QueryAttestationByCreatorResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IQueryAttestationByCreatorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryAttestationByCreatorResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryAttestationByCreatorResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.QueryAttestationByCreatorResponse;

                /**
                 * Decodes a QueryAttestationByCreatorResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryAttestationByCreatorResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.QueryAttestationByCreatorResponse;

                /**
                 * Verifies a QueryAttestationByCreatorResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryAttestationByCreatorResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryAttestationByCreatorResponse
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.QueryAttestationByCreatorResponse;

                /**
                 * Creates a plain object from a QueryAttestationByCreatorResponse message. Also converts values to other types if specified.
                 * @param message QueryAttestationByCreatorResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.QueryAttestationByCreatorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryAttestationByCreatorResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Params. */
            interface IParams {
            }

            /** Represents a Params. */
            class Params implements IParams {

                /**
                 * Constructs a new Params.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IParams);

                /**
                 * Creates a new Params instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Params instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IParams): blarsy.truststore.truststore.Params;

                /**
                 * Encodes the specified Params message. Does not implicitly {@link blarsy.truststore.truststore.Params.verify|verify} messages.
                 * @param message Params message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Params message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.Params.verify|verify} messages.
                 * @param message Params message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Params message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Params
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.Params;

                /**
                 * Decodes a Params message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Params
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.Params;

                /**
                 * Verifies a Params message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Params message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Params
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.Params;

                /**
                 * Creates a plain object from a Params message. Also converts values to other types if specified.
                 * @param message Params
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.Params, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Params to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Global. */
            interface IGlobal {

                /** Global nextId */
                nextId?: (number|Long|null);
            }

            /** Represents a Global. */
            class Global implements IGlobal {

                /**
                 * Constructs a new Global.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: blarsy.truststore.truststore.IGlobal);

                /** Global nextId. */
                public nextId: (number|Long);

                /**
                 * Creates a new Global instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Global instance
                 */
                public static create(properties?: blarsy.truststore.truststore.IGlobal): blarsy.truststore.truststore.Global;

                /**
                 * Encodes the specified Global message. Does not implicitly {@link blarsy.truststore.truststore.Global.verify|verify} messages.
                 * @param message Global message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: blarsy.truststore.truststore.IGlobal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Global message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.Global.verify|verify} messages.
                 * @param message Global message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: blarsy.truststore.truststore.IGlobal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Global message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Global
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blarsy.truststore.truststore.Global;

                /**
                 * Decodes a Global message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Global
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blarsy.truststore.truststore.Global;

                /**
                 * Verifies a Global message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Global message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Global
                 */
                public static fromObject(object: { [k: string]: any }): blarsy.truststore.truststore.Global;

                /**
                 * Creates a plain object from a Global message. Also converts values to other types if specified.
                 * @param message Global
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: blarsy.truststore.truststore.Global, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Global to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
