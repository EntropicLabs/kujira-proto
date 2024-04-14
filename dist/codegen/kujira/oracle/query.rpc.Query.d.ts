import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryExchangeRateRequest, QueryExchangeRateResponse, QueryExchangeRatesRequest, QueryExchangeRatesResponse, QueryActivesRequest, QueryActivesResponse, QueryFeederDelegationRequest, QueryFeederDelegationResponse, QueryMissCounterRequest, QueryMissCounterResponse, QueryAggregatePrevoteRequest, QueryAggregatePrevoteResponse, QueryAggregatePrevotesRequest, QueryAggregatePrevotesResponse, QueryAggregateVoteRequest, QueryAggregateVoteResponse, QueryAggregateVotesRequest, QueryAggregateVotesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** ExchangeRate returns exchange rate of a denom */
    exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
    /** ExchangeRates returns exchange rates of all denoms */
    exchangeRates(request?: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponse>;
    /** Actives returns all active denoms */
    actives(request?: QueryActivesRequest): Promise<QueryActivesResponse>;
    /** FeederDelegation returns feeder delegation of a validator */
    feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse>;
    /** MissCounter returns oracle miss counter of a validator */
    missCounter(request: QueryMissCounterRequest): Promise<QueryMissCounterResponse>;
    /** AggregatePrevote returns an aggregate prevote of a validator */
    aggregatePrevote(request: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponse>;
    /** AggregatePrevotes returns aggregate prevotes of all validators */
    aggregatePrevotes(request?: QueryAggregatePrevotesRequest): Promise<QueryAggregatePrevotesResponse>;
    /** AggregateVote returns an aggregate vote of a validator */
    aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse>;
    /** AggregateVotes returns aggregate votes of all validators */
    aggregateVotes(request?: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponse>;
    /** Params queries all parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
    exchangeRates(request?: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponse>;
    actives(request?: QueryActivesRequest): Promise<QueryActivesResponse>;
    feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse>;
    missCounter(request: QueryMissCounterRequest): Promise<QueryMissCounterResponse>;
    aggregatePrevote(request: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponse>;
    aggregatePrevotes(request?: QueryAggregatePrevotesRequest): Promise<QueryAggregatePrevotesResponse>;
    aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse>;
    aggregateVotes(request?: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
    exchangeRates(request?: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponse>;
    actives(request?: QueryActivesRequest): Promise<QueryActivesResponse>;
    feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse>;
    missCounter(request: QueryMissCounterRequest): Promise<QueryMissCounterResponse>;
    aggregatePrevote(request: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponse>;
    aggregatePrevotes(request?: QueryAggregatePrevotesRequest): Promise<QueryAggregatePrevotesResponse>;
    aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse>;
    aggregateVotes(request?: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
