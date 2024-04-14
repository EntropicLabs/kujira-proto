import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryExchangeRateRequest, QueryExchangeRateResponse, QueryExchangeRatesRequest, QueryExchangeRatesResponse, QueryActivesRequest, QueryActivesResponse, QueryFeederDelegationRequest, QueryFeederDelegationResponse, QueryMissCounterRequest, QueryMissCounterResponse, QueryAggregatePrevoteRequest, QueryAggregatePrevoteResponse, QueryAggregatePrevotesRequest, QueryAggregatePrevotesResponse, QueryAggregateVoteRequest, QueryAggregateVoteResponse, QueryAggregateVotesRequest, QueryAggregateVotesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.exchangeRate = this.exchangeRate.bind(this);
        this.exchangeRates = this.exchangeRates.bind(this);
        this.actives = this.actives.bind(this);
        this.feederDelegation = this.feederDelegation.bind(this);
        this.missCounter = this.missCounter.bind(this);
        this.aggregatePrevote = this.aggregatePrevote.bind(this);
        this.aggregatePrevotes = this.aggregatePrevotes.bind(this);
        this.aggregateVote = this.aggregateVote.bind(this);
        this.aggregateVotes = this.aggregateVotes.bind(this);
        this.params = this.params.bind(this);
    }
    exchangeRate(request) {
        const data = QueryExchangeRateRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "ExchangeRate", data);
        return promise.then(data => QueryExchangeRateResponse.decode(new BinaryReader(data)));
    }
    exchangeRates(request = {}) {
        const data = QueryExchangeRatesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "ExchangeRates", data);
        return promise.then(data => QueryExchangeRatesResponse.decode(new BinaryReader(data)));
    }
    actives(request = {}) {
        const data = QueryActivesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "Actives", data);
        return promise.then(data => QueryActivesResponse.decode(new BinaryReader(data)));
    }
    feederDelegation(request) {
        const data = QueryFeederDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "FeederDelegation", data);
        return promise.then(data => QueryFeederDelegationResponse.decode(new BinaryReader(data)));
    }
    missCounter(request) {
        const data = QueryMissCounterRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "MissCounter", data);
        return promise.then(data => QueryMissCounterResponse.decode(new BinaryReader(data)));
    }
    aggregatePrevote(request) {
        const data = QueryAggregatePrevoteRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregatePrevote", data);
        return promise.then(data => QueryAggregatePrevoteResponse.decode(new BinaryReader(data)));
    }
    aggregatePrevotes(request = {}) {
        const data = QueryAggregatePrevotesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregatePrevotes", data);
        return promise.then(data => QueryAggregatePrevotesResponse.decode(new BinaryReader(data)));
    }
    aggregateVote(request) {
        const data = QueryAggregateVoteRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregateVote", data);
        return promise.then(data => QueryAggregateVoteResponse.decode(new BinaryReader(data)));
    }
    aggregateVotes(request = {}) {
        const data = QueryAggregateVotesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregateVotes", data);
        return promise.then(data => QueryAggregateVotesResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        exchangeRate(request) {
            return queryService.exchangeRate(request);
        },
        exchangeRates(request) {
            return queryService.exchangeRates(request);
        },
        actives(request) {
            return queryService.actives(request);
        },
        feederDelegation(request) {
            return queryService.feederDelegation(request);
        },
        missCounter(request) {
            return queryService.missCounter(request);
        },
        aggregatePrevote(request) {
            return queryService.aggregatePrevote(request);
        },
        aggregatePrevotes(request) {
            return queryService.aggregatePrevotes(request);
        },
        aggregateVote(request) {
            return queryService.aggregateVote(request);
        },
        aggregateVotes(request) {
            return queryService.aggregateVotes(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map