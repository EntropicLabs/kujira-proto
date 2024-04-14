import { Grant } from "./authz";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
function createBaseMsgGrant() {
    return {
        granter: "",
        grantee: "",
        grant: Grant.fromPartial({})
    };
}
export const MsgGrant = {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
    aminoType: "cosmos-sdk/MsgGrant",
    is(o) {
        return o && (o.$typeUrl === MsgGrant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && Grant.is(o.grant));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgGrant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && Grant.isSDK(o.grant));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.grant !== undefined) {
            Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.grant = Grant.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgGrant();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.grant = object.grant !== undefined && object.grant !== null ? Grant.fromPartial(object.grant) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return MsgGrant.decode(message.value);
    },
    toProto(message) {
        return MsgGrant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
            value: MsgGrant.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgGrant.typeUrl, MsgGrant);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgGrant.aminoType, MsgGrant.typeUrl);
function createBaseMsgExecResponse() {
    return {
        results: []
    };
}
export const MsgExecResponse = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
    aminoType: "cosmos-sdk/MsgExecResponse",
    is(o) {
        return o && (o.$typeUrl === MsgExecResponse.typeUrl || Array.isArray(o.results) && (!o.results.length || o.results[0] instanceof Uint8Array || typeof o.results[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgExecResponse.typeUrl || Array.isArray(o.results) && (!o.results.length || o.results[0] instanceof Uint8Array || typeof o.results[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.results) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.results.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExecResponse();
        message.results = object.results?.map(e => e) || [];
        return message;
    },
    fromProtoMsg(message) {
        return MsgExecResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExecResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
            value: MsgExecResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgExecResponse.typeUrl, MsgExecResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExecResponse.aminoType, MsgExecResponse.typeUrl);
function createBaseMsgExec() {
    return {
        grantee: "",
        msgs: []
    };
}
export const MsgExec = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    aminoType: "cosmos-sdk/MsgExec",
    is(o) {
        return o && (o.$typeUrl === MsgExec.typeUrl || typeof o.grantee === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgExec.typeUrl || typeof o.grantee === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.grantee !== "") {
            writer.uint32(10).string(message.grantee);
        }
        for (const v of message.msgs) {
            Any.encode(GlobalDecoderRegistry.wrapAny(v), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grantee = reader.string();
                    break;
                case 2:
                    message.msgs.push(GlobalDecoderRegistry.unwrapAny(reader));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExec();
        message.grantee = object.grantee ?? "";
        message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return MsgExec.decode(message.value);
    },
    toProto(message) {
        return MsgExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgExec",
            value: MsgExec.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgExec.typeUrl, MsgExec);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExec.aminoType, MsgExec.typeUrl);
function createBaseMsgGrantResponse() {
    return {};
}
export const MsgGrantResponse = {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
    aminoType: "cosmos-sdk/MsgGrantResponse",
    is(o) {
        return o && o.$typeUrl === MsgGrantResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgGrantResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGrantResponse();
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
        const message = createBaseMsgGrantResponse();
        return message;
    },
    fromProtoMsg(message) {
        return MsgGrantResponse.decode(message.value);
    },
    toProto(message) {
        return MsgGrantResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
            value: MsgGrantResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgGrantResponse.typeUrl, MsgGrantResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgGrantResponse.aminoType, MsgGrantResponse.typeUrl);
function createBaseMsgRevoke() {
    return {
        granter: "",
        grantee: "",
        msgTypeUrl: ""
    };
}
export const MsgRevoke = {
    typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
    aminoType: "cosmos-sdk/MsgRevoke",
    is(o) {
        return o && (o.$typeUrl === MsgRevoke.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msgTypeUrl === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgRevoke.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msg_type_url === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.msgTypeUrl !== "") {
            writer.uint32(26).string(message.msgTypeUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevoke();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.msgTypeUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRevoke();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return MsgRevoke.decode(message.value);
    },
    toProto(message) {
        return MsgRevoke.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
            value: MsgRevoke.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgRevoke.typeUrl, MsgRevoke);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRevoke.aminoType, MsgRevoke.typeUrl);
function createBaseMsgRevokeResponse() {
    return {};
}
export const MsgRevokeResponse = {
    typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
    aminoType: "cosmos-sdk/MsgRevokeResponse",
    is(o) {
        return o && o.$typeUrl === MsgRevokeResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgRevokeResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeResponse();
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
        const message = createBaseMsgRevokeResponse();
        return message;
    },
    fromProtoMsg(message) {
        return MsgRevokeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRevokeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
            value: MsgRevokeResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgRevokeResponse.typeUrl, MsgRevokeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRevokeResponse.aminoType, MsgRevokeResponse.typeUrl);
//# sourceMappingURL=tx.js.map