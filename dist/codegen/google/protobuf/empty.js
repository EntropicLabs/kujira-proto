import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
function createBaseEmpty() {
    return {};
}
export const Empty = {
    typeUrl: "/google.protobuf.Empty",
    is(o) {
        return o && o.$typeUrl === Empty.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === Empty.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmpty();
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
    fromPartial(_) {
        const message = createBaseEmpty();
        return message;
    },
    fromProtoMsg(message) {
        return Empty.decode(message.value);
    },
    toProto(message) {
        return Empty.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Empty",
            value: Empty.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Empty.typeUrl, Empty);
//# sourceMappingURL=empty.js.map