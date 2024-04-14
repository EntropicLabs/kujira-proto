import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
function createBaseHook() {
    return {
        id: BigInt(0),
        executor: "",
        contract: "",
        msg: new Uint8Array(),
        frequency: BigInt(0),
        funds: []
    };
}
export const Hook = {
    typeUrl: "/kujira.scheduler.Hook",
    is(o) {
        return o && (o.$typeUrl === Hook.typeUrl || typeof o.id === "bigint" && typeof o.executor === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && typeof o.frequency === "bigint" && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Hook.typeUrl || typeof o.id === "bigint" && typeof o.executor === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && typeof o.frequency === "bigint" && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.executor !== "") {
            writer.uint32(18).string(message.executor);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        if (message.frequency !== BigInt(0)) {
            writer.uint32(40).int64(message.frequency);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHook();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.executor = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
                    break;
                case 4:
                    message.msg = reader.bytes();
                    break;
                case 5:
                    message.frequency = reader.int64();
                    break;
                case 6:
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
        const message = createBaseHook();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.executor = object.executor ?? "";
        message.contract = object.contract ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.frequency = object.frequency !== undefined && object.frequency !== null ? BigInt(object.frequency.toString()) : BigInt(0);
        message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return Hook.decode(message.value);
    },
    toProto(message) {
        return Hook.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.scheduler.Hook",
            value: Hook.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Hook.typeUrl, Hook);
//# sourceMappingURL=hook.js.map