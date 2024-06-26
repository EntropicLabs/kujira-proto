import { DecCoin, Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { GlobalDecoderRegistry } from "../../../registry";
function createBaseParams() {
    return {
        communityTax: "",
        baseProposerReward: "",
        bonusProposerReward: "",
        withdrawAddrEnabled: false
    };
}
export const Params = {
    typeUrl: "/cosmos.distribution.v1beta1.Params",
    aminoType: "cosmos-sdk/Params",
    is(o) {
        return o && (o.$typeUrl === Params.typeUrl || typeof o.communityTax === "string" && typeof o.baseProposerReward === "string" && typeof o.bonusProposerReward === "string" && typeof o.withdrawAddrEnabled === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Params.typeUrl || typeof o.community_tax === "string" && typeof o.base_proposer_reward === "string" && typeof o.bonus_proposer_reward === "string" && typeof o.withdraw_addr_enabled === "boolean");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.communityTax !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.communityTax, 18).atomics);
        }
        if (message.baseProposerReward !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.baseProposerReward, 18).atomics);
        }
        if (message.bonusProposerReward !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.bonusProposerReward, 18).atomics);
        }
        if (message.withdrawAddrEnabled === true) {
            writer.uint32(32).bool(message.withdrawAddrEnabled);
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
                    message.communityTax = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.baseProposerReward = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.bonusProposerReward = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.withdrawAddrEnabled = reader.bool();
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
        message.communityTax = object.communityTax ?? "";
        message.baseProposerReward = object.baseProposerReward ?? "";
        message.bonusProposerReward = object.bonusProposerReward ?? "";
        message.withdrawAddrEnabled = object.withdrawAddrEnabled ?? false;
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
            typeUrl: "/cosmos.distribution.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseValidatorHistoricalRewards() {
    return {
        cumulativeRewardRatio: [],
        referenceCount: 0
    };
}
export const ValidatorHistoricalRewards = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
    aminoType: "cosmos-sdk/ValidatorHistoricalRewards",
    is(o) {
        return o && (o.$typeUrl === ValidatorHistoricalRewards.typeUrl || Array.isArray(o.cumulativeRewardRatio) && (!o.cumulativeRewardRatio.length || DecCoin.is(o.cumulativeRewardRatio[0])) && typeof o.referenceCount === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === ValidatorHistoricalRewards.typeUrl || Array.isArray(o.cumulative_reward_ratio) && (!o.cumulative_reward_ratio.length || DecCoin.isSDK(o.cumulative_reward_ratio[0])) && typeof o.reference_count === "number");
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.cumulativeRewardRatio) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.referenceCount !== 0) {
            writer.uint32(16).uint32(message.referenceCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorHistoricalRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cumulativeRewardRatio.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.referenceCount = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorHistoricalRewards();
        message.cumulativeRewardRatio = object.cumulativeRewardRatio?.map(e => DecCoin.fromPartial(e)) || [];
        message.referenceCount = object.referenceCount ?? 0;
        return message;
    },
    fromProtoMsg(message) {
        return ValidatorHistoricalRewards.decode(message.value);
    },
    toProto(message) {
        return ValidatorHistoricalRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
            value: ValidatorHistoricalRewards.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ValidatorHistoricalRewards.typeUrl, ValidatorHistoricalRewards);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorHistoricalRewards.aminoType, ValidatorHistoricalRewards.typeUrl);
function createBaseValidatorCurrentRewards() {
    return {
        rewards: [],
        period: BigInt(0)
    };
}
export const ValidatorCurrentRewards = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
    aminoType: "cosmos-sdk/ValidatorCurrentRewards",
    is(o) {
        return o && (o.$typeUrl === ValidatorCurrentRewards.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || DecCoin.is(o.rewards[0])) && typeof o.period === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === ValidatorCurrentRewards.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || DecCoin.isSDK(o.rewards[0])) && typeof o.period === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.rewards) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== BigInt(0)) {
            writer.uint32(16).uint64(message.period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorCurrentRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.period = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorCurrentRewards();
        message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
        message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return ValidatorCurrentRewards.decode(message.value);
    },
    toProto(message) {
        return ValidatorCurrentRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
            value: ValidatorCurrentRewards.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ValidatorCurrentRewards.typeUrl, ValidatorCurrentRewards);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorCurrentRewards.aminoType, ValidatorCurrentRewards.typeUrl);
