import { DecCoin, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteSDKType, Params, ParamsSDKType } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { Decimal } from "@cosmjs/math";
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
export interface QueryExchangeRatesRequest {}
export interface QueryExchangeRatesRequestProtoMsg {
  typeUrl: "/kujira.oracle.QueryExchangeRatesRequest";
  value: Uint8Array;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequestSDKType {}
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
export interface QueryActivesRequest {}
export interface QueryActivesRequestProtoMsg {
  typeUrl: "/kujira.oracle.QueryActivesRequest";
  value: Uint8Array;
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequestSDKType {}
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
export interface QueryVoteTargetsRequest {}
export interface QueryVoteTargetsRequestProtoMsg {
  typeUrl: "/kujira.oracle.QueryVoteTargetsRequest";
  value: Uint8Array;
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequestSDKType {}
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
export interface QueryAggregatePrevotesRequest {}
export interface QueryAggregatePrevotesRequestProtoMsg {
  typeUrl: "/kujira.oracle.QueryAggregatePrevotesRequest";
  value: Uint8Array;
}
/** QueryAggregatePrevotesRequest is the request type for the Query/AggregatePrevotes RPC method. */
export interface QueryAggregatePrevotesRequestSDKType {}
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
export interface QueryAggregateVotesRequest {}
export interface QueryAggregateVotesRequestProtoMsg {
  typeUrl: "/kujira.oracle.QueryAggregateVotesRequest";
  value: Uint8Array;
}
/** QueryAggregateVotesRequest is the request type for the Query/AggregateVotes RPC method. */
export interface QueryAggregateVotesRequestSDKType {}
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
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/kujira.oracle.QueryParamsRequest";
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
  typeUrl: "/kujira.oracle.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryExchangeRateRequest(): QueryExchangeRateRequest {
  return {
    denom: ""
  };
}
export const QueryExchangeRateRequest = {
  typeUrl: "/kujira.oracle.QueryExchangeRateRequest",
  is(o: any): o is QueryExchangeRateRequest {
    return o && (o.$typeUrl === QueryExchangeRateRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryExchangeRateRequestSDKType {
    return o && (o.$typeUrl === QueryExchangeRateRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryExchangeRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryExchangeRateRequest>): QueryExchangeRateRequest {
    const message = createBaseQueryExchangeRateRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromProtoMsg(message: QueryExchangeRateRequestProtoMsg): QueryExchangeRateRequest {
    return QueryExchangeRateRequest.decode(message.value);
  },
  toProto(message: QueryExchangeRateRequest): Uint8Array {
    return QueryExchangeRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRateRequest): QueryExchangeRateRequestProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryExchangeRateRequest",
      value: QueryExchangeRateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryExchangeRateRequest.typeUrl, QueryExchangeRateRequest);
function createBaseQueryExchangeRateResponse(): QueryExchangeRateResponse {
  return {
    exchangeRate: ""
  };
}
export const QueryExchangeRateResponse = {
  typeUrl: "/kujira.oracle.QueryExchangeRateResponse",
  is(o: any): o is QueryExchangeRateResponse {
    return o && (o.$typeUrl === QueryExchangeRateResponse.typeUrl || typeof o.exchangeRate === "string");
  },
  isSDK(o: any): o is QueryExchangeRateResponseSDKType {
    return o && (o.$typeUrl === QueryExchangeRateResponse.typeUrl || typeof o.exchange_rate === "string");
  },
  encode(message: QueryExchangeRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exchangeRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryExchangeRateResponse>): QueryExchangeRateResponse {
    const message = createBaseQueryExchangeRateResponse();
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  },
  fromProtoMsg(message: QueryExchangeRateResponseProtoMsg): QueryExchangeRateResponse {
    return QueryExchangeRateResponse.decode(message.value);
  },
  toProto(message: QueryExchangeRateResponse): Uint8Array {
    return QueryExchangeRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRateResponse): QueryExchangeRateResponseProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryExchangeRateResponse",
      value: QueryExchangeRateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryExchangeRateResponse.typeUrl, QueryExchangeRateResponse);
function createBaseQueryExchangeRatesRequest(): QueryExchangeRatesRequest {
  return {};
}
export const QueryExchangeRatesRequest = {
  typeUrl: "/kujira.oracle.QueryExchangeRatesRequest",
  is(o: any): o is QueryExchangeRatesRequest {
    return o && o.$typeUrl === QueryExchangeRatesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryExchangeRatesRequestSDKType {
    return o && o.$typeUrl === QueryExchangeRatesRequest.typeUrl;
  },
  encode(_: QueryExchangeRatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRatesRequest();
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
  fromPartial(_: Partial<QueryExchangeRatesRequest>): QueryExchangeRatesRequest {
    const message = createBaseQueryExchangeRatesRequest();
    return message;
  },
  fromProtoMsg(message: QueryExchangeRatesRequestProtoMsg): QueryExchangeRatesRequest {
    return QueryExchangeRatesRequest.decode(message.value);
  },
  toProto(message: QueryExchangeRatesRequest): Uint8Array {
    return QueryExchangeRatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRatesRequest): QueryExchangeRatesRequestProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryExchangeRatesRequest",
      value: QueryExchangeRatesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryExchangeRatesRequest.typeUrl, QueryExchangeRatesRequest);
function createBaseQueryExchangeRatesResponse(): QueryExchangeRatesResponse {
  return {
    exchangeRates: []
  };
}
export const QueryExchangeRatesResponse = {
  typeUrl: "/kujira.oracle.QueryExchangeRatesResponse",
  is(o: any): o is QueryExchangeRatesResponse {
    return o && (o.$typeUrl === QueryExchangeRatesResponse.typeUrl || Array.isArray(o.exchangeRates) && (!o.exchangeRates.length || DecCoin.is(o.exchangeRates[0])));
  },
  isSDK(o: any): o is QueryExchangeRatesResponseSDKType {
    return o && (o.$typeUrl === QueryExchangeRatesResponse.typeUrl || Array.isArray(o.exchange_rates) && (!o.exchange_rates.length || DecCoin.isSDK(o.exchange_rates[0])));
  },
  encode(message: QueryExchangeRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.exchangeRates) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRates.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryExchangeRatesResponse>): QueryExchangeRatesResponse {
    const message = createBaseQueryExchangeRatesResponse();
    message.exchangeRates = object.exchangeRates?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: QueryExchangeRatesResponseProtoMsg): QueryExchangeRatesResponse {
    return QueryExchangeRatesResponse.decode(message.value);
  },
  toProto(message: QueryExchangeRatesResponse): Uint8Array {
    return QueryExchangeRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryExchangeRatesResponse",
      value: QueryExchangeRatesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryExchangeRatesResponse.typeUrl, QueryExchangeRatesResponse);
function createBaseQueryActivesRequest(): QueryActivesRequest {
  return {};
}
export const QueryActivesRequest = {
  typeUrl: "/kujira.oracle.QueryActivesRequest",
  is(o: any): o is QueryActivesRequest {
    return o && o.$typeUrl === QueryActivesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryActivesRequestSDKType {
    return o && o.$typeUrl === QueryActivesRequest.typeUrl;
  },
  encode(_: QueryActivesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActivesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActivesRequest();
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
  fromPartial(_: Partial<QueryActivesRequest>): QueryActivesRequest {
    const message = createBaseQueryActivesRequest();
    return message;
  },
  fromProtoMsg(message: QueryActivesRequestProtoMsg): QueryActivesRequest {
    return QueryActivesRequest.decode(message.value);
  },
  toProto(message: QueryActivesRequest): Uint8Array {
    return QueryActivesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActivesRequest): QueryActivesRequestProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryActivesRequest",
      value: QueryActivesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryActivesRequest.typeUrl, QueryActivesRequest);
function createBaseQueryActivesResponse(): QueryActivesResponse {
  return {
    actives: []
  };
}
export const QueryActivesResponse = {
  typeUrl: "/kujira.oracle.QueryActivesResponse",
  is(o: any): o is QueryActivesResponse {
    return o && (o.$typeUrl === QueryActivesResponse.typeUrl || Array.isArray(o.actives) && (!o.actives.length || typeof o.actives[0] === "string"));
  },
  isSDK(o: any): o is QueryActivesResponseSDKType {
    return o && (o.$typeUrl === QueryActivesResponse.typeUrl || Array.isArray(o.actives) && (!o.actives.length || typeof o.actives[0] === "string"));
  },
  encode(message: QueryActivesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.actives) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActivesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actives.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryActivesResponse>): QueryActivesResponse {
    const message = createBaseQueryActivesResponse();
    message.actives = object.actives?.map(e => e) || [];
    return message;
  },
  fromProtoMsg(message: QueryActivesResponseProtoMsg): QueryActivesResponse {
    return QueryActivesResponse.decode(message.value);
  },
  toProto(message: QueryActivesResponse): Uint8Array {
    return QueryActivesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActivesResponse): QueryActivesResponseProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryActivesResponse",
      value: QueryActivesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryActivesResponse.typeUrl, QueryActivesResponse);
function createBaseQueryVoteTargetsRequest(): QueryVoteTargetsRequest {
  return {};
}
export const QueryVoteTargetsRequest = {
  typeUrl: "/kujira.oracle.QueryVoteTargetsRequest",
  is(o: any): o is QueryVoteTargetsRequest {
    return o && o.$typeUrl === QueryVoteTargetsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryVoteTargetsRequestSDKType {
    return o && o.$typeUrl === QueryVoteTargetsRequest.typeUrl;
  },
  encode(_: QueryVoteTargetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteTargetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteTargetsRequest();
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
  fromPartial(_: Partial<QueryVoteTargetsRequest>): QueryVoteTargetsRequest {
    const message = createBaseQueryVoteTargetsRequest();
    return message;
  },
  fromProtoMsg(message: QueryVoteTargetsRequestProtoMsg): QueryVoteTargetsRequest {
    return QueryVoteTargetsRequest.decode(message.value);
  },
  toProto(message: QueryVoteTargetsRequest): Uint8Array {
    return QueryVoteTargetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteTargetsRequest): QueryVoteTargetsRequestProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryVoteTargetsRequest",
      value: QueryVoteTargetsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVoteTargetsRequest.typeUrl, QueryVoteTargetsRequest);
function createBaseQueryVoteTargetsResponse(): QueryVoteTargetsResponse {
  return {
    voteTargets: []
  };
}
export const QueryVoteTargetsResponse = {
  typeUrl: "/kujira.oracle.QueryVoteTargetsResponse",
  is(o: any): o is QueryVoteTargetsResponse {
    return o && (o.$typeUrl === QueryVoteTargetsResponse.typeUrl || Array.isArray(o.voteTargets) && (!o.voteTargets.length || typeof o.voteTargets[0] === "string"));
  },
  isSDK(o: any): o is QueryVoteTargetsResponseSDKType {
    return o && (o.$typeUrl === QueryVoteTargetsResponse.typeUrl || Array.isArray(o.vote_targets) && (!o.vote_targets.length || typeof o.vote_targets[0] === "string"));
  },
  encode(message: QueryVoteTargetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.voteTargets) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteTargetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteTargetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteTargets.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVoteTargetsResponse>): QueryVoteTargetsResponse {
    const message = createBaseQueryVoteTargetsResponse();
    message.voteTargets = object.voteTargets?.map(e => e) || [];
    return message;
  },
  fromProtoMsg(message: QueryVoteTargetsResponseProtoMsg): QueryVoteTargetsResponse {
    return QueryVoteTargetsResponse.decode(message.value);
  },
  toProto(message: QueryVoteTargetsResponse): Uint8Array {
    return QueryVoteTargetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteTargetsResponse): QueryVoteTargetsResponseProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryVoteTargetsResponse",
      value: QueryVoteTargetsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVoteTargetsResponse.typeUrl, QueryVoteTargetsResponse);
function createBaseQueryFeederDelegationRequest(): QueryFeederDelegationRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryFeederDelegationRequest = {
  typeUrl: "/kujira.oracle.QueryFeederDelegationRequest",
  is(o: any): o is QueryFeederDelegationRequest {
    return o && (o.$typeUrl === QueryFeederDelegationRequest.typeUrl || typeof o.validatorAddr === "string");
  },
  isSDK(o: any): o is QueryFeederDelegationRequestSDKType {
    return o && (o.$typeUrl === QueryFeederDelegationRequest.typeUrl || typeof o.validator_addr === "string");
  },
  encode(message: QueryFeederDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeederDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeederDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeederDelegationRequest>): QueryFeederDelegationRequest {
    const message = createBaseQueryFeederDelegationRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromProtoMsg(message: QueryFeederDelegationRequestProtoMsg): QueryFeederDelegationRequest {
    return QueryFeederDelegationRequest.decode(message.value);
  },
  toProto(message: QueryFeederDelegationRequest): Uint8Array {
    return QueryFeederDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeederDelegationRequest): QueryFeederDelegationRequestProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryFeederDelegationRequest",
      value: QueryFeederDelegationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFeederDelegationRequest.typeUrl, QueryFeederDelegationRequest);
function createBaseQueryFeederDelegationResponse(): QueryFeederDelegationResponse {
  return {
    feederAddr: ""
  };
}
export const QueryFeederDelegationResponse = {
  typeUrl: "/kujira.oracle.QueryFeederDelegationResponse",
  is(o: any): o is QueryFeederDelegationResponse {
    return o && (o.$typeUrl === QueryFeederDelegationResponse.typeUrl || typeof o.feederAddr === "string");
  },
  isSDK(o: any): o is QueryFeederDelegationResponseSDKType {
    return o && (o.$typeUrl === QueryFeederDelegationResponse.typeUrl || typeof o.feeder_addr === "string");
  },
  encode(message: QueryFeederDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feederAddr !== "") {
      writer.uint32(10).string(message.feederAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeederDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeederDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feederAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeederDelegationResponse>): QueryFeederDelegationResponse {
    const message = createBaseQueryFeederDelegationResponse();
    message.feederAddr = object.feederAddr ?? "";
    return message;
  },
  fromProtoMsg(message: QueryFeederDelegationResponseProtoMsg): QueryFeederDelegationResponse {
    return QueryFeederDelegationResponse.decode(message.value);
  },
  toProto(message: QueryFeederDelegationResponse): Uint8Array {
    return QueryFeederDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryFeederDelegationResponse",
      value: QueryFeederDelegationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFeederDelegationResponse.typeUrl, QueryFeederDelegationResponse);
function createBaseQueryMissCounterRequest(): QueryMissCounterRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryMissCounterRequest = {
  typeUrl: "/kujira.oracle.QueryMissCounterRequest",
  is(o: any): o is QueryMissCounterRequest {
    return o && (o.$typeUrl === QueryMissCounterRequest.typeUrl || typeof o.validatorAddr === "string");
  },
  isSDK(o: any): o is QueryMissCounterRequestSDKType {
    return o && (o.$typeUrl === QueryMissCounterRequest.typeUrl || typeof o.validator_addr === "string");
  },
  encode(message: QueryMissCounterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMissCounterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMissCounterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMissCounterRequest>): QueryMissCounterRequest {
    const message = createBaseQueryMissCounterRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromProtoMsg(message: QueryMissCounterRequestProtoMsg): QueryMissCounterRequest {
    return QueryMissCounterRequest.decode(message.value);
  },
  toProto(message: QueryMissCounterRequest): Uint8Array {
    return QueryMissCounterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMissCounterRequest): QueryMissCounterRequestProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryMissCounterRequest",
      value: QueryMissCounterRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMissCounterRequest.typeUrl, QueryMissCounterRequest);
function createBaseQueryMissCounterResponse(): QueryMissCounterResponse {
  return {
    missCounter: BigInt(0)
  };
}
export const QueryMissCounterResponse = {
  typeUrl: "/kujira.oracle.QueryMissCounterResponse",
  is(o: any): o is QueryMissCounterResponse {
    return o && (o.$typeUrl === QueryMissCounterResponse.typeUrl || typeof o.missCounter === "bigint");
  },
  isSDK(o: any): o is QueryMissCounterResponseSDKType {
    return o && (o.$typeUrl === QueryMissCounterResponse.typeUrl || typeof o.miss_counter === "bigint");
  },
  encode(message: QueryMissCounterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.missCounter !== BigInt(0)) {
      writer.uint32(8).uint64(message.missCounter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMissCounterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMissCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.missCounter = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMissCounterResponse>): QueryMissCounterResponse {
    const message = createBaseQueryMissCounterResponse();
    message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? BigInt(object.missCounter.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: QueryMissCounterResponseProtoMsg): QueryMissCounterResponse {
    return QueryMissCounterResponse.decode(message.value);
  },
  toProto(message: QueryMissCounterResponse): Uint8Array {
    return QueryMissCounterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMissCounterResponse): QueryMissCounterResponseProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryMissCounterResponse",
      value: QueryMissCounterResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMissCounterResponse.typeUrl, QueryMissCounterResponse);
function createBaseQueryAggregatePrevoteRequest(): QueryAggregatePrevoteRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryAggregatePrevoteRequest = {
  typeUrl: "/kujira.oracle.QueryAggregatePrevoteRequest",
  is(o: any): o is QueryAggregatePrevoteRequest {
    return o && (o.$typeUrl === QueryAggregatePrevoteRequest.typeUrl || typeof o.validatorAddr === "string");
  },
  isSDK(o: any): o is QueryAggregatePrevoteRequestSDKType {
    return o && (o.$typeUrl === QueryAggregatePrevoteRequest.typeUrl || typeof o.validator_addr === "string");
  },
  encode(message: QueryAggregatePrevoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevoteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatePrevoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAggregatePrevoteRequest>): QueryAggregatePrevoteRequest {
    const message = createBaseQueryAggregatePrevoteRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromProtoMsg(message: QueryAggregatePrevoteRequestProtoMsg): QueryAggregatePrevoteRequest {
    return QueryAggregatePrevoteRequest.decode(message.value);
  },
  toProto(message: QueryAggregatePrevoteRequest): Uint8Array {
    return QueryAggregatePrevoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatePrevoteRequest): QueryAggregatePrevoteRequestProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryAggregatePrevoteRequest",
      value: QueryAggregatePrevoteRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAggregatePrevoteRequest.typeUrl, QueryAggregatePrevoteRequest);
function createBaseQueryAggregatePrevoteResponse(): QueryAggregatePrevoteResponse {
  return {
    aggregatePrevote: AggregateExchangeRatePrevote.fromPartial({})
  };
}
export const QueryAggregatePrevoteResponse = {
  typeUrl: "/kujira.oracle.QueryAggregatePrevoteResponse",
  is(o: any): o is QueryAggregatePrevoteResponse {
    return o && (o.$typeUrl === QueryAggregatePrevoteResponse.typeUrl || AggregateExchangeRatePrevote.is(o.aggregatePrevote));
  },
  isSDK(o: any): o is QueryAggregatePrevoteResponseSDKType {
    return o && (o.$typeUrl === QueryAggregatePrevoteResponse.typeUrl || AggregateExchangeRatePrevote.isSDK(o.aggregate_prevote));
  },
  encode(message: QueryAggregatePrevoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.aggregatePrevote !== undefined) {
      AggregateExchangeRatePrevote.encode(message.aggregatePrevote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatePrevoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregatePrevote = AggregateExchangeRatePrevote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAggregatePrevoteResponse>): QueryAggregatePrevoteResponse {
    const message = createBaseQueryAggregatePrevoteResponse();
    message.aggregatePrevote = object.aggregatePrevote !== undefined && object.aggregatePrevote !== null ? AggregateExchangeRatePrevote.fromPartial(object.aggregatePrevote) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryAggregatePrevoteResponseProtoMsg): QueryAggregatePrevoteResponse {
    return QueryAggregatePrevoteResponse.decode(message.value);
  },
  toProto(message: QueryAggregatePrevoteResponse): Uint8Array {
    return QueryAggregatePrevoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatePrevoteResponse): QueryAggregatePrevoteResponseProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryAggregatePrevoteResponse",
      value: QueryAggregatePrevoteResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAggregatePrevoteResponse.typeUrl, QueryAggregatePrevoteResponse);
function createBaseQueryAggregatePrevotesRequest(): QueryAggregatePrevotesRequest {
  return {};
}
export const QueryAggregatePrevotesRequest = {
  typeUrl: "/kujira.oracle.QueryAggregatePrevotesRequest",
  is(o: any): o is QueryAggregatePrevotesRequest {
    return o && o.$typeUrl === QueryAggregatePrevotesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAggregatePrevotesRequestSDKType {
    return o && o.$typeUrl === QueryAggregatePrevotesRequest.typeUrl;
  },
  encode(_: QueryAggregatePrevotesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevotesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatePrevotesRequest();
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
  fromPartial(_: Partial<QueryAggregatePrevotesRequest>): QueryAggregatePrevotesRequest {
    const message = createBaseQueryAggregatePrevotesRequest();
    return message;
  },
  fromProtoMsg(message: QueryAggregatePrevotesRequestProtoMsg): QueryAggregatePrevotesRequest {
    return QueryAggregatePrevotesRequest.decode(message.value);
  },
  toProto(message: QueryAggregatePrevotesRequest): Uint8Array {
    return QueryAggregatePrevotesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatePrevotesRequest): QueryAggregatePrevotesRequestProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryAggregatePrevotesRequest",
      value: QueryAggregatePrevotesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAggregatePrevotesRequest.typeUrl, QueryAggregatePrevotesRequest);
function createBaseQueryAggregatePrevotesResponse(): QueryAggregatePrevotesResponse {
  return {
    aggregatePrevotes: []
  };
}
export const QueryAggregatePrevotesResponse = {
  typeUrl: "/kujira.oracle.QueryAggregatePrevotesResponse",
  is(o: any): o is QueryAggregatePrevotesResponse {
    return o && (o.$typeUrl === QueryAggregatePrevotesResponse.typeUrl || Array.isArray(o.aggregatePrevotes) && (!o.aggregatePrevotes.length || AggregateExchangeRatePrevote.is(o.aggregatePrevotes[0])));
  },
  isSDK(o: any): o is QueryAggregatePrevotesResponseSDKType {
    return o && (o.$typeUrl === QueryAggregatePrevotesResponse.typeUrl || Array.isArray(o.aggregate_prevotes) && (!o.aggregate_prevotes.length || AggregateExchangeRatePrevote.isSDK(o.aggregate_prevotes[0])));
  },
  encode(message: QueryAggregatePrevotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.aggregatePrevotes) {
      AggregateExchangeRatePrevote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevotesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatePrevotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregatePrevotes.push(AggregateExchangeRatePrevote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAggregatePrevotesResponse>): QueryAggregatePrevotesResponse {
    const message = createBaseQueryAggregatePrevotesResponse();
    message.aggregatePrevotes = object.aggregatePrevotes?.map(e => AggregateExchangeRatePrevote.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: QueryAggregatePrevotesResponseProtoMsg): QueryAggregatePrevotesResponse {
    return QueryAggregatePrevotesResponse.decode(message.value);
  },
  toProto(message: QueryAggregatePrevotesResponse): Uint8Array {
    return QueryAggregatePrevotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatePrevotesResponse): QueryAggregatePrevotesResponseProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryAggregatePrevotesResponse",
      value: QueryAggregatePrevotesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAggregatePrevotesResponse.typeUrl, QueryAggregatePrevotesResponse);
function createBaseQueryAggregateVoteRequest(): QueryAggregateVoteRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryAggregateVoteRequest = {
  typeUrl: "/kujira.oracle.QueryAggregateVoteRequest",
  is(o: any): o is QueryAggregateVoteRequest {
    return o && (o.$typeUrl === QueryAggregateVoteRequest.typeUrl || typeof o.validatorAddr === "string");
  },
  isSDK(o: any): o is QueryAggregateVoteRequestSDKType {
    return o && (o.$typeUrl === QueryAggregateVoteRequest.typeUrl || typeof o.validator_addr === "string");
  },
  encode(message: QueryAggregateVoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVoteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAggregateVoteRequest>): QueryAggregateVoteRequest {
    const message = createBaseQueryAggregateVoteRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromProtoMsg(message: QueryAggregateVoteRequestProtoMsg): QueryAggregateVoteRequest {
    return QueryAggregateVoteRequest.decode(message.value);
  },
  toProto(message: QueryAggregateVoteRequest): Uint8Array {
    return QueryAggregateVoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVoteRequest): QueryAggregateVoteRequestProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryAggregateVoteRequest",
      value: QueryAggregateVoteRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAggregateVoteRequest.typeUrl, QueryAggregateVoteRequest);
function createBaseQueryAggregateVoteResponse(): QueryAggregateVoteResponse {
  return {
    aggregateVote: AggregateExchangeRateVote.fromPartial({})
  };
}
export const QueryAggregateVoteResponse = {
  typeUrl: "/kujira.oracle.QueryAggregateVoteResponse",
  is(o: any): o is QueryAggregateVoteResponse {
    return o && (o.$typeUrl === QueryAggregateVoteResponse.typeUrl || AggregateExchangeRateVote.is(o.aggregateVote));
  },
  isSDK(o: any): o is QueryAggregateVoteResponseSDKType {
    return o && (o.$typeUrl === QueryAggregateVoteResponse.typeUrl || AggregateExchangeRateVote.isSDK(o.aggregate_vote));
  },
  encode(message: QueryAggregateVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.aggregateVote !== undefined) {
      AggregateExchangeRateVote.encode(message.aggregateVote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregateVote = AggregateExchangeRateVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAggregateVoteResponse>): QueryAggregateVoteResponse {
    const message = createBaseQueryAggregateVoteResponse();
    message.aggregateVote = object.aggregateVote !== undefined && object.aggregateVote !== null ? AggregateExchangeRateVote.fromPartial(object.aggregateVote) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryAggregateVoteResponseProtoMsg): QueryAggregateVoteResponse {
    return QueryAggregateVoteResponse.decode(message.value);
  },
  toProto(message: QueryAggregateVoteResponse): Uint8Array {
    return QueryAggregateVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVoteResponse): QueryAggregateVoteResponseProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryAggregateVoteResponse",
      value: QueryAggregateVoteResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAggregateVoteResponse.typeUrl, QueryAggregateVoteResponse);
function createBaseQueryAggregateVotesRequest(): QueryAggregateVotesRequest {
  return {};
}
export const QueryAggregateVotesRequest = {
  typeUrl: "/kujira.oracle.QueryAggregateVotesRequest",
  is(o: any): o is QueryAggregateVotesRequest {
    return o && o.$typeUrl === QueryAggregateVotesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAggregateVotesRequestSDKType {
    return o && o.$typeUrl === QueryAggregateVotesRequest.typeUrl;
  },
  encode(_: QueryAggregateVotesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVotesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVotesRequest();
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
  fromPartial(_: Partial<QueryAggregateVotesRequest>): QueryAggregateVotesRequest {
    const message = createBaseQueryAggregateVotesRequest();
    return message;
  },
  fromProtoMsg(message: QueryAggregateVotesRequestProtoMsg): QueryAggregateVotesRequest {
    return QueryAggregateVotesRequest.decode(message.value);
  },
  toProto(message: QueryAggregateVotesRequest): Uint8Array {
    return QueryAggregateVotesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVotesRequest): QueryAggregateVotesRequestProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryAggregateVotesRequest",
      value: QueryAggregateVotesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAggregateVotesRequest.typeUrl, QueryAggregateVotesRequest);
function createBaseQueryAggregateVotesResponse(): QueryAggregateVotesResponse {
  return {
    aggregateVotes: []
  };
}
export const QueryAggregateVotesResponse = {
  typeUrl: "/kujira.oracle.QueryAggregateVotesResponse",
  is(o: any): o is QueryAggregateVotesResponse {
    return o && (o.$typeUrl === QueryAggregateVotesResponse.typeUrl || Array.isArray(o.aggregateVotes) && (!o.aggregateVotes.length || AggregateExchangeRateVote.is(o.aggregateVotes[0])));
  },
  isSDK(o: any): o is QueryAggregateVotesResponseSDKType {
    return o && (o.$typeUrl === QueryAggregateVotesResponse.typeUrl || Array.isArray(o.aggregate_votes) && (!o.aggregate_votes.length || AggregateExchangeRateVote.isSDK(o.aggregate_votes[0])));
  },
  encode(message: QueryAggregateVotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.aggregateVotes) {
      AggregateExchangeRateVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVotesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregateVotes.push(AggregateExchangeRateVote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAggregateVotesResponse>): QueryAggregateVotesResponse {
    const message = createBaseQueryAggregateVotesResponse();
    message.aggregateVotes = object.aggregateVotes?.map(e => AggregateExchangeRateVote.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: QueryAggregateVotesResponseProtoMsg): QueryAggregateVotesResponse {
    return QueryAggregateVotesResponse.decode(message.value);
  },
  toProto(message: QueryAggregateVotesResponse): Uint8Array {
    return QueryAggregateVotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVotesResponse): QueryAggregateVotesResponseProtoMsg {
    return {
      typeUrl: "/kujira.oracle.QueryAggregateVotesResponse",
      value: QueryAggregateVotesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAggregateVotesResponse.typeUrl, QueryAggregateVotesResponse);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/kujira.oracle.QueryParamsRequest",
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
      typeUrl: "/kujira.oracle.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/kujira.oracle.QueryParamsResponse",
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
      typeUrl: "/kujira.oracle.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);