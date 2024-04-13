import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType, BaseAccount, BaseAccountSDKType, ModuleAccount, ModuleAccountSDKType } from "./auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAccountsRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest";
  value: Uint8Array;
}
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
  /** accounts are the existing accounts */
  accounts: (BaseAccount | Any)[] | Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAccountsResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse";
  value: Uint8Array;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponseSDKType {
  accounts: (BaseAccountSDKType | AnySDKType)[];
  pagination?: PageResponseSDKType;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  /** address defines the address to query for. */
  address: string;
}
export interface QueryAccountRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest";
  value: Uint8Array;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestSDKType {
  address: string;
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequest {}
export interface QueryModuleAccountsRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest";
  value: Uint8Array;
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
  /** account defines the account of the corresponding address. */
  account?: BaseAccount | Any | undefined;
}
export interface QueryAccountResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse";
  value: Uint8Array;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseSDKType {
  account?: BaseAccountSDKType | AnySDKType | undefined;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponse {
  accounts: (ModuleAccount | Any)[] | Any[];
}
export interface QueryModuleAccountsResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse";
  value: Uint8Array;
}
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponseSDKType {
  accounts: (ModuleAccountSDKType | AnySDKType)[];
}
/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */
export interface Bech32PrefixRequest {}
export interface Bech32PrefixRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest";
  value: Uint8Array;
}
/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */
export interface Bech32PrefixRequestSDKType {}
/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */
export interface Bech32PrefixResponse {
  bech32Prefix: string;
}
export interface Bech32PrefixResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse";
  value: Uint8Array;
}
/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */
export interface Bech32PrefixResponseSDKType {
  bech32_prefix: string;
}
/** AddressBytesToStringRequest is the request type for AddressString rpc method */
export interface AddressBytesToStringRequest {
  addressBytes: Uint8Array;
}
export interface AddressBytesToStringRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest";
  value: Uint8Array;
}
/** AddressBytesToStringRequest is the request type for AddressString rpc method */
export interface AddressBytesToStringRequestSDKType {
  address_bytes: Uint8Array;
}
/** AddressBytesToStringResponse is the response type for AddressString rpc method */
export interface AddressBytesToStringResponse {
  addressString: string;
}
export interface AddressBytesToStringResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse";
  value: Uint8Array;
}
/** AddressBytesToStringResponse is the response type for AddressString rpc method */
export interface AddressBytesToStringResponseSDKType {
  address_string: string;
}
/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */
export interface AddressStringToBytesRequest {
  addressString: string;
}
export interface AddressStringToBytesRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest";
  value: Uint8Array;
}
/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */
export interface AddressStringToBytesRequestSDKType {
  address_string: string;
}
/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */
export interface AddressStringToBytesResponse {
  addressBytes: Uint8Array;
}
export interface AddressStringToBytesResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse";
  value: Uint8Array;
}
/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */
export interface AddressStringToBytesResponseSDKType {
  address_bytes: Uint8Array;
}
function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAccountsRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
  aminoType: "cosmos-sdk/QueryAccountsRequest",
  is(o: any): o is QueryAccountsRequest {
    return o && o.$typeUrl === QueryAccountsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAccountsRequestSDKType {
    return o && o.$typeUrl === QueryAccountsRequest.typeUrl;
  },
  encode(message: QueryAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();
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
  fromPartial(object: Partial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryAccountsRequestProtoMsg): QueryAccountsRequest {
    return QueryAccountsRequest.decode(message.value);
  },
  toProto(message: QueryAccountsRequest): Uint8Array {
    return QueryAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsRequest): QueryAccountsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
      value: QueryAccountsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAccountsRequest.typeUrl, QueryAccountsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAccountsRequest.aminoType, QueryAccountsRequest.typeUrl);
function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    accounts: [],
    pagination: undefined
  };
}
export const QueryAccountsResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
  aminoType: "cosmos-sdk/QueryAccountsResponse",
  is(o: any): o is QueryAccountsResponse {
    return o && (o.$typeUrl === QueryAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || BaseAccount.is(o.accounts[0]) || Any.is(o.accounts[0])));
  },
  isSDK(o: any): o is QueryAccountsResponseSDKType {
    return o && (o.$typeUrl === QueryAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || BaseAccount.isSDK(o.accounts[0]) || Any.isSDK(o.accounts[0])));
  },
  encode(message: QueryAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(GlobalDecoderRegistry.unwrapAny(reader));
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
  fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => (GlobalDecoderRegistry.fromPartial(e) as any)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryAccountsResponseProtoMsg): QueryAccountsResponse {
    return QueryAccountsResponse.decode(message.value);
  },
  toProto(message: QueryAccountsResponse): Uint8Array {
    return QueryAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsResponse): QueryAccountsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
      value: QueryAccountsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAccountsResponse.typeUrl, QueryAccountsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAccountsResponse.aminoType, QueryAccountsResponse.typeUrl);
