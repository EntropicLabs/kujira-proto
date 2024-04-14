import { BinaryReader, BinaryWriter } from "../../binary";
export interface ProtocolVersion {
    p2p: bigint;
    block: bigint;
    app: bigint;
}
export interface ProtocolVersionProtoMsg {
    typeUrl: "/tendermint.p2p.ProtocolVersion";
    value: Uint8Array;
}
export interface ProtocolVersionSDKType {
    p2p: bigint;
    block: bigint;
    app: bigint;
}
export interface NodeInfo {
    protocolVersion: ProtocolVersion;
    nodeId: string;
    listenAddr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other: NodeInfoOther;
}
export interface NodeInfoProtoMsg {
    typeUrl: "/tendermint.p2p.NodeInfo";
    value: Uint8Array;
}
export interface NodeInfoSDKType {
    protocol_version: ProtocolVersionSDKType;
    node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other: NodeInfoOtherSDKType;
}
export interface NodeInfoOther {
    txIndex: string;
    rpcAddress: string;
}
export interface NodeInfoOtherProtoMsg {
    typeUrl: "/tendermint.p2p.NodeInfoOther";
    value: Uint8Array;
}
export interface NodeInfoOtherSDKType {
    tx_index: string;
    rpc_address: string;
}
export interface PeerInfo {
    id: string;
    addressInfo: PeerAddressInfo[];
    lastConnected?: Date;
}
export interface PeerInfoProtoMsg {
    typeUrl: "/tendermint.p2p.PeerInfo";
    value: Uint8Array;
}
export interface PeerInfoSDKType {
    id: string;
    address_info: PeerAddressInfoSDKType[];
    last_connected?: Date;
}
export interface PeerAddressInfo {
    address: string;
    lastDialSuccess?: Date;
    lastDialFailure?: Date;
    dialFailures: number;
}
export interface PeerAddressInfoProtoMsg {
    typeUrl: "/tendermint.p2p.PeerAddressInfo";
    value: Uint8Array;
}
export interface PeerAddressInfoSDKType {
    address: string;
    last_dial_success?: Date;
    last_dial_failure?: Date;
    dial_failures: number;
}
export declare const ProtocolVersion: {
    typeUrl: string;
    is(o: any): o is ProtocolVersion;
    isSDK(o: any): o is ProtocolVersionSDKType;
    encode(message: ProtocolVersion, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProtocolVersion;
    fromPartial(object: Partial<ProtocolVersion>): ProtocolVersion;
    fromProtoMsg(message: ProtocolVersionProtoMsg): ProtocolVersion;
    toProto(message: ProtocolVersion): Uint8Array;
    toProtoMsg(message: ProtocolVersion): ProtocolVersionProtoMsg;
};
export declare const NodeInfo: {
    typeUrl: string;
    is(o: any): o is NodeInfo;
    isSDK(o: any): o is NodeInfoSDKType;
    encode(message: NodeInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NodeInfo;
    fromPartial(object: Partial<NodeInfo>): NodeInfo;
    fromProtoMsg(message: NodeInfoProtoMsg): NodeInfo;
    toProto(message: NodeInfo): Uint8Array;
    toProtoMsg(message: NodeInfo): NodeInfoProtoMsg;
};
export declare const NodeInfoOther: {
    typeUrl: string;
    is(o: any): o is NodeInfoOther;
    isSDK(o: any): o is NodeInfoOtherSDKType;
    encode(message: NodeInfoOther, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NodeInfoOther;
    fromPartial(object: Partial<NodeInfoOther>): NodeInfoOther;
    fromProtoMsg(message: NodeInfoOtherProtoMsg): NodeInfoOther;
    toProto(message: NodeInfoOther): Uint8Array;
    toProtoMsg(message: NodeInfoOther): NodeInfoOtherProtoMsg;
};
export declare const PeerInfo: {
    typeUrl: string;
    is(o: any): o is PeerInfo;
    isSDK(o: any): o is PeerInfoSDKType;
    encode(message: PeerInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PeerInfo;
    fromPartial(object: Partial<PeerInfo>): PeerInfo;
    fromProtoMsg(message: PeerInfoProtoMsg): PeerInfo;
    toProto(message: PeerInfo): Uint8Array;
    toProtoMsg(message: PeerInfo): PeerInfoProtoMsg;
};
export declare const PeerAddressInfo: {
    typeUrl: string;
    is(o: any): o is PeerAddressInfo;
    isSDK(o: any): o is PeerAddressInfoSDKType;
    encode(message: PeerAddressInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PeerAddressInfo;
    fromPartial(object: Partial<PeerAddressInfo>): PeerAddressInfo;
    fromProtoMsg(message: PeerAddressInfoProtoMsg): PeerAddressInfo;
    toProto(message: PeerAddressInfo): Uint8Array;
    toProtoMsg(message: PeerAddressInfo): PeerAddressInfoProtoMsg;
};
