import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
function createBaseContractExecutionAuthorization() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
        grants: []
    };
}
export const ContractExecutionAuthorization = {
    typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
    aminoType: "wasm/ContractExecutionAuthorization",
    is(o) {
        return o && (o.$typeUrl === ContractExecutionAuthorization.typeUrl || Array.isArray(o.grants) && (!o.grants.length || ContractGrant.is(o.grants[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ContractExecutionAuthorization.typeUrl || Array.isArray(o.grants) && (!o.grants.length || ContractGrant.isSDK(o.grants[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.grants) {
            ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractExecutionAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(ContractGrant.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContractExecutionAuthorization();
        message.grants = object.grants?.map(e => ContractGrant.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return ContractExecutionAuthorization.decode(message.value);
    },
    toProto(message) {
        return ContractExecutionAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
            value: ContractExecutionAuthorization.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ContractExecutionAuthorization.typeUrl, ContractExecutionAuthorization);
GlobalDecoderRegistry.registerAminoProtoMapping(ContractExecutionAuthorization.aminoType, ContractExecutionAuthorization.typeUrl);
function createBaseContractMigrationAuthorization() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
        grants: []
    };
}
export const ContractMigrationAuthorization = {
    typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
    aminoType: "wasm/ContractMigrationAuthorization",
    is(o) {
        return o && (o.$typeUrl === ContractMigrationAuthorization.typeUrl || Array.isArray(o.grants) && (!o.grants.length || ContractGrant.is(o.grants[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ContractMigrationAuthorization.typeUrl || Array.isArray(o.grants) && (!o.grants.length || ContractGrant.isSDK(o.grants[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.grants) {
            ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractMigrationAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(ContractGrant.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContractMigrationAuthorization();
        message.grants = object.grants?.map(e => ContractGrant.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return ContractMigrationAuthorization.decode(message.value);
    },
    toProto(message) {
        return ContractMigrationAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
            value: ContractMigrationAuthorization.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ContractMigrationAuthorization.typeUrl, ContractMigrationAuthorization);
GlobalDecoderRegistry.registerAminoProtoMapping(ContractMigrationAuthorization.aminoType, ContractMigrationAuthorization.typeUrl);
function createBaseContractGrant() {
    return {
        contract: "",
        limit: undefined,
        filter: undefined
    };
}
export const ContractGrant = {
    typeUrl: "/cosmwasm.wasm.v1.ContractGrant",
    aminoType: "wasm/ContractGrant",
    is(o) {
        return o && (o.$typeUrl === ContractGrant.typeUrl || typeof o.contract === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === ContractGrant.typeUrl || typeof o.contract === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        if (message.limit !== undefined) {
            Any.encode(GlobalDecoderRegistry.wrapAny(message.limit), writer.uint32(18).fork()).ldelim();
        }
        if (message.filter !== undefined) {
            Any.encode(GlobalDecoderRegistry.wrapAny(message.filter), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract = reader.string();
                    break;
                case 2:
                    message.limit = GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                case 3:
                    message.filter = GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContractGrant();
        message.contract = object.contract ?? "";
        message.limit = object.limit !== undefined && object.limit !== null ? GlobalDecoderRegistry.fromPartial(object.limit) : undefined;
        message.filter = object.filter !== undefined && object.filter !== null ? GlobalDecoderRegistry.fromPartial(object.filter) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return ContractGrant.decode(message.value);
    },
    toProto(message) {
        return ContractGrant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractGrant",
            value: ContractGrant.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ContractGrant.typeUrl, ContractGrant);
GlobalDecoderRegistry.registerAminoProtoMapping(ContractGrant.aminoType, ContractGrant.typeUrl);
function createBaseMaxCallsLimit() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
        remaining: BigInt(0)
    };
}
export const MaxCallsLimit = {
    typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
    aminoType: "wasm/MaxCallsLimit",
    is(o) {
        return o && (o.$typeUrl === MaxCallsLimit.typeUrl || typeof o.remaining === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MaxCallsLimit.typeUrl || typeof o.remaining === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.remaining !== BigInt(0)) {
            writer.uint32(8).uint64(message.remaining);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMaxCallsLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.remaining = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMaxCallsLimit();
        message.remaining = object.remaining !== undefined && object.remaining !== null ? BigInt(object.remaining.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return MaxCallsLimit.decode(message.value);
    },
    toProto(message) {
        return MaxCallsLimit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
            value: MaxCallsLimit.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MaxCallsLimit.typeUrl, MaxCallsLimit);
GlobalDecoderRegistry.registerAminoProtoMapping(MaxCallsLimit.aminoType, MaxCallsLimit.typeUrl);
function createBaseMaxFundsLimit() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
        amounts: []
    };
}
export const MaxFundsLimit = {
    typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
    aminoType: "wasm/MaxFundsLimit",
    is(o) {
        return o && (o.$typeUrl === MaxFundsLimit.typeUrl || Array.isArray(o.amounts) && (!o.amounts.length || Coin.is(o.amounts[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MaxFundsLimit.typeUrl || Array.isArray(o.amounts) && (!o.amounts.length || Coin.isSDK(o.amounts[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amounts) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMaxFundsLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amounts.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMaxFundsLimit();
        message.amounts = object.amounts?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return MaxFundsLimit.decode(message.value);
    },
    toProto(message) {
        return MaxFundsLimit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
            value: MaxFundsLimit.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MaxFundsLimit.typeUrl, MaxFundsLimit);
GlobalDecoderRegistry.registerAminoProtoMapping(MaxFundsLimit.aminoType, MaxFundsLimit.typeUrl);
function createBaseCombinedLimit() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
        callsRemaining: BigInt(0),
        amounts: []
    };
}
export const CombinedLimit = {
    typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
    aminoType: "wasm/CombinedLimit",
    is(o) {
        return o && (o.$typeUrl === CombinedLimit.typeUrl || typeof o.callsRemaining === "bigint" && Array.isArray(o.amounts) && (!o.amounts.length || Coin.is(o.amounts[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === CombinedLimit.typeUrl || typeof o.calls_remaining === "bigint" && Array.isArray(o.amounts) && (!o.amounts.length || Coin.isSDK(o.amounts[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.callsRemaining !== BigInt(0)) {
            writer.uint32(8).uint64(message.callsRemaining);
        }
        for (const v of message.amounts) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCombinedLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.callsRemaining = reader.uint64();
                    break;
                case 2:
                    message.amounts.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCombinedLimit();
        message.callsRemaining = object.callsRemaining !== undefined && object.callsRemaining !== null ? BigInt(object.callsRemaining.toString()) : BigInt(0);
        message.amounts = object.amounts?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return CombinedLimit.decode(message.value);
    },
    toProto(message) {
        return CombinedLimit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
            value: CombinedLimit.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(CombinedLimit.typeUrl, CombinedLimit);
GlobalDecoderRegistry.registerAminoProtoMapping(CombinedLimit.aminoType, CombinedLimit.typeUrl);
function createBaseAllowAllMessagesFilter() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter"
    };
}
export const AllowAllMessagesFilter = {
    typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
    aminoType: "wasm/AllowAllMessagesFilter",
    is(o) {
        return o && o.$typeUrl === AllowAllMessagesFilter.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === AllowAllMessagesFilter.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllowAllMessagesFilter();
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
        const message = createBaseAllowAllMessagesFilter();
        return message;
    },
    fromProtoMsg(message) {
        return AllowAllMessagesFilter.decode(message.value);
    },
    toProto(message) {
        return AllowAllMessagesFilter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
            value: AllowAllMessagesFilter.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(AllowAllMessagesFilter.typeUrl, AllowAllMessagesFilter);
GlobalDecoderRegistry.registerAminoProtoMapping(AllowAllMessagesFilter.aminoType, AllowAllMessagesFilter.typeUrl);
function createBaseAcceptedMessageKeysFilter() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
        keys: []
    };
}
export const AcceptedMessageKeysFilter = {
    typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
    aminoType: "wasm/AcceptedMessageKeysFilter",
    is(o) {
        return o && (o.$typeUrl === AcceptedMessageKeysFilter.typeUrl || Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === AcceptedMessageKeysFilter.typeUrl || Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.keys) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAcceptedMessageKeysFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAcceptedMessageKeysFilter();
        message.keys = object.keys?.map(e => e) || [];
        return message;
    },
    fromProtoMsg(message) {
        return AcceptedMessageKeysFilter.decode(message.value);
    },
    toProto(message) {
        return AcceptedMessageKeysFilter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
            value: AcceptedMessageKeysFilter.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(AcceptedMessageKeysFilter.typeUrl, AcceptedMessageKeysFilter);
GlobalDecoderRegistry.registerAminoProtoMapping(AcceptedMessageKeysFilter.aminoType, AcceptedMessageKeysFilter.typeUrl);
function createBaseAcceptedMessagesFilter() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
        messages: []
    };
}
export const AcceptedMessagesFilter = {
    typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
    aminoType: "wasm/AcceptedMessagesFilter",
    is(o) {
        return o && (o.$typeUrl === AcceptedMessagesFilter.typeUrl || Array.isArray(o.messages) && (!o.messages.length || o.messages[0] instanceof Uint8Array || typeof o.messages[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === AcceptedMessagesFilter.typeUrl || Array.isArray(o.messages) && (!o.messages.length || o.messages[0] instanceof Uint8Array || typeof o.messages[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.messages) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAcceptedMessagesFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAcceptedMessagesFilter();
        message.messages = object.messages?.map(e => e) || [];
        return message;
    },
    fromProtoMsg(message) {
        return AcceptedMessagesFilter.decode(message.value);
    },
    toProto(message) {
        return AcceptedMessagesFilter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
            value: AcceptedMessagesFilter.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(AcceptedMessagesFilter.typeUrl, AcceptedMessagesFilter);
GlobalDecoderRegistry.registerAminoProtoMapping(AcceptedMessagesFilter.aminoType, AcceptedMessagesFilter.typeUrl);
//# sourceMappingURL=authz.js.map