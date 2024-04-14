import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractInfoSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntrySDKType, Model, ModelSDKType, AccessConfig, AccessConfigSDKType, Params, ParamsSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
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
export declare const QueryContractInfoRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryContractInfoRequest;
    isSDK(o: any): o is QueryContractInfoRequestSDKType;
    encode(message: QueryContractInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryContractInfoRequest;
    fromPartial(object: Partial<QueryContractInfoRequest>): QueryContractInfoRequest;
    fromProtoMsg(message: QueryContractInfoRequestProtoMsg): QueryContractInfoRequest;
    toProto(message: QueryContractInfoRequest): Uint8Array;
    toProtoMsg(message: QueryContractInfoRequest): QueryContractInfoRequestProtoMsg;
};
export declare const QueryContractInfoResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryContractInfoResponse;
    isSDK(o: any): o is QueryContractInfoResponseSDKType;
    encode(message: QueryContractInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryContractInfoResponse;
    fromPartial(object: Partial<QueryContractInfoResponse>): QueryContractInfoResponse;
    fromProtoMsg(message: QueryContractInfoResponseProtoMsg): QueryContractInfoResponse;
    toProto(message: QueryContractInfoResponse): Uint8Array;
    toProtoMsg(message: QueryContractInfoResponse): QueryContractInfoResponseProtoMsg;
};
export declare const QueryContractHistoryRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryContractHistoryRequest;
    isSDK(o: any): o is QueryContractHistoryRequestSDKType;
    encode(message: QueryContractHistoryRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryContractHistoryRequest;
    fromPartial(object: Partial<QueryContractHistoryRequest>): QueryContractHistoryRequest;
    fromProtoMsg(message: QueryContractHistoryRequestProtoMsg): QueryContractHistoryRequest;
    toProto(message: QueryContractHistoryRequest): Uint8Array;
    toProtoMsg(message: QueryContractHistoryRequest): QueryContractHistoryRequestProtoMsg;
};
export declare const QueryContractHistoryResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryContractHistoryResponse;
    isSDK(o: any): o is QueryContractHistoryResponseSDKType;
    encode(message: QueryContractHistoryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryContractHistoryResponse;
    fromPartial(object: Partial<QueryContractHistoryResponse>): QueryContractHistoryResponse;
    fromProtoMsg(message: QueryContractHistoryResponseProtoMsg): QueryContractHistoryResponse;
    toProto(message: QueryContractHistoryResponse): Uint8Array;
    toProtoMsg(message: QueryContractHistoryResponse): QueryContractHistoryResponseProtoMsg;
};
export declare const QueryContractsByCodeRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryContractsByCodeRequest;
    isSDK(o: any): o is QueryContractsByCodeRequestSDKType;
    encode(message: QueryContractsByCodeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCodeRequest;
    fromPartial(object: Partial<QueryContractsByCodeRequest>): QueryContractsByCodeRequest;
    fromProtoMsg(message: QueryContractsByCodeRequestProtoMsg): QueryContractsByCodeRequest;
    toProto(message: QueryContractsByCodeRequest): Uint8Array;
    toProtoMsg(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestProtoMsg;
};
export declare const QueryContractsByCodeResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryContractsByCodeResponse;
    isSDK(o: any): o is QueryContractsByCodeResponseSDKType;
    encode(message: QueryContractsByCodeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCodeResponse;
    fromPartial(object: Partial<QueryContractsByCodeResponse>): QueryContractsByCodeResponse;
    fromProtoMsg(message: QueryContractsByCodeResponseProtoMsg): QueryContractsByCodeResponse;
    toProto(message: QueryContractsByCodeResponse): Uint8Array;
    toProtoMsg(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseProtoMsg;
};
export declare const QueryAllContractStateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAllContractStateRequest;
    isSDK(o: any): o is QueryAllContractStateRequestSDKType;
    encode(message: QueryAllContractStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllContractStateRequest;
    fromPartial(object: Partial<QueryAllContractStateRequest>): QueryAllContractStateRequest;
    fromProtoMsg(message: QueryAllContractStateRequestProtoMsg): QueryAllContractStateRequest;
    toProto(message: QueryAllContractStateRequest): Uint8Array;
    toProtoMsg(message: QueryAllContractStateRequest): QueryAllContractStateRequestProtoMsg;
};
export declare const QueryAllContractStateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAllContractStateResponse;
    isSDK(o: any): o is QueryAllContractStateResponseSDKType;
    encode(message: QueryAllContractStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllContractStateResponse;
    fromPartial(object: Partial<QueryAllContractStateResponse>): QueryAllContractStateResponse;
    fromProtoMsg(message: QueryAllContractStateResponseProtoMsg): QueryAllContractStateResponse;
    toProto(message: QueryAllContractStateResponse): Uint8Array;
    toProtoMsg(message: QueryAllContractStateResponse): QueryAllContractStateResponseProtoMsg;
};
export declare const QueryRawContractStateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryRawContractStateRequest;
    isSDK(o: any): o is QueryRawContractStateRequestSDKType;
    encode(message: QueryRawContractStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRawContractStateRequest;
    fromPartial(object: Partial<QueryRawContractStateRequest>): QueryRawContractStateRequest;
    fromProtoMsg(message: QueryRawContractStateRequestProtoMsg): QueryRawContractStateRequest;
    toProto(message: QueryRawContractStateRequest): Uint8Array;
    toProtoMsg(message: QueryRawContractStateRequest): QueryRawContractStateRequestProtoMsg;
};
export declare const QueryRawContractStateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryRawContractStateResponse;
    isSDK(o: any): o is QueryRawContractStateResponseSDKType;
    encode(message: QueryRawContractStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRawContractStateResponse;
    fromPartial(object: Partial<QueryRawContractStateResponse>): QueryRawContractStateResponse;
    fromProtoMsg(message: QueryRawContractStateResponseProtoMsg): QueryRawContractStateResponse;
    toProto(message: QueryRawContractStateResponse): Uint8Array;
    toProtoMsg(message: QueryRawContractStateResponse): QueryRawContractStateResponseProtoMsg;
};
export declare const QuerySmartContractStateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySmartContractStateRequest;
    isSDK(o: any): o is QuerySmartContractStateRequestSDKType;
    encode(message: QuerySmartContractStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySmartContractStateRequest;
    fromPartial(object: Partial<QuerySmartContractStateRequest>): QuerySmartContractStateRequest;
    fromProtoMsg(message: QuerySmartContractStateRequestProtoMsg): QuerySmartContractStateRequest;
    toProto(message: QuerySmartContractStateRequest): Uint8Array;
    toProtoMsg(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestProtoMsg;
};
export declare const QuerySmartContractStateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySmartContractStateResponse;
    isSDK(o: any): o is QuerySmartContractStateResponseSDKType;
    encode(message: QuerySmartContractStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySmartContractStateResponse;
    fromPartial(object: Partial<QuerySmartContractStateResponse>): QuerySmartContractStateResponse;
    fromProtoMsg(message: QuerySmartContractStateResponseProtoMsg): QuerySmartContractStateResponse;
    toProto(message: QuerySmartContractStateResponse): Uint8Array;
    toProtoMsg(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseProtoMsg;
};
export declare const QueryCodeRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryCodeRequest;
    isSDK(o: any): o is QueryCodeRequestSDKType;
    encode(message: QueryCodeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeRequest;
    fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest;
    fromProtoMsg(message: QueryCodeRequestProtoMsg): QueryCodeRequest;
    toProto(message: QueryCodeRequest): Uint8Array;
    toProtoMsg(message: QueryCodeRequest): QueryCodeRequestProtoMsg;
};
export declare const CodeInfoResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is CodeInfoResponse;
    isSDK(o: any): o is CodeInfoResponseSDKType;
    encode(message: CodeInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CodeInfoResponse;
    fromPartial(object: Partial<CodeInfoResponse>): CodeInfoResponse;
    fromProtoMsg(message: CodeInfoResponseProtoMsg): CodeInfoResponse;
    toProto(message: CodeInfoResponse): Uint8Array;
    toProtoMsg(message: CodeInfoResponse): CodeInfoResponseProtoMsg;
};
export declare const QueryCodeResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryCodeResponse;
    isSDK(o: any): o is QueryCodeResponseSDKType;
    encode(message: QueryCodeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeResponse;
    fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse;
    fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse;
    toProto(message: QueryCodeResponse): Uint8Array;
    toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg;
};
export declare const QueryCodesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryCodesRequest;
    isSDK(o: any): o is QueryCodesRequestSDKType;
    encode(message: QueryCodesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCodesRequest;
    fromPartial(object: Partial<QueryCodesRequest>): QueryCodesRequest;
    fromProtoMsg(message: QueryCodesRequestProtoMsg): QueryCodesRequest;
    toProto(message: QueryCodesRequest): Uint8Array;
    toProtoMsg(message: QueryCodesRequest): QueryCodesRequestProtoMsg;
};
export declare const QueryCodesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryCodesResponse;
    isSDK(o: any): o is QueryCodesResponseSDKType;
    encode(message: QueryCodesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCodesResponse;
    fromPartial(object: Partial<QueryCodesResponse>): QueryCodesResponse;
    fromProtoMsg(message: QueryCodesResponseProtoMsg): QueryCodesResponse;
    toProto(message: QueryCodesResponse): Uint8Array;
    toProtoMsg(message: QueryCodesResponse): QueryCodesResponseProtoMsg;
};
export declare const QueryPinnedCodesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPinnedCodesRequest;
    isSDK(o: any): o is QueryPinnedCodesRequestSDKType;
    encode(message: QueryPinnedCodesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPinnedCodesRequest;
    fromPartial(object: Partial<QueryPinnedCodesRequest>): QueryPinnedCodesRequest;
    fromProtoMsg(message: QueryPinnedCodesRequestProtoMsg): QueryPinnedCodesRequest;
    toProto(message: QueryPinnedCodesRequest): Uint8Array;
    toProtoMsg(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestProtoMsg;
};
export declare const QueryPinnedCodesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPinnedCodesResponse;
    isSDK(o: any): o is QueryPinnedCodesResponseSDKType;
    encode(message: QueryPinnedCodesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPinnedCodesResponse;
    fromPartial(object: Partial<QueryPinnedCodesResponse>): QueryPinnedCodesResponse;
    fromProtoMsg(message: QueryPinnedCodesResponseProtoMsg): QueryPinnedCodesResponse;
    toProto(message: QueryPinnedCodesResponse): Uint8Array;
    toProtoMsg(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsRequest;
    isSDK(o: any): o is QueryParamsRequestSDKType;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsResponse;
    isSDK(o: any): o is QueryParamsResponseSDKType;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryContractsByCreatorRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryContractsByCreatorRequest;
    isSDK(o: any): o is QueryContractsByCreatorRequestSDKType;
    encode(message: QueryContractsByCreatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCreatorRequest;
    fromPartial(object: Partial<QueryContractsByCreatorRequest>): QueryContractsByCreatorRequest;
    fromProtoMsg(message: QueryContractsByCreatorRequestProtoMsg): QueryContractsByCreatorRequest;
    toProto(message: QueryContractsByCreatorRequest): Uint8Array;
    toProtoMsg(message: QueryContractsByCreatorRequest): QueryContractsByCreatorRequestProtoMsg;
};
export declare const QueryContractsByCreatorResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryContractsByCreatorResponse;
    isSDK(o: any): o is QueryContractsByCreatorResponseSDKType;
    encode(message: QueryContractsByCreatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCreatorResponse;
    fromPartial(object: Partial<QueryContractsByCreatorResponse>): QueryContractsByCreatorResponse;
    fromProtoMsg(message: QueryContractsByCreatorResponseProtoMsg): QueryContractsByCreatorResponse;
    toProto(message: QueryContractsByCreatorResponse): Uint8Array;
    toProtoMsg(message: QueryContractsByCreatorResponse): QueryContractsByCreatorResponseProtoMsg;
};
