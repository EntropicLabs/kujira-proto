import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { GlobalDecoderRegistry } from "../../registry";
/** Params defines the parameters for the oracle module. */
export interface Params {
  votePeriod: bigint;
  voteThreshold: string;
  rewardBand: string;
  rewardDistributionWindow: bigint;
  whitelist: Denom[];
  slashFraction: string;
  slashWindow: bigint;
  minValidPerWindow: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/kujira.oracle.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsSDKType {
  vote_period: bigint;
  vote_threshold: string;
  reward_band: string;
  reward_distribution_window: bigint;
  whitelist: DenomSDKType[];
  slash_fraction: string;
  slash_window: bigint;
  min_valid_per_window: string;
}
/** Denom - the object to hold configurations of each denom */
export interface Denom {
  name: string;
}
export interface DenomProtoMsg {
  typeUrl: "/kujira.oracle.Denom";
  value: Uint8Array;
}
/** Denom - the object to hold configurations of each denom */
export interface DenomSDKType {
  name: string;
}
/**
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevote {
  hash: string;
  voter: string;
  submitBlock: bigint;
}
export interface AggregateExchangeRatePrevoteProtoMsg {
  typeUrl: "/kujira.oracle.AggregateExchangeRatePrevote";
  value: Uint8Array;
}
/**
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevoteSDKType {
  hash: string;
  voter: string;
  submit_block: bigint;
}
/** MsgAggregateExchangeRateVote - struct for voting on exchange rates. */
export interface AggregateExchangeRateVote {
  exchangeRateTuples: ExchangeRateTuple[];
  voter: string;
}
export interface AggregateExchangeRateVoteProtoMsg {
  typeUrl: "/kujira.oracle.AggregateExchangeRateVote";
  value: Uint8Array;
}
/** MsgAggregateExchangeRateVote - struct for voting on exchange rates. */
export interface AggregateExchangeRateVoteSDKType {
  exchange_rate_tuples: ExchangeRateTupleSDKType[];
  voter: string;
}
/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTuple {
  denom: string;
  exchangeRate: string;
}
export interface ExchangeRateTupleProtoMsg {
  typeUrl: "/kujira.oracle.ExchangeRateTuple";
  value: Uint8Array;
}
/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTupleSDKType {
  denom: string;
  exchange_rate: string;
}
function createBaseParams(): Params {
  return {
    votePeriod: BigInt(0),
    voteThreshold: "",
    rewardBand: "",
    rewardDistributionWindow: BigInt(0),
    whitelist: [],
    slashFraction: "",
    slashWindow: BigInt(0),
    minValidPerWindow: ""
  };
}
export const Params = {
  typeUrl: "/kujira.oracle.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.votePeriod === "bigint" && typeof o.voteThreshold === "string" && typeof o.rewardBand === "string" && typeof o.rewardDistributionWindow === "bigint" && Array.isArray(o.whitelist) && (!o.whitelist.length || Denom.is(o.whitelist[0])) && typeof o.slashFraction === "string" && typeof o.slashWindow === "bigint" && typeof o.minValidPerWindow === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.vote_period === "bigint" && typeof o.vote_threshold === "string" && typeof o.reward_band === "string" && typeof o.reward_distribution_window === "bigint" && Array.isArray(o.whitelist) && (!o.whitelist.length || Denom.isSDK(o.whitelist[0])) && typeof o.slash_fraction === "string" && typeof o.slash_window === "bigint" && typeof o.min_valid_per_window === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votePeriod !== BigInt(0)) {
      writer.uint32(8).uint64(message.votePeriod);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.voteThreshold, 18).atomics);
    }
    if (message.rewardBand !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rewardBand, 18).atomics);
    }
    if (message.rewardDistributionWindow !== BigInt(0)) {
      writer.uint32(32).uint64(message.rewardDistributionWindow);
    }
    for (const v of message.whitelist) {
      Denom.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.slashFraction !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.slashFraction, 18).atomics);
    }
    if (message.slashWindow !== BigInt(0)) {
      writer.uint32(56).uint64(message.slashWindow);
    }
    if (message.minValidPerWindow !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.minValidPerWindow, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votePeriod = reader.uint64();
          break;
        case 2:
          message.voteThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.rewardBand = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.rewardDistributionWindow = reader.uint64();
          break;
        case 5:
          message.whitelist.push(Denom.decode(reader, reader.uint32()));
          break;
        case 6:
          message.slashFraction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.slashWindow = reader.uint64();
          break;
        case 8:
          message.minValidPerWindow = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? BigInt(object.votePeriod.toString()) : BigInt(0);
    message.voteThreshold = object.voteThreshold ?? "";
    message.rewardBand = object.rewardBand ?? "";
    message.rewardDistributionWindow = object.rewardDistributionWindow !== undefined && object.rewardDistributionWindow !== null ? BigInt(object.rewardDistributionWindow.toString()) : BigInt(0);
    message.whitelist = object.whitelist?.map(e => Denom.fromPartial(e)) || [];
    message.slashFraction = object.slashFraction ?? "";
    message.slashWindow = object.slashWindow !== undefined && object.slashWindow !== null ? BigInt(object.slashWindow.toString()) : BigInt(0);
    message.minValidPerWindow = object.minValidPerWindow ?? "";
    return message;
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/kujira.oracle.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
function createBaseDenom(): Denom {
  return {
    name: ""
  };
}
export const Denom = {
  typeUrl: "/kujira.oracle.Denom",
  is(o: any): o is Denom {
    return o && (o.$typeUrl === Denom.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is DenomSDKType {
    return o && (o.$typeUrl === Denom.typeUrl || typeof o.name === "string");
  },
  encode(message: Denom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Denom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Denom>): Denom {
    const message = createBaseDenom();
    message.name = object.name ?? "";
    return message;
  },
  fromProtoMsg(message: DenomProtoMsg): Denom {
    return Denom.decode(message.value);
  },
  toProto(message: Denom): Uint8Array {
    return Denom.encode(message).finish();
  },
  toProtoMsg(message: Denom): DenomProtoMsg {
    return {
      typeUrl: "/kujira.oracle.Denom",
      value: Denom.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Denom.typeUrl, Denom);
function createBaseAggregateExchangeRatePrevote(): AggregateExchangeRatePrevote {
  return {
    hash: "",
    voter: "",
    submitBlock: BigInt(0)
  };
}
export const AggregateExchangeRatePrevote = {
  typeUrl: "/kujira.oracle.AggregateExchangeRatePrevote",
  is(o: any): o is AggregateExchangeRatePrevote {
    return o && (o.$typeUrl === AggregateExchangeRatePrevote.typeUrl || typeof o.hash === "string" && typeof o.voter === "string" && typeof o.submitBlock === "bigint");
  },
  isSDK(o: any): o is AggregateExchangeRatePrevoteSDKType {
    return o && (o.$typeUrl === AggregateExchangeRatePrevote.typeUrl || typeof o.hash === "string" && typeof o.voter === "string" && typeof o.submit_block === "bigint");
  },
  encode(message: AggregateExchangeRatePrevote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.submitBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.submitBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AggregateExchangeRatePrevote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateExchangeRatePrevote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.submitBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AggregateExchangeRatePrevote>): AggregateExchangeRatePrevote {
    const message = createBaseAggregateExchangeRatePrevote();
    message.hash = object.hash ?? "";
    message.voter = object.voter ?? "";
    message.submitBlock = object.submitBlock !== undefined && object.submitBlock !== null ? BigInt(object.submitBlock.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: AggregateExchangeRatePrevoteProtoMsg): AggregateExchangeRatePrevote {
    return AggregateExchangeRatePrevote.decode(message.value);
  },
  toProto(message: AggregateExchangeRatePrevote): Uint8Array {
    return AggregateExchangeRatePrevote.encode(message).finish();
  },
  toProtoMsg(message: AggregateExchangeRatePrevote): AggregateExchangeRatePrevoteProtoMsg {
    return {
      typeUrl: "/kujira.oracle.AggregateExchangeRatePrevote",
      value: AggregateExchangeRatePrevote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AggregateExchangeRatePrevote.typeUrl, AggregateExchangeRatePrevote);
function createBaseAggregateExchangeRateVote(): AggregateExchangeRateVote {
  return {
    exchangeRateTuples: [],
    voter: ""
  };
}
export const AggregateExchangeRateVote = {
  typeUrl: "/kujira.oracle.AggregateExchangeRateVote",
  is(o: any): o is AggregateExchangeRateVote {
    return o && (o.$typeUrl === AggregateExchangeRateVote.typeUrl || Array.isArray(o.exchangeRateTuples) && (!o.exchangeRateTuples.length || ExchangeRateTuple.is(o.exchangeRateTuples[0])) && typeof o.voter === "string");
  },
  isSDK(o: any): o is AggregateExchangeRateVoteSDKType {
    return o && (o.$typeUrl === AggregateExchangeRateVote.typeUrl || Array.isArray(o.exchange_rate_tuples) && (!o.exchange_rate_tuples.length || ExchangeRateTuple.isSDK(o.exchange_rate_tuples[0])) && typeof o.voter === "string");
  },
  encode(message: AggregateExchangeRateVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.exchangeRateTuples) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AggregateExchangeRateVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateExchangeRateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRateTuples.push(ExchangeRateTuple.decode(reader, reader.uint32()));
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AggregateExchangeRateVote>): AggregateExchangeRateVote {
    const message = createBaseAggregateExchangeRateVote();
    message.exchangeRateTuples = object.exchangeRateTuples?.map(e => ExchangeRateTuple.fromPartial(e)) || [];
    message.voter = object.voter ?? "";
    return message;
  },
  fromProtoMsg(message: AggregateExchangeRateVoteProtoMsg): AggregateExchangeRateVote {
    return AggregateExchangeRateVote.decode(message.value);
  },
  toProto(message: AggregateExchangeRateVote): Uint8Array {
    return AggregateExchangeRateVote.encode(message).finish();
  },
  toProtoMsg(message: AggregateExchangeRateVote): AggregateExchangeRateVoteProtoMsg {
    return {
      typeUrl: "/kujira.oracle.AggregateExchangeRateVote",
      value: AggregateExchangeRateVote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AggregateExchangeRateVote.typeUrl, AggregateExchangeRateVote);
function createBaseExchangeRateTuple(): ExchangeRateTuple {
  return {
    denom: "",
    exchangeRate: ""
  };
}
export const ExchangeRateTuple = {
  typeUrl: "/kujira.oracle.ExchangeRateTuple",
  is(o: any): o is ExchangeRateTuple {
    return o && (o.$typeUrl === ExchangeRateTuple.typeUrl || typeof o.denom === "string" && typeof o.exchangeRate === "string");
  },
  isSDK(o: any): o is ExchangeRateTupleSDKType {
    return o && (o.$typeUrl === ExchangeRateTuple.typeUrl || typeof o.denom === "string" && typeof o.exchange_rate === "string");
  },
  encode(message: ExchangeRateTuple, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExchangeRateTuple {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ExchangeRateTuple>): ExchangeRateTuple {
    const message = createBaseExchangeRateTuple();
    message.denom = object.denom ?? "";
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  },
  fromProtoMsg(message: ExchangeRateTupleProtoMsg): ExchangeRateTuple {
    return ExchangeRateTuple.decode(message.value);
  },
  toProto(message: ExchangeRateTuple): Uint8Array {
    return ExchangeRateTuple.encode(message).finish();
  },
  toProtoMsg(message: ExchangeRateTuple): ExchangeRateTupleProtoMsg {
    return {
      typeUrl: "/kujira.oracle.ExchangeRateTuple",
      value: ExchangeRateTuple.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExchangeRateTuple.typeUrl, ExchangeRateTuple);