import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorSDKType, DelegationResponse, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoSDKType, Pool, PoolSDKType, Params, ParamsSDKType } from "./staking";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
    /** status enables to query for validators matching a given status. */
    status: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryValidatorsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest";
    value: Uint8Array;
}
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequestSDKType {
    status: string;
    pagination?: PageRequestSDKType;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
    /** validators contains all the queried validators. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryValidatorsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse";
    value: Uint8Array;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponseSDKType {
    validators: ValidatorSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryValidatorRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest";
    value: Uint8Array;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequestSDKType {
    validator_addr: string;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
    /** validator defines the the validator info. */
    validator: Validator;
}
export interface QueryValidatorResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse";
    value: Uint8Array;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponseSDKType {
    validator: ValidatorSDKType;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryValidatorDelegationsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest";
    value: Uint8Array;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequestSDKType {
    validator_addr: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
    delegationResponses: DelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryValidatorDelegationsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse";
    value: Uint8Array;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponseSDKType {
    delegation_responses: DelegationResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryValidatorUnbondingDelegationsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest";
    value: Uint8Array;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequestSDKType {
    validator_addr: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
    unbondingResponses: UnbondingDelegation[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryValidatorUnbondingDelegationsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse";
    value: Uint8Array;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponseSDKType {
    unbonding_responses: UnbondingDelegationSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryDelegationRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest";
    value: Uint8Array;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequestSDKType {
    delegator_addr: string;
    validator_addr: string;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
    /** delegation_responses defines the delegation info of a delegation. */
    delegationResponse?: DelegationResponse;
}
export interface QueryDelegationResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse";
    value: Uint8Array;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponseSDKType {
    delegation_response?: DelegationResponseSDKType;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryUnbondingDelegationRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest";
    value: Uint8Array;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequestSDKType {
    delegator_addr: string;
    validator_addr: string;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponse {
    /** unbond defines the unbonding information of a delegation. */
    unbond: UnbondingDelegation;
}
export interface QueryUnbondingDelegationResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse";
    value: Uint8Array;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponseSDKType {
    unbond: UnbondingDelegationSDKType;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryDelegatorDelegationsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest";
    value: Uint8Array;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequestSDKType {
    delegator_addr: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
    /** delegation_responses defines all the delegations' info of a delegator. */
    delegationResponses: DelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryDelegatorDelegationsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse";
    value: Uint8Array;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponseSDKType {
    delegation_responses: DelegationResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryDelegatorUnbondingDelegationsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest";
    value: Uint8Array;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequestSDKType {
    delegator_addr: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
    unbondingResponses: UnbondingDelegation[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryDelegatorUnbondingDelegationsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse";
    value: Uint8Array;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponseSDKType {
    unbonding_responses: UnbondingDelegationSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** src_validator_addr defines the validator address to redelegate from. */
    srcValidatorAddr: string;
    /** dst_validator_addr defines the validator address to redelegate to. */
    dstValidatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryRedelegationsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest";
    value: Uint8Array;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequestSDKType {
    delegator_addr: string;
    src_validator_addr: string;
    dst_validator_addr: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponse {
    redelegationResponses: RedelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryRedelegationsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse";
    value: Uint8Array;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponseSDKType {
    redelegation_responses: RedelegationResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryDelegatorValidatorsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest";
    value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestSDKType {
    delegator_addr: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
    /** validators defines the the validators' info of a delegator. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryDelegatorValidatorsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse";
    value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseSDKType {
    validators: ValidatorSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryDelegatorValidatorRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest";
    value: Uint8Array;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequestSDKType {
    delegator_addr: string;
    validator_addr: string;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
    /** validator defines the the validator info. */
    validator: Validator;
}
export interface QueryDelegatorValidatorResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse";
    value: Uint8Array;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponseSDKType {
    validator: ValidatorSDKType;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequest {
    /** height defines at which height to query the historical info. */
    height: bigint;
}
export interface QueryHistoricalInfoRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest";
    value: Uint8Array;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequestSDKType {
    height: bigint;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponse {
    /** hist defines the historical info at the given height. */
    hist?: HistoricalInfo;
}
export interface QueryHistoricalInfoResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse";
    value: Uint8Array;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponseSDKType {
    hist?: HistoricalInfoSDKType;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
}
export interface QueryPoolRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest";
    value: Uint8Array;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequestSDKType {
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
    /** pool defines the pool info. */
    pool: Pool;
}
export interface QueryPoolResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse";
    value: Uint8Array;
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponseSDKType {
    pool: PoolSDKType;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest";
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
    typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryValidatorsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorsRequest;
    isSDK(o: any): o is QueryValidatorsRequestSDKType;
    encode(message: QueryValidatorsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsRequest;
    fromPartial(object: Partial<QueryValidatorsRequest>): QueryValidatorsRequest;
    fromProtoMsg(message: QueryValidatorsRequestProtoMsg): QueryValidatorsRequest;
    toProto(message: QueryValidatorsRequest): Uint8Array;
    toProtoMsg(message: QueryValidatorsRequest): QueryValidatorsRequestProtoMsg;
};
export declare const QueryValidatorsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorsResponse;
    isSDK(o: any): o is QueryValidatorsResponseSDKType;
    encode(message: QueryValidatorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsResponse;
    fromPartial(object: Partial<QueryValidatorsResponse>): QueryValidatorsResponse;
    fromProtoMsg(message: QueryValidatorsResponseProtoMsg): QueryValidatorsResponse;
    toProto(message: QueryValidatorsResponse): Uint8Array;
    toProtoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseProtoMsg;
};
export declare const QueryValidatorRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorRequest;
    isSDK(o: any): o is QueryValidatorRequestSDKType;
    encode(message: QueryValidatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorRequest;
    fromPartial(object: Partial<QueryValidatorRequest>): QueryValidatorRequest;
    fromProtoMsg(message: QueryValidatorRequestProtoMsg): QueryValidatorRequest;
    toProto(message: QueryValidatorRequest): Uint8Array;
    toProtoMsg(message: QueryValidatorRequest): QueryValidatorRequestProtoMsg;
};
export declare const QueryValidatorResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorResponse;
    isSDK(o: any): o is QueryValidatorResponseSDKType;
    encode(message: QueryValidatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorResponse;
    fromPartial(object: Partial<QueryValidatorResponse>): QueryValidatorResponse;
    fromProtoMsg(message: QueryValidatorResponseProtoMsg): QueryValidatorResponse;
    toProto(message: QueryValidatorResponse): Uint8Array;
    toProtoMsg(message: QueryValidatorResponse): QueryValidatorResponseProtoMsg;
};
export declare const QueryValidatorDelegationsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorDelegationsRequest;
    isSDK(o: any): o is QueryValidatorDelegationsRequestSDKType;
    encode(message: QueryValidatorDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDelegationsRequest;
    fromPartial(object: Partial<QueryValidatorDelegationsRequest>): QueryValidatorDelegationsRequest;
    fromProtoMsg(message: QueryValidatorDelegationsRequestProtoMsg): QueryValidatorDelegationsRequest;
    toProto(message: QueryValidatorDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryValidatorDelegationsRequest): QueryValidatorDelegationsRequestProtoMsg;
};
export declare const QueryValidatorDelegationsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorDelegationsResponse;
    isSDK(o: any): o is QueryValidatorDelegationsResponseSDKType;
    encode(message: QueryValidatorDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDelegationsResponse;
    fromPartial(object: Partial<QueryValidatorDelegationsResponse>): QueryValidatorDelegationsResponse;
    fromProtoMsg(message: QueryValidatorDelegationsResponseProtoMsg): QueryValidatorDelegationsResponse;
    toProto(message: QueryValidatorDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryValidatorDelegationsResponse): QueryValidatorDelegationsResponseProtoMsg;
};
export declare const QueryValidatorUnbondingDelegationsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorUnbondingDelegationsRequest;
    isSDK(o: any): o is QueryValidatorUnbondingDelegationsRequestSDKType;
    encode(message: QueryValidatorUnbondingDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsRequest;
    fromPartial(object: Partial<QueryValidatorUnbondingDelegationsRequest>): QueryValidatorUnbondingDelegationsRequest;
    fromProtoMsg(message: QueryValidatorUnbondingDelegationsRequestProtoMsg): QueryValidatorUnbondingDelegationsRequest;
    toProto(message: QueryValidatorUnbondingDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryValidatorUnbondingDelegationsRequest): QueryValidatorUnbondingDelegationsRequestProtoMsg;
};
export declare const QueryValidatorUnbondingDelegationsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorUnbondingDelegationsResponse;
    isSDK(o: any): o is QueryValidatorUnbondingDelegationsResponseSDKType;
    encode(message: QueryValidatorUnbondingDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponse;
    fromPartial(object: Partial<QueryValidatorUnbondingDelegationsResponse>): QueryValidatorUnbondingDelegationsResponse;
    fromProtoMsg(message: QueryValidatorUnbondingDelegationsResponseProtoMsg): QueryValidatorUnbondingDelegationsResponse;
    toProto(message: QueryValidatorUnbondingDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryValidatorUnbondingDelegationsResponse): QueryValidatorUnbondingDelegationsResponseProtoMsg;
};
export declare const QueryDelegationRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegationRequest;
    isSDK(o: any): o is QueryDelegationRequestSDKType;
    encode(message: QueryDelegationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRequest;
    fromPartial(object: Partial<QueryDelegationRequest>): QueryDelegationRequest;
    fromProtoMsg(message: QueryDelegationRequestProtoMsg): QueryDelegationRequest;
    toProto(message: QueryDelegationRequest): Uint8Array;
    toProtoMsg(message: QueryDelegationRequest): QueryDelegationRequestProtoMsg;
};
export declare const QueryDelegationResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegationResponse;
    isSDK(o: any): o is QueryDelegationResponseSDKType;
    encode(message: QueryDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationResponse;
    fromPartial(object: Partial<QueryDelegationResponse>): QueryDelegationResponse;
    fromProtoMsg(message: QueryDelegationResponseProtoMsg): QueryDelegationResponse;
    toProto(message: QueryDelegationResponse): Uint8Array;
    toProtoMsg(message: QueryDelegationResponse): QueryDelegationResponseProtoMsg;
};
export declare const QueryUnbondingDelegationRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryUnbondingDelegationRequest;
    isSDK(o: any): o is QueryUnbondingDelegationRequestSDKType;
    encode(message: QueryUnbondingDelegationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingDelegationRequest;
    fromPartial(object: Partial<QueryUnbondingDelegationRequest>): QueryUnbondingDelegationRequest;
    fromProtoMsg(message: QueryUnbondingDelegationRequestProtoMsg): QueryUnbondingDelegationRequest;
    toProto(message: QueryUnbondingDelegationRequest): Uint8Array;
    toProtoMsg(message: QueryUnbondingDelegationRequest): QueryUnbondingDelegationRequestProtoMsg;
};
export declare const QueryUnbondingDelegationResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryUnbondingDelegationResponse;
    isSDK(o: any): o is QueryUnbondingDelegationResponseSDKType;
    encode(message: QueryUnbondingDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingDelegationResponse;
    fromPartial(object: Partial<QueryUnbondingDelegationResponse>): QueryUnbondingDelegationResponse;
    fromProtoMsg(message: QueryUnbondingDelegationResponseProtoMsg): QueryUnbondingDelegationResponse;
    toProto(message: QueryUnbondingDelegationResponse): Uint8Array;
    toProtoMsg(message: QueryUnbondingDelegationResponse): QueryUnbondingDelegationResponseProtoMsg;
};
export declare const QueryDelegatorDelegationsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorDelegationsRequest;
    isSDK(o: any): o is QueryDelegatorDelegationsRequestSDKType;
    encode(message: QueryDelegatorDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorDelegationsRequest;
    fromPartial(object: Partial<QueryDelegatorDelegationsRequest>): QueryDelegatorDelegationsRequest;
    fromProtoMsg(message: QueryDelegatorDelegationsRequestProtoMsg): QueryDelegatorDelegationsRequest;
    toProto(message: QueryDelegatorDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestProtoMsg;
};
export declare const QueryDelegatorDelegationsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorDelegationsResponse;
    isSDK(o: any): o is QueryDelegatorDelegationsResponseSDKType;
    encode(message: QueryDelegatorDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorDelegationsResponse;
    fromPartial(object: Partial<QueryDelegatorDelegationsResponse>): QueryDelegatorDelegationsResponse;
    fromProtoMsg(message: QueryDelegatorDelegationsResponseProtoMsg): QueryDelegatorDelegationsResponse;
    toProto(message: QueryDelegatorDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseProtoMsg;
};
export declare const QueryDelegatorUnbondingDelegationsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorUnbondingDelegationsRequest;
    isSDK(o: any): o is QueryDelegatorUnbondingDelegationsRequestSDKType;
    encode(message: QueryDelegatorUnbondingDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsRequest;
    fromPartial(object: Partial<QueryDelegatorUnbondingDelegationsRequest>): QueryDelegatorUnbondingDelegationsRequest;
    fromProtoMsg(message: QueryDelegatorUnbondingDelegationsRequestProtoMsg): QueryDelegatorUnbondingDelegationsRequest;
    toProto(message: QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestProtoMsg;
};
export declare const QueryDelegatorUnbondingDelegationsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorUnbondingDelegationsResponse;
    isSDK(o: any): o is QueryDelegatorUnbondingDelegationsResponseSDKType;
    encode(message: QueryDelegatorUnbondingDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsResponse;
    fromPartial(object: Partial<QueryDelegatorUnbondingDelegationsResponse>): QueryDelegatorUnbondingDelegationsResponse;
    fromProtoMsg(message: QueryDelegatorUnbondingDelegationsResponseProtoMsg): QueryDelegatorUnbondingDelegationsResponse;
    toProto(message: QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseProtoMsg;
};
export declare const QueryRedelegationsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryRedelegationsRequest;
    isSDK(o: any): o is QueryRedelegationsRequestSDKType;
    encode(message: QueryRedelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRedelegationsRequest;
    fromPartial(object: Partial<QueryRedelegationsRequest>): QueryRedelegationsRequest;
    fromProtoMsg(message: QueryRedelegationsRequestProtoMsg): QueryRedelegationsRequest;
    toProto(message: QueryRedelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryRedelegationsRequest): QueryRedelegationsRequestProtoMsg;
};
export declare const QueryRedelegationsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryRedelegationsResponse;
    isSDK(o: any): o is QueryRedelegationsResponseSDKType;
    encode(message: QueryRedelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRedelegationsResponse;
    fromPartial(object: Partial<QueryRedelegationsResponse>): QueryRedelegationsResponse;
    fromProtoMsg(message: QueryRedelegationsResponseProtoMsg): QueryRedelegationsResponse;
    toProto(message: QueryRedelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryRedelegationsResponse): QueryRedelegationsResponseProtoMsg;
};
export declare const QueryDelegatorValidatorsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorValidatorsRequest;
    isSDK(o: any): o is QueryDelegatorValidatorsRequestSDKType;
    encode(message: QueryDelegatorValidatorsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest;
    fromPartial(object: Partial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest;
    fromProtoMsg(message: QueryDelegatorValidatorsRequestProtoMsg): QueryDelegatorValidatorsRequest;
    toProto(message: QueryDelegatorValidatorsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestProtoMsg;
};
export declare const QueryDelegatorValidatorsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorValidatorsResponse;
    isSDK(o: any): o is QueryDelegatorValidatorsResponseSDKType;
    encode(message: QueryDelegatorValidatorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse;
    fromPartial(object: Partial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse;
    fromProtoMsg(message: QueryDelegatorValidatorsResponseProtoMsg): QueryDelegatorValidatorsResponse;
    toProto(message: QueryDelegatorValidatorsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseProtoMsg;
};
export declare const QueryDelegatorValidatorRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorValidatorRequest;
    isSDK(o: any): o is QueryDelegatorValidatorRequestSDKType;
    encode(message: QueryDelegatorValidatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorRequest;
    fromPartial(object: Partial<QueryDelegatorValidatorRequest>): QueryDelegatorValidatorRequest;
    fromProtoMsg(message: QueryDelegatorValidatorRequestProtoMsg): QueryDelegatorValidatorRequest;
    toProto(message: QueryDelegatorValidatorRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorValidatorRequest): QueryDelegatorValidatorRequestProtoMsg;
};
export declare const QueryDelegatorValidatorResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorValidatorResponse;
    isSDK(o: any): o is QueryDelegatorValidatorResponseSDKType;
    encode(message: QueryDelegatorValidatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorResponse;
    fromPartial(object: Partial<QueryDelegatorValidatorResponse>): QueryDelegatorValidatorResponse;
    fromProtoMsg(message: QueryDelegatorValidatorResponseProtoMsg): QueryDelegatorValidatorResponse;
    toProto(message: QueryDelegatorValidatorResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorValidatorResponse): QueryDelegatorValidatorResponseProtoMsg;
};
export declare const QueryHistoricalInfoRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryHistoricalInfoRequest;
    isSDK(o: any): o is QueryHistoricalInfoRequestSDKType;
    encode(message: QueryHistoricalInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalInfoRequest;
    fromPartial(object: Partial<QueryHistoricalInfoRequest>): QueryHistoricalInfoRequest;
    fromProtoMsg(message: QueryHistoricalInfoRequestProtoMsg): QueryHistoricalInfoRequest;
    toProto(message: QueryHistoricalInfoRequest): Uint8Array;
    toProtoMsg(message: QueryHistoricalInfoRequest): QueryHistoricalInfoRequestProtoMsg;
};
export declare const QueryHistoricalInfoResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryHistoricalInfoResponse;
    isSDK(o: any): o is QueryHistoricalInfoResponseSDKType;
    encode(message: QueryHistoricalInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalInfoResponse;
    fromPartial(object: Partial<QueryHistoricalInfoResponse>): QueryHistoricalInfoResponse;
    fromProtoMsg(message: QueryHistoricalInfoResponseProtoMsg): QueryHistoricalInfoResponse;
    toProto(message: QueryHistoricalInfoResponse): Uint8Array;
    toProtoMsg(message: QueryHistoricalInfoResponse): QueryHistoricalInfoResponseProtoMsg;
};
export declare const QueryPoolRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPoolRequest;
    isSDK(o: any): o is QueryPoolRequestSDKType;
    encode(_: QueryPoolRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest;
    fromPartial(_: Partial<QueryPoolRequest>): QueryPoolRequest;
    fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest;
    toProto(message: QueryPoolRequest): Uint8Array;
    toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg;
};
export declare const QueryPoolResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPoolResponse;
    isSDK(o: any): o is QueryPoolResponseSDKType;
    encode(message: QueryPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse;
    fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse;
    fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse;
    toProto(message: QueryPoolResponse): Uint8Array;
    toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg;
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
