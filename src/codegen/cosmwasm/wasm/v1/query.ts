import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractInfoSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntrySDKType, Model, ModelSDKType, AccessConfig, AccessConfigSDKType, Params, ParamsSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequest {
  /** address is the address of the contract to query */
  address: string;
}
export interface QueryContractInfoRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest";
  value: Uint8Array;
}
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequestSDKType {
  address: string;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponse {
  /** address is the address of the contract */
  address: string;
  contractInfo: ContractInfo;
}
export interface QueryContractInfoResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse";
  value: Uint8Array;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponseSDKType {
  address: string;
  contract_info: ContractInfoSDKType;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequest {
  /** address is the address of the contract to query */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryContractHistoryRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest";
  value: Uint8Array;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponse {
  entries: ContractCodeHistoryEntry[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryContractHistoryResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse";
  value: Uint8Array;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponseSDKType {
  entries: ContractCodeHistoryEntrySDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequest {
  /**
   * grpc-gateway_out does not support Go style CodID
   * pagination defines an optional pagination for the request.
   */
  codeId: bigint;
  pagination?: PageRequest;
}
export interface QueryContractsByCodeRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest";
  value: Uint8Array;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequestSDKType {
  code_id: bigint;
  pagination?: PageRequestSDKType;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponse {
  /** contracts are a set of contract addresses */
  contracts: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryContractsByCodeResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse";
  value: Uint8Array;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponseSDKType {
  contracts: string[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAllContractStateRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest";
  value: Uint8Array;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponse {
  models: Model[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAllContractStateResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse";
  value: Uint8Array;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponseSDKType {
  models: ModelSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequest {
  /** address is the address of the contract */
  address: string;
  queryData: Uint8Array;
}
export interface QueryRawContractStateRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest";
  value: Uint8Array;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequestSDKType {
  address: string;
  query_data: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponse {
  /** Data contains the raw store data */
  data: Uint8Array;
}
export interface QueryRawContractStateResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse";
  value: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponseSDKType {
  data: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** QueryData contains the query data passed to the contract */
  queryData: Uint8Array;
}
export interface QuerySmartContractStateRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest";
  value: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequestSDKType {
  address: string;
  query_data: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponse {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
}
export interface QuerySmartContractStateResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse";
  value: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponseSDKType {
  data: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequest {
  /** grpc-gateway_out does not support Go style CodID */
  codeId: bigint;
}
export interface QueryCodeRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest";
  value: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequestSDKType {
  code_id: bigint;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponse {
  codeId: bigint;
  creator: string;
  dataHash: Uint8Array;
  instantiatePermission: AccessConfig;
}
export interface CodeInfoResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse";
  value: Uint8Array;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponseSDKType {
  code_id: bigint;
  creator: string;
  data_hash: Uint8Array;
  instantiate_permission: AccessConfigSDKType;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponse {
  codeInfo?: CodeInfoResponse;
  data: Uint8Array;
}
export interface QueryCodeResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse";
  value: Uint8Array;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponseSDKType {
  code_info?: CodeInfoResponseSDKType;
  data: Uint8Array;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryCodesRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest";
  value: Uint8Array;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponse {
  codeInfos: CodeInfoResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryCodesResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse";
  value: Uint8Array;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponseSDKType {
  code_infos: CodeInfoResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryPinnedCodesRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest";
  value: Uint8Array;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponse {
  codeIds: bigint[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryPinnedCodesResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse";
  value: Uint8Array;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponseSDKType {
  code_ids: bigint[];
  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequest {
  /** CreatorAddress is the address of contract creator */
  creatorAddress: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryContractsByCreatorRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest";
  value: Uint8Array;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequestSDKType {
  creator_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponse {
  /** ContractAddresses result set */
  contractAddresses: string[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryContractsByCreatorResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse";
  value: Uint8Array;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponseSDKType {
  contract_addresses: string[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryContractInfoRequest(): QueryContractInfoRequest {
  return {
    address: ""
  };
}
export const QueryContractInfoRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
  aminoType: "wasm/QueryContractInfoRequest",
  is(o: any): o is QueryContractInfoRequest {
    return o && (o.$typeUrl === QueryContractInfoRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryContractInfoRequestSDKType {
    return o && (o.$typeUrl === QueryContractInfoRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryContractInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoRequest();
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
  fromPartial(object: Partial<QueryContractInfoRequest>): QueryContractInfoRequest {
    const message = createBaseQueryContractInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromProtoMsg(message: QueryContractInfoRequestProtoMsg): QueryContractInfoRequest {
    return QueryContractInfoRequest.decode(message.value);
  },
  toProto(message: QueryContractInfoRequest): Uint8Array {
    return QueryContractInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractInfoRequest): QueryContractInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
      value: QueryContractInfoRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryContractInfoRequest.typeUrl, QueryContractInfoRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryContractInfoRequest.aminoType, QueryContractInfoRequest.typeUrl);
function createBaseQueryContractInfoResponse(): QueryContractInfoResponse {
  return {
    address: "",
    contractInfo: ContractInfo.fromPartial({})
  };
}
export const QueryContractInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
  aminoType: "wasm/QueryContractInfoResponse",
  is(o: any): o is QueryContractInfoResponse {
    return o && (o.$typeUrl === QueryContractInfoResponse.typeUrl || typeof o.address === "string" && ContractInfo.is(o.contractInfo));
  },
  isSDK(o: any): o is QueryContractInfoResponseSDKType {
    return o && (o.$typeUrl === QueryContractInfoResponse.typeUrl || typeof o.address === "string" && ContractInfo.isSDK(o.contract_info));
  },
  encode(message: QueryContractInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryContractInfoResponse>): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    message.address = object.address ?? "";
    message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryContractInfoResponseProtoMsg): QueryContractInfoResponse {
    return QueryContractInfoResponse.decode(message.value);
  },
  toProto(message: QueryContractInfoResponse): Uint8Array {
    return QueryContractInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractInfoResponse): QueryContractInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
      value: QueryContractInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryContractInfoResponse.typeUrl, QueryContractInfoResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryContractInfoResponse.aminoType, QueryContractInfoResponse.typeUrl);
function createBaseQueryContractHistoryRequest(): QueryContractHistoryRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryContractHistoryRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
  aminoType: "wasm/QueryContractHistoryRequest",
  is(o: any): o is QueryContractHistoryRequest {
    return o && (o.$typeUrl === QueryContractHistoryRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryContractHistoryRequestSDKType {
    return o && (o.$typeUrl === QueryContractHistoryRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryContractHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromPartial(object: Partial<QueryContractHistoryRequest>): QueryContractHistoryRequest {
    const message = createBaseQueryContractHistoryRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryContractHistoryRequestProtoMsg): QueryContractHistoryRequest {
    return QueryContractHistoryRequest.decode(message.value);
  },
  toProto(message: QueryContractHistoryRequest): Uint8Array {
    return QueryContractHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractHistoryRequest): QueryContractHistoryRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
      value: QueryContractHistoryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryContractHistoryRequest.typeUrl, QueryContractHistoryRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryContractHistoryRequest.aminoType, QueryContractHistoryRequest.typeUrl);
function createBaseQueryContractHistoryResponse(): QueryContractHistoryResponse {
  return {
    entries: [],
    pagination: undefined
  };
}
export const QueryContractHistoryResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
  aminoType: "wasm/QueryContractHistoryResponse",
  is(o: any): o is QueryContractHistoryResponse {
    return o && (o.$typeUrl === QueryContractHistoryResponse.typeUrl || Array.isArray(o.entries) && (!o.entries.length || ContractCodeHistoryEntry.is(o.entries[0])));
  },
  isSDK(o: any): o is QueryContractHistoryResponseSDKType {
    return o && (o.$typeUrl === QueryContractHistoryResponse.typeUrl || Array.isArray(o.entries) && (!o.entries.length || ContractCodeHistoryEntry.isSDK(o.entries[0])));
  },
  encode(message: QueryContractHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      ContractCodeHistoryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryContractHistoryResponse>): QueryContractHistoryResponse {
    const message = createBaseQueryContractHistoryResponse();
    message.entries = object.entries?.map(e => ContractCodeHistoryEntry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryContractHistoryResponseProtoMsg): QueryContractHistoryResponse {
    return QueryContractHistoryResponse.decode(message.value);
  },
  toProto(message: QueryContractHistoryResponse): Uint8Array {
    return QueryContractHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractHistoryResponse): QueryContractHistoryResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
      value: QueryContractHistoryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryContractHistoryResponse.typeUrl, QueryContractHistoryResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryContractHistoryResponse.aminoType, QueryContractHistoryResponse.typeUrl);
function createBaseQueryContractsByCodeRequest(): QueryContractsByCodeRequest {
  return {
    codeId: BigInt(0),
    pagination: undefined
  };
}
export const QueryContractsByCodeRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
  aminoType: "wasm/QueryContractsByCodeRequest",
  is(o: any): o is QueryContractsByCodeRequest {
    return o && (o.$typeUrl === QueryContractsByCodeRequest.typeUrl || typeof o.codeId === "bigint");
  },
  isSDK(o: any): o is QueryContractsByCodeRequestSDKType {
    return o && (o.$typeUrl === QueryContractsByCodeRequest.typeUrl || typeof o.code_id === "bigint");
  },
  encode(message: QueryContractsByCodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
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
  fromPartial(object: Partial<QueryContractsByCodeRequest>): QueryContractsByCodeRequest {
    const message = createBaseQueryContractsByCodeRequest();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryContractsByCodeRequestProtoMsg): QueryContractsByCodeRequest {
    return QueryContractsByCodeRequest.decode(message.value);
  },
  toProto(message: QueryContractsByCodeRequest): Uint8Array {
    return QueryContractsByCodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
      value: QueryContractsByCodeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryContractsByCodeRequest.typeUrl, QueryContractsByCodeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryContractsByCodeRequest.aminoType, QueryContractsByCodeRequest.typeUrl);
function createBaseQueryContractsByCodeResponse(): QueryContractsByCodeResponse {
  return {
    contracts: [],
    pagination: undefined
  };
}
export const QueryContractsByCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
  aminoType: "wasm/QueryContractsByCodeResponse",
  is(o: any): o is QueryContractsByCodeResponse {
    return o && (o.$typeUrl === QueryContractsByCodeResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || typeof o.contracts[0] === "string"));
  },
  isSDK(o: any): o is QueryContractsByCodeResponseSDKType {
    return o && (o.$typeUrl === QueryContractsByCodeResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || typeof o.contracts[0] === "string"));
  },
  encode(message: QueryContractsByCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contracts) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(reader.string());
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
  fromPartial(object: Partial<QueryContractsByCodeResponse>): QueryContractsByCodeResponse {
    const message = createBaseQueryContractsByCodeResponse();
    message.contracts = object.contracts?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryContractsByCodeResponseProtoMsg): QueryContractsByCodeResponse {
    return QueryContractsByCodeResponse.decode(message.value);
  },
  toProto(message: QueryContractsByCodeResponse): Uint8Array {
    return QueryContractsByCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
      value: QueryContractsByCodeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryContractsByCodeResponse.typeUrl, QueryContractsByCodeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryContractsByCodeResponse.aminoType, QueryContractsByCodeResponse.typeUrl);
function createBaseQueryAllContractStateRequest(): QueryAllContractStateRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryAllContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
  aminoType: "wasm/QueryAllContractStateRequest",
  is(o: any): o is QueryAllContractStateRequest {
    return o && (o.$typeUrl === QueryAllContractStateRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryAllContractStateRequestSDKType {
    return o && (o.$typeUrl === QueryAllContractStateRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryAllContractStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllContractStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromPartial(object: Partial<QueryAllContractStateRequest>): QueryAllContractStateRequest {
    const message = createBaseQueryAllContractStateRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryAllContractStateRequestProtoMsg): QueryAllContractStateRequest {
    return QueryAllContractStateRequest.decode(message.value);
  },
  toProto(message: QueryAllContractStateRequest): Uint8Array {
    return QueryAllContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllContractStateRequest): QueryAllContractStateRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
      value: QueryAllContractStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllContractStateRequest.typeUrl, QueryAllContractStateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllContractStateRequest.aminoType, QueryAllContractStateRequest.typeUrl);
function createBaseQueryAllContractStateResponse(): QueryAllContractStateResponse {
  return {
    models: [],
    pagination: undefined
  };
}
export const QueryAllContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
  aminoType: "wasm/QueryAllContractStateResponse",
  is(o: any): o is QueryAllContractStateResponse {
    return o && (o.$typeUrl === QueryAllContractStateResponse.typeUrl || Array.isArray(o.models) && (!o.models.length || Model.is(o.models[0])));
  },
  isSDK(o: any): o is QueryAllContractStateResponseSDKType {
    return o && (o.$typeUrl === QueryAllContractStateResponse.typeUrl || Array.isArray(o.models) && (!o.models.length || Model.isSDK(o.models[0])));
  },
  encode(message: QueryAllContractStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.models) {
      Model.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllContractStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.models.push(Model.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllContractStateResponse>): QueryAllContractStateResponse {
    const message = createBaseQueryAllContractStateResponse();
    message.models = object.models?.map(e => Model.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryAllContractStateResponseProtoMsg): QueryAllContractStateResponse {
    return QueryAllContractStateResponse.decode(message.value);
  },
  toProto(message: QueryAllContractStateResponse): Uint8Array {
    return QueryAllContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllContractStateResponse): QueryAllContractStateResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
      value: QueryAllContractStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllContractStateResponse.typeUrl, QueryAllContractStateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllContractStateResponse.aminoType, QueryAllContractStateResponse.typeUrl);
function createBaseQueryRawContractStateRequest(): QueryRawContractStateRequest {
  return {
    address: "",
    queryData: new Uint8Array()
  };
}
export const QueryRawContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
  aminoType: "wasm/QueryRawContractStateRequest",
  is(o: any): o is QueryRawContractStateRequest {
    return o && (o.$typeUrl === QueryRawContractStateRequest.typeUrl || typeof o.address === "string" && (o.queryData instanceof Uint8Array || typeof o.queryData === "string"));
  },
  isSDK(o: any): o is QueryRawContractStateRequestSDKType {
    return o && (o.$typeUrl === QueryRawContractStateRequest.typeUrl || typeof o.address === "string" && (o.query_data instanceof Uint8Array || typeof o.query_data === "string"));
  },
  encode(message: QueryRawContractStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRawContractStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.queryData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRawContractStateRequest>): QueryRawContractStateRequest {
    const message = createBaseQueryRawContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: QueryRawContractStateRequestProtoMsg): QueryRawContractStateRequest {
    return QueryRawContractStateRequest.decode(message.value);
  },
  toProto(message: QueryRawContractStateRequest): Uint8Array {
    return QueryRawContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRawContractStateRequest): QueryRawContractStateRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
      value: QueryRawContractStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryRawContractStateRequest.typeUrl, QueryRawContractStateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryRawContractStateRequest.aminoType, QueryRawContractStateRequest.typeUrl);
function createBaseQueryRawContractStateResponse(): QueryRawContractStateResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryRawContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
  aminoType: "wasm/QueryRawContractStateResponse",
  is(o: any): o is QueryRawContractStateResponse {
    return o && (o.$typeUrl === QueryRawContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isSDK(o: any): o is QueryRawContractStateResponseSDKType {
    return o && (o.$typeUrl === QueryRawContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: QueryRawContractStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRawContractStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRawContractStateResponse>): QueryRawContractStateResponse {
    const message = createBaseQueryRawContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: QueryRawContractStateResponseProtoMsg): QueryRawContractStateResponse {
    return QueryRawContractStateResponse.decode(message.value);
  },
  toProto(message: QueryRawContractStateResponse): Uint8Array {
    return QueryRawContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRawContractStateResponse): QueryRawContractStateResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
      value: QueryRawContractStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryRawContractStateResponse.typeUrl, QueryRawContractStateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryRawContractStateResponse.aminoType, QueryRawContractStateResponse.typeUrl);
function createBaseQuerySmartContractStateRequest(): QuerySmartContractStateRequest {
  return {
    address: "",
    queryData: new Uint8Array()
  };
}
export const QuerySmartContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
  aminoType: "wasm/QuerySmartContractStateRequest",
  is(o: any): o is QuerySmartContractStateRequest {
    return o && (o.$typeUrl === QuerySmartContractStateRequest.typeUrl || typeof o.address === "string" && (o.queryData instanceof Uint8Array || typeof o.queryData === "string"));
  },
  isSDK(o: any): o is QuerySmartContractStateRequestSDKType {
    return o && (o.$typeUrl === QuerySmartContractStateRequest.typeUrl || typeof o.address === "string" && (o.query_data instanceof Uint8Array || typeof o.query_data === "string"));
  },
  encode(message: QuerySmartContractStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySmartContractStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.queryData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySmartContractStateRequest>): QuerySmartContractStateRequest {
    const message = createBaseQuerySmartContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: QuerySmartContractStateRequestProtoMsg): QuerySmartContractStateRequest {
    return QuerySmartContractStateRequest.decode(message.value);
  },
  toProto(message: QuerySmartContractStateRequest): Uint8Array {
    return QuerySmartContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
      value: QuerySmartContractStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySmartContractStateRequest.typeUrl, QuerySmartContractStateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySmartContractStateRequest.aminoType, QuerySmartContractStateRequest.typeUrl);
function createBaseQuerySmartContractStateResponse(): QuerySmartContractStateResponse {
  return {
    data: new Uint8Array()
  };
}
export const QuerySmartContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
  aminoType: "wasm/QuerySmartContractStateResponse",
  is(o: any): o is QuerySmartContractStateResponse {
    return o && (o.$typeUrl === QuerySmartContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isSDK(o: any): o is QuerySmartContractStateResponseSDKType {
    return o && (o.$typeUrl === QuerySmartContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: QuerySmartContractStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySmartContractStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySmartContractStateResponse>): QuerySmartContractStateResponse {
    const message = createBaseQuerySmartContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: QuerySmartContractStateResponseProtoMsg): QuerySmartContractStateResponse {
    return QuerySmartContractStateResponse.decode(message.value);
  },
  toProto(message: QuerySmartContractStateResponse): Uint8Array {
    return QuerySmartContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
      value: QuerySmartContractStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySmartContractStateResponse.typeUrl, QuerySmartContractStateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySmartContractStateResponse.aminoType, QuerySmartContractStateResponse.typeUrl);
function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    codeId: BigInt(0)
  };
}
export const QueryCodeRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
  aminoType: "wasm/QueryCodeRequest",
  is(o: any): o is QueryCodeRequest {
    return o && (o.$typeUrl === QueryCodeRequest.typeUrl || typeof o.codeId === "bigint");
  },
  isSDK(o: any): o is QueryCodeRequestSDKType {
    return o && (o.$typeUrl === QueryCodeRequest.typeUrl || typeof o.code_id === "bigint");
  },
  encode(message: QueryCodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: QueryCodeRequestProtoMsg): QueryCodeRequest {
    return QueryCodeRequest.decode(message.value);
  },
  toProto(message: QueryCodeRequest): Uint8Array {
    return QueryCodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeRequest): QueryCodeRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
      value: QueryCodeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCodeRequest.typeUrl, QueryCodeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCodeRequest.aminoType, QueryCodeRequest.typeUrl);
function createBaseCodeInfoResponse(): CodeInfoResponse {
  return {
    codeId: BigInt(0),
    creator: "",
    dataHash: new Uint8Array(),
    instantiatePermission: AccessConfig.fromPartial({})
  };
}
export const CodeInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
  aminoType: "wasm/CodeInfoResponse",
  is(o: any): o is CodeInfoResponse {
    return o && (o.$typeUrl === CodeInfoResponse.typeUrl || typeof o.codeId === "bigint" && typeof o.creator === "string" && (o.dataHash instanceof Uint8Array || typeof o.dataHash === "string") && AccessConfig.is(o.instantiatePermission));
  },
  isSDK(o: any): o is CodeInfoResponseSDKType {
    return o && (o.$typeUrl === CodeInfoResponse.typeUrl || typeof o.code_id === "bigint" && typeof o.creator === "string" && (o.data_hash instanceof Uint8Array || typeof o.data_hash === "string") && AccessConfig.isSDK(o.instantiate_permission));
  },
  encode(message: CodeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(26).bytes(message.dataHash);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CodeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.dataHash = reader.bytes();
          break;
        case 6:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CodeInfoResponse>): CodeInfoResponse {
    const message = createBaseCodeInfoResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.dataHash = object.dataHash ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  },
  fromProtoMsg(message: CodeInfoResponseProtoMsg): CodeInfoResponse {
    return CodeInfoResponse.decode(message.value);
  },
  toProto(message: CodeInfoResponse): Uint8Array {
    return CodeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: CodeInfoResponse): CodeInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
      value: CodeInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CodeInfoResponse.typeUrl, CodeInfoResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(CodeInfoResponse.aminoType, CodeInfoResponse.typeUrl);
function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    codeInfo: undefined,
    data: new Uint8Array()
  };
}
export const QueryCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
  aminoType: "wasm/QueryCodeResponse",
  is(o: any): o is QueryCodeResponse {
    return o && (o.$typeUrl === QueryCodeResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isSDK(o: any): o is QueryCodeResponseSDKType {
    return o && (o.$typeUrl === QueryCodeResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: QueryCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeInfo !== undefined) {
      CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfo = CodeInfoResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfoResponse.fromPartial(object.codeInfo) : undefined;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse {
    return QueryCodeResponse.decode(message.value);
  },
  toProto(message: QueryCodeResponse): Uint8Array {
    return QueryCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
      value: QueryCodeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCodeResponse.typeUrl, QueryCodeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCodeResponse.aminoType, QueryCodeResponse.typeUrl);
function createBaseQueryCodesRequest(): QueryCodesRequest {
  return {
    pagination: undefined
  };
}
export const QueryCodesRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
  aminoType: "wasm/QueryCodesRequest",
  is(o: any): o is QueryCodesRequest {
    return o && o.$typeUrl === QueryCodesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryCodesRequestSDKType {
    return o && o.$typeUrl === QueryCodesRequest.typeUrl;
  },
  encode(message: QueryCodesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesRequest();
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
  fromPartial(object: Partial<QueryCodesRequest>): QueryCodesRequest {
    const message = createBaseQueryCodesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryCodesRequestProtoMsg): QueryCodesRequest {
    return QueryCodesRequest.decode(message.value);
  },
  toProto(message: QueryCodesRequest): Uint8Array {
    return QueryCodesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodesRequest): QueryCodesRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
      value: QueryCodesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCodesRequest.typeUrl, QueryCodesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCodesRequest.aminoType, QueryCodesRequest.typeUrl);
function createBaseQueryCodesResponse(): QueryCodesResponse {
  return {
    codeInfos: [],
    pagination: undefined
  };
}
export const QueryCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
  aminoType: "wasm/QueryCodesResponse",
  is(o: any): o is QueryCodesResponse {
    return o && (o.$typeUrl === QueryCodesResponse.typeUrl || Array.isArray(o.codeInfos) && (!o.codeInfos.length || CodeInfoResponse.is(o.codeInfos[0])));
  },
  isSDK(o: any): o is QueryCodesResponseSDKType {
    return o && (o.$typeUrl === QueryCodesResponse.typeUrl || Array.isArray(o.code_infos) && (!o.code_infos.length || CodeInfoResponse.isSDK(o.code_infos[0])));
  },
  encode(message: QueryCodesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.codeInfos) {
      CodeInfoResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfos.push(CodeInfoResponse.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryCodesResponse>): QueryCodesResponse {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.codeInfos?.map(e => CodeInfoResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryCodesResponseProtoMsg): QueryCodesResponse {
    return QueryCodesResponse.decode(message.value);
  },
  toProto(message: QueryCodesResponse): Uint8Array {
    return QueryCodesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodesResponse): QueryCodesResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
      value: QueryCodesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCodesResponse.typeUrl, QueryCodesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCodesResponse.aminoType, QueryCodesResponse.typeUrl);
function createBaseQueryPinnedCodesRequest(): QueryPinnedCodesRequest {
  return {
    pagination: undefined
  };
}
export const QueryPinnedCodesRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
  aminoType: "wasm/QueryPinnedCodesRequest",
  is(o: any): o is QueryPinnedCodesRequest {
    return o && o.$typeUrl === QueryPinnedCodesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryPinnedCodesRequestSDKType {
    return o && o.$typeUrl === QueryPinnedCodesRequest.typeUrl;
  },
  encode(message: QueryPinnedCodesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPinnedCodesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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
  fromPartial(object: Partial<QueryPinnedCodesRequest>): QueryPinnedCodesRequest {
    const message = createBaseQueryPinnedCodesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryPinnedCodesRequestProtoMsg): QueryPinnedCodesRequest {
    return QueryPinnedCodesRequest.decode(message.value);
  },
  toProto(message: QueryPinnedCodesRequest): Uint8Array {
    return QueryPinnedCodesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
      value: QueryPinnedCodesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPinnedCodesRequest.typeUrl, QueryPinnedCodesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPinnedCodesRequest.aminoType, QueryPinnedCodesRequest.typeUrl);
function createBaseQueryPinnedCodesResponse(): QueryPinnedCodesResponse {
  return {
    codeIds: [],
    pagination: undefined
  };
}
export const QueryPinnedCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
  aminoType: "wasm/QueryPinnedCodesResponse",
  is(o: any): o is QueryPinnedCodesResponse {
    return o && (o.$typeUrl === QueryPinnedCodesResponse.typeUrl || Array.isArray(o.codeIds) && (!o.codeIds.length || typeof o.codeIds[0] === "bigint"));
  },
  isSDK(o: any): o is QueryPinnedCodesResponseSDKType {
    return o && (o.$typeUrl === QueryPinnedCodesResponse.typeUrl || Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
  },
  encode(message: QueryPinnedCodesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPinnedCodesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
          }
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
  fromPartial(object: Partial<QueryPinnedCodesResponse>): QueryPinnedCodesResponse {
    const message = createBaseQueryPinnedCodesResponse();
    message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryPinnedCodesResponseProtoMsg): QueryPinnedCodesResponse {
    return QueryPinnedCodesResponse.decode(message.value);
  },
  toProto(message: QueryPinnedCodesResponse): Uint8Array {
    return QueryPinnedCodesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
      value: QueryPinnedCodesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPinnedCodesResponse.typeUrl, QueryPinnedCodesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPinnedCodesResponse.aminoType, QueryPinnedCodesResponse.typeUrl);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest",
  aminoType: "wasm/QueryParamsRequest",
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
      typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsRequest.aminoType, QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse",
  aminoType: "wasm/QueryParamsResponse",
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
      typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseQueryContractsByCreatorRequest(): QueryContractsByCreatorRequest {
  return {
    creatorAddress: "",
    pagination: undefined
  };
}
export const QueryContractsByCreatorRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest",
  aminoType: "wasm/QueryContractsByCreatorRequest",
  is(o: any): o is QueryContractsByCreatorRequest {
    return o && (o.$typeUrl === QueryContractsByCreatorRequest.typeUrl || typeof o.creatorAddress === "string");
  },
  isSDK(o: any): o is QueryContractsByCreatorRequestSDKType {
    return o && (o.$typeUrl === QueryContractsByCreatorRequest.typeUrl || typeof o.creator_address === "string");
  },
  encode(message: QueryContractsByCreatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creatorAddress !== "") {
      writer.uint32(10).string(message.creatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCreatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creatorAddress = reader.string();
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
  fromPartial(object: Partial<QueryContractsByCreatorRequest>): QueryContractsByCreatorRequest {
    const message = createBaseQueryContractsByCreatorRequest();
    message.creatorAddress = object.creatorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryContractsByCreatorRequestProtoMsg): QueryContractsByCreatorRequest {
    return QueryContractsByCreatorRequest.decode(message.value);
  },
  toProto(message: QueryContractsByCreatorRequest): Uint8Array {
    return QueryContractsByCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractsByCreatorRequest): QueryContractsByCreatorRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest",
      value: QueryContractsByCreatorRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryContractsByCreatorRequest.typeUrl, QueryContractsByCreatorRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryContractsByCreatorRequest.aminoType, QueryContractsByCreatorRequest.typeUrl);
function createBaseQueryContractsByCreatorResponse(): QueryContractsByCreatorResponse {
  return {
    contractAddresses: [],
    pagination: undefined
  };
}
export const QueryContractsByCreatorResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse",
  aminoType: "wasm/QueryContractsByCreatorResponse",
  is(o: any): o is QueryContractsByCreatorResponse {
    return o && (o.$typeUrl === QueryContractsByCreatorResponse.typeUrl || Array.isArray(o.contractAddresses) && (!o.contractAddresses.length || typeof o.contractAddresses[0] === "string"));
  },
  isSDK(o: any): o is QueryContractsByCreatorResponseSDKType {
    return o && (o.$typeUrl === QueryContractsByCreatorResponse.typeUrl || Array.isArray(o.contract_addresses) && (!o.contract_addresses.length || typeof o.contract_addresses[0] === "string"));
  },
  encode(message: QueryContractsByCreatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCreatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
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
  fromPartial(object: Partial<QueryContractsByCreatorResponse>): QueryContractsByCreatorResponse {
    const message = createBaseQueryContractsByCreatorResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryContractsByCreatorResponseProtoMsg): QueryContractsByCreatorResponse {
    return QueryContractsByCreatorResponse.decode(message.value);
  },
  toProto(message: QueryContractsByCreatorResponse): Uint8Array {
    return QueryContractsByCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractsByCreatorResponse): QueryContractsByCreatorResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse",
      value: QueryContractsByCreatorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryContractsByCreatorResponse.typeUrl, QueryContractsByCreatorResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryContractsByCreatorResponse.aminoType, QueryContractsByCreatorResponse.typeUrl);