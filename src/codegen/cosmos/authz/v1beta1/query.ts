import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType, GrantAuthorization, GrantAuthorizationSDKType } from "./authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequest {
  granter: string;
  grantee: string;
  /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
  msgTypeUrl: string;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGrantsRequestProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest";
  value: Uint8Array;
}
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequestSDKType {
  granter: string;
  grantee: string;
  msg_type_url: string;
  pagination?: PageRequestSDKType;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponse {
  /** authorizations is a list of grants granted for grantee by granter. */
  grants: Grant[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
export interface QueryGrantsResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse";
  value: Uint8Array;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponseSDKType {
  grants: GrantSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequest {
  granter: string;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGranterGrantsRequestProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest";
  value: Uint8Array;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequestSDKType {
  granter: string;
  pagination?: PageRequestSDKType;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponse {
  /** grants is a list of grants granted by the granter. */
  grants: GrantAuthorization[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
export interface QueryGranterGrantsResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse";
  value: Uint8Array;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponseSDKType {
  grants: GrantAuthorizationSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequest {
  grantee: string;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGranteeGrantsRequestProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest";
  value: Uint8Array;
}
/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequestSDKType {
  grantee: string;
  pagination?: PageRequestSDKType;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponse {
  /** grants is a list of grants granted to the grantee. */
  grants: GrantAuthorization[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
export interface QueryGranteeGrantsResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse";
  value: Uint8Array;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponseSDKType {
  grants: GrantAuthorizationSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryGrantsRequest(): QueryGrantsRequest {
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
  is(o: any): o is QueryGrantsRequest {
    return o && (o.$typeUrl === QueryGrantsRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msgTypeUrl === "string");
  },
  isSDK(o: any): o is QueryGrantsRequestSDKType {
    return o && (o.$typeUrl === QueryGrantsRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msg_type_url === "string");
  },
  encode(message: QueryGrantsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantsRequest {
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
  fromPartial(object: Partial<QueryGrantsRequest>): QueryGrantsRequest {
    const message = createBaseQueryGrantsRequest();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryGrantsRequestProtoMsg): QueryGrantsRequest {
    return QueryGrantsRequest.decode(message.value);
  },
  toProto(message: QueryGrantsRequest): Uint8Array {
    return QueryGrantsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantsRequest): QueryGrantsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
      value: QueryGrantsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGrantsRequest.typeUrl, QueryGrantsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGrantsRequest.aminoType, QueryGrantsRequest.typeUrl);
function createBaseQueryGrantsResponse(): QueryGrantsResponse {
  return {
    grants: [],
    pagination: undefined
  };
}
export const QueryGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
  aminoType: "cosmos-sdk/QueryGrantsResponse",
  is(o: any): o is QueryGrantsResponse {
    return o && (o.$typeUrl === QueryGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || Grant.is(o.grants[0])));
  },
  isSDK(o: any): o is QueryGrantsResponseSDKType {
    return o && (o.$typeUrl === QueryGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || Grant.isSDK(o.grants[0])));
  },
  encode(message: QueryGrantsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantsResponse {
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
  fromPartial(object: Partial<QueryGrantsResponse>): QueryGrantsResponse {
    const message = createBaseQueryGrantsResponse();
    message.grants = object.grants?.map(e => Grant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryGrantsResponseProtoMsg): QueryGrantsResponse {
    return QueryGrantsResponse.decode(message.value);
  },
  toProto(message: QueryGrantsResponse): Uint8Array {
    return QueryGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantsResponse): QueryGrantsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
      value: QueryGrantsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGrantsResponse.typeUrl, QueryGrantsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGrantsResponse.aminoType, QueryGrantsResponse.typeUrl);
function createBaseQueryGranterGrantsRequest(): QueryGranterGrantsRequest {
  return {
    granter: "",
    pagination: undefined
  };
}
export const QueryGranterGrantsRequest = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
  aminoType: "cosmos-sdk/QueryGranterGrantsRequest",
  is(o: any): o is QueryGranterGrantsRequest {
    return o && (o.$typeUrl === QueryGranterGrantsRequest.typeUrl || typeof o.granter === "string");
  },
  isSDK(o: any): o is QueryGranterGrantsRequestSDKType {
    return o && (o.$typeUrl === QueryGranterGrantsRequest.typeUrl || typeof o.granter === "string");
  },
  encode(message: QueryGranterGrantsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGranterGrantsRequest {
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
  fromPartial(object: Partial<QueryGranterGrantsRequest>): QueryGranterGrantsRequest {
    const message = createBaseQueryGranterGrantsRequest();
    message.granter = object.granter ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryGranterGrantsRequestProtoMsg): QueryGranterGrantsRequest {
    return QueryGranterGrantsRequest.decode(message.value);
  },
  toProto(message: QueryGranterGrantsRequest): Uint8Array {
    return QueryGranterGrantsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGranterGrantsRequest): QueryGranterGrantsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
      value: QueryGranterGrantsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGranterGrantsRequest.typeUrl, QueryGranterGrantsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGranterGrantsRequest.aminoType, QueryGranterGrantsRequest.typeUrl);
function createBaseQueryGranterGrantsResponse(): QueryGranterGrantsResponse {
  return {
    grants: [],
    pagination: undefined
  };
}
export const QueryGranterGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
  aminoType: "cosmos-sdk/QueryGranterGrantsResponse",
  is(o: any): o is QueryGranterGrantsResponse {
    return o && (o.$typeUrl === QueryGranterGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.is(o.grants[0])));
  },
  isSDK(o: any): o is QueryGranterGrantsResponseSDKType {
    return o && (o.$typeUrl === QueryGranterGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.isSDK(o.grants[0])));
  },
  encode(message: QueryGranterGrantsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      GrantAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGranterGrantsResponse {
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
  fromPartial(object: Partial<QueryGranterGrantsResponse>): QueryGranterGrantsResponse {
    const message = createBaseQueryGranterGrantsResponse();
    message.grants = object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryGranterGrantsResponseProtoMsg): QueryGranterGrantsResponse {
    return QueryGranterGrantsResponse.decode(message.value);
  },
  toProto(message: QueryGranterGrantsResponse): Uint8Array {
    return QueryGranterGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGranterGrantsResponse): QueryGranterGrantsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
      value: QueryGranterGrantsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGranterGrantsResponse.typeUrl, QueryGranterGrantsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGranterGrantsResponse.aminoType, QueryGranterGrantsResponse.typeUrl);
function createBaseQueryGranteeGrantsRequest(): QueryGranteeGrantsRequest {
  return {
    grantee: "",
    pagination: undefined
  };
}
export const QueryGranteeGrantsRequest = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
  aminoType: "cosmos-sdk/QueryGranteeGrantsRequest",
  is(o: any): o is QueryGranteeGrantsRequest {
    return o && (o.$typeUrl === QueryGranteeGrantsRequest.typeUrl || typeof o.grantee === "string");
  },
  isSDK(o: any): o is QueryGranteeGrantsRequestSDKType {
    return o && (o.$typeUrl === QueryGranteeGrantsRequest.typeUrl || typeof o.grantee === "string");
  },
  encode(message: QueryGranteeGrantsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGranteeGrantsRequest {
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
  fromPartial(object: Partial<QueryGranteeGrantsRequest>): QueryGranteeGrantsRequest {
    const message = createBaseQueryGranteeGrantsRequest();
    message.grantee = object.grantee ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryGranteeGrantsRequestProtoMsg): QueryGranteeGrantsRequest {
    return QueryGranteeGrantsRequest.decode(message.value);
  },
  toProto(message: QueryGranteeGrantsRequest): Uint8Array {
    return QueryGranteeGrantsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGranteeGrantsRequest): QueryGranteeGrantsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
      value: QueryGranteeGrantsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGranteeGrantsRequest.typeUrl, QueryGranteeGrantsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGranteeGrantsRequest.aminoType, QueryGranteeGrantsRequest.typeUrl);
function createBaseQueryGranteeGrantsResponse(): QueryGranteeGrantsResponse {
  return {
    grants: [],
    pagination: undefined
  };
}
export const QueryGranteeGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
  aminoType: "cosmos-sdk/QueryGranteeGrantsResponse",
  is(o: any): o is QueryGranteeGrantsResponse {
    return o && (o.$typeUrl === QueryGranteeGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.is(o.grants[0])));
  },
  isSDK(o: any): o is QueryGranteeGrantsResponseSDKType {
    return o && (o.$typeUrl === QueryGranteeGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.isSDK(o.grants[0])));
  },
  encode(message: QueryGranteeGrantsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      GrantAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGranteeGrantsResponse {
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
  fromPartial(object: Partial<QueryGranteeGrantsResponse>): QueryGranteeGrantsResponse {
    const message = createBaseQueryGranteeGrantsResponse();
    message.grants = object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryGranteeGrantsResponseProtoMsg): QueryGranteeGrantsResponse {
    return QueryGranteeGrantsResponse.decode(message.value);
  },
  toProto(message: QueryGranteeGrantsResponse): Uint8Array {
    return QueryGranteeGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGranteeGrantsResponse): QueryGranteeGrantsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
      value: QueryGranteeGrantsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGranteeGrantsResponse.typeUrl, QueryGranteeGrantsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGranteeGrantsResponse.aminoType, QueryGranteeGrantsResponse.typeUrl);