import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
export interface CallbackData {
  portId: string;
  channelId: string;
  sequence: bigint;
  contract: string;
  connectionId: string;
  accountId: string;
  callback: Uint8Array;
}
export interface CallbackDataProtoMsg {
  typeUrl: "/kujira.cwica.CallbackData";
  value: Uint8Array;
}
export interface CallbackDataSDKType {
  port_id: string;
  channel_id: string;
  sequence: bigint;
  contract: string;
  connection_id: string;
  account_id: string;
  callback: Uint8Array;
}
function createBaseCallbackData(): CallbackData {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt(0),
    contract: "",
    connectionId: "",
    accountId: "",
    callback: new Uint8Array()
  };
}
export const CallbackData = {
  typeUrl: "/kujira.cwica.CallbackData",
  is(o: any): o is CallbackData {
    return o && (o.$typeUrl === CallbackData.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.sequence === "bigint" && typeof o.contract === "string" && typeof o.connectionId === "string" && typeof o.accountId === "string" && (o.callback instanceof Uint8Array || typeof o.callback === "string"));
  },
  isSDK(o: any): o is CallbackDataSDKType {
    return o && (o.$typeUrl === CallbackData.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint" && typeof o.contract === "string" && typeof o.connection_id === "string" && typeof o.account_id === "string" && (o.callback instanceof Uint8Array || typeof o.callback === "string"));
  },
  encode(message: CallbackData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.connectionId !== "") {
      writer.uint32(42).string(message.connectionId);
    }
    if (message.accountId !== "") {
      writer.uint32(50).string(message.accountId);
    }
    if (message.callback.length !== 0) {
      writer.uint32(58).bytes(message.callback);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CallbackData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallbackData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
          message.connectionId = reader.string();
          break;
        case 6:
          message.accountId = reader.string();
          break;
        case 7:
          message.callback = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CallbackData>): CallbackData {
    const message = createBaseCallbackData();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.contract = object.contract ?? "";
    message.connectionId = object.connectionId ?? "";
    message.accountId = object.accountId ?? "";
    message.callback = object.callback ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: CallbackDataProtoMsg): CallbackData {
    return CallbackData.decode(message.value);
  },
  toProto(message: CallbackData): Uint8Array {
    return CallbackData.encode(message).finish();
  },
  toProtoMsg(message: CallbackData): CallbackDataProtoMsg {
    return {
      typeUrl: "/kujira.cwica.CallbackData",
      value: CallbackData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CallbackData.typeUrl, CallbackData);