import { BinaryReader, BinaryWriter } from "../binary";
import { GlobalDecoderRegistry } from "../registry";
/** Params holds parameters for the batch module */
export interface Params {}
export interface ParamsProtoMsg {
  typeUrl: "/batch.Params";
  value: Uint8Array;
}
/** Params holds parameters for the batch module */
export interface ParamsSDKType {}
function createBaseParams(): Params {
  return {};
}
export const Params = {
  typeUrl: "/batch.Params",
  is(o: any): o is Params {
    return o && o.$typeUrl === Params.typeUrl;
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && o.$typeUrl === Params.typeUrl;
  },
  encode(_: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
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
  fromPartial(_: Partial<Params>): Params {
    const message = createBaseParams();
    return message;
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/batch.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);