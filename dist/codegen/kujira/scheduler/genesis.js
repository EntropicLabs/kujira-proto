import { Params } from "./params";
import { Hook } from "./hook";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        hookList: [],
        hookCount: BigInt(0)
    };
}
export const GenesisState = {
    typeUrl: "/kujira.scheduler.GenesisState",
    is(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.hookList) && (!o.hookList.length || Hook.is(o.hookList[0])) && typeof o.hookCount === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.hookList) && (!o.hookList.length || Hook.isSDK(o.hookList[0])) && typeof o.hookCount === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.hookList) {
            Hook.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.hookCount !== BigInt(0)) {
            writer.uint32(24).uint64(message.hookCount);
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
                    message.hookList.push(Hook.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.hookCount = reader.uint64();
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
        message.hookList = object.hookList?.map(e => Hook.fromPartial(e)) || [];
        message.hookCount = object.hookCount !== undefined && object.hookCount !== null ? BigInt(object.hookCount.toString()) : BigInt(0);
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
            typeUrl: "/kujira.scheduler.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
//# sourceMappingURL=genesis.js.map