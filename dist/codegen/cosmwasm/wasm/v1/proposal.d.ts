import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposal {
    $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeProposal";
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiatePermission?: AccessConfig;
    /** UnpinCode code on upload, optional */
    unpinCode: boolean;
    /** Source is the URL where the code is hosted */
    source: string;
    /**
     * Builder is the docker image used to build the code deterministically, used
     * for smart contract verification
     */
    builder: string;
    /**
     * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
     * contract verification
     */
    codeHash: Uint8Array;
}
export interface StoreCodeProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal";
    value: Uint8Array;
}
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposalSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeProposal";
    title: string;
    description: string;
    run_as: string;
    wasm_byte_code: Uint8Array;
    instantiate_permission?: AccessConfigSDKType;
    unpin_code: boolean;
    source: string;
    builder: string;
    code_hash: Uint8Array;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposal {
    $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContractProposal";
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
export interface InstantiateContractProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal";
    value: Uint8Array;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposalSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContractProposal";
    title: string;
    description: string;
    run_as: string;
    admin: string;
    code_id: bigint;
    label: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
}
/**
 * InstantiateContract2Proposal gov proposal content type to instantiate
 * contract 2
 */
export interface InstantiateContract2Proposal {
    $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContract2Proposal";
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's enviroment as sender */
    runAs: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encode message to be passed to the contract on instantiation */
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
export interface InstantiateContract2ProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal";
    value: Uint8Array;
}
/**
 * InstantiateContract2Proposal gov proposal content type to instantiate
 * contract 2
 */
