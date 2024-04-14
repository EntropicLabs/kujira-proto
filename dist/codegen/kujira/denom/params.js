import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
function createBaseParams() {
    return {
        creationFee: []
    };
}
export const Params = {
    typeUrl: "/kujira.denom.Params",
    is(o) {
        return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.creationFee) && (!o.creationFee.length || Coin.is(o.creationFee[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.creation_fee) && (!o.creation_fee.length || Coin.isSDK(o.creation_fee[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.creationFee) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.creationFee.push(Coin.decode(reader, reader.uint32()));
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
        message.creationFee = object.creationFee?.map(e => Coin.fromPartial(e)) || [];
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
            typeUrl: "/kujira.denom.Params",
            value: Params.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
//# sourceMappingURL=params.js.map