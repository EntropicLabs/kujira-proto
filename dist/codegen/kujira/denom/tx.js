import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
function createBaseMsgCreateDenom() {
    return {
        sender: "",
        nonce: ""
    };
}
export const MsgCreateDenom = {
    typeUrl: "/kujira.denom.MsgCreateDenom",
    is(o) {
        return o && (o.$typeUrl === MsgCreateDenom.typeUrl || typeof o.sender === "string" && typeof o.nonce === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgCreateDenom.typeUrl || typeof o.sender === "string" && typeof o.nonce === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.nonce !== "") {
            writer.uint32(18).string(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.nonce = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDenom();
        message.sender = object.sender ?? "";
        message.nonce = object.nonce ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return MsgCreateDenom.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.denom.MsgCreateDenom",
            value: MsgCreateDenom.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgCreateDenom.typeUrl, MsgCreateDenom);
function createBaseMsgCreateDenomResponse() {
    return {
        newTokenDenom: ""
    };
}
export const MsgCreateDenomResponse = {
    typeUrl: "/kujira.denom.MsgCreateDenomResponse",
    is(o) {
        return o && (o.$typeUrl === MsgCreateDenomResponse.typeUrl || typeof o.newTokenDenom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgCreateDenomResponse.typeUrl || typeof o.new_token_denom === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.newTokenDenom !== "") {
            writer.uint32(10).string(message.newTokenDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newTokenDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDenomResponse();
        message.newTokenDenom = object.newTokenDenom ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return MsgCreateDenomResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.denom.MsgCreateDenomResponse",
            value: MsgCreateDenomResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgCreateDenomResponse.typeUrl, MsgCreateDenomResponse);
function createBaseMsgMint() {
    return {
        sender: "",
        amount: Coin.fromPartial({}),
        recipient: ""
    };
}
export const MsgMint = {
    typeUrl: "/kujira.denom.MsgMint",
    is(o) {
        return o && (o.$typeUrl === MsgMint.typeUrl || typeof o.sender === "string" && Coin.is(o.amount) && typeof o.recipient === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgMint.typeUrl || typeof o.sender === "string" && Coin.isSDK(o.amount) && typeof o.recipient === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgMint();
        message.sender = object.sender ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.recipient = object.recipient ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return MsgMint.decode(message.value);
    },
    toProto(message) {
        return MsgMint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.denom.MsgMint",
            value: MsgMint.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgMint.typeUrl, MsgMint);
function createBaseMsgMintResponse() {
    return {};
}
export const MsgMintResponse = {
    typeUrl: "/kujira.denom.MsgMintResponse",
    is(o) {
        return o && o.$typeUrl === MsgMintResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgMintResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintResponse();
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
        const message = createBaseMsgMintResponse();
        return message;
    },
    fromProtoMsg(message) {
        return MsgMintResponse.decode(message.value);
    },
    toProto(message) {
        return MsgMintResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.denom.MsgMintResponse",
            value: MsgMintResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgMintResponse.typeUrl, MsgMintResponse);
function createBaseMsgBurn() {
    return {
        sender: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgBurn = {
    typeUrl: "/kujira.denom.MsgBurn",
    is(o) {
        return o && (o.$typeUrl === MsgBurn.typeUrl || typeof o.sender === "string" && Coin.is(o.amount));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgBurn.typeUrl || typeof o.sender === "string" && Coin.isSDK(o.amount));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBurn();
        message.sender = object.sender ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return MsgBurn.decode(message.value);
    },
    toProto(message) {
        return MsgBurn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.denom.MsgBurn",
            value: MsgBurn.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgBurn.typeUrl, MsgBurn);
function createBaseMsgBurnResponse() {
    return {};
}
export const MsgBurnResponse = {
    typeUrl: "/kujira.denom.MsgBurnResponse",
    is(o) {
        return o && o.$typeUrl === MsgBurnResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgBurnResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnResponse();
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
        const message = createBaseMsgBurnResponse();
        return message;
    },
    fromProtoMsg(message) {
        return MsgBurnResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBurnResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.denom.MsgBurnResponse",
            value: MsgBurnResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgBurnResponse.typeUrl, MsgBurnResponse);
function createBaseMsgChangeAdmin() {
    return {
        sender: "",
        denom: "",
        newAdmin: ""
    };
}
export const MsgChangeAdmin = {
    typeUrl: "/kujira.denom.MsgChangeAdmin",
    is(o) {
        return o && (o.$typeUrl === MsgChangeAdmin.typeUrl || typeof o.sender === "string" && typeof o.denom === "string" && typeof o.newAdmin === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgChangeAdmin.typeUrl || typeof o.sender === "string" && typeof o.denom === "string" && typeof o.newAdmin === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChangeAdmin();
        message.sender = object.sender ?? "";
        message.denom = object.denom ?? "";
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return MsgChangeAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgChangeAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.denom.MsgChangeAdmin",
            value: MsgChangeAdmin.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgChangeAdmin.typeUrl, MsgChangeAdmin);
function createBaseMsgChangeAdminResponse() {
    return {};
}
export const MsgChangeAdminResponse = {
    typeUrl: "/kujira.denom.MsgChangeAdminResponse",
    is(o) {
        return o && o.$typeUrl === MsgChangeAdminResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgChangeAdminResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeAdminResponse();
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
        const message = createBaseMsgChangeAdminResponse();
        return message;
    },
    fromProtoMsg(message) {
        return MsgChangeAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChangeAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.denom.MsgChangeAdminResponse",
            value: MsgChangeAdminResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgChangeAdminResponse.typeUrl, MsgChangeAdminResponse);
//# sourceMappingURL=tx.js.map