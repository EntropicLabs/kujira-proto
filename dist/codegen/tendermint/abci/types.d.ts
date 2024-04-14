import { Header, HeaderSDKType } from "../types/types";
import { ProofOps, ProofOpsSDKType } from "../crypto/proof";
import { EvidenceParams, EvidenceParamsSDKType, ValidatorParams, ValidatorParamsSDKType, VersionParams, VersionParamsSDKType } from "../types/params";
import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare enum CheckTxType {
    NEW = 0,
    RECHECK = 1,
    UNRECOGNIZED = -1
}
export declare const CheckTxTypeSDKType: typeof CheckTxType;
export declare function checkTxTypeFromJSON(object: any): CheckTxType;
export declare function checkTxTypeToJSON(object: CheckTxType): string;
export declare enum ResponseOfferSnapshot_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Snapshot accepted, apply chunks */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** REJECT - Reject this specific snapshot, try others */
    REJECT = 3,
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    REJECT_FORMAT = 4,
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    REJECT_SENDER = 5,
    UNRECOGNIZED = -1
}
export declare const ResponseOfferSnapshot_ResultSDKType: typeof ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string;
export declare enum ResponseApplySnapshotChunk_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Chunk successfully accepted */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** RETRY - Retry chunk (combine with refetch and reject) */
    RETRY = 3,
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    RETRY_SNAPSHOT = 4,
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    REJECT_SNAPSHOT = 5,
    UNRECOGNIZED = -1
}
export declare const ResponseApplySnapshotChunk_ResultSDKType: typeof ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string;
export declare enum EvidenceType {
    UNKNOWN = 0,
    DUPLICATE_VOTE = 1,
    LIGHT_CLIENT_ATTACK = 2,
    UNRECOGNIZED = -1
}
export declare const EvidenceTypeSDKType: typeof EvidenceType;
export declare function evidenceTypeFromJSON(object: any): EvidenceType;
export declare function evidenceTypeToJSON(object: EvidenceType): string;
export interface Request {
    echo?: RequestEcho;
    flush?: RequestFlush;
    info?: RequestInfo;
    setOption?: RequestSetOption;
    initChain?: RequestInitChain;
    query?: RequestQuery;
    beginBlock?: RequestBeginBlock;
    checkTx?: RequestCheckTx;
    deliverTx?: RequestDeliverTx;
    endBlock?: RequestEndBlock;
    commit?: RequestCommit;
    listSnapshots?: RequestListSnapshots;
    offerSnapshot?: RequestOfferSnapshot;
    loadSnapshotChunk?: RequestLoadSnapshotChunk;
    applySnapshotChunk?: RequestApplySnapshotChunk;
}
export interface RequestProtoMsg {
    typeUrl: "/tendermint.abci.Request";
    value: Uint8Array;
}
export interface RequestSDKType {
    echo?: RequestEchoSDKType;
    flush?: RequestFlushSDKType;
    info?: RequestInfoSDKType;
    set_option?: RequestSetOptionSDKType;
    init_chain?: RequestInitChainSDKType;
    query?: RequestQuerySDKType;
    begin_block?: RequestBeginBlockSDKType;
    check_tx?: RequestCheckTxSDKType;
    deliver_tx?: RequestDeliverTxSDKType;
    end_block?: RequestEndBlockSDKType;
    commit?: RequestCommitSDKType;
    list_snapshots?: RequestListSnapshotsSDKType;
    offer_snapshot?: RequestOfferSnapshotSDKType;
    load_snapshot_chunk?: RequestLoadSnapshotChunkSDKType;
    apply_snapshot_chunk?: RequestApplySnapshotChunkSDKType;
}
export interface RequestEcho {
    message: string;
}
export interface RequestEchoProtoMsg {
    typeUrl: "/tendermint.abci.RequestEcho";
    value: Uint8Array;
}
export interface RequestEchoSDKType {
    message: string;
}
export interface RequestFlush {
}
export interface RequestFlushProtoMsg {
    typeUrl: "/tendermint.abci.RequestFlush";
    value: Uint8Array;
}
export interface RequestFlushSDKType {
}
export interface RequestInfo {
    version: string;
    blockVersion: bigint;
    p2pVersion: bigint;
}
export interface RequestInfoProtoMsg {
    typeUrl: "/tendermint.abci.RequestInfo";
    value: Uint8Array;
}
export interface RequestInfoSDKType {
    version: string;
    block_version: bigint;
    p2p_version: bigint;
}
/** nondeterministic */
export interface RequestSetOption {
    key: string;
    value: string;
}
export interface RequestSetOptionProtoMsg {
    typeUrl: "/tendermint.abci.RequestSetOption";
    value: Uint8Array;
}
/** nondeterministic */
export interface RequestSetOptionSDKType {
    key: string;
    value: string;
}
export interface RequestInitChain {
    time: Date;
    chainId: string;
    consensusParams?: ConsensusParams;
    validators: ValidatorUpdate[];
    appStateBytes: Uint8Array;
    initialHeight: bigint;
}
export interface RequestInitChainProtoMsg {
    typeUrl: "/tendermint.abci.RequestInitChain";
    value: Uint8Array;
}
export interface RequestInitChainSDKType {
    time: Date;
    chain_id: string;
    consensus_params?: ConsensusParamsSDKType;
    validators: ValidatorUpdateSDKType[];
    app_state_bytes: Uint8Array;
    initial_height: bigint;
}
export interface RequestQuery {
    data: Uint8Array;
    path: string;
    height: bigint;
    prove: boolean;
}
export interface RequestQueryProtoMsg {
    typeUrl: "/tendermint.abci.RequestQuery";
    value: Uint8Array;
}
export interface RequestQuerySDKType {
    data: Uint8Array;
    path: string;
    height: bigint;
    prove: boolean;
}
export interface RequestBeginBlock {
    hash: Uint8Array;
    header: Header;
    lastCommitInfo: LastCommitInfo;
    byzantineValidators: Evidence[];
}
export interface RequestBeginBlockProtoMsg {
    typeUrl: "/tendermint.abci.RequestBeginBlock";
    value: Uint8Array;
}
export interface RequestBeginBlockSDKType {
    hash: Uint8Array;
    header: HeaderSDKType;
    last_commit_info: LastCommitInfoSDKType;
    byzantine_validators: EvidenceSDKType[];
}
export interface RequestCheckTx {
    tx: Uint8Array;
    type: CheckTxType;
}
export interface RequestCheckTxProtoMsg {
    typeUrl: "/tendermint.abci.RequestCheckTx";
    value: Uint8Array;
}
export interface RequestCheckTxSDKType {
    tx: Uint8Array;
    type: CheckTxType;
}
export interface RequestDeliverTx {
    tx: Uint8Array;
}
export interface RequestDeliverTxProtoMsg {
    typeUrl: "/tendermint.abci.RequestDeliverTx";
    value: Uint8Array;
}
export interface RequestDeliverTxSDKType {
    tx: Uint8Array;
}
export interface RequestEndBlock {
    height: bigint;
}
export interface RequestEndBlockProtoMsg {
    typeUrl: "/tendermint.abci.RequestEndBlock";
    value: Uint8Array;
}
export interface RequestEndBlockSDKType {
    height: bigint;
}
export interface RequestCommit {
}
export interface RequestCommitProtoMsg {
    typeUrl: "/tendermint.abci.RequestCommit";
    value: Uint8Array;
}
export interface RequestCommitSDKType {
}
/** lists available snapshots */
export interface RequestListSnapshots {
}
export interface RequestListSnapshotsProtoMsg {
    typeUrl: "/tendermint.abci.RequestListSnapshots";
    value: Uint8Array;
}
/** lists available snapshots */
export interface RequestListSnapshotsSDKType {
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
    /** snapshot offered by peers */
    snapshot?: Snapshot;
    /** light client-verified app hash for snapshot height */
    appHash: Uint8Array;
}
export interface RequestOfferSnapshotProtoMsg {
    typeUrl: "/tendermint.abci.RequestOfferSnapshot";
    value: Uint8Array;
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshotSDKType {
    snapshot?: SnapshotSDKType;
    app_hash: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
    height: bigint;
    format: number;
    chunk: number;
}
export interface RequestLoadSnapshotChunkProtoMsg {
    typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk";
    value: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkSDKType {
    height: bigint;
    format: number;
    chunk: number;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
export interface RequestApplySnapshotChunkProtoMsg {
    typeUrl: "/tendermint.abci.RequestApplySnapshotChunk";
    value: Uint8Array;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunkSDKType {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
export interface Response {
    exception?: ResponseException;
    echo?: ResponseEcho;
    flush?: ResponseFlush;
    info?: ResponseInfo;
    setOption?: ResponseSetOption;
    initChain?: ResponseInitChain;
    query?: ResponseQuery;
    beginBlock?: ResponseBeginBlock;
    checkTx?: ResponseCheckTx;
    deliverTx?: ResponseDeliverTx;
    endBlock?: ResponseEndBlock;
    commit?: ResponseCommit;
    listSnapshots?: ResponseListSnapshots;
    offerSnapshot?: ResponseOfferSnapshot;
    loadSnapshotChunk?: ResponseLoadSnapshotChunk;
    applySnapshotChunk?: ResponseApplySnapshotChunk;
}
export interface ResponseProtoMsg {
    typeUrl: "/tendermint.abci.Response";
    value: Uint8Array;
}
export interface ResponseSDKType {
    exception?: ResponseExceptionSDKType;
    echo?: ResponseEchoSDKType;
    flush?: ResponseFlushSDKType;
    info?: ResponseInfoSDKType;
    set_option?: ResponseSetOptionSDKType;
    init_chain?: ResponseInitChainSDKType;
    query?: ResponseQuerySDKType;
    begin_block?: ResponseBeginBlockSDKType;
    check_tx?: ResponseCheckTxSDKType;
    deliver_tx?: ResponseDeliverTxSDKType;
    end_block?: ResponseEndBlockSDKType;
    commit?: ResponseCommitSDKType;
    list_snapshots?: ResponseListSnapshotsSDKType;
    offer_snapshot?: ResponseOfferSnapshotSDKType;
    load_snapshot_chunk?: ResponseLoadSnapshotChunkSDKType;
    apply_snapshot_chunk?: ResponseApplySnapshotChunkSDKType;
}
/** nondeterministic */
export interface ResponseException {
    error: string;
}
export interface ResponseExceptionProtoMsg {
    typeUrl: "/tendermint.abci.ResponseException";
    value: Uint8Array;
}
/** nondeterministic */
export interface ResponseExceptionSDKType {
    error: string;
}
export interface ResponseEcho {
    message: string;
}
export interface ResponseEchoProtoMsg {
    typeUrl: "/tendermint.abci.ResponseEcho";
    value: Uint8Array;
}
export interface ResponseEchoSDKType {
    message: string;
}
export interface ResponseFlush {
}
export interface ResponseFlushProtoMsg {
    typeUrl: "/tendermint.abci.ResponseFlush";
    value: Uint8Array;
}
export interface ResponseFlushSDKType {
}
export interface ResponseInfo {
    data: string;
    version: string;
    appVersion: bigint;
    lastBlockHeight: bigint;
    lastBlockAppHash: Uint8Array;
}
export interface ResponseInfoProtoMsg {
    typeUrl: "/tendermint.abci.ResponseInfo";
    value: Uint8Array;
}
export interface ResponseInfoSDKType {
    data: string;
    version: string;
    app_version: bigint;
    last_block_height: bigint;
    last_block_app_hash: Uint8Array;
}
/** nondeterministic */
export interface ResponseSetOption {
    code: number;
    /** bytes data = 2; */
    log: string;
    info: string;
}
export interface ResponseSetOptionProtoMsg {
    typeUrl: "/tendermint.abci.ResponseSetOption";
    value: Uint8Array;
}
/** nondeterministic */
export interface ResponseSetOptionSDKType {
    code: number;
    log: string;
    info: string;
}
export interface ResponseInitChain {
    consensusParams?: ConsensusParams;
    validators: ValidatorUpdate[];
    appHash: Uint8Array;
}
export interface ResponseInitChainProtoMsg {
    typeUrl: "/tendermint.abci.ResponseInitChain";
    value: Uint8Array;
}
export interface ResponseInitChainSDKType {
    consensus_params?: ConsensusParamsSDKType;
    validators: ValidatorUpdateSDKType[];
    app_hash: Uint8Array;
}
export interface ResponseQuery {
    code: number;
    /** bytes data = 2; // use "value" instead. */
    log: string;
    /** nondeterministic */
    info: string;
    index: bigint;
    key: Uint8Array;
    value: Uint8Array;
    proofOps?: ProofOps;
    height: bigint;
    codespace: string;
}
export interface ResponseQueryProtoMsg {
    typeUrl: "/tendermint.abci.ResponseQuery";
    value: Uint8Array;
}
export interface ResponseQuerySDKType {
    code: number;
    log: string;
    info: string;
    index: bigint;
    key: Uint8Array;
    value: Uint8Array;
    proof_ops?: ProofOpsSDKType;
    height: bigint;
    codespace: string;
}
export interface ResponseBeginBlock {
    events: Event[];
}
export interface ResponseBeginBlockProtoMsg {
    typeUrl: "/tendermint.abci.ResponseBeginBlock";
    value: Uint8Array;
}
export interface ResponseBeginBlockSDKType {
    events: EventSDKType[];
}
export interface ResponseCheckTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: bigint;
    gasUsed: bigint;
    events: Event[];
    codespace: string;
}
export interface ResponseCheckTxProtoMsg {
    typeUrl: "/tendermint.abci.ResponseCheckTx";
    value: Uint8Array;
}
export interface ResponseCheckTxSDKType {
    code: number;
    data: Uint8Array;
    log: string;
    info: string;
    gas_wanted: bigint;
    gas_used: bigint;
    events: EventSDKType[];
    codespace: string;
}
export interface ResponseDeliverTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: bigint;
    gasUsed: bigint;
    events: Event[];
    codespace: string;
}
export interface ResponseDeliverTxProtoMsg {
    typeUrl: "/tendermint.abci.ResponseDeliverTx";
    value: Uint8Array;
}
export interface ResponseDeliverTxSDKType {
    code: number;
    data: Uint8Array;
    log: string;
    info: string;
    gas_wanted: bigint;
    gas_used: bigint;
    events: EventSDKType[];
    codespace: string;
}
export interface ResponseEndBlock {
    validatorUpdates: ValidatorUpdate[];
    consensusParamUpdates?: ConsensusParams;
    events: Event[];
}
export interface ResponseEndBlockProtoMsg {
    typeUrl: "/tendermint.abci.ResponseEndBlock";
    value: Uint8Array;
}
export interface ResponseEndBlockSDKType {
    validator_updates: ValidatorUpdateSDKType[];
    consensus_param_updates?: ConsensusParamsSDKType;
    events: EventSDKType[];
}
export interface ResponseCommit {
    /** reserve 1 */
    data: Uint8Array;
    retainHeight: bigint;
}
export interface ResponseCommitProtoMsg {
    typeUrl: "/tendermint.abci.ResponseCommit";
    value: Uint8Array;
}
export interface ResponseCommitSDKType {
    data: Uint8Array;
    retain_height: bigint;
}
export interface ResponseListSnapshots {
    snapshots: Snapshot[];
}
export interface ResponseListSnapshotsProtoMsg {
    typeUrl: "/tendermint.abci.ResponseListSnapshots";
    value: Uint8Array;
}
export interface ResponseListSnapshotsSDKType {
    snapshots: SnapshotSDKType[];
}
export interface ResponseOfferSnapshot {
    result: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotProtoMsg {
    typeUrl: "/tendermint.abci.ResponseOfferSnapshot";
    value: Uint8Array;
}
export interface ResponseOfferSnapshotSDKType {
    result: ResponseOfferSnapshot_Result;
}
export interface ResponseLoadSnapshotChunk {
    chunk: Uint8Array;
}
export interface ResponseLoadSnapshotChunkProtoMsg {
    typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk";
    value: Uint8Array;
}
export interface ResponseLoadSnapshotChunkSDKType {
    chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
    result: ResponseApplySnapshotChunk_Result;
    /** Chunks to refetch and reapply */
    refetchChunks: number[];
    /** Chunk senders to reject and ban */
    rejectSenders: string[];
}
export interface ResponseApplySnapshotChunkProtoMsg {
    typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk";
    value: Uint8Array;
}
export interface ResponseApplySnapshotChunkSDKType {
    result: ResponseApplySnapshotChunk_Result;
    refetch_chunks: number[];
    reject_senders: string[];
}
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParams {
    block?: BlockParams;
    evidence?: EvidenceParams;
    validator?: ValidatorParams;
    version?: VersionParams;
}
export interface ConsensusParamsProtoMsg {
    typeUrl: "/tendermint.abci.ConsensusParams";
    value: Uint8Array;
}
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParamsSDKType {
    block?: BlockParamsSDKType;
    evidence?: EvidenceParamsSDKType;
    validator?: ValidatorParamsSDKType;
    version?: VersionParamsSDKType;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /** Note: must be greater than 0 */
    maxBytes: bigint;
    /** Note: must be greater or equal to -1 */
    maxGas: bigint;
}
export interface BlockParamsProtoMsg {
    typeUrl: "/tendermint.abci.BlockParams";
    value: Uint8Array;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsSDKType {
    max_bytes: bigint;
    max_gas: bigint;
}
export interface LastCommitInfo {
    round: number;
    votes: VoteInfo[];
}
export interface LastCommitInfoProtoMsg {
    typeUrl: "/tendermint.abci.LastCommitInfo";
    value: Uint8Array;
}
export interface LastCommitInfoSDKType {
    round: number;
    votes: VoteInfoSDKType[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
    type: string;
    attributes: EventAttribute[];
}
export interface EventProtoMsg {
    typeUrl: "/tendermint.abci.Event";
    value: Uint8Array;
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface EventSDKType {
    type: string;
    attributes: EventAttributeSDKType[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
    key: Uint8Array;
    value: Uint8Array;
    /** nondeterministic */
    index: boolean;
}
export interface EventAttributeProtoMsg {
    typeUrl: "/tendermint.abci.EventAttribute";
    value: Uint8Array;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeSDKType {
    key: Uint8Array;
    value: Uint8Array;
    index: boolean;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResult {
    height: bigint;
    index: number;
    tx: Uint8Array;
    result: ResponseDeliverTx;
}
export interface TxResultProtoMsg {
    typeUrl: "/tendermint.abci.TxResult";
    value: Uint8Array;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResultSDKType {
    height: bigint;
    index: number;
    tx: Uint8Array;
    result: ResponseDeliverTxSDKType;
}
/** Validator */
export interface Validator {
    /**
     * The first 20 bytes of SHA256(public key)
     * PubKey pub_key = 2 [(gogoproto.nullable)=false];
     */
    address: Uint8Array;
    /** The voting power */
    power: bigint;
}
export interface ValidatorProtoMsg {
    typeUrl: "/tendermint.abci.Validator";
    value: Uint8Array;
}
/** Validator */
export interface ValidatorSDKType {
    address: Uint8Array;
    power: bigint;
}
/** ValidatorUpdate */
export interface ValidatorUpdate {
    pubKey: PublicKey;
    power: bigint;
}
export interface ValidatorUpdateProtoMsg {
    typeUrl: "/tendermint.abci.ValidatorUpdate";
    value: Uint8Array;
}
/** ValidatorUpdate */
export interface ValidatorUpdateSDKType {
    pub_key: PublicKeySDKType;
    power: bigint;
}
/** VoteInfo */
export interface VoteInfo {
    validator: Validator;
    signedLastBlock: boolean;
}
export interface VoteInfoProtoMsg {
    typeUrl: "/tendermint.abci.VoteInfo";
    value: Uint8Array;
}
/** VoteInfo */
export interface VoteInfoSDKType {
    validator: ValidatorSDKType;
    signed_last_block: boolean;
}
export interface Evidence {
    type: EvidenceType;
    /** The offending validator */
    validator: Validator;
    /** The height when the offense occurred */
    height: bigint;
    /** The corresponding time where the offense occurred */
    time: Date;
    /**
     * Total voting power of the validator set in case the ABCI application does
     * not store historical validators.
     * https://github.com/tendermint/tendermint/issues/4581
     */
    totalVotingPower: bigint;
}
export interface EvidenceProtoMsg {
    typeUrl: "/tendermint.abci.Evidence";
    value: Uint8Array;
}
export interface EvidenceSDKType {
    type: EvidenceType;
    validator: ValidatorSDKType;
    height: bigint;
    time: Date;
    total_voting_power: bigint;
}
export interface Snapshot {
    /** The height at which the snapshot was taken */
    height: bigint;
    /** The application-specific snapshot format */
    format: number;
    /** Number of chunks in the snapshot */
    chunks: number;
    /** Arbitrary snapshot hash, equal only if identical */
    hash: Uint8Array;
    /** Arbitrary application metadata */
    metadata: Uint8Array;
}
export interface SnapshotProtoMsg {
    typeUrl: "/tendermint.abci.Snapshot";
    value: Uint8Array;
}
export interface SnapshotSDKType {
    height: bigint;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Uint8Array;
}
export declare const Request: {
    typeUrl: string;
    is(o: any): o is Request;
    isSDK(o: any): o is RequestSDKType;
    encode(message: Request, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Request;
    fromPartial(object: Partial<Request>): Request;
    fromProtoMsg(message: RequestProtoMsg): Request;
    toProto(message: Request): Uint8Array;
    toProtoMsg(message: Request): RequestProtoMsg;
};
export declare const RequestEcho: {
    typeUrl: string;
    is(o: any): o is RequestEcho;
    isSDK(o: any): o is RequestEchoSDKType;
    encode(message: RequestEcho, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestEcho;
    fromPartial(object: Partial<RequestEcho>): RequestEcho;
    fromProtoMsg(message: RequestEchoProtoMsg): RequestEcho;
    toProto(message: RequestEcho): Uint8Array;
    toProtoMsg(message: RequestEcho): RequestEchoProtoMsg;
};
export declare const RequestFlush: {
    typeUrl: string;
    is(o: any): o is RequestFlush;
    isSDK(o: any): o is RequestFlushSDKType;
    encode(_: RequestFlush, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestFlush;
    fromPartial(_: Partial<RequestFlush>): RequestFlush;
    fromProtoMsg(message: RequestFlushProtoMsg): RequestFlush;
    toProto(message: RequestFlush): Uint8Array;
    toProtoMsg(message: RequestFlush): RequestFlushProtoMsg;
};
export declare const RequestInfo: {
    typeUrl: string;
    is(o: any): o is RequestInfo;
    isSDK(o: any): o is RequestInfoSDKType;
    encode(message: RequestInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestInfo;
    fromPartial(object: Partial<RequestInfo>): RequestInfo;
    fromProtoMsg(message: RequestInfoProtoMsg): RequestInfo;
    toProto(message: RequestInfo): Uint8Array;
    toProtoMsg(message: RequestInfo): RequestInfoProtoMsg;
};
export declare const RequestSetOption: {
    typeUrl: string;
    is(o: any): o is RequestSetOption;
    isSDK(o: any): o is RequestSetOptionSDKType;
    encode(message: RequestSetOption, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestSetOption;
    fromPartial(object: Partial<RequestSetOption>): RequestSetOption;
    fromProtoMsg(message: RequestSetOptionProtoMsg): RequestSetOption;
    toProto(message: RequestSetOption): Uint8Array;
    toProtoMsg(message: RequestSetOption): RequestSetOptionProtoMsg;
};
export declare const RequestInitChain: {
    typeUrl: string;
    is(o: any): o is RequestInitChain;
    isSDK(o: any): o is RequestInitChainSDKType;
    encode(message: RequestInitChain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestInitChain;
    fromPartial(object: Partial<RequestInitChain>): RequestInitChain;
    fromProtoMsg(message: RequestInitChainProtoMsg): RequestInitChain;
    toProto(message: RequestInitChain): Uint8Array;
    toProtoMsg(message: RequestInitChain): RequestInitChainProtoMsg;
};
export declare const RequestQuery: {
    typeUrl: string;
    is(o: any): o is RequestQuery;
    isSDK(o: any): o is RequestQuerySDKType;
    encode(message: RequestQuery, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestQuery;
    fromPartial(object: Partial<RequestQuery>): RequestQuery;
    fromProtoMsg(message: RequestQueryProtoMsg): RequestQuery;
    toProto(message: RequestQuery): Uint8Array;
    toProtoMsg(message: RequestQuery): RequestQueryProtoMsg;
};
export declare const RequestBeginBlock: {
    typeUrl: string;
    is(o: any): o is RequestBeginBlock;
    isSDK(o: any): o is RequestBeginBlockSDKType;
    encode(message: RequestBeginBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestBeginBlock;
    fromPartial(object: Partial<RequestBeginBlock>): RequestBeginBlock;
    fromProtoMsg(message: RequestBeginBlockProtoMsg): RequestBeginBlock;
    toProto(message: RequestBeginBlock): Uint8Array;
    toProtoMsg(message: RequestBeginBlock): RequestBeginBlockProtoMsg;
};
export declare const RequestCheckTx: {
    typeUrl: string;
    is(o: any): o is RequestCheckTx;
    isSDK(o: any): o is RequestCheckTxSDKType;
    encode(message: RequestCheckTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestCheckTx;
    fromPartial(object: Partial<RequestCheckTx>): RequestCheckTx;
    fromProtoMsg(message: RequestCheckTxProtoMsg): RequestCheckTx;
    toProto(message: RequestCheckTx): Uint8Array;
    toProtoMsg(message: RequestCheckTx): RequestCheckTxProtoMsg;
};
export declare const RequestDeliverTx: {
    typeUrl: string;
    is(o: any): o is RequestDeliverTx;
    isSDK(o: any): o is RequestDeliverTxSDKType;
    encode(message: RequestDeliverTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestDeliverTx;
    fromPartial(object: Partial<RequestDeliverTx>): RequestDeliverTx;
    fromProtoMsg(message: RequestDeliverTxProtoMsg): RequestDeliverTx;
    toProto(message: RequestDeliverTx): Uint8Array;
    toProtoMsg(message: RequestDeliverTx): RequestDeliverTxProtoMsg;
};
export declare const RequestEndBlock: {
    typeUrl: string;
    is(o: any): o is RequestEndBlock;
    isSDK(o: any): o is RequestEndBlockSDKType;
    encode(message: RequestEndBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestEndBlock;
    fromPartial(object: Partial<RequestEndBlock>): RequestEndBlock;
    fromProtoMsg(message: RequestEndBlockProtoMsg): RequestEndBlock;
    toProto(message: RequestEndBlock): Uint8Array;
    toProtoMsg(message: RequestEndBlock): RequestEndBlockProtoMsg;
};
export declare const RequestCommit: {
    typeUrl: string;
    is(o: any): o is RequestCommit;
    isSDK(o: any): o is RequestCommitSDKType;
    encode(_: RequestCommit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestCommit;
    fromPartial(_: Partial<RequestCommit>): RequestCommit;
    fromProtoMsg(message: RequestCommitProtoMsg): RequestCommit;
    toProto(message: RequestCommit): Uint8Array;
    toProtoMsg(message: RequestCommit): RequestCommitProtoMsg;
};
export declare const RequestListSnapshots: {
    typeUrl: string;
    is(o: any): o is RequestListSnapshots;
    isSDK(o: any): o is RequestListSnapshotsSDKType;
    encode(_: RequestListSnapshots, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestListSnapshots;
    fromPartial(_: Partial<RequestListSnapshots>): RequestListSnapshots;
    fromProtoMsg(message: RequestListSnapshotsProtoMsg): RequestListSnapshots;
    toProto(message: RequestListSnapshots): Uint8Array;
    toProtoMsg(message: RequestListSnapshots): RequestListSnapshotsProtoMsg;
};
export declare const RequestOfferSnapshot: {
    typeUrl: string;
    is(o: any): o is RequestOfferSnapshot;
    isSDK(o: any): o is RequestOfferSnapshotSDKType;
    encode(message: RequestOfferSnapshot, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestOfferSnapshot;
    fromPartial(object: Partial<RequestOfferSnapshot>): RequestOfferSnapshot;
    fromProtoMsg(message: RequestOfferSnapshotProtoMsg): RequestOfferSnapshot;
    toProto(message: RequestOfferSnapshot): Uint8Array;
    toProtoMsg(message: RequestOfferSnapshot): RequestOfferSnapshotProtoMsg;
};
export declare const RequestLoadSnapshotChunk: {
    typeUrl: string;
    is(o: any): o is RequestLoadSnapshotChunk;
    isSDK(o: any): o is RequestLoadSnapshotChunkSDKType;
    encode(message: RequestLoadSnapshotChunk, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestLoadSnapshotChunk;
    fromPartial(object: Partial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk;
    fromProtoMsg(message: RequestLoadSnapshotChunkProtoMsg): RequestLoadSnapshotChunk;
    toProto(message: RequestLoadSnapshotChunk): Uint8Array;
    toProtoMsg(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkProtoMsg;
};
export declare const RequestApplySnapshotChunk: {
    typeUrl: string;
    is(o: any): o is RequestApplySnapshotChunk;
    isSDK(o: any): o is RequestApplySnapshotChunkSDKType;
    encode(message: RequestApplySnapshotChunk, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestApplySnapshotChunk;
    fromPartial(object: Partial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk;
    fromProtoMsg(message: RequestApplySnapshotChunkProtoMsg): RequestApplySnapshotChunk;
    toProto(message: RequestApplySnapshotChunk): Uint8Array;
    toProtoMsg(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkProtoMsg;
};
export declare const Response: {
    typeUrl: string;
    is(o: any): o is Response;
    isSDK(o: any): o is ResponseSDKType;
    encode(message: Response, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Response;
    fromPartial(object: Partial<Response>): Response;
    fromProtoMsg(message: ResponseProtoMsg): Response;
    toProto(message: Response): Uint8Array;
    toProtoMsg(message: Response): ResponseProtoMsg;
};
export declare const ResponseException: {
    typeUrl: string;
    is(o: any): o is ResponseException;
    isSDK(o: any): o is ResponseExceptionSDKType;
    encode(message: ResponseException, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseException;
    fromPartial(object: Partial<ResponseException>): ResponseException;
    fromProtoMsg(message: ResponseExceptionProtoMsg): ResponseException;
    toProto(message: ResponseException): Uint8Array;
    toProtoMsg(message: ResponseException): ResponseExceptionProtoMsg;
};
export declare const ResponseEcho: {
    typeUrl: string;
    is(o: any): o is ResponseEcho;
    isSDK(o: any): o is ResponseEchoSDKType;
    encode(message: ResponseEcho, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseEcho;
    fromPartial(object: Partial<ResponseEcho>): ResponseEcho;
    fromProtoMsg(message: ResponseEchoProtoMsg): ResponseEcho;
    toProto(message: ResponseEcho): Uint8Array;
    toProtoMsg(message: ResponseEcho): ResponseEchoProtoMsg;
};
export declare const ResponseFlush: {
    typeUrl: string;
    is(o: any): o is ResponseFlush;
    isSDK(o: any): o is ResponseFlushSDKType;
    encode(_: ResponseFlush, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseFlush;
    fromPartial(_: Partial<ResponseFlush>): ResponseFlush;
    fromProtoMsg(message: ResponseFlushProtoMsg): ResponseFlush;
    toProto(message: ResponseFlush): Uint8Array;
    toProtoMsg(message: ResponseFlush): ResponseFlushProtoMsg;
};
export declare const ResponseInfo: {
    typeUrl: string;
    is(o: any): o is ResponseInfo;
    isSDK(o: any): o is ResponseInfoSDKType;
    encode(message: ResponseInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseInfo;
    fromPartial(object: Partial<ResponseInfo>): ResponseInfo;
    fromProtoMsg(message: ResponseInfoProtoMsg): ResponseInfo;
    toProto(message: ResponseInfo): Uint8Array;
    toProtoMsg(message: ResponseInfo): ResponseInfoProtoMsg;
};
export declare const ResponseSetOption: {
    typeUrl: string;
    is(o: any): o is ResponseSetOption;
    isSDK(o: any): o is ResponseSetOptionSDKType;
    encode(message: ResponseSetOption, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseSetOption;
    fromPartial(object: Partial<ResponseSetOption>): ResponseSetOption;
    fromProtoMsg(message: ResponseSetOptionProtoMsg): ResponseSetOption;
    toProto(message: ResponseSetOption): Uint8Array;
    toProtoMsg(message: ResponseSetOption): ResponseSetOptionProtoMsg;
};
export declare const ResponseInitChain: {
    typeUrl: string;
    is(o: any): o is ResponseInitChain;
    isSDK(o: any): o is ResponseInitChainSDKType;
    encode(message: ResponseInitChain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseInitChain;
    fromPartial(object: Partial<ResponseInitChain>): ResponseInitChain;
    fromProtoMsg(message: ResponseInitChainProtoMsg): ResponseInitChain;
    toProto(message: ResponseInitChain): Uint8Array;
    toProtoMsg(message: ResponseInitChain): ResponseInitChainProtoMsg;
};
export declare const ResponseQuery: {
    typeUrl: string;
    is(o: any): o is ResponseQuery;
    isSDK(o: any): o is ResponseQuerySDKType;
    encode(message: ResponseQuery, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseQuery;
    fromPartial(object: Partial<ResponseQuery>): ResponseQuery;
    fromProtoMsg(message: ResponseQueryProtoMsg): ResponseQuery;
    toProto(message: ResponseQuery): Uint8Array;
    toProtoMsg(message: ResponseQuery): ResponseQueryProtoMsg;
};
export declare const ResponseBeginBlock: {
    typeUrl: string;
    is(o: any): o is ResponseBeginBlock;
    isSDK(o: any): o is ResponseBeginBlockSDKType;
    encode(message: ResponseBeginBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseBeginBlock;
    fromPartial(object: Partial<ResponseBeginBlock>): ResponseBeginBlock;
    fromProtoMsg(message: ResponseBeginBlockProtoMsg): ResponseBeginBlock;
    toProto(message: ResponseBeginBlock): Uint8Array;
    toProtoMsg(message: ResponseBeginBlock): ResponseBeginBlockProtoMsg;
};
export declare const ResponseCheckTx: {
    typeUrl: string;
    is(o: any): o is ResponseCheckTx;
    isSDK(o: any): o is ResponseCheckTxSDKType;
    encode(message: ResponseCheckTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseCheckTx;
    fromPartial(object: Partial<ResponseCheckTx>): ResponseCheckTx;
    fromProtoMsg(message: ResponseCheckTxProtoMsg): ResponseCheckTx;
    toProto(message: ResponseCheckTx): Uint8Array;
    toProtoMsg(message: ResponseCheckTx): ResponseCheckTxProtoMsg;
};
export declare const ResponseDeliverTx: {
    typeUrl: string;
    is(o: any): o is ResponseDeliverTx;
    isSDK(o: any): o is ResponseDeliverTxSDKType;
    encode(message: ResponseDeliverTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseDeliverTx;
    fromPartial(object: Partial<ResponseDeliverTx>): ResponseDeliverTx;
    fromProtoMsg(message: ResponseDeliverTxProtoMsg): ResponseDeliverTx;
    toProto(message: ResponseDeliverTx): Uint8Array;
    toProtoMsg(message: ResponseDeliverTx): ResponseDeliverTxProtoMsg;
};
export declare const ResponseEndBlock: {
    typeUrl: string;
    is(o: any): o is ResponseEndBlock;
    isSDK(o: any): o is ResponseEndBlockSDKType;
    encode(message: ResponseEndBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseEndBlock;
    fromPartial(object: Partial<ResponseEndBlock>): ResponseEndBlock;
    fromProtoMsg(message: ResponseEndBlockProtoMsg): ResponseEndBlock;
    toProto(message: ResponseEndBlock): Uint8Array;
    toProtoMsg(message: ResponseEndBlock): ResponseEndBlockProtoMsg;
};
export declare const ResponseCommit: {
    typeUrl: string;
    is(o: any): o is ResponseCommit;
    isSDK(o: any): o is ResponseCommitSDKType;
    encode(message: ResponseCommit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseCommit;
    fromPartial(object: Partial<ResponseCommit>): ResponseCommit;
    fromProtoMsg(message: ResponseCommitProtoMsg): ResponseCommit;
    toProto(message: ResponseCommit): Uint8Array;
    toProtoMsg(message: ResponseCommit): ResponseCommitProtoMsg;
};
export declare const ResponseListSnapshots: {
    typeUrl: string;
    is(o: any): o is ResponseListSnapshots;
    isSDK(o: any): o is ResponseListSnapshotsSDKType;
    encode(message: ResponseListSnapshots, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseListSnapshots;
    fromPartial(object: Partial<ResponseListSnapshots>): ResponseListSnapshots;
    fromProtoMsg(message: ResponseListSnapshotsProtoMsg): ResponseListSnapshots;
    toProto(message: ResponseListSnapshots): Uint8Array;
    toProtoMsg(message: ResponseListSnapshots): ResponseListSnapshotsProtoMsg;
};
export declare const ResponseOfferSnapshot: {
    typeUrl: string;
    is(o: any): o is ResponseOfferSnapshot;
    isSDK(o: any): o is ResponseOfferSnapshotSDKType;
    encode(message: ResponseOfferSnapshot, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseOfferSnapshot;
    fromPartial(object: Partial<ResponseOfferSnapshot>): ResponseOfferSnapshot;
    fromProtoMsg(message: ResponseOfferSnapshotProtoMsg): ResponseOfferSnapshot;
    toProto(message: ResponseOfferSnapshot): Uint8Array;
    toProtoMsg(message: ResponseOfferSnapshot): ResponseOfferSnapshotProtoMsg;
};
export declare const ResponseLoadSnapshotChunk: {
    typeUrl: string;
    is(o: any): o is ResponseLoadSnapshotChunk;
    isSDK(o: any): o is ResponseLoadSnapshotChunkSDKType;
    encode(message: ResponseLoadSnapshotChunk, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseLoadSnapshotChunk;
    fromPartial(object: Partial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk;
    fromProtoMsg(message: ResponseLoadSnapshotChunkProtoMsg): ResponseLoadSnapshotChunk;
    toProto(message: ResponseLoadSnapshotChunk): Uint8Array;
    toProtoMsg(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkProtoMsg;
};
export declare const ResponseApplySnapshotChunk: {
    typeUrl: string;
    is(o: any): o is ResponseApplySnapshotChunk;
    isSDK(o: any): o is ResponseApplySnapshotChunkSDKType;
    encode(message: ResponseApplySnapshotChunk, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseApplySnapshotChunk;
    fromPartial(object: Partial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk;
    fromProtoMsg(message: ResponseApplySnapshotChunkProtoMsg): ResponseApplySnapshotChunk;
    toProto(message: ResponseApplySnapshotChunk): Uint8Array;
    toProtoMsg(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkProtoMsg;
};
export declare const ConsensusParams: {
    typeUrl: string;
    is(o: any): o is ConsensusParams;
    isSDK(o: any): o is ConsensusParamsSDKType;
    encode(message: ConsensusParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConsensusParams;
    fromPartial(object: Partial<ConsensusParams>): ConsensusParams;
    fromProtoMsg(message: ConsensusParamsProtoMsg): ConsensusParams;
    toProto(message: ConsensusParams): Uint8Array;
    toProtoMsg(message: ConsensusParams): ConsensusParamsProtoMsg;
};
export declare const BlockParams: {
    typeUrl: string;
    is(o: any): o is BlockParams;
    isSDK(o: any): o is BlockParamsSDKType;
    encode(message: BlockParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockParams;
    fromPartial(object: Partial<BlockParams>): BlockParams;
    fromProtoMsg(message: BlockParamsProtoMsg): BlockParams;
    toProto(message: BlockParams): Uint8Array;
    toProtoMsg(message: BlockParams): BlockParamsProtoMsg;
};
export declare const LastCommitInfo: {
    typeUrl: string;
    is(o: any): o is LastCommitInfo;
    isSDK(o: any): o is LastCommitInfoSDKType;
    encode(message: LastCommitInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LastCommitInfo;
    fromPartial(object: Partial<LastCommitInfo>): LastCommitInfo;
    fromProtoMsg(message: LastCommitInfoProtoMsg): LastCommitInfo;
    toProto(message: LastCommitInfo): Uint8Array;
    toProtoMsg(message: LastCommitInfo): LastCommitInfoProtoMsg;
};
export declare const Event: {
    typeUrl: string;
    is(o: any): o is Event;
    isSDK(o: any): o is EventSDKType;
    encode(message: Event, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Event;
    fromPartial(object: Partial<Event>): Event;
    fromProtoMsg(message: EventProtoMsg): Event;
    toProto(message: Event): Uint8Array;
    toProtoMsg(message: Event): EventProtoMsg;
};
export declare const EventAttribute: {
    typeUrl: string;
    is(o: any): o is EventAttribute;
    isSDK(o: any): o is EventAttributeSDKType;
    encode(message: EventAttribute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventAttribute;
    fromPartial(object: Partial<EventAttribute>): EventAttribute;
    fromProtoMsg(message: EventAttributeProtoMsg): EventAttribute;
    toProto(message: EventAttribute): Uint8Array;
    toProtoMsg(message: EventAttribute): EventAttributeProtoMsg;
};
export declare const TxResult: {
    typeUrl: string;
    is(o: any): o is TxResult;
    isSDK(o: any): o is TxResultSDKType;
    encode(message: TxResult, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxResult;
    fromPartial(object: Partial<TxResult>): TxResult;
    fromProtoMsg(message: TxResultProtoMsg): TxResult;
    toProto(message: TxResult): Uint8Array;
    toProtoMsg(message: TxResult): TxResultProtoMsg;
};
export declare const Validator: {
    typeUrl: string;
    is(o: any): o is Validator;
    isSDK(o: any): o is ValidatorSDKType;
    encode(message: Validator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Validator;
    fromPartial(object: Partial<Validator>): Validator;
    fromProtoMsg(message: ValidatorProtoMsg): Validator;
    toProto(message: Validator): Uint8Array;
    toProtoMsg(message: Validator): ValidatorProtoMsg;
};
export declare const ValidatorUpdate: {
    typeUrl: string;
    is(o: any): o is ValidatorUpdate;
    isSDK(o: any): o is ValidatorUpdateSDKType;
    encode(message: ValidatorUpdate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorUpdate;
    fromPartial(object: Partial<ValidatorUpdate>): ValidatorUpdate;
    fromProtoMsg(message: ValidatorUpdateProtoMsg): ValidatorUpdate;
    toProto(message: ValidatorUpdate): Uint8Array;
    toProtoMsg(message: ValidatorUpdate): ValidatorUpdateProtoMsg;
};
export declare const VoteInfo: {
    typeUrl: string;
    is(o: any): o is VoteInfo;
    isSDK(o: any): o is VoteInfoSDKType;
    encode(message: VoteInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): VoteInfo;
    fromPartial(object: Partial<VoteInfo>): VoteInfo;
    fromProtoMsg(message: VoteInfoProtoMsg): VoteInfo;
    toProto(message: VoteInfo): Uint8Array;
    toProtoMsg(message: VoteInfo): VoteInfoProtoMsg;
};
export declare const Evidence: {
    typeUrl: string;
    is(o: any): o is Evidence;
    isSDK(o: any): o is EvidenceSDKType;
    encode(message: Evidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Evidence;
    fromPartial(object: Partial<Evidence>): Evidence;
    fromProtoMsg(message: EvidenceProtoMsg): Evidence;
    toProto(message: Evidence): Uint8Array;
    toProtoMsg(message: Evidence): EvidenceProtoMsg;
};
export declare const Snapshot: {
    typeUrl: string;
    is(o: any): o is Snapshot;
    isSDK(o: any): o is SnapshotSDKType;
    encode(message: Snapshot, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Snapshot;
    fromPartial(object: Partial<Snapshot>): Snapshot;
    fromProtoMsg(message: SnapshotProtoMsg): Snapshot;
    toProto(message: Snapshot): Uint8Array;
    toProtoMsg(message: Snapshot): SnapshotProtoMsg;
};
