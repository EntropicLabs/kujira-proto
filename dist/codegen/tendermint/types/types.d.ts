import { Proof, ProofSDKType } from "../crypto/proof";
import { Consensus, ConsensusSDKType } from "../version/types";
import { ValidatorSet, ValidatorSetSDKType } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
/** BlockIdFlag indicates which BlcokID the signature is for */
export declare enum BlockIDFlag {
    BLOCK_ID_FLAG_UNKNOWN = 0,
    BLOCK_ID_FLAG_ABSENT = 1,
    BLOCK_ID_FLAG_COMMIT = 2,
    BLOCK_ID_FLAG_NIL = 3,
    UNRECOGNIZED = -1
}
export declare const BlockIDFlagSDKType: typeof BlockIDFlag;
export declare function blockIDFlagFromJSON(object: any): BlockIDFlag;
export declare function blockIDFlagToJSON(object: BlockIDFlag): string;
/** SignedMsgType is a type of signed message in the consensus. */
export declare enum SignedMsgType {
    SIGNED_MSG_TYPE_UNKNOWN = 0,
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SIGNED_MSG_TYPE_PREVOTE = 1,
    SIGNED_MSG_TYPE_PRECOMMIT = 2,
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SIGNED_MSG_TYPE_PROPOSAL = 32,
    UNRECOGNIZED = -1
}
export declare const SignedMsgTypeSDKType: typeof SignedMsgType;
export declare function signedMsgTypeFromJSON(object: any): SignedMsgType;
export declare function signedMsgTypeToJSON(object: SignedMsgType): string;
/** PartsetHeader */
export interface PartSetHeader {
    total: number;
    hash: Uint8Array;
}
export interface PartSetHeaderProtoMsg {
    typeUrl: "/tendermint.types.PartSetHeader";
    value: Uint8Array;
}
/** PartsetHeader */
export interface PartSetHeaderSDKType {
    total: number;
    hash: Uint8Array;
}
export interface Part {
    index: number;
    bytes: Uint8Array;
    proof: Proof;
}
export interface PartProtoMsg {
    typeUrl: "/tendermint.types.Part";
    value: Uint8Array;
}
export interface PartSDKType {
    index: number;
    bytes: Uint8Array;
    proof: ProofSDKType;
}
/** BlockID */
export interface BlockID {
    hash: Uint8Array;
    partSetHeader: PartSetHeader;
}
export interface BlockIDProtoMsg {
    typeUrl: "/tendermint.types.BlockID";
    value: Uint8Array;
}
/** BlockID */
export interface BlockIDSDKType {
    hash: Uint8Array;
    part_set_header: PartSetHeaderSDKType;
}
/** Header defines the structure of a Tendermint block header. */
export interface Header {
    /** basic block info */
    version: Consensus;
    chainId: string;
    height: bigint;
    time: Date;
    /** prev block info */
    lastBlockId: BlockID;
    /** hashes of block data */
    lastCommitHash: Uint8Array;
    dataHash: Uint8Array;
    /** hashes from the app output from the prev block */
    validatorsHash: Uint8Array;
    /** validators for the next block */
    nextValidatorsHash: Uint8Array;
    /** consensus params for current block */
    consensusHash: Uint8Array;
    /** state after txs from the previous block */
    appHash: Uint8Array;
    lastResultsHash: Uint8Array;
    /** consensus info */
    evidenceHash: Uint8Array;
    /** original proposer of the block */
    proposerAddress: Uint8Array;
}
export interface HeaderProtoMsg {
    typeUrl: "/tendermint.types.Header";
    value: Uint8Array;
}
/** Header defines the structure of a Tendermint block header. */
export interface HeaderSDKType {
    version: ConsensusSDKType;
    chain_id: string;
    height: bigint;
    time: Date;
    last_block_id: BlockIDSDKType;
    last_commit_hash: Uint8Array;
    data_hash: Uint8Array;
    validators_hash: Uint8Array;
    next_validators_hash: Uint8Array;
    consensus_hash: Uint8Array;
    app_hash: Uint8Array;
    last_results_hash: Uint8Array;
    evidence_hash: Uint8Array;
    proposer_address: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface Data {
    /**
     * Txs that will be applied by state @ block.Height+1.
     * NOTE: not all txs here are valid.  We're just agreeing on the order first.
     * This means that block.AppHash does not include these txs.
     */
    txs: Uint8Array[];
}
export interface DataProtoMsg {
    typeUrl: "/tendermint.types.Data";
    value: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface DataSDKType {
    txs: Uint8Array[];
}
/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */
export interface Vote {
    type: SignedMsgType;
    height: bigint;
    round: number;
    /** zero if vote is nil. */
    blockId: BlockID;
    timestamp: Date;
    validatorAddress: Uint8Array;
    validatorIndex: number;
    signature: Uint8Array;
}
export interface VoteProtoMsg {
    typeUrl: "/tendermint.types.Vote";
    value: Uint8Array;
}
/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */
export interface VoteSDKType {
    type: SignedMsgType;
    height: bigint;
    round: number;
    block_id: BlockIDSDKType;
    timestamp: Date;
    validator_address: Uint8Array;
    validator_index: number;
    signature: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface Commit {
    height: bigint;
    round: number;
    blockId: BlockID;
    signatures: CommitSig[];
}
export interface CommitProtoMsg {
    typeUrl: "/tendermint.types.Commit";
    value: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface CommitSDKType {
    height: bigint;
    round: number;
    block_id: BlockIDSDKType;
    signatures: CommitSigSDKType[];
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSig {
    blockIdFlag: BlockIDFlag;
    validatorAddress: Uint8Array;
    timestamp: Date;
    signature: Uint8Array;
}
export interface CommitSigProtoMsg {
    typeUrl: "/tendermint.types.CommitSig";
    value: Uint8Array;
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSigSDKType {
    block_id_flag: BlockIDFlag;
    validator_address: Uint8Array;
    timestamp: Date;
    signature: Uint8Array;
}
export interface Proposal {
    type: SignedMsgType;
    height: bigint;
    round: number;
    polRound: number;
    blockId: BlockID;
    timestamp: Date;
    signature: Uint8Array;
}
export interface ProposalProtoMsg {
    typeUrl: "/tendermint.types.Proposal";
    value: Uint8Array;
}
export interface ProposalSDKType {
    type: SignedMsgType;
    height: bigint;
    round: number;
    pol_round: number;
    block_id: BlockIDSDKType;
    timestamp: Date;
    signature: Uint8Array;
}
export interface SignedHeader {
    header?: Header;
    commit?: Commit;
}
export interface SignedHeaderProtoMsg {
    typeUrl: "/tendermint.types.SignedHeader";
    value: Uint8Array;
}
export interface SignedHeaderSDKType {
    header?: HeaderSDKType;
    commit?: CommitSDKType;
}
export interface LightBlock {
    signedHeader?: SignedHeader;
    validatorSet?: ValidatorSet;
}
export interface LightBlockProtoMsg {
    typeUrl: "/tendermint.types.LightBlock";
    value: Uint8Array;
}
export interface LightBlockSDKType {
    signed_header?: SignedHeaderSDKType;
    validator_set?: ValidatorSetSDKType;
}
export interface BlockMeta {
    blockId: BlockID;
    blockSize: bigint;
    header: Header;
    numTxs: bigint;
}
export interface BlockMetaProtoMsg {
    typeUrl: "/tendermint.types.BlockMeta";
    value: Uint8Array;
}
export interface BlockMetaSDKType {
    block_id: BlockIDSDKType;
    block_size: bigint;
    header: HeaderSDKType;
    num_txs: bigint;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProof {
    rootHash: Uint8Array;
    data: Uint8Array;
    proof?: Proof;
}
export interface TxProofProtoMsg {
    typeUrl: "/tendermint.types.TxProof";
    value: Uint8Array;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProofSDKType {
    root_hash: Uint8Array;
    data: Uint8Array;
    proof?: ProofSDKType;
}
export declare const PartSetHeader: {
    typeUrl: string;
    is(o: any): o is PartSetHeader;
    isSDK(o: any): o is PartSetHeaderSDKType;
    encode(message: PartSetHeader, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PartSetHeader;
    fromPartial(object: Partial<PartSetHeader>): PartSetHeader;
    fromProtoMsg(message: PartSetHeaderProtoMsg): PartSetHeader;
    toProto(message: PartSetHeader): Uint8Array;
    toProtoMsg(message: PartSetHeader): PartSetHeaderProtoMsg;
};
export declare const Part: {
    typeUrl: string;
    is(o: any): o is Part;
    isSDK(o: any): o is PartSDKType;
    encode(message: Part, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Part;
    fromPartial(object: Partial<Part>): Part;
    fromProtoMsg(message: PartProtoMsg): Part;
    toProto(message: Part): Uint8Array;
    toProtoMsg(message: Part): PartProtoMsg;
};
export declare const BlockID: {
    typeUrl: string;
    is(o: any): o is BlockID;
    isSDK(o: any): o is BlockIDSDKType;
    encode(message: BlockID, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockID;
    fromPartial(object: Partial<BlockID>): BlockID;
    fromProtoMsg(message: BlockIDProtoMsg): BlockID;
    toProto(message: BlockID): Uint8Array;
    toProtoMsg(message: BlockID): BlockIDProtoMsg;
};
export declare const Header: {
    typeUrl: string;
    is(o: any): o is Header;
    isSDK(o: any): o is HeaderSDKType;
    encode(message: Header, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Header;
    fromPartial(object: Partial<Header>): Header;
    fromProtoMsg(message: HeaderProtoMsg): Header;
    toProto(message: Header): Uint8Array;
    toProtoMsg(message: Header): HeaderProtoMsg;
};
export declare const Data: {
    typeUrl: string;
    is(o: any): o is Data;
    isSDK(o: any): o is DataSDKType;
    encode(message: Data, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Data;
    fromPartial(object: Partial<Data>): Data;
    fromProtoMsg(message: DataProtoMsg): Data;
    toProto(message: Data): Uint8Array;
    toProtoMsg(message: Data): DataProtoMsg;
};
export declare const Vote: {
    typeUrl: string;
    is(o: any): o is Vote;
    isSDK(o: any): o is VoteSDKType;
    encode(message: Vote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Vote;
    fromPartial(object: Partial<Vote>): Vote;
    fromProtoMsg(message: VoteProtoMsg): Vote;
    toProto(message: Vote): Uint8Array;
    toProtoMsg(message: Vote): VoteProtoMsg;
};
export declare const Commit: {
    typeUrl: string;
    is(o: any): o is Commit;
    isSDK(o: any): o is CommitSDKType;
    encode(message: Commit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Commit;
    fromPartial(object: Partial<Commit>): Commit;
    fromProtoMsg(message: CommitProtoMsg): Commit;
    toProto(message: Commit): Uint8Array;
    toProtoMsg(message: Commit): CommitProtoMsg;
};
export declare const CommitSig: {
    typeUrl: string;
    is(o: any): o is CommitSig;
    isSDK(o: any): o is CommitSigSDKType;
    encode(message: CommitSig, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CommitSig;
    fromPartial(object: Partial<CommitSig>): CommitSig;
    fromProtoMsg(message: CommitSigProtoMsg): CommitSig;
    toProto(message: CommitSig): Uint8Array;
    toProtoMsg(message: CommitSig): CommitSigProtoMsg;
};
export declare const Proposal: {
    typeUrl: string;
    is(o: any): o is Proposal;
    isSDK(o: any): o is ProposalSDKType;
    encode(message: Proposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Proposal;
    fromPartial(object: Partial<Proposal>): Proposal;
    fromProtoMsg(message: ProposalProtoMsg): Proposal;
    toProto(message: Proposal): Uint8Array;
    toProtoMsg(message: Proposal): ProposalProtoMsg;
};
export declare const SignedHeader: {
    typeUrl: string;
    is(o: any): o is SignedHeader;
    isSDK(o: any): o is SignedHeaderSDKType;
    encode(message: SignedHeader, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SignedHeader;
    fromPartial(object: Partial<SignedHeader>): SignedHeader;
    fromProtoMsg(message: SignedHeaderProtoMsg): SignedHeader;
    toProto(message: SignedHeader): Uint8Array;
    toProtoMsg(message: SignedHeader): SignedHeaderProtoMsg;
};
export declare const LightBlock: {
    typeUrl: string;
    is(o: any): o is LightBlock;
    isSDK(o: any): o is LightBlockSDKType;
    encode(message: LightBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LightBlock;
    fromPartial(object: Partial<LightBlock>): LightBlock;
    fromProtoMsg(message: LightBlockProtoMsg): LightBlock;
    toProto(message: LightBlock): Uint8Array;
    toProtoMsg(message: LightBlock): LightBlockProtoMsg;
};
export declare const BlockMeta: {
    typeUrl: string;
    is(o: any): o is BlockMeta;
    isSDK(o: any): o is BlockMetaSDKType;
    encode(message: BlockMeta, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockMeta;
    fromPartial(object: Partial<BlockMeta>): BlockMeta;
    fromProtoMsg(message: BlockMetaProtoMsg): BlockMeta;
    toProto(message: BlockMeta): Uint8Array;
    toProtoMsg(message: BlockMeta): BlockMetaProtoMsg;
};
export declare const TxProof: {
    typeUrl: string;
    is(o: any): o is TxProof;
    isSDK(o: any): o is TxProofSDKType;
    encode(message: TxProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxProof;
    fromPartial(object: Partial<TxProof>): TxProof;
    fromProtoMsg(message: TxProofProtoMsg): TxProof;
    toProto(message: TxProof): Uint8Array;
    toProtoMsg(message: TxProof): TxProofProtoMsg;
};
