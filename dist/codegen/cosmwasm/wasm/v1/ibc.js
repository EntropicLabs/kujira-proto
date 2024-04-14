import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
function createBaseMsgIBCSend() {
    return {
        channel: "",
        timeoutHeight: BigInt(0),
        timeoutTimestamp: BigInt(0),
        data: new Uint8Array()
    };
}
export const MsgIBCSend = {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend",
    aminoType: "wasm/MsgIBCSend",
    is(o) {
        return o && (o.$typeUrl === MsgIBCSend.typeUrl || typeof o.channel === "string" && typeof o.timeoutHeight === "bigint" && typeof o.timeoutTimestamp === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgIBCSend.typeUrl || typeof o.channel === "string" && typeof o.timeout_height === "bigint" && typeof o.timeout_timestamp === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        if (message.timeoutHeight !== BigInt(0)) {
            writer.uint32(32).uint64(message.timeoutHeight);
        }
        if (message.timeoutTimestamp !== BigInt(0)) {
            writer.uint32(40).uint64(message.timeoutTimestamp);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIBCSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.channel = reader.string();
                    break;
                case 4:
                    message.timeoutHeight = reader.uint64();
                    break;
                case 5:
                    message.timeoutTimestamp = reader.uint64();
                    break;
                case 6:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgIBCSend();
        message.channel = object.channel ?? "";
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? BigInt(object.timeoutHeight.toString()) : BigInt(0);
        message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return MsgIBCSend.decode(message.value);
    },
    toProto(message) {
        return MsgIBCSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend",
            value: MsgIBCSend.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgIBCSend.typeUrl, MsgIBCSend);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgIBCSend.aminoType, MsgIBCSend.typeUrl);
function createBaseMsgIBCCloseChannel() {
    return {
        channel: ""
    };
}
export const MsgIBCCloseChannel = {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel",
    aminoType: "wasm/MsgIBCCloseChannel",
    is(o) {
        return o && (o.$typeUrl === MsgIBCCloseChannel.typeUrl || typeof o.channel === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgIBCCloseChannel.typeUrl || typeof o.channel === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIBCCloseChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.channel = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgIBCCloseChannel();
        message.channel = object.channel ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return MsgIBCCloseChannel.decode(message.value);
    },
    toProto(message) {
        return MsgIBCCloseChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel",
            value: MsgIBCCloseChannel.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgIBCCloseChannel.typeUrl, MsgIBCCloseChannel);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgIBCCloseChannel.aminoType, MsgIBCCloseChannel.typeUrl);
//# sourceMappingURL=ibc.js.map