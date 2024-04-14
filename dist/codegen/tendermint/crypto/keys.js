import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
function createBasePublicKey() {
    return {
        ed25519: undefined,
        secp256k1: undefined
    };
}
export const PublicKey = {
    typeUrl: "/tendermint.crypto.PublicKey",
    is(o) {
        return o && o.$typeUrl === PublicKey.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === PublicKey.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.ed25519 !== undefined) {
            writer.uint32(10).bytes(message.ed25519);
        }
        if (message.secp256k1 !== undefined) {
            writer.uint32(18).bytes(message.secp256k1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublicKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ed25519 = reader.bytes();
                    break;
                case 2:
                    message.secp256k1 = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePublicKey();
        message.ed25519 = object.ed25519 ?? undefined;
        message.secp256k1 = object.secp256k1 ?? undefined;
        return message;
    },
    fromProtoMsg(message) {
        return PublicKey.decode(message.value);
    },
    toProto(message) {
        return PublicKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.PublicKey",
            value: PublicKey.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(PublicKey.typeUrl, PublicKey);
//# sourceMappingURL=keys.js.map