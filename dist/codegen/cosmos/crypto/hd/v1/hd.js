import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
function createBaseBIP44Params() {
    return {
        purpose: 0,
        coinType: 0,
        account: 0,
        change: false,
        addressIndex: 0
    };
}
export const BIP44Params = {
    typeUrl: "/cosmos.crypto.hd.v1.BIP44Params",
    aminoType: "cosmos-sdk/BIP44Params",
    is(o) {
        return o && (o.$typeUrl === BIP44Params.typeUrl || typeof o.purpose === "number" && typeof o.coinType === "number" && typeof o.account === "number" && typeof o.change === "boolean" && typeof o.addressIndex === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === BIP44Params.typeUrl || typeof o.purpose === "number" && typeof o.coin_type === "number" && typeof o.account === "number" && typeof o.change === "boolean" && typeof o.address_index === "number");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.purpose !== 0) {
            writer.uint32(8).uint32(message.purpose);
        }
        if (message.coinType !== 0) {
            writer.uint32(16).uint32(message.coinType);
        }
        if (message.account !== 0) {
            writer.uint32(24).uint32(message.account);
        }
        if (message.change === true) {
            writer.uint32(32).bool(message.change);
        }
        if (message.addressIndex !== 0) {
            writer.uint32(40).uint32(message.addressIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBIP44Params();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purpose = reader.uint32();
                    break;
                case 2:
                    message.coinType = reader.uint32();
                    break;
                case 3:
                    message.account = reader.uint32();
                    break;
                case 4:
                    message.change = reader.bool();
                    break;
                case 5:
                    message.addressIndex = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBIP44Params();
        message.purpose = object.purpose ?? 0;
        message.coinType = object.coinType ?? 0;
        message.account = object.account ?? 0;
        message.change = object.change ?? false;
        message.addressIndex = object.addressIndex ?? 0;
        return message;
    },
    fromProtoMsg(message) {
        return BIP44Params.decode(message.value);
    },
    toProto(message) {
        return BIP44Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.hd.v1.BIP44Params",
            value: BIP44Params.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(BIP44Params.typeUrl, BIP44Params);
GlobalDecoderRegistry.registerAminoProtoMapping(BIP44Params.aminoType, BIP44Params.typeUrl);
//# sourceMappingURL=hd.js.map