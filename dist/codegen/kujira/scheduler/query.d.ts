import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Hook, HookSDKType } from "./hook";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/kujira.scheduler.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
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
export declare const QueryParamsRequest: {
    typeUrl: string;
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
    is(o: any): o is QueryParamsResponse;
    isSDK(o: any): o is QueryParamsResponseSDKType;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryGetHookRequest: {
    typeUrl: string;
    is(o: any): o is QueryGetHookRequest;
    isSDK(o: any): o is QueryGetHookRequestSDKType;
    encode(message: QueryGetHookRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHookRequest;
    fromPartial(object: Partial<QueryGetHookRequest>): QueryGetHookRequest;
    fromProtoMsg(message: QueryGetHookRequestProtoMsg): QueryGetHookRequest;
    toProto(message: QueryGetHookRequest): Uint8Array;
    toProtoMsg(message: QueryGetHookRequest): QueryGetHookRequestProtoMsg;
};
export declare const QueryGetHookResponse: {
    typeUrl: string;
    is(o: any): o is QueryGetHookResponse;
    isSDK(o: any): o is QueryGetHookResponseSDKType;
    encode(message: QueryGetHookResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHookResponse;
    fromPartial(object: Partial<QueryGetHookResponse>): QueryGetHookResponse;
    fromProtoMsg(message: QueryGetHookResponseProtoMsg): QueryGetHookResponse;
    toProto(message: QueryGetHookResponse): Uint8Array;
    toProtoMsg(message: QueryGetHookResponse): QueryGetHookResponseProtoMsg;
};
export declare const QueryAllHookRequest: {
    typeUrl: string;
    is(o: any): o is QueryAllHookRequest;
    isSDK(o: any): o is QueryAllHookRequestSDKType;
    encode(message: QueryAllHookRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHookRequest;
    fromPartial(object: Partial<QueryAllHookRequest>): QueryAllHookRequest;
    fromProtoMsg(message: QueryAllHookRequestProtoMsg): QueryAllHookRequest;
    toProto(message: QueryAllHookRequest): Uint8Array;
    toProtoMsg(message: QueryAllHookRequest): QueryAllHookRequestProtoMsg;
};
export declare const QueryAllHookResponse: {
    typeUrl: string;
    is(o: any): o is QueryAllHookResponse;
    isSDK(o: any): o is QueryAllHookResponseSDKType;
    encode(message: QueryAllHookResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHookResponse;
    fromPartial(object: Partial<QueryAllHookResponse>): QueryAllHookResponse;
    fromProtoMsg(message: QueryAllHookResponseProtoMsg): QueryAllHookResponse;
    toProto(message: QueryAllHookResponse): Uint8Array;
    toProtoMsg(message: QueryAllHookResponse): QueryAllHookResponseProtoMsg;
};
