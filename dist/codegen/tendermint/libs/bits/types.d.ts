import { BinaryReader, BinaryWriter } from "../../../binary";
export interface BitArray {
    bits: bigint;
    elems: bigint[];
}
export interface BitArrayProtoMsg {
    typeUrl: "/tendermint.libs.bits.BitArray";
    value: Uint8Array;
}
export interface BitArraySDKType {
    bits: bigint;
    elems: bigint[];
}
export declare const BitArray: {
    typeUrl: string;
    is(o: any): o is BitArray;
    isSDK(o: any): o is BitArraySDKType;
    encode(message: BitArray, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BitArray;
    fromPartial(object: Partial<BitArray>): BitArray;
    fromProtoMsg(message: BitArrayProtoMsg): BitArray;
    toProto(message: BitArray): Uint8Array;
    toProtoMsg(message: BitArray): BitArrayProtoMsg;
};
