import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** AccessType permission types */
export declare enum AccessType {
    /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
    ACCESS_TYPE_UNSPECIFIED = 0,
    /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */
    ACCESS_TYPE_NOBODY = 1,
    /**
     * ACCESS_TYPE_ONLY_ADDRESS - AccessTypeOnlyAddress restricted to a single address
     * Deprecated: use AccessTypeAnyOfAddresses instead
     */
    ACCESS_TYPE_ONLY_ADDRESS = 2,
    /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */
    ACCESS_TYPE_EVERYBODY = 3,
    /** ACCESS_TYPE_ANY_OF_ADDRESSES - AccessTypeAnyOfAddresses allow any of the addresses */
    ACCESS_TYPE_ANY_OF_ADDRESSES = 4,
    UNRECOGNIZED = -1
}
export declare const AccessTypeSDKType: typeof AccessType;
export declare function accessTypeFromJSON(object: any): AccessType;
export declare function accessTypeToJSON(object: AccessType): string;
/** ContractCodeHistoryOperationType actions that caused a code change */
export declare enum ContractCodeHistoryOperationType {
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3,
    UNRECOGNIZED = -1
}
export declare const ContractCodeHistoryOperationTypeSDKType: typeof ContractCodeHistoryOperationType;
export declare function contractCodeHistoryOperationTypeFromJSON(object: any): ContractCodeHistoryOperationType;
export declare function contractCodeHistoryOperationTypeToJSON(object: ContractCodeHistoryOperationType): string;
/** AccessTypeParam */
export interface AccessTypeParam {
    value: AccessType;
}
export interface AccessTypeParamProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam";
    value: Uint8Array;
}
/** AccessTypeParam */
export interface AccessTypeParamSDKType {
    value: AccessType;
}
/** AccessConfig access control type. */
export interface AccessConfig {
    permission: AccessType;
    /**
     * Address
     * Deprecated: replaced by addresses
     */
    address: string;
    addresses: string[];
}
export interface AccessConfigProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AccessConfig";
    value: Uint8Array;
}
/** AccessConfig access control type. */
export interface AccessConfigSDKType {
    permission: AccessType;
    address: string;
    addresses: string[];
}
/** Params defines the set of wasm parameters. */
export interface Params {
    codeUploadAccess: AccessConfig;
    instantiateDefaultPermission: AccessType;
}
export interface ParamsProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.Params";
    value: Uint8Array;
}
/** Params defines the set of wasm parameters. */
export interface ParamsSDKType {
    code_upload_access: AccessConfigSDKType;
    instantiate_default_permission: AccessType;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfo {
    /** CodeHash is the unique identifier created by wasmvm */
    codeHash: Uint8Array;
    /** Creator address who initially stored the code */
    creator: string;
    /** InstantiateConfig access control to apply on contract creation, optional */
    instantiateConfig: AccessConfig;
}
export interface CodeInfoProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.CodeInfo";
    value: Uint8Array;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfoSDKType {
    code_hash: Uint8Array;
    creator: string;
    instantiate_config: AccessConfigSDKType;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
    /** CodeID is the reference to the stored Wasm code */
    codeId: bigint;
    /** Creator address who initially instantiated the contract */
    creator: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Created Tx position when the contract was instantiated. */
    created?: AbsoluteTxPosition;
    ibcPortId: string;
    /**
     * Extension is an extension point to store custom metadata within the
     * persistence model.
     */
    extension?: Any | undefined;
}
export interface ContractInfoProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ContractInfo";
    value: Uint8Array;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoSDKType {
    code_id: bigint;
    creator: string;
    admin: string;
    label: string;
    created?: AbsoluteTxPositionSDKType;
    ibc_port_id: string;
    extension?: AnySDKType | undefined;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntry {
    operation: ContractCodeHistoryOperationType;
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Updated Tx position when the operation was executed. */
    updated?: AbsoluteTxPosition;
    msg: Uint8Array;
}
export interface ContractCodeHistoryEntryProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry";
    value: Uint8Array;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntrySDKType {
    operation: ContractCodeHistoryOperationType;
    code_id: bigint;
    updated?: AbsoluteTxPositionSDKType;
    msg: Uint8Array;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPosition {
    /** BlockHeight is the block the contract was created at */
    blockHeight: bigint;
    /**
     * TxIndex is a monotonic counter within the block (actual transaction index,
     * or gas consumed)
     */
    txIndex: bigint;
}
export interface AbsoluteTxPositionProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition";
    value: Uint8Array;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPositionSDKType {
    block_height: bigint;
    tx_index: bigint;
}
/** Model is a struct that holds a KV pair */
export interface Model {
    /** hex-encode key to read it better (this is often ascii) */
    key: Uint8Array;
    /** base64-encode raw value */
    value: Uint8Array;
}
export interface ModelProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.Model";
    value: Uint8Array;
}
/** Model is a struct that holds a KV pair */
export interface ModelSDKType {
    key: Uint8Array;
    value: Uint8Array;
}
export declare const AccessTypeParam: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccessTypeParam;
    isSDK(o: any): o is AccessTypeParamSDKType;
    encode(message: AccessTypeParam, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccessTypeParam;
    fromPartial(object: Partial<AccessTypeParam>): AccessTypeParam;
    fromProtoMsg(message: AccessTypeParamProtoMsg): AccessTypeParam;
    toProto(message: AccessTypeParam): Uint8Array;
    toProtoMsg(message: AccessTypeParam): AccessTypeParamProtoMsg;
};
export declare const AccessConfig: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccessConfig;
    isSDK(o: any): o is AccessConfigSDKType;
    encode(message: AccessConfig, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccessConfig;
    fromPartial(object: Partial<AccessConfig>): AccessConfig;
    fromProtoMsg(message: AccessConfigProtoMsg): AccessConfig;
    toProto(message: AccessConfig): Uint8Array;
    toProtoMsg(message: AccessConfig): AccessConfigProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Params;
    isSDK(o: any): o is ParamsSDKType;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const CodeInfo: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is CodeInfo;
    isSDK(o: any): o is CodeInfoSDKType;
    encode(message: CodeInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CodeInfo;
    fromPartial(object: Partial<CodeInfo>): CodeInfo;
    fromProtoMsg(message: CodeInfoProtoMsg): CodeInfo;
    toProto(message: CodeInfo): Uint8Array;
    toProtoMsg(message: CodeInfo): CodeInfoProtoMsg;
};
export declare const ContractInfo: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ContractInfo;
    isSDK(o: any): o is ContractInfoSDKType;
    encode(message: ContractInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractInfo;
    fromPartial(object: Partial<ContractInfo>): ContractInfo;
    fromProtoMsg(message: ContractInfoProtoMsg): ContractInfo;
    toProto(message: ContractInfo): Uint8Array;
    toProtoMsg(message: ContractInfo): ContractInfoProtoMsg;
};
export declare const ContractCodeHistoryEntry: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ContractCodeHistoryEntry;
    isSDK(o: any): o is ContractCodeHistoryEntrySDKType;
    encode(message: ContractCodeHistoryEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractCodeHistoryEntry;
    fromPartial(object: Partial<ContractCodeHistoryEntry>): ContractCodeHistoryEntry;
    fromProtoMsg(message: ContractCodeHistoryEntryProtoMsg): ContractCodeHistoryEntry;
    toProto(message: ContractCodeHistoryEntry): Uint8Array;
    toProtoMsg(message: ContractCodeHistoryEntry): ContractCodeHistoryEntryProtoMsg;
};
export declare const AbsoluteTxPosition: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AbsoluteTxPosition;
    isSDK(o: any): o is AbsoluteTxPositionSDKType;
    encode(message: AbsoluteTxPosition, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AbsoluteTxPosition;
    fromPartial(object: Partial<AbsoluteTxPosition>): AbsoluteTxPosition;
    fromProtoMsg(message: AbsoluteTxPositionProtoMsg): AbsoluteTxPosition;
    toProto(message: AbsoluteTxPosition): Uint8Array;
    toProtoMsg(message: AbsoluteTxPosition): AbsoluteTxPositionProtoMsg;
};
export declare const Model: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Model;
    isSDK(o: any): o is ModelSDKType;
    encode(message: Model, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Model;
    fromPartial(object: Partial<Model>): Model;
    fromProtoMsg(message: ModelProtoMsg): Model;
    toProto(message: Model): Uint8Array;
    toProtoMsg(message: Model): ModelProtoMsg;
};