function createBaseValidatorAccumulatedCommission() {
    return {
        commission: []
    };
}
export const ValidatorAccumulatedCommission = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
    aminoType: "cosmos-sdk/ValidatorAccumulatedCommission",
    is(o) {
        return o && (o.$typeUrl === ValidatorAccumulatedCommission.typeUrl || Array.isArray(o.commission) && (!o.commission.length || DecCoin.is(o.commission[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ValidatorAccumulatedCommission.typeUrl || Array.isArray(o.commission) && (!o.commission.length || DecCoin.isSDK(o.commission[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.commission) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorAccumulatedCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorAccumulatedCommission();
        message.commission = object.commission?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return ValidatorAccumulatedCommission.decode(message.value);
    },
    toProto(message) {
        return ValidatorAccumulatedCommission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
            value: ValidatorAccumulatedCommission.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ValidatorAccumulatedCommission.typeUrl, ValidatorAccumulatedCommission);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorAccumulatedCommission.aminoType, ValidatorAccumulatedCommission.typeUrl);
function createBaseValidatorOutstandingRewards() {
    return {
        rewards: []
    };
}
export const ValidatorOutstandingRewards = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
    aminoType: "cosmos-sdk/ValidatorOutstandingRewards",
    is(o) {
        return o && (o.$typeUrl === ValidatorOutstandingRewards.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || DecCoin.is(o.rewards[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ValidatorOutstandingRewards.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || DecCoin.isSDK(o.rewards[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.rewards) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorOutstandingRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorOutstandingRewards();
        message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return ValidatorOutstandingRewards.decode(message.value);
    },
    toProto(message) {
        return ValidatorOutstandingRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
            value: ValidatorOutstandingRewards.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ValidatorOutstandingRewards.typeUrl, ValidatorOutstandingRewards);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorOutstandingRewards.aminoType, ValidatorOutstandingRewards.typeUrl);
function createBaseValidatorSlashEvent() {
    return {
        validatorPeriod: BigInt(0),
        fraction: ""
    };
}
export const ValidatorSlashEvent = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
    aminoType: "cosmos-sdk/ValidatorSlashEvent",
    is(o) {
        return o && (o.$typeUrl === ValidatorSlashEvent.typeUrl || typeof o.validatorPeriod === "bigint" && typeof o.fraction === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === ValidatorSlashEvent.typeUrl || typeof o.validator_period === "bigint" && typeof o.fraction === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorPeriod !== BigInt(0)) {
            writer.uint32(8).uint64(message.validatorPeriod);
        }
        if (message.fraction !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.fraction, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorPeriod = reader.uint64();
                    break;
                case 2:
                    message.fraction = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEvent();
        message.validatorPeriod = object.validatorPeriod !== undefined && object.validatorPeriod !== null ? BigInt(object.validatorPeriod.toString()) : BigInt(0);
        message.fraction = object.fraction ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return ValidatorSlashEvent.decode(message.value);
    },
    toProto(message) {
        return ValidatorSlashEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
            value: ValidatorSlashEvent.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ValidatorSlashEvent.typeUrl, ValidatorSlashEvent);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorSlashEvent.aminoType, ValidatorSlashEvent.typeUrl);
function createBaseValidatorSlashEvents() {
    return {
        validatorSlashEvents: []
    };
}
export const ValidatorSlashEvents = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
    aminoType: "cosmos-sdk/ValidatorSlashEvents",
    is(o) {
        return o && (o.$typeUrl === ValidatorSlashEvents.typeUrl || Array.isArray(o.validatorSlashEvents) && (!o.validatorSlashEvents.length || ValidatorSlashEvent.is(o.validatorSlashEvents[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ValidatorSlashEvents.typeUrl || Array.isArray(o.validator_slash_events) && (!o.validator_slash_events.length || ValidatorSlashEvent.isSDK(o.validator_slash_events[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.validatorSlashEvents) {
            ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEvents();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorSlashEvents.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEvents();
        message.validatorSlashEvents = object.validatorSlashEvents?.map(e => ValidatorSlashEvent.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return ValidatorSlashEvents.decode(message.value);
    },
    toProto(message) {
        return ValidatorSlashEvents.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
            value: ValidatorSlashEvents.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ValidatorSlashEvents.typeUrl, ValidatorSlashEvents);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorSlashEvents.aminoType, ValidatorSlashEvents.typeUrl);
function createBaseFeePool() {
    return {
        communityPool: []
    };
}
export const FeePool = {
    typeUrl: "/cosmos.distribution.v1beta1.FeePool",
    aminoType: "cosmos-sdk/FeePool",
    is(o) {
        return o && (o.$typeUrl === FeePool.typeUrl || Array.isArray(o.communityPool) && (!o.communityPool.length || DecCoin.is(o.communityPool[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === FeePool.typeUrl || Array.isArray(o.community_pool) && (!o.community_pool.length || DecCoin.isSDK(o.community_pool[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.communityPool) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communityPool.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFeePool();
        message.communityPool = object.communityPool?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return FeePool.decode(message.value);
    },
    toProto(message) {
        return FeePool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.FeePool",
            value: FeePool.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(FeePool.typeUrl, FeePool);
GlobalDecoderRegistry.registerAminoProtoMapping(FeePool.aminoType, FeePool.typeUrl);
function createBaseCommunityPoolSpendProposal() {
    return {
        $typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        title: "",
        description: "",
        recipient: "",
        amount: []
    };
}
export const CommunityPoolSpendProposal = {
    typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
    aminoType: "cosmos-sdk/CommunityPoolSpendProposal",
    is(o) {
        return o && (o.$typeUrl === CommunityPoolSpendProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.recipient === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === CommunityPoolSpendProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.recipient === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommunityPoolSpendProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommunityPoolSpendProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.recipient = object.recipient ?? "";
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return CommunityPoolSpendProposal.decode(message.value);
    },
    toProto(message) {
        return CommunityPoolSpendProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
            value: CommunityPoolSpendProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(CommunityPoolSpendProposal.typeUrl, CommunityPoolSpendProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(CommunityPoolSpendProposal.aminoType, CommunityPoolSpendProposal.typeUrl);
function createBaseDelegatorStartingInfo() {
    return {
        previousPeriod: BigInt(0),
        stake: "",
        height: BigInt(0)
    };
}
export const DelegatorStartingInfo = {
    typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
    aminoType: "cosmos-sdk/DelegatorStartingInfo",
    is(o) {
        return o && (o.$typeUrl === DelegatorStartingInfo.typeUrl || typeof o.previousPeriod === "bigint" && typeof o.stake === "string" && typeof o.height === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === DelegatorStartingInfo.typeUrl || typeof o.previous_period === "bigint" && typeof o.stake === "string" && typeof o.height === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.previousPeriod !== BigInt(0)) {
            writer.uint32(8).uint64(message.previousPeriod);
        }
        if (message.stake !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.stake, 18).atomics);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).uint64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorStartingInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.previousPeriod = reader.uint64();
                    break;
                case 2:
                    message.stake = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.height = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDelegatorStartingInfo();
        message.previousPeriod = object.previousPeriod !== undefined && object.previousPeriod !== null ? BigInt(object.previousPeriod.toString()) : BigInt(0);
        message.stake = object.stake ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return DelegatorStartingInfo.decode(message.value);
    },
    toProto(message) {
        return DelegatorStartingInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
            value: DelegatorStartingInfo.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(DelegatorStartingInfo.typeUrl, DelegatorStartingInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(DelegatorStartingInfo.aminoType, DelegatorStartingInfo.typeUrl);
function createBaseDelegationDelegatorReward() {
    return {
        validatorAddress: "",
        reward: []
    };
}
export const DelegationDelegatorReward = {
    typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
    aminoType: "cosmos-sdk/DelegationDelegatorReward",
    is(o) {
        return o && (o.$typeUrl === DelegationDelegatorReward.typeUrl || typeof o.validatorAddress === "string" && Array.isArray(o.reward) && (!o.reward.length || DecCoin.is(o.reward[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === DelegationDelegatorReward.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.reward) && (!o.reward.length || DecCoin.isSDK(o.reward[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        for (const v of message.reward) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationDelegatorReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.reward.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDelegationDelegatorReward();
        message.validatorAddress = object.validatorAddress ?? "";
        message.reward = object.reward?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return DelegationDelegatorReward.decode(message.value);
    },
    toProto(message) {
        return DelegationDelegatorReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
            value: DelegationDelegatorReward.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(DelegationDelegatorReward.typeUrl, DelegationDelegatorReward);
GlobalDecoderRegistry.registerAminoProtoMapping(DelegationDelegatorReward.aminoType, DelegationDelegatorReward.typeUrl);
function createBaseCommunityPoolSpendProposalWithDeposit() {
    return {
        $typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
        title: "",
        description: "",
        recipient: "",
        amount: "",
        deposit: ""
    };
}
export const CommunityPoolSpendProposalWithDeposit = {
    typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
    aminoType: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
    is(o) {
        return o && (o.$typeUrl === CommunityPoolSpendProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.recipient === "string" && typeof o.amount === "string" && typeof o.deposit === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === CommunityPoolSpendProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.recipient === "string" && typeof o.amount === "string" && typeof o.deposit === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.deposit !== "") {
            writer.uint32(42).string(message.deposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.deposit = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.recipient = object.recipient ?? "";
        message.amount = object.amount ?? "";
        message.deposit = object.deposit ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return CommunityPoolSpendProposalWithDeposit.decode(message.value);
    },
    toProto(message) {
        return CommunityPoolSpendProposalWithDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
            value: CommunityPoolSpendProposalWithDeposit.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(CommunityPoolSpendProposalWithDeposit.typeUrl, CommunityPoolSpendProposalWithDeposit);
GlobalDecoderRegistry.registerAminoProtoMapping(CommunityPoolSpendProposalWithDeposit.aminoType, CommunityPoolSpendProposalWithDeposit.typeUrl);
//# sourceMappingURL=distribution.js.map