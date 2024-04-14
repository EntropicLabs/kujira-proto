import { Params, ParamsSDKType, CodeInfo, CodeInfoSDKType, ContractInfo, ContractInfoSDKType, Model, ModelSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntrySDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
    params: Params;
    codes: Code[];
    contracts: Contract[];
    sequences: Sequence[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    codes: CodeSDKType[];
    contracts: ContractSDKType[];
    sequences: SequenceSDKType[];
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
    codeId: bigint;
    codeInfo: CodeInfo;
    codeBytes: Uint8Array;
    /** Pinned to wasmvm cache */
    pinned: boolean;
}
export interface CodeProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.Code";
    value: Uint8Array;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeSDKType {
    code_id: bigint;
    code_info: CodeInfoSDKType;
    code_bytes: Uint8Array;
    pinned: boolean;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
    contractAddress: string;
    contractInfo: ContractInfo;
    contractState: Model[];
    contractCodeHistory: ContractCodeHistoryEntry[];
}
export interface ContractProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.Contract";
    value: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractSDKType {
    contract_address: string;
    contract_info: ContractInfoSDKType;
    contract_state: ModelSDKType[];
    contract_code_history: ContractCodeHistoryEntrySDKType[];
}
/** Sequence key and value of an id generation counter */
export interface Sequence {
    idKey: Uint8Array;
    value: bigint;
}
export interface SequenceProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.Sequence";
    value: Uint8Array;
}
/** Sequence key and value of an id generation counter */
export interface SequenceSDKType {
    id_key: Uint8Array;
    value: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GenesisState;
    isSDK(o: any): o is GenesisStateSDKType;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const Code: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Code;
    isSDK(o: any): o is CodeSDKType;
    encode(message: Code, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Code;
    fromPartial(object: Partial<Code>): Code;
    fromProtoMsg(message: CodeProtoMsg): Code;
    toProto(message: Code): Uint8Array;
    toProtoMsg(message: Code): CodeProtoMsg;
};
export declare const Contract: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Contract;
    isSDK(o: any): o is ContractSDKType;
    encode(message: Contract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Contract;
    fromPartial(object: Partial<Contract>): Contract;
    fromProtoMsg(message: ContractProtoMsg): Contract;
    toProto(message: Contract): Uint8Array;
    toProtoMsg(message: Contract): ContractProtoMsg;
};
export declare const Sequence: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Sequence;
    isSDK(o: any): o is SequenceSDKType;
    encode(message: Sequence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Sequence;
    fromPartial(object: Partial<Sequence>): Sequence;
    fromProtoMsg(message: SequenceProtoMsg): Sequence;
    toProto(message: Sequence): Uint8Array;
    toProtoMsg(message: Sequence): SequenceProtoMsg;
};
