import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
function createBaseMsgAggregateExchangeRatePrevote() {
    return {
        hash: "",
        feeder: "",
        validator: ""
    };
}
export const MsgAggregateExchangeRatePrevote = {
    typeUrl: "/kujira.oracle.MsgAggregateExchangeRatePrevote",
    is(o) {
        return o && (o.$typeUrl === MsgAggregateExchangeRatePrevote.typeUrl || typeof o.hash === "string" && typeof o.feeder === "string" && typeof o.validator === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgAggregateExchangeRatePrevote.typeUrl || typeof o.hash === "string" && typeof o.feeder === "string" && typeof o.validator === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.feeder !== "") {
            writer.uint32(18).string(message.feeder);
        }
        if (message.validator !== "") {
            writer.uint32(26).string(message.validator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAggregateExchangeRatePrevote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.feeder = reader.string();
                    break;
                case 3:
                    message.validator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAggregateExchangeRatePrevote();
        message.hash = object.hash ?? "";
        message.feeder = object.feeder ?? "";
        message.validator = object.validator ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return MsgAggregateExchangeRatePrevote.decode(message.value);
    },
    toProto(message) {
        return MsgAggregateExchangeRatePrevote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.MsgAggregateExchangeRatePrevote",
            value: MsgAggregateExchangeRatePrevote.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgAggregateExchangeRatePrevote.typeUrl, MsgAggregateExchangeRatePrevote);
function createBaseMsgAggregateExchangeRatePrevoteResponse() {
    return {};
}
export const MsgAggregateExchangeRatePrevoteResponse = {
    typeUrl: "/kujira.oracle.MsgAggregateExchangeRatePrevoteResponse",
    is(o) {
        return o && o.$typeUrl === MsgAggregateExchangeRatePrevoteResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgAggregateExchangeRatePrevoteResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAggregateExchangeRatePrevoteResponse();
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
        const message = createBaseMsgAggregateExchangeRatePrevoteResponse();
        return message;
    },
    fromProtoMsg(message) {
        return MsgAggregateExchangeRatePrevoteResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAggregateExchangeRatePrevoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.MsgAggregateExchangeRatePrevoteResponse",
            value: MsgAggregateExchangeRatePrevoteResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgAggregateExchangeRatePrevoteResponse.typeUrl, MsgAggregateExchangeRatePrevoteResponse);
function createBaseMsgAggregateExchangeRateVote() {
    return {
        salt: "",
        exchangeRates: "",
        feeder: "",
        validator: ""
    };
}
export const MsgAggregateExchangeRateVote = {
    typeUrl: "/kujira.oracle.MsgAggregateExchangeRateVote",
    is(o) {
        return o && (o.$typeUrl === MsgAggregateExchangeRateVote.typeUrl || typeof o.salt === "string" && typeof o.exchangeRates === "string" && typeof o.feeder === "string" && typeof o.validator === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgAggregateExchangeRateVote.typeUrl || typeof o.salt === "string" && typeof o.exchange_rates === "string" && typeof o.feeder === "string" && typeof o.validator === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.salt !== "") {
            writer.uint32(10).string(message.salt);
        }
        if (message.exchangeRates !== "") {
            writer.uint32(18).string(message.exchangeRates);
        }
        if (message.feeder !== "") {
            writer.uint32(26).string(message.feeder);
        }
        if (message.validator !== "") {
            writer.uint32(34).string(message.validator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAggregateExchangeRateVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.salt = reader.string();
                    break;
                case 2:
                    message.exchangeRates = reader.string();
                    break;
                case 3:
                    message.feeder = reader.string();
                    break;
                case 4:
                    message.validator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAggregateExchangeRateVote();
        message.salt = object.salt ?? "";
        message.exchangeRates = object.exchangeRates ?? "";
        message.feeder = object.feeder ?? "";
        message.validator = object.validator ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return MsgAggregateExchangeRateVote.decode(message.value);
    },
    toProto(message) {
        return MsgAggregateExchangeRateVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.MsgAggregateExchangeRateVote",
            value: MsgAggregateExchangeRateVote.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgAggregateExchangeRateVote.typeUrl, MsgAggregateExchangeRateVote);
function createBaseMsgAggregateExchangeRateVoteResponse() {
    return {};
}
export const MsgAggregateExchangeRateVoteResponse = {
    typeUrl: "/kujira.oracle.MsgAggregateExchangeRateVoteResponse",
    is(o) {
        return o && o.$typeUrl === MsgAggregateExchangeRateVoteResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgAggregateExchangeRateVoteResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAggregateExchangeRateVoteResponse();
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
        const message = createBaseMsgAggregateExchangeRateVoteResponse();
        return message;
    },
    fromProtoMsg(message) {
        return MsgAggregateExchangeRateVoteResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAggregateExchangeRateVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.MsgAggregateExchangeRateVoteResponse",
            value: MsgAggregateExchangeRateVoteResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgAggregateExchangeRateVoteResponse.typeUrl, MsgAggregateExchangeRateVoteResponse);
function createBaseMsgDelegateFeedConsent() {
    return {
        operator: "",
        delegate: ""
    };
}
export const MsgDelegateFeedConsent = {
    typeUrl: "/kujira.oracle.MsgDelegateFeedConsent",
    is(o) {
        return o && (o.$typeUrl === MsgDelegateFeedConsent.typeUrl || typeof o.operator === "string" && typeof o.delegate === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgDelegateFeedConsent.typeUrl || typeof o.operator === "string" && typeof o.delegate === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.operator !== "") {
            writer.uint32(10).string(message.operator);
        }
        if (message.delegate !== "") {
            writer.uint32(18).string(message.delegate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateFeedConsent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operator = reader.string();
                    break;
                case 2:
                    message.delegate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDelegateFeedConsent();
        message.operator = object.operator ?? "";
        message.delegate = object.delegate ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return MsgDelegateFeedConsent.decode(message.value);
    },
    toProto(message) {
        return MsgDelegateFeedConsent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.MsgDelegateFeedConsent",
            value: MsgDelegateFeedConsent.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgDelegateFeedConsent.typeUrl, MsgDelegateFeedConsent);
function createBaseMsgDelegateFeedConsentResponse() {
    return {};
}
export const MsgDelegateFeedConsentResponse = {
    typeUrl: "/kujira.oracle.MsgDelegateFeedConsentResponse",
    is(o) {
        return o && o.$typeUrl === MsgDelegateFeedConsentResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgDelegateFeedConsentResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateFeedConsentResponse();
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
        const message = createBaseMsgDelegateFeedConsentResponse();
        return message;
    },
    fromProtoMsg(message) {
        return MsgDelegateFeedConsentResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDelegateFeedConsentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.oracle.MsgDelegateFeedConsentResponse",
            value: MsgDelegateFeedConsentResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgDelegateFeedConsentResponse.typeUrl, MsgDelegateFeedConsentResponse);
//# sourceMappingURL=tx.js.map