import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
function createBaseMultiSignature() {
    return {
        signatures: []
    };
}
export const MultiSignature = {
    typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
    aminoType: "cosmos-sdk/MultiSignature",
    is(o) {
        return o && (o.$typeUrl === MultiSignature.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MultiSignature.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.signatures) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMultiSignature();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatures.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMultiSignature();
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromProtoMsg(message) {
        return MultiSignature.decode(message.value);
    },
    toProto(message) {
        return MultiSignature.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
            value: MultiSignature.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MultiSignature.typeUrl, MultiSignature);
GlobalDecoderRegistry.registerAminoProtoMapping(MultiSignature.aminoType, MultiSignature.typeUrl);
function createBaseCompactBitArray() {
    return {
        extraBitsStored: 0,
        elems: new Uint8Array()
    };
}
export const CompactBitArray = {
    typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
    aminoType: "cosmos-sdk/CompactBitArray",
    is(o) {
        return o && (o.$typeUrl === CompactBitArray.typeUrl || typeof o.extraBitsStored === "number" && (o.elems instanceof Uint8Array || typeof o.elems === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === CompactBitArray.typeUrl || typeof o.extra_bits_stored === "number" && (o.elems instanceof Uint8Array || typeof o.elems === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.extraBitsStored !== 0) {
            writer.uint32(8).uint32(message.extraBitsStored);
        }
        if (message.elems.length !== 0) {
            writer.uint32(18).bytes(message.elems);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompactBitArray();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extraBitsStored = reader.uint32();
                    break;
                case 2:
                    message.elems = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCompactBitArray();
        message.extraBitsStored = object.extraBitsStored ?? 0;
        message.elems = object.elems ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return CompactBitArray.decode(message.value);
    },
    toProto(message) {
        return CompactBitArray.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
            value: CompactBitArray.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(CompactBitArray.typeUrl, CompactBitArray);
GlobalDecoderRegistry.registerAminoProtoMapping(CompactBitArray.aminoType, CompactBitArray.typeUrl);
//# sourceMappingURL=multisig.js.map