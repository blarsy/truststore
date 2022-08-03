/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "blarsy.truststore.truststore";

export interface Attestation {
  index: string;
  identifier: string;
  identifierType: string;
  rating: number;
  creator: string;
}

const baseAttestation: object = {
  index: "",
  identifier: "",
  identifierType: "",
  rating: 0,
  creator: "",
};

export const Attestation = {
  encode(message: Attestation, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
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
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Attestation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAttestation } as Attestation;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.rating = longToNumber(reader.uint64() as Long);
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
  },

  fromJSON(object: any): Attestation {
    const message = { ...baseAttestation } as Attestation;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Attestation): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.identifierType !== undefined &&
      (obj.identifierType = message.identifierType);
    message.rating !== undefined && (obj.rating = message.rating);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Attestation>): Attestation {
    const message = { ...baseAttestation } as Attestation;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

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
