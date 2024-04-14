import { DecCoin, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteSDKType, Params, ParamsSDKType } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequest {
    /** denom defines the denomination to query for. */
    denom: string;
}
export interface QueryExchangeRateRequestProtoMsg {
    typeUrl: "/kujira.oracle.QueryExchangeRateRequest";
    value: Uint8Array;
}
/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequestSDKType {
    denom: string;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponse {
    /** exchange_rate defines the exchange rate of whitelisted assets */
    exchangeRate: string;
}
export interface QueryExchangeRateResponseProtoMsg {
    typeUrl: "/kujira.oracle.QueryExchangeRateResponse";
    value: Uint8Array;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponseSDKType {
    exchange_rate: string;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequest {
}
export interface QueryExchangeRatesRequestProtoMsg {
    typeUrl: "/kujira.oracle.QueryExchangeRatesRequest";
    value: Uint8Array;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequestSDKType {
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponse {
    /** exchange_rates defines a list of the exchange rate for all whitelisted denoms. */
    exchangeRates: DecCoin[];
}
export interface QueryExchangeRatesResponseProtoMsg {
    typeUrl: "/kujira.oracle.QueryExchangeRatesResponse";
    value: Uint8Array;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponseSDKType {
    exchange_rates: DecCoinSDKType[];
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequest {
}
export interface QueryActivesRequestProtoMsg {
    typeUrl: "/kujira.oracle.QueryActivesRequest";
    value: Uint8Array;
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequestSDKType {
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponse {
    /** actives defines a list of the denomination which oracle prices aggreed upon. */
    actives: string[];
}
export interface QueryActivesResponseProtoMsg {
    typeUrl: "/kujira.oracle.QueryActivesResponse";
    value: Uint8Array;
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponseSDKType {
    actives: string[];
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequest {
}
export interface QueryVoteTargetsRequestProtoMsg {
    typeUrl: "/kujira.oracle.QueryVoteTargetsRequest";
    value: Uint8Array;
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequestSDKType {
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponse {
    /**
     * vote_targets defines a list of the denomination in which everyone
     * should vote in the current vote period.
     */
    voteTargets: string[];
}
export interface QueryVoteTargetsResponseProtoMsg {
    typeUrl: "/kujira.oracle.QueryVoteTargetsResponse";
    value: Uint8Array;
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponseSDKType {
    vote_targets: string[];
}
/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequest {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryFeederDelegationRequestProtoMsg {
    typeUrl: "/kujira.oracle.QueryFeederDelegationRequest";
    value: Uint8Array;
}
/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequestSDKType {
    validator_addr: string;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponse {
    /** feeder_addr defines the feeder delegation of a validator */
    feederAddr: string;
}
export interface QueryFeederDelegationResponseProtoMsg {
    typeUrl: "/kujira.oracle.QueryFeederDelegationResponse";
    value: Uint8Array;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseSDKType {
    feeder_addr: string;
}
/** QueryMissCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryMissCounterRequest {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryMissCounterRequestProtoMsg {
    typeUrl: "/kujira.oracle.QueryMissCounterRequest";
    value: Uint8Array;
}
/** QueryMissCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryMissCounterRequestSDKType {
    validator_addr: string;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponse {
    /** miss_counter defines the oracle miss counter of a validator */
    missCounter: bigint;
}
export interface QueryMissCounterResponseProtoMsg {
    typeUrl: "/kujira.oracle.QueryMissCounterResponse";
    value: Uint8Array;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponseSDKType {
    miss_counter: bigint;
}
/** QueryAggregatePrevoteRequest is the request type for the Query/AggregatePrevote RPC method. */
export interface QueryAggregatePrevoteRequest {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryAggregatePrevoteRequestProtoMsg {
    typeUrl: "/kujira.oracle.QueryAggregatePrevoteRequest";
    value: Uint8Array;
}
/** QueryAggregatePrevoteRequest is the request type for the Query/AggregatePrevote RPC method. */
export interface QueryAggregatePrevoteRequestSDKType {
    validator_addr: string;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponse {
    /** aggregate_prevote defines oracle aggregate prevote submitted by a validator in the current vote period */
    aggregatePrevote: AggregateExchangeRatePrevote;
}
export interface QueryAggregatePrevoteResponseProtoMsg {
    typeUrl: "/kujira.oracle.QueryAggregatePrevoteResponse";
    value: Uint8Array;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponseSDKType {
    aggregate_prevote: AggregateExchangeRatePrevoteSDKType;
}
/** QueryAggregatePrevotesRequest is the request type for the Query/AggregatePrevotes RPC method. */
export interface QueryAggregatePrevotesRequest {
}
export interface QueryAggregatePrevotesRequestProtoMsg {
    typeUrl: "/kujira.oracle.QueryAggregatePrevotesRequest";
    value: Uint8Array;
}
/** QueryAggregatePrevotesRequest is the request type for the Query/AggregatePrevotes RPC method. */
export interface QueryAggregatePrevotesRequestSDKType {
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponse {
    /** aggregate_prevotes defines all oracle aggregate prevotes submitted in the current vote period */
    aggregatePrevotes: AggregateExchangeRatePrevote[];
}
export interface QueryAggregatePrevotesResponseProtoMsg {
    typeUrl: "/kujira.oracle.QueryAggregatePrevotesResponse";
    value: Uint8Array;
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponseSDKType {
    aggregate_prevotes: AggregateExchangeRatePrevoteSDKType[];
}
/** QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC method. */
export interface QueryAggregateVoteRequest {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryAggregateVoteRequestProtoMsg {
    typeUrl: "/kujira.oracle.QueryAggregateVoteRequest";
    value: Uint8Array;
}
/** QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC method. */
export interface QueryAggregateVoteRequestSDKType {
    validator_addr: string;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponse {
    /** aggregate_vote defines oracle aggregate vote submitted by a validator in the current vote period */
    aggregateVote: AggregateExchangeRateVote;
}
export interface QueryAggregateVoteResponseProtoMsg {
    typeUrl: "/kujira.oracle.QueryAggregateVoteResponse";
    value: Uint8Array;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponseSDKType {
    aggregate_vote: AggregateExchangeRateVoteSDKType;
}
/** QueryAggregateVotesRequest is the request type for the Query/AggregateVotes RPC method. */
export interface QueryAggregateVotesRequest {
}
export interface QueryAggregateVotesRequestProtoMsg {
    typeUrl: "/kujira.oracle.QueryAggregateVotesRequest";
    value: Uint8Array;
}
/** QueryAggregateVotesRequest is the request type for the Query/AggregateVotes RPC method. */
export interface QueryAggregateVotesRequestSDKType {
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponse {
    /** aggregate_votes defines all oracle aggregate votes submitted in the current vote period */
    aggregateVotes: AggregateExchangeRateVote[];
}
export interface QueryAggregateVotesResponseProtoMsg {
    typeUrl: "/kujira.oracle.QueryAggregateVotesResponse";
    value: Uint8Array;
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponseSDKType {
    aggregate_votes: AggregateExchangeRateVoteSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/kujira.oracle.QueryParamsRequest";
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
    typeUrl: "/kujira.oracle.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryExchangeRateRequest: {
    typeUrl: string;
    is(o: any): o is QueryExchangeRateRequest;
    isSDK(o: any): o is QueryExchangeRateRequestSDKType;
    encode(message: QueryExchangeRateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRateRequest;
    fromPartial(object: Partial<QueryExchangeRateRequest>): QueryExchangeRateRequest;
    fromProtoMsg(message: QueryExchangeRateRequestProtoMsg): QueryExchangeRateRequest;
    toProto(message: QueryExchangeRateRequest): Uint8Array;
    toProtoMsg(message: QueryExchangeRateRequest): QueryExchangeRateRequestProtoMsg;
};
export declare const QueryExchangeRateResponse: {
    typeUrl: string;
    is(o: any): o is QueryExchangeRateResponse;
    isSDK(o: any): o is QueryExchangeRateResponseSDKType;
    encode(message: QueryExchangeRateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRateResponse;
    fromPartial(object: Partial<QueryExchangeRateResponse>): QueryExchangeRateResponse;
    fromProtoMsg(message: QueryExchangeRateResponseProtoMsg): QueryExchangeRateResponse;
    toProto(message: QueryExchangeRateResponse): Uint8Array;
    toProtoMsg(message: QueryExchangeRateResponse): QueryExchangeRateResponseProtoMsg;
};
export declare const QueryExchangeRatesRequest: {
    typeUrl: string;
    is(o: any): o is QueryExchangeRatesRequest;
    isSDK(o: any): o is QueryExchangeRatesRequestSDKType;
    encode(_: QueryExchangeRatesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRatesRequest;
    fromPartial(_: Partial<QueryExchangeRatesRequest>): QueryExchangeRatesRequest;
    fromProtoMsg(message: QueryExchangeRatesRequestProtoMsg): QueryExchangeRatesRequest;
    toProto(message: QueryExchangeRatesRequest): Uint8Array;
    toProtoMsg(message: QueryExchangeRatesRequest): QueryExchangeRatesRequestProtoMsg;
};
export declare const QueryExchangeRatesResponse: {
    typeUrl: string;
    is(o: any): o is QueryExchangeRatesResponse;
    isSDK(o: any): o is QueryExchangeRatesResponseSDKType;
    encode(message: QueryExchangeRatesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRatesResponse;
    fromPartial(object: Partial<QueryExchangeRatesResponse>): QueryExchangeRatesResponse;
    fromProtoMsg(message: QueryExchangeRatesResponseProtoMsg): QueryExchangeRatesResponse;
    toProto(message: QueryExchangeRatesResponse): Uint8Array;
    toProtoMsg(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseProtoMsg;
};
export declare const QueryActivesRequest: {
    typeUrl: string;
    is(o: any): o is QueryActivesRequest;
    isSDK(o: any): o is QueryActivesRequestSDKType;
    encode(_: QueryActivesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryActivesRequest;
    fromPartial(_: Partial<QueryActivesRequest>): QueryActivesRequest;
    fromProtoMsg(message: QueryActivesRequestProtoMsg): QueryActivesRequest;
    toProto(message: QueryActivesRequest): Uint8Array;
    toProtoMsg(message: QueryActivesRequest): QueryActivesRequestProtoMsg;
};
export declare const QueryActivesResponse: {
    typeUrl: string;
    is(o: any): o is QueryActivesResponse;
    isSDK(o: any): o is QueryActivesResponseSDKType;
    encode(message: QueryActivesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryActivesResponse;
    fromPartial(object: Partial<QueryActivesResponse>): QueryActivesResponse;
    fromProtoMsg(message: QueryActivesResponseProtoMsg): QueryActivesResponse;
    toProto(message: QueryActivesResponse): Uint8Array;
    toProtoMsg(message: QueryActivesResponse): QueryActivesResponseProtoMsg;
};
export declare const QueryVoteTargetsRequest: {
    typeUrl: string;
    is(o: any): o is QueryVoteTargetsRequest;
    isSDK(o: any): o is QueryVoteTargetsRequestSDKType;
    encode(_: QueryVoteTargetsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteTargetsRequest;
    fromPartial(_: Partial<QueryVoteTargetsRequest>): QueryVoteTargetsRequest;
    fromProtoMsg(message: QueryVoteTargetsRequestProtoMsg): QueryVoteTargetsRequest;
    toProto(message: QueryVoteTargetsRequest): Uint8Array;
    toProtoMsg(message: QueryVoteTargetsRequest): QueryVoteTargetsRequestProtoMsg;
};
export declare const QueryVoteTargetsResponse: {
    typeUrl: string;
    is(o: any): o is QueryVoteTargetsResponse;
    isSDK(o: any): o is QueryVoteTargetsResponseSDKType;
    encode(message: QueryVoteTargetsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteTargetsResponse;
    fromPartial(object: Partial<QueryVoteTargetsResponse>): QueryVoteTargetsResponse;
    fromProtoMsg(message: QueryVoteTargetsResponseProtoMsg): QueryVoteTargetsResponse;
    toProto(message: QueryVoteTargetsResponse): Uint8Array;
    toProtoMsg(message: QueryVoteTargetsResponse): QueryVoteTargetsResponseProtoMsg;
};
export declare const QueryFeederDelegationRequest: {
    typeUrl: string;
    is(o: any): o is QueryFeederDelegationRequest;
    isSDK(o: any): o is QueryFeederDelegationRequestSDKType;
    encode(message: QueryFeederDelegationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeederDelegationRequest;
    fromPartial(object: Partial<QueryFeederDelegationRequest>): QueryFeederDelegationRequest;
    fromProtoMsg(message: QueryFeederDelegationRequestProtoMsg): QueryFeederDelegationRequest;
    toProto(message: QueryFeederDelegationRequest): Uint8Array;
    toProtoMsg(message: QueryFeederDelegationRequest): QueryFeederDelegationRequestProtoMsg;
};
export declare const QueryFeederDelegationResponse: {
    typeUrl: string;
    is(o: any): o is QueryFeederDelegationResponse;
    isSDK(o: any): o is QueryFeederDelegationResponseSDKType;
    encode(message: QueryFeederDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeederDelegationResponse;
    fromPartial(object: Partial<QueryFeederDelegationResponse>): QueryFeederDelegationResponse;
    fromProtoMsg(message: QueryFeederDelegationResponseProtoMsg): QueryFeederDelegationResponse;
    toProto(message: QueryFeederDelegationResponse): Uint8Array;
    toProtoMsg(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseProtoMsg;
};
export declare const QueryMissCounterRequest: {
    typeUrl: string;
    is(o: any): o is QueryMissCounterRequest;
    isSDK(o: any): o is QueryMissCounterRequestSDKType;
    encode(message: QueryMissCounterRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMissCounterRequest;
    fromPartial(object: Partial<QueryMissCounterRequest>): QueryMissCounterRequest;
    fromProtoMsg(message: QueryMissCounterRequestProtoMsg): QueryMissCounterRequest;
    toProto(message: QueryMissCounterRequest): Uint8Array;
    toProtoMsg(message: QueryMissCounterRequest): QueryMissCounterRequestProtoMsg;
};
export declare const QueryMissCounterResponse: {
    typeUrl: string;
    is(o: any): o is QueryMissCounterResponse;
    isSDK(o: any): o is QueryMissCounterResponseSDKType;
    encode(message: QueryMissCounterResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMissCounterResponse;
    fromPartial(object: Partial<QueryMissCounterResponse>): QueryMissCounterResponse;
    fromProtoMsg(message: QueryMissCounterResponseProtoMsg): QueryMissCounterResponse;
    toProto(message: QueryMissCounterResponse): Uint8Array;
    toProtoMsg(message: QueryMissCounterResponse): QueryMissCounterResponseProtoMsg;
};
export declare const QueryAggregatePrevoteRequest: {
    typeUrl: string;
    is(o: any): o is QueryAggregatePrevoteRequest;
    isSDK(o: any): o is QueryAggregatePrevoteRequestSDKType;
    encode(message: QueryAggregatePrevoteRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevoteRequest;
    fromPartial(object: Partial<QueryAggregatePrevoteRequest>): QueryAggregatePrevoteRequest;
    fromProtoMsg(message: QueryAggregatePrevoteRequestProtoMsg): QueryAggregatePrevoteRequest;
    toProto(message: QueryAggregatePrevoteRequest): Uint8Array;
    toProtoMsg(message: QueryAggregatePrevoteRequest): QueryAggregatePrevoteRequestProtoMsg;
};
export declare const QueryAggregatePrevoteResponse: {
    typeUrl: string;
    is(o: any): o is QueryAggregatePrevoteResponse;
    isSDK(o: any): o is QueryAggregatePrevoteResponseSDKType;
    encode(message: QueryAggregatePrevoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevoteResponse;
    fromPartial(object: Partial<QueryAggregatePrevoteResponse>): QueryAggregatePrevoteResponse;
    fromProtoMsg(message: QueryAggregatePrevoteResponseProtoMsg): QueryAggregatePrevoteResponse;
    toProto(message: QueryAggregatePrevoteResponse): Uint8Array;
    toProtoMsg(message: QueryAggregatePrevoteResponse): QueryAggregatePrevoteResponseProtoMsg;
};
export declare const QueryAggregatePrevotesRequest: {
    typeUrl: string;
    is(o: any): o is QueryAggregatePrevotesRequest;
    isSDK(o: any): o is QueryAggregatePrevotesRequestSDKType;
    encode(_: QueryAggregatePrevotesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevotesRequest;
    fromPartial(_: Partial<QueryAggregatePrevotesRequest>): QueryAggregatePrevotesRequest;
    fromProtoMsg(message: QueryAggregatePrevotesRequestProtoMsg): QueryAggregatePrevotesRequest;
    toProto(message: QueryAggregatePrevotesRequest): Uint8Array;
    toProtoMsg(message: QueryAggregatePrevotesRequest): QueryAggregatePrevotesRequestProtoMsg;
};
export declare const QueryAggregatePrevotesResponse: {
    typeUrl: string;
    is(o: any): o is QueryAggregatePrevotesResponse;
    isSDK(o: any): o is QueryAggregatePrevotesResponseSDKType;
    encode(message: QueryAggregatePrevotesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevotesResponse;
    fromPartial(object: Partial<QueryAggregatePrevotesResponse>): QueryAggregatePrevotesResponse;
    fromProtoMsg(message: QueryAggregatePrevotesResponseProtoMsg): QueryAggregatePrevotesResponse;
    toProto(message: QueryAggregatePrevotesResponse): Uint8Array;
    toProtoMsg(message: QueryAggregatePrevotesResponse): QueryAggregatePrevotesResponseProtoMsg;
};
export declare const QueryAggregateVoteRequest: {
    typeUrl: string;
    is(o: any): o is QueryAggregateVoteRequest;
    isSDK(o: any): o is QueryAggregateVoteRequestSDKType;
    encode(message: QueryAggregateVoteRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVoteRequest;
    fromPartial(object: Partial<QueryAggregateVoteRequest>): QueryAggregateVoteRequest;
    fromProtoMsg(message: QueryAggregateVoteRequestProtoMsg): QueryAggregateVoteRequest;
    toProto(message: QueryAggregateVoteRequest): Uint8Array;
    toProtoMsg(message: QueryAggregateVoteRequest): QueryAggregateVoteRequestProtoMsg;
};
export declare const QueryAggregateVoteResponse: {
    typeUrl: string;
    is(o: any): o is QueryAggregateVoteResponse;
    isSDK(o: any): o is QueryAggregateVoteResponseSDKType;
    encode(message: QueryAggregateVoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVoteResponse;
    fromPartial(object: Partial<QueryAggregateVoteResponse>): QueryAggregateVoteResponse;
    fromProtoMsg(message: QueryAggregateVoteResponseProtoMsg): QueryAggregateVoteResponse;
    toProto(message: QueryAggregateVoteResponse): Uint8Array;
    toProtoMsg(message: QueryAggregateVoteResponse): QueryAggregateVoteResponseProtoMsg;
};
export declare const QueryAggregateVotesRequest: {
    typeUrl: string;
    is(o: any): o is QueryAggregateVotesRequest;
    isSDK(o: any): o is QueryAggregateVotesRequestSDKType;
    encode(_: QueryAggregateVotesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVotesRequest;
    fromPartial(_: Partial<QueryAggregateVotesRequest>): QueryAggregateVotesRequest;
    fromProtoMsg(message: QueryAggregateVotesRequestProtoMsg): QueryAggregateVotesRequest;
    toProto(message: QueryAggregateVotesRequest): Uint8Array;
    toProtoMsg(message: QueryAggregateVotesRequest): QueryAggregateVotesRequestProtoMsg;
};
export declare const QueryAggregateVotesResponse: {
    typeUrl: string;
    is(o: any): o is QueryAggregateVotesResponse;
    isSDK(o: any): o is QueryAggregateVotesResponseSDKType;
    encode(message: QueryAggregateVotesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVotesResponse;
    fromPartial(object: Partial<QueryAggregateVotesResponse>): QueryAggregateVotesResponse;
    fromProtoMsg(message: QueryAggregateVotesResponseProtoMsg): QueryAggregateVotesResponse;
    toProto(message: QueryAggregateVotesResponse): Uint8Array;
    toProtoMsg(message: QueryAggregateVotesResponse): QueryAggregateVotesResponseProtoMsg;
};
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
