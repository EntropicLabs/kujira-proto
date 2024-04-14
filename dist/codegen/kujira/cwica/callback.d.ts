import { BinaryReader, BinaryWriter } from "../../binary";
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
export declare const CallbackData: {
    typeUrl: string;
    is(o: any): o is CallbackData;
    isSDK(o: any): o is CallbackDataSDKType;
    encode(message: CallbackData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CallbackData;
    fromPartial(object: Partial<CallbackData>): CallbackData;
    fromProtoMsg(message: CallbackDataProtoMsg): CallbackData;
    toProto(message: CallbackData): Uint8Array;
    toProtoMsg(message: CallbackData): CallbackDataProtoMsg;
};
