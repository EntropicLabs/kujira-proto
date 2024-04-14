import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
function createBaseMsgSetWithdrawAddress() {
    return {
        delegatorAddress: "",
        withdrawAddress: ""
    };
}
export const MsgSetWithdrawAddress = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
    aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
    is(o) {
        return o && (o.$typeUrl === MsgSetWithdrawAddress.typeUrl || typeof o.delegatorAddress === "string" && typeof o.withdrawAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgSetWithdrawAddress.typeUrl || typeof o.delegator_address === "string" && typeof o.withdraw_address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.withdrawAddress !== "") {
            writer.uint32(18).string(message.withdrawAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetWithdrawAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.withdrawAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetWithdrawAddress();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.withdrawAddress = object.withdrawAddress ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return MsgSetWithdrawAddress.decode(message.value);
    },
    toProto(message) {
        return MsgSetWithdrawAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
            value: MsgSetWithdrawAddress.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgSetWithdrawAddress.typeUrl, MsgSetWithdrawAddress);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetWithdrawAddress.aminoType, MsgSetWithdrawAddress.typeUrl);
function createBaseMsgSetWithdrawAddressResponse() {
    return {};
}
export const MsgSetWithdrawAddressResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
    aminoType: "cosmos-sdk/MsgSetWithdrawAddressResponse",
    is(o) {
        return o && o.$typeUrl === MsgSetWithdrawAddressResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgSetWithdrawAddressResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetWithdrawAddressResponse();
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
        const message = createBaseMsgSetWithdrawAddressResponse();
        return message;
    },
    fromProtoMsg(message) {
        return MsgSetWithdrawAddressResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetWithdrawAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
            value: MsgSetWithdrawAddressResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgSetWithdrawAddressResponse.typeUrl, MsgSetWithdrawAddressResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetWithdrawAddressResponse.aminoType, MsgSetWithdrawAddressResponse.typeUrl);
function createBaseMsgWithdrawDelegatorReward() {
    return {
        delegatorAddress: "",
        validatorAddress: ""
    };
}
export const MsgWithdrawDelegatorReward = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
    aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
    is(o) {
        return o && (o.$typeUrl === MsgWithdrawDelegatorReward.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgWithdrawDelegatorReward.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDelegatorReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
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
        const message = createBaseMsgWithdrawDelegatorReward();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return MsgWithdrawDelegatorReward.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawDelegatorReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
            value: MsgWithdrawDelegatorReward.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgWithdrawDelegatorReward.typeUrl, MsgWithdrawDelegatorReward);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgWithdrawDelegatorReward.aminoType, MsgWithdrawDelegatorReward.typeUrl);
function createBaseMsgWithdrawDelegatorRewardResponse() {
    return {
        amount: []
    };
}
export const MsgWithdrawDelegatorRewardResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
    aminoType: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse",
    is(o) {
        return o && (o.$typeUrl === MsgWithdrawDelegatorRewardResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgWithdrawDelegatorRewardResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDelegatorRewardResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseMsgWithdrawDelegatorRewardResponse();
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return MsgWithdrawDelegatorRewardResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawDelegatorRewardResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
            value: MsgWithdrawDelegatorRewardResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgWithdrawDelegatorRewardResponse.typeUrl, MsgWithdrawDelegatorRewardResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgWithdrawDelegatorRewardResponse.aminoType, MsgWithdrawDelegatorRewardResponse.typeUrl);
function createBaseMsgWithdrawValidatorCommission() {
    return {
        validatorAddress: ""
    };
}
export const MsgWithdrawValidatorCommission = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
    aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
    is(o) {
        return o && (o.$typeUrl === MsgWithdrawValidatorCommission.typeUrl || typeof o.validatorAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgWithdrawValidatorCommission.typeUrl || typeof o.validator_address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawValidatorCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseMsgWithdrawValidatorCommission();
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return MsgWithdrawValidatorCommission.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawValidatorCommission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
            value: MsgWithdrawValidatorCommission.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgWithdrawValidatorCommission.typeUrl, MsgWithdrawValidatorCommission);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgWithdrawValidatorCommission.aminoType, MsgWithdrawValidatorCommission.typeUrl);
function createBaseMsgWithdrawValidatorCommissionResponse() {
    return {
        amount: []
    };
}
export const MsgWithdrawValidatorCommissionResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
    aminoType: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse",
    is(o) {
        return o && (o.$typeUrl === MsgWithdrawValidatorCommissionResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgWithdrawValidatorCommissionResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawValidatorCommissionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseMsgWithdrawValidatorCommissionResponse();
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return MsgWithdrawValidatorCommissionResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawValidatorCommissionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
            value: MsgWithdrawValidatorCommissionResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgWithdrawValidatorCommissionResponse.typeUrl, MsgWithdrawValidatorCommissionResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgWithdrawValidatorCommissionResponse.aminoType, MsgWithdrawValidatorCommissionResponse.typeUrl);
function createBaseMsgFundCommunityPool() {
    return {
        amount: [],
        depositor: ""
    };
}
export const MsgFundCommunityPool = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
    aminoType: "cosmos-sdk/MsgFundCommunityPool",
    is(o) {
        return o && (o.$typeUrl === MsgFundCommunityPool.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])) && typeof o.depositor === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgFundCommunityPool.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])) && typeof o.depositor === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundCommunityPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.depositor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgFundCommunityPool();
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        message.depositor = object.depositor ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return MsgFundCommunityPool.decode(message.value);
    },
    toProto(message) {
        return MsgFundCommunityPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
            value: MsgFundCommunityPool.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgFundCommunityPool.typeUrl, MsgFundCommunityPool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgFundCommunityPool.aminoType, MsgFundCommunityPool.typeUrl);
function createBaseMsgFundCommunityPoolResponse() {
    return {};
}
export const MsgFundCommunityPoolResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
    aminoType: "cosmos-sdk/MsgFundCommunityPoolResponse",
    is(o) {
        return o && o.$typeUrl === MsgFundCommunityPoolResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgFundCommunityPoolResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundCommunityPoolResponse();
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
        const message = createBaseMsgFundCommunityPoolResponse();
        return message;
    },
    fromProtoMsg(message) {
        return MsgFundCommunityPoolResponse.decode(message.value);
    },
    toProto(message) {
        return MsgFundCommunityPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
            value: MsgFundCommunityPoolResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgFundCommunityPoolResponse.typeUrl, MsgFundCommunityPoolResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgFundCommunityPoolResponse.aminoType, MsgFundCommunityPoolResponse.typeUrl);
//# sourceMappingURL=tx.js.map