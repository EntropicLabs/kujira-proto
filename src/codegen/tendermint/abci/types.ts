import { Timestamp } from "../../google/protobuf/timestamp";
import { Header, HeaderSDKType } from "../types/types";
import { ProofOps, ProofOpsSDKType } from "../crypto/proof";
import { EvidenceParams, EvidenceParamsSDKType, ValidatorParams, ValidatorParamsSDKType, VersionParams, VersionParamsSDKType } from "../types/params";
import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { toTimestamp, fromTimestamp, isSet } from "../../helpers";
export enum CheckTxType {
  NEW = 0,
  RECHECK = 1,
  UNRECOGNIZED = -1,
}
export const CheckTxTypeSDKType = CheckTxType;
export function checkTxTypeFromJSON(object: any): CheckTxType {
  switch (object) {
    case 0:
    case "NEW":
      return CheckTxType.NEW;
    case 1:
    case "RECHECK":
      return CheckTxType.RECHECK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckTxType.UNRECOGNIZED;
  }
}
export function checkTxTypeToJSON(object: CheckTxType): string {
  switch (object) {
    case CheckTxType.NEW:
      return "NEW";
    case CheckTxType.RECHECK:
      return "RECHECK";
    case CheckTxType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseOfferSnapshot_Result {
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
  UNRECOGNIZED = -1,
}
export const ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_Result;
export function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseOfferSnapshot_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseOfferSnapshot_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseOfferSnapshot_Result.ABORT;
    case 3:
    case "REJECT":
      return ResponseOfferSnapshot_Result.REJECT;
    case 4:
    case "REJECT_FORMAT":
      return ResponseOfferSnapshot_Result.REJECT_FORMAT;
    case 5:
    case "REJECT_SENDER":
      return ResponseOfferSnapshot_Result.REJECT_SENDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseOfferSnapshot_Result.UNRECOGNIZED;
  }
}
export function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string {
  switch (object) {
    case ResponseOfferSnapshot_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseOfferSnapshot_Result.ACCEPT:
      return "ACCEPT";
    case ResponseOfferSnapshot_Result.ABORT:
      return "ABORT";
    case ResponseOfferSnapshot_Result.REJECT:
      return "REJECT";
    case ResponseOfferSnapshot_Result.REJECT_FORMAT:
      return "REJECT_FORMAT";
    case ResponseOfferSnapshot_Result.REJECT_SENDER:
      return "REJECT_SENDER";
    case ResponseOfferSnapshot_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseApplySnapshotChunk_Result {
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
  UNRECOGNIZED = -1,
}
export const ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_Result;
export function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseApplySnapshotChunk_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseApplySnapshotChunk_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseApplySnapshotChunk_Result.ABORT;
    case 3:
    case "RETRY":
      return ResponseApplySnapshotChunk_Result.RETRY;
    case 4:
    case "RETRY_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
    case 5:
    case "REJECT_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
  }
}
export function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string {
  switch (object) {
    case ResponseApplySnapshotChunk_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseApplySnapshotChunk_Result.ACCEPT:
      return "ACCEPT";
    case ResponseApplySnapshotChunk_Result.ABORT:
      return "ABORT";
    case ResponseApplySnapshotChunk_Result.RETRY:
      return "RETRY";
    case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
      return "RETRY_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
      return "REJECT_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum EvidenceType {
  UNKNOWN = 0,
  DUPLICATE_VOTE = 1,
  LIGHT_CLIENT_ATTACK = 2,
  UNRECOGNIZED = -1,
}
export const EvidenceTypeSDKType = EvidenceType;
export function evidenceTypeFromJSON(object: any): EvidenceType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return EvidenceType.UNKNOWN;
    case 1:
    case "DUPLICATE_VOTE":
      return EvidenceType.DUPLICATE_VOTE;
    case 2:
    case "LIGHT_CLIENT_ATTACK":
      return EvidenceType.LIGHT_CLIENT_ATTACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EvidenceType.UNRECOGNIZED;
  }
}
export function evidenceTypeToJSON(object: EvidenceType): string {
  switch (object) {
    case EvidenceType.UNKNOWN:
      return "UNKNOWN";
    case EvidenceType.DUPLICATE_VOTE:
      return "DUPLICATE_VOTE";
    case EvidenceType.LIGHT_CLIENT_ATTACK:
      return "LIGHT_CLIENT_ATTACK";
    case EvidenceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
export interface RequestFlush {}
export interface RequestFlushProtoMsg {
  typeUrl: "/tendermint.abci.RequestFlush";
  value: Uint8Array;
}
export interface RequestFlushSDKType {}
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
export interface RequestCommit {}
export interface RequestCommitProtoMsg {
  typeUrl: "/tendermint.abci.RequestCommit";
  value: Uint8Array;
}
export interface RequestCommitSDKType {}
/** lists available snapshots */
export interface RequestListSnapshots {}
export interface RequestListSnapshotsProtoMsg {
  typeUrl: "/tendermint.abci.RequestListSnapshots";
  value: Uint8Array;
}
/** lists available snapshots */
export interface RequestListSnapshotsSDKType {}
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
export interface ResponseFlush {}
export interface ResponseFlushProtoMsg {
  typeUrl: "/tendermint.abci.ResponseFlush";
  value: Uint8Array;
}
export interface ResponseFlushSDKType {}
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
function createBaseRequest(): Request {
  return {
    echo: undefined,
    flush: undefined,
    info: undefined,
    setOption: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined
  };
}
export const Request = {
  typeUrl: "/tendermint.abci.Request",
  is(o: any): o is Request {
    return o && o.$typeUrl === Request.typeUrl;
  },
  isSDK(o: any): o is RequestSDKType {
    return o && o.$typeUrl === Request.typeUrl;
  },
  encode(message: Request, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.echo !== undefined) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }
    if (message.info !== undefined) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.setOption !== undefined) {
      RequestSetOption.encode(message.setOption, writer.uint32(34).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
    }
    if (message.query !== undefined) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      RequestBeginBlock.encode(message.beginBlock, writer.uint32(58).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
    }
    if (message.deliverTx !== undefined) {
      RequestDeliverTx.encode(message.deliverTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.endBlock !== undefined) {
      RequestEndBlock.encode(message.endBlock, writer.uint32(82).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Request {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.echo = RequestEcho.decode(reader, reader.uint32());
          break;
        case 2:
          message.flush = RequestFlush.decode(reader, reader.uint32());
          break;
        case 3:
          message.info = RequestInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.setOption = RequestSetOption.decode(reader, reader.uint32());
          break;
        case 5:
          message.initChain = RequestInitChain.decode(reader, reader.uint32());
          break;
        case 6:
          message.query = RequestQuery.decode(reader, reader.uint32());
          break;
        case 7:
          message.beginBlock = RequestBeginBlock.decode(reader, reader.uint32());
          break;
        case 8:
          message.checkTx = RequestCheckTx.decode(reader, reader.uint32());
          break;
        case 9:
          message.deliverTx = RequestDeliverTx.decode(reader, reader.uint32());
          break;
        case 10:
          message.endBlock = RequestEndBlock.decode(reader, reader.uint32());
          break;
        case 11:
          message.commit = RequestCommit.decode(reader, reader.uint32());
          break;
        case 12:
          message.listSnapshots = RequestListSnapshots.decode(reader, reader.uint32());
          break;
        case 13:
          message.offerSnapshot = RequestOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 14:
          message.loadSnapshotChunk = RequestLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 15:
          message.applySnapshotChunk = RequestApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Request>): Request {
    const message = createBaseRequest();
    message.echo = object.echo !== undefined && object.echo !== null ? RequestEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? RequestFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? RequestInfo.fromPartial(object.info) : undefined;
    message.setOption = object.setOption !== undefined && object.setOption !== null ? RequestSetOption.fromPartial(object.setOption) : undefined;
    message.initChain = object.initChain !== undefined && object.initChain !== null ? RequestInitChain.fromPartial(object.initChain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? RequestQuery.fromPartial(object.query) : undefined;
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? RequestBeginBlock.fromPartial(object.beginBlock) : undefined;
    message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? RequestCheckTx.fromPartial(object.checkTx) : undefined;
    message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? RequestDeliverTx.fromPartial(object.deliverTx) : undefined;
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? RequestEndBlock.fromPartial(object.endBlock) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? RequestCommit.fromPartial(object.commit) : undefined;
    message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? RequestListSnapshots.fromPartial(object.listSnapshots) : undefined;
    message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? RequestOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
    message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
    return message;
  },
  fromProtoMsg(message: RequestProtoMsg): Request {
    return Request.decode(message.value);
  },
  toProto(message: Request): Uint8Array {
    return Request.encode(message).finish();
  },
  toProtoMsg(message: Request): RequestProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Request",
      value: Request.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Request.typeUrl, Request);
function createBaseRequestEcho(): RequestEcho {
  return {
    message: ""
  };
}
export const RequestEcho = {
  typeUrl: "/tendermint.abci.RequestEcho",
  is(o: any): o is RequestEcho {
    return o && (o.$typeUrl === RequestEcho.typeUrl || typeof o.message === "string");
  },
  isSDK(o: any): o is RequestEchoSDKType {
    return o && (o.$typeUrl === RequestEcho.typeUrl || typeof o.message === "string");
  },
  encode(message: RequestEcho, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestEcho {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestEcho>): RequestEcho {
    const message = createBaseRequestEcho();
    message.message = object.message ?? "";
    return message;
  },
  fromProtoMsg(message: RequestEchoProtoMsg): RequestEcho {
    return RequestEcho.decode(message.value);
  },
  toProto(message: RequestEcho): Uint8Array {
    return RequestEcho.encode(message).finish();
  },
  toProtoMsg(message: RequestEcho): RequestEchoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestEcho",
      value: RequestEcho.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestEcho.typeUrl, RequestEcho);
function createBaseRequestFlush(): RequestFlush {
  return {};
}
export const RequestFlush = {
  typeUrl: "/tendermint.abci.RequestFlush",
  is(o: any): o is RequestFlush {
    return o && o.$typeUrl === RequestFlush.typeUrl;
  },
  isSDK(o: any): o is RequestFlushSDKType {
    return o && o.$typeUrl === RequestFlush.typeUrl;
  },
  encode(_: RequestFlush, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestFlush {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestFlush();
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
  fromPartial(_: Partial<RequestFlush>): RequestFlush {
    const message = createBaseRequestFlush();
    return message;
  },
  fromProtoMsg(message: RequestFlushProtoMsg): RequestFlush {
    return RequestFlush.decode(message.value);
  },
  toProto(message: RequestFlush): Uint8Array {
    return RequestFlush.encode(message).finish();
  },
  toProtoMsg(message: RequestFlush): RequestFlushProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestFlush",
      value: RequestFlush.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestFlush.typeUrl, RequestFlush);
function createBaseRequestInfo(): RequestInfo {
  return {
    version: "",
    blockVersion: BigInt(0),
    p2pVersion: BigInt(0)
  };
}
export const RequestInfo = {
  typeUrl: "/tendermint.abci.RequestInfo",
  is(o: any): o is RequestInfo {
    return o && (o.$typeUrl === RequestInfo.typeUrl || typeof o.version === "string" && typeof o.blockVersion === "bigint" && typeof o.p2pVersion === "bigint");
  },
  isSDK(o: any): o is RequestInfoSDKType {
    return o && (o.$typeUrl === RequestInfo.typeUrl || typeof o.version === "string" && typeof o.block_version === "bigint" && typeof o.p2p_version === "bigint");
  },
  encode(message: RequestInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.blockVersion !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockVersion);
    }
    if (message.p2pVersion !== BigInt(0)) {
      writer.uint32(24).uint64(message.p2pVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.blockVersion = reader.uint64();
          break;
        case 3:
          message.p2pVersion = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestInfo>): RequestInfo {
    const message = createBaseRequestInfo();
    message.version = object.version ?? "";
    message.blockVersion = object.blockVersion !== undefined && object.blockVersion !== null ? BigInt(object.blockVersion.toString()) : BigInt(0);
    message.p2pVersion = object.p2pVersion !== undefined && object.p2pVersion !== null ? BigInt(object.p2pVersion.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: RequestInfoProtoMsg): RequestInfo {
    return RequestInfo.decode(message.value);
  },
  toProto(message: RequestInfo): Uint8Array {
    return RequestInfo.encode(message).finish();
  },
  toProtoMsg(message: RequestInfo): RequestInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestInfo",
      value: RequestInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestInfo.typeUrl, RequestInfo);
function createBaseRequestSetOption(): RequestSetOption {
  return {
    key: "",
    value: ""
  };
}
export const RequestSetOption = {
  typeUrl: "/tendermint.abci.RequestSetOption",
  is(o: any): o is RequestSetOption {
    return o && (o.$typeUrl === RequestSetOption.typeUrl || typeof o.key === "string" && typeof o.value === "string");
  },
  isSDK(o: any): o is RequestSetOptionSDKType {
    return o && (o.$typeUrl === RequestSetOption.typeUrl || typeof o.key === "string" && typeof o.value === "string");
  },
  encode(message: RequestSetOption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestSetOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestSetOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestSetOption>): RequestSetOption {
    const message = createBaseRequestSetOption();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromProtoMsg(message: RequestSetOptionProtoMsg): RequestSetOption {
    return RequestSetOption.decode(message.value);
  },
  toProto(message: RequestSetOption): Uint8Array {
    return RequestSetOption.encode(message).finish();
  },
  toProtoMsg(message: RequestSetOption): RequestSetOptionProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestSetOption",
      value: RequestSetOption.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestSetOption.typeUrl, RequestSetOption);
function createBaseRequestInitChain(): RequestInitChain {
  return {
    time: new Date(),
    chainId: "",
    consensusParams: undefined,
    validators: [],
    appStateBytes: new Uint8Array(),
    initialHeight: BigInt(0)
  };
}
export const RequestInitChain = {
  typeUrl: "/tendermint.abci.RequestInitChain",
  is(o: any): o is RequestInitChain {
    return o && (o.$typeUrl === RequestInitChain.typeUrl || Timestamp.is(o.time) && typeof o.chainId === "string" && Array.isArray(o.validators) && (!o.validators.length || ValidatorUpdate.is(o.validators[0])) && (o.appStateBytes instanceof Uint8Array || typeof o.appStateBytes === "string") && typeof o.initialHeight === "bigint");
  },
  isSDK(o: any): o is RequestInitChainSDKType {
    return o && (o.$typeUrl === RequestInitChain.typeUrl || Timestamp.isSDK(o.time) && typeof o.chain_id === "string" && Array.isArray(o.validators) && (!o.validators.length || ValidatorUpdate.isSDK(o.validators[0])) && (o.app_state_bytes instanceof Uint8Array || typeof o.app_state_bytes === "string") && typeof o.initial_height === "bigint");
  },
  encode(message: RequestInitChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.appStateBytes.length !== 0) {
      writer.uint32(42).bytes(message.appStateBytes);
    }
    if (message.initialHeight !== BigInt(0)) {
      writer.uint32(48).int64(message.initialHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestInitChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 5:
          message.appStateBytes = reader.bytes();
          break;
        case 6:
          message.initialHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestInitChain>): RequestInitChain {
    const message = createBaseRequestInitChain();
    message.time = object.time ?? undefined;
    message.chainId = object.chainId ?? "";
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.appStateBytes = object.appStateBytes ?? new Uint8Array();
    message.initialHeight = object.initialHeight !== undefined && object.initialHeight !== null ? BigInt(object.initialHeight.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: RequestInitChainProtoMsg): RequestInitChain {
    return RequestInitChain.decode(message.value);
  },
  toProto(message: RequestInitChain): Uint8Array {
    return RequestInitChain.encode(message).finish();
  },
  toProtoMsg(message: RequestInitChain): RequestInitChainProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestInitChain",
      value: RequestInitChain.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestInitChain.typeUrl, RequestInitChain);
function createBaseRequestQuery(): RequestQuery {
  return {
    data: new Uint8Array(),
    path: "",
    height: BigInt(0),
    prove: false
  };
}
export const RequestQuery = {
  typeUrl: "/tendermint.abci.RequestQuery",
  is(o: any): o is RequestQuery {
    return o && (o.$typeUrl === RequestQuery.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.path === "string" && typeof o.height === "bigint" && typeof o.prove === "boolean");
  },
  isSDK(o: any): o is RequestQuerySDKType {
    return o && (o.$typeUrl === RequestQuery.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.path === "string" && typeof o.height === "bigint" && typeof o.prove === "boolean");
  },
  encode(message: RequestQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestQuery>): RequestQuery {
    const message = createBaseRequestQuery();
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.prove = object.prove ?? false;
    return message;
  },
  fromProtoMsg(message: RequestQueryProtoMsg): RequestQuery {
    return RequestQuery.decode(message.value);
  },
  toProto(message: RequestQuery): Uint8Array {
    return RequestQuery.encode(message).finish();
  },
  toProtoMsg(message: RequestQuery): RequestQueryProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestQuery",
      value: RequestQuery.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestQuery.typeUrl, RequestQuery);
function createBaseRequestBeginBlock(): RequestBeginBlock {
  return {
    hash: new Uint8Array(),
    header: Header.fromPartial({}),
    lastCommitInfo: LastCommitInfo.fromPartial({}),
    byzantineValidators: []
  };
}
export const RequestBeginBlock = {
  typeUrl: "/tendermint.abci.RequestBeginBlock",
  is(o: any): o is RequestBeginBlock {
    return o && (o.$typeUrl === RequestBeginBlock.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && Header.is(o.header) && LastCommitInfo.is(o.lastCommitInfo) && Array.isArray(o.byzantineValidators) && (!o.byzantineValidators.length || Evidence.is(o.byzantineValidators[0])));
  },
  isSDK(o: any): o is RequestBeginBlockSDKType {
    return o && (o.$typeUrl === RequestBeginBlock.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && Header.isSDK(o.header) && LastCommitInfo.isSDK(o.last_commit_info) && Array.isArray(o.byzantine_validators) && (!o.byzantine_validators.length || Evidence.isSDK(o.byzantine_validators[0])));
  },
  encode(message: RequestBeginBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastCommitInfo !== undefined) {
      LastCommitInfo.encode(message.lastCommitInfo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.byzantineValidators) {
      Evidence.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestBeginBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestBeginBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 3:
          message.lastCommitInfo = LastCommitInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.byzantineValidators.push(Evidence.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestBeginBlock>): RequestBeginBlock {
    const message = createBaseRequestBeginBlock();
    message.hash = object.hash ?? new Uint8Array();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.lastCommitInfo = object.lastCommitInfo !== undefined && object.lastCommitInfo !== null ? LastCommitInfo.fromPartial(object.lastCommitInfo) : undefined;
    message.byzantineValidators = object.byzantineValidators?.map(e => Evidence.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: RequestBeginBlockProtoMsg): RequestBeginBlock {
    return RequestBeginBlock.decode(message.value);
  },
  toProto(message: RequestBeginBlock): Uint8Array {
    return RequestBeginBlock.encode(message).finish();
  },
  toProtoMsg(message: RequestBeginBlock): RequestBeginBlockProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestBeginBlock",
      value: RequestBeginBlock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestBeginBlock.typeUrl, RequestBeginBlock);
function createBaseRequestCheckTx(): RequestCheckTx {
  return {
    tx: new Uint8Array(),
    type: 0
  };
}
export const RequestCheckTx = {
  typeUrl: "/tendermint.abci.RequestCheckTx",
  is(o: any): o is RequestCheckTx {
    return o && (o.$typeUrl === RequestCheckTx.typeUrl || (o.tx instanceof Uint8Array || typeof o.tx === "string") && isSet(o.type));
  },
  isSDK(o: any): o is RequestCheckTxSDKType {
    return o && (o.$typeUrl === RequestCheckTx.typeUrl || (o.tx instanceof Uint8Array || typeof o.tx === "string") && isSet(o.type));
  },
  encode(message: RequestCheckTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestCheckTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        case 2:
          message.type = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestCheckTx>): RequestCheckTx {
    const message = createBaseRequestCheckTx();
    message.tx = object.tx ?? new Uint8Array();
    message.type = object.type ?? 0;
    return message;
  },
  fromProtoMsg(message: RequestCheckTxProtoMsg): RequestCheckTx {
    return RequestCheckTx.decode(message.value);
  },
  toProto(message: RequestCheckTx): Uint8Array {
    return RequestCheckTx.encode(message).finish();
  },
  toProtoMsg(message: RequestCheckTx): RequestCheckTxProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestCheckTx",
      value: RequestCheckTx.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestCheckTx.typeUrl, RequestCheckTx);
function createBaseRequestDeliverTx(): RequestDeliverTx {
  return {
    tx: new Uint8Array()
  };
}
export const RequestDeliverTx = {
  typeUrl: "/tendermint.abci.RequestDeliverTx",
  is(o: any): o is RequestDeliverTx {
    return o && (o.$typeUrl === RequestDeliverTx.typeUrl || o.tx instanceof Uint8Array || typeof o.tx === "string");
  },
  isSDK(o: any): o is RequestDeliverTxSDKType {
    return o && (o.$typeUrl === RequestDeliverTx.typeUrl || o.tx instanceof Uint8Array || typeof o.tx === "string");
  },
  encode(message: RequestDeliverTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestDeliverTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestDeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestDeliverTx>): RequestDeliverTx {
    const message = createBaseRequestDeliverTx();
    message.tx = object.tx ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: RequestDeliverTxProtoMsg): RequestDeliverTx {
    return RequestDeliverTx.decode(message.value);
  },
  toProto(message: RequestDeliverTx): Uint8Array {
    return RequestDeliverTx.encode(message).finish();
  },
  toProtoMsg(message: RequestDeliverTx): RequestDeliverTxProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestDeliverTx",
      value: RequestDeliverTx.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestDeliverTx.typeUrl, RequestDeliverTx);
function createBaseRequestEndBlock(): RequestEndBlock {
  return {
    height: BigInt(0)
  };
}
export const RequestEndBlock = {
  typeUrl: "/tendermint.abci.RequestEndBlock",
  is(o: any): o is RequestEndBlock {
    return o && (o.$typeUrl === RequestEndBlock.typeUrl || typeof o.height === "bigint");
  },
  isSDK(o: any): o is RequestEndBlockSDKType {
    return o && (o.$typeUrl === RequestEndBlock.typeUrl || typeof o.height === "bigint");
  },
  encode(message: RequestEndBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestEndBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEndBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestEndBlock>): RequestEndBlock {
    const message = createBaseRequestEndBlock();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: RequestEndBlockProtoMsg): RequestEndBlock {
    return RequestEndBlock.decode(message.value);
  },
  toProto(message: RequestEndBlock): Uint8Array {
    return RequestEndBlock.encode(message).finish();
  },
  toProtoMsg(message: RequestEndBlock): RequestEndBlockProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestEndBlock",
      value: RequestEndBlock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestEndBlock.typeUrl, RequestEndBlock);
function createBaseRequestCommit(): RequestCommit {
  return {};
}
export const RequestCommit = {
  typeUrl: "/tendermint.abci.RequestCommit",
  is(o: any): o is RequestCommit {
    return o && o.$typeUrl === RequestCommit.typeUrl;
  },
  isSDK(o: any): o is RequestCommitSDKType {
    return o && o.$typeUrl === RequestCommit.typeUrl;
  },
  encode(_: RequestCommit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestCommit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCommit();
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
  fromPartial(_: Partial<RequestCommit>): RequestCommit {
    const message = createBaseRequestCommit();
    return message;
  },
  fromProtoMsg(message: RequestCommitProtoMsg): RequestCommit {
    return RequestCommit.decode(message.value);
  },
  toProto(message: RequestCommit): Uint8Array {
    return RequestCommit.encode(message).finish();
  },
  toProtoMsg(message: RequestCommit): RequestCommitProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestCommit",
      value: RequestCommit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestCommit.typeUrl, RequestCommit);
function createBaseRequestListSnapshots(): RequestListSnapshots {
  return {};
}
export const RequestListSnapshots = {
  typeUrl: "/tendermint.abci.RequestListSnapshots",
  is(o: any): o is RequestListSnapshots {
    return o && o.$typeUrl === RequestListSnapshots.typeUrl;
  },
  isSDK(o: any): o is RequestListSnapshotsSDKType {
    return o && o.$typeUrl === RequestListSnapshots.typeUrl;
  },
  encode(_: RequestListSnapshots, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestListSnapshots {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestListSnapshots();
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
  fromPartial(_: Partial<RequestListSnapshots>): RequestListSnapshots {
    const message = createBaseRequestListSnapshots();
    return message;
  },
  fromProtoMsg(message: RequestListSnapshotsProtoMsg): RequestListSnapshots {
    return RequestListSnapshots.decode(message.value);
  },
  toProto(message: RequestListSnapshots): Uint8Array {
    return RequestListSnapshots.encode(message).finish();
  },
  toProtoMsg(message: RequestListSnapshots): RequestListSnapshotsProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestListSnapshots",
      value: RequestListSnapshots.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestListSnapshots.typeUrl, RequestListSnapshots);
function createBaseRequestOfferSnapshot(): RequestOfferSnapshot {
  return {
    snapshot: undefined,
    appHash: new Uint8Array()
  };
}
export const RequestOfferSnapshot = {
  typeUrl: "/tendermint.abci.RequestOfferSnapshot",
  is(o: any): o is RequestOfferSnapshot {
    return o && (o.$typeUrl === RequestOfferSnapshot.typeUrl || o.appHash instanceof Uint8Array || typeof o.appHash === "string");
  },
  isSDK(o: any): o is RequestOfferSnapshotSDKType {
    return o && (o.$typeUrl === RequestOfferSnapshot.typeUrl || o.app_hash instanceof Uint8Array || typeof o.app_hash === "string");
  },
  encode(message: RequestOfferSnapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(18).bytes(message.appHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestOfferSnapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshot = Snapshot.decode(reader, reader.uint32());
          break;
        case 2:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestOfferSnapshot>): RequestOfferSnapshot {
    const message = createBaseRequestOfferSnapshot();
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : undefined;
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: RequestOfferSnapshotProtoMsg): RequestOfferSnapshot {
    return RequestOfferSnapshot.decode(message.value);
  },
  toProto(message: RequestOfferSnapshot): Uint8Array {
    return RequestOfferSnapshot.encode(message).finish();
  },
  toProtoMsg(message: RequestOfferSnapshot): RequestOfferSnapshotProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestOfferSnapshot",
      value: RequestOfferSnapshot.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestOfferSnapshot.typeUrl, RequestOfferSnapshot);
function createBaseRequestLoadSnapshotChunk(): RequestLoadSnapshotChunk {
  return {
    height: BigInt(0),
    format: 0,
    chunk: 0
  };
}
export const RequestLoadSnapshotChunk = {
  typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
  is(o: any): o is RequestLoadSnapshotChunk {
    return o && (o.$typeUrl === RequestLoadSnapshotChunk.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunk === "number");
  },
  isSDK(o: any): o is RequestLoadSnapshotChunkSDKType {
    return o && (o.$typeUrl === RequestLoadSnapshotChunk.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunk === "number");
  },
  encode(message: RequestLoadSnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunk !== 0) {
      writer.uint32(24).uint32(message.chunk);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestLoadSnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunk = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk {
    const message = createBaseRequestLoadSnapshotChunk();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.format = object.format ?? 0;
    message.chunk = object.chunk ?? 0;
    return message;
  },
  fromProtoMsg(message: RequestLoadSnapshotChunkProtoMsg): RequestLoadSnapshotChunk {
    return RequestLoadSnapshotChunk.decode(message.value);
  },
  toProto(message: RequestLoadSnapshotChunk): Uint8Array {
    return RequestLoadSnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
      value: RequestLoadSnapshotChunk.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestLoadSnapshotChunk.typeUrl, RequestLoadSnapshotChunk);
function createBaseRequestApplySnapshotChunk(): RequestApplySnapshotChunk {
  return {
    index: 0,
    chunk: new Uint8Array(),
    sender: ""
  };
}
export const RequestApplySnapshotChunk = {
  typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
  is(o: any): o is RequestApplySnapshotChunk {
    return o && (o.$typeUrl === RequestApplySnapshotChunk.typeUrl || typeof o.index === "number" && (o.chunk instanceof Uint8Array || typeof o.chunk === "string") && typeof o.sender === "string");
  },
  isSDK(o: any): o is RequestApplySnapshotChunkSDKType {
    return o && (o.$typeUrl === RequestApplySnapshotChunk.typeUrl || typeof o.index === "number" && (o.chunk instanceof Uint8Array || typeof o.chunk === "string") && typeof o.sender === "string");
  },
  encode(message: RequestApplySnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(18).bytes(message.chunk);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestApplySnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.chunk = reader.bytes();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk {
    const message = createBaseRequestApplySnapshotChunk();
    message.index = object.index ?? 0;
    message.chunk = object.chunk ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
  fromProtoMsg(message: RequestApplySnapshotChunkProtoMsg): RequestApplySnapshotChunk {
    return RequestApplySnapshotChunk.decode(message.value);
  },
  toProto(message: RequestApplySnapshotChunk): Uint8Array {
    return RequestApplySnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
      value: RequestApplySnapshotChunk.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestApplySnapshotChunk.typeUrl, RequestApplySnapshotChunk);
function createBaseResponse(): Response {
  return {
    exception: undefined,
    echo: undefined,
    flush: undefined,
    info: undefined,
    setOption: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined
  };
}
export const Response = {
  typeUrl: "/tendermint.abci.Response",
  is(o: any): o is Response {
    return o && o.$typeUrl === Response.typeUrl;
  },
  isSDK(o: any): o is ResponseSDKType {
    return o && o.$typeUrl === Response.typeUrl;
  },
  encode(message: Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exception !== undefined) {
      ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
    }
    if (message.echo !== undefined) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    if (message.setOption !== undefined) {
      ResponseSetOption.encode(message.setOption, writer.uint32(42).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
    }
    if (message.query !== undefined) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      ResponseBeginBlock.encode(message.beginBlock, writer.uint32(66).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.deliverTx !== undefined) {
      ResponseDeliverTx.encode(message.deliverTx, writer.uint32(82).fork()).ldelim();
    }
    if (message.endBlock !== undefined) {
      ResponseEndBlock.encode(message.endBlock, writer.uint32(90).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exception = ResponseException.decode(reader, reader.uint32());
          break;
        case 2:
          message.echo = ResponseEcho.decode(reader, reader.uint32());
          break;
        case 3:
          message.flush = ResponseFlush.decode(reader, reader.uint32());
          break;
        case 4:
          message.info = ResponseInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.setOption = ResponseSetOption.decode(reader, reader.uint32());
          break;
        case 6:
          message.initChain = ResponseInitChain.decode(reader, reader.uint32());
          break;
        case 7:
          message.query = ResponseQuery.decode(reader, reader.uint32());
          break;
        case 8:
          message.beginBlock = ResponseBeginBlock.decode(reader, reader.uint32());
          break;
        case 9:
          message.checkTx = ResponseCheckTx.decode(reader, reader.uint32());
          break;
        case 10:
          message.deliverTx = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        case 11:
          message.endBlock = ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 12:
          message.commit = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 13:
          message.listSnapshots = ResponseListSnapshots.decode(reader, reader.uint32());
          break;
        case 14:
          message.offerSnapshot = ResponseOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 15:
          message.loadSnapshotChunk = ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 16:
          message.applySnapshotChunk = ResponseApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Response>): Response {
    const message = createBaseResponse();
    message.exception = object.exception !== undefined && object.exception !== null ? ResponseException.fromPartial(object.exception) : undefined;
    message.echo = object.echo !== undefined && object.echo !== null ? ResponseEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? ResponseFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? ResponseInfo.fromPartial(object.info) : undefined;
    message.setOption = object.setOption !== undefined && object.setOption !== null ? ResponseSetOption.fromPartial(object.setOption) : undefined;
    message.initChain = object.initChain !== undefined && object.initChain !== null ? ResponseInitChain.fromPartial(object.initChain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? ResponseQuery.fromPartial(object.query) : undefined;
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? ResponseBeginBlock.fromPartial(object.beginBlock) : undefined;
    message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? ResponseCheckTx.fromPartial(object.checkTx) : undefined;
    message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? ResponseDeliverTx.fromPartial(object.deliverTx) : undefined;
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? ResponseEndBlock.fromPartial(object.endBlock) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? ResponseCommit.fromPartial(object.commit) : undefined;
    message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? ResponseListSnapshots.fromPartial(object.listSnapshots) : undefined;
    message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? ResponseOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
    message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
    return message;
  },
  fromProtoMsg(message: ResponseProtoMsg): Response {
    return Response.decode(message.value);
  },
  toProto(message: Response): Uint8Array {
    return Response.encode(message).finish();
  },
  toProtoMsg(message: Response): ResponseProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Response",
      value: Response.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Response.typeUrl, Response);
function createBaseResponseException(): ResponseException {
  return {
    error: ""
  };
}
export const ResponseException = {
  typeUrl: "/tendermint.abci.ResponseException",
  is(o: any): o is ResponseException {
    return o && (o.$typeUrl === ResponseException.typeUrl || typeof o.error === "string");
  },
  isSDK(o: any): o is ResponseExceptionSDKType {
    return o && (o.$typeUrl === ResponseException.typeUrl || typeof o.error === "string");
  },
  encode(message: ResponseException, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseException {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseException();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseException>): ResponseException {
    const message = createBaseResponseException();
    message.error = object.error ?? "";
    return message;
  },
  fromProtoMsg(message: ResponseExceptionProtoMsg): ResponseException {
    return ResponseException.decode(message.value);
  },
  toProto(message: ResponseException): Uint8Array {
    return ResponseException.encode(message).finish();
  },
  toProtoMsg(message: ResponseException): ResponseExceptionProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseException",
      value: ResponseException.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseException.typeUrl, ResponseException);
function createBaseResponseEcho(): ResponseEcho {
  return {
    message: ""
  };
}
export const ResponseEcho = {
  typeUrl: "/tendermint.abci.ResponseEcho",
  is(o: any): o is ResponseEcho {
    return o && (o.$typeUrl === ResponseEcho.typeUrl || typeof o.message === "string");
  },
  isSDK(o: any): o is ResponseEchoSDKType {
    return o && (o.$typeUrl === ResponseEcho.typeUrl || typeof o.message === "string");
  },
  encode(message: ResponseEcho, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseEcho {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseEcho>): ResponseEcho {
    const message = createBaseResponseEcho();
    message.message = object.message ?? "";
    return message;
  },
  fromProtoMsg(message: ResponseEchoProtoMsg): ResponseEcho {
    return ResponseEcho.decode(message.value);
  },
  toProto(message: ResponseEcho): Uint8Array {
    return ResponseEcho.encode(message).finish();
  },
  toProtoMsg(message: ResponseEcho): ResponseEchoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseEcho",
      value: ResponseEcho.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseEcho.typeUrl, ResponseEcho);
function createBaseResponseFlush(): ResponseFlush {
  return {};
}
export const ResponseFlush = {
  typeUrl: "/tendermint.abci.ResponseFlush",
  is(o: any): o is ResponseFlush {
    return o && o.$typeUrl === ResponseFlush.typeUrl;
  },
  isSDK(o: any): o is ResponseFlushSDKType {
    return o && o.$typeUrl === ResponseFlush.typeUrl;
  },
  encode(_: ResponseFlush, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseFlush {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseFlush();
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
  fromPartial(_: Partial<ResponseFlush>): ResponseFlush {
    const message = createBaseResponseFlush();
    return message;
  },
  fromProtoMsg(message: ResponseFlushProtoMsg): ResponseFlush {
    return ResponseFlush.decode(message.value);
  },
  toProto(message: ResponseFlush): Uint8Array {
    return ResponseFlush.encode(message).finish();
  },
  toProtoMsg(message: ResponseFlush): ResponseFlushProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseFlush",
      value: ResponseFlush.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseFlush.typeUrl, ResponseFlush);
function createBaseResponseInfo(): ResponseInfo {
  return {
    data: "",
    version: "",
    appVersion: BigInt(0),
    lastBlockHeight: BigInt(0),
    lastBlockAppHash: new Uint8Array()
  };
}
export const ResponseInfo = {
  typeUrl: "/tendermint.abci.ResponseInfo",
  is(o: any): o is ResponseInfo {
    return o && (o.$typeUrl === ResponseInfo.typeUrl || typeof o.data === "string" && typeof o.version === "string" && typeof o.appVersion === "bigint" && typeof o.lastBlockHeight === "bigint" && (o.lastBlockAppHash instanceof Uint8Array || typeof o.lastBlockAppHash === "string"));
  },
  isSDK(o: any): o is ResponseInfoSDKType {
    return o && (o.$typeUrl === ResponseInfo.typeUrl || typeof o.data === "string" && typeof o.version === "string" && typeof o.app_version === "bigint" && typeof o.last_block_height === "bigint" && (o.last_block_app_hash instanceof Uint8Array || typeof o.last_block_app_hash === "string"));
  },
  encode(message: ResponseInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.appVersion !== BigInt(0)) {
      writer.uint32(24).uint64(message.appVersion);
    }
    if (message.lastBlockHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.lastBlockHeight);
    }
    if (message.lastBlockAppHash.length !== 0) {
      writer.uint32(42).bytes(message.lastBlockAppHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.appVersion = reader.uint64();
          break;
        case 4:
          message.lastBlockHeight = reader.int64();
          break;
        case 5:
          message.lastBlockAppHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseInfo>): ResponseInfo {
    const message = createBaseResponseInfo();
    message.data = object.data ?? "";
    message.version = object.version ?? "";
    message.appVersion = object.appVersion !== undefined && object.appVersion !== null ? BigInt(object.appVersion.toString()) : BigInt(0);
    message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? BigInt(object.lastBlockHeight.toString()) : BigInt(0);
    message.lastBlockAppHash = object.lastBlockAppHash ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: ResponseInfoProtoMsg): ResponseInfo {
    return ResponseInfo.decode(message.value);
  },
  toProto(message: ResponseInfo): Uint8Array {
    return ResponseInfo.encode(message).finish();
  },
  toProtoMsg(message: ResponseInfo): ResponseInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseInfo",
      value: ResponseInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseInfo.typeUrl, ResponseInfo);
function createBaseResponseSetOption(): ResponseSetOption {
  return {
    code: 0,
    log: "",
    info: ""
  };
}
export const ResponseSetOption = {
  typeUrl: "/tendermint.abci.ResponseSetOption",
  is(o: any): o is ResponseSetOption {
    return o && (o.$typeUrl === ResponseSetOption.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string");
  },
  isSDK(o: any): o is ResponseSetOptionSDKType {
    return o && (o.$typeUrl === ResponseSetOption.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string");
  },
  encode(message: ResponseSetOption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseSetOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseSetOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseSetOption>): ResponseSetOption {
    const message = createBaseResponseSetOption();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    return message;
  },
  fromProtoMsg(message: ResponseSetOptionProtoMsg): ResponseSetOption {
    return ResponseSetOption.decode(message.value);
  },
  toProto(message: ResponseSetOption): Uint8Array {
    return ResponseSetOption.encode(message).finish();
  },
  toProtoMsg(message: ResponseSetOption): ResponseSetOptionProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseSetOption",
      value: ResponseSetOption.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseSetOption.typeUrl, ResponseSetOption);
function createBaseResponseInitChain(): ResponseInitChain {
  return {
    consensusParams: undefined,
    validators: [],
    appHash: new Uint8Array()
  };
}
export const ResponseInitChain = {
  typeUrl: "/tendermint.abci.ResponseInitChain",
  is(o: any): o is ResponseInitChain {
    return o && (o.$typeUrl === ResponseInitChain.typeUrl || Array.isArray(o.validators) && (!o.validators.length || ValidatorUpdate.is(o.validators[0])) && (o.appHash instanceof Uint8Array || typeof o.appHash === "string"));
  },
  isSDK(o: any): o is ResponseInitChainSDKType {
    return o && (o.$typeUrl === ResponseInitChain.typeUrl || Array.isArray(o.validators) && (!o.validators.length || ValidatorUpdate.isSDK(o.validators[0])) && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string"));
  },
  encode(message: ResponseInitChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(26).bytes(message.appHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseInitChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 3:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseInitChain>): ResponseInitChain {
    const message = createBaseResponseInitChain();
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: ResponseInitChainProtoMsg): ResponseInitChain {
    return ResponseInitChain.decode(message.value);
  },
  toProto(message: ResponseInitChain): Uint8Array {
    return ResponseInitChain.encode(message).finish();
  },
  toProtoMsg(message: ResponseInitChain): ResponseInitChainProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseInitChain",
      value: ResponseInitChain.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseInitChain.typeUrl, ResponseInitChain);
function createBaseResponseQuery(): ResponseQuery {
  return {
    code: 0,
    log: "",
    info: "",
    index: BigInt(0),
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: undefined,
    height: BigInt(0),
    codespace: ""
  };
}
export const ResponseQuery = {
  typeUrl: "/tendermint.abci.ResponseQuery",
  is(o: any): o is ResponseQuery {
    return o && (o.$typeUrl === ResponseQuery.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string" && typeof o.index === "bigint" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.height === "bigint" && typeof o.codespace === "string");
  },
  isSDK(o: any): o is ResponseQuerySDKType {
    return o && (o.$typeUrl === ResponseQuery.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string" && typeof o.index === "bigint" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.height === "bigint" && typeof o.codespace === "string");
  },
  encode(message: ResponseQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64();
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64();
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseQuery>): ResponseQuery {
    const message = createBaseResponseQuery();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? ProofOps.fromPartial(object.proofOps) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromProtoMsg(message: ResponseQueryProtoMsg): ResponseQuery {
    return ResponseQuery.decode(message.value);
  },
  toProto(message: ResponseQuery): Uint8Array {
    return ResponseQuery.encode(message).finish();
  },
  toProtoMsg(message: ResponseQuery): ResponseQueryProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseQuery",
      value: ResponseQuery.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseQuery.typeUrl, ResponseQuery);
function createBaseResponseBeginBlock(): ResponseBeginBlock {
  return {
    events: []
  };
}
export const ResponseBeginBlock = {
  typeUrl: "/tendermint.abci.ResponseBeginBlock",
  is(o: any): o is ResponseBeginBlock {
    return o && (o.$typeUrl === ResponseBeginBlock.typeUrl || Array.isArray(o.events) && (!o.events.length || Event.is(o.events[0])));
  },
  isSDK(o: any): o is ResponseBeginBlockSDKType {
    return o && (o.$typeUrl === ResponseBeginBlock.typeUrl || Array.isArray(o.events) && (!o.events.length || Event.isSDK(o.events[0])));
  },
  encode(message: ResponseBeginBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseBeginBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseBeginBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseBeginBlock>): ResponseBeginBlock {
    const message = createBaseResponseBeginBlock();
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: ResponseBeginBlockProtoMsg): ResponseBeginBlock {
    return ResponseBeginBlock.decode(message.value);
  },
  toProto(message: ResponseBeginBlock): Uint8Array {
    return ResponseBeginBlock.encode(message).finish();
  },
  toProtoMsg(message: ResponseBeginBlock): ResponseBeginBlockProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseBeginBlock",
      value: ResponseBeginBlock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseBeginBlock.typeUrl, ResponseBeginBlock);
function createBaseResponseCheckTx(): ResponseCheckTx {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    events: [],
    codespace: ""
  };
}
export const ResponseCheckTx = {
  typeUrl: "/tendermint.abci.ResponseCheckTx",
  is(o: any): o is ResponseCheckTx {
    return o && (o.$typeUrl === ResponseCheckTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gasWanted === "bigint" && typeof o.gasUsed === "bigint" && Array.isArray(o.events) && (!o.events.length || Event.is(o.events[0])) && typeof o.codespace === "string");
  },
  isSDK(o: any): o is ResponseCheckTxSDKType {
    return o && (o.$typeUrl === ResponseCheckTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && Array.isArray(o.events) && (!o.events.length || Event.isSDK(o.events[0])) && typeof o.codespace === "string");
  },
  encode(message: ResponseCheckTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseCheckTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64();
          break;
        case 6:
          message.gasUsed = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseCheckTx>): ResponseCheckTx {
    const message = createBaseResponseCheckTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromProtoMsg(message: ResponseCheckTxProtoMsg): ResponseCheckTx {
    return ResponseCheckTx.decode(message.value);
  },
  toProto(message: ResponseCheckTx): Uint8Array {
    return ResponseCheckTx.encode(message).finish();
  },
  toProtoMsg(message: ResponseCheckTx): ResponseCheckTxProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseCheckTx",
      value: ResponseCheckTx.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseCheckTx.typeUrl, ResponseCheckTx);
function createBaseResponseDeliverTx(): ResponseDeliverTx {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    events: [],
    codespace: ""
  };
}
export const ResponseDeliverTx = {
  typeUrl: "/tendermint.abci.ResponseDeliverTx",
  is(o: any): o is ResponseDeliverTx {
    return o && (o.$typeUrl === ResponseDeliverTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gasWanted === "bigint" && typeof o.gasUsed === "bigint" && Array.isArray(o.events) && (!o.events.length || Event.is(o.events[0])) && typeof o.codespace === "string");
  },
  isSDK(o: any): o is ResponseDeliverTxSDKType {
    return o && (o.$typeUrl === ResponseDeliverTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && Array.isArray(o.events) && (!o.events.length || Event.isSDK(o.events[0])) && typeof o.codespace === "string");
  },
  encode(message: ResponseDeliverTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseDeliverTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseDeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64();
          break;
        case 6:
          message.gasUsed = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseDeliverTx>): ResponseDeliverTx {
    const message = createBaseResponseDeliverTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromProtoMsg(message: ResponseDeliverTxProtoMsg): ResponseDeliverTx {
    return ResponseDeliverTx.decode(message.value);
  },
  toProto(message: ResponseDeliverTx): Uint8Array {
    return ResponseDeliverTx.encode(message).finish();
  },
  toProtoMsg(message: ResponseDeliverTx): ResponseDeliverTxProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseDeliverTx",
      value: ResponseDeliverTx.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseDeliverTx.typeUrl, ResponseDeliverTx);
function createBaseResponseEndBlock(): ResponseEndBlock {
  return {
    validatorUpdates: [],
    consensusParamUpdates: undefined,
    events: []
  };
}
export const ResponseEndBlock = {
  typeUrl: "/tendermint.abci.ResponseEndBlock",
  is(o: any): o is ResponseEndBlock {
    return o && (o.$typeUrl === ResponseEndBlock.typeUrl || Array.isArray(o.validatorUpdates) && (!o.validatorUpdates.length || ValidatorUpdate.is(o.validatorUpdates[0])) && Array.isArray(o.events) && (!o.events.length || Event.is(o.events[0])));
  },
  isSDK(o: any): o is ResponseEndBlockSDKType {
    return o && (o.$typeUrl === ResponseEndBlock.typeUrl || Array.isArray(o.validator_updates) && (!o.validator_updates.length || ValidatorUpdate.isSDK(o.validator_updates[0])) && Array.isArray(o.events) && (!o.events.length || Event.isSDK(o.events[0])));
  },
  encode(message: ResponseEndBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validatorUpdates) {
      ValidatorUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusParamUpdates !== undefined) {
      ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseEndBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEndBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorUpdates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.consensusParamUpdates = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseEndBlock>): ResponseEndBlock {
    const message = createBaseResponseEndBlock();
    message.validatorUpdates = object.validatorUpdates?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.consensusParamUpdates = object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null ? ConsensusParams.fromPartial(object.consensusParamUpdates) : undefined;
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: ResponseEndBlockProtoMsg): ResponseEndBlock {
    return ResponseEndBlock.decode(message.value);
  },
  toProto(message: ResponseEndBlock): Uint8Array {
    return ResponseEndBlock.encode(message).finish();
  },
  toProtoMsg(message: ResponseEndBlock): ResponseEndBlockProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseEndBlock",
      value: ResponseEndBlock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseEndBlock.typeUrl, ResponseEndBlock);
function createBaseResponseCommit(): ResponseCommit {
  return {
    data: new Uint8Array(),
    retainHeight: BigInt(0)
  };
}
export const ResponseCommit = {
  typeUrl: "/tendermint.abci.ResponseCommit",
  is(o: any): o is ResponseCommit {
    return o && (o.$typeUrl === ResponseCommit.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.retainHeight === "bigint");
  },
  isSDK(o: any): o is ResponseCommitSDKType {
    return o && (o.$typeUrl === ResponseCommit.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.retain_height === "bigint");
  },
  encode(message: ResponseCommit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.retainHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.retainHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseCommit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.retainHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseCommit>): ResponseCommit {
    const message = createBaseResponseCommit();
    message.data = object.data ?? new Uint8Array();
    message.retainHeight = object.retainHeight !== undefined && object.retainHeight !== null ? BigInt(object.retainHeight.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: ResponseCommitProtoMsg): ResponseCommit {
    return ResponseCommit.decode(message.value);
  },
  toProto(message: ResponseCommit): Uint8Array {
    return ResponseCommit.encode(message).finish();
  },
  toProtoMsg(message: ResponseCommit): ResponseCommitProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseCommit",
      value: ResponseCommit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseCommit.typeUrl, ResponseCommit);
function createBaseResponseListSnapshots(): ResponseListSnapshots {
  return {
    snapshots: []
  };
}
export const ResponseListSnapshots = {
  typeUrl: "/tendermint.abci.ResponseListSnapshots",
  is(o: any): o is ResponseListSnapshots {
    return o && (o.$typeUrl === ResponseListSnapshots.typeUrl || Array.isArray(o.snapshots) && (!o.snapshots.length || Snapshot.is(o.snapshots[0])));
  },
  isSDK(o: any): o is ResponseListSnapshotsSDKType {
    return o && (o.$typeUrl === ResponseListSnapshots.typeUrl || Array.isArray(o.snapshots) && (!o.snapshots.length || Snapshot.isSDK(o.snapshots[0])));
  },
  encode(message: ResponseListSnapshots, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.snapshots) {
      Snapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseListSnapshots {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseListSnapshots>): ResponseListSnapshots {
    const message = createBaseResponseListSnapshots();
    message.snapshots = object.snapshots?.map(e => Snapshot.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: ResponseListSnapshotsProtoMsg): ResponseListSnapshots {
    return ResponseListSnapshots.decode(message.value);
  },
  toProto(message: ResponseListSnapshots): Uint8Array {
    return ResponseListSnapshots.encode(message).finish();
  },
  toProtoMsg(message: ResponseListSnapshots): ResponseListSnapshotsProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseListSnapshots",
      value: ResponseListSnapshots.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseListSnapshots.typeUrl, ResponseListSnapshots);
function createBaseResponseOfferSnapshot(): ResponseOfferSnapshot {
  return {
    result: 0
  };
}
export const ResponseOfferSnapshot = {
  typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
  is(o: any): o is ResponseOfferSnapshot {
    return o && (o.$typeUrl === ResponseOfferSnapshot.typeUrl || isSet(o.result));
  },
  isSDK(o: any): o is ResponseOfferSnapshotSDKType {
    return o && (o.$typeUrl === ResponseOfferSnapshot.typeUrl || isSet(o.result));
  },
  encode(message: ResponseOfferSnapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseOfferSnapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseOfferSnapshot>): ResponseOfferSnapshot {
    const message = createBaseResponseOfferSnapshot();
    message.result = object.result ?? 0;
    return message;
  },
  fromProtoMsg(message: ResponseOfferSnapshotProtoMsg): ResponseOfferSnapshot {
    return ResponseOfferSnapshot.decode(message.value);
  },
  toProto(message: ResponseOfferSnapshot): Uint8Array {
    return ResponseOfferSnapshot.encode(message).finish();
  },
  toProtoMsg(message: ResponseOfferSnapshot): ResponseOfferSnapshotProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
      value: ResponseOfferSnapshot.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseOfferSnapshot.typeUrl, ResponseOfferSnapshot);
function createBaseResponseLoadSnapshotChunk(): ResponseLoadSnapshotChunk {
  return {
    chunk: new Uint8Array()
  };
}
export const ResponseLoadSnapshotChunk = {
  typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
  is(o: any): o is ResponseLoadSnapshotChunk {
    return o && (o.$typeUrl === ResponseLoadSnapshotChunk.typeUrl || o.chunk instanceof Uint8Array || typeof o.chunk === "string");
  },
  isSDK(o: any): o is ResponseLoadSnapshotChunkSDKType {
    return o && (o.$typeUrl === ResponseLoadSnapshotChunk.typeUrl || o.chunk instanceof Uint8Array || typeof o.chunk === "string");
  },
  encode(message: ResponseLoadSnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseLoadSnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunk = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk {
    const message = createBaseResponseLoadSnapshotChunk();
    message.chunk = object.chunk ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: ResponseLoadSnapshotChunkProtoMsg): ResponseLoadSnapshotChunk {
    return ResponseLoadSnapshotChunk.decode(message.value);
  },
  toProto(message: ResponseLoadSnapshotChunk): Uint8Array {
    return ResponseLoadSnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
      value: ResponseLoadSnapshotChunk.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseLoadSnapshotChunk.typeUrl, ResponseLoadSnapshotChunk);
function createBaseResponseApplySnapshotChunk(): ResponseApplySnapshotChunk {
  return {
    result: 0,
    refetchChunks: [],
    rejectSenders: []
  };
}
export const ResponseApplySnapshotChunk = {
  typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
  is(o: any): o is ResponseApplySnapshotChunk {
    return o && (o.$typeUrl === ResponseApplySnapshotChunk.typeUrl || isSet(o.result) && Array.isArray(o.refetchChunks) && (!o.refetchChunks.length || typeof o.refetchChunks[0] === "number") && Array.isArray(o.rejectSenders) && (!o.rejectSenders.length || typeof o.rejectSenders[0] === "string"));
  },
  isSDK(o: any): o is ResponseApplySnapshotChunkSDKType {
    return o && (o.$typeUrl === ResponseApplySnapshotChunk.typeUrl || isSet(o.result) && Array.isArray(o.refetch_chunks) && (!o.refetch_chunks.length || typeof o.refetch_chunks[0] === "number") && Array.isArray(o.reject_senders) && (!o.reject_senders.length || typeof o.reject_senders[0] === "string"));
  },
  encode(message: ResponseApplySnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.refetchChunks) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.rejectSenders) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseApplySnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = (reader.int32() as any);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.refetchChunks.push(reader.uint32());
            }
          } else {
            message.refetchChunks.push(reader.uint32());
          }
          break;
        case 3:
          message.rejectSenders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk {
    const message = createBaseResponseApplySnapshotChunk();
    message.result = object.result ?? 0;
    message.refetchChunks = object.refetchChunks?.map(e => e) || [];
    message.rejectSenders = object.rejectSenders?.map(e => e) || [];
    return message;
  },
  fromProtoMsg(message: ResponseApplySnapshotChunkProtoMsg): ResponseApplySnapshotChunk {
    return ResponseApplySnapshotChunk.decode(message.value);
  },
  toProto(message: ResponseApplySnapshotChunk): Uint8Array {
    return ResponseApplySnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
      value: ResponseApplySnapshotChunk.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseApplySnapshotChunk.typeUrl, ResponseApplySnapshotChunk);
function createBaseConsensusParams(): ConsensusParams {
  return {
    block: undefined,
    evidence: undefined,
    validator: undefined,
    version: undefined
  };
}
export const ConsensusParams = {
  typeUrl: "/tendermint.abci.ConsensusParams",
  is(o: any): o is ConsensusParams {
    return o && o.$typeUrl === ConsensusParams.typeUrl;
  },
  isSDK(o: any): o is ConsensusParamsSDKType {
    return o && o.$typeUrl === ConsensusParams.typeUrl;
  },
  encode(message: ConsensusParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== undefined) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ConsensusParams>): ConsensusParams {
    const message = createBaseConsensusParams();
    message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
    message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
    message.version = object.version !== undefined && object.version !== null ? VersionParams.fromPartial(object.version) : undefined;
    return message;
  },
  fromProtoMsg(message: ConsensusParamsProtoMsg): ConsensusParams {
    return ConsensusParams.decode(message.value);
  },
  toProto(message: ConsensusParams): Uint8Array {
    return ConsensusParams.encode(message).finish();
  },
  toProtoMsg(message: ConsensusParams): ConsensusParamsProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ConsensusParams",
      value: ConsensusParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ConsensusParams.typeUrl, ConsensusParams);
function createBaseBlockParams(): BlockParams {
  return {
    maxBytes: BigInt(0),
    maxGas: BigInt(0)
  };
}
export const BlockParams = {
  typeUrl: "/tendermint.abci.BlockParams",
  is(o: any): o is BlockParams {
    return o && (o.$typeUrl === BlockParams.typeUrl || typeof o.maxBytes === "bigint" && typeof o.maxGas === "bigint");
  },
  isSDK(o: any): o is BlockParamsSDKType {
    return o && (o.$typeUrl === BlockParams.typeUrl || typeof o.max_bytes === "bigint" && typeof o.max_gas === "bigint");
  },
  encode(message: BlockParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxBytes !== BigInt(0)) {
      writer.uint32(8).int64(message.maxBytes);
    }
    if (message.maxGas !== BigInt(0)) {
      writer.uint32(16).int64(message.maxGas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBytes = reader.int64();
          break;
        case 2:
          message.maxGas = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BlockParams>): BlockParams {
    const message = createBaseBlockParams();
    message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
    message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? BigInt(object.maxGas.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: BlockParamsProtoMsg): BlockParams {
    return BlockParams.decode(message.value);
  },
  toProto(message: BlockParams): Uint8Array {
    return BlockParams.encode(message).finish();
  },
  toProtoMsg(message: BlockParams): BlockParamsProtoMsg {
    return {
      typeUrl: "/tendermint.abci.BlockParams",
      value: BlockParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BlockParams.typeUrl, BlockParams);
function createBaseLastCommitInfo(): LastCommitInfo {
  return {
    round: 0,
    votes: []
  };
}
export const LastCommitInfo = {
  typeUrl: "/tendermint.abci.LastCommitInfo",
  is(o: any): o is LastCommitInfo {
    return o && (o.$typeUrl === LastCommitInfo.typeUrl || typeof o.round === "number" && Array.isArray(o.votes) && (!o.votes.length || VoteInfo.is(o.votes[0])));
  },
  isSDK(o: any): o is LastCommitInfoSDKType {
    return o && (o.$typeUrl === LastCommitInfo.typeUrl || typeof o.round === "number" && Array.isArray(o.votes) && (!o.votes.length || VoteInfo.isSDK(o.votes[0])));
  },
  encode(message: LastCommitInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      VoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LastCommitInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(VoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LastCommitInfo>): LastCommitInfo {
    const message = createBaseLastCommitInfo();
    message.round = object.round ?? 0;
    message.votes = object.votes?.map(e => VoteInfo.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: LastCommitInfoProtoMsg): LastCommitInfo {
    return LastCommitInfo.decode(message.value);
  },
  toProto(message: LastCommitInfo): Uint8Array {
    return LastCommitInfo.encode(message).finish();
  },
  toProtoMsg(message: LastCommitInfo): LastCommitInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.LastCommitInfo",
      value: LastCommitInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LastCommitInfo.typeUrl, LastCommitInfo);
function createBaseEvent(): Event {
  return {
    type: "",
    attributes: []
  };
}
export const Event = {
  typeUrl: "/tendermint.abci.Event",
  is(o: any): o is Event {
    return o && (o.$typeUrl === Event.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || EventAttribute.is(o.attributes[0])));
  },
  isSDK(o: any): o is EventSDKType {
    return o && (o.$typeUrl === Event.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || EventAttribute.isSDK(o.attributes[0])));
  },
  encode(message: Event, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      EventAttribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Event {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Event>): Event {
    const message = createBaseEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map(e => EventAttribute.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: EventProtoMsg): Event {
    return Event.decode(message.value);
  },
  toProto(message: Event): Uint8Array {
    return Event.encode(message).finish();
  },
  toProtoMsg(message: Event): EventProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Event",
      value: Event.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Event.typeUrl, Event);
function createBaseEventAttribute(): EventAttribute {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    index: false
  };
}
export const EventAttribute = {
  typeUrl: "/tendermint.abci.EventAttribute",
  is(o: any): o is EventAttribute {
    return o && (o.$typeUrl === EventAttribute.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.index === "boolean");
  },
  isSDK(o: any): o is EventAttributeSDKType {
    return o && (o.$typeUrl === EventAttribute.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.index === "boolean");
  },
  encode(message: EventAttribute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.index === true) {
      writer.uint32(24).bool(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAttribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.index = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventAttribute>): EventAttribute {
    const message = createBaseEventAttribute();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.index = object.index ?? false;
    return message;
  },
  fromProtoMsg(message: EventAttributeProtoMsg): EventAttribute {
    return EventAttribute.decode(message.value);
  },
  toProto(message: EventAttribute): Uint8Array {
    return EventAttribute.encode(message).finish();
  },
  toProtoMsg(message: EventAttribute): EventAttributeProtoMsg {
    return {
      typeUrl: "/tendermint.abci.EventAttribute",
      value: EventAttribute.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventAttribute.typeUrl, EventAttribute);
function createBaseTxResult(): TxResult {
  return {
    height: BigInt(0),
    index: 0,
    tx: new Uint8Array(),
    result: ResponseDeliverTx.fromPartial({})
  };
}
export const TxResult = {
  typeUrl: "/tendermint.abci.TxResult",
  is(o: any): o is TxResult {
    return o && (o.$typeUrl === TxResult.typeUrl || typeof o.height === "bigint" && typeof o.index === "number" && (o.tx instanceof Uint8Array || typeof o.tx === "string") && ResponseDeliverTx.is(o.result));
  },
  isSDK(o: any): o is TxResultSDKType {
    return o && (o.$typeUrl === TxResult.typeUrl || typeof o.height === "bigint" && typeof o.index === "number" && (o.tx instanceof Uint8Array || typeof o.tx === "string") && ResponseDeliverTx.isSDK(o.result));
  },
  encode(message: TxResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.tx.length !== 0) {
      writer.uint32(26).bytes(message.tx);
    }
    if (message.result !== undefined) {
      ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.index = reader.uint32();
          break;
        case 3:
          message.tx = reader.bytes();
          break;
        case 4:
          message.result = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TxResult>): TxResult {
    const message = createBaseTxResult();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.index = object.index ?? 0;
    message.tx = object.tx ?? new Uint8Array();
    message.result = object.result !== undefined && object.result !== null ? ResponseDeliverTx.fromPartial(object.result) : undefined;
    return message;
  },
  fromProtoMsg(message: TxResultProtoMsg): TxResult {
    return TxResult.decode(message.value);
  },
  toProto(message: TxResult): Uint8Array {
    return TxResult.encode(message).finish();
  },
  toProtoMsg(message: TxResult): TxResultProtoMsg {
    return {
      typeUrl: "/tendermint.abci.TxResult",
      value: TxResult.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TxResult.typeUrl, TxResult);
function createBaseValidator(): Validator {
  return {
    address: new Uint8Array(),
    power: BigInt(0)
  };
}
export const Validator = {
  typeUrl: "/tendermint.abci.Validator",
  is(o: any): o is Validator {
    return o && (o.$typeUrl === Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && typeof o.power === "bigint");
  },
  isSDK(o: any): o is ValidatorSDKType {
    return o && (o.$typeUrl === Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && typeof o.power === "bigint");
  },
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 3:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Validator.typeUrl, Validator);
function createBaseValidatorUpdate(): ValidatorUpdate {
  return {
    pubKey: PublicKey.fromPartial({}),
    power: BigInt(0)
  };
}
export const ValidatorUpdate = {
  typeUrl: "/tendermint.abci.ValidatorUpdate",
  is(o: any): o is ValidatorUpdate {
    return o && (o.$typeUrl === ValidatorUpdate.typeUrl || PublicKey.is(o.pubKey) && typeof o.power === "bigint");
  },
  isSDK(o: any): o is ValidatorUpdateSDKType {
    return o && (o.$typeUrl === ValidatorUpdate.typeUrl || PublicKey.isSDK(o.pub_key) && typeof o.power === "bigint");
  },
  encode(message: ValidatorUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ValidatorUpdate>): ValidatorUpdate {
    const message = createBaseValidatorUpdate();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: ValidatorUpdateProtoMsg): ValidatorUpdate {
    return ValidatorUpdate.decode(message.value);
  },
  toProto(message: ValidatorUpdate): Uint8Array {
    return ValidatorUpdate.encode(message).finish();
  },
  toProtoMsg(message: ValidatorUpdate): ValidatorUpdateProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ValidatorUpdate",
      value: ValidatorUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorUpdate.typeUrl, ValidatorUpdate);
function createBaseVoteInfo(): VoteInfo {
  return {
    validator: Validator.fromPartial({}),
    signedLastBlock: false
  };
}
export const VoteInfo = {
  typeUrl: "/tendermint.abci.VoteInfo",
  is(o: any): o is VoteInfo {
    return o && (o.$typeUrl === VoteInfo.typeUrl || Validator.is(o.validator) && typeof o.signedLastBlock === "boolean");
  },
  isSDK(o: any): o is VoteInfoSDKType {
    return o && (o.$typeUrl === VoteInfo.typeUrl || Validator.isSDK(o.validator) && typeof o.signed_last_block === "boolean");
  },
  encode(message: VoteInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.signedLastBlock === true) {
      writer.uint32(16).bool(message.signedLastBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VoteInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 2:
          message.signedLastBlock = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VoteInfo>): VoteInfo {
    const message = createBaseVoteInfo();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.signedLastBlock = object.signedLastBlock ?? false;
    return message;
  },
  fromProtoMsg(message: VoteInfoProtoMsg): VoteInfo {
    return VoteInfo.decode(message.value);
  },
  toProto(message: VoteInfo): Uint8Array {
    return VoteInfo.encode(message).finish();
  },
  toProtoMsg(message: VoteInfo): VoteInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.VoteInfo",
      value: VoteInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VoteInfo.typeUrl, VoteInfo);
function createBaseEvidence(): Evidence {
  return {
    type: 0,
    validator: Validator.fromPartial({}),
    height: BigInt(0),
    time: new Date(),
    totalVotingPower: BigInt(0)
  };
}
export const Evidence = {
  typeUrl: "/tendermint.abci.Evidence",
  is(o: any): o is Evidence {
    return o && (o.$typeUrl === Evidence.typeUrl || isSet(o.type) && Validator.is(o.validator) && typeof o.height === "bigint" && Timestamp.is(o.time) && typeof o.totalVotingPower === "bigint");
  },
  isSDK(o: any): o is EvidenceSDKType {
    return o && (o.$typeUrl === Evidence.typeUrl || isSet(o.type) && Validator.isSDK(o.validator) && typeof o.height === "bigint" && Timestamp.isSDK(o.time) && typeof o.total_voting_power === "bigint");
  },
  encode(message: Evidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(40).int64(message.totalVotingPower);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Evidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;
        case 2:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.totalVotingPower = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Evidence>): Evidence {
    const message = createBaseEvidence();
    message.type = object.type ?? 0;
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? undefined;
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: EvidenceProtoMsg): Evidence {
    return Evidence.decode(message.value);
  },
  toProto(message: Evidence): Uint8Array {
    return Evidence.encode(message).finish();
  },
  toProtoMsg(message: Evidence): EvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Evidence",
      value: Evidence.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Evidence.typeUrl, Evidence);
function createBaseSnapshot(): Snapshot {
  return {
    height: BigInt(0),
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}
export const Snapshot = {
  typeUrl: "/tendermint.abci.Snapshot",
  is(o: any): o is Snapshot {
    return o && (o.$typeUrl === Snapshot.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunks === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string") && (o.metadata instanceof Uint8Array || typeof o.metadata === "string"));
  },
  isSDK(o: any): o is SnapshotSDKType {
    return o && (o.$typeUrl === Snapshot.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunks === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string") && (o.metadata instanceof Uint8Array || typeof o.metadata === "string"));
  },
  encode(message: Snapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Snapshot>): Snapshot {
    const message = createBaseSnapshot();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: SnapshotProtoMsg): Snapshot {
    return Snapshot.decode(message.value);
  },
  toProto(message: Snapshot): Uint8Array {
    return Snapshot.encode(message).finish();
  },
  toProtoMsg(message: Snapshot): SnapshotProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Snapshot",
      value: Snapshot.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Snapshot.typeUrl, Snapshot);