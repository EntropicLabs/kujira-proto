import { AccessConfig } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
function createBaseMsgStoreCode() {
    return {
        sender: "",
        wasmByteCode: new Uint8Array(),
        instantiatePermission: undefined
    };
}
export const MsgStoreCode = {
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
    aminoType: "wasm/MsgStoreCode",
    is(o) {
        return o && (o.$typeUrl === MsgStoreCode.typeUrl || typeof o.sender === "string" && (o.wasmByteCode instanceof Uint8Array || typeof o.wasmByteCode === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgStoreCode.typeUrl || typeof o.sender === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(18).bytes(message.wasmByteCode);
        }
        if (message.instantiatePermission !== undefined) {
            AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStoreCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.wasmByteCode = reader.bytes();
                    break;
                case 5:
                    message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgStoreCode();
        message.sender = object.sender ?? "";
        message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
        message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return MsgStoreCode.decode(message.value);
    },
    toProto(message) {
        return MsgStoreCode.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
            value: MsgStoreCode.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgStoreCode.typeUrl, MsgStoreCode);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgStoreCode.aminoType, MsgStoreCode.typeUrl);
function createBaseMsgStoreCodeResponse() {
    return {
        codeId: BigInt(0),
        checksum: new Uint8Array()
    };
}
export const MsgStoreCodeResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse",
    aminoType: "wasm/MsgStoreCodeResponse",
    is(o) {
        return o && (o.$typeUrl === MsgStoreCodeResponse.typeUrl || typeof o.codeId === "bigint" && (o.checksum instanceof Uint8Array || typeof o.checksum === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgStoreCodeResponse.typeUrl || typeof o.code_id === "bigint" && (o.checksum instanceof Uint8Array || typeof o.checksum === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.checksum.length !== 0) {
            writer.uint32(18).bytes(message.checksum);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStoreCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.checksum = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgStoreCodeResponse();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.checksum = object.checksum ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return MsgStoreCodeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgStoreCodeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse",
            value: MsgStoreCodeResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgStoreCodeResponse.typeUrl, MsgStoreCodeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgStoreCodeResponse.aminoType, MsgStoreCodeResponse.typeUrl);
function createBaseMsgInstantiateContract() {
    return {
        sender: "",
        admin: "",
        codeId: BigInt(0),
        label: "",
        msg: new Uint8Array(),
        funds: []
    };
}
export const MsgInstantiateContract = {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
    aminoType: "wasm/MsgInstantiateContract",
    is(o) {
        return o && (o.$typeUrl === MsgInstantiateContract.typeUrl || typeof o.sender === "string" && typeof o.admin === "string" && typeof o.codeId === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgInstantiateContract.typeUrl || typeof o.sender === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(34).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(42).bytes(message.msg);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantiateContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.codeId = reader.uint64();
                    break;
                case 4:
                    message.label = reader.string();
                    break;
                case 5:
                    message.msg = reader.bytes();
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
        const message = createBaseMsgInstantiateContract();
        message.sender = object.sender ?? "";
        message.admin = object.admin ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.label = object.label ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return MsgInstantiateContract.decode(message.value);
    },
    toProto(message) {
        return MsgInstantiateContract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
            value: MsgInstantiateContract.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgInstantiateContract.typeUrl, MsgInstantiateContract);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInstantiateContract.aminoType, MsgInstantiateContract.typeUrl);
function createBaseMsgInstantiateContract2() {
    return {
        sender: "",
        admin: "",
        codeId: BigInt(0),
        label: "",
        msg: new Uint8Array(),
        funds: [],
        salt: new Uint8Array(),
        fixMsg: false
    };
}
export const MsgInstantiateContract2 = {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
    aminoType: "wasm/MsgInstantiateContract2",
    is(o) {
        return o && (o.$typeUrl === MsgInstantiateContract2.typeUrl || typeof o.sender === "string" && typeof o.admin === "string" && typeof o.codeId === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && typeof o.fixMsg === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgInstantiateContract2.typeUrl || typeof o.sender === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && typeof o.fix_msg === "boolean");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(34).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(42).bytes(message.msg);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.salt.length !== 0) {
            writer.uint32(58).bytes(message.salt);
        }
        if (message.fixMsg === true) {
            writer.uint32(64).bool(message.fixMsg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantiateContract2();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.codeId = reader.uint64();
                    break;
                case 4:
                    message.label = reader.string();
                    break;
                case 5:
                    message.msg = reader.bytes();
                    break;
                case 6:
                    message.funds.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.salt = reader.bytes();
                    break;
                case 8:
                    message.fixMsg = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgInstantiateContract2();
        message.sender = object.sender ?? "";
        message.admin = object.admin ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.label = object.label ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
        message.salt = object.salt ?? new Uint8Array();
        message.fixMsg = object.fixMsg ?? false;
        return message;
    },
    fromProtoMsg(message) {
        return MsgInstantiateContract2.decode(message.value);
    },
    toProto(message) {
        return MsgInstantiateContract2.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
            value: MsgInstantiateContract2.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgInstantiateContract2.typeUrl, MsgInstantiateContract2);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInstantiateContract2.aminoType, MsgInstantiateContract2.typeUrl);
function createBaseMsgInstantiateContractResponse() {
    return {
        address: "",
        data: new Uint8Array()
    };
}
export const MsgInstantiateContractResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse",
    aminoType: "wasm/MsgInstantiateContractResponse",
    is(o) {
        return o && (o.$typeUrl === MsgInstantiateContractResponse.typeUrl || typeof o.address === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgInstantiateContractResponse.typeUrl || typeof o.address === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantiateContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgInstantiateContractResponse();
        message.address = object.address ?? "";
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return MsgInstantiateContractResponse.decode(message.value);
    },
    toProto(message) {
        return MsgInstantiateContractResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse",
            value: MsgInstantiateContractResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgInstantiateContractResponse.typeUrl, MsgInstantiateContractResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInstantiateContractResponse.aminoType, MsgInstantiateContractResponse.typeUrl);
function createBaseMsgInstantiateContract2Response() {
    return {
        address: "",
        data: new Uint8Array()
    };
}
export const MsgInstantiateContract2Response = {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2Response",
    aminoType: "wasm/MsgInstantiateContract2Response",
    is(o) {
        return o && (o.$typeUrl === MsgInstantiateContract2Response.typeUrl || typeof o.address === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgInstantiateContract2Response.typeUrl || typeof o.address === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantiateContract2Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgInstantiateContract2Response();
        message.address = object.address ?? "";
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return MsgInstantiateContract2Response.decode(message.value);
    },
    toProto(message) {
        return MsgInstantiateContract2Response.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2Response",
            value: MsgInstantiateContract2Response.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgInstantiateContract2Response.typeUrl, MsgInstantiateContract2Response);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInstantiateContract2Response.aminoType, MsgInstantiateContract2Response.typeUrl);
function createBaseMsgExecuteContract() {
    return {
        sender: "",
        contract: "",
        msg: new Uint8Array(),
        funds: []
    };
}
export const MsgExecuteContract = {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
    aminoType: "wasm/MsgExecuteContract",
    is(o) {
        return o && (o.$typeUrl === MsgExecuteContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgExecuteContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contract !== "") {
            writer.uint32(18).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(26).bytes(message.msg);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecuteContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.contract = reader.string();
                    break;
                case 3:
                    message.msg = reader.bytes();
                    break;
                case 5:
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
        const message = createBaseMsgExecuteContract();
        message.sender = object.sender ?? "";
        message.contract = object.contract ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return MsgExecuteContract.decode(message.value);
    },
    toProto(message) {
        return MsgExecuteContract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
            value: MsgExecuteContract.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgExecuteContract.typeUrl, MsgExecuteContract);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExecuteContract.aminoType, MsgExecuteContract.typeUrl);
function createBaseMsgExecuteContractResponse() {
    return {
        data: new Uint8Array()
    };
}
export const MsgExecuteContractResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse",
    aminoType: "wasm/MsgExecuteContractResponse",
    is(o) {
        return o && (o.$typeUrl === MsgExecuteContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgExecuteContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecuteContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExecuteContractResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return MsgExecuteContractResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExecuteContractResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse",
            value: MsgExecuteContractResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgExecuteContractResponse.typeUrl, MsgExecuteContractResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExecuteContractResponse.aminoType, MsgExecuteContractResponse.typeUrl);
function createBaseMsgMigrateContract() {
    return {
        sender: "",
        contract: "",
        codeId: BigInt(0),
        msg: new Uint8Array()
    };
}
export const MsgMigrateContract = {
    typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
    aminoType: "wasm/MsgMigrateContract",
    is(o) {
        return o && (o.$typeUrl === MsgMigrateContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && typeof o.codeId === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgMigrateContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && typeof o.code_id === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contract !== "") {
            writer.uint32(18).string(message.contract);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.codeId);
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMigrateContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.contract = reader.string();
                    break;
                case 3:
                    message.codeId = reader.uint64();
                    break;
                case 4:
                    message.msg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgMigrateContract();
        message.sender = object.sender ?? "";
        message.contract = object.contract ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.msg = object.msg ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return MsgMigrateContract.decode(message.value);
    },
    toProto(message) {
        return MsgMigrateContract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
            value: MsgMigrateContract.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgMigrateContract.typeUrl, MsgMigrateContract);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgMigrateContract.aminoType, MsgMigrateContract.typeUrl);
function createBaseMsgMigrateContractResponse() {
    return {
        data: new Uint8Array()
    };
}
export const MsgMigrateContractResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse",
    aminoType: "wasm/MsgMigrateContractResponse",
    is(o) {
        return o && (o.$typeUrl === MsgMigrateContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgMigrateContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMigrateContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgMigrateContractResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return MsgMigrateContractResponse.decode(message.value);
    },
    toProto(message) {
        return MsgMigrateContractResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse",
            value: MsgMigrateContractResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgMigrateContractResponse.typeUrl, MsgMigrateContractResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgMigrateContractResponse.aminoType, MsgMigrateContractResponse.typeUrl);
function createBaseMsgUpdateAdmin() {
    return {
        sender: "",
        newAdmin: "",
        contract: ""
    };
}
export const MsgUpdateAdmin = {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
    aminoType: "wasm/MsgUpdateAdmin",
    is(o) {
        return o && (o.$typeUrl === MsgUpdateAdmin.typeUrl || typeof o.sender === "string" && typeof o.newAdmin === "string" && typeof o.contract === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgUpdateAdmin.typeUrl || typeof o.sender === "string" && typeof o.new_admin === "string" && typeof o.contract === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.newAdmin !== "") {
            writer.uint32(18).string(message.newAdmin);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.newAdmin = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateAdmin();
        message.sender = object.sender ?? "";
        message.newAdmin = object.newAdmin ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return MsgUpdateAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
            value: MsgUpdateAdmin.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateAdmin.typeUrl, MsgUpdateAdmin);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateAdmin.aminoType, MsgUpdateAdmin.typeUrl);
function createBaseMsgUpdateAdminResponse() {
    return {};
}
export const MsgUpdateAdminResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse",
    aminoType: "wasm/MsgUpdateAdminResponse",
    is(o) {
        return o && o.$typeUrl === MsgUpdateAdminResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgUpdateAdminResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAdminResponse();
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
        const message = createBaseMsgUpdateAdminResponse();
        return message;
    },
    fromProtoMsg(message) {
        return MsgUpdateAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse",
            value: MsgUpdateAdminResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateAdminResponse.typeUrl, MsgUpdateAdminResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateAdminResponse.aminoType, MsgUpdateAdminResponse.typeUrl);
function createBaseMsgClearAdmin() {
    return {
        sender: "",
        contract: ""
    };
}
export const MsgClearAdmin = {
    typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
    aminoType: "wasm/MsgClearAdmin",
    is(o) {
        return o && (o.$typeUrl === MsgClearAdmin.typeUrl || typeof o.sender === "string" && typeof o.contract === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgClearAdmin.typeUrl || typeof o.sender === "string" && typeof o.contract === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClearAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgClearAdmin();
        message.sender = object.sender ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return MsgClearAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgClearAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
            value: MsgClearAdmin.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgClearAdmin.typeUrl, MsgClearAdmin);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClearAdmin.aminoType, MsgClearAdmin.typeUrl);
function createBaseMsgClearAdminResponse() {
    return {};
}
export const MsgClearAdminResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse",
    aminoType: "wasm/MsgClearAdminResponse",
    is(o) {
        return o && o.$typeUrl === MsgClearAdminResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgClearAdminResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClearAdminResponse();
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
        const message = createBaseMsgClearAdminResponse();
        return message;
    },
    fromProtoMsg(message) {
        return MsgClearAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgClearAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse",
            value: MsgClearAdminResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgClearAdminResponse.typeUrl, MsgClearAdminResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClearAdminResponse.aminoType, MsgClearAdminResponse.typeUrl);
//# sourceMappingURL=tx.js.map