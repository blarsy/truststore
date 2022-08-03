/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../truststore/params";
import { Attestation } from "../truststore/attestation";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { IdentifierType } from "../truststore/identifier_type";
import { Global } from "../truststore/global";

export const protobufPackage = "blarsy.truststore.truststore";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetAttestationRequest {
  index: string;
}

export interface QueryGetAttestationResponse {
  attestation: Attestation | undefined;
}

export interface QueryAllAttestationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAttestationResponse {
  attestation: Attestation[];
  pagination: PageResponse | undefined;
}

export interface QueryGetIdentifierTypeRequest {
  index: string;
}

export interface QueryGetIdentifierTypeResponse {
  identifierType: IdentifierType | undefined;
}

export interface QueryAllIdentifierTypeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllIdentifierTypeResponse {
  identifierType: IdentifierType[];
  pagination: PageResponse | undefined;
}

export interface QueryGetGlobalRequest {}

export interface QueryGetGlobalResponse {
  Global: Global | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetAttestationRequest: object = { index: "" };

export const QueryGetAttestationRequest = {
  encode(
    message: QueryGetAttestationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAttestationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAttestationRequest,
    } as QueryGetAttestationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  },

  fromJSON(object: any): QueryGetAttestationRequest {
    const message = {
      ...baseQueryGetAttestationRequest,
    } as QueryGetAttestationRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetAttestationRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAttestationRequest>
  ): QueryGetAttestationRequest {
    const message = {
      ...baseQueryGetAttestationRequest,
    } as QueryGetAttestationRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetAttestationResponse: object = {};

export const QueryGetAttestationResponse = {
  encode(
    message: QueryGetAttestationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.attestation !== undefined) {
      Attestation.encode(
        message.attestation,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAttestationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAttestationResponse,
    } as QueryGetAttestationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestation = Attestation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAttestationResponse {
    const message = {
      ...baseQueryGetAttestationResponse,
    } as QueryGetAttestationResponse;
    if (object.attestation !== undefined && object.attestation !== null) {
      message.attestation = Attestation.fromJSON(object.attestation);
    } else {
      message.attestation = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAttestationResponse): unknown {
    const obj: any = {};
    message.attestation !== undefined &&
      (obj.attestation = message.attestation
        ? Attestation.toJSON(message.attestation)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAttestationResponse>
  ): QueryGetAttestationResponse {
    const message = {
      ...baseQueryGetAttestationResponse,
    } as QueryGetAttestationResponse;
    if (object.attestation !== undefined && object.attestation !== null) {
      message.attestation = Attestation.fromPartial(object.attestation);
    } else {
      message.attestation = undefined;
    }
    return message;
  },
};

const baseQueryAllAttestationRequest: object = {};

export const QueryAllAttestationRequest = {
  encode(
    message: QueryAllAttestationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAttestationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAttestationRequest,
    } as QueryAllAttestationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAttestationRequest {
    const message = {
      ...baseQueryAllAttestationRequest,
    } as QueryAllAttestationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAttestationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAttestationRequest>
  ): QueryAllAttestationRequest {
    const message = {
      ...baseQueryAllAttestationRequest,
    } as QueryAllAttestationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAttestationResponse: object = {};

export const QueryAllAttestationResponse = {
  encode(
    message: QueryAllAttestationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.attestation) {
      Attestation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAttestationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAttestationResponse,
    } as QueryAllAttestationResponse;
    message.attestation = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestation.push(Attestation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAttestationResponse {
    const message = {
      ...baseQueryAllAttestationResponse,
    } as QueryAllAttestationResponse;
    message.attestation = [];
    if (object.attestation !== undefined && object.attestation !== null) {
      for (const e of object.attestation) {
        message.attestation.push(Attestation.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAttestationResponse): unknown {
    const obj: any = {};
    if (message.attestation) {
      obj.attestation = message.attestation.map((e) =>
        e ? Attestation.toJSON(e) : undefined
      );
    } else {
      obj.attestation = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAttestationResponse>
  ): QueryAllAttestationResponse {
    const message = {
      ...baseQueryAllAttestationResponse,
    } as QueryAllAttestationResponse;
    message.attestation = [];
    if (object.attestation !== undefined && object.attestation !== null) {
      for (const e of object.attestation) {
        message.attestation.push(Attestation.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetIdentifierTypeRequest: object = { index: "" };

export const QueryGetIdentifierTypeRequest = {
  encode(
    message: QueryGetIdentifierTypeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetIdentifierTypeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetIdentifierTypeRequest,
    } as QueryGetIdentifierTypeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  },

  fromJSON(object: any): QueryGetIdentifierTypeRequest {
    const message = {
      ...baseQueryGetIdentifierTypeRequest,
    } as QueryGetIdentifierTypeRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetIdentifierTypeRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetIdentifierTypeRequest>
  ): QueryGetIdentifierTypeRequest {
    const message = {
      ...baseQueryGetIdentifierTypeRequest,
    } as QueryGetIdentifierTypeRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetIdentifierTypeResponse: object = {};

export const QueryGetIdentifierTypeResponse = {
  encode(
    message: QueryGetIdentifierTypeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.identifierType !== undefined) {
      IdentifierType.encode(
        message.identifierType,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetIdentifierTypeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetIdentifierTypeResponse,
    } as QueryGetIdentifierTypeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifierType = IdentifierType.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetIdentifierTypeResponse {
    const message = {
      ...baseQueryGetIdentifierTypeResponse,
    } as QueryGetIdentifierTypeResponse;
    if (object.identifierType !== undefined && object.identifierType !== null) {
      message.identifierType = IdentifierType.fromJSON(object.identifierType);
    } else {
      message.identifierType = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetIdentifierTypeResponse): unknown {
    const obj: any = {};
    message.identifierType !== undefined &&
      (obj.identifierType = message.identifierType
        ? IdentifierType.toJSON(message.identifierType)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetIdentifierTypeResponse>
  ): QueryGetIdentifierTypeResponse {
    const message = {
      ...baseQueryGetIdentifierTypeResponse,
    } as QueryGetIdentifierTypeResponse;
    if (object.identifierType !== undefined && object.identifierType !== null) {
      message.identifierType = IdentifierType.fromPartial(
        object.identifierType
      );
    } else {
      message.identifierType = undefined;
    }
    return message;
  },
};

const baseQueryAllIdentifierTypeRequest: object = {};

export const QueryAllIdentifierTypeRequest = {
  encode(
    message: QueryAllIdentifierTypeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllIdentifierTypeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllIdentifierTypeRequest,
    } as QueryAllIdentifierTypeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllIdentifierTypeRequest {
    const message = {
      ...baseQueryAllIdentifierTypeRequest,
    } as QueryAllIdentifierTypeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllIdentifierTypeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllIdentifierTypeRequest>
  ): QueryAllIdentifierTypeRequest {
    const message = {
      ...baseQueryAllIdentifierTypeRequest,
    } as QueryAllIdentifierTypeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllIdentifierTypeResponse: object = {};

export const QueryAllIdentifierTypeResponse = {
  encode(
    message: QueryAllIdentifierTypeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.identifierType) {
      IdentifierType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllIdentifierTypeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllIdentifierTypeResponse,
    } as QueryAllIdentifierTypeResponse;
    message.identifierType = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifierType.push(
            IdentifierType.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllIdentifierTypeResponse {
    const message = {
      ...baseQueryAllIdentifierTypeResponse,
    } as QueryAllIdentifierTypeResponse;
    message.identifierType = [];
    if (object.identifierType !== undefined && object.identifierType !== null) {
      for (const e of object.identifierType) {
        message.identifierType.push(IdentifierType.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllIdentifierTypeResponse): unknown {
    const obj: any = {};
    if (message.identifierType) {
      obj.identifierType = message.identifierType.map((e) =>
        e ? IdentifierType.toJSON(e) : undefined
      );
    } else {
      obj.identifierType = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllIdentifierTypeResponse>
  ): QueryAllIdentifierTypeResponse {
    const message = {
      ...baseQueryAllIdentifierTypeResponse,
    } as QueryAllIdentifierTypeResponse;
    message.identifierType = [];
    if (object.identifierType !== undefined && object.identifierType !== null) {
      for (const e of object.identifierType) {
        message.identifierType.push(IdentifierType.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetGlobalRequest: object = {};

export const QueryGetGlobalRequest = {
  encode(_: QueryGetGlobalRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetGlobalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetGlobalRequest } as QueryGetGlobalRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetGlobalRequest {
    const message = { ...baseQueryGetGlobalRequest } as QueryGetGlobalRequest;
    return message;
  },

  toJSON(_: QueryGetGlobalRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetGlobalRequest>): QueryGetGlobalRequest {
    const message = { ...baseQueryGetGlobalRequest } as QueryGetGlobalRequest;
    return message;
  },
};

const baseQueryGetGlobalResponse: object = {};

export const QueryGetGlobalResponse = {
  encode(
    message: QueryGetGlobalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Global !== undefined) {
      Global.encode(message.Global, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetGlobalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetGlobalResponse } as QueryGetGlobalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Global = Global.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGlobalResponse {
    const message = { ...baseQueryGetGlobalResponse } as QueryGetGlobalResponse;
    if (object.Global !== undefined && object.Global !== null) {
      message.Global = Global.fromJSON(object.Global);
    } else {
      message.Global = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetGlobalResponse): unknown {
    const obj: any = {};
    message.Global !== undefined &&
      (obj.Global = message.Global ? Global.toJSON(message.Global) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetGlobalResponse>
  ): QueryGetGlobalResponse {
    const message = { ...baseQueryGetGlobalResponse } as QueryGetGlobalResponse;
    if (object.Global !== undefined && object.Global !== null) {
      message.Global = Global.fromPartial(object.Global);
    } else {
      message.Global = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Attestation by index. */
  Attestation(
    request: QueryGetAttestationRequest
  ): Promise<QueryGetAttestationResponse>;
  /** Queries a list of Attestation items. */
  AttestationAll(
    request: QueryAllAttestationRequest
  ): Promise<QueryAllAttestationResponse>;
  /** Queries a IdentifierType by index. */
  IdentifierType(
    request: QueryGetIdentifierTypeRequest
  ): Promise<QueryGetIdentifierTypeResponse>;
  /** Queries a list of IdentifierType items. */
  IdentifierTypeAll(
    request: QueryAllIdentifierTypeRequest
  ): Promise<QueryAllIdentifierTypeResponse>;
  /** Queries a Global by index. */
  Global(request: QueryGetGlobalRequest): Promise<QueryGetGlobalResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blarsy.truststore.truststore.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Attestation(
    request: QueryGetAttestationRequest
  ): Promise<QueryGetAttestationResponse> {
    const data = QueryGetAttestationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blarsy.truststore.truststore.Query",
      "Attestation",
      data
    );
    return promise.then((data) =>
      QueryGetAttestationResponse.decode(new Reader(data))
    );
  }

  AttestationAll(
    request: QueryAllAttestationRequest
  ): Promise<QueryAllAttestationResponse> {
    const data = QueryAllAttestationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blarsy.truststore.truststore.Query",
      "AttestationAll",
      data
    );
    return promise.then((data) =>
      QueryAllAttestationResponse.decode(new Reader(data))
    );
  }

  IdentifierType(
    request: QueryGetIdentifierTypeRequest
  ): Promise<QueryGetIdentifierTypeResponse> {
    const data = QueryGetIdentifierTypeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blarsy.truststore.truststore.Query",
      "IdentifierType",
      data
    );
    return promise.then((data) =>
      QueryGetIdentifierTypeResponse.decode(new Reader(data))
    );
  }

  IdentifierTypeAll(
    request: QueryAllIdentifierTypeRequest
  ): Promise<QueryAllIdentifierTypeResponse> {
    const data = QueryAllIdentifierTypeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blarsy.truststore.truststore.Query",
      "IdentifierTypeAll",
      data
    );
    return promise.then((data) =>
      QueryAllIdentifierTypeResponse.decode(new Reader(data))
    );
  }

  Global(request: QueryGetGlobalRequest): Promise<QueryGetGlobalResponse> {
    const data = QueryGetGlobalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blarsy.truststore.truststore.Query",
      "Global",
      data
    );
    return promise.then((data) =>
      QueryGetGlobalResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
