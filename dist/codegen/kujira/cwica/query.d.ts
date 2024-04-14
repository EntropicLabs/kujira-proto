import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountRequest {
    owner: string;
    connectionId: string;
    accountId: string;
}
export interface QueryInterchainAccountRequestProtoMsg {
    typeUrl: "/kujira.cwica.QueryInterchainAccountRequest";
    value: Uint8Array;
}
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountRequestSDKType {
    owner: string;
    connection_id: string;
    account_id: string;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountResponse {
    interchainAccountAddress: string;
}
export interface QueryInterchainAccountResponseProtoMsg {
    typeUrl: "/kujira.cwica.QueryInterchainAccountResponse";
    value: Uint8Array;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountResponseSDKType {
    interchain_account_address: string;
}
export declare const QueryInterchainAccountRequest: {
    typeUrl: string;
    is(o: any): o is QueryInterchainAccountRequest;
    isSDK(o: any): o is QueryInterchainAccountRequestSDKType;
    encode(message: QueryInterchainAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountRequest;
    fromPartial(object: Partial<QueryInterchainAccountRequest>): QueryInterchainAccountRequest;
    fromProtoMsg(message: QueryInterchainAccountRequestProtoMsg): QueryInterchainAccountRequest;
    toProto(message: QueryInterchainAccountRequest): Uint8Array;
    toProtoMsg(message: QueryInterchainAccountRequest): QueryInterchainAccountRequestProtoMsg;
};
export declare const QueryInterchainAccountResponse: {
    typeUrl: string;
    is(o: any): o is QueryInterchainAccountResponse;
    isSDK(o: any): o is QueryInterchainAccountResponseSDKType;
    encode(message: QueryInterchainAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountResponse;
    fromPartial(object: Partial<QueryInterchainAccountResponse>): QueryInterchainAccountResponse;
    fromProtoMsg(message: QueryInterchainAccountResponseProtoMsg): QueryInterchainAccountResponse;
    toProto(message: QueryInterchainAccountResponse): Uint8Array;
    toProtoMsg(message: QueryInterchainAccountResponse): QueryInterchainAccountResponseProtoMsg;
};
