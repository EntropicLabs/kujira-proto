import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
function createBaseDenomAuthorityMetadata() {
    return {
        Admin: ""
    };
}
export const DenomAuthorityMetadata = {
    typeUrl: "/kujira.denom.DenomAuthorityMetadata",
    is(o) {
        return o && (o.$typeUrl === DenomAuthorityMetadata.typeUrl || typeof o.Admin === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === DenomAuthorityMetadata.typeUrl || typeof o.Admin === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.Admin !== "") {
            writer.uint32(10).string(message.Admin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomAuthorityMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Admin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDenomAuthorityMetadata();
        message.Admin = object.Admin ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return DenomAuthorityMetadata.decode(message.value);
    },
    toProto(message) {
        return DenomAuthorityMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.denom.DenomAuthorityMetadata",
            value: DenomAuthorityMetadata.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(DenomAuthorityMetadata.typeUrl, DenomAuthorityMetadata);
//# sourceMappingURL=authorityMetadata.js.map