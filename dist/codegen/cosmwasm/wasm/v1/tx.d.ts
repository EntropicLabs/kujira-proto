import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCode {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /**
     * InstantiatePermission access control to apply on contract creation,
     * optional
     */
    instantiatePermission?: AccessConfig;
}
export interface MsgStoreCodeProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode";
    value: Uint8Array;
}
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCodeSDKType {
    sender: string;
    wasm_byte_code: Uint8Array;
    instantiate_permission?: AccessConfigSDKType;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponse {
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Checksum is the sha256 hash of the stored code */
    checksum: Uint8Array;
}
export interface MsgStoreCodeResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse";
    value: Uint8Array;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseSDKType {
    code_id: bigint;
    checksum: Uint8Array;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
export interface MsgInstantiateContractProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract";
    value: Uint8Array;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContractSDKType {
    sender: string;
    admin: string;
    code_id: bigint;
    label: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2 {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
    /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
    salt: Uint8Array;
    /**
     * FixMsg include the msg value into the hash for the predictable address.
     * Default is false
     */
    fixMsg: boolean;
}
export interface MsgInstantiateContract2ProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2";
    value: Uint8Array;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2SDKType {
    sender: string;
    admin: string;
    code_id: bigint;
    label: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
    salt: Uint8Array;
    fix_msg: boolean;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponse {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgInstantiateContractResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse";
    value: Uint8Array;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponseSDKType {
    address: string;
    data: Uint8Array;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2Response {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgInstantiateContract2ResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2Response";
    value: Uint8Array;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2ResponseSDKType {
    address: string;
    data: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: Coin[];
}
export interface MsgExecuteContractProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract";
    value: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContractSDKType {
    sender: string;
    contract: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponse {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgExecuteContractResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse";
    value: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponseSDKType {
    data: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM code */
    codeId: bigint;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
export interface MsgMigrateContractProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract";
    value: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContractSDKType {
    sender: string;
    contract: string;
    code_id: bigint;
    msg: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponse {
    /**
     * Data contains same raw bytes returned as data from the wasm contract.
     * (May be empty)
     */
    data: Uint8Array;
}
export interface MsgMigrateContractResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse";
    value: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponseSDKType {
    data: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdmin {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** NewAdmin address to be set */
    newAdmin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface MsgUpdateAdminProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin";
    value: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdminSDKType {
    sender: string;
    new_admin: string;
    contract: string;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponse {
}
export interface MsgUpdateAdminResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse";
    value: Uint8Array;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponseSDKType {
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdmin {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface MsgClearAdminProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin";
    value: Uint8Array;
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdminSDKType {
    sender: string;
    contract: string;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponse {
}
export interface MsgClearAdminResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse";
    value: Uint8Array;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponseSDKType {
}
export declare const MsgStoreCode: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgStoreCode;
    isSDK(o: any): o is MsgStoreCodeSDKType;
    encode(message: MsgStoreCode, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCode;
    fromPartial(object: Partial<MsgStoreCode>): MsgStoreCode;
    fromProtoMsg(message: MsgStoreCodeProtoMsg): MsgStoreCode;
    toProto(message: MsgStoreCode): Uint8Array;
    toProtoMsg(message: MsgStoreCode): MsgStoreCodeProtoMsg;
};
export declare const MsgStoreCodeResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgStoreCodeResponse;
    isSDK(o: any): o is MsgStoreCodeResponseSDKType;
    encode(message: MsgStoreCodeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCodeResponse;
    fromPartial(object: Partial<MsgStoreCodeResponse>): MsgStoreCodeResponse;
    fromProtoMsg(message: MsgStoreCodeResponseProtoMsg): MsgStoreCodeResponse;
    toProto(message: MsgStoreCodeResponse): Uint8Array;
    toProtoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseProtoMsg;
};
export declare const MsgInstantiateContract: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgInstantiateContract;
    isSDK(o: any): o is MsgInstantiateContractSDKType;
    encode(message: MsgInstantiateContract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract;
    fromPartial(object: Partial<MsgInstantiateContract>): MsgInstantiateContract;
    fromProtoMsg(message: MsgInstantiateContractProtoMsg): MsgInstantiateContract;
    toProto(message: MsgInstantiateContract): Uint8Array;
    toProtoMsg(message: MsgInstantiateContract): MsgInstantiateContractProtoMsg;
};
export declare const MsgInstantiateContract2: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgInstantiateContract2;
    isSDK(o: any): o is MsgInstantiateContract2SDKType;
    encode(message: MsgInstantiateContract2, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract2;
    fromPartial(object: Partial<MsgInstantiateContract2>): MsgInstantiateContract2;
    fromProtoMsg(message: MsgInstantiateContract2ProtoMsg): MsgInstantiateContract2;
    toProto(message: MsgInstantiateContract2): Uint8Array;
    toProtoMsg(message: MsgInstantiateContract2): MsgInstantiateContract2ProtoMsg;
};
export declare const MsgInstantiateContractResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgInstantiateContractResponse;
    isSDK(o: any): o is MsgInstantiateContractResponseSDKType;
    encode(message: MsgInstantiateContractResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContractResponse;
    fromPartial(object: Partial<MsgInstantiateContractResponse>): MsgInstantiateContractResponse;
    fromProtoMsg(message: MsgInstantiateContractResponseProtoMsg): MsgInstantiateContractResponse;
    toProto(message: MsgInstantiateContractResponse): Uint8Array;
    toProtoMsg(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseProtoMsg;
};
export declare const MsgInstantiateContract2Response: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgInstantiateContract2Response;
    isSDK(o: any): o is MsgInstantiateContract2ResponseSDKType;
    encode(message: MsgInstantiateContract2Response, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract2Response;
    fromPartial(object: Partial<MsgInstantiateContract2Response>): MsgInstantiateContract2Response;
    fromProtoMsg(message: MsgInstantiateContract2ResponseProtoMsg): MsgInstantiateContract2Response;
    toProto(message: MsgInstantiateContract2Response): Uint8Array;
    toProtoMsg(message: MsgInstantiateContract2Response): MsgInstantiateContract2ResponseProtoMsg;
};
export declare const MsgExecuteContract: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgExecuteContract;
    isSDK(o: any): o is MsgExecuteContractSDKType;
    encode(message: MsgExecuteContract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContract;
    fromPartial(object: Partial<MsgExecuteContract>): MsgExecuteContract;
    fromProtoMsg(message: MsgExecuteContractProtoMsg): MsgExecuteContract;
    toProto(message: MsgExecuteContract): Uint8Array;
    toProtoMsg(message: MsgExecuteContract): MsgExecuteContractProtoMsg;
};
export declare const MsgExecuteContractResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgExecuteContractResponse;
    isSDK(o: any): o is MsgExecuteContractResponseSDKType;
    encode(message: MsgExecuteContractResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContractResponse;
    fromPartial(object: Partial<MsgExecuteContractResponse>): MsgExecuteContractResponse;
    fromProtoMsg(message: MsgExecuteContractResponseProtoMsg): MsgExecuteContractResponse;
    toProto(message: MsgExecuteContractResponse): Uint8Array;
    toProtoMsg(message: MsgExecuteContractResponse): MsgExecuteContractResponseProtoMsg;
};
export declare const MsgMigrateContract: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgMigrateContract;
    isSDK(o: any): o is MsgMigrateContractSDKType;
    encode(message: MsgMigrateContract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContract;
    fromPartial(object: Partial<MsgMigrateContract>): MsgMigrateContract;
    fromProtoMsg(message: MsgMigrateContractProtoMsg): MsgMigrateContract;
    toProto(message: MsgMigrateContract): Uint8Array;
    toProtoMsg(message: MsgMigrateContract): MsgMigrateContractProtoMsg;
};
export declare const MsgMigrateContractResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgMigrateContractResponse;
    isSDK(o: any): o is MsgMigrateContractResponseSDKType;
    encode(message: MsgMigrateContractResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContractResponse;
    fromPartial(object: Partial<MsgMigrateContractResponse>): MsgMigrateContractResponse;
    fromProtoMsg(message: MsgMigrateContractResponseProtoMsg): MsgMigrateContractResponse;
    toProto(message: MsgMigrateContractResponse): Uint8Array;
    toProtoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseProtoMsg;
};
export declare const MsgUpdateAdmin: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateAdmin;
    isSDK(o: any): o is MsgUpdateAdminSDKType;
    encode(message: MsgUpdateAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAdmin;
    fromPartial(object: Partial<MsgUpdateAdmin>): MsgUpdateAdmin;
    fromProtoMsg(message: MsgUpdateAdminProtoMsg): MsgUpdateAdmin;
    toProto(message: MsgUpdateAdmin): Uint8Array;
    toProtoMsg(message: MsgUpdateAdmin): MsgUpdateAdminProtoMsg;
};
export declare const MsgUpdateAdminResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateAdminResponse;
    isSDK(o: any): o is MsgUpdateAdminResponseSDKType;
    encode(_: MsgUpdateAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAdminResponse;
    fromPartial(_: Partial<MsgUpdateAdminResponse>): MsgUpdateAdminResponse;
    fromProtoMsg(message: MsgUpdateAdminResponseProtoMsg): MsgUpdateAdminResponse;
    toProto(message: MsgUpdateAdminResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateAdminResponse): MsgUpdateAdminResponseProtoMsg;
};
export declare const MsgClearAdmin: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgClearAdmin;
    isSDK(o: any): o is MsgClearAdminSDKType;
    encode(message: MsgClearAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClearAdmin;
    fromPartial(object: Partial<MsgClearAdmin>): MsgClearAdmin;
    fromProtoMsg(message: MsgClearAdminProtoMsg): MsgClearAdmin;
    toProto(message: MsgClearAdmin): Uint8Array;
    toProtoMsg(message: MsgClearAdmin): MsgClearAdminProtoMsg;
};
export declare const MsgClearAdminResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgClearAdminResponse;
    isSDK(o: any): o is MsgClearAdminResponseSDKType;
    encode(_: MsgClearAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClearAdminResponse;
    fromPartial(_: Partial<MsgClearAdminResponse>): MsgClearAdminResponse;
    fromProtoMsg(message: MsgClearAdminResponseProtoMsg): MsgClearAdminResponse;
    toProto(message: MsgClearAdminResponse): Uint8Array;
    toProtoMsg(message: MsgClearAdminResponse): MsgClearAdminResponseProtoMsg;
};
