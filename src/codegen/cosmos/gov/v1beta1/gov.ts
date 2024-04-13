import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalSDKType, CommunityPoolSpendProposalWithDeposit, CommunityPoolSpendProposalWithDepositSDKType } from "../../distribution/v1beta1/distribution";
import { SoftwareUpgradeProposal, SoftwareUpgradeProposalSDKType, CancelSoftwareUpgradeProposal, CancelSoftwareUpgradeProposalSDKType } from "../../upgrade/v1beta1/upgrade";
import { StoreCodeProposal, StoreCodeProposalSDKType, InstantiateContractProposal, InstantiateContractProposalSDKType, InstantiateContract2Proposal, InstantiateContract2ProposalSDKType, MigrateContractProposal, MigrateContractProposalSDKType, SudoContractProposal, SudoContractProposalSDKType, ExecuteContractProposal, ExecuteContractProposalSDKType, UpdateAdminProposal, UpdateAdminProposalSDKType, ClearAdminProposal, ClearAdminProposalSDKType, PinCodesProposal, PinCodesProposalSDKType, UnpinCodesProposal, UnpinCodesProposalSDKType, UpdateInstantiateConfigProposal, UpdateInstantiateConfigProposalSDKType, StoreAndInstantiateContractProposal, StoreAndInstantiateContractProposalSDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { isSet, toTimestamp, fromTimestamp } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { GlobalDecoderRegistry } from "../../../registry";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VOTE_OPTION_UNSPECIFIED = 0,
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}
export const VoteOptionSDKType = VoteOption;
export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalStatus enumerates the valid statuses of a proposal. */
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   */
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
  /**
   * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   */
  PROPOSAL_STATUS_VOTING_PERIOD = 2,
  /**
   * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   */
  PROPOSAL_STATUS_PASSED = 3,
  /**
   * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   */
  PROPOSAL_STATUS_REJECTED = 4,
  /**
   * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   */
  PROPOSAL_STATUS_FAILED = 5,
  UNRECOGNIZED = -1,
}
export const ProposalStatusSDKType = ProposalStatus;
export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
    case 2:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
    case 3:
    case "PROPOSAL_STATUS_PASSED":
      return ProposalStatus.PROPOSAL_STATUS_PASSED;
    case 4:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "PROPOSAL_STATUS_PASSED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface WeightedVoteOption {
  option: VoteOption;
  weight: string;
}
export interface WeightedVoteOptionProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption";
  value: Uint8Array;
}
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface WeightedVoteOptionSDKType {
  option: VoteOption;
  weight: string;
}
/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 */
export interface TextProposal {
  $typeUrl?: "/cosmos.gov.v1beta1.TextProposal";
  title: string;
  description: string;
}
export interface TextProposalProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.TextProposal";
  value: Uint8Array;
}
/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 */
export interface TextProposalSDKType {
  $typeUrl?: "/cosmos.gov.v1beta1.TextProposal";
  title: string;
  description: string;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
  proposalId: bigint;
  depositor: string;
  amount: Coin[];
}
export interface DepositProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.Deposit";
  value: Uint8Array;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositSDKType {
  proposal_id: bigint;
  depositor: string;
  amount: CoinSDKType[];
}
/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
  proposalId: bigint;
  content?: TextProposal | CommunityPoolSpendProposal | CommunityPoolSpendProposalWithDeposit | SoftwareUpgradeProposal | CancelSoftwareUpgradeProposal | StoreCodeProposal | InstantiateContractProposal | InstantiateContract2Proposal | MigrateContractProposal | SudoContractProposal | ExecuteContractProposal | UpdateAdminProposal | ClearAdminProposal | PinCodesProposal | UnpinCodesProposal | UpdateInstantiateConfigProposal | StoreAndInstantiateContractProposal | Any | undefined;
  status: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  finalTallyResult: TallyResult;
  submitTime: Date;
  depositEndTime: Date;
  totalDeposit: Coin[];
  votingStartTime: Date;
  votingEndTime: Date;
}
export interface ProposalProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.Proposal";
  value: Uint8Array;
}
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalSDKType {
  proposal_id: bigint;
  content?: TextProposalSDKType | CommunityPoolSpendProposalSDKType | CommunityPoolSpendProposalWithDepositSDKType | SoftwareUpgradeProposalSDKType | CancelSoftwareUpgradeProposalSDKType | StoreCodeProposalSDKType | InstantiateContractProposalSDKType | InstantiateContract2ProposalSDKType | MigrateContractProposalSDKType | SudoContractProposalSDKType | ExecuteContractProposalSDKType | UpdateAdminProposalSDKType | ClearAdminProposalSDKType | PinCodesProposalSDKType | UnpinCodesProposalSDKType | UpdateInstantiateConfigProposalSDKType | StoreAndInstantiateContractProposalSDKType | AnySDKType | undefined;
  status: ProposalStatus;
  final_tally_result: TallyResultSDKType;
  submit_time: Date;
  deposit_end_time: Date;
  total_deposit: CoinSDKType[];
  voting_start_time: Date;
  voting_end_time: Date;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
  yes: string;
  abstain: string;
  no: string;
  noWithVeto: string;
}
export interface TallyResultProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.TallyResult";
  value: Uint8Array;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultSDKType {
  yes: string;
  abstain: string;
  no: string;
  no_with_veto: string;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface Vote {
  proposalId: bigint;
  voter: string;
  /**
   * Deprecated: Prefer to use `options` instead. This field is set in queries
   * if and only if `len(options) == 1` and that option has weight 1. In all
   * other cases, this field will default to VOTE_OPTION_UNSPECIFIED.
   */
  /** @deprecated */
  option: VoteOption;
  /** Since: cosmos-sdk 0.43 */
  options: WeightedVoteOption[];
}
export interface VoteProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.Vote";
  value: Uint8Array;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteSDKType {
  proposal_id: bigint;
  voter: string;
  /** @deprecated */
  option: VoteOption;
  options: WeightedVoteOptionSDKType[];
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParams {
  /** Minimum deposit for a proposal to enter voting period. */
  minDeposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   *  months.
   */
  maxDepositPeriod: Duration;
}
export interface DepositParamsProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.DepositParams";
  value: Uint8Array;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParamsSDKType {
  min_deposit: CoinSDKType[];
  max_deposit_period: DurationSDKType;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParams {
  /** Length of the voting period. */
  votingPeriod: Duration;
}
export interface VotingParamsProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.VotingParams";
  value: Uint8Array;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParamsSDKType {
  voting_period: DurationSDKType;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParams {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid.
   */
  quorum: Uint8Array;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: Uint8Array;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   *  vetoed. Default value: 1/3.
   */
  vetoThreshold: Uint8Array;
}
export interface TallyParamsProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.TallyParams";
  value: Uint8Array;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParamsSDKType {
  quorum: Uint8Array;
  threshold: Uint8Array;
  veto_threshold: Uint8Array;
}
function createBaseWeightedVoteOption(): WeightedVoteOption {
  return {
    option: 0,
    weight: ""
  };
}
export const WeightedVoteOption = {
  typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption",
  aminoType: "cosmos-sdk/WeightedVoteOption",
  is(o: any): o is WeightedVoteOption {
    return o && (o.$typeUrl === WeightedVoteOption.typeUrl || isSet(o.option) && typeof o.weight === "string");
  },
  isSDK(o: any): o is WeightedVoteOptionSDKType {
    return o && (o.$typeUrl === WeightedVoteOption.typeUrl || isSet(o.option) && typeof o.weight === "string");
  },
  encode(message: WeightedVoteOption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightedVoteOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedVoteOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.option = (reader.int32() as any);
          break;
        case 2:
          message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WeightedVoteOption>): WeightedVoteOption {
    const message = createBaseWeightedVoteOption();
    message.option = object.option ?? 0;
    message.weight = object.weight ?? "";
    return message;
  },
  fromProtoMsg(message: WeightedVoteOptionProtoMsg): WeightedVoteOption {
    return WeightedVoteOption.decode(message.value);
  },
  toProto(message: WeightedVoteOption): Uint8Array {
    return WeightedVoteOption.encode(message).finish();
  },
  toProtoMsg(message: WeightedVoteOption): WeightedVoteOptionProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption",
      value: WeightedVoteOption.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(WeightedVoteOption.typeUrl, WeightedVoteOption);
GlobalDecoderRegistry.registerAminoProtoMapping(WeightedVoteOption.aminoType, WeightedVoteOption.typeUrl);
function createBaseTextProposal(): TextProposal {
  return {
    $typeUrl: "/cosmos.gov.v1beta1.TextProposal",
    title: "",
    description: ""
  };
}
export const TextProposal = {
  typeUrl: "/cosmos.gov.v1beta1.TextProposal",
  aminoType: "cosmos-sdk/TextProposal",
  is(o: any): o is TextProposal {
    return o && (o.$typeUrl === TextProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
  },
  isSDK(o: any): o is TextProposalSDKType {
    return o && (o.$typeUrl === TextProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
  },
  encode(message: TextProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TextProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TextProposal>): TextProposal {
    const message = createBaseTextProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromProtoMsg(message: TextProposalProtoMsg): TextProposal {
    return TextProposal.decode(message.value);
  },
  toProto(message: TextProposal): Uint8Array {
    return TextProposal.encode(message).finish();
  },
  toProtoMsg(message: TextProposal): TextProposalProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.TextProposal",
      value: TextProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TextProposal.typeUrl, TextProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(TextProposal.aminoType, TextProposal.typeUrl);
function createBaseDeposit(): Deposit {
  return {
    proposalId: BigInt(0),
    depositor: "",
    amount: []
  };
}
export const Deposit = {
  typeUrl: "/cosmos.gov.v1beta1.Deposit",
  aminoType: "cosmos-sdk/Deposit",
  is(o: any): o is Deposit {
    return o && (o.$typeUrl === Deposit.typeUrl || typeof o.proposalId === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is DepositSDKType {
    return o && (o.$typeUrl === Deposit.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: DepositProtoMsg): Deposit {
    return Deposit.decode(message.value);
  },
  toProto(message: Deposit): Uint8Array {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message: Deposit): DepositProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Deposit.typeUrl, Deposit);
GlobalDecoderRegistry.registerAminoProtoMapping(Deposit.aminoType, Deposit.typeUrl);
function createBaseProposal(): Proposal {
  return {
    proposalId: BigInt(0),
    content: undefined,
    status: 0,
    finalTallyResult: TallyResult.fromPartial({}),
    submitTime: new Date(),
    depositEndTime: new Date(),
    totalDeposit: [],
    votingStartTime: new Date(),
    votingEndTime: new Date()
  };
}
export const Proposal = {
  typeUrl: "/cosmos.gov.v1beta1.Proposal",
  aminoType: "cosmos-sdk/Proposal",
  is(o: any): o is Proposal {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.proposalId === "bigint" && isSet(o.status) && TallyResult.is(o.finalTallyResult) && Timestamp.is(o.submitTime) && Timestamp.is(o.depositEndTime) && Array.isArray(o.totalDeposit) && (!o.totalDeposit.length || Coin.is(o.totalDeposit[0])) && Timestamp.is(o.votingStartTime) && Timestamp.is(o.votingEndTime));
  },
  isSDK(o: any): o is ProposalSDKType {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.proposal_id === "bigint" && isSet(o.status) && TallyResult.isSDK(o.final_tally_result) && Timestamp.isSDK(o.submit_time) && Timestamp.isSDK(o.deposit_end_time) && Array.isArray(o.total_deposit) && (!o.total_deposit.length || Coin.isSDK(o.total_deposit[0])) && Timestamp.isSDK(o.voting_start_time) && Timestamp.isSDK(o.voting_end_time));
  },
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.content !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.content), writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.depositEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.depositEndTime), writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.totalDeposit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.votingStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.votingStartTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.votingEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.votingEndTime), writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.content = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 3:
          message.status = (reader.int32() as any);
          break;
        case 4:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        case 5:
          message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.depositEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.totalDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votingStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.votingEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.content = object.content !== undefined && object.content !== null ? GlobalDecoderRegistry.fromPartial(object.content) : undefined;
    message.status = object.status ?? 0;
    message.finalTallyResult = object.finalTallyResult !== undefined && object.finalTallyResult !== null ? TallyResult.fromPartial(object.finalTallyResult) : undefined;
    message.submitTime = object.submitTime ?? undefined;
    message.depositEndTime = object.depositEndTime ?? undefined;
    message.totalDeposit = object.totalDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.votingStartTime = object.votingStartTime ?? undefined;
    message.votingEndTime = object.votingEndTime ?? undefined;
    return message;
  },
  fromProtoMsg(message: ProposalProtoMsg): Proposal {
    return Proposal.decode(message.value);
  },
  toProto(message: Proposal): Uint8Array {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message: Proposal): ProposalProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Proposal.typeUrl, Proposal);
GlobalDecoderRegistry.registerAminoProtoMapping(Proposal.aminoType, Proposal.typeUrl);
function createBaseTallyResult(): TallyResult {
  return {
    yes: "",
    abstain: "",
    no: "",
    noWithVeto: ""
  };
}
export const TallyResult = {
  typeUrl: "/cosmos.gov.v1beta1.TallyResult",
  aminoType: "cosmos-sdk/TallyResult",
  is(o: any): o is TallyResult {
    return o && (o.$typeUrl === TallyResult.typeUrl || typeof o.yes === "string" && typeof o.abstain === "string" && typeof o.no === "string" && typeof o.noWithVeto === "string");
  },
  isSDK(o: any): o is TallyResultSDKType {
    return o && (o.$typeUrl === TallyResult.typeUrl || typeof o.yes === "string" && typeof o.abstain === "string" && typeof o.no === "string" && typeof o.no_with_veto === "string");
  },
  encode(message: TallyResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yes !== "") {
      writer.uint32(10).string(message.yes);
    }
    if (message.abstain !== "") {
      writer.uint32(18).string(message.abstain);
    }
    if (message.no !== "") {
      writer.uint32(26).string(message.no);
    }
    if (message.noWithVeto !== "") {
      writer.uint32(34).string(message.noWithVeto);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TallyResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yes = reader.string();
          break;
        case 2:
          message.abstain = reader.string();
          break;
        case 3:
          message.no = reader.string();
          break;
        case 4:
          message.noWithVeto = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TallyResult>): TallyResult {
    const message = createBaseTallyResult();
    message.yes = object.yes ?? "";
    message.abstain = object.abstain ?? "";
    message.no = object.no ?? "";
    message.noWithVeto = object.noWithVeto ?? "";
    return message;
  },
  fromProtoMsg(message: TallyResultProtoMsg): TallyResult {
    return TallyResult.decode(message.value);
  },
  toProto(message: TallyResult): Uint8Array {
    return TallyResult.encode(message).finish();
  },
  toProtoMsg(message: TallyResult): TallyResultProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.TallyResult",
      value: TallyResult.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TallyResult.typeUrl, TallyResult);
GlobalDecoderRegistry.registerAminoProtoMapping(TallyResult.aminoType, TallyResult.typeUrl);
function createBaseVote(): Vote {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0,
    options: []
  };
}
export const Vote = {
  typeUrl: "/cosmos.gov.v1beta1.Vote",
  aminoType: "cosmos-sdk/Vote",
  is(o: any): o is Vote {
    return o && (o.$typeUrl === Vote.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && isSet(o.option) && Array.isArray(o.options) && (!o.options.length || WeightedVoteOption.is(o.options[0])));
  },
  isSDK(o: any): o is VoteSDKType {
    return o && (o.$typeUrl === Vote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && isSet(o.option) && Array.isArray(o.options) && (!o.options.length || WeightedVoteOption.isSDK(o.options[0])));
  },
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Vote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = (reader.int32() as any);
          break;
        case 4:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: VoteProtoMsg): Vote {
    return Vote.decode(message.value);
  },
  toProto(message: Vote): Uint8Array {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message: Vote): VoteProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Vote.typeUrl, Vote);
GlobalDecoderRegistry.registerAminoProtoMapping(Vote.aminoType, Vote.typeUrl);
function createBaseDepositParams(): DepositParams {
  return {
    minDeposit: [],
    maxDepositPeriod: Duration.fromPartial({})
  };
}
export const DepositParams = {
  typeUrl: "/cosmos.gov.v1beta1.DepositParams",
  aminoType: "cosmos-sdk/DepositParams",
  is(o: any): o is DepositParams {
    return o && (o.$typeUrl === DepositParams.typeUrl || Array.isArray(o.minDeposit) && (!o.minDeposit.length || Coin.is(o.minDeposit[0])) && Duration.is(o.maxDepositPeriod));
  },
  isSDK(o: any): o is DepositParamsSDKType {
    return o && (o.$typeUrl === DepositParams.typeUrl || Array.isArray(o.min_deposit) && (!o.min_deposit.length || Coin.isSDK(o.min_deposit[0])) && Duration.isSDK(o.max_deposit_period));
  },
  encode(message: DepositParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== undefined) {
      Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DepositParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DepositParams>): DepositParams {
    const message = createBaseDepositParams();
    message.minDeposit = object.minDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.maxDepositPeriod = object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null ? Duration.fromPartial(object.maxDepositPeriod) : undefined;
    return message;
  },
  fromProtoMsg(message: DepositParamsProtoMsg): DepositParams {
    return DepositParams.decode(message.value);
  },
  toProto(message: DepositParams): Uint8Array {
    return DepositParams.encode(message).finish();
  },
  toProtoMsg(message: DepositParams): DepositParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.DepositParams",
      value: DepositParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DepositParams.typeUrl, DepositParams);
GlobalDecoderRegistry.registerAminoProtoMapping(DepositParams.aminoType, DepositParams.typeUrl);
function createBaseVotingParams(): VotingParams {
  return {
    votingPeriod: Duration.fromPartial({})
  };
}
export const VotingParams = {
  typeUrl: "/cosmos.gov.v1beta1.VotingParams",
  aminoType: "cosmos-sdk/VotingParams",
  is(o: any): o is VotingParams {
    return o && (o.$typeUrl === VotingParams.typeUrl || Duration.is(o.votingPeriod));
  },
  isSDK(o: any): o is VotingParamsSDKType {
    return o && (o.$typeUrl === VotingParams.typeUrl || Duration.isSDK(o.voting_period));
  },
  encode(message: VotingParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VotingParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VotingParams>): VotingParams {
    const message = createBaseVotingParams();
    message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? Duration.fromPartial(object.votingPeriod) : undefined;
    return message;
  },
  fromProtoMsg(message: VotingParamsProtoMsg): VotingParams {
    return VotingParams.decode(message.value);
  },
  toProto(message: VotingParams): Uint8Array {
    return VotingParams.encode(message).finish();
  },
  toProtoMsg(message: VotingParams): VotingParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.VotingParams",
      value: VotingParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VotingParams.typeUrl, VotingParams);
GlobalDecoderRegistry.registerAminoProtoMapping(VotingParams.aminoType, VotingParams.typeUrl);
function createBaseTallyParams(): TallyParams {
  return {
    quorum: new Uint8Array(),
    threshold: new Uint8Array(),
    vetoThreshold: new Uint8Array()
  };
}
export const TallyParams = {
  typeUrl: "/cosmos.gov.v1beta1.TallyParams",
  aminoType: "cosmos-sdk/TallyParams",
  is(o: any): o is TallyParams {
    return o && (o.$typeUrl === TallyParams.typeUrl || (o.quorum instanceof Uint8Array || typeof o.quorum === "string") && (o.threshold instanceof Uint8Array || typeof o.threshold === "string") && (o.vetoThreshold instanceof Uint8Array || typeof o.vetoThreshold === "string"));
  },
  isSDK(o: any): o is TallyParamsSDKType {
    return o && (o.$typeUrl === TallyParams.typeUrl || (o.quorum instanceof Uint8Array || typeof o.quorum === "string") && (o.threshold instanceof Uint8Array || typeof o.threshold === "string") && (o.veto_threshold instanceof Uint8Array || typeof o.veto_threshold === "string"));
  },
  encode(message: TallyParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quorum.length !== 0) {
      writer.uint32(10).bytes(message.quorum);
    }
    if (message.threshold.length !== 0) {
      writer.uint32(18).bytes(message.threshold);
    }
    if (message.vetoThreshold.length !== 0) {
      writer.uint32(26).bytes(message.vetoThreshold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TallyParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.bytes();
          break;
        case 2:
          message.threshold = reader.bytes();
          break;
        case 3:
          message.vetoThreshold = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TallyParams>): TallyParams {
    const message = createBaseTallyParams();
    message.quorum = object.quorum ?? new Uint8Array();
    message.threshold = object.threshold ?? new Uint8Array();
    message.vetoThreshold = object.vetoThreshold ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: TallyParamsProtoMsg): TallyParams {
    return TallyParams.decode(message.value);
  },
  toProto(message: TallyParams): Uint8Array {
    return TallyParams.encode(message).finish();
  },
  toProtoMsg(message: TallyParams): TallyParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.TallyParams",
      value: TallyParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TallyParams.typeUrl, TallyParams);
GlobalDecoderRegistry.registerAminoProtoMapping(TallyParams.aminoType, TallyParams.typeUrl);