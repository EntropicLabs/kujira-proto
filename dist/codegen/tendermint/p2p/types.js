import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { toTimestamp, fromTimestamp } from "../../helpers";
function createBaseProtocolVersion() {
    return {
        p2p: BigInt(0),
        block: BigInt(0),
        app: BigInt(0)
    };
}
export const ProtocolVersion = {
    typeUrl: "/tendermint.p2p.ProtocolVersion",
    is(o) {
        return o && (o.$typeUrl === ProtocolVersion.typeUrl || typeof o.p2p === "bigint" && typeof o.block === "bigint" && typeof o.app === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === ProtocolVersion.typeUrl || typeof o.p2p === "bigint" && typeof o.block === "bigint" && typeof o.app === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.p2p !== BigInt(0)) {
            writer.uint32(8).uint64(message.p2p);
        }
        if (message.block !== BigInt(0)) {
            writer.uint32(16).uint64(message.block);
        }
        if (message.app !== BigInt(0)) {
            writer.uint32(24).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProtocolVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.p2p = reader.uint64();
                    break;
                case 2:
                    message.block = reader.uint64();
                    break;
                case 3:
                    message.app = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProtocolVersion();
        message.p2p = object.p2p !== undefined && object.p2p !== null ? BigInt(object.p2p.toString()) : BigInt(0);
        message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
        message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return ProtocolVersion.decode(message.value);
    },
    toProto(message) {
        return ProtocolVersion.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.ProtocolVersion",
            value: ProtocolVersion.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ProtocolVersion.typeUrl, ProtocolVersion);
function createBaseNodeInfo() {
    return {
        protocolVersion: ProtocolVersion.fromPartial({}),
        nodeId: "",
        listenAddr: "",
        network: "",
        version: "",
        channels: new Uint8Array(),
        moniker: "",
        other: NodeInfoOther.fromPartial({})
    };
}
export const NodeInfo = {
    typeUrl: "/tendermint.p2p.NodeInfo",
    is(o) {
        return o && (o.$typeUrl === NodeInfo.typeUrl || ProtocolVersion.is(o.protocolVersion) && typeof o.nodeId === "string" && typeof o.listenAddr === "string" && typeof o.network === "string" && typeof o.version === "string" && (o.channels instanceof Uint8Array || typeof o.channels === "string") && typeof o.moniker === "string" && NodeInfoOther.is(o.other));
    },
    isSDK(o) {
        return o && (o.$typeUrl === NodeInfo.typeUrl || ProtocolVersion.isSDK(o.protocol_version) && typeof o.node_id === "string" && typeof o.listen_addr === "string" && typeof o.network === "string" && typeof o.version === "string" && (o.channels instanceof Uint8Array || typeof o.channels === "string") && typeof o.moniker === "string" && NodeInfoOther.isSDK(o.other));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.protocolVersion !== undefined) {
            ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
        }
        if (message.nodeId !== "") {
            writer.uint32(18).string(message.nodeId);
        }
        if (message.listenAddr !== "") {
            writer.uint32(26).string(message.listenAddr);
        }
        if (message.network !== "") {
            writer.uint32(34).string(message.network);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.channels.length !== 0) {
            writer.uint32(50).bytes(message.channels);
        }
        if (message.moniker !== "") {
            writer.uint32(58).string(message.moniker);
        }
        if (message.other !== undefined) {
            NodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocolVersion = ProtocolVersion.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nodeId = reader.string();
                    break;
                case 3:
                    message.listenAddr = reader.string();
                    break;
                case 4:
                    message.network = reader.string();
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.channels = reader.bytes();
                    break;
                case 7:
                    message.moniker = reader.string();
                    break;
                case 8:
                    message.other = NodeInfoOther.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNodeInfo();
        message.protocolVersion = object.protocolVersion !== undefined && object.protocolVersion !== null ? ProtocolVersion.fromPartial(object.protocolVersion) : undefined;
        message.nodeId = object.nodeId ?? "";
        message.listenAddr = object.listenAddr ?? "";
        message.network = object.network ?? "";
        message.version = object.version ?? "";
        message.channels = object.channels ?? new Uint8Array();
        message.moniker = object.moniker ?? "";
        message.other = object.other !== undefined && object.other !== null ? NodeInfoOther.fromPartial(object.other) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return NodeInfo.decode(message.value);
    },
    toProto(message) {
        return NodeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.NodeInfo",
            value: NodeInfo.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(NodeInfo.typeUrl, NodeInfo);
function createBaseNodeInfoOther() {
    return {
        txIndex: "",
        rpcAddress: ""
    };
}
export const NodeInfoOther = {
    typeUrl: "/tendermint.p2p.NodeInfoOther",
    is(o) {
        return o && (o.$typeUrl === NodeInfoOther.typeUrl || typeof o.txIndex === "string" && typeof o.rpcAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === NodeInfoOther.typeUrl || typeof o.tx_index === "string" && typeof o.rpc_address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.txIndex !== "") {
            writer.uint32(10).string(message.txIndex);
        }
        if (message.rpcAddress !== "") {
            writer.uint32(18).string(message.rpcAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNodeInfoOther();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txIndex = reader.string();
                    break;
                case 2:
                    message.rpcAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNodeInfoOther();
        message.txIndex = object.txIndex ?? "";
        message.rpcAddress = object.rpcAddress ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return NodeInfoOther.decode(message.value);
    },
    toProto(message) {
        return NodeInfoOther.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.NodeInfoOther",
            value: NodeInfoOther.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(NodeInfoOther.typeUrl, NodeInfoOther);
function createBasePeerInfo() {
    return {
        id: "",
        addressInfo: [],
        lastConnected: undefined
    };
}
export const PeerInfo = {
    typeUrl: "/tendermint.p2p.PeerInfo",
    is(o) {
        return o && (o.$typeUrl === PeerInfo.typeUrl || typeof o.id === "string" && Array.isArray(o.addressInfo) && (!o.addressInfo.length || PeerAddressInfo.is(o.addressInfo[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === PeerInfo.typeUrl || typeof o.id === "string" && Array.isArray(o.address_info) && (!o.address_info.length || PeerAddressInfo.isSDK(o.address_info[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.addressInfo) {
            PeerAddressInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.lastConnected !== undefined) {
            Timestamp.encode(toTimestamp(message.lastConnected), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.addressInfo.push(PeerAddressInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastConnected = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePeerInfo();
        message.id = object.id ?? "";
        message.addressInfo = object.addressInfo?.map(e => PeerAddressInfo.fromPartial(e)) || [];
        message.lastConnected = object.lastConnected ?? undefined;
        return message;
    },
    fromProtoMsg(message) {
        return PeerInfo.decode(message.value);
    },
    toProto(message) {
        return PeerInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.PeerInfo",
            value: PeerInfo.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(PeerInfo.typeUrl, PeerInfo);
function createBasePeerAddressInfo() {
    return {
        address: "",
        lastDialSuccess: undefined,
        lastDialFailure: undefined,
        dialFailures: 0
    };
}
export const PeerAddressInfo = {
    typeUrl: "/tendermint.p2p.PeerAddressInfo",
    is(o) {
        return o && (o.$typeUrl === PeerAddressInfo.typeUrl || typeof o.address === "string" && typeof o.dialFailures === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === PeerAddressInfo.typeUrl || typeof o.address === "string" && typeof o.dial_failures === "number");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.lastDialSuccess !== undefined) {
            Timestamp.encode(toTimestamp(message.lastDialSuccess), writer.uint32(18).fork()).ldelim();
        }
        if (message.lastDialFailure !== undefined) {
            Timestamp.encode(toTimestamp(message.lastDialFailure), writer.uint32(26).fork()).ldelim();
        }
        if (message.dialFailures !== 0) {
            writer.uint32(32).uint32(message.dialFailures);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeerAddressInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.lastDialSuccess = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastDialFailure = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.dialFailures = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePeerAddressInfo();
        message.address = object.address ?? "";
        message.lastDialSuccess = object.lastDialSuccess ?? undefined;
        message.lastDialFailure = object.lastDialFailure ?? undefined;
        message.dialFailures = object.dialFailures ?? 0;
        return message;
    },
    fromProtoMsg(message) {
        return PeerAddressInfo.decode(message.value);
    },
    toProto(message) {
        return PeerAddressInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.PeerAddressInfo",
            value: PeerAddressInfo.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(PeerAddressInfo.typeUrl, PeerAddressInfo);
//# sourceMappingURL=types.js.map