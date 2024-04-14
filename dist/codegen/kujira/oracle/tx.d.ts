import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 */
export interface MsgAggregateExchangeRatePrevote {
    hash: string;
    feeder: string;
    validator: string;
}
export interface MsgAggregateExchangeRatePrevoteProtoMsg {
    typeUrl: "/kujira.oracle.MsgAggregateExchangeRatePrevote";
    value: Uint8Array;
}
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 */
export interface MsgAggregateExchangeRatePrevoteSDKType {
    hash: string;
    feeder: string;
    validator: string;
}
/** MsgAggregateExchangeRatePrevoteResponse defines the Msg/AggregateExchangeRatePrevote response type. */
export interface MsgAggregateExchangeRatePrevoteResponse {
}
export interface MsgAggregateExchangeRatePrevoteResponseProtoMsg {
    typeUrl: "/kujira.oracle.MsgAggregateExchangeRatePrevoteResponse";
    value: Uint8Array;
}
/** MsgAggregateExchangeRatePrevoteResponse defines the Msg/AggregateExchangeRatePrevote response type. */
export interface MsgAggregateExchangeRatePrevoteResponseSDKType {
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVote {
    salt: string;
    exchangeRates: string;
    feeder: string;
    validator: string;
}
export interface MsgAggregateExchangeRateVoteProtoMsg {
    typeUrl: "/kujira.oracle.MsgAggregateExchangeRateVote";
    value: Uint8Array;
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVoteSDKType {
    salt: string;
    exchange_rates: string;
    feeder: string;
    validator: string;
}
/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponse {
}
export interface MsgAggregateExchangeRateVoteResponseProtoMsg {
    typeUrl: "/kujira.oracle.MsgAggregateExchangeRateVoteResponse";
    value: Uint8Array;
}
/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponseSDKType {
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsent {
    operator: string;
    delegate: string;
}
export interface MsgDelegateFeedConsentProtoMsg {
    typeUrl: "/kujira.oracle.MsgDelegateFeedConsent";
    value: Uint8Array;
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsentSDKType {
    operator: string;
    delegate: string;
}
/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponse {
}
export interface MsgDelegateFeedConsentResponseProtoMsg {
    typeUrl: "/kujira.oracle.MsgDelegateFeedConsentResponse";
    value: Uint8Array;
}
/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponseSDKType {
}
export declare const MsgAggregateExchangeRatePrevote: {
    typeUrl: string;
    is(o: any): o is MsgAggregateExchangeRatePrevote;
    isSDK(o: any): o is MsgAggregateExchangeRatePrevoteSDKType;
    encode(message: MsgAggregateExchangeRatePrevote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRatePrevote;
    fromPartial(object: Partial<MsgAggregateExchangeRatePrevote>): MsgAggregateExchangeRatePrevote;
    fromProtoMsg(message: MsgAggregateExchangeRatePrevoteProtoMsg): MsgAggregateExchangeRatePrevote;
    toProto(message: MsgAggregateExchangeRatePrevote): Uint8Array;
    toProtoMsg(message: MsgAggregateExchangeRatePrevote): MsgAggregateExchangeRatePrevoteProtoMsg;
};
export declare const MsgAggregateExchangeRatePrevoteResponse: {
    typeUrl: string;
    is(o: any): o is MsgAggregateExchangeRatePrevoteResponse;
    isSDK(o: any): o is MsgAggregateExchangeRatePrevoteResponseSDKType;
    encode(_: MsgAggregateExchangeRatePrevoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRatePrevoteResponse;
    fromPartial(_: Partial<MsgAggregateExchangeRatePrevoteResponse>): MsgAggregateExchangeRatePrevoteResponse;
    fromProtoMsg(message: MsgAggregateExchangeRatePrevoteResponseProtoMsg): MsgAggregateExchangeRatePrevoteResponse;
    toProto(message: MsgAggregateExchangeRatePrevoteResponse): Uint8Array;
    toProtoMsg(message: MsgAggregateExchangeRatePrevoteResponse): MsgAggregateExchangeRatePrevoteResponseProtoMsg;
};
export declare const MsgAggregateExchangeRateVote: {
    typeUrl: string;
    is(o: any): o is MsgAggregateExchangeRateVote;
    isSDK(o: any): o is MsgAggregateExchangeRateVoteSDKType;
    encode(message: MsgAggregateExchangeRateVote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRateVote;
    fromPartial(object: Partial<MsgAggregateExchangeRateVote>): MsgAggregateExchangeRateVote;
    fromProtoMsg(message: MsgAggregateExchangeRateVoteProtoMsg): MsgAggregateExchangeRateVote;
    toProto(message: MsgAggregateExchangeRateVote): Uint8Array;
    toProtoMsg(message: MsgAggregateExchangeRateVote): MsgAggregateExchangeRateVoteProtoMsg;
};
export declare const MsgAggregateExchangeRateVoteResponse: {
    typeUrl: string;
    is(o: any): o is MsgAggregateExchangeRateVoteResponse;
    isSDK(o: any): o is MsgAggregateExchangeRateVoteResponseSDKType;
    encode(_: MsgAggregateExchangeRateVoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRateVoteResponse;
    fromPartial(_: Partial<MsgAggregateExchangeRateVoteResponse>): MsgAggregateExchangeRateVoteResponse;
    fromProtoMsg(message: MsgAggregateExchangeRateVoteResponseProtoMsg): MsgAggregateExchangeRateVoteResponse;
    toProto(message: MsgAggregateExchangeRateVoteResponse): Uint8Array;
    toProtoMsg(message: MsgAggregateExchangeRateVoteResponse): MsgAggregateExchangeRateVoteResponseProtoMsg;
};
export declare const MsgDelegateFeedConsent: {
    typeUrl: string;
    is(o: any): o is MsgDelegateFeedConsent;
    isSDK(o: any): o is MsgDelegateFeedConsentSDKType;
    encode(message: MsgDelegateFeedConsent, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateFeedConsent;
    fromPartial(object: Partial<MsgDelegateFeedConsent>): MsgDelegateFeedConsent;
    fromProtoMsg(message: MsgDelegateFeedConsentProtoMsg): MsgDelegateFeedConsent;
    toProto(message: MsgDelegateFeedConsent): Uint8Array;
    toProtoMsg(message: MsgDelegateFeedConsent): MsgDelegateFeedConsentProtoMsg;
};
export declare const MsgDelegateFeedConsentResponse: {
    typeUrl: string;
    is(o: any): o is MsgDelegateFeedConsentResponse;
    isSDK(o: any): o is MsgDelegateFeedConsentResponseSDKType;
    encode(_: MsgDelegateFeedConsentResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateFeedConsentResponse;
    fromPartial(_: Partial<MsgDelegateFeedConsentResponse>): MsgDelegateFeedConsentResponse;
    fromProtoMsg(message: MsgDelegateFeedConsentResponseProtoMsg): MsgDelegateFeedConsentResponse;
    toProto(message: MsgDelegateFeedConsentResponse): Uint8Array;
    toProtoMsg(message: MsgDelegateFeedConsentResponse): MsgDelegateFeedConsentResponseProtoMsg;
};
