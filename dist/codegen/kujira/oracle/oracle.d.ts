import { BinaryReader, BinaryWriter } from "../../binary";
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
export declare const Params: {
    typeUrl: string;
    is(o: any): o is Params;
    isSDK(o: any): o is ParamsSDKType;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const Denom: {
    typeUrl: string;
    is(o: any): o is Denom;
    isSDK(o: any): o is DenomSDKType;
    encode(message: Denom, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Denom;
    fromPartial(object: Partial<Denom>): Denom;
    fromProtoMsg(message: DenomProtoMsg): Denom;
    toProto(message: Denom): Uint8Array;
    toProtoMsg(message: Denom): DenomProtoMsg;
};
export declare const AggregateExchangeRatePrevote: {
    typeUrl: string;
    is(o: any): o is AggregateExchangeRatePrevote;
    isSDK(o: any): o is AggregateExchangeRatePrevoteSDKType;
    encode(message: AggregateExchangeRatePrevote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AggregateExchangeRatePrevote;
    fromPartial(object: Partial<AggregateExchangeRatePrevote>): AggregateExchangeRatePrevote;
    fromProtoMsg(message: AggregateExchangeRatePrevoteProtoMsg): AggregateExchangeRatePrevote;
    toProto(message: AggregateExchangeRatePrevote): Uint8Array;
    toProtoMsg(message: AggregateExchangeRatePrevote): AggregateExchangeRatePrevoteProtoMsg;
};
export declare const AggregateExchangeRateVote: {
    typeUrl: string;
    is(o: any): o is AggregateExchangeRateVote;
    isSDK(o: any): o is AggregateExchangeRateVoteSDKType;
    encode(message: AggregateExchangeRateVote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AggregateExchangeRateVote;
    fromPartial(object: Partial<AggregateExchangeRateVote>): AggregateExchangeRateVote;
    fromProtoMsg(message: AggregateExchangeRateVoteProtoMsg): AggregateExchangeRateVote;
    toProto(message: AggregateExchangeRateVote): Uint8Array;
    toProtoMsg(message: AggregateExchangeRateVote): AggregateExchangeRateVoteProtoMsg;
};
export declare const ExchangeRateTuple: {
    typeUrl: string;
    is(o: any): o is ExchangeRateTuple;
    isSDK(o: any): o is ExchangeRateTupleSDKType;
    encode(message: ExchangeRateTuple, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExchangeRateTuple;
    fromPartial(object: Partial<ExchangeRateTuple>): ExchangeRateTuple;
    fromProtoMsg(message: ExchangeRateTupleProtoMsg): ExchangeRateTuple;
    toProto(message: ExchangeRateTuple): Uint8Array;
    toProtoMsg(message: ExchangeRateTuple): ExchangeRateTupleProtoMsg;
};
