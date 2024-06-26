import { Any } from "../../../google/protobuf/any";
import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** AccessType permission types */
export var AccessType;
(function (AccessType) {
    /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
    AccessType[AccessType["ACCESS_TYPE_UNSPECIFIED"] = 0] = "ACCESS_TYPE_UNSPECIFIED";
    /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */
    AccessType[AccessType["ACCESS_TYPE_NOBODY"] = 1] = "ACCESS_TYPE_NOBODY";
    /**
     * ACCESS_TYPE_ONLY_ADDRESS - AccessTypeOnlyAddress restricted to a single address
     * Deprecated: use AccessTypeAnyOfAddresses instead
     */
    AccessType[AccessType["ACCESS_TYPE_ONLY_ADDRESS"] = 2] = "ACCESS_TYPE_ONLY_ADDRESS";
    /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */
    AccessType[AccessType["ACCESS_TYPE_EVERYBODY"] = 3] = "ACCESS_TYPE_EVERYBODY";
    /** ACCESS_TYPE_ANY_OF_ADDRESSES - AccessTypeAnyOfAddresses allow any of the addresses */
    AccessType[AccessType["ACCESS_TYPE_ANY_OF_ADDRESSES"] = 4] = "ACCESS_TYPE_ANY_OF_ADDRESSES";
    AccessType[AccessType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessType || (AccessType = {}));
export const AccessTypeSDKType = AccessType;
export function accessTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ACCESS_TYPE_UNSPECIFIED":
            return AccessType.ACCESS_TYPE_UNSPECIFIED;
        case 1:
        case "ACCESS_TYPE_NOBODY":
            return AccessType.ACCESS_TYPE_NOBODY;
        case 2:
        case "ACCESS_TYPE_ONLY_ADDRESS":
            return AccessType.ACCESS_TYPE_ONLY_ADDRESS;
        case 3:
        case "ACCESS_TYPE_EVERYBODY":
            return AccessType.ACCESS_TYPE_EVERYBODY;
        case 4:
        case "ACCESS_TYPE_ANY_OF_ADDRESSES":
            return AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AccessType.UNRECOGNIZED;
    }
}
export function accessTypeToJSON(object) {
    switch (object) {
        case AccessType.ACCESS_TYPE_UNSPECIFIED:
            return "ACCESS_TYPE_UNSPECIFIED";
        case AccessType.ACCESS_TYPE_NOBODY:
            return "ACCESS_TYPE_NOBODY";
        case AccessType.ACCESS_TYPE_ONLY_ADDRESS:
            return "ACCESS_TYPE_ONLY_ADDRESS";
        case AccessType.ACCESS_TYPE_EVERYBODY:
            return "ACCESS_TYPE_EVERYBODY";
        case AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES:
            return "ACCESS_TYPE_ANY_OF_ADDRESSES";
        case AccessType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** ContractCodeHistoryOperationType actions that caused a code change */
export var ContractCodeHistoryOperationType;
(function (ContractCodeHistoryOperationType) {
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"] = 0] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT"] = 1] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"] = 2] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"] = 3] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContractCodeHistoryOperationType || (ContractCodeHistoryOperationType = {}));
export const ContractCodeHistoryOperationTypeSDKType = ContractCodeHistoryOperationType;
export function contractCodeHistoryOperationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED;
        case 1:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT;
        case 2:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE;
        case 3:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ContractCodeHistoryOperationType.UNRECOGNIZED;
    }
}
export function contractCodeHistoryOperationTypeToJSON(object) {
    switch (object) {
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
        case ContractCodeHistoryOperationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseAccessTypeParam() {
    return {
        value: 0
    };
}
export const AccessTypeParam = {
    typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam",
    aminoType: "wasm/AccessTypeParam",
    is(o) {
        return o && (o.$typeUrl === AccessTypeParam.typeUrl || isSet(o.value));
    },
    isSDK(o) {
        return o && (o.$typeUrl === AccessTypeParam.typeUrl || isSet(o.value));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.value !== 0) {
            writer.uint32(8).int32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessTypeParam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccessTypeParam();
        message.value = object.value ?? 0;
        return message;
    },
    fromProtoMsg(message) {
        return AccessTypeParam.decode(message.value);
    },
    toProto(message) {
        return AccessTypeParam.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam",
            value: AccessTypeParam.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(AccessTypeParam.typeUrl, AccessTypeParam);
GlobalDecoderRegistry.registerAminoProtoMapping(AccessTypeParam.aminoType, AccessTypeParam.typeUrl);
function createBaseAccessConfig() {
    return {
        permission: 0,
        address: "",
        addresses: []
    };
}
export const AccessConfig = {
    typeUrl: "/cosmwasm.wasm.v1.AccessConfig",
    aminoType: "wasm/AccessConfig",
    is(o) {
        return o && (o.$typeUrl === AccessConfig.typeUrl || isSet(o.permission) && typeof o.address === "string" && Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === AccessConfig.typeUrl || isSet(o.permission) && typeof o.address === "string" && Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.permission !== 0) {
            writer.uint32(8).int32(message.permission);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        for (const v of message.addresses) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.permission = reader.int32();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.addresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccessConfig();
        message.permission = object.permission ?? 0;
        message.address = object.address ?? "";
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    fromProtoMsg(message) {
        return AccessConfig.decode(message.value);
    },
    toProto(message) {
        return AccessConfig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AccessConfig",
            value: AccessConfig.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(AccessConfig.typeUrl, AccessConfig);
GlobalDecoderRegistry.registerAminoProtoMapping(AccessConfig.aminoType, AccessConfig.typeUrl);
function createBaseParams() {
    return {
        codeUploadAccess: AccessConfig.fromPartial({}),
        instantiateDefaultPermission: 0
    };
}
export const Params = {
    typeUrl: "/cosmwasm.wasm.v1.Params",
    aminoType: "wasm/Params",
    is(o) {
        return o && (o.$typeUrl === Params.typeUrl || AccessConfig.is(o.codeUploadAccess) && isSet(o.instantiateDefaultPermission));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Params.typeUrl || AccessConfig.isSDK(o.code_upload_access) && isSet(o.instantiate_default_permission));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.codeUploadAccess !== undefined) {
            AccessConfig.encode(message.codeUploadAccess, writer.uint32(10).fork()).ldelim();
        }
        if (message.instantiateDefaultPermission !== 0) {
            writer.uint32(16).int32(message.instantiateDefaultPermission);
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
                    message.codeUploadAccess = AccessConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.instantiateDefaultPermission = reader.int32();
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
        message.codeUploadAccess = object.codeUploadAccess !== undefined && object.codeUploadAccess !== null ? AccessConfig.fromPartial(object.codeUploadAccess) : undefined;
        message.instantiateDefaultPermission = object.instantiateDefaultPermission ?? 0;
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
            typeUrl: "/cosmwasm.wasm.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseCodeInfo() {
    return {
        codeHash: new Uint8Array(),
        creator: "",
        instantiateConfig: AccessConfig.fromPartial({})
    };
}
export const CodeInfo = {
    typeUrl: "/cosmwasm.wasm.v1.CodeInfo",
    aminoType: "wasm/CodeInfo",
    is(o) {
        return o && (o.$typeUrl === CodeInfo.typeUrl || (o.codeHash instanceof Uint8Array || typeof o.codeHash === "string") && typeof o.creator === "string" && AccessConfig.is(o.instantiateConfig));
    },
    isSDK(o) {
        return o && (o.$typeUrl === CodeInfo.typeUrl || (o.code_hash instanceof Uint8Array || typeof o.code_hash === "string") && typeof o.creator === "string" && AccessConfig.isSDK(o.instantiate_config));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.codeHash.length !== 0) {
            writer.uint32(10).bytes(message.codeHash);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.instantiateConfig !== undefined) {
            AccessConfig.encode(message.instantiateConfig, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeHash = reader.bytes();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 5:
                    message.instantiateConfig = AccessConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCodeInfo();
        message.codeHash = object.codeHash ?? new Uint8Array();
        message.creator = object.creator ?? "";
        message.instantiateConfig = object.instantiateConfig !== undefined && object.instantiateConfig !== null ? AccessConfig.fromPartial(object.instantiateConfig) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return CodeInfo.decode(message.value);
    },
    toProto(message) {
        return CodeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.CodeInfo",
            value: CodeInfo.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(CodeInfo.typeUrl, CodeInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(CodeInfo.aminoType, CodeInfo.typeUrl);
function createBaseContractInfo() {
    return {
        codeId: BigInt(0),
        creator: "",
        admin: "",
        label: "",
        created: undefined,
        ibcPortId: "",
        extension: undefined
    };
}
export const ContractInfo = {
    typeUrl: "/cosmwasm.wasm.v1.ContractInfo",
    aminoType: "wasm/ContractInfo",
    is(o) {
        return o && (o.$typeUrl === ContractInfo.typeUrl || typeof o.codeId === "bigint" && typeof o.creator === "string" && typeof o.admin === "string" && typeof o.label === "string" && typeof o.ibcPortId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === ContractInfo.typeUrl || typeof o.code_id === "bigint" && typeof o.creator === "string" && typeof o.admin === "string" && typeof o.label === "string" && typeof o.ibc_port_id === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.admin !== "") {
            writer.uint32(26).string(message.admin);
        }
        if (message.label !== "") {
            writer.uint32(34).string(message.label);
        }
        if (message.created !== undefined) {
            AbsoluteTxPosition.encode(message.created, writer.uint32(42).fork()).ldelim();
        }
        if (message.ibcPortId !== "") {
            writer.uint32(50).string(message.ibcPortId);
        }
        if (message.extension !== undefined) {
            Any.encode(GlobalDecoderRegistry.wrapAny(message.extension), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.admin = reader.string();
                    break;
                case 4:
                    message.label = reader.string();
                    break;
                case 5:
                    message.created = AbsoluteTxPosition.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.ibcPortId = reader.string();
                    break;
                case 7:
                    message.extension = GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContractInfo();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.creator = object.creator ?? "";
        message.admin = object.admin ?? "";
        message.label = object.label ?? "";
        message.created = object.created !== undefined && object.created !== null ? AbsoluteTxPosition.fromPartial(object.created) : undefined;
        message.ibcPortId = object.ibcPortId ?? "";
        message.extension = object.extension !== undefined && object.extension !== null ? GlobalDecoderRegistry.fromPartial(object.extension) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return ContractInfo.decode(message.value);
    },
    toProto(message) {
        return ContractInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractInfo",
            value: ContractInfo.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ContractInfo.typeUrl, ContractInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(ContractInfo.aminoType, ContractInfo.typeUrl);
function createBaseContractCodeHistoryEntry() {
    return {
        operation: 0,
        codeId: BigInt(0),
        updated: undefined,
        msg: new Uint8Array()
    };
}
export const ContractCodeHistoryEntry = {
    typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry",
    aminoType: "wasm/ContractCodeHistoryEntry",
    is(o) {
        return o && (o.$typeUrl === ContractCodeHistoryEntry.typeUrl || isSet(o.operation) && typeof o.codeId === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ContractCodeHistoryEntry.typeUrl || isSet(o.operation) && typeof o.code_id === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.operation !== 0) {
            writer.uint32(8).int32(message.operation);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(16).uint64(message.codeId);
        }
        if (message.updated !== undefined) {
            AbsoluteTxPosition.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractCodeHistoryEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operation = reader.int32();
                    break;
                case 2:
                    message.codeId = reader.uint64();
                    break;
                case 3:
                    message.updated = AbsoluteTxPosition.decode(reader, reader.uint32());
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
        const message = createBaseContractCodeHistoryEntry();
        message.operation = object.operation ?? 0;
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.updated = object.updated !== undefined && object.updated !== null ? AbsoluteTxPosition.fromPartial(object.updated) : undefined;
        message.msg = object.msg ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return ContractCodeHistoryEntry.decode(message.value);
    },
    toProto(message) {
        return ContractCodeHistoryEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry",
            value: ContractCodeHistoryEntry.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ContractCodeHistoryEntry.typeUrl, ContractCodeHistoryEntry);
GlobalDecoderRegistry.registerAminoProtoMapping(ContractCodeHistoryEntry.aminoType, ContractCodeHistoryEntry.typeUrl);
function createBaseAbsoluteTxPosition() {
    return {
        blockHeight: BigInt(0),
        txIndex: BigInt(0)
    };
}
export const AbsoluteTxPosition = {
    typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition",
    aminoType: "wasm/AbsoluteTxPosition",
    is(o) {
        return o && (o.$typeUrl === AbsoluteTxPosition.typeUrl || typeof o.blockHeight === "bigint" && typeof o.txIndex === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === AbsoluteTxPosition.typeUrl || typeof o.block_height === "bigint" && typeof o.tx_index === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.blockHeight !== BigInt(0)) {
            writer.uint32(8).uint64(message.blockHeight);
        }
        if (message.txIndex !== BigInt(0)) {
            writer.uint32(16).uint64(message.txIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAbsoluteTxPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.uint64();
                    break;
                case 2:
                    message.txIndex = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAbsoluteTxPosition();
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
        message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? BigInt(object.txIndex.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return AbsoluteTxPosition.decode(message.value);
    },
    toProto(message) {
        return AbsoluteTxPosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition",
            value: AbsoluteTxPosition.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(AbsoluteTxPosition.typeUrl, AbsoluteTxPosition);
GlobalDecoderRegistry.registerAminoProtoMapping(AbsoluteTxPosition.aminoType, AbsoluteTxPosition.typeUrl);
function createBaseModel() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
export const Model = {
    typeUrl: "/cosmwasm.wasm.v1.Model",
    aminoType: "wasm/Model",
    is(o) {
        return o && (o.$typeUrl === Model.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Model.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModel();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return Model.decode(message.value);
    },
    toProto(message) {
        return Model.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Model",
            value: Model.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Model.typeUrl, Model);
GlobalDecoderRegistry.registerAminoProtoMapping(Model.aminoType, Model.typeUrl);
//# sourceMappingURL=types.js.map