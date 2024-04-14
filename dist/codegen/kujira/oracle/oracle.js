import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { GlobalDecoderRegistry } from "../../registry";
function createBaseParams() {
    return {
        votePeriod: BigInt(0),
        voteThreshold: "",
        rewardBand: "",
        rewardDistributionWindow: BigInt(0),
        whitelist: [],
        slashFraction: "",
        slashWindow: BigInt(0),
        minValidPerWindow: ""
    };
}
export const Params = {
    typeUrl: "/kujira.oracle.Params",
    is(o) {
        return o && (o.$typeUrl === Params.typeUrl || typeof o.votePeriod === "bigint" && typeof o.voteThreshold === "string" && typeof o.rewardBand === "string" && typeof o.rewardDistributionWindow === "bigint" && Array.isArray(o.whitelist) && (!o.whitelist.length || Denom.is(o.whitelist[0])) && typeof o.slashFraction === "string" && typeof o.slashWindow === "bigint" && typeof o.minValidPerWindow === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Params.typeUrl || typeof o.vote_period === "bigint" && typeof o.vote_threshold === "string" && typeof o.reward_band === "string" && typeof o.reward_distribution_window === "bigint" && Array.isArray(o.whitelist) && (!o.whitelist.length || Denom.isSDK(o.whitelist[0])) && typeof o.slash_fraction === "string" && typeof o.slash_window === "bigint" && typeof o.min_valid_per_window === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.votePeriod !== BigInt(0)) {
            writer.uint32(8).uint64(message.votePeriod);
        }
        if (message.voteThreshold !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.voteThreshold, 18).atomics);
        }
        if (message.rewardBand !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.rewardBand, 18).atomics);
        }
        if (message.rewardDistributionWindow !== BigInt(0)) {
            writer.uint32(32).uint64(message.rewardDistributionWindow);
        }
        for (const v of message.whitelist) {
            Denom.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.slashFraction !== "") {
            writer.uint32(50).string(Decimal.fromUserInput(message.slashFraction, 18).atomics);
        }
        if (message.slashWindow !== BigInt(0)) {
            writer.uint32(56).uint64(message.slashWindow);
        }
        if (message.minValidPerWindow !== "") {
            writer.uint32(66).string(Decimal.fromUserInput(message.minValidPerWindow, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votePeriod = reader.uint64();
                    break;
                case 2:
                    message.voteThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.rewardBand = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.rewardDistributionWindow = reader.uint64();
                    break;
                case 5:
                    message.whitelist.push(Denom.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.slashFraction = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.slashWindow = reader.uint64();
                    break;
                case 8:
                    message.minValidPerWindow = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? BigInt(object.votePeriod.toString()) : BigInt(0);
        message.voteThreshold = object.voteThreshold ?? "";
        message.rewardBand = object.rewardBand ?? "";
        message.rewardDistributionWindow = object.rewardDistributionWindow !== undefined && object.rewardDistributionWindow !== null ? BigInt(object.rewardDistributionWindow.toString()) : BigInt(0);
        message.whitelist = object.whitelist?.map(e => Denom.fromPartial(e)) || [];
        message.slashFraction = object.slashFraction ?? "";
        message.slashWindow = object.slashWindow !== undefined && object.slashWindow !== null ? BigInt(object.slashWindow.toString()) : BigInt(0);
        message.minValidPerWindow = object.minValidPerWindow ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.Params",
            value: Params.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
function createBaseDenom() {
    return {
        name: ""
    };
}
export const Denom = {
    typeUrl: "/kujira.oracle.Denom",
    is(o) {
        return o && (o.$typeUrl === Denom.typeUrl || typeof o.name === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Denom.typeUrl || typeof o.name === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDenom();
        message.name = object.name ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return Denom.decode(message.value);
    },
    toProto(message) {
        return Denom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.Denom",
            value: Denom.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Denom.typeUrl, Denom);
function createBaseAggregateExchangeRatePrevote() {
    return {
        hash: "",
        voter: "",
        submitBlock: BigInt(0)
    };
}
export const AggregateExchangeRatePrevote = {
    typeUrl: "/kujira.oracle.AggregateExchangeRatePrevote",
    is(o) {
        return o && (o.$typeUrl === AggregateExchangeRatePrevote.typeUrl || typeof o.hash === "string" && typeof o.voter === "string" && typeof o.submitBlock === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === AggregateExchangeRatePrevote.typeUrl || typeof o.hash === "string" && typeof o.voter === "string" && typeof o.submit_block === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.submitBlock !== BigInt(0)) {
            writer.uint32(24).uint64(message.submitBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAggregateExchangeRatePrevote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.submitBlock = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAggregateExchangeRatePrevote();
        message.hash = object.hash ?? "";
        message.voter = object.voter ?? "";
        message.submitBlock = object.submitBlock !== undefined && object.submitBlock !== null ? BigInt(object.submitBlock.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return AggregateExchangeRatePrevote.decode(message.value);
    },
    toProto(message) {
        return AggregateExchangeRatePrevote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.AggregateExchangeRatePrevote",
            value: AggregateExchangeRatePrevote.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(AggregateExchangeRatePrevote.typeUrl, AggregateExchangeRatePrevote);
function createBaseAggregateExchangeRateVote() {
    return {
        exchangeRateTuples: [],
        voter: ""
    };
}
export const AggregateExchangeRateVote = {
    typeUrl: "/kujira.oracle.AggregateExchangeRateVote",
    is(o) {
        return o && (o.$typeUrl === AggregateExchangeRateVote.typeUrl || Array.isArray(o.exchangeRateTuples) && (!o.exchangeRateTuples.length || ExchangeRateTuple.is(o.exchangeRateTuples[0])) && typeof o.voter === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === AggregateExchangeRateVote.typeUrl || Array.isArray(o.exchange_rate_tuples) && (!o.exchange_rate_tuples.length || ExchangeRateTuple.isSDK(o.exchange_rate_tuples[0])) && typeof o.voter === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.exchangeRateTuples) {
            ExchangeRateTuple.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAggregateExchangeRateVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchangeRateTuples.push(ExchangeRateTuple.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAggregateExchangeRateVote();
        message.exchangeRateTuples = object.exchangeRateTuples?.map(e => ExchangeRateTuple.fromPartial(e)) || [];
        message.voter = object.voter ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return AggregateExchangeRateVote.decode(message.value);
    },
    toProto(message) {
        return AggregateExchangeRateVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.AggregateExchangeRateVote",
            value: AggregateExchangeRateVote.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(AggregateExchangeRateVote.typeUrl, AggregateExchangeRateVote);
function createBaseExchangeRateTuple() {
    return {
        denom: "",
        exchangeRate: ""
    };
}
export const ExchangeRateTuple = {
    typeUrl: "/kujira.oracle.ExchangeRateTuple",
    is(o) {
        return o && (o.$typeUrl === ExchangeRateTuple.typeUrl || typeof o.denom === "string" && typeof o.exchangeRate === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === ExchangeRateTuple.typeUrl || typeof o.denom === "string" && typeof o.exchange_rate === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.exchangeRate !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExchangeRateTuple();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
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
        const message = createBaseExchangeRateTuple();
        message.denom = object.denom ?? "";
        message.exchangeRate = object.exchangeRate ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return ExchangeRateTuple.decode(message.value);
    },
    toProto(message) {
        return ExchangeRateTuple.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.ExchangeRateTuple",
            value: ExchangeRateTuple.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ExchangeRateTuple.typeUrl, ExchangeRateTuple);
//# sourceMappingURL=oracle.js.map