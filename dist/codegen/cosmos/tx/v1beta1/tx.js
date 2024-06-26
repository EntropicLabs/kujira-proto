import { Any } from "../../../google/protobuf/any";
import { CompactBitArray } from "../../crypto/multisig/v1beta1/multisig";
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
function createBaseTx() {
    return {
        body: undefined,
        authInfo: undefined,
        signatures: []
    };
}
export const Tx = {
    typeUrl: "/cosmos.tx.v1beta1.Tx",
    aminoType: "cosmos-sdk/Tx",
    is(o) {
        return o && (o.$typeUrl === Tx.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Tx.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.body !== undefined) {
            TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
        }
        if (message.authInfo !== undefined) {
            AuthInfo.encode(message.authInfo, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body = TxBody.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.authInfo = AuthInfo.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = createBaseTx();
        message.body = object.body !== undefined && object.body !== null ? TxBody.fromPartial(object.body) : undefined;
        message.authInfo = object.authInfo !== undefined && object.authInfo !== null ? AuthInfo.fromPartial(object.authInfo) : undefined;
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromProtoMsg(message) {
        return Tx.decode(message.value);
    },
    toProto(message) {
        return Tx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Tx",
            value: Tx.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Tx.typeUrl, Tx);
GlobalDecoderRegistry.registerAminoProtoMapping(Tx.aminoType, Tx.typeUrl);
function createBaseTxRaw() {
    return {
        bodyBytes: new Uint8Array(),
        authInfoBytes: new Uint8Array(),
        signatures: []
    };
}
export const TxRaw = {
    typeUrl: "/cosmos.tx.v1beta1.TxRaw",
    aminoType: "cosmos-sdk/TxRaw",
    is(o) {
        return o && (o.$typeUrl === TxRaw.typeUrl || (o.bodyBytes instanceof Uint8Array || typeof o.bodyBytes === "string") && (o.authInfoBytes instanceof Uint8Array || typeof o.authInfoBytes === "string") && Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === TxRaw.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.authInfoBytes.length !== 0) {
            writer.uint32(18).bytes(message.authInfoBytes);
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxRaw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case 3:
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
        const message = createBaseTxRaw();
        message.bodyBytes = object.bodyBytes ?? new Uint8Array();
        message.authInfoBytes = object.authInfoBytes ?? new Uint8Array();
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromProtoMsg(message) {
        return TxRaw.decode(message.value);
    },
    toProto(message) {
        return TxRaw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxRaw",
            value: TxRaw.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(TxRaw.typeUrl, TxRaw);
GlobalDecoderRegistry.registerAminoProtoMapping(TxRaw.aminoType, TxRaw.typeUrl);
function createBaseSignDoc() {
    return {
        bodyBytes: new Uint8Array(),
        authInfoBytes: new Uint8Array(),
        chainId: "",
        accountNumber: BigInt(0)
    };
}
export const SignDoc = {
    typeUrl: "/cosmos.tx.v1beta1.SignDoc",
    aminoType: "cosmos-sdk/SignDoc",
    is(o) {
        return o && (o.$typeUrl === SignDoc.typeUrl || (o.bodyBytes instanceof Uint8Array || typeof o.bodyBytes === "string") && (o.authInfoBytes instanceof Uint8Array || typeof o.authInfoBytes === "string") && typeof o.chainId === "string" && typeof o.accountNumber === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === SignDoc.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.authInfoBytes.length !== 0) {
            writer.uint32(18).bytes(message.authInfoBytes);
        }
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
        }
        if (message.accountNumber !== BigInt(0)) {
            writer.uint32(32).uint64(message.accountNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignDoc();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                case 4:
                    message.accountNumber = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignDoc();
        message.bodyBytes = object.bodyBytes ?? new Uint8Array();
        message.authInfoBytes = object.authInfoBytes ?? new Uint8Array();
        message.chainId = object.chainId ?? "";
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return SignDoc.decode(message.value);
    },
    toProto(message) {
        return SignDoc.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignDoc",
            value: SignDoc.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(SignDoc.typeUrl, SignDoc);
GlobalDecoderRegistry.registerAminoProtoMapping(SignDoc.aminoType, SignDoc.typeUrl);
function createBaseSignDocDirectAux() {
    return {
        bodyBytes: new Uint8Array(),
        publicKey: undefined,
        chainId: "",
        accountNumber: BigInt(0),
        sequence: BigInt(0),
        tip: undefined
    };
}
export const SignDocDirectAux = {
    typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
    aminoType: "cosmos-sdk/SignDocDirectAux",
    is(o) {
        return o && (o.$typeUrl === SignDocDirectAux.typeUrl || (o.bodyBytes instanceof Uint8Array || typeof o.bodyBytes === "string") && typeof o.chainId === "string" && typeof o.accountNumber === "bigint" && typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === SignDocDirectAux.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint" && typeof o.sequence === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.publicKey !== undefined) {
            Any.encode(message.publicKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
        }
        if (message.accountNumber !== BigInt(0)) {
            writer.uint32(32).uint64(message.accountNumber);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(40).uint64(message.sequence);
        }
        if (message.tip !== undefined) {
            Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignDocDirectAux();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.publicKey = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                case 4:
                    message.accountNumber = reader.uint64();
                    break;
                case 5:
                    message.sequence = reader.uint64();
                    break;
                case 6:
                    message.tip = Tip.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignDocDirectAux();
        message.bodyBytes = object.bodyBytes ?? new Uint8Array();
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
        message.chainId = object.chainId ?? "";
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return SignDocDirectAux.decode(message.value);
    },
    toProto(message) {
        return SignDocDirectAux.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
            value: SignDocDirectAux.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(SignDocDirectAux.typeUrl, SignDocDirectAux);
GlobalDecoderRegistry.registerAminoProtoMapping(SignDocDirectAux.aminoType, SignDocDirectAux.typeUrl);
function createBaseTxBody() {
    return {
        messages: [],
        memo: "",
        timeoutHeight: BigInt(0),
        extensionOptions: [],
        nonCriticalExtensionOptions: []
    };
}
export const TxBody = {
    typeUrl: "/cosmos.tx.v1beta1.TxBody",
    aminoType: "cosmos-sdk/TxBody",
    is(o) {
        return o && (o.$typeUrl === TxBody.typeUrl || Array.isArray(o.messages) && (!o.messages.length || Any.is(o.messages[0])) && typeof o.memo === "string" && typeof o.timeoutHeight === "bigint" && Array.isArray(o.extensionOptions) && (!o.extensionOptions.length || Any.is(o.extensionOptions[0])) && Array.isArray(o.nonCriticalExtensionOptions) && (!o.nonCriticalExtensionOptions.length || Any.is(o.nonCriticalExtensionOptions[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === TxBody.typeUrl || Array.isArray(o.messages) && (!o.messages.length || Any.isSDK(o.messages[0])) && typeof o.memo === "string" && typeof o.timeout_height === "bigint" && Array.isArray(o.extension_options) && (!o.extension_options.length || Any.isSDK(o.extension_options[0])) && Array.isArray(o.non_critical_extension_options) && (!o.non_critical_extension_options.length || Any.isSDK(o.non_critical_extension_options[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.messages) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.memo !== "") {
            writer.uint32(18).string(message.memo);
        }
        if (message.timeoutHeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.timeoutHeight);
        }
        for (const v of message.extensionOptions) {
            Any.encode(v, writer.uint32(8186).fork()).ldelim();
        }
        for (const v of message.nonCriticalExtensionOptions) {
            Any.encode(v, writer.uint32(16378).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxBody();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.memo = reader.string();
                    break;
                case 3:
                    message.timeoutHeight = reader.uint64();
                    break;
                case 1023:
                    message.extensionOptions.push(Any.decode(reader, reader.uint32()));
                    break;
                case 2047:
                    message.nonCriticalExtensionOptions.push(Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTxBody();
        message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
        message.memo = object.memo ?? "";
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? BigInt(object.timeoutHeight.toString()) : BigInt(0);
        message.extensionOptions = object.extensionOptions?.map(e => Any.fromPartial(e)) || [];
        message.nonCriticalExtensionOptions = object.nonCriticalExtensionOptions?.map(e => Any.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return TxBody.decode(message.value);
    },
    toProto(message) {
        return TxBody.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: TxBody.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(TxBody.typeUrl, TxBody);
GlobalDecoderRegistry.registerAminoProtoMapping(TxBody.aminoType, TxBody.typeUrl);
function createBaseAuthInfo() {
    return {
        signerInfos: [],
        fee: undefined,
        tip: undefined
    };
}
export const AuthInfo = {
    typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
    aminoType: "cosmos-sdk/AuthInfo",
    is(o) {
        return o && (o.$typeUrl === AuthInfo.typeUrl || Array.isArray(o.signerInfos) && (!o.signerInfos.length || SignerInfo.is(o.signerInfos[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === AuthInfo.typeUrl || Array.isArray(o.signer_infos) && (!o.signer_infos.length || SignerInfo.isSDK(o.signer_infos[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.signerInfos) {
            SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
        }
        if (message.tip !== undefined) {
            Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signerInfos.push(SignerInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fee = Fee.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tip = Tip.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAuthInfo();
        message.signerInfos = object.signerInfos?.map(e => SignerInfo.fromPartial(e)) || [];
        message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
        message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return AuthInfo.decode(message.value);
    },
    toProto(message) {
        return AuthInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
            value: AuthInfo.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(AuthInfo.typeUrl, AuthInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(AuthInfo.aminoType, AuthInfo.typeUrl);
function createBaseSignerInfo() {
    return {
        publicKey: undefined,
        modeInfo: undefined,
        sequence: BigInt(0)
    };
}
export const SignerInfo = {
    typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
    aminoType: "cosmos-sdk/SignerInfo",
    is(o) {
        return o && (o.$typeUrl === SignerInfo.typeUrl || typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === SignerInfo.typeUrl || typeof o.sequence === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.publicKey !== undefined) {
            Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.modeInfo !== undefined) {
            ModeInfo.encode(message.modeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicKey = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.modeInfo = ModeInfo.decode(reader, reader.uint32());
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
        const message = createBaseSignerInfo();
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
        message.modeInfo = object.modeInfo !== undefined && object.modeInfo !== null ? ModeInfo.fromPartial(object.modeInfo) : undefined;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return SignerInfo.decode(message.value);
    },
    toProto(message) {
        return SignerInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
            value: SignerInfo.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(SignerInfo.typeUrl, SignerInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(SignerInfo.aminoType, SignerInfo.typeUrl);
function createBaseModeInfo() {
    return {
        single: undefined,
        multi: undefined
    };
}
export const ModeInfo = {
    typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
    aminoType: "cosmos-sdk/ModeInfo",
    is(o) {
        return o && o.$typeUrl === ModeInfo.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ModeInfo.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.single !== undefined) {
            ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.single = ModeInfo_Single.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multi = ModeInfo_Multi.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModeInfo();
        message.single = object.single !== undefined && object.single !== null ? ModeInfo_Single.fromPartial(object.single) : undefined;
        message.multi = object.multi !== undefined && object.multi !== null ? ModeInfo_Multi.fromPartial(object.multi) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return ModeInfo.decode(message.value);
    },
    toProto(message) {
        return ModeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
            value: ModeInfo.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ModeInfo.typeUrl, ModeInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(ModeInfo.aminoType, ModeInfo.typeUrl);
function createBaseModeInfo_Single() {
    return {
        mode: 0
    };
}
export const ModeInfo_Single = {
    typeUrl: "/cosmos.tx.v1beta1.Single",
    aminoType: "cosmos-sdk/Single",
    is(o) {
        return o && (o.$typeUrl === ModeInfo_Single.typeUrl || isSet(o.mode));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ModeInfo_Single.typeUrl || isSet(o.mode));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo_Single();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModeInfo_Single();
        message.mode = object.mode ?? 0;
        return message;
    },
    fromProtoMsg(message) {
        return ModeInfo_Single.decode(message.value);
    },
    toProto(message) {
        return ModeInfo_Single.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Single",
            value: ModeInfo_Single.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ModeInfo_Single.typeUrl, ModeInfo_Single);
GlobalDecoderRegistry.registerAminoProtoMapping(ModeInfo_Single.aminoType, ModeInfo_Single.typeUrl);
function createBaseModeInfo_Multi() {
    return {
        bitarray: undefined,
        modeInfos: []
    };
}
export const ModeInfo_Multi = {
    typeUrl: "/cosmos.tx.v1beta1.Multi",
    aminoType: "cosmos-sdk/Multi",
    is(o) {
        return o && (o.$typeUrl === ModeInfo_Multi.typeUrl || Array.isArray(o.modeInfos) && (!o.modeInfos.length || ModeInfo.is(o.modeInfos[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ModeInfo_Multi.typeUrl || Array.isArray(o.mode_infos) && (!o.mode_infos.length || ModeInfo.isSDK(o.mode_infos[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.bitarray !== undefined) {
            CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.modeInfos) {
            ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo_Multi();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitarray = CompactBitArray.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.modeInfos.push(ModeInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModeInfo_Multi();
        message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : undefined;
        message.modeInfos = object.modeInfos?.map(e => ModeInfo.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return ModeInfo_Multi.decode(message.value);
    },
    toProto(message) {
        return ModeInfo_Multi.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Multi",
            value: ModeInfo_Multi.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ModeInfo_Multi.typeUrl, ModeInfo_Multi);
GlobalDecoderRegistry.registerAminoProtoMapping(ModeInfo_Multi.aminoType, ModeInfo_Multi.typeUrl);
function createBaseFee() {
    return {
        amount: [],
        gasLimit: BigInt(0),
        payer: "",
        granter: ""
    };
}
export const Fee = {
    typeUrl: "/cosmos.tx.v1beta1.Fee",
    aminoType: "cosmos-sdk/Fee",
    is(o) {
        return o && (o.$typeUrl === Fee.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])) && typeof o.gasLimit === "bigint" && typeof o.payer === "string" && typeof o.granter === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Fee.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])) && typeof o.gas_limit === "bigint" && typeof o.payer === "string" && typeof o.granter === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.gasLimit !== BigInt(0)) {
            writer.uint32(16).uint64(message.gasLimit);
        }
        if (message.payer !== "") {
            writer.uint32(26).string(message.payer);
        }
        if (message.granter !== "") {
            writer.uint32(34).string(message.granter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.gasLimit = reader.uint64();
                    break;
                case 3:
                    message.payer = reader.string();
                    break;
                case 4:
                    message.granter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFee();
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
        message.payer = object.payer ?? "";
        message.granter = object.granter ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return Fee.decode(message.value);
    },
    toProto(message) {
        return Fee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Fee",
            value: Fee.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Fee.typeUrl, Fee);
GlobalDecoderRegistry.registerAminoProtoMapping(Fee.aminoType, Fee.typeUrl);
function createBaseTip() {
    return {
        amount: [],
        tipper: ""
    };
}
export const Tip = {
    typeUrl: "/cosmos.tx.v1beta1.Tip",
    aminoType: "cosmos-sdk/Tip",
    is(o) {
        return o && (o.$typeUrl === Tip.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])) && typeof o.tipper === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Tip.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])) && typeof o.tipper === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tipper !== "") {
            writer.uint32(18).string(message.tipper);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTip();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tipper = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTip();
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        message.tipper = object.tipper ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return Tip.decode(message.value);
    },
    toProto(message) {
        return Tip.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Tip",
            value: Tip.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Tip.typeUrl, Tip);
GlobalDecoderRegistry.registerAminoProtoMapping(Tip.aminoType, Tip.typeUrl);
function createBaseAuxSignerData() {
    return {
        address: "",
        signDoc: undefined,
        mode: 0,
        sig: new Uint8Array()
    };
}
export const AuxSignerData = {
    typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
    aminoType: "cosmos-sdk/AuxSignerData",
    is(o) {
        return o && (o.$typeUrl === AuxSignerData.typeUrl || typeof o.address === "string" && isSet(o.mode) && (o.sig instanceof Uint8Array || typeof o.sig === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === AuxSignerData.typeUrl || typeof o.address === "string" && isSet(o.mode) && (o.sig instanceof Uint8Array || typeof o.sig === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.signDoc !== undefined) {
            SignDocDirectAux.encode(message.signDoc, writer.uint32(18).fork()).ldelim();
        }
        if (message.mode !== 0) {
            writer.uint32(24).int32(message.mode);
        }
        if (message.sig.length !== 0) {
            writer.uint32(34).bytes(message.sig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuxSignerData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.signDoc = SignDocDirectAux.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mode = reader.int32();
                    break;
                case 4:
                    message.sig = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAuxSignerData();
        message.address = object.address ?? "";
        message.signDoc = object.signDoc !== undefined && object.signDoc !== null ? SignDocDirectAux.fromPartial(object.signDoc) : undefined;
        message.mode = object.mode ?? 0;
        message.sig = object.sig ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return AuxSignerData.decode(message.value);
    },
    toProto(message) {
        return AuxSignerData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
            value: AuxSignerData.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(AuxSignerData.typeUrl, AuxSignerData);
GlobalDecoderRegistry.registerAminoProtoMapping(AuxSignerData.aminoType, AuxSignerData.typeUrl);
//# sourceMappingURL=tx.js.map