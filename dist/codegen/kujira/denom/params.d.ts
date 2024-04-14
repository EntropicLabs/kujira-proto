import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params holds parameters for the denom module */
export interface Params {
    creationFee: Coin[];
}
export interface ParamsProtoMsg {
    typeUrl: "/kujira.denom.Params";
    value: Uint8Array;
}
/** Params holds parameters for the denom module */
export interface ParamsSDKType {
    creation_fee: CoinSDKType[];
}
export declare const Params: {
    typeUrl: string;
    is(o: any): o is Params;
    isSDK(o: any): o is ParamsSDKType;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
