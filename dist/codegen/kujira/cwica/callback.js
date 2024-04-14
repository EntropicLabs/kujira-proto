import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
function createBaseCallbackData() {
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
    is(o) {
        return o && (o.$typeUrl === CallbackData.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.sequence === "bigint" && typeof o.contract === "string" && typeof o.connectionId === "string" && typeof o.accountId === "string" && (o.callback instanceof Uint8Array || typeof o.callback === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === CallbackData.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint" && typeof o.contract === "string" && typeof o.connection_id === "string" && typeof o.account_id === "string" && (o.callback instanceof Uint8Array || typeof o.callback === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromPartial(object) {
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
    fromProtoMsg(message) {
        return CallbackData.decode(message.value);
    },
    toProto(message) {
        return CallbackData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.cwica.CallbackData",
            value: CallbackData.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(CallbackData.typeUrl, CallbackData);
//# sourceMappingURL=callback.js.map