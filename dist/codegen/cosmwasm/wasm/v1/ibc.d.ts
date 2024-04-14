import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgIBCSend */
export interface MsgIBCSend {
    /** the channel by which the packet will be sent */
    channel: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeoutHeight: bigint;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     */
    timeoutTimestamp: bigint;
    /**
     * Data is the payload to transfer. We must not make assumption what format or
     * content is in here.
     */
    data: Uint8Array;
}
export interface MsgIBCSendProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend";
    value: Uint8Array;
}
/** MsgIBCSend */
export interface MsgIBCSendSDKType {
    channel: string;
    timeout_height: bigint;
    timeout_timestamp: bigint;
    data: Uint8Array;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannel {
    channel: string;
}
export interface MsgIBCCloseChannelProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel";
    value: Uint8Array;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannelSDKType {
    channel: string;
}
export declare const MsgIBCSend: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgIBCSend;
    isSDK(o: any): o is MsgIBCSendSDKType;
    encode(message: MsgIBCSend, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCSend;
    fromPartial(object: Partial<MsgIBCSend>): MsgIBCSend;
    fromProtoMsg(message: MsgIBCSendProtoMsg): MsgIBCSend;
    toProto(message: MsgIBCSend): Uint8Array;
    toProtoMsg(message: MsgIBCSend): MsgIBCSendProtoMsg;
};
export declare const MsgIBCCloseChannel: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgIBCCloseChannel;
    isSDK(o: any): o is MsgIBCCloseChannelSDKType;
    encode(message: MsgIBCCloseChannel, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCCloseChannel;
    fromPartial(object: Partial<MsgIBCCloseChannel>): MsgIBCCloseChannel;
    fromProtoMsg(message: MsgIBCCloseChannelProtoMsg): MsgIBCCloseChannel;
    toProto(message: MsgIBCCloseChannel): Uint8Array;
    toProtoMsg(message: MsgIBCCloseChannel): MsgIBCCloseChannelProtoMsg;
};