export interface InstantiateContract2ProposalSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContract2Proposal";
    title: string;
    description: string;
    run_as: string;
    admin: string;
    code_id: bigint;
    label: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
    salt: Uint8Array;
    fix_msg: boolean;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposal {
    $typeUrl?: "/cosmwasm.wasm.v1.MigrateContractProposal";
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM code */
    codeId: bigint;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
export interface MigrateContractProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal";
    value: Uint8Array;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposalSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.MigrateContractProposal";
    title: string;
    description: string;
    contract: string;
    code_id: bigint;
    msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposal {
    $typeUrl?: "/cosmwasm.wasm.v1.SudoContractProposal";
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as sudo */
    msg: Uint8Array;
}
export interface SudoContractProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal";
    value: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposalSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.SudoContractProposal";
    title: string;
    description: string;
    contract: string;
    msg: Uint8Array;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposal {
    $typeUrl?: "/cosmwasm.wasm.v1.ExecuteContractProposal";
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as execute */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
export interface ExecuteContractProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal";
    value: Uint8Array;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposalSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.ExecuteContractProposal";
    title: string;
    description: string;
    run_as: string;
    contract: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposal {
    $typeUrl?: "/cosmwasm.wasm.v1.UpdateAdminProposal";
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** NewAdmin address to be set */
    newAdmin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface UpdateAdminProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal";
    value: Uint8Array;
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposalSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.UpdateAdminProposal";
    title: string;
    description: string;
    new_admin: string;
    contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposal {
    $typeUrl?: "/cosmwasm.wasm.v1.ClearAdminProposal";
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface ClearAdminProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal";
    value: Uint8Array;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposalSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.ClearAdminProposal";
    title: string;
    description: string;
    contract: string;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposal {
    $typeUrl?: "/cosmwasm.wasm.v1.PinCodesProposal";
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the new WASM codes */
    codeIds: bigint[];
}
export interface PinCodesProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal";
    value: Uint8Array;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposalSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.PinCodesProposal";
    title: string;
    description: string;
    code_ids: bigint[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposal {
    $typeUrl?: "/cosmwasm.wasm.v1.UnpinCodesProposal";
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the WASM codes */
    codeIds: bigint[];
}
export interface UnpinCodesProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal";
    value: Uint8Array;
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposalSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.UnpinCodesProposal";
    title: string;
    description: string;
    code_ids: bigint[];
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdate {
    /** CodeID is the reference to the stored WASM code to be updated */
    codeId: bigint;
    /** InstantiatePermission to apply to the set of code ids */
    instantiatePermission: AccessConfig;
}
export interface AccessConfigUpdateProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AccessConfigUpdate";
    value: Uint8Array;
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdateSDKType {
    code_id: bigint;
    instantiate_permission: AccessConfigSDKType;
}
/**
 * UpdateInstantiateConfigProposal gov proposal content type to update
 * instantiate config to a  set of code ids.
 */
export interface UpdateInstantiateConfigProposal {
    $typeUrl?: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /**
     * AccessConfigUpdate contains the list of code ids and the access config
     * to be applied.
     */
    accessConfigUpdates: AccessConfigUpdate[];
}
export interface UpdateInstantiateConfigProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
    value: Uint8Array;
}
/**
 * UpdateInstantiateConfigProposal gov proposal content type to update
 * instantiate config to a  set of code ids.
 */
export interface UpdateInstantiateConfigProposalSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
    title: string;
    description: string;
    access_config_updates: AccessConfigUpdateSDKType[];
}
/**
 * StoreAndInstantiateContractProposal gov proposal content type to store
 * and instantiate the contract.
 */
export interface StoreAndInstantiateContractProposal {
    $typeUrl?: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiatePermission?: AccessConfig;
    /** UnpinCode code on upload, optional */
    unpinCode: boolean;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
    /** Source is the URL where the code is hosted */
    source: string;
    /**
     * Builder is the docker image used to build the code deterministically, used
     * for smart contract verification
     */
    builder: string;
    /**
     * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
     * contract verification
     */
    codeHash: Uint8Array;
}
export interface StoreAndInstantiateContractProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
    value: Uint8Array;
}
/**
 * StoreAndInstantiateContractProposal gov proposal content type to store
 * and instantiate the contract.
 */
export interface StoreAndInstantiateContractProposalSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
    title: string;
    description: string;
    run_as: string;
    wasm_byte_code: Uint8Array;
    instantiate_permission?: AccessConfigSDKType;
    unpin_code: boolean;
    admin: string;
    label: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
    source: string;
    builder: string;
    code_hash: Uint8Array;
}
export declare const StoreCodeProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is StoreCodeProposal;
    isSDK(o: any): o is StoreCodeProposalSDKType;
    encode(message: StoreCodeProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): StoreCodeProposal;
    fromPartial(object: Partial<StoreCodeProposal>): StoreCodeProposal;
    fromProtoMsg(message: StoreCodeProposalProtoMsg): StoreCodeProposal;
    toProto(message: StoreCodeProposal): Uint8Array;
    toProtoMsg(message: StoreCodeProposal): StoreCodeProposalProtoMsg;
};
export declare const InstantiateContractProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is InstantiateContractProposal;
    isSDK(o: any): o is InstantiateContractProposalSDKType;
    encode(message: InstantiateContractProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InstantiateContractProposal;
    fromPartial(object: Partial<InstantiateContractProposal>): InstantiateContractProposal;
    fromProtoMsg(message: InstantiateContractProposalProtoMsg): InstantiateContractProposal;
    toProto(message: InstantiateContractProposal): Uint8Array;
    toProtoMsg(message: InstantiateContractProposal): InstantiateContractProposalProtoMsg;
};
export declare const InstantiateContract2Proposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is InstantiateContract2Proposal;
    isSDK(o: any): o is InstantiateContract2ProposalSDKType;
    encode(message: InstantiateContract2Proposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InstantiateContract2Proposal;
    fromPartial(object: Partial<InstantiateContract2Proposal>): InstantiateContract2Proposal;
    fromProtoMsg(message: InstantiateContract2ProposalProtoMsg): InstantiateContract2Proposal;
    toProto(message: InstantiateContract2Proposal): Uint8Array;
    toProtoMsg(message: InstantiateContract2Proposal): InstantiateContract2ProposalProtoMsg;
};
export declare const MigrateContractProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MigrateContractProposal;
    isSDK(o: any): o is MigrateContractProposalSDKType;
    encode(message: MigrateContractProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MigrateContractProposal;
    fromPartial(object: Partial<MigrateContractProposal>): MigrateContractProposal;
    fromProtoMsg(message: MigrateContractProposalProtoMsg): MigrateContractProposal;
    toProto(message: MigrateContractProposal): Uint8Array;
    toProtoMsg(message: MigrateContractProposal): MigrateContractProposalProtoMsg;
};
export declare const SudoContractProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SudoContractProposal;
    isSDK(o: any): o is SudoContractProposalSDKType;
    encode(message: SudoContractProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SudoContractProposal;
    fromPartial(object: Partial<SudoContractProposal>): SudoContractProposal;
    fromProtoMsg(message: SudoContractProposalProtoMsg): SudoContractProposal;
    toProto(message: SudoContractProposal): Uint8Array;
    toProtoMsg(message: SudoContractProposal): SudoContractProposalProtoMsg;
};
export declare const ExecuteContractProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ExecuteContractProposal;
    isSDK(o: any): o is ExecuteContractProposalSDKType;
    encode(message: ExecuteContractProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExecuteContractProposal;
    fromPartial(object: Partial<ExecuteContractProposal>): ExecuteContractProposal;
    fromProtoMsg(message: ExecuteContractProposalProtoMsg): ExecuteContractProposal;
    toProto(message: ExecuteContractProposal): Uint8Array;
    toProtoMsg(message: ExecuteContractProposal): ExecuteContractProposalProtoMsg;
};
export declare const UpdateAdminProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is UpdateAdminProposal;
    isSDK(o: any): o is UpdateAdminProposalSDKType;
    encode(message: UpdateAdminProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpdateAdminProposal;
    fromPartial(object: Partial<UpdateAdminProposal>): UpdateAdminProposal;
    fromProtoMsg(message: UpdateAdminProposalProtoMsg): UpdateAdminProposal;
    toProto(message: UpdateAdminProposal): Uint8Array;
    toProtoMsg(message: UpdateAdminProposal): UpdateAdminProposalProtoMsg;
};
export declare const ClearAdminProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ClearAdminProposal;
    isSDK(o: any): o is ClearAdminProposalSDKType;
    encode(message: ClearAdminProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClearAdminProposal;
    fromPartial(object: Partial<ClearAdminProposal>): ClearAdminProposal;
    fromProtoMsg(message: ClearAdminProposalProtoMsg): ClearAdminProposal;
    toProto(message: ClearAdminProposal): Uint8Array;
    toProtoMsg(message: ClearAdminProposal): ClearAdminProposalProtoMsg;
};
export declare const PinCodesProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is PinCodesProposal;
    isSDK(o: any): o is PinCodesProposalSDKType;
    encode(message: PinCodesProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PinCodesProposal;
    fromPartial(object: Partial<PinCodesProposal>): PinCodesProposal;
    fromProtoMsg(message: PinCodesProposalProtoMsg): PinCodesProposal;
    toProto(message: PinCodesProposal): Uint8Array;
    toProtoMsg(message: PinCodesProposal): PinCodesProposalProtoMsg;
};
export declare const UnpinCodesProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is UnpinCodesProposal;
    isSDK(o: any): o is UnpinCodesProposalSDKType;
    encode(message: UnpinCodesProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UnpinCodesProposal;
    fromPartial(object: Partial<UnpinCodesProposal>): UnpinCodesProposal;
    fromProtoMsg(message: UnpinCodesProposalProtoMsg): UnpinCodesProposal;
    toProto(message: UnpinCodesProposal): Uint8Array;
    toProtoMsg(message: UnpinCodesProposal): UnpinCodesProposalProtoMsg;
};
export declare const AccessConfigUpdate: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AccessConfigUpdate;
    isSDK(o: any): o is AccessConfigUpdateSDKType;
    encode(message: AccessConfigUpdate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccessConfigUpdate;
    fromPartial(object: Partial<AccessConfigUpdate>): AccessConfigUpdate;
    fromProtoMsg(message: AccessConfigUpdateProtoMsg): AccessConfigUpdate;
    toProto(message: AccessConfigUpdate): Uint8Array;
    toProtoMsg(message: AccessConfigUpdate): AccessConfigUpdateProtoMsg;
};
export declare const UpdateInstantiateConfigProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is UpdateInstantiateConfigProposal;
    isSDK(o: any): o is UpdateInstantiateConfigProposalSDKType;
    encode(message: UpdateInstantiateConfigProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpdateInstantiateConfigProposal;
    fromPartial(object: Partial<UpdateInstantiateConfigProposal>): UpdateInstantiateConfigProposal;
    fromProtoMsg(message: UpdateInstantiateConfigProposalProtoMsg): UpdateInstantiateConfigProposal;
    toProto(message: UpdateInstantiateConfigProposal): Uint8Array;
    toProtoMsg(message: UpdateInstantiateConfigProposal): UpdateInstantiateConfigProposalProtoMsg;
};
export declare const StoreAndInstantiateContractProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is StoreAndInstantiateContractProposal;
    isSDK(o: any): o is StoreAndInstantiateContractProposalSDKType;
    encode(message: StoreAndInstantiateContractProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): StoreAndInstantiateContractProposal;
    fromPartial(object: Partial<StoreAndInstantiateContractProposal>): StoreAndInstantiateContractProposal;
    fromProtoMsg(message: StoreAndInstantiateContractProposalProtoMsg): StoreAndInstantiateContractProposal;
    toProto(message: StoreAndInstantiateContractProposal): Uint8Array;
    toProtoMsg(message: StoreAndInstantiateContractProposal): StoreAndInstantiateContractProposalProtoMsg;
};
