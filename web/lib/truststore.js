/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const cosmos = $root.cosmos = (() => {

    /**
     * Namespace cosmos.
     * @exports cosmos
     * @namespace
     */
    const cosmos = {};

    cosmos.base = (function() {

        /**
         * Namespace base.
         * @memberof cosmos
         * @namespace
         */
        const base = {};

        base.query = (function() {

            /**
             * Namespace query.
             * @memberof cosmos.base
             * @namespace
             */
            const query = {};

            query.v1beta1 = (function() {

                /**
                 * Namespace v1beta1.
                 * @memberof cosmos.base.query
                 * @namespace
                 */
                const v1beta1 = {};

                v1beta1.PageRequest = (function() {

                    /**
                     * Properties of a PageRequest.
                     * @memberof cosmos.base.query.v1beta1
                     * @interface IPageRequest
                     * @property {Uint8Array|null} [key] PageRequest key
                     * @property {number|Long|null} [offset] PageRequest offset
                     * @property {number|Long|null} [limit] PageRequest limit
                     * @property {boolean|null} [countTotal] PageRequest countTotal
                     * @property {boolean|null} [reverse] PageRequest reverse
                     */

                    /**
                     * Constructs a new PageRequest.
                     * @memberof cosmos.base.query.v1beta1
                     * @classdesc Represents a PageRequest.
                     * @implements IPageRequest
                     * @constructor
                     * @param {cosmos.base.query.v1beta1.IPageRequest=} [properties] Properties to set
                     */
                    function PageRequest(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PageRequest key.
                     * @member {Uint8Array} key
                     * @memberof cosmos.base.query.v1beta1.PageRequest
                     * @instance
                     */
                    PageRequest.prototype.key = $util.newBuffer([]);

                    /**
                     * PageRequest offset.
                     * @member {number|Long} offset
                     * @memberof cosmos.base.query.v1beta1.PageRequest
                     * @instance
                     */
                    PageRequest.prototype.offset = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * PageRequest limit.
                     * @member {number|Long} limit
                     * @memberof cosmos.base.query.v1beta1.PageRequest
                     * @instance
                     */
                    PageRequest.prototype.limit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * PageRequest countTotal.
                     * @member {boolean} countTotal
                     * @memberof cosmos.base.query.v1beta1.PageRequest
                     * @instance
                     */
                    PageRequest.prototype.countTotal = false;

                    /**
                     * PageRequest reverse.
                     * @member {boolean} reverse
                     * @memberof cosmos.base.query.v1beta1.PageRequest
                     * @instance
                     */
                    PageRequest.prototype.reverse = false;

                    /**
                     * Creates a new PageRequest instance using the specified properties.
                     * @function create
                     * @memberof cosmos.base.query.v1beta1.PageRequest
                     * @static
                     * @param {cosmos.base.query.v1beta1.IPageRequest=} [properties] Properties to set
                     * @returns {cosmos.base.query.v1beta1.PageRequest} PageRequest instance
                     */
                    PageRequest.create = function create(properties) {
                        return new PageRequest(properties);
                    };

                    /**
                     * Encodes the specified PageRequest message. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
                     * @function encode
                     * @memberof cosmos.base.query.v1beta1.PageRequest
                     * @static
                     * @param {cosmos.base.query.v1beta1.IPageRequest} message PageRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PageRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.key);
                        if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.offset);
                        if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.limit);
                        if (message.countTotal != null && Object.hasOwnProperty.call(message, "countTotal"))
                            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.countTotal);
                        if (message.reverse != null && Object.hasOwnProperty.call(message, "reverse"))
                            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.reverse);
                        return writer;
                    };

                    /**
                     * Encodes the specified PageRequest message, length delimited. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof cosmos.base.query.v1beta1.PageRequest
                     * @static
                     * @param {cosmos.base.query.v1beta1.IPageRequest} message PageRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PageRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PageRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof cosmos.base.query.v1beta1.PageRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {cosmos.base.query.v1beta1.PageRequest} PageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PageRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cosmos.base.query.v1beta1.PageRequest();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.key = reader.bytes();
                                break;
                            case 2:
                                message.offset = reader.uint64();
                                break;
                            case 3:
                                message.limit = reader.uint64();
                                break;
                            case 4:
                                message.countTotal = reader.bool();
                                break;
                            case 5:
                                message.reverse = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PageRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof cosmos.base.query.v1beta1.PageRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {cosmos.base.query.v1beta1.PageRequest} PageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PageRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PageRequest message.
                     * @function verify
                     * @memberof cosmos.base.query.v1beta1.PageRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PageRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.key != null && message.hasOwnProperty("key"))
                            if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                                return "key: buffer expected";
                        if (message.offset != null && message.hasOwnProperty("offset"))
                            if (!$util.isInteger(message.offset) && !(message.offset && $util.isInteger(message.offset.low) && $util.isInteger(message.offset.high)))
                                return "offset: integer|Long expected";
                        if (message.limit != null && message.hasOwnProperty("limit"))
                            if (!$util.isInteger(message.limit) && !(message.limit && $util.isInteger(message.limit.low) && $util.isInteger(message.limit.high)))
                                return "limit: integer|Long expected";
                        if (message.countTotal != null && message.hasOwnProperty("countTotal"))
                            if (typeof message.countTotal !== "boolean")
                                return "countTotal: boolean expected";
                        if (message.reverse != null && message.hasOwnProperty("reverse"))
                            if (typeof message.reverse !== "boolean")
                                return "reverse: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a PageRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof cosmos.base.query.v1beta1.PageRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {cosmos.base.query.v1beta1.PageRequest} PageRequest
                     */
                    PageRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.cosmos.base.query.v1beta1.PageRequest)
                            return object;
                        let message = new $root.cosmos.base.query.v1beta1.PageRequest();
                        if (object.key != null)
                            if (typeof object.key === "string")
                                $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                            else if (object.key.length)
                                message.key = object.key;
                        if (object.offset != null)
                            if ($util.Long)
                                (message.offset = $util.Long.fromValue(object.offset)).unsigned = true;
                            else if (typeof object.offset === "string")
                                message.offset = parseInt(object.offset, 10);
                            else if (typeof object.offset === "number")
                                message.offset = object.offset;
                            else if (typeof object.offset === "object")
                                message.offset = new $util.LongBits(object.offset.low >>> 0, object.offset.high >>> 0).toNumber(true);
                        if (object.limit != null)
                            if ($util.Long)
                                (message.limit = $util.Long.fromValue(object.limit)).unsigned = true;
                            else if (typeof object.limit === "string")
                                message.limit = parseInt(object.limit, 10);
                            else if (typeof object.limit === "number")
                                message.limit = object.limit;
                            else if (typeof object.limit === "object")
                                message.limit = new $util.LongBits(object.limit.low >>> 0, object.limit.high >>> 0).toNumber(true);
                        if (object.countTotal != null)
                            message.countTotal = Boolean(object.countTotal);
                        if (object.reverse != null)
                            message.reverse = Boolean(object.reverse);
                        return message;
                    };

                    /**
                     * Creates a plain object from a PageRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof cosmos.base.query.v1beta1.PageRequest
                     * @static
                     * @param {cosmos.base.query.v1beta1.PageRequest} message PageRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PageRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.key = "";
                            else {
                                object.key = [];
                                if (options.bytes !== Array)
                                    object.key = $util.newBuffer(object.key);
                            }
                            if ($util.Long) {
                                let long = new $util.Long(0, 0, true);
                                object.offset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.offset = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                let long = new $util.Long(0, 0, true);
                                object.limit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.limit = options.longs === String ? "0" : 0;
                            object.countTotal = false;
                            object.reverse = false;
                        }
                        if (message.key != null && message.hasOwnProperty("key"))
                            object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                        if (message.offset != null && message.hasOwnProperty("offset"))
                            if (typeof message.offset === "number")
                                object.offset = options.longs === String ? String(message.offset) : message.offset;
                            else
                                object.offset = options.longs === String ? $util.Long.prototype.toString.call(message.offset) : options.longs === Number ? new $util.LongBits(message.offset.low >>> 0, message.offset.high >>> 0).toNumber(true) : message.offset;
                        if (message.limit != null && message.hasOwnProperty("limit"))
                            if (typeof message.limit === "number")
                                object.limit = options.longs === String ? String(message.limit) : message.limit;
                            else
                                object.limit = options.longs === String ? $util.Long.prototype.toString.call(message.limit) : options.longs === Number ? new $util.LongBits(message.limit.low >>> 0, message.limit.high >>> 0).toNumber(true) : message.limit;
                        if (message.countTotal != null && message.hasOwnProperty("countTotal"))
                            object.countTotal = message.countTotal;
                        if (message.reverse != null && message.hasOwnProperty("reverse"))
                            object.reverse = message.reverse;
                        return object;
                    };

                    /**
                     * Converts this PageRequest to JSON.
                     * @function toJSON
                     * @memberof cosmos.base.query.v1beta1.PageRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PageRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PageRequest;
                })();

                v1beta1.PageResponse = (function() {

                    /**
                     * Properties of a PageResponse.
                     * @memberof cosmos.base.query.v1beta1
                     * @interface IPageResponse
                     * @property {Uint8Array|null} [nextKey] PageResponse nextKey
                     * @property {number|Long|null} [total] PageResponse total
                     */

                    /**
                     * Constructs a new PageResponse.
                     * @memberof cosmos.base.query.v1beta1
                     * @classdesc Represents a PageResponse.
                     * @implements IPageResponse
                     * @constructor
                     * @param {cosmos.base.query.v1beta1.IPageResponse=} [properties] Properties to set
                     */
                    function PageResponse(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PageResponse nextKey.
                     * @member {Uint8Array} nextKey
                     * @memberof cosmos.base.query.v1beta1.PageResponse
                     * @instance
                     */
                    PageResponse.prototype.nextKey = $util.newBuffer([]);

                    /**
                     * PageResponse total.
                     * @member {number|Long} total
                     * @memberof cosmos.base.query.v1beta1.PageResponse
                     * @instance
                     */
                    PageResponse.prototype.total = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Creates a new PageResponse instance using the specified properties.
                     * @function create
                     * @memberof cosmos.base.query.v1beta1.PageResponse
                     * @static
                     * @param {cosmos.base.query.v1beta1.IPageResponse=} [properties] Properties to set
                     * @returns {cosmos.base.query.v1beta1.PageResponse} PageResponse instance
                     */
                    PageResponse.create = function create(properties) {
                        return new PageResponse(properties);
                    };

                    /**
                     * Encodes the specified PageResponse message. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
                     * @function encode
                     * @memberof cosmos.base.query.v1beta1.PageResponse
                     * @static
                     * @param {cosmos.base.query.v1beta1.IPageResponse} message PageResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PageResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.nextKey != null && Object.hasOwnProperty.call(message, "nextKey"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.nextKey);
                        if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.total);
                        return writer;
                    };

                    /**
                     * Encodes the specified PageResponse message, length delimited. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof cosmos.base.query.v1beta1.PageResponse
                     * @static
                     * @param {cosmos.base.query.v1beta1.IPageResponse} message PageResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PageResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PageResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof cosmos.base.query.v1beta1.PageResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {cosmos.base.query.v1beta1.PageResponse} PageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PageResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cosmos.base.query.v1beta1.PageResponse();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.nextKey = reader.bytes();
                                break;
                            case 2:
                                message.total = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PageResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof cosmos.base.query.v1beta1.PageResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {cosmos.base.query.v1beta1.PageResponse} PageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PageResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PageResponse message.
                     * @function verify
                     * @memberof cosmos.base.query.v1beta1.PageResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PageResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.nextKey != null && message.hasOwnProperty("nextKey"))
                            if (!(message.nextKey && typeof message.nextKey.length === "number" || $util.isString(message.nextKey)))
                                return "nextKey: buffer expected";
                        if (message.total != null && message.hasOwnProperty("total"))
                            if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                                return "total: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a PageResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof cosmos.base.query.v1beta1.PageResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {cosmos.base.query.v1beta1.PageResponse} PageResponse
                     */
                    PageResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.cosmos.base.query.v1beta1.PageResponse)
                            return object;
                        let message = new $root.cosmos.base.query.v1beta1.PageResponse();
                        if (object.nextKey != null)
                            if (typeof object.nextKey === "string")
                                $util.base64.decode(object.nextKey, message.nextKey = $util.newBuffer($util.base64.length(object.nextKey)), 0);
                            else if (object.nextKey.length)
                                message.nextKey = object.nextKey;
                        if (object.total != null)
                            if ($util.Long)
                                (message.total = $util.Long.fromValue(object.total)).unsigned = true;
                            else if (typeof object.total === "string")
                                message.total = parseInt(object.total, 10);
                            else if (typeof object.total === "number")
                                message.total = object.total;
                            else if (typeof object.total === "object")
                                message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber(true);
                        return message;
                    };

                    /**
                     * Creates a plain object from a PageResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof cosmos.base.query.v1beta1.PageResponse
                     * @static
                     * @param {cosmos.base.query.v1beta1.PageResponse} message PageResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PageResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.nextKey = "";
                            else {
                                object.nextKey = [];
                                if (options.bytes !== Array)
                                    object.nextKey = $util.newBuffer(object.nextKey);
                            }
                            if ($util.Long) {
                                let long = new $util.Long(0, 0, true);
                                object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.total = options.longs === String ? "0" : 0;
                        }
                        if (message.nextKey != null && message.hasOwnProperty("nextKey"))
                            object.nextKey = options.bytes === String ? $util.base64.encode(message.nextKey, 0, message.nextKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.nextKey) : message.nextKey;
                        if (message.total != null && message.hasOwnProperty("total"))
                            if (typeof message.total === "number")
                                object.total = options.longs === String ? String(message.total) : message.total;
                            else
                                object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber(true) : message.total;
                        return object;
                    };

                    /**
                     * Converts this PageResponse to JSON.
                     * @function toJSON
                     * @memberof cosmos.base.query.v1beta1.PageResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PageResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PageResponse;
                })();

                return v1beta1;
            })();

            return query;
        })();

        return base;
    })();

    return cosmos;
})();

export const blarsy = $root.blarsy = (() => {

    /**
     * Namespace blarsy.
     * @exports blarsy
     * @namespace
     */
    const blarsy = {};

    blarsy.truststore = (function() {

        /**
         * Namespace truststore.
         * @memberof blarsy
         * @namespace
         */
        const truststore = {};

        truststore.truststore = (function() {

            /**
             * Namespace truststore.
             * @memberof blarsy.truststore
             * @namespace
             */
            const truststore = {};

            truststore.Attestation = (function() {

                /**
                 * Properties of an Attestation.
                 * @memberof blarsy.truststore.truststore
                 * @interface IAttestation
                 * @property {string|null} [index] Attestation index
                 * @property {string|null} [identifier] Attestation identifier
                 * @property {string|null} [identifierType] Attestation identifierType
                 * @property {number|Long|null} [rating] Attestation rating
                 * @property {string|null} [creator] Attestation creator
                 */

                /**
                 * Constructs a new Attestation.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents an Attestation.
                 * @implements IAttestation
                 * @constructor
                 * @param {blarsy.truststore.truststore.IAttestation=} [properties] Properties to set
                 */
                function Attestation(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Attestation index.
                 * @member {string} index
                 * @memberof blarsy.truststore.truststore.Attestation
                 * @instance
                 */
                Attestation.prototype.index = "";

                /**
                 * Attestation identifier.
                 * @member {string} identifier
                 * @memberof blarsy.truststore.truststore.Attestation
                 * @instance
                 */
                Attestation.prototype.identifier = "";

                /**
                 * Attestation identifierType.
                 * @member {string} identifierType
                 * @memberof blarsy.truststore.truststore.Attestation
                 * @instance
                 */
                Attestation.prototype.identifierType = "";

                /**
                 * Attestation rating.
                 * @member {number|Long} rating
                 * @memberof blarsy.truststore.truststore.Attestation
                 * @instance
                 */
                Attestation.prototype.rating = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * Attestation creator.
                 * @member {string} creator
                 * @memberof blarsy.truststore.truststore.Attestation
                 * @instance
                 */
                Attestation.prototype.creator = "";

                /**
                 * Creates a new Attestation instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.Attestation
                 * @static
                 * @param {blarsy.truststore.truststore.IAttestation=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.Attestation} Attestation instance
                 */
                Attestation.create = function create(properties) {
                    return new Attestation(properties);
                };

                /**
                 * Encodes the specified Attestation message. Does not implicitly {@link blarsy.truststore.truststore.Attestation.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.Attestation
                 * @static
                 * @param {blarsy.truststore.truststore.IAttestation} message Attestation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Attestation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.index);
                    if (message.identifier != null && Object.hasOwnProperty.call(message, "identifier"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.identifier);
                    if (message.identifierType != null && Object.hasOwnProperty.call(message, "identifierType"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierType);
                    if (message.rating != null && Object.hasOwnProperty.call(message, "rating"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.rating);
                    if (message.creator != null && Object.hasOwnProperty.call(message, "creator"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.creator);
                    return writer;
                };

                /**
                 * Encodes the specified Attestation message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.Attestation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.Attestation
                 * @static
                 * @param {blarsy.truststore.truststore.IAttestation} message Attestation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Attestation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Attestation message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.Attestation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.Attestation} Attestation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Attestation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.Attestation();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.index = reader.string();
                            break;
                        case 2:
                            message.identifier = reader.string();
                            break;
                        case 3:
                            message.identifierType = reader.string();
                            break;
                        case 4:
                            message.rating = reader.uint64();
                            break;
                        case 5:
                            message.creator = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Attestation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.Attestation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.Attestation} Attestation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Attestation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Attestation message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.Attestation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Attestation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.index != null && message.hasOwnProperty("index"))
                        if (!$util.isString(message.index))
                            return "index: string expected";
                    if (message.identifier != null && message.hasOwnProperty("identifier"))
                        if (!$util.isString(message.identifier))
                            return "identifier: string expected";
                    if (message.identifierType != null && message.hasOwnProperty("identifierType"))
                        if (!$util.isString(message.identifierType))
                            return "identifierType: string expected";
                    if (message.rating != null && message.hasOwnProperty("rating"))
                        if (!$util.isInteger(message.rating) && !(message.rating && $util.isInteger(message.rating.low) && $util.isInteger(message.rating.high)))
                            return "rating: integer|Long expected";
                    if (message.creator != null && message.hasOwnProperty("creator"))
                        if (!$util.isString(message.creator))
                            return "creator: string expected";
                    return null;
                };

                /**
                 * Creates an Attestation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.Attestation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.Attestation} Attestation
                 */
                Attestation.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.Attestation)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.Attestation();
                    if (object.index != null)
                        message.index = String(object.index);
                    if (object.identifier != null)
                        message.identifier = String(object.identifier);
                    if (object.identifierType != null)
                        message.identifierType = String(object.identifierType);
                    if (object.rating != null)
                        if ($util.Long)
                            (message.rating = $util.Long.fromValue(object.rating)).unsigned = true;
                        else if (typeof object.rating === "string")
                            message.rating = parseInt(object.rating, 10);
                        else if (typeof object.rating === "number")
                            message.rating = object.rating;
                        else if (typeof object.rating === "object")
                            message.rating = new $util.LongBits(object.rating.low >>> 0, object.rating.high >>> 0).toNumber(true);
                    if (object.creator != null)
                        message.creator = String(object.creator);
                    return message;
                };

                /**
                 * Creates a plain object from an Attestation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.Attestation
                 * @static
                 * @param {blarsy.truststore.truststore.Attestation} message Attestation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Attestation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.index = "";
                        object.identifier = "";
                        object.identifierType = "";
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
                            object.rating = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.rating = options.longs === String ? "0" : 0;
                        object.creator = "";
                    }
                    if (message.index != null && message.hasOwnProperty("index"))
                        object.index = message.index;
                    if (message.identifier != null && message.hasOwnProperty("identifier"))
                        object.identifier = message.identifier;
                    if (message.identifierType != null && message.hasOwnProperty("identifierType"))
                        object.identifierType = message.identifierType;
                    if (message.rating != null && message.hasOwnProperty("rating"))
                        if (typeof message.rating === "number")
                            object.rating = options.longs === String ? String(message.rating) : message.rating;
                        else
                            object.rating = options.longs === String ? $util.Long.prototype.toString.call(message.rating) : options.longs === Number ? new $util.LongBits(message.rating.low >>> 0, message.rating.high >>> 0).toNumber(true) : message.rating;
                    if (message.creator != null && message.hasOwnProperty("creator"))
                        object.creator = message.creator;
                    return object;
                };

                /**
                 * Converts this Attestation to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.Attestation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Attestation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Attestation;
            })();

            truststore.Ids = (function() {

                /**
                 * Properties of an Ids.
                 * @memberof blarsy.truststore.truststore
                 * @interface IIds
                 * @property {Array.<string>|null} [indexes] Ids indexes
                 */

                /**
                 * Constructs a new Ids.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents an Ids.
                 * @implements IIds
                 * @constructor
                 * @param {blarsy.truststore.truststore.IIds=} [properties] Properties to set
                 */
                function Ids(properties) {
                    this.indexes = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Ids indexes.
                 * @member {Array.<string>} indexes
                 * @memberof blarsy.truststore.truststore.Ids
                 * @instance
                 */
                Ids.prototype.indexes = $util.emptyArray;

                /**
                 * Creates a new Ids instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.Ids
                 * @static
                 * @param {blarsy.truststore.truststore.IIds=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.Ids} Ids instance
                 */
                Ids.create = function create(properties) {
                    return new Ids(properties);
                };

                /**
                 * Encodes the specified Ids message. Does not implicitly {@link blarsy.truststore.truststore.Ids.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.Ids
                 * @static
                 * @param {blarsy.truststore.truststore.IIds} message Ids message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Ids.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.indexes != null && message.indexes.length)
                        for (let i = 0; i < message.indexes.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.indexes[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Ids message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.Ids.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.Ids
                 * @static
                 * @param {blarsy.truststore.truststore.IIds} message Ids message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Ids.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Ids message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.Ids
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.Ids} Ids
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Ids.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.Ids();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.indexes && message.indexes.length))
                                message.indexes = [];
                            message.indexes.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Ids message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.Ids
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.Ids} Ids
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Ids.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Ids message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.Ids
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Ids.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.indexes != null && message.hasOwnProperty("indexes")) {
                        if (!Array.isArray(message.indexes))
                            return "indexes: array expected";
                        for (let i = 0; i < message.indexes.length; ++i)
                            if (!$util.isString(message.indexes[i]))
                                return "indexes: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates an Ids message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.Ids
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.Ids} Ids
                 */
                Ids.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.Ids)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.Ids();
                    if (object.indexes) {
                        if (!Array.isArray(object.indexes))
                            throw TypeError(".blarsy.truststore.truststore.Ids.indexes: array expected");
                        message.indexes = [];
                        for (let i = 0; i < object.indexes.length; ++i)
                            message.indexes[i] = String(object.indexes[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Ids message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.Ids
                 * @static
                 * @param {blarsy.truststore.truststore.Ids} message Ids
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Ids.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.indexes = [];
                    if (message.indexes && message.indexes.length) {
                        object.indexes = [];
                        for (let j = 0; j < message.indexes.length; ++j)
                            object.indexes[j] = message.indexes[j];
                    }
                    return object;
                };

                /**
                 * Converts this Ids to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.Ids
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Ids.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Ids;
            })();

            truststore.AttestationIdsByCreator = (function() {

                /**
                 * Properties of an AttestationIdsByCreator.
                 * @memberof blarsy.truststore.truststore
                 * @interface IAttestationIdsByCreator
                 * @property {Object.<string,blarsy.truststore.truststore.IIds>|null} [ids] AttestationIdsByCreator ids
                 */

                /**
                 * Constructs a new AttestationIdsByCreator.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents an AttestationIdsByCreator.
                 * @implements IAttestationIdsByCreator
                 * @constructor
                 * @param {blarsy.truststore.truststore.IAttestationIdsByCreator=} [properties] Properties to set
                 */
                function AttestationIdsByCreator(properties) {
                    this.ids = {};
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AttestationIdsByCreator ids.
                 * @member {Object.<string,blarsy.truststore.truststore.IIds>} ids
                 * @memberof blarsy.truststore.truststore.AttestationIdsByCreator
                 * @instance
                 */
                AttestationIdsByCreator.prototype.ids = $util.emptyObject;

                /**
                 * Creates a new AttestationIdsByCreator instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.AttestationIdsByCreator
                 * @static
                 * @param {blarsy.truststore.truststore.IAttestationIdsByCreator=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.AttestationIdsByCreator} AttestationIdsByCreator instance
                 */
                AttestationIdsByCreator.create = function create(properties) {
                    return new AttestationIdsByCreator(properties);
                };

                /**
                 * Encodes the specified AttestationIdsByCreator message. Does not implicitly {@link blarsy.truststore.truststore.AttestationIdsByCreator.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.AttestationIdsByCreator
                 * @static
                 * @param {blarsy.truststore.truststore.IAttestationIdsByCreator} message AttestationIdsByCreator message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AttestationIdsByCreator.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ids != null && Object.hasOwnProperty.call(message, "ids"))
                        for (let keys = Object.keys(message.ids), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.blarsy.truststore.truststore.Ids.encode(message.ids[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };

                /**
                 * Encodes the specified AttestationIdsByCreator message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.AttestationIdsByCreator.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.AttestationIdsByCreator
                 * @static
                 * @param {blarsy.truststore.truststore.IAttestationIdsByCreator} message AttestationIdsByCreator message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AttestationIdsByCreator.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AttestationIdsByCreator message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.AttestationIdsByCreator
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.AttestationIdsByCreator} AttestationIdsByCreator
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AttestationIdsByCreator.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.AttestationIdsByCreator(), key, value;
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (message.ids === $util.emptyObject)
                                message.ids = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.blarsy.truststore.truststore.Ids.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.ids[key] = value;
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AttestationIdsByCreator message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.AttestationIdsByCreator
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.AttestationIdsByCreator} AttestationIdsByCreator
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AttestationIdsByCreator.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AttestationIdsByCreator message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.AttestationIdsByCreator
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AttestationIdsByCreator.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ids != null && message.hasOwnProperty("ids")) {
                        if (!$util.isObject(message.ids))
                            return "ids: object expected";
                        let key = Object.keys(message.ids);
                        for (let i = 0; i < key.length; ++i) {
                            let error = $root.blarsy.truststore.truststore.Ids.verify(message.ids[key[i]]);
                            if (error)
                                return "ids." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an AttestationIdsByCreator message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.AttestationIdsByCreator
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.AttestationIdsByCreator} AttestationIdsByCreator
                 */
                AttestationIdsByCreator.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.AttestationIdsByCreator)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.AttestationIdsByCreator();
                    if (object.ids) {
                        if (typeof object.ids !== "object")
                            throw TypeError(".blarsy.truststore.truststore.AttestationIdsByCreator.ids: object expected");
                        message.ids = {};
                        for (let keys = Object.keys(object.ids), i = 0; i < keys.length; ++i) {
                            if (typeof object.ids[keys[i]] !== "object")
                                throw TypeError(".blarsy.truststore.truststore.AttestationIdsByCreator.ids: object expected");
                            message.ids[keys[i]] = $root.blarsy.truststore.truststore.Ids.fromObject(object.ids[keys[i]]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AttestationIdsByCreator message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.AttestationIdsByCreator
                 * @static
                 * @param {blarsy.truststore.truststore.AttestationIdsByCreator} message AttestationIdsByCreator
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AttestationIdsByCreator.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.objects || options.defaults)
                        object.ids = {};
                    let keys2;
                    if (message.ids && (keys2 = Object.keys(message.ids)).length) {
                        object.ids = {};
                        for (let j = 0; j < keys2.length; ++j)
                            object.ids[keys2[j]] = $root.blarsy.truststore.truststore.Ids.toObject(message.ids[keys2[j]], options);
                    }
                    return object;
                };

                /**
                 * Converts this AttestationIdsByCreator to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.AttestationIdsByCreator
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AttestationIdsByCreator.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AttestationIdsByCreator;
            })();

            truststore.IdentifierType = (function() {

                /**
                 * Properties of an IdentifierType.
                 * @memberof blarsy.truststore.truststore
                 * @interface IIdentifierType
                 * @property {string|null} [index] IdentifierType index
                 * @property {string|null} [name] IdentifierType name
                 * @property {string|null} [description] IdentifierType description
                 */

                /**
                 * Constructs a new IdentifierType.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents an IdentifierType.
                 * @implements IIdentifierType
                 * @constructor
                 * @param {blarsy.truststore.truststore.IIdentifierType=} [properties] Properties to set
                 */
                function IdentifierType(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * IdentifierType index.
                 * @member {string} index
                 * @memberof blarsy.truststore.truststore.IdentifierType
                 * @instance
                 */
                IdentifierType.prototype.index = "";

                /**
                 * IdentifierType name.
                 * @member {string} name
                 * @memberof blarsy.truststore.truststore.IdentifierType
                 * @instance
                 */
                IdentifierType.prototype.name = "";

                /**
                 * IdentifierType description.
                 * @member {string} description
                 * @memberof blarsy.truststore.truststore.IdentifierType
                 * @instance
                 */
                IdentifierType.prototype.description = "";

                /**
                 * Creates a new IdentifierType instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.IdentifierType
                 * @static
                 * @param {blarsy.truststore.truststore.IIdentifierType=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.IdentifierType} IdentifierType instance
                 */
                IdentifierType.create = function create(properties) {
                    return new IdentifierType(properties);
                };

                /**
                 * Encodes the specified IdentifierType message. Does not implicitly {@link blarsy.truststore.truststore.IdentifierType.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.IdentifierType
                 * @static
                 * @param {blarsy.truststore.truststore.IIdentifierType} message IdentifierType message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                IdentifierType.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.index);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
                    return writer;
                };

                /**
                 * Encodes the specified IdentifierType message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.IdentifierType.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.IdentifierType
                 * @static
                 * @param {blarsy.truststore.truststore.IIdentifierType} message IdentifierType message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                IdentifierType.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an IdentifierType message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.IdentifierType
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.IdentifierType} IdentifierType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                IdentifierType.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.IdentifierType();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.index = reader.string();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.description = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an IdentifierType message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.IdentifierType
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.IdentifierType} IdentifierType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                IdentifierType.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an IdentifierType message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.IdentifierType
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                IdentifierType.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.index != null && message.hasOwnProperty("index"))
                        if (!$util.isString(message.index))
                            return "index: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    return null;
                };

                /**
                 * Creates an IdentifierType message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.IdentifierType
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.IdentifierType} IdentifierType
                 */
                IdentifierType.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.IdentifierType)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.IdentifierType();
                    if (object.index != null)
                        message.index = String(object.index);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.description != null)
                        message.description = String(object.description);
                    return message;
                };

                /**
                 * Creates a plain object from an IdentifierType message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.IdentifierType
                 * @static
                 * @param {blarsy.truststore.truststore.IdentifierType} message IdentifierType
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                IdentifierType.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.index = "";
                        object.name = "";
                        object.description = "";
                    }
                    if (message.index != null && message.hasOwnProperty("index"))
                        object.index = message.index;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    return object;
                };

                /**
                 * Converts this IdentifierType to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.IdentifierType
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                IdentifierType.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return IdentifierType;
            })();

            truststore.Query = (function() {

                /**
                 * Constructs a new Query service.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a Query
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function Query(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (Query.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Query;

                /**
                 * Creates new Query service using the specified rpc implementation.
                 * @function create
                 * @memberof blarsy.truststore.truststore.Query
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {Query} RPC service. Useful where requests and/or responses are streamed.
                 */
                Query.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Query#params}.
                 * @memberof blarsy.truststore.truststore.Query
                 * @typedef ParamsCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {blarsy.truststore.truststore.QueryParamsResponse} [response] QueryParamsResponse
                 */

                /**
                 * Calls Params.
                 * @function params
                 * @memberof blarsy.truststore.truststore.Query
                 * @instance
                 * @param {blarsy.truststore.truststore.IQueryParamsRequest} request QueryParamsRequest message or plain object
                 * @param {blarsy.truststore.truststore.Query.ParamsCallback} callback Node-style callback called with the error, if any, and QueryParamsResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Query.prototype.params = function params(request, callback) {
                    return this.rpcCall(params, $root.blarsy.truststore.truststore.QueryParamsRequest, $root.blarsy.truststore.truststore.QueryParamsResponse, request, callback);
                }, "name", { value: "Params" });

                /**
                 * Calls Params.
                 * @function params
                 * @memberof blarsy.truststore.truststore.Query
                 * @instance
                 * @param {blarsy.truststore.truststore.IQueryParamsRequest} request QueryParamsRequest message or plain object
                 * @returns {Promise<blarsy.truststore.truststore.QueryParamsResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Query#attestation}.
                 * @memberof blarsy.truststore.truststore.Query
                 * @typedef AttestationCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {blarsy.truststore.truststore.QueryGetAttestationResponse} [response] QueryGetAttestationResponse
                 */

                /**
                 * Calls Attestation.
                 * @function attestation
                 * @memberof blarsy.truststore.truststore.Query
                 * @instance
                 * @param {blarsy.truststore.truststore.IQueryGetAttestationRequest} request QueryGetAttestationRequest message or plain object
                 * @param {blarsy.truststore.truststore.Query.AttestationCallback} callback Node-style callback called with the error, if any, and QueryGetAttestationResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Query.prototype.attestation = function attestation(request, callback) {
                    return this.rpcCall(attestation, $root.blarsy.truststore.truststore.QueryGetAttestationRequest, $root.blarsy.truststore.truststore.QueryGetAttestationResponse, request, callback);
                }, "name", { value: "Attestation" });

                /**
                 * Calls Attestation.
                 * @function attestation
                 * @memberof blarsy.truststore.truststore.Query
                 * @instance
                 * @param {blarsy.truststore.truststore.IQueryGetAttestationRequest} request QueryGetAttestationRequest message or plain object
                 * @returns {Promise<blarsy.truststore.truststore.QueryGetAttestationResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Query#attestationAll}.
                 * @memberof blarsy.truststore.truststore.Query
                 * @typedef AttestationAllCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {blarsy.truststore.truststore.QueryAllAttestationResponse} [response] QueryAllAttestationResponse
                 */

                /**
                 * Calls AttestationAll.
                 * @function attestationAll
                 * @memberof blarsy.truststore.truststore.Query
                 * @instance
                 * @param {blarsy.truststore.truststore.IQueryAllAttestationRequest} request QueryAllAttestationRequest message or plain object
                 * @param {blarsy.truststore.truststore.Query.AttestationAllCallback} callback Node-style callback called with the error, if any, and QueryAllAttestationResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Query.prototype.attestationAll = function attestationAll(request, callback) {
                    return this.rpcCall(attestationAll, $root.blarsy.truststore.truststore.QueryAllAttestationRequest, $root.blarsy.truststore.truststore.QueryAllAttestationResponse, request, callback);
                }, "name", { value: "AttestationAll" });

                /**
                 * Calls AttestationAll.
                 * @function attestationAll
                 * @memberof blarsy.truststore.truststore.Query
                 * @instance
                 * @param {blarsy.truststore.truststore.IQueryAllAttestationRequest} request QueryAllAttestationRequest message or plain object
                 * @returns {Promise<blarsy.truststore.truststore.QueryAllAttestationResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Query#identifierType}.
                 * @memberof blarsy.truststore.truststore.Query
                 * @typedef IdentifierTypeCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {blarsy.truststore.truststore.QueryGetIdentifierTypeResponse} [response] QueryGetIdentifierTypeResponse
                 */

                /**
                 * Calls IdentifierType.
                 * @function identifierType
                 * @memberof blarsy.truststore.truststore.Query
                 * @instance
                 * @param {blarsy.truststore.truststore.IQueryGetIdentifierTypeRequest} request QueryGetIdentifierTypeRequest message or plain object
                 * @param {blarsy.truststore.truststore.Query.IdentifierTypeCallback} callback Node-style callback called with the error, if any, and QueryGetIdentifierTypeResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Query.prototype.identifierType = function identifierType(request, callback) {
                    return this.rpcCall(identifierType, $root.blarsy.truststore.truststore.QueryGetIdentifierTypeRequest, $root.blarsy.truststore.truststore.QueryGetIdentifierTypeResponse, request, callback);
                }, "name", { value: "IdentifierType" });

                /**
                 * Calls IdentifierType.
                 * @function identifierType
                 * @memberof blarsy.truststore.truststore.Query
                 * @instance
                 * @param {blarsy.truststore.truststore.IQueryGetIdentifierTypeRequest} request QueryGetIdentifierTypeRequest message or plain object
                 * @returns {Promise<blarsy.truststore.truststore.QueryGetIdentifierTypeResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Query#identifierTypeAll}.
                 * @memberof blarsy.truststore.truststore.Query
                 * @typedef IdentifierTypeAllCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {blarsy.truststore.truststore.QueryAllIdentifierTypeResponse} [response] QueryAllIdentifierTypeResponse
                 */

                /**
                 * Calls IdentifierTypeAll.
                 * @function identifierTypeAll
                 * @memberof blarsy.truststore.truststore.Query
                 * @instance
                 * @param {blarsy.truststore.truststore.IQueryAllIdentifierTypeRequest} request QueryAllIdentifierTypeRequest message or plain object
                 * @param {blarsy.truststore.truststore.Query.IdentifierTypeAllCallback} callback Node-style callback called with the error, if any, and QueryAllIdentifierTypeResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Query.prototype.identifierTypeAll = function identifierTypeAll(request, callback) {
                    return this.rpcCall(identifierTypeAll, $root.blarsy.truststore.truststore.QueryAllIdentifierTypeRequest, $root.blarsy.truststore.truststore.QueryAllIdentifierTypeResponse, request, callback);
                }, "name", { value: "IdentifierTypeAll" });

                /**
                 * Calls IdentifierTypeAll.
                 * @function identifierTypeAll
                 * @memberof blarsy.truststore.truststore.Query
                 * @instance
                 * @param {blarsy.truststore.truststore.IQueryAllIdentifierTypeRequest} request QueryAllIdentifierTypeRequest message or plain object
                 * @returns {Promise<blarsy.truststore.truststore.QueryAllIdentifierTypeResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Query#global}.
                 * @memberof blarsy.truststore.truststore.Query
                 * @typedef GlobalCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {blarsy.truststore.truststore.QueryGetGlobalResponse} [response] QueryGetGlobalResponse
                 */

                /**
                 * Calls Global.
                 * @function global
                 * @memberof blarsy.truststore.truststore.Query
                 * @instance
                 * @param {blarsy.truststore.truststore.IQueryGetGlobalRequest} request QueryGetGlobalRequest message or plain object
                 * @param {blarsy.truststore.truststore.Query.GlobalCallback} callback Node-style callback called with the error, if any, and QueryGetGlobalResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Query.prototype.global = function global(request, callback) {
                    return this.rpcCall(global, $root.blarsy.truststore.truststore.QueryGetGlobalRequest, $root.blarsy.truststore.truststore.QueryGetGlobalResponse, request, callback);
                }, "name", { value: "Global" });

                /**
                 * Calls Global.
                 * @function global
                 * @memberof blarsy.truststore.truststore.Query
                 * @instance
                 * @param {blarsy.truststore.truststore.IQueryGetGlobalRequest} request QueryGetGlobalRequest message or plain object
                 * @returns {Promise<blarsy.truststore.truststore.QueryGetGlobalResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Query#attestationByCreatorIdentifier}.
                 * @memberof blarsy.truststore.truststore.Query
                 * @typedef AttestationByCreatorIdentifierCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse} [response] QueryAttestationByCreatorIdentifierResponse
                 */

                /**
                 * Calls AttestationByCreatorIdentifier.
                 * @function attestationByCreatorIdentifier
                 * @memberof blarsy.truststore.truststore.Query
                 * @instance
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierRequest} request QueryAttestationByCreatorIdentifierRequest message or plain object
                 * @param {blarsy.truststore.truststore.Query.AttestationByCreatorIdentifierCallback} callback Node-style callback called with the error, if any, and QueryAttestationByCreatorIdentifierResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Query.prototype.attestationByCreatorIdentifier = function attestationByCreatorIdentifier(request, callback) {
                    return this.rpcCall(attestationByCreatorIdentifier, $root.blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest, $root.blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse, request, callback);
                }, "name", { value: "AttestationByCreatorIdentifier" });

                /**
                 * Calls AttestationByCreatorIdentifier.
                 * @function attestationByCreatorIdentifier
                 * @memberof blarsy.truststore.truststore.Query
                 * @instance
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierRequest} request QueryAttestationByCreatorIdentifierRequest message or plain object
                 * @returns {Promise<blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Query#attestationByCreator}.
                 * @memberof blarsy.truststore.truststore.Query
                 * @typedef AttestationByCreatorCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {blarsy.truststore.truststore.QueryAttestationByCreatorResponse} [response] QueryAttestationByCreatorResponse
                 */

                /**
                 * Calls AttestationByCreator.
                 * @function attestationByCreator
                 * @memberof blarsy.truststore.truststore.Query
                 * @instance
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorRequest} request QueryAttestationByCreatorRequest message or plain object
                 * @param {blarsy.truststore.truststore.Query.AttestationByCreatorCallback} callback Node-style callback called with the error, if any, and QueryAttestationByCreatorResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Query.prototype.attestationByCreator = function attestationByCreator(request, callback) {
                    return this.rpcCall(attestationByCreator, $root.blarsy.truststore.truststore.QueryAttestationByCreatorRequest, $root.blarsy.truststore.truststore.QueryAttestationByCreatorResponse, request, callback);
                }, "name", { value: "AttestationByCreator" });

                /**
                 * Calls AttestationByCreator.
                 * @function attestationByCreator
                 * @memberof blarsy.truststore.truststore.Query
                 * @instance
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorRequest} request QueryAttestationByCreatorRequest message or plain object
                 * @returns {Promise<blarsy.truststore.truststore.QueryAttestationByCreatorResponse>} Promise
                 * @variation 2
                 */

                return Query;
            })();

            truststore.QueryParamsRequest = (function() {

                /**
                 * Properties of a QueryParamsRequest.
                 * @memberof blarsy.truststore.truststore
                 * @interface IQueryParamsRequest
                 */

                /**
                 * Constructs a new QueryParamsRequest.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a QueryParamsRequest.
                 * @implements IQueryParamsRequest
                 * @constructor
                 * @param {blarsy.truststore.truststore.IQueryParamsRequest=} [properties] Properties to set
                 */
                function QueryParamsRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new QueryParamsRequest instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.QueryParamsRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryParamsRequest=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.QueryParamsRequest} QueryParamsRequest instance
                 */
                QueryParamsRequest.create = function create(properties) {
                    return new QueryParamsRequest(properties);
                };

                /**
                 * Encodes the specified QueryParamsRequest message. Does not implicitly {@link blarsy.truststore.truststore.QueryParamsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.QueryParamsRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryParamsRequest} message QueryParamsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryParamsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified QueryParamsRequest message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryParamsRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryParamsRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryParamsRequest} message QueryParamsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryParamsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryParamsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.QueryParamsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.QueryParamsRequest} QueryParamsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryParamsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.QueryParamsRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryParamsRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryParamsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.QueryParamsRequest} QueryParamsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryParamsRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryParamsRequest message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.QueryParamsRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryParamsRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a QueryParamsRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.QueryParamsRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.QueryParamsRequest} QueryParamsRequest
                 */
                QueryParamsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.QueryParamsRequest)
                        return object;
                    return new $root.blarsy.truststore.truststore.QueryParamsRequest();
                };

                /**
                 * Creates a plain object from a QueryParamsRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.QueryParamsRequest
                 * @static
                 * @param {blarsy.truststore.truststore.QueryParamsRequest} message QueryParamsRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryParamsRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this QueryParamsRequest to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.QueryParamsRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryParamsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryParamsRequest;
            })();

            truststore.QueryParamsResponse = (function() {

                /**
                 * Properties of a QueryParamsResponse.
                 * @memberof blarsy.truststore.truststore
                 * @interface IQueryParamsResponse
                 * @property {blarsy.truststore.truststore.IParams|null} [params] QueryParamsResponse params
                 */

                /**
                 * Constructs a new QueryParamsResponse.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a QueryParamsResponse.
                 * @implements IQueryParamsResponse
                 * @constructor
                 * @param {blarsy.truststore.truststore.IQueryParamsResponse=} [properties] Properties to set
                 */
                function QueryParamsResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryParamsResponse params.
                 * @member {blarsy.truststore.truststore.IParams|null|undefined} params
                 * @memberof blarsy.truststore.truststore.QueryParamsResponse
                 * @instance
                 */
                QueryParamsResponse.prototype.params = null;

                /**
                 * Creates a new QueryParamsResponse instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.QueryParamsResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryParamsResponse=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.QueryParamsResponse} QueryParamsResponse instance
                 */
                QueryParamsResponse.create = function create(properties) {
                    return new QueryParamsResponse(properties);
                };

                /**
                 * Encodes the specified QueryParamsResponse message. Does not implicitly {@link blarsy.truststore.truststore.QueryParamsResponse.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.QueryParamsResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryParamsResponse} message QueryParamsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryParamsResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.params != null && Object.hasOwnProperty.call(message, "params"))
                        $root.blarsy.truststore.truststore.Params.encode(message.params, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified QueryParamsResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryParamsResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryParamsResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryParamsResponse} message QueryParamsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryParamsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryParamsResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.QueryParamsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.QueryParamsResponse} QueryParamsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryParamsResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.QueryParamsResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.params = $root.blarsy.truststore.truststore.Params.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryParamsResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryParamsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.QueryParamsResponse} QueryParamsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryParamsResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryParamsResponse message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.QueryParamsResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryParamsResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.params != null && message.hasOwnProperty("params")) {
                        let error = $root.blarsy.truststore.truststore.Params.verify(message.params);
                        if (error)
                            return "params." + error;
                    }
                    return null;
                };

                /**
                 * Creates a QueryParamsResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.QueryParamsResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.QueryParamsResponse} QueryParamsResponse
                 */
                QueryParamsResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.QueryParamsResponse)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.QueryParamsResponse();
                    if (object.params != null) {
                        if (typeof object.params !== "object")
                            throw TypeError(".blarsy.truststore.truststore.QueryParamsResponse.params: object expected");
                        message.params = $root.blarsy.truststore.truststore.Params.fromObject(object.params);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a QueryParamsResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.QueryParamsResponse
                 * @static
                 * @param {blarsy.truststore.truststore.QueryParamsResponse} message QueryParamsResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryParamsResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.params = null;
                    if (message.params != null && message.hasOwnProperty("params"))
                        object.params = $root.blarsy.truststore.truststore.Params.toObject(message.params, options);
                    return object;
                };

                /**
                 * Converts this QueryParamsResponse to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.QueryParamsResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryParamsResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryParamsResponse;
            })();

            truststore.QueryGetAttestationRequest = (function() {

                /**
                 * Properties of a QueryGetAttestationRequest.
                 * @memberof blarsy.truststore.truststore
                 * @interface IQueryGetAttestationRequest
                 * @property {string|null} [index] QueryGetAttestationRequest index
                 */

                /**
                 * Constructs a new QueryGetAttestationRequest.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a QueryGetAttestationRequest.
                 * @implements IQueryGetAttestationRequest
                 * @constructor
                 * @param {blarsy.truststore.truststore.IQueryGetAttestationRequest=} [properties] Properties to set
                 */
                function QueryGetAttestationRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryGetAttestationRequest index.
                 * @member {string} index
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationRequest
                 * @instance
                 */
                QueryGetAttestationRequest.prototype.index = "";

                /**
                 * Creates a new QueryGetAttestationRequest instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetAttestationRequest=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.QueryGetAttestationRequest} QueryGetAttestationRequest instance
                 */
                QueryGetAttestationRequest.create = function create(properties) {
                    return new QueryGetAttestationRequest(properties);
                };

                /**
                 * Encodes the specified QueryGetAttestationRequest message. Does not implicitly {@link blarsy.truststore.truststore.QueryGetAttestationRequest.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetAttestationRequest} message QueryGetAttestationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGetAttestationRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.index);
                    return writer;
                };

                /**
                 * Encodes the specified QueryGetAttestationRequest message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryGetAttestationRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetAttestationRequest} message QueryGetAttestationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGetAttestationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryGetAttestationRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.QueryGetAttestationRequest} QueryGetAttestationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGetAttestationRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.QueryGetAttestationRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.index = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryGetAttestationRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.QueryGetAttestationRequest} QueryGetAttestationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGetAttestationRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryGetAttestationRequest message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryGetAttestationRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.index != null && message.hasOwnProperty("index"))
                        if (!$util.isString(message.index))
                            return "index: string expected";
                    return null;
                };

                /**
                 * Creates a QueryGetAttestationRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.QueryGetAttestationRequest} QueryGetAttestationRequest
                 */
                QueryGetAttestationRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.QueryGetAttestationRequest)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.QueryGetAttestationRequest();
                    if (object.index != null)
                        message.index = String(object.index);
                    return message;
                };

                /**
                 * Creates a plain object from a QueryGetAttestationRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationRequest
                 * @static
                 * @param {blarsy.truststore.truststore.QueryGetAttestationRequest} message QueryGetAttestationRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryGetAttestationRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.index = "";
                    if (message.index != null && message.hasOwnProperty("index"))
                        object.index = message.index;
                    return object;
                };

                /**
                 * Converts this QueryGetAttestationRequest to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryGetAttestationRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryGetAttestationRequest;
            })();

            truststore.QueryGetAttestationResponse = (function() {

                /**
                 * Properties of a QueryGetAttestationResponse.
                 * @memberof blarsy.truststore.truststore
                 * @interface IQueryGetAttestationResponse
                 * @property {blarsy.truststore.truststore.IAttestation|null} [attestation] QueryGetAttestationResponse attestation
                 */

                /**
                 * Constructs a new QueryGetAttestationResponse.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a QueryGetAttestationResponse.
                 * @implements IQueryGetAttestationResponse
                 * @constructor
                 * @param {blarsy.truststore.truststore.IQueryGetAttestationResponse=} [properties] Properties to set
                 */
                function QueryGetAttestationResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryGetAttestationResponse attestation.
                 * @member {blarsy.truststore.truststore.IAttestation|null|undefined} attestation
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationResponse
                 * @instance
                 */
                QueryGetAttestationResponse.prototype.attestation = null;

                /**
                 * Creates a new QueryGetAttestationResponse instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetAttestationResponse=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.QueryGetAttestationResponse} QueryGetAttestationResponse instance
                 */
                QueryGetAttestationResponse.create = function create(properties) {
                    return new QueryGetAttestationResponse(properties);
                };

                /**
                 * Encodes the specified QueryGetAttestationResponse message. Does not implicitly {@link blarsy.truststore.truststore.QueryGetAttestationResponse.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetAttestationResponse} message QueryGetAttestationResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGetAttestationResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.attestation != null && Object.hasOwnProperty.call(message, "attestation"))
                        $root.blarsy.truststore.truststore.Attestation.encode(message.attestation, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified QueryGetAttestationResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryGetAttestationResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetAttestationResponse} message QueryGetAttestationResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGetAttestationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryGetAttestationResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.QueryGetAttestationResponse} QueryGetAttestationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGetAttestationResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.QueryGetAttestationResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.attestation = $root.blarsy.truststore.truststore.Attestation.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryGetAttestationResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.QueryGetAttestationResponse} QueryGetAttestationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGetAttestationResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryGetAttestationResponse message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryGetAttestationResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.attestation != null && message.hasOwnProperty("attestation")) {
                        let error = $root.blarsy.truststore.truststore.Attestation.verify(message.attestation);
                        if (error)
                            return "attestation." + error;
                    }
                    return null;
                };

                /**
                 * Creates a QueryGetAttestationResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.QueryGetAttestationResponse} QueryGetAttestationResponse
                 */
                QueryGetAttestationResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.QueryGetAttestationResponse)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.QueryGetAttestationResponse();
                    if (object.attestation != null) {
                        if (typeof object.attestation !== "object")
                            throw TypeError(".blarsy.truststore.truststore.QueryGetAttestationResponse.attestation: object expected");
                        message.attestation = $root.blarsy.truststore.truststore.Attestation.fromObject(object.attestation);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a QueryGetAttestationResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationResponse
                 * @static
                 * @param {blarsy.truststore.truststore.QueryGetAttestationResponse} message QueryGetAttestationResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryGetAttestationResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.attestation = null;
                    if (message.attestation != null && message.hasOwnProperty("attestation"))
                        object.attestation = $root.blarsy.truststore.truststore.Attestation.toObject(message.attestation, options);
                    return object;
                };

                /**
                 * Converts this QueryGetAttestationResponse to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.QueryGetAttestationResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryGetAttestationResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryGetAttestationResponse;
            })();

            truststore.QueryAllAttestationRequest = (function() {

                /**
                 * Properties of a QueryAllAttestationRequest.
                 * @memberof blarsy.truststore.truststore
                 * @interface IQueryAllAttestationRequest
                 * @property {cosmos.base.query.v1beta1.IPageRequest|null} [pagination] QueryAllAttestationRequest pagination
                 */

                /**
                 * Constructs a new QueryAllAttestationRequest.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a QueryAllAttestationRequest.
                 * @implements IQueryAllAttestationRequest
                 * @constructor
                 * @param {blarsy.truststore.truststore.IQueryAllAttestationRequest=} [properties] Properties to set
                 */
                function QueryAllAttestationRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryAllAttestationRequest pagination.
                 * @member {cosmos.base.query.v1beta1.IPageRequest|null|undefined} pagination
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationRequest
                 * @instance
                 */
                QueryAllAttestationRequest.prototype.pagination = null;

                /**
                 * Creates a new QueryAllAttestationRequest instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAllAttestationRequest=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.QueryAllAttestationRequest} QueryAllAttestationRequest instance
                 */
                QueryAllAttestationRequest.create = function create(properties) {
                    return new QueryAllAttestationRequest(properties);
                };

                /**
                 * Encodes the specified QueryAllAttestationRequest message. Does not implicitly {@link blarsy.truststore.truststore.QueryAllAttestationRequest.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAllAttestationRequest} message QueryAllAttestationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryAllAttestationRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.pagination != null && Object.hasOwnProperty.call(message, "pagination"))
                        $root.cosmos.base.query.v1beta1.PageRequest.encode(message.pagination, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified QueryAllAttestationRequest message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryAllAttestationRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAllAttestationRequest} message QueryAllAttestationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryAllAttestationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryAllAttestationRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.QueryAllAttestationRequest} QueryAllAttestationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryAllAttestationRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.QueryAllAttestationRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.pagination = $root.cosmos.base.query.v1beta1.PageRequest.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryAllAttestationRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.QueryAllAttestationRequest} QueryAllAttestationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryAllAttestationRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryAllAttestationRequest message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryAllAttestationRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.pagination != null && message.hasOwnProperty("pagination")) {
                        let error = $root.cosmos.base.query.v1beta1.PageRequest.verify(message.pagination);
                        if (error)
                            return "pagination." + error;
                    }
                    return null;
                };

                /**
                 * Creates a QueryAllAttestationRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.QueryAllAttestationRequest} QueryAllAttestationRequest
                 */
                QueryAllAttestationRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.QueryAllAttestationRequest)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.QueryAllAttestationRequest();
                    if (object.pagination != null) {
                        if (typeof object.pagination !== "object")
                            throw TypeError(".blarsy.truststore.truststore.QueryAllAttestationRequest.pagination: object expected");
                        message.pagination = $root.cosmos.base.query.v1beta1.PageRequest.fromObject(object.pagination);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a QueryAllAttestationRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationRequest
                 * @static
                 * @param {blarsy.truststore.truststore.QueryAllAttestationRequest} message QueryAllAttestationRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryAllAttestationRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.pagination = null;
                    if (message.pagination != null && message.hasOwnProperty("pagination"))
                        object.pagination = $root.cosmos.base.query.v1beta1.PageRequest.toObject(message.pagination, options);
                    return object;
                };

                /**
                 * Converts this QueryAllAttestationRequest to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryAllAttestationRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryAllAttestationRequest;
            })();

            truststore.QueryAllAttestationResponse = (function() {

                /**
                 * Properties of a QueryAllAttestationResponse.
                 * @memberof blarsy.truststore.truststore
                 * @interface IQueryAllAttestationResponse
                 * @property {Array.<blarsy.truststore.truststore.IAttestation>|null} [attestation] QueryAllAttestationResponse attestation
                 * @property {cosmos.base.query.v1beta1.IPageResponse|null} [pagination] QueryAllAttestationResponse pagination
                 */

                /**
                 * Constructs a new QueryAllAttestationResponse.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a QueryAllAttestationResponse.
                 * @implements IQueryAllAttestationResponse
                 * @constructor
                 * @param {blarsy.truststore.truststore.IQueryAllAttestationResponse=} [properties] Properties to set
                 */
                function QueryAllAttestationResponse(properties) {
                    this.attestation = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryAllAttestationResponse attestation.
                 * @member {Array.<blarsy.truststore.truststore.IAttestation>} attestation
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationResponse
                 * @instance
                 */
                QueryAllAttestationResponse.prototype.attestation = $util.emptyArray;

                /**
                 * QueryAllAttestationResponse pagination.
                 * @member {cosmos.base.query.v1beta1.IPageResponse|null|undefined} pagination
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationResponse
                 * @instance
                 */
                QueryAllAttestationResponse.prototype.pagination = null;

                /**
                 * Creates a new QueryAllAttestationResponse instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAllAttestationResponse=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.QueryAllAttestationResponse} QueryAllAttestationResponse instance
                 */
                QueryAllAttestationResponse.create = function create(properties) {
                    return new QueryAllAttestationResponse(properties);
                };

                /**
                 * Encodes the specified QueryAllAttestationResponse message. Does not implicitly {@link blarsy.truststore.truststore.QueryAllAttestationResponse.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAllAttestationResponse} message QueryAllAttestationResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryAllAttestationResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.attestation != null && message.attestation.length)
                        for (let i = 0; i < message.attestation.length; ++i)
                            $root.blarsy.truststore.truststore.Attestation.encode(message.attestation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.pagination != null && Object.hasOwnProperty.call(message, "pagination"))
                        $root.cosmos.base.query.v1beta1.PageResponse.encode(message.pagination, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified QueryAllAttestationResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryAllAttestationResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAllAttestationResponse} message QueryAllAttestationResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryAllAttestationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryAllAttestationResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.QueryAllAttestationResponse} QueryAllAttestationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryAllAttestationResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.QueryAllAttestationResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.attestation && message.attestation.length))
                                message.attestation = [];
                            message.attestation.push($root.blarsy.truststore.truststore.Attestation.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.pagination = $root.cosmos.base.query.v1beta1.PageResponse.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryAllAttestationResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.QueryAllAttestationResponse} QueryAllAttestationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryAllAttestationResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryAllAttestationResponse message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryAllAttestationResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.attestation != null && message.hasOwnProperty("attestation")) {
                        if (!Array.isArray(message.attestation))
                            return "attestation: array expected";
                        for (let i = 0; i < message.attestation.length; ++i) {
                            let error = $root.blarsy.truststore.truststore.Attestation.verify(message.attestation[i]);
                            if (error)
                                return "attestation." + error;
                        }
                    }
                    if (message.pagination != null && message.hasOwnProperty("pagination")) {
                        let error = $root.cosmos.base.query.v1beta1.PageResponse.verify(message.pagination);
                        if (error)
                            return "pagination." + error;
                    }
                    return null;
                };

                /**
                 * Creates a QueryAllAttestationResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.QueryAllAttestationResponse} QueryAllAttestationResponse
                 */
                QueryAllAttestationResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.QueryAllAttestationResponse)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.QueryAllAttestationResponse();
                    if (object.attestation) {
                        if (!Array.isArray(object.attestation))
                            throw TypeError(".blarsy.truststore.truststore.QueryAllAttestationResponse.attestation: array expected");
                        message.attestation = [];
                        for (let i = 0; i < object.attestation.length; ++i) {
                            if (typeof object.attestation[i] !== "object")
                                throw TypeError(".blarsy.truststore.truststore.QueryAllAttestationResponse.attestation: object expected");
                            message.attestation[i] = $root.blarsy.truststore.truststore.Attestation.fromObject(object.attestation[i]);
                        }
                    }
                    if (object.pagination != null) {
                        if (typeof object.pagination !== "object")
                            throw TypeError(".blarsy.truststore.truststore.QueryAllAttestationResponse.pagination: object expected");
                        message.pagination = $root.cosmos.base.query.v1beta1.PageResponse.fromObject(object.pagination);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a QueryAllAttestationResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationResponse
                 * @static
                 * @param {blarsy.truststore.truststore.QueryAllAttestationResponse} message QueryAllAttestationResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryAllAttestationResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.attestation = [];
                    if (options.defaults)
                        object.pagination = null;
                    if (message.attestation && message.attestation.length) {
                        object.attestation = [];
                        for (let j = 0; j < message.attestation.length; ++j)
                            object.attestation[j] = $root.blarsy.truststore.truststore.Attestation.toObject(message.attestation[j], options);
                    }
                    if (message.pagination != null && message.hasOwnProperty("pagination"))
                        object.pagination = $root.cosmos.base.query.v1beta1.PageResponse.toObject(message.pagination, options);
                    return object;
                };

                /**
                 * Converts this QueryAllAttestationResponse to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.QueryAllAttestationResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryAllAttestationResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryAllAttestationResponse;
            })();

            truststore.QueryGetIdentifierTypeRequest = (function() {

                /**
                 * Properties of a QueryGetIdentifierTypeRequest.
                 * @memberof blarsy.truststore.truststore
                 * @interface IQueryGetIdentifierTypeRequest
                 * @property {string|null} [index] QueryGetIdentifierTypeRequest index
                 */

                /**
                 * Constructs a new QueryGetIdentifierTypeRequest.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a QueryGetIdentifierTypeRequest.
                 * @implements IQueryGetIdentifierTypeRequest
                 * @constructor
                 * @param {blarsy.truststore.truststore.IQueryGetIdentifierTypeRequest=} [properties] Properties to set
                 */
                function QueryGetIdentifierTypeRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryGetIdentifierTypeRequest index.
                 * @member {string} index
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeRequest
                 * @instance
                 */
                QueryGetIdentifierTypeRequest.prototype.index = "";

                /**
                 * Creates a new QueryGetIdentifierTypeRequest instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetIdentifierTypeRequest=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.QueryGetIdentifierTypeRequest} QueryGetIdentifierTypeRequest instance
                 */
                QueryGetIdentifierTypeRequest.create = function create(properties) {
                    return new QueryGetIdentifierTypeRequest(properties);
                };

                /**
                 * Encodes the specified QueryGetIdentifierTypeRequest message. Does not implicitly {@link blarsy.truststore.truststore.QueryGetIdentifierTypeRequest.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetIdentifierTypeRequest} message QueryGetIdentifierTypeRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGetIdentifierTypeRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.index);
                    return writer;
                };

                /**
                 * Encodes the specified QueryGetIdentifierTypeRequest message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryGetIdentifierTypeRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetIdentifierTypeRequest} message QueryGetIdentifierTypeRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGetIdentifierTypeRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryGetIdentifierTypeRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.QueryGetIdentifierTypeRequest} QueryGetIdentifierTypeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGetIdentifierTypeRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.QueryGetIdentifierTypeRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.index = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryGetIdentifierTypeRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.QueryGetIdentifierTypeRequest} QueryGetIdentifierTypeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGetIdentifierTypeRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryGetIdentifierTypeRequest message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryGetIdentifierTypeRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.index != null && message.hasOwnProperty("index"))
                        if (!$util.isString(message.index))
                            return "index: string expected";
                    return null;
                };

                /**
                 * Creates a QueryGetIdentifierTypeRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.QueryGetIdentifierTypeRequest} QueryGetIdentifierTypeRequest
                 */
                QueryGetIdentifierTypeRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.QueryGetIdentifierTypeRequest)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.QueryGetIdentifierTypeRequest();
                    if (object.index != null)
                        message.index = String(object.index);
                    return message;
                };

                /**
                 * Creates a plain object from a QueryGetIdentifierTypeRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeRequest
                 * @static
                 * @param {blarsy.truststore.truststore.QueryGetIdentifierTypeRequest} message QueryGetIdentifierTypeRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryGetIdentifierTypeRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.index = "";
                    if (message.index != null && message.hasOwnProperty("index"))
                        object.index = message.index;
                    return object;
                };

                /**
                 * Converts this QueryGetIdentifierTypeRequest to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryGetIdentifierTypeRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryGetIdentifierTypeRequest;
            })();

            truststore.QueryGetIdentifierTypeResponse = (function() {

                /**
                 * Properties of a QueryGetIdentifierTypeResponse.
                 * @memberof blarsy.truststore.truststore
                 * @interface IQueryGetIdentifierTypeResponse
                 * @property {blarsy.truststore.truststore.IIdentifierType|null} [identifierType] QueryGetIdentifierTypeResponse identifierType
                 */

                /**
                 * Constructs a new QueryGetIdentifierTypeResponse.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a QueryGetIdentifierTypeResponse.
                 * @implements IQueryGetIdentifierTypeResponse
                 * @constructor
                 * @param {blarsy.truststore.truststore.IQueryGetIdentifierTypeResponse=} [properties] Properties to set
                 */
                function QueryGetIdentifierTypeResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryGetIdentifierTypeResponse identifierType.
                 * @member {blarsy.truststore.truststore.IIdentifierType|null|undefined} identifierType
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeResponse
                 * @instance
                 */
                QueryGetIdentifierTypeResponse.prototype.identifierType = null;

                /**
                 * Creates a new QueryGetIdentifierTypeResponse instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetIdentifierTypeResponse=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.QueryGetIdentifierTypeResponse} QueryGetIdentifierTypeResponse instance
                 */
                QueryGetIdentifierTypeResponse.create = function create(properties) {
                    return new QueryGetIdentifierTypeResponse(properties);
                };

                /**
                 * Encodes the specified QueryGetIdentifierTypeResponse message. Does not implicitly {@link blarsy.truststore.truststore.QueryGetIdentifierTypeResponse.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetIdentifierTypeResponse} message QueryGetIdentifierTypeResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGetIdentifierTypeResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.identifierType != null && Object.hasOwnProperty.call(message, "identifierType"))
                        $root.blarsy.truststore.truststore.IdentifierType.encode(message.identifierType, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified QueryGetIdentifierTypeResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryGetIdentifierTypeResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetIdentifierTypeResponse} message QueryGetIdentifierTypeResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGetIdentifierTypeResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryGetIdentifierTypeResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.QueryGetIdentifierTypeResponse} QueryGetIdentifierTypeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGetIdentifierTypeResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.QueryGetIdentifierTypeResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.identifierType = $root.blarsy.truststore.truststore.IdentifierType.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryGetIdentifierTypeResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.QueryGetIdentifierTypeResponse} QueryGetIdentifierTypeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGetIdentifierTypeResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryGetIdentifierTypeResponse message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryGetIdentifierTypeResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.identifierType != null && message.hasOwnProperty("identifierType")) {
                        let error = $root.blarsy.truststore.truststore.IdentifierType.verify(message.identifierType);
                        if (error)
                            return "identifierType." + error;
                    }
                    return null;
                };

                /**
                 * Creates a QueryGetIdentifierTypeResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.QueryGetIdentifierTypeResponse} QueryGetIdentifierTypeResponse
                 */
                QueryGetIdentifierTypeResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.QueryGetIdentifierTypeResponse)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.QueryGetIdentifierTypeResponse();
                    if (object.identifierType != null) {
                        if (typeof object.identifierType !== "object")
                            throw TypeError(".blarsy.truststore.truststore.QueryGetIdentifierTypeResponse.identifierType: object expected");
                        message.identifierType = $root.blarsy.truststore.truststore.IdentifierType.fromObject(object.identifierType);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a QueryGetIdentifierTypeResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeResponse
                 * @static
                 * @param {blarsy.truststore.truststore.QueryGetIdentifierTypeResponse} message QueryGetIdentifierTypeResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryGetIdentifierTypeResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.identifierType = null;
                    if (message.identifierType != null && message.hasOwnProperty("identifierType"))
                        object.identifierType = $root.blarsy.truststore.truststore.IdentifierType.toObject(message.identifierType, options);
                    return object;
                };

                /**
                 * Converts this QueryGetIdentifierTypeResponse to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.QueryGetIdentifierTypeResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryGetIdentifierTypeResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryGetIdentifierTypeResponse;
            })();

            truststore.QueryAllIdentifierTypeRequest = (function() {

                /**
                 * Properties of a QueryAllIdentifierTypeRequest.
                 * @memberof blarsy.truststore.truststore
                 * @interface IQueryAllIdentifierTypeRequest
                 * @property {cosmos.base.query.v1beta1.IPageRequest|null} [pagination] QueryAllIdentifierTypeRequest pagination
                 */

                /**
                 * Constructs a new QueryAllIdentifierTypeRequest.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a QueryAllIdentifierTypeRequest.
                 * @implements IQueryAllIdentifierTypeRequest
                 * @constructor
                 * @param {blarsy.truststore.truststore.IQueryAllIdentifierTypeRequest=} [properties] Properties to set
                 */
                function QueryAllIdentifierTypeRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryAllIdentifierTypeRequest pagination.
                 * @member {cosmos.base.query.v1beta1.IPageRequest|null|undefined} pagination
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeRequest
                 * @instance
                 */
                QueryAllIdentifierTypeRequest.prototype.pagination = null;

                /**
                 * Creates a new QueryAllIdentifierTypeRequest instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAllIdentifierTypeRequest=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.QueryAllIdentifierTypeRequest} QueryAllIdentifierTypeRequest instance
                 */
                QueryAllIdentifierTypeRequest.create = function create(properties) {
                    return new QueryAllIdentifierTypeRequest(properties);
                };

                /**
                 * Encodes the specified QueryAllIdentifierTypeRequest message. Does not implicitly {@link blarsy.truststore.truststore.QueryAllIdentifierTypeRequest.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAllIdentifierTypeRequest} message QueryAllIdentifierTypeRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryAllIdentifierTypeRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.pagination != null && Object.hasOwnProperty.call(message, "pagination"))
                        $root.cosmos.base.query.v1beta1.PageRequest.encode(message.pagination, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified QueryAllIdentifierTypeRequest message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryAllIdentifierTypeRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAllIdentifierTypeRequest} message QueryAllIdentifierTypeRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryAllIdentifierTypeRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryAllIdentifierTypeRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.QueryAllIdentifierTypeRequest} QueryAllIdentifierTypeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryAllIdentifierTypeRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.QueryAllIdentifierTypeRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.pagination = $root.cosmos.base.query.v1beta1.PageRequest.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryAllIdentifierTypeRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.QueryAllIdentifierTypeRequest} QueryAllIdentifierTypeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryAllIdentifierTypeRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryAllIdentifierTypeRequest message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryAllIdentifierTypeRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.pagination != null && message.hasOwnProperty("pagination")) {
                        let error = $root.cosmos.base.query.v1beta1.PageRequest.verify(message.pagination);
                        if (error)
                            return "pagination." + error;
                    }
                    return null;
                };

                /**
                 * Creates a QueryAllIdentifierTypeRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.QueryAllIdentifierTypeRequest} QueryAllIdentifierTypeRequest
                 */
                QueryAllIdentifierTypeRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.QueryAllIdentifierTypeRequest)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.QueryAllIdentifierTypeRequest();
                    if (object.pagination != null) {
                        if (typeof object.pagination !== "object")
                            throw TypeError(".blarsy.truststore.truststore.QueryAllIdentifierTypeRequest.pagination: object expected");
                        message.pagination = $root.cosmos.base.query.v1beta1.PageRequest.fromObject(object.pagination);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a QueryAllIdentifierTypeRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeRequest
                 * @static
                 * @param {blarsy.truststore.truststore.QueryAllIdentifierTypeRequest} message QueryAllIdentifierTypeRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryAllIdentifierTypeRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.pagination = null;
                    if (message.pagination != null && message.hasOwnProperty("pagination"))
                        object.pagination = $root.cosmos.base.query.v1beta1.PageRequest.toObject(message.pagination, options);
                    return object;
                };

                /**
                 * Converts this QueryAllIdentifierTypeRequest to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryAllIdentifierTypeRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryAllIdentifierTypeRequest;
            })();

            truststore.QueryAllIdentifierTypeResponse = (function() {

                /**
                 * Properties of a QueryAllIdentifierTypeResponse.
                 * @memberof blarsy.truststore.truststore
                 * @interface IQueryAllIdentifierTypeResponse
                 * @property {Array.<blarsy.truststore.truststore.IIdentifierType>|null} [identifierType] QueryAllIdentifierTypeResponse identifierType
                 * @property {cosmos.base.query.v1beta1.IPageResponse|null} [pagination] QueryAllIdentifierTypeResponse pagination
                 */

                /**
                 * Constructs a new QueryAllIdentifierTypeResponse.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a QueryAllIdentifierTypeResponse.
                 * @implements IQueryAllIdentifierTypeResponse
                 * @constructor
                 * @param {blarsy.truststore.truststore.IQueryAllIdentifierTypeResponse=} [properties] Properties to set
                 */
                function QueryAllIdentifierTypeResponse(properties) {
                    this.identifierType = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryAllIdentifierTypeResponse identifierType.
                 * @member {Array.<blarsy.truststore.truststore.IIdentifierType>} identifierType
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeResponse
                 * @instance
                 */
                QueryAllIdentifierTypeResponse.prototype.identifierType = $util.emptyArray;

                /**
                 * QueryAllIdentifierTypeResponse pagination.
                 * @member {cosmos.base.query.v1beta1.IPageResponse|null|undefined} pagination
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeResponse
                 * @instance
                 */
                QueryAllIdentifierTypeResponse.prototype.pagination = null;

                /**
                 * Creates a new QueryAllIdentifierTypeResponse instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAllIdentifierTypeResponse=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.QueryAllIdentifierTypeResponse} QueryAllIdentifierTypeResponse instance
                 */
                QueryAllIdentifierTypeResponse.create = function create(properties) {
                    return new QueryAllIdentifierTypeResponse(properties);
                };

                /**
                 * Encodes the specified QueryAllIdentifierTypeResponse message. Does not implicitly {@link blarsy.truststore.truststore.QueryAllIdentifierTypeResponse.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAllIdentifierTypeResponse} message QueryAllIdentifierTypeResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryAllIdentifierTypeResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.identifierType != null && message.identifierType.length)
                        for (let i = 0; i < message.identifierType.length; ++i)
                            $root.blarsy.truststore.truststore.IdentifierType.encode(message.identifierType[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.pagination != null && Object.hasOwnProperty.call(message, "pagination"))
                        $root.cosmos.base.query.v1beta1.PageResponse.encode(message.pagination, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified QueryAllIdentifierTypeResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryAllIdentifierTypeResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAllIdentifierTypeResponse} message QueryAllIdentifierTypeResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryAllIdentifierTypeResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryAllIdentifierTypeResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.QueryAllIdentifierTypeResponse} QueryAllIdentifierTypeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryAllIdentifierTypeResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.QueryAllIdentifierTypeResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.identifierType && message.identifierType.length))
                                message.identifierType = [];
                            message.identifierType.push($root.blarsy.truststore.truststore.IdentifierType.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.pagination = $root.cosmos.base.query.v1beta1.PageResponse.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryAllIdentifierTypeResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.QueryAllIdentifierTypeResponse} QueryAllIdentifierTypeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryAllIdentifierTypeResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryAllIdentifierTypeResponse message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryAllIdentifierTypeResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.identifierType != null && message.hasOwnProperty("identifierType")) {
                        if (!Array.isArray(message.identifierType))
                            return "identifierType: array expected";
                        for (let i = 0; i < message.identifierType.length; ++i) {
                            let error = $root.blarsy.truststore.truststore.IdentifierType.verify(message.identifierType[i]);
                            if (error)
                                return "identifierType." + error;
                        }
                    }
                    if (message.pagination != null && message.hasOwnProperty("pagination")) {
                        let error = $root.cosmos.base.query.v1beta1.PageResponse.verify(message.pagination);
                        if (error)
                            return "pagination." + error;
                    }
                    return null;
                };

                /**
                 * Creates a QueryAllIdentifierTypeResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.QueryAllIdentifierTypeResponse} QueryAllIdentifierTypeResponse
                 */
                QueryAllIdentifierTypeResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.QueryAllIdentifierTypeResponse)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.QueryAllIdentifierTypeResponse();
                    if (object.identifierType) {
                        if (!Array.isArray(object.identifierType))
                            throw TypeError(".blarsy.truststore.truststore.QueryAllIdentifierTypeResponse.identifierType: array expected");
                        message.identifierType = [];
                        for (let i = 0; i < object.identifierType.length; ++i) {
                            if (typeof object.identifierType[i] !== "object")
                                throw TypeError(".blarsy.truststore.truststore.QueryAllIdentifierTypeResponse.identifierType: object expected");
                            message.identifierType[i] = $root.blarsy.truststore.truststore.IdentifierType.fromObject(object.identifierType[i]);
                        }
                    }
                    if (object.pagination != null) {
                        if (typeof object.pagination !== "object")
                            throw TypeError(".blarsy.truststore.truststore.QueryAllIdentifierTypeResponse.pagination: object expected");
                        message.pagination = $root.cosmos.base.query.v1beta1.PageResponse.fromObject(object.pagination);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a QueryAllIdentifierTypeResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeResponse
                 * @static
                 * @param {blarsy.truststore.truststore.QueryAllIdentifierTypeResponse} message QueryAllIdentifierTypeResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryAllIdentifierTypeResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.identifierType = [];
                    if (options.defaults)
                        object.pagination = null;
                    if (message.identifierType && message.identifierType.length) {
                        object.identifierType = [];
                        for (let j = 0; j < message.identifierType.length; ++j)
                            object.identifierType[j] = $root.blarsy.truststore.truststore.IdentifierType.toObject(message.identifierType[j], options);
                    }
                    if (message.pagination != null && message.hasOwnProperty("pagination"))
                        object.pagination = $root.cosmos.base.query.v1beta1.PageResponse.toObject(message.pagination, options);
                    return object;
                };

                /**
                 * Converts this QueryAllIdentifierTypeResponse to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.QueryAllIdentifierTypeResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryAllIdentifierTypeResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryAllIdentifierTypeResponse;
            })();

            truststore.QueryGetGlobalRequest = (function() {

                /**
                 * Properties of a QueryGetGlobalRequest.
                 * @memberof blarsy.truststore.truststore
                 * @interface IQueryGetGlobalRequest
                 */

                /**
                 * Constructs a new QueryGetGlobalRequest.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a QueryGetGlobalRequest.
                 * @implements IQueryGetGlobalRequest
                 * @constructor
                 * @param {blarsy.truststore.truststore.IQueryGetGlobalRequest=} [properties] Properties to set
                 */
                function QueryGetGlobalRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new QueryGetGlobalRequest instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetGlobalRequest=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.QueryGetGlobalRequest} QueryGetGlobalRequest instance
                 */
                QueryGetGlobalRequest.create = function create(properties) {
                    return new QueryGetGlobalRequest(properties);
                };

                /**
                 * Encodes the specified QueryGetGlobalRequest message. Does not implicitly {@link blarsy.truststore.truststore.QueryGetGlobalRequest.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetGlobalRequest} message QueryGetGlobalRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGetGlobalRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified QueryGetGlobalRequest message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryGetGlobalRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetGlobalRequest} message QueryGetGlobalRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGetGlobalRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryGetGlobalRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.QueryGetGlobalRequest} QueryGetGlobalRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGetGlobalRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.QueryGetGlobalRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryGetGlobalRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.QueryGetGlobalRequest} QueryGetGlobalRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGetGlobalRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryGetGlobalRequest message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryGetGlobalRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a QueryGetGlobalRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.QueryGetGlobalRequest} QueryGetGlobalRequest
                 */
                QueryGetGlobalRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.QueryGetGlobalRequest)
                        return object;
                    return new $root.blarsy.truststore.truststore.QueryGetGlobalRequest();
                };

                /**
                 * Creates a plain object from a QueryGetGlobalRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalRequest
                 * @static
                 * @param {blarsy.truststore.truststore.QueryGetGlobalRequest} message QueryGetGlobalRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryGetGlobalRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this QueryGetGlobalRequest to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryGetGlobalRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryGetGlobalRequest;
            })();

            truststore.QueryGetGlobalResponse = (function() {

                /**
                 * Properties of a QueryGetGlobalResponse.
                 * @memberof blarsy.truststore.truststore
                 * @interface IQueryGetGlobalResponse
                 * @property {blarsy.truststore.truststore.IGlobal|null} [Global] QueryGetGlobalResponse Global
                 */

                /**
                 * Constructs a new QueryGetGlobalResponse.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a QueryGetGlobalResponse.
                 * @implements IQueryGetGlobalResponse
                 * @constructor
                 * @param {blarsy.truststore.truststore.IQueryGetGlobalResponse=} [properties] Properties to set
                 */
                function QueryGetGlobalResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryGetGlobalResponse Global.
                 * @member {blarsy.truststore.truststore.IGlobal|null|undefined} Global
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalResponse
                 * @instance
                 */
                QueryGetGlobalResponse.prototype.Global = null;

                /**
                 * Creates a new QueryGetGlobalResponse instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetGlobalResponse=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.QueryGetGlobalResponse} QueryGetGlobalResponse instance
                 */
                QueryGetGlobalResponse.create = function create(properties) {
                    return new QueryGetGlobalResponse(properties);
                };

                /**
                 * Encodes the specified QueryGetGlobalResponse message. Does not implicitly {@link blarsy.truststore.truststore.QueryGetGlobalResponse.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetGlobalResponse} message QueryGetGlobalResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGetGlobalResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Global != null && Object.hasOwnProperty.call(message, "Global"))
                        $root.blarsy.truststore.truststore.Global.encode(message.Global, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified QueryGetGlobalResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryGetGlobalResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryGetGlobalResponse} message QueryGetGlobalResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryGetGlobalResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryGetGlobalResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.QueryGetGlobalResponse} QueryGetGlobalResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGetGlobalResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.QueryGetGlobalResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.Global = $root.blarsy.truststore.truststore.Global.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryGetGlobalResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.QueryGetGlobalResponse} QueryGetGlobalResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryGetGlobalResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryGetGlobalResponse message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryGetGlobalResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.Global != null && message.hasOwnProperty("Global")) {
                        let error = $root.blarsy.truststore.truststore.Global.verify(message.Global);
                        if (error)
                            return "Global." + error;
                    }
                    return null;
                };

                /**
                 * Creates a QueryGetGlobalResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.QueryGetGlobalResponse} QueryGetGlobalResponse
                 */
                QueryGetGlobalResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.QueryGetGlobalResponse)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.QueryGetGlobalResponse();
                    if (object.Global != null) {
                        if (typeof object.Global !== "object")
                            throw TypeError(".blarsy.truststore.truststore.QueryGetGlobalResponse.Global: object expected");
                        message.Global = $root.blarsy.truststore.truststore.Global.fromObject(object.Global);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a QueryGetGlobalResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalResponse
                 * @static
                 * @param {blarsy.truststore.truststore.QueryGetGlobalResponse} message QueryGetGlobalResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryGetGlobalResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.Global = null;
                    if (message.Global != null && message.hasOwnProperty("Global"))
                        object.Global = $root.blarsy.truststore.truststore.Global.toObject(message.Global, options);
                    return object;
                };

                /**
                 * Converts this QueryGetGlobalResponse to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.QueryGetGlobalResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryGetGlobalResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryGetGlobalResponse;
            })();

            truststore.QueryAttestationByCreatorIdentifierRequest = (function() {

                /**
                 * Properties of a QueryAttestationByCreatorIdentifierRequest.
                 * @memberof blarsy.truststore.truststore
                 * @interface IQueryAttestationByCreatorIdentifierRequest
                 * @property {string|null} [creator] QueryAttestationByCreatorIdentifierRequest creator
                 * @property {string|null} [identifierType] QueryAttestationByCreatorIdentifierRequest identifierType
                 * @property {string|null} [identifier] QueryAttestationByCreatorIdentifierRequest identifier
                 */

                /**
                 * Constructs a new QueryAttestationByCreatorIdentifierRequest.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a QueryAttestationByCreatorIdentifierRequest.
                 * @implements IQueryAttestationByCreatorIdentifierRequest
                 * @constructor
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierRequest=} [properties] Properties to set
                 */
                function QueryAttestationByCreatorIdentifierRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryAttestationByCreatorIdentifierRequest creator.
                 * @member {string} creator
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest
                 * @instance
                 */
                QueryAttestationByCreatorIdentifierRequest.prototype.creator = "";

                /**
                 * QueryAttestationByCreatorIdentifierRequest identifierType.
                 * @member {string} identifierType
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest
                 * @instance
                 */
                QueryAttestationByCreatorIdentifierRequest.prototype.identifierType = "";

                /**
                 * QueryAttestationByCreatorIdentifierRequest identifier.
                 * @member {string} identifier
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest
                 * @instance
                 */
                QueryAttestationByCreatorIdentifierRequest.prototype.identifier = "";

                /**
                 * Creates a new QueryAttestationByCreatorIdentifierRequest instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierRequest=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest} QueryAttestationByCreatorIdentifierRequest instance
                 */
                QueryAttestationByCreatorIdentifierRequest.create = function create(properties) {
                    return new QueryAttestationByCreatorIdentifierRequest(properties);
                };

                /**
                 * Encodes the specified QueryAttestationByCreatorIdentifierRequest message. Does not implicitly {@link blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierRequest} message QueryAttestationByCreatorIdentifierRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryAttestationByCreatorIdentifierRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.creator != null && Object.hasOwnProperty.call(message, "creator"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.creator);
                    if (message.identifierType != null && Object.hasOwnProperty.call(message, "identifierType"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.identifierType);
                    if (message.identifier != null && Object.hasOwnProperty.call(message, "identifier"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifier);
                    return writer;
                };

                /**
                 * Encodes the specified QueryAttestationByCreatorIdentifierRequest message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierRequest} message QueryAttestationByCreatorIdentifierRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryAttestationByCreatorIdentifierRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryAttestationByCreatorIdentifierRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest} QueryAttestationByCreatorIdentifierRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryAttestationByCreatorIdentifierRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.creator = reader.string();
                            break;
                        case 2:
                            message.identifierType = reader.string();
                            break;
                        case 3:
                            message.identifier = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryAttestationByCreatorIdentifierRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest} QueryAttestationByCreatorIdentifierRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryAttestationByCreatorIdentifierRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryAttestationByCreatorIdentifierRequest message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryAttestationByCreatorIdentifierRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.creator != null && message.hasOwnProperty("creator"))
                        if (!$util.isString(message.creator))
                            return "creator: string expected";
                    if (message.identifierType != null && message.hasOwnProperty("identifierType"))
                        if (!$util.isString(message.identifierType))
                            return "identifierType: string expected";
                    if (message.identifier != null && message.hasOwnProperty("identifier"))
                        if (!$util.isString(message.identifier))
                            return "identifier: string expected";
                    return null;
                };

                /**
                 * Creates a QueryAttestationByCreatorIdentifierRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest} QueryAttestationByCreatorIdentifierRequest
                 */
                QueryAttestationByCreatorIdentifierRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest();
                    if (object.creator != null)
                        message.creator = String(object.creator);
                    if (object.identifierType != null)
                        message.identifierType = String(object.identifierType);
                    if (object.identifier != null)
                        message.identifier = String(object.identifier);
                    return message;
                };

                /**
                 * Creates a plain object from a QueryAttestationByCreatorIdentifierRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest
                 * @static
                 * @param {blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest} message QueryAttestationByCreatorIdentifierRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryAttestationByCreatorIdentifierRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.creator = "";
                        object.identifierType = "";
                        object.identifier = "";
                    }
                    if (message.creator != null && message.hasOwnProperty("creator"))
                        object.creator = message.creator;
                    if (message.identifierType != null && message.hasOwnProperty("identifierType"))
                        object.identifierType = message.identifierType;
                    if (message.identifier != null && message.hasOwnProperty("identifier"))
                        object.identifier = message.identifier;
                    return object;
                };

                /**
                 * Converts this QueryAttestationByCreatorIdentifierRequest to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryAttestationByCreatorIdentifierRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryAttestationByCreatorIdentifierRequest;
            })();

            truststore.QueryAttestationByCreatorIdentifierResponse = (function() {

                /**
                 * Properties of a QueryAttestationByCreatorIdentifierResponse.
                 * @memberof blarsy.truststore.truststore
                 * @interface IQueryAttestationByCreatorIdentifierResponse
                 * @property {blarsy.truststore.truststore.IAttestation|null} [attestation] QueryAttestationByCreatorIdentifierResponse attestation
                 */

                /**
                 * Constructs a new QueryAttestationByCreatorIdentifierResponse.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a QueryAttestationByCreatorIdentifierResponse.
                 * @implements IQueryAttestationByCreatorIdentifierResponse
                 * @constructor
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierResponse=} [properties] Properties to set
                 */
                function QueryAttestationByCreatorIdentifierResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryAttestationByCreatorIdentifierResponse attestation.
                 * @member {blarsy.truststore.truststore.IAttestation|null|undefined} attestation
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse
                 * @instance
                 */
                QueryAttestationByCreatorIdentifierResponse.prototype.attestation = null;

                /**
                 * Creates a new QueryAttestationByCreatorIdentifierResponse instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierResponse=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse} QueryAttestationByCreatorIdentifierResponse instance
                 */
                QueryAttestationByCreatorIdentifierResponse.create = function create(properties) {
                    return new QueryAttestationByCreatorIdentifierResponse(properties);
                };

                /**
                 * Encodes the specified QueryAttestationByCreatorIdentifierResponse message. Does not implicitly {@link blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierResponse} message QueryAttestationByCreatorIdentifierResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryAttestationByCreatorIdentifierResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.attestation != null && Object.hasOwnProperty.call(message, "attestation"))
                        $root.blarsy.truststore.truststore.Attestation.encode(message.attestation, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified QueryAttestationByCreatorIdentifierResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorIdentifierResponse} message QueryAttestationByCreatorIdentifierResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryAttestationByCreatorIdentifierResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryAttestationByCreatorIdentifierResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse} QueryAttestationByCreatorIdentifierResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryAttestationByCreatorIdentifierResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.attestation = $root.blarsy.truststore.truststore.Attestation.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryAttestationByCreatorIdentifierResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse} QueryAttestationByCreatorIdentifierResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryAttestationByCreatorIdentifierResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryAttestationByCreatorIdentifierResponse message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryAttestationByCreatorIdentifierResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.attestation != null && message.hasOwnProperty("attestation")) {
                        let error = $root.blarsy.truststore.truststore.Attestation.verify(message.attestation);
                        if (error)
                            return "attestation." + error;
                    }
                    return null;
                };

                /**
                 * Creates a QueryAttestationByCreatorIdentifierResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse} QueryAttestationByCreatorIdentifierResponse
                 */
                QueryAttestationByCreatorIdentifierResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse();
                    if (object.attestation != null) {
                        if (typeof object.attestation !== "object")
                            throw TypeError(".blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse.attestation: object expected");
                        message.attestation = $root.blarsy.truststore.truststore.Attestation.fromObject(object.attestation);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a QueryAttestationByCreatorIdentifierResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse
                 * @static
                 * @param {blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse} message QueryAttestationByCreatorIdentifierResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryAttestationByCreatorIdentifierResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.attestation = null;
                    if (message.attestation != null && message.hasOwnProperty("attestation"))
                        object.attestation = $root.blarsy.truststore.truststore.Attestation.toObject(message.attestation, options);
                    return object;
                };

                /**
                 * Converts this QueryAttestationByCreatorIdentifierResponse to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorIdentifierResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryAttestationByCreatorIdentifierResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryAttestationByCreatorIdentifierResponse;
            })();

            truststore.QueryAttestationByCreatorRequest = (function() {

                /**
                 * Properties of a QueryAttestationByCreatorRequest.
                 * @memberof blarsy.truststore.truststore
                 * @interface IQueryAttestationByCreatorRequest
                 * @property {string|null} [creator] QueryAttestationByCreatorRequest creator
                 */

                /**
                 * Constructs a new QueryAttestationByCreatorRequest.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a QueryAttestationByCreatorRequest.
                 * @implements IQueryAttestationByCreatorRequest
                 * @constructor
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorRequest=} [properties] Properties to set
                 */
                function QueryAttestationByCreatorRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryAttestationByCreatorRequest creator.
                 * @member {string} creator
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorRequest
                 * @instance
                 */
                QueryAttestationByCreatorRequest.prototype.creator = "";

                /**
                 * Creates a new QueryAttestationByCreatorRequest instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorRequest=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.QueryAttestationByCreatorRequest} QueryAttestationByCreatorRequest instance
                 */
                QueryAttestationByCreatorRequest.create = function create(properties) {
                    return new QueryAttestationByCreatorRequest(properties);
                };

                /**
                 * Encodes the specified QueryAttestationByCreatorRequest message. Does not implicitly {@link blarsy.truststore.truststore.QueryAttestationByCreatorRequest.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorRequest} message QueryAttestationByCreatorRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryAttestationByCreatorRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.creator != null && Object.hasOwnProperty.call(message, "creator"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.creator);
                    return writer;
                };

                /**
                 * Encodes the specified QueryAttestationByCreatorRequest message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryAttestationByCreatorRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorRequest
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorRequest} message QueryAttestationByCreatorRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryAttestationByCreatorRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryAttestationByCreatorRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.QueryAttestationByCreatorRequest} QueryAttestationByCreatorRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryAttestationByCreatorRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.QueryAttestationByCreatorRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.creator = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryAttestationByCreatorRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.QueryAttestationByCreatorRequest} QueryAttestationByCreatorRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryAttestationByCreatorRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryAttestationByCreatorRequest message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryAttestationByCreatorRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.creator != null && message.hasOwnProperty("creator"))
                        if (!$util.isString(message.creator))
                            return "creator: string expected";
                    return null;
                };

                /**
                 * Creates a QueryAttestationByCreatorRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.QueryAttestationByCreatorRequest} QueryAttestationByCreatorRequest
                 */
                QueryAttestationByCreatorRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.QueryAttestationByCreatorRequest)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.QueryAttestationByCreatorRequest();
                    if (object.creator != null)
                        message.creator = String(object.creator);
                    return message;
                };

                /**
                 * Creates a plain object from a QueryAttestationByCreatorRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorRequest
                 * @static
                 * @param {blarsy.truststore.truststore.QueryAttestationByCreatorRequest} message QueryAttestationByCreatorRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryAttestationByCreatorRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.creator = "";
                    if (message.creator != null && message.hasOwnProperty("creator"))
                        object.creator = message.creator;
                    return object;
                };

                /**
                 * Converts this QueryAttestationByCreatorRequest to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryAttestationByCreatorRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryAttestationByCreatorRequest;
            })();

            truststore.QueryAttestationByCreatorResponse = (function() {

                /**
                 * Properties of a QueryAttestationByCreatorResponse.
                 * @memberof blarsy.truststore.truststore
                 * @interface IQueryAttestationByCreatorResponse
                 * @property {Array.<blarsy.truststore.truststore.IAttestation>|null} [attestations] QueryAttestationByCreatorResponse attestations
                 */

                /**
                 * Constructs a new QueryAttestationByCreatorResponse.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a QueryAttestationByCreatorResponse.
                 * @implements IQueryAttestationByCreatorResponse
                 * @constructor
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorResponse=} [properties] Properties to set
                 */
                function QueryAttestationByCreatorResponse(properties) {
                    this.attestations = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryAttestationByCreatorResponse attestations.
                 * @member {Array.<blarsy.truststore.truststore.IAttestation>} attestations
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorResponse
                 * @instance
                 */
                QueryAttestationByCreatorResponse.prototype.attestations = $util.emptyArray;

                /**
                 * Creates a new QueryAttestationByCreatorResponse instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorResponse=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.QueryAttestationByCreatorResponse} QueryAttestationByCreatorResponse instance
                 */
                QueryAttestationByCreatorResponse.create = function create(properties) {
                    return new QueryAttestationByCreatorResponse(properties);
                };

                /**
                 * Encodes the specified QueryAttestationByCreatorResponse message. Does not implicitly {@link blarsy.truststore.truststore.QueryAttestationByCreatorResponse.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorResponse} message QueryAttestationByCreatorResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryAttestationByCreatorResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.attestations != null && message.attestations.length)
                        for (let i = 0; i < message.attestations.length; ++i)
                            $root.blarsy.truststore.truststore.Attestation.encode(message.attestations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified QueryAttestationByCreatorResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.QueryAttestationByCreatorResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IQueryAttestationByCreatorResponse} message QueryAttestationByCreatorResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryAttestationByCreatorResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryAttestationByCreatorResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.QueryAttestationByCreatorResponse} QueryAttestationByCreatorResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryAttestationByCreatorResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.QueryAttestationByCreatorResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.attestations && message.attestations.length))
                                message.attestations = [];
                            message.attestations.push($root.blarsy.truststore.truststore.Attestation.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryAttestationByCreatorResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.QueryAttestationByCreatorResponse} QueryAttestationByCreatorResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryAttestationByCreatorResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryAttestationByCreatorResponse message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryAttestationByCreatorResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.attestations != null && message.hasOwnProperty("attestations")) {
                        if (!Array.isArray(message.attestations))
                            return "attestations: array expected";
                        for (let i = 0; i < message.attestations.length; ++i) {
                            let error = $root.blarsy.truststore.truststore.Attestation.verify(message.attestations[i]);
                            if (error)
                                return "attestations." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a QueryAttestationByCreatorResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.QueryAttestationByCreatorResponse} QueryAttestationByCreatorResponse
                 */
                QueryAttestationByCreatorResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.QueryAttestationByCreatorResponse)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.QueryAttestationByCreatorResponse();
                    if (object.attestations) {
                        if (!Array.isArray(object.attestations))
                            throw TypeError(".blarsy.truststore.truststore.QueryAttestationByCreatorResponse.attestations: array expected");
                        message.attestations = [];
                        for (let i = 0; i < object.attestations.length; ++i) {
                            if (typeof object.attestations[i] !== "object")
                                throw TypeError(".blarsy.truststore.truststore.QueryAttestationByCreatorResponse.attestations: object expected");
                            message.attestations[i] = $root.blarsy.truststore.truststore.Attestation.fromObject(object.attestations[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a QueryAttestationByCreatorResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorResponse
                 * @static
                 * @param {blarsy.truststore.truststore.QueryAttestationByCreatorResponse} message QueryAttestationByCreatorResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryAttestationByCreatorResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.attestations = [];
                    if (message.attestations && message.attestations.length) {
                        object.attestations = [];
                        for (let j = 0; j < message.attestations.length; ++j)
                            object.attestations[j] = $root.blarsy.truststore.truststore.Attestation.toObject(message.attestations[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this QueryAttestationByCreatorResponse to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.QueryAttestationByCreatorResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryAttestationByCreatorResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryAttestationByCreatorResponse;
            })();

            truststore.Msg = (function() {

                /**
                 * Constructs a new Msg service.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a Msg
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function Msg(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (Msg.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Msg;

                /**
                 * Creates new Msg service using the specified rpc implementation.
                 * @function create
                 * @memberof blarsy.truststore.truststore.Msg
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {Msg} RPC service. Useful where requests and/or responses are streamed.
                 */
                Msg.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link blarsy.truststore.truststore.Msg#createAttestation}.
                 * @memberof blarsy.truststore.truststore.Msg
                 * @typedef CreateAttestationCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {blarsy.truststore.truststore.MsgCreateAttestationResponse} [response] MsgCreateAttestationResponse
                 */

                /**
                 * Calls CreateAttestation.
                 * @function createAttestation
                 * @memberof blarsy.truststore.truststore.Msg
                 * @instance
                 * @param {blarsy.truststore.truststore.IMsgCreateAttestation} request MsgCreateAttestation message or plain object
                 * @param {blarsy.truststore.truststore.Msg.CreateAttestationCallback} callback Node-style callback called with the error, if any, and MsgCreateAttestationResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Msg.prototype.createAttestation = function createAttestation(request, callback) {
                    return this.rpcCall(createAttestation, $root.blarsy.truststore.truststore.MsgCreateAttestation, $root.blarsy.truststore.truststore.MsgCreateAttestationResponse, request, callback);
                }, "name", { value: "CreateAttestation" });

                /**
                 * Calls CreateAttestation.
                 * @function createAttestation
                 * @memberof blarsy.truststore.truststore.Msg
                 * @instance
                 * @param {blarsy.truststore.truststore.IMsgCreateAttestation} request MsgCreateAttestation message or plain object
                 * @returns {Promise<blarsy.truststore.truststore.MsgCreateAttestationResponse>} Promise
                 * @variation 2
                 */

                return Msg;
            })();

            truststore.MsgCreateAttestation = (function() {

                /**
                 * Properties of a MsgCreateAttestation.
                 * @memberof blarsy.truststore.truststore
                 * @interface IMsgCreateAttestation
                 * @property {string|null} [creator] MsgCreateAttestation creator
                 * @property {string|null} [identifier] MsgCreateAttestation identifier
                 * @property {string|null} [identifierType] MsgCreateAttestation identifierType
                 * @property {number|Long|null} [rating] MsgCreateAttestation rating
                 */

                /**
                 * Constructs a new MsgCreateAttestation.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a MsgCreateAttestation.
                 * @implements IMsgCreateAttestation
                 * @constructor
                 * @param {blarsy.truststore.truststore.IMsgCreateAttestation=} [properties] Properties to set
                 */
                function MsgCreateAttestation(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MsgCreateAttestation creator.
                 * @member {string} creator
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestation
                 * @instance
                 */
                MsgCreateAttestation.prototype.creator = "";

                /**
                 * MsgCreateAttestation identifier.
                 * @member {string} identifier
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestation
                 * @instance
                 */
                MsgCreateAttestation.prototype.identifier = "";

                /**
                 * MsgCreateAttestation identifierType.
                 * @member {string} identifierType
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestation
                 * @instance
                 */
                MsgCreateAttestation.prototype.identifierType = "";

                /**
                 * MsgCreateAttestation rating.
                 * @member {number|Long} rating
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestation
                 * @instance
                 */
                MsgCreateAttestation.prototype.rating = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * Creates a new MsgCreateAttestation instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestation
                 * @static
                 * @param {blarsy.truststore.truststore.IMsgCreateAttestation=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.MsgCreateAttestation} MsgCreateAttestation instance
                 */
                MsgCreateAttestation.create = function create(properties) {
                    return new MsgCreateAttestation(properties);
                };

                /**
                 * Encodes the specified MsgCreateAttestation message. Does not implicitly {@link blarsy.truststore.truststore.MsgCreateAttestation.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestation
                 * @static
                 * @param {blarsy.truststore.truststore.IMsgCreateAttestation} message MsgCreateAttestation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MsgCreateAttestation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.creator != null && Object.hasOwnProperty.call(message, "creator"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.creator);
                    if (message.identifier != null && Object.hasOwnProperty.call(message, "identifier"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.identifier);
                    if (message.identifierType != null && Object.hasOwnProperty.call(message, "identifierType"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierType);
                    if (message.rating != null && Object.hasOwnProperty.call(message, "rating"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.rating);
                    return writer;
                };

                /**
                 * Encodes the specified MsgCreateAttestation message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.MsgCreateAttestation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestation
                 * @static
                 * @param {blarsy.truststore.truststore.IMsgCreateAttestation} message MsgCreateAttestation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MsgCreateAttestation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MsgCreateAttestation message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.MsgCreateAttestation} MsgCreateAttestation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MsgCreateAttestation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.MsgCreateAttestation();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.creator = reader.string();
                            break;
                        case 2:
                            message.identifier = reader.string();
                            break;
                        case 3:
                            message.identifierType = reader.string();
                            break;
                        case 4:
                            message.rating = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MsgCreateAttestation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.MsgCreateAttestation} MsgCreateAttestation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MsgCreateAttestation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MsgCreateAttestation message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MsgCreateAttestation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.creator != null && message.hasOwnProperty("creator"))
                        if (!$util.isString(message.creator))
                            return "creator: string expected";
                    if (message.identifier != null && message.hasOwnProperty("identifier"))
                        if (!$util.isString(message.identifier))
                            return "identifier: string expected";
                    if (message.identifierType != null && message.hasOwnProperty("identifierType"))
                        if (!$util.isString(message.identifierType))
                            return "identifierType: string expected";
                    if (message.rating != null && message.hasOwnProperty("rating"))
                        if (!$util.isInteger(message.rating) && !(message.rating && $util.isInteger(message.rating.low) && $util.isInteger(message.rating.high)))
                            return "rating: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a MsgCreateAttestation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.MsgCreateAttestation} MsgCreateAttestation
                 */
                MsgCreateAttestation.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.MsgCreateAttestation)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.MsgCreateAttestation();
                    if (object.creator != null)
                        message.creator = String(object.creator);
                    if (object.identifier != null)
                        message.identifier = String(object.identifier);
                    if (object.identifierType != null)
                        message.identifierType = String(object.identifierType);
                    if (object.rating != null)
                        if ($util.Long)
                            (message.rating = $util.Long.fromValue(object.rating)).unsigned = true;
                        else if (typeof object.rating === "string")
                            message.rating = parseInt(object.rating, 10);
                        else if (typeof object.rating === "number")
                            message.rating = object.rating;
                        else if (typeof object.rating === "object")
                            message.rating = new $util.LongBits(object.rating.low >>> 0, object.rating.high >>> 0).toNumber(true);
                    return message;
                };

                /**
                 * Creates a plain object from a MsgCreateAttestation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestation
                 * @static
                 * @param {blarsy.truststore.truststore.MsgCreateAttestation} message MsgCreateAttestation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MsgCreateAttestation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.creator = "";
                        object.identifier = "";
                        object.identifierType = "";
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
                            object.rating = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.rating = options.longs === String ? "0" : 0;
                    }
                    if (message.creator != null && message.hasOwnProperty("creator"))
                        object.creator = message.creator;
                    if (message.identifier != null && message.hasOwnProperty("identifier"))
                        object.identifier = message.identifier;
                    if (message.identifierType != null && message.hasOwnProperty("identifierType"))
                        object.identifierType = message.identifierType;
                    if (message.rating != null && message.hasOwnProperty("rating"))
                        if (typeof message.rating === "number")
                            object.rating = options.longs === String ? String(message.rating) : message.rating;
                        else
                            object.rating = options.longs === String ? $util.Long.prototype.toString.call(message.rating) : options.longs === Number ? new $util.LongBits(message.rating.low >>> 0, message.rating.high >>> 0).toNumber(true) : message.rating;
                    return object;
                };

                /**
                 * Converts this MsgCreateAttestation to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MsgCreateAttestation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MsgCreateAttestation;
            })();

            truststore.MsgCreateAttestationResponse = (function() {

                /**
                 * Properties of a MsgCreateAttestationResponse.
                 * @memberof blarsy.truststore.truststore
                 * @interface IMsgCreateAttestationResponse
                 * @property {string|null} [idValue] MsgCreateAttestationResponse idValue
                 */

                /**
                 * Constructs a new MsgCreateAttestationResponse.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a MsgCreateAttestationResponse.
                 * @implements IMsgCreateAttestationResponse
                 * @constructor
                 * @param {blarsy.truststore.truststore.IMsgCreateAttestationResponse=} [properties] Properties to set
                 */
                function MsgCreateAttestationResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MsgCreateAttestationResponse idValue.
                 * @member {string} idValue
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestationResponse
                 * @instance
                 */
                MsgCreateAttestationResponse.prototype.idValue = "";

                /**
                 * Creates a new MsgCreateAttestationResponse instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestationResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IMsgCreateAttestationResponse=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.MsgCreateAttestationResponse} MsgCreateAttestationResponse instance
                 */
                MsgCreateAttestationResponse.create = function create(properties) {
                    return new MsgCreateAttestationResponse(properties);
                };

                /**
                 * Encodes the specified MsgCreateAttestationResponse message. Does not implicitly {@link blarsy.truststore.truststore.MsgCreateAttestationResponse.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestationResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IMsgCreateAttestationResponse} message MsgCreateAttestationResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MsgCreateAttestationResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.idValue != null && Object.hasOwnProperty.call(message, "idValue"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.idValue);
                    return writer;
                };

                /**
                 * Encodes the specified MsgCreateAttestationResponse message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.MsgCreateAttestationResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestationResponse
                 * @static
                 * @param {blarsy.truststore.truststore.IMsgCreateAttestationResponse} message MsgCreateAttestationResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MsgCreateAttestationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MsgCreateAttestationResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestationResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.MsgCreateAttestationResponse} MsgCreateAttestationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MsgCreateAttestationResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.MsgCreateAttestationResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.idValue = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MsgCreateAttestationResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestationResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.MsgCreateAttestationResponse} MsgCreateAttestationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MsgCreateAttestationResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MsgCreateAttestationResponse message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestationResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MsgCreateAttestationResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.idValue != null && message.hasOwnProperty("idValue"))
                        if (!$util.isString(message.idValue))
                            return "idValue: string expected";
                    return null;
                };

                /**
                 * Creates a MsgCreateAttestationResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestationResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.MsgCreateAttestationResponse} MsgCreateAttestationResponse
                 */
                MsgCreateAttestationResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.MsgCreateAttestationResponse)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.MsgCreateAttestationResponse();
                    if (object.idValue != null)
                        message.idValue = String(object.idValue);
                    return message;
                };

                /**
                 * Creates a plain object from a MsgCreateAttestationResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestationResponse
                 * @static
                 * @param {blarsy.truststore.truststore.MsgCreateAttestationResponse} message MsgCreateAttestationResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MsgCreateAttestationResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.idValue = "";
                    if (message.idValue != null && message.hasOwnProperty("idValue"))
                        object.idValue = message.idValue;
                    return object;
                };

                /**
                 * Converts this MsgCreateAttestationResponse to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.MsgCreateAttestationResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MsgCreateAttestationResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MsgCreateAttestationResponse;
            })();

            truststore.Params = (function() {

                /**
                 * Properties of a Params.
                 * @memberof blarsy.truststore.truststore
                 * @interface IParams
                 */

                /**
                 * Constructs a new Params.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a Params.
                 * @implements IParams
                 * @constructor
                 * @param {blarsy.truststore.truststore.IParams=} [properties] Properties to set
                 */
                function Params(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new Params instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.Params
                 * @static
                 * @param {blarsy.truststore.truststore.IParams=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.Params} Params instance
                 */
                Params.create = function create(properties) {
                    return new Params(properties);
                };

                /**
                 * Encodes the specified Params message. Does not implicitly {@link blarsy.truststore.truststore.Params.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.Params
                 * @static
                 * @param {blarsy.truststore.truststore.IParams} message Params message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Params.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified Params message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.Params.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.Params
                 * @static
                 * @param {blarsy.truststore.truststore.IParams} message Params message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Params.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Params message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.Params
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.Params} Params
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Params.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.Params();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Params message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.Params
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.Params} Params
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Params.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Params message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.Params
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Params.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a Params message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.Params
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.Params} Params
                 */
                Params.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.Params)
                        return object;
                    return new $root.blarsy.truststore.truststore.Params();
                };

                /**
                 * Creates a plain object from a Params message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.Params
                 * @static
                 * @param {blarsy.truststore.truststore.Params} message Params
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Params.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this Params to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.Params
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Params.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Params;
            })();

            truststore.Global = (function() {

                /**
                 * Properties of a Global.
                 * @memberof blarsy.truststore.truststore
                 * @interface IGlobal
                 * @property {number|Long|null} [nextId] Global nextId
                 */

                /**
                 * Constructs a new Global.
                 * @memberof blarsy.truststore.truststore
                 * @classdesc Represents a Global.
                 * @implements IGlobal
                 * @constructor
                 * @param {blarsy.truststore.truststore.IGlobal=} [properties] Properties to set
                 */
                function Global(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Global nextId.
                 * @member {number|Long} nextId
                 * @memberof blarsy.truststore.truststore.Global
                 * @instance
                 */
                Global.prototype.nextId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * Creates a new Global instance using the specified properties.
                 * @function create
                 * @memberof blarsy.truststore.truststore.Global
                 * @static
                 * @param {blarsy.truststore.truststore.IGlobal=} [properties] Properties to set
                 * @returns {blarsy.truststore.truststore.Global} Global instance
                 */
                Global.create = function create(properties) {
                    return new Global(properties);
                };

                /**
                 * Encodes the specified Global message. Does not implicitly {@link blarsy.truststore.truststore.Global.verify|verify} messages.
                 * @function encode
                 * @memberof blarsy.truststore.truststore.Global
                 * @static
                 * @param {blarsy.truststore.truststore.IGlobal} message Global message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Global.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.nextId != null && Object.hasOwnProperty.call(message, "nextId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.nextId);
                    return writer;
                };

                /**
                 * Encodes the specified Global message, length delimited. Does not implicitly {@link blarsy.truststore.truststore.Global.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof blarsy.truststore.truststore.Global
                 * @static
                 * @param {blarsy.truststore.truststore.IGlobal} message Global message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Global.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Global message from the specified reader or buffer.
                 * @function decode
                 * @memberof blarsy.truststore.truststore.Global
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {blarsy.truststore.truststore.Global} Global
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Global.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blarsy.truststore.truststore.Global();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.nextId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Global message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof blarsy.truststore.truststore.Global
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {blarsy.truststore.truststore.Global} Global
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Global.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Global message.
                 * @function verify
                 * @memberof blarsy.truststore.truststore.Global
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Global.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.nextId != null && message.hasOwnProperty("nextId"))
                        if (!$util.isInteger(message.nextId) && !(message.nextId && $util.isInteger(message.nextId.low) && $util.isInteger(message.nextId.high)))
                            return "nextId: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a Global message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof blarsy.truststore.truststore.Global
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {blarsy.truststore.truststore.Global} Global
                 */
                Global.fromObject = function fromObject(object) {
                    if (object instanceof $root.blarsy.truststore.truststore.Global)
                        return object;
                    let message = new $root.blarsy.truststore.truststore.Global();
                    if (object.nextId != null)
                        if ($util.Long)
                            (message.nextId = $util.Long.fromValue(object.nextId)).unsigned = true;
                        else if (typeof object.nextId === "string")
                            message.nextId = parseInt(object.nextId, 10);
                        else if (typeof object.nextId === "number")
                            message.nextId = object.nextId;
                        else if (typeof object.nextId === "object")
                            message.nextId = new $util.LongBits(object.nextId.low >>> 0, object.nextId.high >>> 0).toNumber(true);
                    return message;
                };

                /**
                 * Creates a plain object from a Global message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof blarsy.truststore.truststore.Global
                 * @static
                 * @param {blarsy.truststore.truststore.Global} message Global
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Global.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
                            object.nextId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.nextId = options.longs === String ? "0" : 0;
                    if (message.nextId != null && message.hasOwnProperty("nextId"))
                        if (typeof message.nextId === "number")
                            object.nextId = options.longs === String ? String(message.nextId) : message.nextId;
                        else
                            object.nextId = options.longs === String ? $util.Long.prototype.toString.call(message.nextId) : options.longs === Number ? new $util.LongBits(message.nextId.low >>> 0, message.nextId.high >>> 0).toNumber(true) : message.nextId;
                    return object;
                };

                /**
                 * Converts this Global to JSON.
                 * @function toJSON
                 * @memberof blarsy.truststore.truststore.Global
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Global.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Global;
            })();

            return truststore;
        })();

        return truststore;
    })();

    return blarsy;
})();

export { $root as default };
