import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
function createBaseParams() {
    return {
        sendEnabled: [],
        defaultSendEnabled: false
    };
}
export const Params = {
    typeUrl: "/cosmos.bank.v1beta1.Params",
    aminoType: "cosmos-sdk/Params",
    is(o) {
        return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.sendEnabled) && (!o.sendEnabled.length || SendEnabled.is(o.sendEnabled[0])) && typeof o.defaultSendEnabled === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.send_enabled) && (!o.send_enabled.length || SendEnabled.isSDK(o.send_enabled[0])) && typeof o.default_send_enabled === "boolean");
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.sendEnabled) {
            SendEnabled.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.defaultSendEnabled === true) {
            writer.uint32(16).bool(message.defaultSendEnabled);
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
                    message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.defaultSendEnabled = reader.bool();
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
        message.sendEnabled = object.sendEnabled?.map(e => SendEnabled.fromPartial(e)) || [];
        message.defaultSendEnabled = object.defaultSendEnabled ?? false;
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
            typeUrl: "/cosmos.bank.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseSendEnabled() {
    return {
        denom: "",
        enabled: false
    };
}
export const SendEnabled = {
    typeUrl: "/cosmos.bank.v1beta1.SendEnabled",
    aminoType: "cosmos-sdk/SendEnabled",
    is(o) {
        return o && (o.$typeUrl === SendEnabled.typeUrl || typeof o.denom === "string" && typeof o.enabled === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === SendEnabled.typeUrl || typeof o.denom === "string" && typeof o.enabled === "boolean");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendEnabled();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSendEnabled();
        message.denom = object.denom ?? "";
        message.enabled = object.enabled ?? false;
        return message;
    },
    fromProtoMsg(message) {
        return SendEnabled.decode(message.value);
    },
    toProto(message) {
        return SendEnabled.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.SendEnabled",
            value: SendEnabled.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(SendEnabled.typeUrl, SendEnabled);
GlobalDecoderRegistry.registerAminoProtoMapping(SendEnabled.aminoType, SendEnabled.typeUrl);
function createBaseInput() {
    return {
        address: "",
        coins: []
    };
}
export const Input = {
    typeUrl: "/cosmos.bank.v1beta1.Input",
    aminoType: "cosmos-sdk/Input",
    is(o) {
        return o && (o.$typeUrl === Input.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Input.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInput();
        message.address = object.address ?? "";
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return Input.decode(message.value);
    },
    toProto(message) {
        return Input.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Input",
            value: Input.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Input.typeUrl, Input);
GlobalDecoderRegistry.registerAminoProtoMapping(Input.aminoType, Input.typeUrl);
function createBaseOutput() {
    return {
        address: "",
        coins: []
    };
}
export const Output = {
    typeUrl: "/cosmos.bank.v1beta1.Output",
    aminoType: "cosmos-sdk/Output",
    is(o) {
        return o && (o.$typeUrl === Output.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Output.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOutput();
        message.address = object.address ?? "";
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return Output.decode(message.value);
    },
    toProto(message) {
        return Output.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Output",
            value: Output.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Output.typeUrl, Output);
GlobalDecoderRegistry.registerAminoProtoMapping(Output.aminoType, Output.typeUrl);
function createBaseSupply() {
    return {
        $typeUrl: "/cosmos.bank.v1beta1.Supply",
        total: []
    };
}
export const Supply = {
    typeUrl: "/cosmos.bank.v1beta1.Supply",
    aminoType: "cosmos-sdk/Supply",
    is(o) {
        return o && (o.$typeUrl === Supply.typeUrl || Array.isArray(o.total) && (!o.total.length || Coin.is(o.total[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Supply.typeUrl || Array.isArray(o.total) && (!o.total.length || Coin.isSDK(o.total[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.total) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSupply();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSupply();
        message.total = object.total?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return Supply.decode(message.value);
    },
    toProto(message) {
        return Supply.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Supply",
            value: Supply.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Supply.typeUrl, Supply);
GlobalDecoderRegistry.registerAminoProtoMapping(Supply.aminoType, Supply.typeUrl);
function createBaseDenomUnit() {
    return {
        denom: "",
        exponent: 0,
        aliases: []
    };
}
export const DenomUnit = {
    typeUrl: "/cosmos.bank.v1beta1.DenomUnit",
    aminoType: "cosmos-sdk/DenomUnit",
    is(o) {
        return o && (o.$typeUrl === DenomUnit.typeUrl || typeof o.denom === "string" && typeof o.exponent === "number" && Array.isArray(o.aliases) && (!o.aliases.length || typeof o.aliases[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === DenomUnit.typeUrl || typeof o.denom === "string" && typeof o.exponent === "number" && Array.isArray(o.aliases) && (!o.aliases.length || typeof o.aliases[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.exponent !== 0) {
            writer.uint32(16).uint32(message.exponent);
        }
        for (const v of message.aliases) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomUnit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.exponent = reader.uint32();
                    break;
                case 3:
                    message.aliases.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDenomUnit();
        message.denom = object.denom ?? "";
        message.exponent = object.exponent ?? 0;
        message.aliases = object.aliases?.map(e => e) || [];
        return message;
    },
    fromProtoMsg(message) {
        return DenomUnit.decode(message.value);
    },
    toProto(message) {
        return DenomUnit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.DenomUnit",
            value: DenomUnit.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(DenomUnit.typeUrl, DenomUnit);
GlobalDecoderRegistry.registerAminoProtoMapping(DenomUnit.aminoType, DenomUnit.typeUrl);
function createBaseMetadata() {
    return {
        description: "",
        denomUnits: [],
        base: "",
        display: "",
        name: "",
        symbol: "",
        uri: "",
        uriHash: ""
    };
}
export const Metadata = {
    typeUrl: "/cosmos.bank.v1beta1.Metadata",
    aminoType: "cosmos-sdk/Metadata",
    is(o) {
        return o && (o.$typeUrl === Metadata.typeUrl || typeof o.description === "string" && Array.isArray(o.denomUnits) && (!o.denomUnits.length || DenomUnit.is(o.denomUnits[0])) && typeof o.base === "string" && typeof o.display === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.uri === "string" && typeof o.uriHash === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Metadata.typeUrl || typeof o.description === "string" && Array.isArray(o.denom_units) && (!o.denom_units.length || DenomUnit.isSDK(o.denom_units[0])) && typeof o.base === "string" && typeof o.display === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        for (const v of message.denomUnits) {
            DenomUnit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.base !== "") {
            writer.uint32(26).string(message.base);
        }
        if (message.display !== "") {
            writer.uint32(34).string(message.display);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(50).string(message.symbol);
        }
        if (message.uri !== "") {
            writer.uint32(58).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(66).string(message.uriHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.denomUnits.push(DenomUnit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.base = reader.string();
                    break;
                case 4:
                    message.display = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.symbol = reader.string();
                    break;
                case 7:
                    message.uri = reader.string();
                    break;
                case 8:
                    message.uriHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.description = object.description ?? "";
        message.denomUnits = object.denomUnits?.map(e => DenomUnit.fromPartial(e)) || [];
        message.base = object.base ?? "";
        message.display = object.display ?? "";
        message.name = object.name ?? "";
        message.symbol = object.symbol ?? "";
        message.uri = object.uri ?? "";
        message.uriHash = object.uriHash ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return Metadata.decode(message.value);
    },
    toProto(message) {
        return Metadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Metadata",
            value: Metadata.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Metadata.typeUrl, Metadata);
GlobalDecoderRegistry.registerAminoProtoMapping(Metadata.aminoType, Metadata.typeUrl);
//# sourceMappingURL=bank.js.map