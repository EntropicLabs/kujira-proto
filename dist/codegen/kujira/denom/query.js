import { Params } from "./params";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/kujira.denom.QueryParamsRequest",
    is(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.denom.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/kujira.denom.QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.denom.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryDenomAuthorityMetadataRequest() {
    return {
        denom: ""
    };
}
export const QueryDenomAuthorityMetadataRequest = {
    typeUrl: "/kujira.denom.QueryDenomAuthorityMetadataRequest",
    is(o) {
        return o && (o.$typeUrl === QueryDenomAuthorityMetadataRequest.typeUrl || typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryDenomAuthorityMetadataRequest.typeUrl || typeof o.denom === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return QueryDenomAuthorityMetadataRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomAuthorityMetadataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.denom.QueryDenomAuthorityMetadataRequest",
            value: QueryDenomAuthorityMetadataRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryDenomAuthorityMetadataRequest.typeUrl, QueryDenomAuthorityMetadataRequest);
function createBaseQueryDenomAuthorityMetadataResponse() {
    return {
        authorityMetadata: DenomAuthorityMetadata.fromPartial({})
    };
}
export const QueryDenomAuthorityMetadataResponse = {
    typeUrl: "/kujira.denom.QueryDenomAuthorityMetadataResponse",
    is(o) {
        return o && (o.$typeUrl === QueryDenomAuthorityMetadataResponse.typeUrl || DenomAuthorityMetadata.is(o.authorityMetadata));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryDenomAuthorityMetadataResponse.typeUrl || DenomAuthorityMetadata.isSDK(o.authority_metadata));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.authorityMetadata !== undefined) {
            DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        message.authorityMetadata = object.authorityMetadata !== undefined && object.authorityMetadata !== null ? DenomAuthorityMetadata.fromPartial(object.authorityMetadata) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryDenomAuthorityMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomAuthorityMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.denom.QueryDenomAuthorityMetadataResponse",
            value: QueryDenomAuthorityMetadataResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryDenomAuthorityMetadataResponse.typeUrl, QueryDenomAuthorityMetadataResponse);
function createBaseQueryDenomsFromCreatorRequest() {
    return {
        creator: ""
    };
}
export const QueryDenomsFromCreatorRequest = {
    typeUrl: "/kujira.denom.QueryDenomsFromCreatorRequest",
    is(o) {
        return o && (o.$typeUrl === QueryDenomsFromCreatorRequest.typeUrl || typeof o.creator === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryDenomsFromCreatorRequest.typeUrl || typeof o.creator === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsFromCreatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsFromCreatorRequest();
        message.creator = object.creator ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return QueryDenomsFromCreatorRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsFromCreatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.denom.QueryDenomsFromCreatorRequest",
            value: QueryDenomsFromCreatorRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryDenomsFromCreatorRequest.typeUrl, QueryDenomsFromCreatorRequest);
function createBaseQueryDenomsFromCreatorResponse() {
    return {
        denoms: []
    };
}
export const QueryDenomsFromCreatorResponse = {
    typeUrl: "/kujira.denom.QueryDenomsFromCreatorResponse",
    is(o) {
        return o && (o.$typeUrl === QueryDenomsFromCreatorResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryDenomsFromCreatorResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsFromCreatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsFromCreatorResponse();
        message.denoms = object.denoms?.map(e => e) || [];
        return message;
    },
    fromProtoMsg(message) {
        return QueryDenomsFromCreatorResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsFromCreatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.denom.QueryDenomsFromCreatorResponse",
            value: QueryDenomsFromCreatorResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryDenomsFromCreatorResponse.typeUrl, QueryDenomsFromCreatorResponse);
//# sourceMappingURL=query.js.map