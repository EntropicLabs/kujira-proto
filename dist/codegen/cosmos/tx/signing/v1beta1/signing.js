import { CompactBitArray } from "../../../crypto/multisig/v1beta1/multisig";
import { Any } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { isSet } from "../../../../helpers";
/**
 * SignMode represents a signing mode with its own security guarantees.
 *
 * This enum should be considered a registry of all known sign modes
 * in the Cosmos ecosystem. Apps are not expected to support all known
 * sign modes. Apps that would like to support custom  sign modes are
 * encouraged to open a small PR against this file to add a new case
 * to this SignMode enum describing their sign mode so that different
 * apps have a consistent version of this enum.
 */
export var SignMode;
(function (SignMode) {
    /**
     * SIGN_MODE_UNSPECIFIED - SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
     * rejected.
     */
    SignMode[SignMode["SIGN_MODE_UNSPECIFIED"] = 0] = "SIGN_MODE_UNSPECIFIED";
    /**
     * SIGN_MODE_DIRECT - SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
     * verified with raw bytes from Tx.
     */
    SignMode[SignMode["SIGN_MODE_DIRECT"] = 1] = "SIGN_MODE_DIRECT";
    /**
     * SIGN_MODE_TEXTUAL - SIGN_MODE_TEXTUAL is a future signing mode that will verify some
     * human-readable textual representation on top of the binary representation
     * from SIGN_MODE_DIRECT. It is currently not supported.
     */
    SignMode[SignMode["SIGN_MODE_TEXTUAL"] = 2] = "SIGN_MODE_TEXTUAL";
    /**
     * SIGN_MODE_DIRECT_AUX - SIGN_MODE_DIRECT_AUX specifies a signing mode which uses
     * SignDocDirectAux. As opposed to SIGN_MODE_DIRECT, this sign mode does not
     * require signers signing over other signers' `signer_info`. It also allows
     * for adding Tips in transactions.
     *
     * Since: cosmos-sdk 0.46
     */
    SignMode[SignMode["SIGN_MODE_DIRECT_AUX"] = 3] = "SIGN_MODE_DIRECT_AUX";
    /**
     * SIGN_MODE_LEGACY_AMINO_JSON - SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
     * Amino JSON and will be removed in the future.
     */
    SignMode[SignMode["SIGN_MODE_LEGACY_AMINO_JSON"] = 127] = "SIGN_MODE_LEGACY_AMINO_JSON";
    SignMode[SignMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignMode || (SignMode = {}));
export const SignModeSDKType = SignMode;
export function signModeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGN_MODE_UNSPECIFIED":
            return SignMode.SIGN_MODE_UNSPECIFIED;
        case 1:
        case "SIGN_MODE_DIRECT":
            return SignMode.SIGN_MODE_DIRECT;
        case 2:
        case "SIGN_MODE_TEXTUAL":
            return SignMode.SIGN_MODE_TEXTUAL;
        case 3:
        case "SIGN_MODE_DIRECT_AUX":
            return SignMode.SIGN_MODE_DIRECT_AUX;
        case 127:
        case "SIGN_MODE_LEGACY_AMINO_JSON":
            return SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SignMode.UNRECOGNIZED;
    }
}
export function signModeToJSON(object) {
    switch (object) {
        case SignMode.SIGN_MODE_UNSPECIFIED:
            return "SIGN_MODE_UNSPECIFIED";
        case SignMode.SIGN_MODE_DIRECT:
            return "SIGN_MODE_DIRECT";
        case SignMode.SIGN_MODE_TEXTUAL:
            return "SIGN_MODE_TEXTUAL";
        case SignMode.SIGN_MODE_DIRECT_AUX:
            return "SIGN_MODE_DIRECT_AUX";
        case SignMode.SIGN_MODE_LEGACY_AMINO_JSON:
            return "SIGN_MODE_LEGACY_AMINO_JSON";
        case SignMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseSignatureDescriptors() {
    return {
        signatures: []
    };
}
export const SignatureDescriptors = {
    typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptors",
    aminoType: "cosmos-sdk/SignatureDescriptors",
    is(o) {
        return o && (o.$typeUrl === SignatureDescriptors.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || SignatureDescriptor.is(o.signatures[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === SignatureDescriptors.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || SignatureDescriptor.isSDK(o.signatures[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.signatures) {
            SignatureDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignatureDescriptors();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatures.push(SignatureDescriptor.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignatureDescriptors();
        message.signatures = object.signatures?.map(e => SignatureDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return SignatureDescriptors.decode(message.value);
    },
    toProto(message) {
        return SignatureDescriptors.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptors",
            value: SignatureDescriptors.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(SignatureDescriptors.typeUrl, SignatureDescriptors);
GlobalDecoderRegistry.registerAminoProtoMapping(SignatureDescriptors.aminoType, SignatureDescriptors.typeUrl);
function createBaseSignatureDescriptor() {
    return {
        publicKey: undefined,
        data: undefined,
        sequence: BigInt(0)
    };
}
export const SignatureDescriptor = {
    typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptor",
    aminoType: "cosmos-sdk/SignatureDescriptor",
    is(o) {
        return o && (o.$typeUrl === SignatureDescriptor.typeUrl || typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === SignatureDescriptor.typeUrl || typeof o.sequence === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.publicKey !== undefined) {
            Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined) {
            SignatureDescriptor_Data.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignatureDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicKey = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = SignatureDescriptor_Data.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignatureDescriptor();
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
        message.data = object.data !== undefined && object.data !== null ? SignatureDescriptor_Data.fromPartial(object.data) : undefined;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return SignatureDescriptor.decode(message.value);
    },
    toProto(message) {
        return SignatureDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptor",
            value: SignatureDescriptor.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(SignatureDescriptor.typeUrl, SignatureDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(SignatureDescriptor.aminoType, SignatureDescriptor.typeUrl);
function createBaseSignatureDescriptor_Data() {
    return {
        single: undefined,
        multi: undefined
    };
}
export const SignatureDescriptor_Data = {
    typeUrl: "/cosmos.tx.signing.v1beta1.Data",
    aminoType: "cosmos-sdk/Data",
    is(o) {
        return o && o.$typeUrl === SignatureDescriptor_Data.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === SignatureDescriptor_Data.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.single !== undefined) {
            SignatureDescriptor_Data_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            SignatureDescriptor_Data_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignatureDescriptor_Data();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.single = SignatureDescriptor_Data_Single.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multi = SignatureDescriptor_Data_Multi.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignatureDescriptor_Data();
        message.single = object.single !== undefined && object.single !== null ? SignatureDescriptor_Data_Single.fromPartial(object.single) : undefined;
        message.multi = object.multi !== undefined && object.multi !== null ? SignatureDescriptor_Data_Multi.fromPartial(object.multi) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return SignatureDescriptor_Data.decode(message.value);
    },
    toProto(message) {
        return SignatureDescriptor_Data.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.signing.v1beta1.Data",
            value: SignatureDescriptor_Data.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(SignatureDescriptor_Data.typeUrl, SignatureDescriptor_Data);
GlobalDecoderRegistry.registerAminoProtoMapping(SignatureDescriptor_Data.aminoType, SignatureDescriptor_Data.typeUrl);
function createBaseSignatureDescriptor_Data_Single() {
    return {
        mode: 0,
        signature: new Uint8Array()
    };
}
export const SignatureDescriptor_Data_Single = {
    typeUrl: "/cosmos.tx.signing.v1beta1.Single",
    aminoType: "cosmos-sdk/Single",
    is(o) {
        return o && (o.$typeUrl === SignatureDescriptor_Data_Single.typeUrl || isSet(o.mode) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === SignatureDescriptor_Data_Single.typeUrl || isSet(o.mode) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.signature.length !== 0) {
            writer.uint32(18).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignatureDescriptor_Data_Single();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignatureDescriptor_Data_Single();
        message.mode = object.mode ?? 0;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return SignatureDescriptor_Data_Single.decode(message.value);
    },
    toProto(message) {
        return SignatureDescriptor_Data_Single.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.signing.v1beta1.Single",
            value: SignatureDescriptor_Data_Single.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(SignatureDescriptor_Data_Single.typeUrl, SignatureDescriptor_Data_Single);
GlobalDecoderRegistry.registerAminoProtoMapping(SignatureDescriptor_Data_Single.aminoType, SignatureDescriptor_Data_Single.typeUrl);
function createBaseSignatureDescriptor_Data_Multi() {
    return {
        bitarray: undefined,
        signatures: []
    };
}
export const SignatureDescriptor_Data_Multi = {
    typeUrl: "/cosmos.tx.signing.v1beta1.Multi",
    aminoType: "cosmos-sdk/Multi",
    is(o) {
        return o && (o.$typeUrl === SignatureDescriptor_Data_Multi.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || SignatureDescriptor_Data.is(o.signatures[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === SignatureDescriptor_Data_Multi.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || SignatureDescriptor_Data.isSDK(o.signatures[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.bitarray !== undefined) {
            CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            SignatureDescriptor_Data.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignatureDescriptor_Data_Multi();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitarray = CompactBitArray.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signatures.push(SignatureDescriptor_Data.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignatureDescriptor_Data_Multi();
        message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : undefined;
        message.signatures = object.signatures?.map(e => SignatureDescriptor_Data.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return SignatureDescriptor_Data_Multi.decode(message.value);
    },
    toProto(message) {
        return SignatureDescriptor_Data_Multi.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.signing.v1beta1.Multi",
            value: SignatureDescriptor_Data_Multi.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(SignatureDescriptor_Data_Multi.typeUrl, SignatureDescriptor_Data_Multi);
GlobalDecoderRegistry.registerAminoProtoMapping(SignatureDescriptor_Data_Multi.aminoType, SignatureDescriptor_Data_Multi.typeUrl);
//# sourceMappingURL=signing.js.map