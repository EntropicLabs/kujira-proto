import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAuthorization } from "./authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
function createBaseQueryGrantsRequest() {
    return {
        granter: "",
        grantee: "",
        msgTypeUrl: "",
        pagination: undefined
    };
}
export const QueryGrantsRequest = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
    aminoType: "cosmos-sdk/QueryGrantsRequest",
    is(o) {
        return o && (o.$typeUrl === QueryGrantsRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msgTypeUrl === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGrantsRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msg_type_url === "string");
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
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGrantsRequest();
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
                case 4:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGrantsRequest();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryGrantsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGrantsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
            value: QueryGrantsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGrantsRequest.typeUrl, QueryGrantsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGrantsRequest.aminoType, QueryGrantsRequest.typeUrl);
function createBaseQueryGrantsResponse() {
    return {
        grants: [],
        pagination: undefined
    };
}
export const QueryGrantsResponse = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
    aminoType: "cosmos-sdk/QueryGrantsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || Grant.is(o.grants[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || Grant.isSDK(o.grants[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.grants) {
            Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGrantsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(Grant.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGrantsResponse();
        message.grants = object.grants?.map(e => Grant.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryGrantsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGrantsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
            value: QueryGrantsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGrantsResponse.typeUrl, QueryGrantsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGrantsResponse.aminoType, QueryGrantsResponse.typeUrl);
function createBaseQueryGranterGrantsRequest() {
    return {
        granter: "",
        pagination: undefined
    };
}
export const QueryGranterGrantsRequest = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
    aminoType: "cosmos-sdk/QueryGranterGrantsRequest",
    is(o) {
        return o && (o.$typeUrl === QueryGranterGrantsRequest.typeUrl || typeof o.granter === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGranterGrantsRequest.typeUrl || typeof o.granter === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGranterGrantsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGranterGrantsRequest();
        message.granter = object.granter ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryGranterGrantsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGranterGrantsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
            value: QueryGranterGrantsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGranterGrantsRequest.typeUrl, QueryGranterGrantsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGranterGrantsRequest.aminoType, QueryGranterGrantsRequest.typeUrl);
function createBaseQueryGranterGrantsResponse() {
    return {
        grants: [],
        pagination: undefined
    };
}
export const QueryGranterGrantsResponse = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
    aminoType: "cosmos-sdk/QueryGranterGrantsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryGranterGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.is(o.grants[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGranterGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.isSDK(o.grants[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.grants) {
            GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGranterGrantsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(GrantAuthorization.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGranterGrantsResponse();
        message.grants = object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryGranterGrantsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGranterGrantsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
            value: QueryGranterGrantsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGranterGrantsResponse.typeUrl, QueryGranterGrantsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGranterGrantsResponse.aminoType, QueryGranterGrantsResponse.typeUrl);
function createBaseQueryGranteeGrantsRequest() {
    return {
        grantee: "",
        pagination: undefined
    };
}
export const QueryGranteeGrantsRequest = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
    aminoType: "cosmos-sdk/QueryGranteeGrantsRequest",
    is(o) {
        return o && (o.$typeUrl === QueryGranteeGrantsRequest.typeUrl || typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGranteeGrantsRequest.typeUrl || typeof o.grantee === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.grantee !== "") {
            writer.uint32(10).string(message.grantee);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGranteeGrantsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grantee = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGranteeGrantsRequest();
        message.grantee = object.grantee ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryGranteeGrantsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGranteeGrantsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
            value: QueryGranteeGrantsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGranteeGrantsRequest.typeUrl, QueryGranteeGrantsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGranteeGrantsRequest.aminoType, QueryGranteeGrantsRequest.typeUrl);
function createBaseQueryGranteeGrantsResponse() {
    return {
        grants: [],
        pagination: undefined
    };
}
export const QueryGranteeGrantsResponse = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
    aminoType: "cosmos-sdk/QueryGranteeGrantsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryGranteeGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.is(o.grants[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGranteeGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.isSDK(o.grants[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.grants) {
            GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGranteeGrantsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(GrantAuthorization.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGranteeGrantsResponse();
        message.grants = object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryGranteeGrantsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGranteeGrantsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
            value: QueryGranteeGrantsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGranteeGrantsResponse.typeUrl, QueryGranteeGrantsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGranteeGrantsResponse.aminoType, QueryGranteeGrantsResponse.typeUrl);
//# sourceMappingURL=query.js.map