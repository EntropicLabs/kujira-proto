import { DecCoin } from "../../cosmos/base/v1beta1/coin";
import { AggregateExchangeRatePrevote, AggregateExchangeRateVote, Params } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { Decimal } from "@cosmjs/math";
function createBaseQueryExchangeRateRequest() {
    return {
        denom: ""
    };
}
export const QueryExchangeRateRequest = {
    typeUrl: "/kujira.oracle.QueryExchangeRateRequest",
    is(o) {
        return o && (o.$typeUrl === QueryExchangeRateRequest.typeUrl || typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryExchangeRateRequest.typeUrl || typeof o.denom === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryExchangeRateRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return QueryExchangeRateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryExchangeRateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryExchangeRateRequest",
            value: QueryExchangeRateRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryExchangeRateRequest.typeUrl, QueryExchangeRateRequest);
function createBaseQueryExchangeRateResponse() {
    return {
        exchangeRate: ""
    };
}
export const QueryExchangeRateResponse = {
    typeUrl: "/kujira.oracle.QueryExchangeRateResponse",
    is(o) {
        return o && (o.$typeUrl === QueryExchangeRateResponse.typeUrl || typeof o.exchangeRate === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryExchangeRateResponse.typeUrl || typeof o.exchange_rate === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.exchangeRate !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryExchangeRateResponse();
        message.exchangeRate = object.exchangeRate ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return QueryExchangeRateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryExchangeRateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryExchangeRateResponse",
            value: QueryExchangeRateResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryExchangeRateResponse.typeUrl, QueryExchangeRateResponse);
function createBaseQueryExchangeRatesRequest() {
    return {};
}
export const QueryExchangeRatesRequest = {
    typeUrl: "/kujira.oracle.QueryExchangeRatesRequest",
    is(o) {
        return o && o.$typeUrl === QueryExchangeRatesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryExchangeRatesRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromPartial(_) {
        const message = createBaseQueryExchangeRatesRequest();
        return message;
    },
    fromProtoMsg(message) {
        return QueryExchangeRatesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryExchangeRatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryExchangeRatesRequest",
            value: QueryExchangeRatesRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryExchangeRatesRequest.typeUrl, QueryExchangeRatesRequest);
function createBaseQueryExchangeRatesResponse() {
    return {
        exchangeRates: []
    };
}
export const QueryExchangeRatesResponse = {
    typeUrl: "/kujira.oracle.QueryExchangeRatesResponse",
    is(o) {
        return o && (o.$typeUrl === QueryExchangeRatesResponse.typeUrl || Array.isArray(o.exchangeRates) && (!o.exchangeRates.length || DecCoin.is(o.exchangeRates[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryExchangeRatesResponse.typeUrl || Array.isArray(o.exchange_rates) && (!o.exchange_rates.length || DecCoin.isSDK(o.exchange_rates[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.exchangeRates) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryExchangeRatesResponse();
        message.exchangeRates = object.exchangeRates?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return QueryExchangeRatesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryExchangeRatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryExchangeRatesResponse",
            value: QueryExchangeRatesResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryExchangeRatesResponse.typeUrl, QueryExchangeRatesResponse);
function createBaseQueryActivesRequest() {
    return {};
}
export const QueryActivesRequest = {
    typeUrl: "/kujira.oracle.QueryActivesRequest",
    is(o) {
        return o && o.$typeUrl === QueryActivesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryActivesRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromPartial(_) {
        const message = createBaseQueryActivesRequest();
        return message;
    },
    fromProtoMsg(message) {
        return QueryActivesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryActivesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryActivesRequest",
            value: QueryActivesRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryActivesRequest.typeUrl, QueryActivesRequest);
function createBaseQueryActivesResponse() {
    return {
        actives: []
    };
}
export const QueryActivesResponse = {
    typeUrl: "/kujira.oracle.QueryActivesResponse",
    is(o) {
        return o && (o.$typeUrl === QueryActivesResponse.typeUrl || Array.isArray(o.actives) && (!o.actives.length || typeof o.actives[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryActivesResponse.typeUrl || Array.isArray(o.actives) && (!o.actives.length || typeof o.actives[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.actives) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryActivesResponse();
        message.actives = object.actives?.map(e => e) || [];
        return message;
    },
    fromProtoMsg(message) {
        return QueryActivesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryActivesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryActivesResponse",
            value: QueryActivesResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryActivesResponse.typeUrl, QueryActivesResponse);
function createBaseQueryVoteTargetsRequest() {
    return {};
}
export const QueryVoteTargetsRequest = {
    typeUrl: "/kujira.oracle.QueryVoteTargetsRequest",
    is(o) {
        return o && o.$typeUrl === QueryVoteTargetsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryVoteTargetsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromPartial(_) {
        const message = createBaseQueryVoteTargetsRequest();
        return message;
    },
    fromProtoMsg(message) {
        return QueryVoteTargetsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryVoteTargetsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryVoteTargetsRequest",
            value: QueryVoteTargetsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryVoteTargetsRequest.typeUrl, QueryVoteTargetsRequest);
function createBaseQueryVoteTargetsResponse() {
    return {
        voteTargets: []
    };
}
export const QueryVoteTargetsResponse = {
    typeUrl: "/kujira.oracle.QueryVoteTargetsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryVoteTargetsResponse.typeUrl || Array.isArray(o.voteTargets) && (!o.voteTargets.length || typeof o.voteTargets[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryVoteTargetsResponse.typeUrl || Array.isArray(o.vote_targets) && (!o.vote_targets.length || typeof o.vote_targets[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.voteTargets) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryVoteTargetsResponse();
        message.voteTargets = object.voteTargets?.map(e => e) || [];
        return message;
    },
    fromProtoMsg(message) {
        return QueryVoteTargetsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryVoteTargetsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryVoteTargetsResponse",
            value: QueryVoteTargetsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryVoteTargetsResponse.typeUrl, QueryVoteTargetsResponse);
function createBaseQueryFeederDelegationRequest() {
    return {
        validatorAddr: ""
    };
}
export const QueryFeederDelegationRequest = {
    typeUrl: "/kujira.oracle.QueryFeederDelegationRequest",
    is(o) {
        return o && (o.$typeUrl === QueryFeederDelegationRequest.typeUrl || typeof o.validatorAddr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryFeederDelegationRequest.typeUrl || typeof o.validator_addr === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryFeederDelegationRequest();
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return QueryFeederDelegationRequest.decode(message.value);
    },
    toProto(message) {
        return QueryFeederDelegationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryFeederDelegationRequest",
            value: QueryFeederDelegationRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryFeederDelegationRequest.typeUrl, QueryFeederDelegationRequest);
function createBaseQueryFeederDelegationResponse() {
    return {
        feederAddr: ""
    };
}
export const QueryFeederDelegationResponse = {
    typeUrl: "/kujira.oracle.QueryFeederDelegationResponse",
    is(o) {
        return o && (o.$typeUrl === QueryFeederDelegationResponse.typeUrl || typeof o.feederAddr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryFeederDelegationResponse.typeUrl || typeof o.feeder_addr === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.feederAddr !== "") {
            writer.uint32(10).string(message.feederAddr);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryFeederDelegationResponse();
        message.feederAddr = object.feederAddr ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return QueryFeederDelegationResponse.decode(message.value);
    },
    toProto(message) {
        return QueryFeederDelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryFeederDelegationResponse",
            value: QueryFeederDelegationResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryFeederDelegationResponse.typeUrl, QueryFeederDelegationResponse);
function createBaseQueryMissCounterRequest() {
    return {
        validatorAddr: ""
    };
}
export const QueryMissCounterRequest = {
    typeUrl: "/kujira.oracle.QueryMissCounterRequest",
    is(o) {
        return o && (o.$typeUrl === QueryMissCounterRequest.typeUrl || typeof o.validatorAddr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryMissCounterRequest.typeUrl || typeof o.validator_addr === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryMissCounterRequest();
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return QueryMissCounterRequest.decode(message.value);
    },
    toProto(message) {
        return QueryMissCounterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryMissCounterRequest",
            value: QueryMissCounterRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryMissCounterRequest.typeUrl, QueryMissCounterRequest);
function createBaseQueryMissCounterResponse() {
    return {
        missCounter: BigInt(0)
    };
}
export const QueryMissCounterResponse = {
    typeUrl: "/kujira.oracle.QueryMissCounterResponse",
    is(o) {
        return o && (o.$typeUrl === QueryMissCounterResponse.typeUrl || typeof o.missCounter === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryMissCounterResponse.typeUrl || typeof o.miss_counter === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.missCounter !== BigInt(0)) {
            writer.uint32(8).uint64(message.missCounter);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryMissCounterResponse();
        message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? BigInt(object.missCounter.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return QueryMissCounterResponse.decode(message.value);
    },
    toProto(message) {
        return QueryMissCounterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryMissCounterResponse",
            value: QueryMissCounterResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryMissCounterResponse.typeUrl, QueryMissCounterResponse);
function createBaseQueryAggregatePrevoteRequest() {
    return {
        validatorAddr: ""
    };
}
export const QueryAggregatePrevoteRequest = {
    typeUrl: "/kujira.oracle.QueryAggregatePrevoteRequest",
    is(o) {
        return o && (o.$typeUrl === QueryAggregatePrevoteRequest.typeUrl || typeof o.validatorAddr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryAggregatePrevoteRequest.typeUrl || typeof o.validator_addr === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryAggregatePrevoteRequest();
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return QueryAggregatePrevoteRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAggregatePrevoteRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryAggregatePrevoteRequest",
            value: QueryAggregatePrevoteRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAggregatePrevoteRequest.typeUrl, QueryAggregatePrevoteRequest);
function createBaseQueryAggregatePrevoteResponse() {
    return {
        aggregatePrevote: AggregateExchangeRatePrevote.fromPartial({})
    };
}
export const QueryAggregatePrevoteResponse = {
    typeUrl: "/kujira.oracle.QueryAggregatePrevoteResponse",
    is(o) {
        return o && (o.$typeUrl === QueryAggregatePrevoteResponse.typeUrl || AggregateExchangeRatePrevote.is(o.aggregatePrevote));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryAggregatePrevoteResponse.typeUrl || AggregateExchangeRatePrevote.isSDK(o.aggregate_prevote));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.aggregatePrevote !== undefined) {
            AggregateExchangeRatePrevote.encode(message.aggregatePrevote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryAggregatePrevoteResponse();
        message.aggregatePrevote = object.aggregatePrevote !== undefined && object.aggregatePrevote !== null ? AggregateExchangeRatePrevote.fromPartial(object.aggregatePrevote) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryAggregatePrevoteResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAggregatePrevoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryAggregatePrevoteResponse",
            value: QueryAggregatePrevoteResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAggregatePrevoteResponse.typeUrl, QueryAggregatePrevoteResponse);
function createBaseQueryAggregatePrevotesRequest() {
    return {};
}
export const QueryAggregatePrevotesRequest = {
    typeUrl: "/kujira.oracle.QueryAggregatePrevotesRequest",
    is(o) {
        return o && o.$typeUrl === QueryAggregatePrevotesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryAggregatePrevotesRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromPartial(_) {
        const message = createBaseQueryAggregatePrevotesRequest();
        return message;
    },
    fromProtoMsg(message) {
        return QueryAggregatePrevotesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAggregatePrevotesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryAggregatePrevotesRequest",
            value: QueryAggregatePrevotesRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAggregatePrevotesRequest.typeUrl, QueryAggregatePrevotesRequest);
function createBaseQueryAggregatePrevotesResponse() {
    return {
        aggregatePrevotes: []
    };
}
export const QueryAggregatePrevotesResponse = {
    typeUrl: "/kujira.oracle.QueryAggregatePrevotesResponse",
    is(o) {
        return o && (o.$typeUrl === QueryAggregatePrevotesResponse.typeUrl || Array.isArray(o.aggregatePrevotes) && (!o.aggregatePrevotes.length || AggregateExchangeRatePrevote.is(o.aggregatePrevotes[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryAggregatePrevotesResponse.typeUrl || Array.isArray(o.aggregate_prevotes) && (!o.aggregate_prevotes.length || AggregateExchangeRatePrevote.isSDK(o.aggregate_prevotes[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.aggregatePrevotes) {
            AggregateExchangeRatePrevote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryAggregatePrevotesResponse();
        message.aggregatePrevotes = object.aggregatePrevotes?.map(e => AggregateExchangeRatePrevote.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return QueryAggregatePrevotesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAggregatePrevotesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryAggregatePrevotesResponse",
            value: QueryAggregatePrevotesResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAggregatePrevotesResponse.typeUrl, QueryAggregatePrevotesResponse);
function createBaseQueryAggregateVoteRequest() {
    return {
        validatorAddr: ""
    };
}
export const QueryAggregateVoteRequest = {
    typeUrl: "/kujira.oracle.QueryAggregateVoteRequest",
    is(o) {
        return o && (o.$typeUrl === QueryAggregateVoteRequest.typeUrl || typeof o.validatorAddr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryAggregateVoteRequest.typeUrl || typeof o.validator_addr === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryAggregateVoteRequest();
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return QueryAggregateVoteRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAggregateVoteRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryAggregateVoteRequest",
            value: QueryAggregateVoteRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAggregateVoteRequest.typeUrl, QueryAggregateVoteRequest);
function createBaseQueryAggregateVoteResponse() {
    return {
        aggregateVote: AggregateExchangeRateVote.fromPartial({})
    };
}
export const QueryAggregateVoteResponse = {
    typeUrl: "/kujira.oracle.QueryAggregateVoteResponse",
    is(o) {
        return o && (o.$typeUrl === QueryAggregateVoteResponse.typeUrl || AggregateExchangeRateVote.is(o.aggregateVote));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryAggregateVoteResponse.typeUrl || AggregateExchangeRateVote.isSDK(o.aggregate_vote));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.aggregateVote !== undefined) {
            AggregateExchangeRateVote.encode(message.aggregateVote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryAggregateVoteResponse();
        message.aggregateVote = object.aggregateVote !== undefined && object.aggregateVote !== null ? AggregateExchangeRateVote.fromPartial(object.aggregateVote) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryAggregateVoteResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAggregateVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryAggregateVoteResponse",
            value: QueryAggregateVoteResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAggregateVoteResponse.typeUrl, QueryAggregateVoteResponse);
function createBaseQueryAggregateVotesRequest() {
    return {};
}
export const QueryAggregateVotesRequest = {
    typeUrl: "/kujira.oracle.QueryAggregateVotesRequest",
    is(o) {
        return o && o.$typeUrl === QueryAggregateVotesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryAggregateVotesRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromPartial(_) {
        const message = createBaseQueryAggregateVotesRequest();
        return message;
    },
    fromProtoMsg(message) {
        return QueryAggregateVotesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAggregateVotesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryAggregateVotesRequest",
            value: QueryAggregateVotesRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAggregateVotesRequest.typeUrl, QueryAggregateVotesRequest);
function createBaseQueryAggregateVotesResponse() {
    return {
        aggregateVotes: []
    };
}
export const QueryAggregateVotesResponse = {
    typeUrl: "/kujira.oracle.QueryAggregateVotesResponse",
    is(o) {
        return o && (o.$typeUrl === QueryAggregateVotesResponse.typeUrl || Array.isArray(o.aggregateVotes) && (!o.aggregateVotes.length || AggregateExchangeRateVote.is(o.aggregateVotes[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryAggregateVotesResponse.typeUrl || Array.isArray(o.aggregate_votes) && (!o.aggregate_votes.length || AggregateExchangeRateVote.isSDK(o.aggregate_votes[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.aggregateVotes) {
            AggregateExchangeRateVote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryAggregateVotesResponse();
        message.aggregateVotes = object.aggregateVotes?.map(e => AggregateExchangeRateVote.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return QueryAggregateVotesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAggregateVotesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryAggregateVotesResponse",
            value: QueryAggregateVotesResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAggregateVotesResponse.typeUrl, QueryAggregateVotesResponse);
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/kujira.oracle.QueryParamsRequest",
    is(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/kujira.oracle.QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
//# sourceMappingURL=query.js.map