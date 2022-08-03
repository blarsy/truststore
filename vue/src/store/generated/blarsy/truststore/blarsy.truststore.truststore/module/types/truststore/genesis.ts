/* eslint-disable */
import { Params } from "../truststore/params";
import { Attestation } from "../truststore/attestation";
import { IdentifierType } from "../truststore/identifier_type";
import { Global } from "../truststore/global";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "blarsy.truststore.truststore";

/** GenesisState defines the truststore module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  attestationList: Attestation[];
  identifierTypeList: IdentifierType[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  global: Global | undefined;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attestationList) {
      Attestation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.identifierTypeList) {
      IdentifierType.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.global !== undefined) {
      Global.encode(message.global, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.attestationList = [];
    message.identifierTypeList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.attestationList.push(
            Attestation.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.identifierTypeList.push(
            IdentifierType.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.global = Global.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.attestationList = [];
    message.identifierTypeList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.attestationList !== undefined &&
      object.attestationList !== null
    ) {
      for (const e of object.attestationList) {
        message.attestationList.push(Attestation.fromJSON(e));
      }
    }
    if (
      object.identifierTypeList !== undefined &&
      object.identifierTypeList !== null
    ) {
      for (const e of object.identifierTypeList) {
        message.identifierTypeList.push(IdentifierType.fromJSON(e));
      }
    }
    if (object.global !== undefined && object.global !== null) {
      message.global = Global.fromJSON(object.global);
    } else {
      message.global = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.attestationList) {
      obj.attestationList = message.attestationList.map((e) =>
        e ? Attestation.toJSON(e) : undefined
      );
    } else {
      obj.attestationList = [];
    }
    if (message.identifierTypeList) {
      obj.identifierTypeList = message.identifierTypeList.map((e) =>
        e ? IdentifierType.toJSON(e) : undefined
      );
    } else {
      obj.identifierTypeList = [];
    }
    message.global !== undefined &&
      (obj.global = message.global ? Global.toJSON(message.global) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.attestationList = [];
    message.identifierTypeList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.attestationList !== undefined &&
      object.attestationList !== null
    ) {
      for (const e of object.attestationList) {
        message.attestationList.push(Attestation.fromPartial(e));
      }
    }
    if (
      object.identifierTypeList !== undefined &&
      object.identifierTypeList !== null
    ) {
      for (const e of object.identifierTypeList) {
        message.identifierTypeList.push(IdentifierType.fromPartial(e));
      }
    }
    if (object.global !== undefined && object.global !== null) {
      message.global = Global.fromPartial(object.global);
    } else {
      message.global = undefined;
    }
    return message;
  },
};

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
