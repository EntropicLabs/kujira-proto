import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
function createBaseCoin() {
    return {
        denom: "",
        amount: ""
    };
}
export const Coin = {
    typeUrl: "/cosmos.base.v1beta1.Coin",
    aminoType: "cosmos-sdk/Coin",
    is(o) {
        return o && (o.$typeUrl === Coin.typeUrl || typeof o.denom === "string" && typeof o.amount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Coin.typeUrl || typeof o.denom === "string" && typeof o.amount === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCoin();
        message.denom = object.denom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return Coin.decode(message.value);
    },
    toProto(message) {
        return Coin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.Coin",
            value: Coin.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Coin.typeUrl, Coin);
GlobalDecoderRegistry.registerAminoProtoMapping(Coin.aminoType, Coin.typeUrl);
function createBaseDecCoin() {
    return {
        denom: "",
        amount: ""
    };
}
export const DecCoin = {
    typeUrl: "/cosmos.base.v1beta1.DecCoin",
    aminoType: "cosmos-sdk/DecCoin",
    is(o) {
        return o && (o.$typeUrl === DecCoin.typeUrl || typeof o.denom === "string" && typeof o.amount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === DecCoin.typeUrl || typeof o.denom === "string" && typeof o.amount === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDecCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDecCoin();
        message.denom = object.denom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return DecCoin.decode(message.value);
    },
    toProto(message) {
        return DecCoin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.DecCoin",
            value: DecCoin.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(DecCoin.typeUrl, DecCoin);
GlobalDecoderRegistry.registerAminoProtoMapping(DecCoin.aminoType, DecCoin.typeUrl);
function createBaseIntProto() {
    return {
        int: ""
    };
}
export const IntProto = {
    typeUrl: "/cosmos.base.v1beta1.IntProto",
    aminoType: "cosmos-sdk/IntProto",
    is(o) {
        return o && (o.$typeUrl === IntProto.typeUrl || typeof o.int === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === IntProto.typeUrl || typeof o.int === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.int !== "") {
            writer.uint32(10).string(message.int);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIntProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.int = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIntProto();
        message.int = object.int ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return IntProto.decode(message.value);
    },
    toProto(message) {
        return IntProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.IntProto",
            value: IntProto.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(IntProto.typeUrl, IntProto);
GlobalDecoderRegistry.registerAminoProtoMapping(IntProto.aminoType, IntProto.typeUrl);
function createBaseDecProto() {
    return {
        dec: ""
    };
}
export const DecProto = {
    typeUrl: "/cosmos.base.v1beta1.DecProto",
    aminoType: "cosmos-sdk/DecProto",
    is(o) {
        return o && (o.$typeUrl === DecProto.typeUrl || typeof o.dec === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === DecProto.typeUrl || typeof o.dec === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.dec !== "") {
            writer.uint32(10).string(message.dec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDecProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dec = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDecProto();
        message.dec = object.dec ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return DecProto.decode(message.value);
    },
    toProto(message) {
        return DecProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.DecProto",
            value: DecProto.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(DecProto.typeUrl, DecProto);
GlobalDecoderRegistry.registerAminoProtoMapping(DecProto.aminoType, DecProto.typeUrl);
//# sourceMappingURL=coin.js.map