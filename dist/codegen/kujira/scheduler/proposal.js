import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
function createBaseCreateHookProposal() {
    return {
        title: "",
        description: "",
        executor: "",
        contract: "",
        msg: new Uint8Array(),
        frequency: BigInt(0),
        funds: []
    };
}
export const CreateHookProposal = {
    typeUrl: "/kujira.scheduler.CreateHookProposal",
    is(o) {
        return o && (o.$typeUrl === CreateHookProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.executor === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && typeof o.frequency === "bigint" && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === CreateHookProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.executor === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && typeof o.frequency === "bigint" && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.executor !== "") {
            writer.uint32(26).string(message.executor);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(42).bytes(message.msg);
        }
        if (message.frequency !== BigInt(0)) {
            writer.uint32(48).int64(message.frequency);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateHookProposal();
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
                    message.executor = reader.string();
                    break;
                case 4:
                    message.contract = reader.string();
                    break;
                case 5:
                    message.msg = reader.bytes();
                    break;
                case 6:
                    message.frequency = reader.int64();
                    break;
                case 7:
                    message.funds.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCreateHookProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.executor = object.executor ?? "";
        message.contract = object.contract ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.frequency = object.frequency !== undefined && object.frequency !== null ? BigInt(object.frequency.toString()) : BigInt(0);
        message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return CreateHookProposal.decode(message.value);
    },
    toProto(message) {
        return CreateHookProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.scheduler.CreateHookProposal",
            value: CreateHookProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(CreateHookProposal.typeUrl, CreateHookProposal);
function createBaseUpdateHookProposal() {
    return {
        title: "",
        description: "",
        id: BigInt(0),
        executor: "",
        contract: "",
        msg: new Uint8Array(),
        frequency: BigInt(0),
        funds: []
    };
}
export const UpdateHookProposal = {
    typeUrl: "/kujira.scheduler.UpdateHookProposal",
    is(o) {
        return o && (o.$typeUrl === UpdateHookProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.id === "bigint" && typeof o.executor === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && typeof o.frequency === "bigint" && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === UpdateHookProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.id === "bigint" && typeof o.executor === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && typeof o.frequency === "bigint" && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(24).uint64(message.id);
        }
        if (message.executor !== "") {
            writer.uint32(34).string(message.executor);
        }
        if (message.contract !== "") {
            writer.uint32(42).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(50).bytes(message.msg);
        }
        if (message.frequency !== BigInt(0)) {
            writer.uint32(56).int64(message.frequency);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateHookProposal();
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
                    message.id = reader.uint64();
                    break;
                case 4:
                    message.executor = reader.string();
                    break;
                case 5:
                    message.contract = reader.string();
                    break;
                case 6:
                    message.msg = reader.bytes();
                    break;
                case 7:
                    message.frequency = reader.int64();
                    break;
                case 8:
                    message.funds.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpdateHookProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.executor = object.executor ?? "";
        message.contract = object.contract ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.frequency = object.frequency !== undefined && object.frequency !== null ? BigInt(object.frequency.toString()) : BigInt(0);
        message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return UpdateHookProposal.decode(message.value);
    },
    toProto(message) {
        return UpdateHookProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.scheduler.UpdateHookProposal",
            value: UpdateHookProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(UpdateHookProposal.typeUrl, UpdateHookProposal);
function createBaseDeleteHookProposal() {
    return {
        title: "",
        description: "",
        id: BigInt(0)
    };
}
export const DeleteHookProposal = {
    typeUrl: "/kujira.scheduler.DeleteHookProposal",
    is(o) {
        return o && (o.$typeUrl === DeleteHookProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === DeleteHookProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.id === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(24).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteHookProposal();
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
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDeleteHookProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return DeleteHookProposal.decode(message.value);
    },
    toProto(message) {
        return DeleteHookProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.scheduler.DeleteHookProposal",
            value: DeleteHookProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(DeleteHookProposal.typeUrl, DeleteHookProposal);
//# sourceMappingURL=proposal.js.map