import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Hook, HookSDKType } from "./hook";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/kujira.scheduler.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/kujira.scheduler.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetHookRequest {
  id: bigint;
}
export interface QueryGetHookRequestProtoMsg {
  typeUrl: "/kujira.scheduler.QueryGetHookRequest";
  value: Uint8Array;
}
export interface QueryGetHookRequestSDKType {
  id: bigint;
}
export interface QueryGetHookResponse {
  Hook: Hook;
}
export interface QueryGetHookResponseProtoMsg {
  typeUrl: "/kujira.scheduler.QueryGetHookResponse";
  value: Uint8Array;
}
export interface QueryGetHookResponseSDKType {
  Hook: HookSDKType;
}
export interface QueryAllHookRequest {
  pagination?: PageRequest;
}
export interface QueryAllHookRequestProtoMsg {
  typeUrl: "/kujira.scheduler.QueryAllHookRequest";
  value: Uint8Array;
}
export interface QueryAllHookRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllHookResponse {
  Hook: Hook[];
  pagination?: PageResponse;
}
export interface QueryAllHookResponseProtoMsg {
  typeUrl: "/kujira.scheduler.QueryAllHookResponse";
  value: Uint8Array;
}
export interface QueryAllHookResponseSDKType {
  Hook: HookSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/kujira.scheduler.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/kujira.scheduler.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/kujira.scheduler.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
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
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/kujira.scheduler.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryGetHookRequest(): QueryGetHookRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetHookRequest = {
  typeUrl: "/kujira.scheduler.QueryGetHookRequest",
  is(o: any): o is QueryGetHookRequest {
    return o && (o.$typeUrl === QueryGetHookRequest.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is QueryGetHookRequestSDKType {
    return o && (o.$typeUrl === QueryGetHookRequest.typeUrl || typeof o.id === "bigint");
  },
  encode(message: QueryGetHookRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHookRequest {
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
  fromPartial(object: Partial<QueryGetHookRequest>): QueryGetHookRequest {
    const message = createBaseQueryGetHookRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: QueryGetHookRequestProtoMsg): QueryGetHookRequest {
    return QueryGetHookRequest.decode(message.value);
  },
  toProto(message: QueryGetHookRequest): Uint8Array {
    return QueryGetHookRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetHookRequest): QueryGetHookRequestProtoMsg {
    return {
      typeUrl: "/kujira.scheduler.QueryGetHookRequest",
      value: QueryGetHookRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetHookRequest.typeUrl, QueryGetHookRequest);
function createBaseQueryGetHookResponse(): QueryGetHookResponse {
  return {
    Hook: Hook.fromPartial({})
  };
}
export const QueryGetHookResponse = {
  typeUrl: "/kujira.scheduler.QueryGetHookResponse",
  is(o: any): o is QueryGetHookResponse {
    return o && (o.$typeUrl === QueryGetHookResponse.typeUrl || Hook.is(o.Hook));
  },
  isSDK(o: any): o is QueryGetHookResponseSDKType {
    return o && (o.$typeUrl === QueryGetHookResponse.typeUrl || Hook.isSDK(o.Hook));
  },
  encode(message: QueryGetHookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Hook !== undefined) {
      Hook.encode(message.Hook, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHookResponse {
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
  fromPartial(object: Partial<QueryGetHookResponse>): QueryGetHookResponse {
    const message = createBaseQueryGetHookResponse();
    message.Hook = object.Hook !== undefined && object.Hook !== null ? Hook.fromPartial(object.Hook) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryGetHookResponseProtoMsg): QueryGetHookResponse {
    return QueryGetHookResponse.decode(message.value);
  },
  toProto(message: QueryGetHookResponse): Uint8Array {
    return QueryGetHookResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetHookResponse): QueryGetHookResponseProtoMsg {
    return {
      typeUrl: "/kujira.scheduler.QueryGetHookResponse",
      value: QueryGetHookResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetHookResponse.typeUrl, QueryGetHookResponse);
function createBaseQueryAllHookRequest(): QueryAllHookRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllHookRequest = {
  typeUrl: "/kujira.scheduler.QueryAllHookRequest",
  is(o: any): o is QueryAllHookRequest {
    return o && o.$typeUrl === QueryAllHookRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllHookRequestSDKType {
    return o && o.$typeUrl === QueryAllHookRequest.typeUrl;
  },
  encode(message: QueryAllHookRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHookRequest {
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
  fromPartial(object: Partial<QueryAllHookRequest>): QueryAllHookRequest {
    const message = createBaseQueryAllHookRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryAllHookRequestProtoMsg): QueryAllHookRequest {
    return QueryAllHookRequest.decode(message.value);
  },
  toProto(message: QueryAllHookRequest): Uint8Array {
    return QueryAllHookRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllHookRequest): QueryAllHookRequestProtoMsg {
    return {
      typeUrl: "/kujira.scheduler.QueryAllHookRequest",
      value: QueryAllHookRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllHookRequest.typeUrl, QueryAllHookRequest);
function createBaseQueryAllHookResponse(): QueryAllHookResponse {
  return {
    Hook: [],
    pagination: undefined
  };
}
export const QueryAllHookResponse = {
  typeUrl: "/kujira.scheduler.QueryAllHookResponse",
  is(o: any): o is QueryAllHookResponse {
    return o && (o.$typeUrl === QueryAllHookResponse.typeUrl || Array.isArray(o.Hook) && (!o.Hook.length || Hook.is(o.Hook[0])));
  },
  isSDK(o: any): o is QueryAllHookResponseSDKType {
    return o && (o.$typeUrl === QueryAllHookResponse.typeUrl || Array.isArray(o.Hook) && (!o.Hook.length || Hook.isSDK(o.Hook[0])));
  },
  encode(message: QueryAllHookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Hook) {
      Hook.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHookResponse {
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
  fromPartial(object: Partial<QueryAllHookResponse>): QueryAllHookResponse {
    const message = createBaseQueryAllHookResponse();
    message.Hook = object.Hook?.map(e => Hook.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryAllHookResponseProtoMsg): QueryAllHookResponse {
    return QueryAllHookResponse.decode(message.value);
  },
  toProto(message: QueryAllHookResponse): Uint8Array {
    return QueryAllHookResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllHookResponse): QueryAllHookResponseProtoMsg {
    return {
      typeUrl: "/kujira.scheduler.QueryAllHookResponse",
      value: QueryAllHookResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllHookResponse.typeUrl, QueryAllHookResponse);