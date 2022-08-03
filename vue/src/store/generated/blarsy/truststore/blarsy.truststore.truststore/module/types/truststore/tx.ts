/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "blarsy.truststore.truststore";

export interface MsgCreateAttestation {
  creator: string;
  identifier: string;
  identifierType: string;
  rating: number;
}

export interface MsgCreateAttestationResponse {
  idValue: string;
}

const baseMsgCreateAttestation: object = {
  creator: "",
  identifier: "",
  identifierType: "",
  rating: 0,
};

export const MsgCreateAttestation = {
  encode(
    message: MsgCreateAttestation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }
    if (message.identifierType !== "") {
      writer.uint32(26).string(message.identifierType);
    }
    if (message.rating !== 0) {
      writer.uint32(32).uint64(message.rating);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAttestation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateAttestation } as MsgCreateAttestation;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.rating = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAttestation {
    const message = { ...baseMsgCreateAttestation } as MsgCreateAttestation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
    }
    if (object.identifierType !== undefined && object.identifierType !== null) {
      message.identifierType = String(object.identifierType);
    } else {
      message.identifierType = "";
    }
    if (object.rating !== undefined && object.rating !== null) {
      message.rating = Number(object.rating);
    } else {
      message.rating = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateAttestation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.identifierType !== undefined &&
      (obj.identifierType = message.identifierType);
    message.rating !== undefined && (obj.rating = message.rating);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateAttestation>): MsgCreateAttestation {
    const message = { ...baseMsgCreateAttestation } as MsgCreateAttestation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
    }
    if (object.identifierType !== undefined && object.identifierType !== null) {
      message.identifierType = object.identifierType;
    } else {
      message.identifierType = "";
    }
    if (object.rating !== undefined && object.rating !== null) {
      message.rating = object.rating;
    } else {
      message.rating = 0;
    }
    return message;
  },
};

const baseMsgCreateAttestationResponse: object = { idValue: "" };

export const MsgCreateAttestationResponse = {
  encode(
    message: MsgCreateAttestationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.idValue !== "") {
      writer.uint32(10).string(message.idValue);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateAttestationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateAttestationResponse,
    } as MsgCreateAttestationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  },

  fromJSON(object: any): MsgCreateAttestationResponse {
    const message = {
      ...baseMsgCreateAttestationResponse,
    } as MsgCreateAttestationResponse;
    if (object.idValue !== undefined && object.idValue !== null) {
      message.idValue = String(object.idValue);
    } else {
      message.idValue = "";
    }
    return message;
  },

  toJSON(message: MsgCreateAttestationResponse): unknown {
    const obj: any = {};
    message.idValue !== undefined && (obj.idValue = message.idValue);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateAttestationResponse>
  ): MsgCreateAttestationResponse {
    const message = {
      ...baseMsgCreateAttestationResponse,
    } as MsgCreateAttestationResponse;
    if (object.idValue !== undefined && object.idValue !== null) {
      message.idValue = object.idValue;
    } else {
      message.idValue = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateAttestation(
    request: MsgCreateAttestation
  ): Promise<MsgCreateAttestationResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateAttestation(
    request: MsgCreateAttestation
  ): Promise<MsgCreateAttestationResponse> {
    const data = MsgCreateAttestation.encode(request).finish();
    const promise = this.rpc.request(
      "blarsy.truststore.truststore.Msg",
      "CreateAttestation",
      data
    );
    return promise.then((data) =>
      MsgCreateAttestationResponse.decode(new Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
