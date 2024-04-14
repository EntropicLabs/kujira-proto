import { Coin } from "../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../binary";
import { GlobalDecoderRegistry } from "../registry";
function createBaseMsgWithdrawAllDelegatorRewards() {
    return {
        delegatorAddress: ""
    };
}
export const MsgWithdrawAllDelegatorRewards = {
    typeUrl: "/batch.MsgWithdrawAllDelegatorRewards",
    is(o) {
        return o && (o.$typeUrl === MsgWithdrawAllDelegatorRewards.typeUrl || typeof o.delegatorAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgWithdrawAllDelegatorRewards.typeUrl || typeof o.delegator_address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawAllDelegatorRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawAllDelegatorRewards();
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return MsgWithdrawAllDelegatorRewards.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawAllDelegatorRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/batch.MsgWithdrawAllDelegatorRewards",
            value: MsgWithdrawAllDelegatorRewards.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgWithdrawAllDelegatorRewards.typeUrl, MsgWithdrawAllDelegatorRewards);
function createBaseMsgWithdrawAllDelegatorRewardsResponse() {
    return {
        amount: []
    };
}
export const MsgWithdrawAllDelegatorRewardsResponse = {
    typeUrl: "/batch.MsgWithdrawAllDelegatorRewardsResponse",
    is(o) {
        return o && (o.$typeUrl === MsgWithdrawAllDelegatorRewardsResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgWithdrawAllDelegatorRewardsResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
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
        const message = createBaseMsgWithdrawAllDelegatorRewardsResponse();
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
        const message = createBaseMsgWithdrawAllDelegatorRewardsResponse();
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return MsgWithdrawAllDelegatorRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawAllDelegatorRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/batch.MsgWithdrawAllDelegatorRewardsResponse",
            value: MsgWithdrawAllDelegatorRewardsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgWithdrawAllDelegatorRewardsResponse.typeUrl, MsgWithdrawAllDelegatorRewardsResponse);
function createBaseMsgBatchResetDelegation() {
    return {
        delegatorAddress: "",
        validators: [],
        amounts: []
    };
}
export const MsgBatchResetDelegation = {
    typeUrl: "/batch.MsgBatchResetDelegation",
    is(o) {
        return o && (o.$typeUrl === MsgBatchResetDelegation.typeUrl || typeof o.delegatorAddress === "string" && Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string") && Array.isArray(o.amounts) && (!o.amounts.length || typeof o.amounts[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgBatchResetDelegation.typeUrl || typeof o.delegator_address === "string" && Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string") && Array.isArray(o.amounts) && (!o.amounts.length || typeof o.amounts[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        for (const v of message.validators) {
            writer.uint32(18).string(v);
        }
        for (const v of message.amounts) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchResetDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validators.push(reader.string());
                    break;
                case 3:
                    message.amounts.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBatchResetDelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validators = object.validators?.map(e => e) || [];
        message.amounts = object.amounts?.map(e => e) || [];
        return message;
    },
    fromProtoMsg(message) {
        return MsgBatchResetDelegation.decode(message.value);
    },
    toProto(message) {
        return MsgBatchResetDelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/batch.MsgBatchResetDelegation",
            value: MsgBatchResetDelegation.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgBatchResetDelegation.typeUrl, MsgBatchResetDelegation);
function createBaseMsgBatchResetDelegationResponse() {
    return {};
}
export const MsgBatchResetDelegationResponse = {
    typeUrl: "/batch.MsgBatchResetDelegationResponse",
    is(o) {
        return o && o.$typeUrl === MsgBatchResetDelegationResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgBatchResetDelegationResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchResetDelegationResponse();
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
        const message = createBaseMsgBatchResetDelegationResponse();
        return message;
    },
    fromProtoMsg(message) {
        return MsgBatchResetDelegationResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBatchResetDelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/batch.MsgBatchResetDelegationResponse",
            value: MsgBatchResetDelegationResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgBatchResetDelegationResponse.typeUrl, MsgBatchResetDelegationResponse);
//# sourceMappingURL=tx.js.map