import { AccessConfig } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
function createBaseStoreCodeProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
        title: "",
        description: "",
        runAs: "",
        wasmByteCode: new Uint8Array(),
        instantiatePermission: undefined,
        unpinCode: false,
        source: "",
        builder: "",
        codeHash: new Uint8Array()
    };
}
export const StoreCodeProposal = {
    typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
    aminoType: "wasm/StoreCodeProposal",
    is(o) {
        return o && (o.$typeUrl === StoreCodeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.runAs === "string" && (o.wasmByteCode instanceof Uint8Array || typeof o.wasmByteCode === "string") && typeof o.unpinCode === "boolean" && typeof o.source === "string" && typeof o.builder === "string" && (o.codeHash instanceof Uint8Array || typeof o.codeHash === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === StoreCodeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string") && typeof o.unpin_code === "boolean" && typeof o.source === "string" && typeof o.builder === "string" && (o.code_hash instanceof Uint8Array || typeof o.code_hash === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(34).bytes(message.wasmByteCode);
        }
        if (message.instantiatePermission !== undefined) {
            AccessConfig.encode(message.instantiatePermission, writer.uint32(58).fork()).ldelim();
        }
        if (message.unpinCode === true) {
            writer.uint32(64).bool(message.unpinCode);
        }
        if (message.source !== "") {
            writer.uint32(74).string(message.source);
        }
        if (message.builder !== "") {
            writer.uint32(82).string(message.builder);
        }
        if (message.codeHash.length !== 0) {
            writer.uint32(90).bytes(message.codeHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreCodeProposal();
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
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.wasmByteCode = reader.bytes();
                    break;
                case 7:
                    message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.unpinCode = reader.bool();
                    break;
                case 9:
                    message.source = reader.string();
                    break;
                case 10:
                    message.builder = reader.string();
                    break;
                case 11:
                    message.codeHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStoreCodeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
        message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
        message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
        message.unpinCode = object.unpinCode ?? false;
        message.source = object.source ?? "";
        message.builder = object.builder ?? "";
        message.codeHash = object.codeHash ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return StoreCodeProposal.decode(message.value);
    },
    toProto(message) {
        return StoreCodeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
            value: StoreCodeProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(StoreCodeProposal.typeUrl, StoreCodeProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(StoreCodeProposal.aminoType, StoreCodeProposal.typeUrl);
function createBaseInstantiateContractProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
        title: "",
        description: "",
        runAs: "",
        admin: "",
        codeId: BigInt(0),
        label: "",
        msg: new Uint8Array(),
        funds: []
    };
}
export const InstantiateContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
    aminoType: "wasm/InstantiateContractProposal",
    is(o) {
        return o && (o.$typeUrl === InstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.runAs === "string" && typeof o.admin === "string" && typeof o.codeId === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === InstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.admin !== "") {
            writer.uint32(34).string(message.admin);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(40).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(50).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(58).bytes(message.msg);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstantiateContractProposal();
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
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.admin = reader.string();
                    break;
                case 5:
                    message.codeId = reader.uint64();
                    break;
                case 6:
                    message.label = reader.string();
                    break;
                case 7:
                    message.msg = reader.bytes();
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
        const message = createBaseInstantiateContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
        message.admin = object.admin ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.label = object.label ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return InstantiateContractProposal.decode(message.value);
    },
    toProto(message) {
        return InstantiateContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
            value: InstantiateContractProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(InstantiateContractProposal.typeUrl, InstantiateContractProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(InstantiateContractProposal.aminoType, InstantiateContractProposal.typeUrl);
function createBaseInstantiateContract2Proposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
        title: "",
        description: "",
        runAs: "",
        admin: "",
        codeId: BigInt(0),
        label: "",
        msg: new Uint8Array(),
        funds: [],
        salt: new Uint8Array(),
        fixMsg: false
    };
}
export const InstantiateContract2Proposal = {
    typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
    aminoType: "wasm/InstantiateContract2Proposal",
    is(o) {
        return o && (o.$typeUrl === InstantiateContract2Proposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.runAs === "string" && typeof o.admin === "string" && typeof o.codeId === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && typeof o.fixMsg === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === InstantiateContract2Proposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && typeof o.fix_msg === "boolean");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.admin !== "") {
            writer.uint32(34).string(message.admin);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(40).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(50).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(58).bytes(message.msg);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.salt.length !== 0) {
            writer.uint32(74).bytes(message.salt);
        }
        if (message.fixMsg === true) {
            writer.uint32(80).bool(message.fixMsg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstantiateContract2Proposal();
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
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.admin = reader.string();
                    break;
                case 5:
                    message.codeId = reader.uint64();
                    break;
                case 6:
                    message.label = reader.string();
                    break;
                case 7:
                    message.msg = reader.bytes();
                    break;
                case 8:
                    message.funds.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.salt = reader.bytes();
                    break;
                case 10:
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
        const message = createBaseInstantiateContract2Proposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
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
        return InstantiateContract2Proposal.decode(message.value);
    },
    toProto(message) {
        return InstantiateContract2Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
            value: InstantiateContract2Proposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(InstantiateContract2Proposal.typeUrl, InstantiateContract2Proposal);
GlobalDecoderRegistry.registerAminoProtoMapping(InstantiateContract2Proposal.aminoType, InstantiateContract2Proposal.typeUrl);
function createBaseMigrateContractProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
        title: "",
        description: "",
        contract: "",
        codeId: BigInt(0),
        msg: new Uint8Array()
    };
}
export const MigrateContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
    aminoType: "wasm/MigrateContractProposal",
    is(o) {
        return o && (o.$typeUrl === MigrateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && typeof o.codeId === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MigrateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && typeof o.code_id === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(40).uint64(message.codeId);
        }
        if (message.msg.length !== 0) {
            writer.uint32(50).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMigrateContractProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 4:
                    message.contract = reader.string();
                    break;
                case 5:
                    message.codeId = reader.uint64();
                    break;
                case 6:
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
        const message = createBaseMigrateContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contract = object.contract ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.msg = object.msg ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return MigrateContractProposal.decode(message.value);
    },
    toProto(message) {
        return MigrateContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
            value: MigrateContractProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MigrateContractProposal.typeUrl, MigrateContractProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(MigrateContractProposal.aminoType, MigrateContractProposal.typeUrl);
function createBaseSudoContractProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
        title: "",
        description: "",
        contract: "",
        msg: new Uint8Array()
    };
}
export const SudoContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
    aminoType: "wasm/SudoContractProposal",
    is(o) {
        return o && (o.$typeUrl === SudoContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === SudoContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSudoContractProposal();
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
                    message.contract = reader.string();
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
        const message = createBaseSudoContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contract = object.contract ?? "";
        message.msg = object.msg ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return SudoContractProposal.decode(message.value);
    },
    toProto(message) {
        return SudoContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
            value: SudoContractProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(SudoContractProposal.typeUrl, SudoContractProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(SudoContractProposal.aminoType, SudoContractProposal.typeUrl);
function createBaseExecuteContractProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
        title: "",
        description: "",
        runAs: "",
        contract: "",
        msg: new Uint8Array(),
        funds: []
    };
}
export const ExecuteContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
    aminoType: "wasm/ExecuteContractProposal",
    is(o) {
        return o && (o.$typeUrl === ExecuteContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.runAs === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ExecuteContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
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
        const message = createBaseExecuteContractProposal();
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
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.contract = reader.string();
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
        const message = createBaseExecuteContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
        message.contract = object.contract ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return ExecuteContractProposal.decode(message.value);
    },
    toProto(message) {
        return ExecuteContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
            value: ExecuteContractProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ExecuteContractProposal.typeUrl, ExecuteContractProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(ExecuteContractProposal.aminoType, ExecuteContractProposal.typeUrl);
function createBaseUpdateAdminProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
        title: "",
        description: "",
        newAdmin: "",
        contract: ""
    };
}
export const UpdateAdminProposal = {
    typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
    aminoType: "wasm/UpdateAdminProposal",
    is(o) {
        return o && (o.$typeUrl === UpdateAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.newAdmin === "string" && typeof o.contract === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === UpdateAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.new_admin === "string" && typeof o.contract === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateAdminProposal();
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
                    message.newAdmin = reader.string();
                    break;
                case 4:
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
        const message = createBaseUpdateAdminProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.newAdmin = object.newAdmin ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return UpdateAdminProposal.decode(message.value);
    },
    toProto(message) {
        return UpdateAdminProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
            value: UpdateAdminProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(UpdateAdminProposal.typeUrl, UpdateAdminProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(UpdateAdminProposal.aminoType, UpdateAdminProposal.typeUrl);
function createBaseClearAdminProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
        title: "",
        description: "",
        contract: ""
    };
}
export const ClearAdminProposal = {
    typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
    aminoType: "wasm/ClearAdminProposal",
    is(o) {
        return o && (o.$typeUrl === ClearAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === ClearAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClearAdminProposal();
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
        const message = createBaseClearAdminProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return ClearAdminProposal.decode(message.value);
    },
    toProto(message) {
        return ClearAdminProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
            value: ClearAdminProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ClearAdminProposal.typeUrl, ClearAdminProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(ClearAdminProposal.aminoType, ClearAdminProposal.typeUrl);
function createBasePinCodesProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
        title: "",
        description: "",
        codeIds: []
    };
}
export const PinCodesProposal = {
    typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
    aminoType: "wasm/PinCodesProposal",
    is(o) {
        return o && (o.$typeUrl === PinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.codeIds) && (!o.codeIds.length || typeof o.codeIds[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === PinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.codeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePinCodesProposal();
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.codeIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.codeIds.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePinCodesProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromProtoMsg(message) {
        return PinCodesProposal.decode(message.value);
    },
    toProto(message) {
        return PinCodesProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
            value: PinCodesProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(PinCodesProposal.typeUrl, PinCodesProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(PinCodesProposal.aminoType, PinCodesProposal.typeUrl);
function createBaseUnpinCodesProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
        title: "",
        description: "",
        codeIds: []
    };
}
export const UnpinCodesProposal = {
    typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
    aminoType: "wasm/UnpinCodesProposal",
    is(o) {
        return o && (o.$typeUrl === UnpinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.codeIds) && (!o.codeIds.length || typeof o.codeIds[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === UnpinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.codeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnpinCodesProposal();
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.codeIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.codeIds.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUnpinCodesProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromProtoMsg(message) {
        return UnpinCodesProposal.decode(message.value);
    },
    toProto(message) {
        return UnpinCodesProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
            value: UnpinCodesProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(UnpinCodesProposal.typeUrl, UnpinCodesProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(UnpinCodesProposal.aminoType, UnpinCodesProposal.typeUrl);
function createBaseAccessConfigUpdate() {
    return {
        codeId: BigInt(0),
        instantiatePermission: AccessConfig.fromPartial({})
    };
}
export const AccessConfigUpdate = {
    typeUrl: "/cosmwasm.wasm.v1.AccessConfigUpdate",
    aminoType: "wasm/AccessConfigUpdate",
    is(o) {
        return o && (o.$typeUrl === AccessConfigUpdate.typeUrl || typeof o.codeId === "bigint" && AccessConfig.is(o.instantiatePermission));
    },
    isSDK(o) {
        return o && (o.$typeUrl === AccessConfigUpdate.typeUrl || typeof o.code_id === "bigint" && AccessConfig.isSDK(o.instantiate_permission));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.instantiatePermission !== undefined) {
            AccessConfig.encode(message.instantiatePermission, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessConfigUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
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
        const message = createBaseAccessConfigUpdate();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return AccessConfigUpdate.decode(message.value);
    },
    toProto(message) {
        return AccessConfigUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AccessConfigUpdate",
            value: AccessConfigUpdate.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(AccessConfigUpdate.typeUrl, AccessConfigUpdate);
GlobalDecoderRegistry.registerAminoProtoMapping(AccessConfigUpdate.aminoType, AccessConfigUpdate.typeUrl);
function createBaseUpdateInstantiateConfigProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
        title: "",
        description: "",
        accessConfigUpdates: []
    };
}
export const UpdateInstantiateConfigProposal = {
    typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
    aminoType: "wasm/UpdateInstantiateConfigProposal",
    is(o) {
        return o && (o.$typeUrl === UpdateInstantiateConfigProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.accessConfigUpdates) && (!o.accessConfigUpdates.length || AccessConfigUpdate.is(o.accessConfigUpdates[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === UpdateInstantiateConfigProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.access_config_updates) && (!o.access_config_updates.length || AccessConfigUpdate.isSDK(o.access_config_updates[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.accessConfigUpdates) {
            AccessConfigUpdate.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateInstantiateConfigProposal();
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
                    message.accessConfigUpdates.push(AccessConfigUpdate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpdateInstantiateConfigProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.accessConfigUpdates = object.accessConfigUpdates?.map(e => AccessConfigUpdate.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return UpdateInstantiateConfigProposal.decode(message.value);
    },
    toProto(message) {
        return UpdateInstantiateConfigProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
            value: UpdateInstantiateConfigProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(UpdateInstantiateConfigProposal.typeUrl, UpdateInstantiateConfigProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(UpdateInstantiateConfigProposal.aminoType, UpdateInstantiateConfigProposal.typeUrl);
function createBaseStoreAndInstantiateContractProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
        title: "",
        description: "",
        runAs: "",
        wasmByteCode: new Uint8Array(),
        instantiatePermission: undefined,
        unpinCode: false,
        admin: "",
        label: "",
        msg: new Uint8Array(),
        funds: [],
        source: "",
        builder: "",
        codeHash: new Uint8Array()
    };
}
export const StoreAndInstantiateContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
    aminoType: "wasm/StoreAndInstantiateContractProposal",
    is(o) {
        return o && (o.$typeUrl === StoreAndInstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.runAs === "string" && (o.wasmByteCode instanceof Uint8Array || typeof o.wasmByteCode === "string") && typeof o.unpinCode === "boolean" && typeof o.admin === "string" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])) && typeof o.source === "string" && typeof o.builder === "string" && (o.codeHash instanceof Uint8Array || typeof o.codeHash === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === StoreAndInstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string") && typeof o.unpin_code === "boolean" && typeof o.admin === "string" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])) && typeof o.source === "string" && typeof o.builder === "string" && (o.code_hash instanceof Uint8Array || typeof o.code_hash === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(34).bytes(message.wasmByteCode);
        }
        if (message.instantiatePermission !== undefined) {
            AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
        }
        if (message.unpinCode === true) {
            writer.uint32(48).bool(message.unpinCode);
        }
        if (message.admin !== "") {
            writer.uint32(58).string(message.admin);
        }
        if (message.label !== "") {
            writer.uint32(66).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(74).bytes(message.msg);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.source !== "") {
            writer.uint32(90).string(message.source);
        }
        if (message.builder !== "") {
            writer.uint32(98).string(message.builder);
        }
        if (message.codeHash.length !== 0) {
            writer.uint32(106).bytes(message.codeHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreAndInstantiateContractProposal();
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
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.wasmByteCode = reader.bytes();
                    break;
                case 5:
                    message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.unpinCode = reader.bool();
                    break;
                case 7:
                    message.admin = reader.string();
                    break;
                case 8:
                    message.label = reader.string();
                    break;
                case 9:
                    message.msg = reader.bytes();
                    break;
                case 10:
                    message.funds.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.source = reader.string();
                    break;
                case 12:
                    message.builder = reader.string();
                    break;
                case 13:
                    message.codeHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStoreAndInstantiateContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
        message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
        message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
        message.unpinCode = object.unpinCode ?? false;
        message.admin = object.admin ?? "";
        message.label = object.label ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
        message.source = object.source ?? "";
        message.builder = object.builder ?? "";
        message.codeHash = object.codeHash ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return StoreAndInstantiateContractProposal.decode(message.value);
    },
    toProto(message) {
        return StoreAndInstantiateContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
            value: StoreAndInstantiateContractProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(StoreAndInstantiateContractProposal.typeUrl, StoreAndInstantiateContractProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(StoreAndInstantiateContractProposal.aminoType, StoreAndInstantiateContractProposal.typeUrl);
//# sourceMappingURL=proposal.js.map