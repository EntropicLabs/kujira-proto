import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Hook } from "./hook";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/kujira.scheduler.QueryParamsRequest",
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
            typeUrl: "/kujira.scheduler.QueryParamsRequest",
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
    typeUrl: "/kujira.scheduler.QueryParamsResponse",
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
            typeUrl: "/kujira.scheduler.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryGetHookRequest() {
    return {
        id: BigInt(0)
    };
}
export const QueryGetHookRequest = {
    typeUrl: "/kujira.scheduler.QueryGetHookRequest",
    is(o) {
        return o && (o.$typeUrl === QueryGetHookRequest.typeUrl || typeof o.id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGetHookRequest.typeUrl || typeof o.id === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetHookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetHookRequest();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return QueryGetHookRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetHookRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.scheduler.QueryGetHookRequest",
            value: QueryGetHookRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGetHookRequest.typeUrl, QueryGetHookRequest);
function createBaseQueryGetHookResponse() {
    return {
        Hook: Hook.fromPartial({})
    };
}
export const QueryGetHookResponse = {
    typeUrl: "/kujira.scheduler.QueryGetHookResponse",
    is(o) {
        return o && (o.$typeUrl === QueryGetHookResponse.typeUrl || Hook.is(o.Hook));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGetHookResponse.typeUrl || Hook.isSDK(o.Hook));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.Hook !== undefined) {
            Hook.encode(message.Hook, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetHookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Hook = Hook.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetHookResponse();
        message.Hook = object.Hook !== undefined && object.Hook !== null ? Hook.fromPartial(object.Hook) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryGetHookResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetHookResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.scheduler.QueryGetHookResponse",
            value: QueryGetHookResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGetHookResponse.typeUrl, QueryGetHookResponse);
function createBaseQueryAllHookRequest() {
    return {
        pagination: undefined
    };
}
export const QueryAllHookRequest = {
    typeUrl: "/kujira.scheduler.QueryAllHookRequest",
    is(o) {
        return o && o.$typeUrl === QueryAllHookRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryAllHookRequest.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllHookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryAllHookRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryAllHookRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllHookRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.scheduler.QueryAllHookRequest",
            value: QueryAllHookRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAllHookRequest.typeUrl, QueryAllHookRequest);
function createBaseQueryAllHookResponse() {
    return {
        Hook: [],
        pagination: undefined
    };
}
export const QueryAllHookResponse = {
    typeUrl: "/kujira.scheduler.QueryAllHookResponse",
    is(o) {
        return o && (o.$typeUrl === QueryAllHookResponse.typeUrl || Array.isArray(o.Hook) && (!o.Hook.length || Hook.is(o.Hook[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryAllHookResponse.typeUrl || Array.isArray(o.Hook) && (!o.Hook.length || Hook.isSDK(o.Hook[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.Hook) {
            Hook.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllHookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Hook.push(Hook.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAllHookResponse();
        message.Hook = object.Hook?.map(e => Hook.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryAllHookResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllHookResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.scheduler.QueryAllHookResponse",
            value: QueryAllHookResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAllHookResponse.typeUrl, QueryAllHookResponse);
//# sourceMappingURL=query.js.map