function createBaseQueryAccountRequest(): QueryAccountRequest {
  return {
    address: ""
  };
}
export const QueryAccountRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
  aminoType: "cosmos-sdk/QueryAccountRequest",
  is(o: any): o is QueryAccountRequest {
    return o && (o.$typeUrl === QueryAccountRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryAccountRequestSDKType {
    return o && (o.$typeUrl === QueryAccountRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAccountRequest>): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromProtoMsg(message: QueryAccountRequestProtoMsg): QueryAccountRequest {
    return QueryAccountRequest.decode(message.value);
  },
  toProto(message: QueryAccountRequest): Uint8Array {
    return QueryAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountRequest): QueryAccountRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
      value: QueryAccountRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAccountRequest.typeUrl, QueryAccountRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAccountRequest.aminoType, QueryAccountRequest.typeUrl);
function createBaseQueryModuleAccountsRequest(): QueryModuleAccountsRequest {
  return {};
}
export const QueryModuleAccountsRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
  aminoType: "cosmos-sdk/QueryModuleAccountsRequest",
  is(o: any): o is QueryModuleAccountsRequest {
    return o && o.$typeUrl === QueryModuleAccountsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryModuleAccountsRequestSDKType {
    return o && o.$typeUrl === QueryModuleAccountsRequest.typeUrl;
  },
  encode(_: QueryModuleAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsRequest();
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
  fromPartial(_: Partial<QueryModuleAccountsRequest>): QueryModuleAccountsRequest {
    const message = createBaseQueryModuleAccountsRequest();
    return message;
  },
  fromProtoMsg(message: QueryModuleAccountsRequestProtoMsg): QueryModuleAccountsRequest {
    return QueryModuleAccountsRequest.decode(message.value);
  },
  toProto(message: QueryModuleAccountsRequest): Uint8Array {
    return QueryModuleAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountsRequest): QueryModuleAccountsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
      value: QueryModuleAccountsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryModuleAccountsRequest.typeUrl, QueryModuleAccountsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryModuleAccountsRequest.aminoType, QueryModuleAccountsRequest.typeUrl);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
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
      typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseQueryAccountResponse(): QueryAccountResponse {
  return {
    account: undefined
  };
}
export const QueryAccountResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
  aminoType: "cosmos-sdk/QueryAccountResponse",
  is(o: any): o is QueryAccountResponse {
    return o && o.$typeUrl === QueryAccountResponse.typeUrl;
  },
  isSDK(o: any): o is QueryAccountResponseSDKType {
    return o && o.$typeUrl === QueryAccountResponse.typeUrl;
  },
  encode(message: QueryAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.account), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAccountResponse>): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? GlobalDecoderRegistry.fromPartial(object.account) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryAccountResponseProtoMsg): QueryAccountResponse {
    return QueryAccountResponse.decode(message.value);
  },
  toProto(message: QueryAccountResponse): Uint8Array {
    return QueryAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountResponse): QueryAccountResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
      value: QueryAccountResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAccountResponse.typeUrl, QueryAccountResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAccountResponse.aminoType, QueryAccountResponse.typeUrl);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
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
      typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsRequest.aminoType, QueryParamsRequest.typeUrl);
function createBaseQueryModuleAccountsResponse(): QueryModuleAccountsResponse {
  return {
    accounts: []
  };
}
export const QueryModuleAccountsResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
  aminoType: "cosmos-sdk/QueryModuleAccountsResponse",
  is(o: any): o is QueryModuleAccountsResponse {
    return o && (o.$typeUrl === QueryModuleAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || ModuleAccount.is(o.accounts[0]) || Any.is(o.accounts[0])));
  },
  isSDK(o: any): o is QueryModuleAccountsResponseSDKType {
    return o && (o.$typeUrl === QueryModuleAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || ModuleAccount.isSDK(o.accounts[0]) || Any.isSDK(o.accounts[0])));
  },
  encode(message: QueryModuleAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryModuleAccountsResponse>): QueryModuleAccountsResponse {
    const message = createBaseQueryModuleAccountsResponse();
    message.accounts = object.accounts?.map(e => (GlobalDecoderRegistry.fromPartial(e) as any)) || [];
    return message;
  },
  fromProtoMsg(message: QueryModuleAccountsResponseProtoMsg): QueryModuleAccountsResponse {
    return QueryModuleAccountsResponse.decode(message.value);
  },
  toProto(message: QueryModuleAccountsResponse): Uint8Array {
    return QueryModuleAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
      value: QueryModuleAccountsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryModuleAccountsResponse.typeUrl, QueryModuleAccountsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryModuleAccountsResponse.aminoType, QueryModuleAccountsResponse.typeUrl);
