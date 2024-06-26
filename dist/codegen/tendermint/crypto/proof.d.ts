import { BinaryReader, BinaryWriter } from "../../binary";
export interface Proof {
    total: bigint;
    index: bigint;
    leafHash: Uint8Array;
    aunts: Uint8Array[];
}
export interface ProofProtoMsg {
    typeUrl: "/tendermint.crypto.Proof";
    value: Uint8Array;
}
export interface ProofSDKType {
    total: bigint;
    index: bigint;
    leaf_hash: Uint8Array;
    aunts: Uint8Array[];
}
export interface ValueOp {
    /** Encoded in ProofOp.Key. */
    key: Uint8Array;
    /** To encode in ProofOp.Data */
    proof?: Proof;
}
export interface ValueOpProtoMsg {
    typeUrl: "/tendermint.crypto.ValueOp";
    value: Uint8Array;
}
export interface ValueOpSDKType {
    key: Uint8Array;
    proof?: ProofSDKType;
}
export interface DominoOp {
    key: string;
    input: string;
    output: string;
}
export interface DominoOpProtoMsg {
    typeUrl: "/tendermint.crypto.DominoOp";
    value: Uint8Array;
}
export interface DominoOpSDKType {
    key: string;
    input: string;
    output: string;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOp {
    type: string;
    key: Uint8Array;
    data: Uint8Array;
}
export interface ProofOpProtoMsg {
    typeUrl: "/tendermint.crypto.ProofOp";
    value: Uint8Array;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOpSDKType {
    type: string;
    key: Uint8Array;
    data: Uint8Array;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOps {
    ops: ProofOp[];
}
export interface ProofOpsProtoMsg {
    typeUrl: "/tendermint.crypto.ProofOps";
    value: Uint8Array;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOpsSDKType {
    ops: ProofOpSDKType[];
}
export declare const Proof: {
    typeUrl: string;
    is(o: any): o is Proof;
    isSDK(o: any): o is ProofSDKType;
    encode(message: Proof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Proof;
    fromPartial(object: Partial<Proof>): Proof;
    fromProtoMsg(message: ProofProtoMsg): Proof;
    toProto(message: Proof): Uint8Array;
    toProtoMsg(message: Proof): ProofProtoMsg;
};
export declare const ValueOp: {
    typeUrl: string;
    is(o: any): o is ValueOp;
    isSDK(o: any): o is ValueOpSDKType;
    encode(message: ValueOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValueOp;
    fromPartial(object: Partial<ValueOp>): ValueOp;
    fromProtoMsg(message: ValueOpProtoMsg): ValueOp;
    toProto(message: ValueOp): Uint8Array;
    toProtoMsg(message: ValueOp): ValueOpProtoMsg;
};
export declare const DominoOp: {
    typeUrl: string;
    is(o: any): o is DominoOp;
    isSDK(o: any): o is DominoOpSDKType;
    encode(message: DominoOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DominoOp;
    fromPartial(object: Partial<DominoOp>): DominoOp;
    fromProtoMsg(message: DominoOpProtoMsg): DominoOp;
    toProto(message: DominoOp): Uint8Array;
    toProtoMsg(message: DominoOp): DominoOpProtoMsg;
};
export declare const ProofOp: {
    typeUrl: string;
    is(o: any): o is ProofOp;
    isSDK(o: any): o is ProofOpSDKType;
    encode(message: ProofOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProofOp;
    fromPartial(object: Partial<ProofOp>): ProofOp;
    fromProtoMsg(message: ProofOpProtoMsg): ProofOp;
    toProto(message: ProofOp): Uint8Array;
    toProtoMsg(message: ProofOp): ProofOpProtoMsg;
};
export declare const ProofOps: {
    typeUrl: string;
    is(o: any): o is ProofOps;
    isSDK(o: any): o is ProofOpsSDKType;
    encode(message: ProofOps, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProofOps;
    fromPartial(object: Partial<ProofOps>): ProofOps;
    fromProtoMsg(message: ProofOpsProtoMsg): ProofOps;
    toProto(message: ProofOps): Uint8Array;
    toProtoMsg(message: ProofOps): ProofOpsProtoMsg;
};
