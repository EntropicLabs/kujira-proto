import { Params, ParamsSDKType } from "./params";
import { Hook, HookSDKType } from "./hook";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/** GenesisState defines the scheduler module's genesis state. */
export interface GenesisState {
  params: Params;
  hookList: Hook[];
  hookCount: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kujira.scheduler.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the scheduler module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  hookList: HookSDKType[];
  hookCount: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    hookList: [],
    hookCount: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/kujira.scheduler.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.hookList) && (!o.hookList.length || Hook.is(o.hookList[0])) && typeof o.hookCount === "bigint");
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.hookList) && (!o.hookList.length || Hook.isSDK(o.hookList[0])) && typeof o.hookCount === "bigint");
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.hookList) {
      Hook.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.hookCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.hookCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.hookList.push(Hook.decode(reader, reader.uint32()));
          break;
        case 3:
          message.hookCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.hookList = object.hookList?.map(e => Hook.fromPartial(e)) || [];
    message.hookCount = object.hookCount !== undefined && object.hookCount !== null ? BigInt(object.hookCount.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/kujira.scheduler.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);