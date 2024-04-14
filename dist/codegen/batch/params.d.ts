import { BinaryReader, BinaryWriter } from "../binary";
/** Params holds parameters for the batch module */
export interface Params {
}
export interface ParamsProtoMsg {
    typeUrl: "/batch.Params";
    value: Uint8Array;
}
/** Params holds parameters for the batch module */
export interface ParamsSDKType {
}
export declare const Params: {
    typeUrl: string;
    is(o: any): o is Params;
    isSDK(o: any): o is ParamsSDKType;
    encode(_: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(_: Partial<Params>): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
