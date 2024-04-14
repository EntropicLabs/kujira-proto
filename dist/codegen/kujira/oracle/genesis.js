import { Params, ExchangeRateTuple, AggregateExchangeRatePrevote, AggregateExchangeRateVote } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        feederDelegations: [],
        exchangeRates: [],
        missCounters: [],
        aggregateExchangeRatePrevotes: [],
        aggregateExchangeRateVotes: []
    };
}
export const GenesisState = {
    typeUrl: "/kujira.oracle.GenesisState",
    is(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.feederDelegations) && (!o.feederDelegations.length || FeederDelegation.is(o.feederDelegations[0])) && Array.isArray(o.exchangeRates) && (!o.exchangeRates.length || ExchangeRateTuple.is(o.exchangeRates[0])) && Array.isArray(o.missCounters) && (!o.missCounters.length || MissCounter.is(o.missCounters[0])) && Array.isArray(o.aggregateExchangeRatePrevotes) && (!o.aggregateExchangeRatePrevotes.length || AggregateExchangeRatePrevote.is(o.aggregateExchangeRatePrevotes[0])) && Array.isArray(o.aggregateExchangeRateVotes) && (!o.aggregateExchangeRateVotes.length || AggregateExchangeRateVote.is(o.aggregateExchangeRateVotes[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.feeder_delegations) && (!o.feeder_delegations.length || FeederDelegation.isSDK(o.feeder_delegations[0])) && Array.isArray(o.exchange_rates) && (!o.exchange_rates.length || ExchangeRateTuple.isSDK(o.exchange_rates[0])) && Array.isArray(o.miss_counters) && (!o.miss_counters.length || MissCounter.isSDK(o.miss_counters[0])) && Array.isArray(o.aggregate_exchange_rate_prevotes) && (!o.aggregate_exchange_rate_prevotes.length || AggregateExchangeRatePrevote.isSDK(o.aggregate_exchange_rate_prevotes[0])) && Array.isArray(o.aggregate_exchange_rate_votes) && (!o.aggregate_exchange_rate_votes.length || AggregateExchangeRateVote.isSDK(o.aggregate_exchange_rate_votes[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.feederDelegations) {
            FeederDelegation.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.exchangeRates) {
            ExchangeRateTuple.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.missCounters) {
            MissCounter.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.aggregateExchangeRatePrevotes) {
            AggregateExchangeRatePrevote.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.aggregateExchangeRateVotes) {
            AggregateExchangeRateVote.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.feederDelegations.push(FeederDelegation.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.exchangeRates.push(ExchangeRateTuple.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.missCounters.push(MissCounter.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.aggregateExchangeRatePrevotes.push(AggregateExchangeRatePrevote.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.aggregateExchangeRateVotes.push(AggregateExchangeRateVote.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.feederDelegations = object.feederDelegations?.map(e => FeederDelegation.fromPartial(e)) || [];
        message.exchangeRates = object.exchangeRates?.map(e => ExchangeRateTuple.fromPartial(e)) || [];
        message.missCounters = object.missCounters?.map(e => MissCounter.fromPartial(e)) || [];
        message.aggregateExchangeRatePrevotes = object.aggregateExchangeRatePrevotes?.map(e => AggregateExchangeRatePrevote.fromPartial(e)) || [];
        message.aggregateExchangeRateVotes = object.aggregateExchangeRateVotes?.map(e => AggregateExchangeRateVote.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
function createBaseFeederDelegation() {
    return {
        feederAddress: "",
        validatorAddress: ""
    };
}
export const FeederDelegation = {
    typeUrl: "/kujira.oracle.FeederDelegation",
    is(o) {
        return o && (o.$typeUrl === FeederDelegation.typeUrl || typeof o.feederAddress === "string" && typeof o.validatorAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === FeederDelegation.typeUrl || typeof o.feeder_address === "string" && typeof o.validator_address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.feederAddress !== "") {
            writer.uint32(10).string(message.feederAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeederDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feederAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFeederDelegation();
        message.feederAddress = object.feederAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return FeederDelegation.decode(message.value);
    },
    toProto(message) {
        return FeederDelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.FeederDelegation",
            value: FeederDelegation.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(FeederDelegation.typeUrl, FeederDelegation);
function createBaseMissCounter() {
    return {
        validatorAddress: "",
        missCounter: BigInt(0)
    };
}
export const MissCounter = {
    typeUrl: "/kujira.oracle.MissCounter",
    is(o) {
        return o && (o.$typeUrl === MissCounter.typeUrl || typeof o.validatorAddress === "string" && typeof o.missCounter === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MissCounter.typeUrl || typeof o.validator_address === "string" && typeof o.miss_counter === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.missCounter !== BigInt(0)) {
            writer.uint32(16).uint64(message.missCounter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissCounter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
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
        const message = createBaseMissCounter();
        message.validatorAddress = object.validatorAddress ?? "";
        message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? BigInt(object.missCounter.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return MissCounter.decode(message.value);
    },
    toProto(message) {
        return MissCounter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.MissCounter",
            value: MissCounter.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MissCounter.typeUrl, MissCounter);
//# sourceMappingURL=genesis.js.map