function createBaseBech32PrefixRequest(): Bech32PrefixRequest {
  return {};
}
export const Bech32PrefixRequest = {
  typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
  aminoType: "cosmos-sdk/Bech32PrefixRequest",
  is(o: any): o is Bech32PrefixRequest {
    return o && o.$typeUrl === Bech32PrefixRequest.typeUrl;
  },
  isSDK(o: any): o is Bech32PrefixRequestSDKType {
    return o && o.$typeUrl === Bech32PrefixRequest.typeUrl;
  },
  encode(_: Bech32PrefixRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Bech32PrefixRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixRequest();
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
  fromPartial(_: Partial<Bech32PrefixRequest>): Bech32PrefixRequest {
    const message = createBaseBech32PrefixRequest();
    return message;
  },
  fromProtoMsg(message: Bech32PrefixRequestProtoMsg): Bech32PrefixRequest {
    return Bech32PrefixRequest.decode(message.value);
  },
  toProto(message: Bech32PrefixRequest): Uint8Array {
    return Bech32PrefixRequest.encode(message).finish();
  },
  toProtoMsg(message: Bech32PrefixRequest): Bech32PrefixRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
      value: Bech32PrefixRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Bech32PrefixRequest.typeUrl, Bech32PrefixRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(Bech32PrefixRequest.aminoType, Bech32PrefixRequest.typeUrl);
function createBaseBech32PrefixResponse(): Bech32PrefixResponse {
  return {
    bech32Prefix: ""
  };
}
export const Bech32PrefixResponse = {
  typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
  aminoType: "cosmos-sdk/Bech32PrefixResponse",
  is(o: any): o is Bech32PrefixResponse {
    return o && (o.$typeUrl === Bech32PrefixResponse.typeUrl || typeof o.bech32Prefix === "string");
  },
  isSDK(o: any): o is Bech32PrefixResponseSDKType {
    return o && (o.$typeUrl === Bech32PrefixResponse.typeUrl || typeof o.bech32_prefix === "string");
  },
  encode(message: Bech32PrefixResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Bech32PrefixResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32Prefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Bech32PrefixResponse>): Bech32PrefixResponse {
    const message = createBaseBech32PrefixResponse();
    message.bech32Prefix = object.bech32Prefix ?? "";
    return message;
  },
  fromProtoMsg(message: Bech32PrefixResponseProtoMsg): Bech32PrefixResponse {
    return Bech32PrefixResponse.decode(message.value);
  },
  toProto(message: Bech32PrefixResponse): Uint8Array {
    return Bech32PrefixResponse.encode(message).finish();
  },
  toProtoMsg(message: Bech32PrefixResponse): Bech32PrefixResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
      value: Bech32PrefixResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Bech32PrefixResponse.typeUrl, Bech32PrefixResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(Bech32PrefixResponse.aminoType, Bech32PrefixResponse.typeUrl);
function createBaseAddressBytesToStringRequest(): AddressBytesToStringRequest {
  return {
    addressBytes: new Uint8Array()
  };
}
export const AddressBytesToStringRequest = {
  typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
  aminoType: "cosmos-sdk/AddressBytesToStringRequest",
  is(o: any): o is AddressBytesToStringRequest {
    return o && (o.$typeUrl === AddressBytesToStringRequest.typeUrl || o.addressBytes instanceof Uint8Array || typeof o.addressBytes === "string");
  },
  isSDK(o: any): o is AddressBytesToStringRequestSDKType {
    return o && (o.$typeUrl === AddressBytesToStringRequest.typeUrl || o.address_bytes instanceof Uint8Array || typeof o.address_bytes === "string");
  },
  encode(message: AddressBytesToStringRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddressBytesToStringRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddressBytesToStringRequest>): AddressBytesToStringRequest {
    const message = createBaseAddressBytesToStringRequest();
    message.addressBytes = object.addressBytes ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: AddressBytesToStringRequestProtoMsg): AddressBytesToStringRequest {
    return AddressBytesToStringRequest.decode(message.value);
  },
  toProto(message: AddressBytesToStringRequest): Uint8Array {
    return AddressBytesToStringRequest.encode(message).finish();
  },
  toProtoMsg(message: AddressBytesToStringRequest): AddressBytesToStringRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
      value: AddressBytesToStringRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AddressBytesToStringRequest.typeUrl, AddressBytesToStringRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AddressBytesToStringRequest.aminoType, AddressBytesToStringRequest.typeUrl);
function createBaseAddressBytesToStringResponse(): AddressBytesToStringResponse {
  return {
    addressString: ""
  };
}
export const AddressBytesToStringResponse = {
  typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
  aminoType: "cosmos-sdk/AddressBytesToStringResponse",
  is(o: any): o is AddressBytesToStringResponse {
    return o && (o.$typeUrl === AddressBytesToStringResponse.typeUrl || typeof o.addressString === "string");
  },
  isSDK(o: any): o is AddressBytesToStringResponseSDKType {
    return o && (o.$typeUrl === AddressBytesToStringResponse.typeUrl || typeof o.address_string === "string");
  },
  encode(message: AddressBytesToStringResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddressBytesToStringResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddressBytesToStringResponse>): AddressBytesToStringResponse {
    const message = createBaseAddressBytesToStringResponse();
    message.addressString = object.addressString ?? "";
    return message;
  },
  fromProtoMsg(message: AddressBytesToStringResponseProtoMsg): AddressBytesToStringResponse {
    return AddressBytesToStringResponse.decode(message.value);
  },
  toProto(message: AddressBytesToStringResponse): Uint8Array {
    return AddressBytesToStringResponse.encode(message).finish();
  },
  toProtoMsg(message: AddressBytesToStringResponse): AddressBytesToStringResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
      value: AddressBytesToStringResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AddressBytesToStringResponse.typeUrl, AddressBytesToStringResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AddressBytesToStringResponse.aminoType, AddressBytesToStringResponse.typeUrl);
function createBaseAddressStringToBytesRequest(): AddressStringToBytesRequest {
  return {
    addressString: ""
  };
}
export const AddressStringToBytesRequest = {
  typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
  aminoType: "cosmos-sdk/AddressStringToBytesRequest",
  is(o: any): o is AddressStringToBytesRequest {
    return o && (o.$typeUrl === AddressStringToBytesRequest.typeUrl || typeof o.addressString === "string");
  },
  isSDK(o: any): o is AddressStringToBytesRequestSDKType {
    return o && (o.$typeUrl === AddressStringToBytesRequest.typeUrl || typeof o.address_string === "string");
  },
  encode(message: AddressStringToBytesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddressStringToBytesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddressStringToBytesRequest>): AddressStringToBytesRequest {
    const message = createBaseAddressStringToBytesRequest();
    message.addressString = object.addressString ?? "";
    return message;
  },
  fromProtoMsg(message: AddressStringToBytesRequestProtoMsg): AddressStringToBytesRequest {
    return AddressStringToBytesRequest.decode(message.value);
  },
  toProto(message: AddressStringToBytesRequest): Uint8Array {
    return AddressStringToBytesRequest.encode(message).finish();
  },
  toProtoMsg(message: AddressStringToBytesRequest): AddressStringToBytesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
      value: AddressStringToBytesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AddressStringToBytesRequest.typeUrl, AddressStringToBytesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AddressStringToBytesRequest.aminoType, AddressStringToBytesRequest.typeUrl);
function createBaseAddressStringToBytesResponse(): AddressStringToBytesResponse {
  return {
    addressBytes: new Uint8Array()
  };
}
export const AddressStringToBytesResponse = {
  typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
  aminoType: "cosmos-sdk/AddressStringToBytesResponse",
  is(o: any): o is AddressStringToBytesResponse {
    return o && (o.$typeUrl === AddressStringToBytesResponse.typeUrl || o.addressBytes instanceof Uint8Array || typeof o.addressBytes === "string");
  },
  isSDK(o: any): o is AddressStringToBytesResponseSDKType {
    return o && (o.$typeUrl === AddressStringToBytesResponse.typeUrl || o.address_bytes instanceof Uint8Array || typeof o.address_bytes === "string");
  },
  encode(message: AddressStringToBytesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddressStringToBytesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddressStringToBytesResponse>): AddressStringToBytesResponse {
    const message = createBaseAddressStringToBytesResponse();
    message.addressBytes = object.addressBytes ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: AddressStringToBytesResponseProtoMsg): AddressStringToBytesResponse {
    return AddressStringToBytesResponse.decode(message.value);
  },
  toProto(message: AddressStringToBytesResponse): Uint8Array {
    return AddressStringToBytesResponse.encode(message).finish();
  },
  toProtoMsg(message: AddressStringToBytesResponse): AddressStringToBytesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
      value: AddressStringToBytesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AddressStringToBytesResponse.typeUrl, AddressStringToBytesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AddressStringToBytesResponse.aminoType, AddressStringToBytesResponse.typeUrl);