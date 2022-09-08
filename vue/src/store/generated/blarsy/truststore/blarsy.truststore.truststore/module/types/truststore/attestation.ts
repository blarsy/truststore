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
  last_updated_at_height: number;
}

export interface Ids {
  indexes: string[];
}

export interface AttestationIdsByCreator {
  ids: { [key: string]: Ids };
}

export interface AttestationIdsByCreator_IdsEntry {
  key: string;
  value: Ids | undefined;
}

const baseAttestation: object = {
  index: "",
  identifier: "",
  identifierType: "",
  rating: 0,
  creator: "",
  last_updated_at_height: 0,
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
    if (message.last_updated_at_height !== 0) {
      writer.uint32(48).int64(message.last_updated_at_height);
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
        case 6:
          message.last_updated_at_height = longToNumber(reader.int64() as Long);
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
    if (
      object.last_updated_at_height !== undefined &&
      object.last_updated_at_height !== null
    ) {
      message.last_updated_at_height = Number(object.last_updated_at_height);
    } else {
      message.last_updated_at_height = 0;
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
    message.last_updated_at_height !== undefined &&
      (obj.last_updated_at_height = message.last_updated_at_height);
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
    if (
      object.last_updated_at_height !== undefined &&
      object.last_updated_at_height !== null
    ) {
      message.last_updated_at_height = object.last_updated_at_height;
    } else {
      message.last_updated_at_height = 0;
    }
    return message;
  },
};

const baseIds: object = { indexes: "" };

export const Ids = {
  encode(message: Ids, writer: Writer = Writer.create()): Writer {
    for (const v of message.indexes) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Ids {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIds } as Ids;
    message.indexes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.indexes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Ids {
    const message = { ...baseIds } as Ids;
    message.indexes = [];
    if (object.indexes !== undefined && object.indexes !== null) {
      for (const e of object.indexes) {
        message.indexes.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Ids): unknown {
    const obj: any = {};
    if (message.indexes) {
      obj.indexes = message.indexes.map((e) => e);
    } else {
      obj.indexes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Ids>): Ids {
    const message = { ...baseIds } as Ids;
    message.indexes = [];
    if (object.indexes !== undefined && object.indexes !== null) {
      for (const e of object.indexes) {
        message.indexes.push(e);
      }
    }
    return message;
  },
};

const baseAttestationIdsByCreator: object = {};

export const AttestationIdsByCreator = {
  encode(
    message: AttestationIdsByCreator,
    writer: Writer = Writer.create()
  ): Writer {
    Object.entries(message.ids).forEach(([key, value]) => {
      AttestationIdsByCreator_IdsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AttestationIdsByCreator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAttestationIdsByCreator,
    } as AttestationIdsByCreator;
    message.ids = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = AttestationIdsByCreator_IdsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.ids[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttestationIdsByCreator {
    const message = {
      ...baseAttestationIdsByCreator,
    } as AttestationIdsByCreator;
    message.ids = {};
    if (object.ids !== undefined && object.ids !== null) {
      Object.entries(object.ids).forEach(([key, value]) => {
        message.ids[key] = Ids.fromJSON(value);
      });
    }
    return message;
  },

  toJSON(message: AttestationIdsByCreator): unknown {
    const obj: any = {};
    obj.ids = {};
    if (message.ids) {
      Object.entries(message.ids).forEach(([k, v]) => {
        obj.ids[k] = Ids.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<AttestationIdsByCreator>
  ): AttestationIdsByCreator {
    const message = {
      ...baseAttestationIdsByCreator,
    } as AttestationIdsByCreator;
    message.ids = {};
    if (object.ids !== undefined && object.ids !== null) {
      Object.entries(object.ids).forEach(([key, value]) => {
        if (value !== undefined) {
          message.ids[key] = Ids.fromPartial(value);
        }
      });
    }
    return message;
  },
};

const baseAttestationIdsByCreator_IdsEntry: object = { key: "" };

export const AttestationIdsByCreator_IdsEntry = {
  encode(
    message: AttestationIdsByCreator_IdsEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Ids.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): AttestationIdsByCreator_IdsEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAttestationIdsByCreator_IdsEntry,
    } as AttestationIdsByCreator_IdsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Ids.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttestationIdsByCreator_IdsEntry {
    const message = {
      ...baseAttestationIdsByCreator_IdsEntry,
    } as AttestationIdsByCreator_IdsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Ids.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: AttestationIdsByCreator_IdsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Ids.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AttestationIdsByCreator_IdsEntry>
  ): AttestationIdsByCreator_IdsEntry {
    const message = {
      ...baseAttestationIdsByCreator_IdsEntry,
    } as AttestationIdsByCreator_IdsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Ids.fromPartial(object.value);
    } else {
      message.value = undefined;
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
