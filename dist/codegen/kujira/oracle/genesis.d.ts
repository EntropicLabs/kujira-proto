import { Params, ParamsSDKType, ExchangeRateTuple, ExchangeRateTupleSDKType, AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteSDKType } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
    params: Params;
    feederDelegations: FeederDelegation[];
    exchangeRates: ExchangeRateTuple[];
    missCounters: MissCounter[];
    aggregateExchangeRatePrevotes: AggregateExchangeRatePrevote[];
    aggregateExchangeRateVotes: AggregateExchangeRateVote[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kujira.oracle.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    feeder_delegations: FeederDelegationSDKType[];
    exchange_rates: ExchangeRateTupleSDKType[];
    miss_counters: MissCounterSDKType[];
    aggregate_exchange_rate_prevotes: AggregateExchangeRatePrevoteSDKType[];
    aggregate_exchange_rate_votes: AggregateExchangeRateVoteSDKType[];
}
/**
 * FeederDelegation is the address for where oracle feeder authority are
 * delegated to. By default this struct is only used at genesis to feed in
 * default feeder addresses.
 */
export interface FeederDelegation {
    feederAddress: string;
    validatorAddress: string;
}
export interface FeederDelegationProtoMsg {
    typeUrl: "/kujira.oracle.FeederDelegation";
    value: Uint8Array;
}
/**
 * FeederDelegation is the address for where oracle feeder authority are
 * delegated to. By default this struct is only used at genesis to feed in
 * default feeder addresses.
 */
export interface FeederDelegationSDKType {
    feeder_address: string;
    validator_address: string;
}
/**
 * MissCounter defines an miss counter and validator address pair used in
 * oracle module's genesis state
 */
export interface MissCounter {
    validatorAddress: string;
    missCounter: bigint;
}
export interface MissCounterProtoMsg {
    typeUrl: "/kujira.oracle.MissCounter";
    value: Uint8Array;
}
/**
 * MissCounter defines an miss counter and validator address pair used in
 * oracle module's genesis state
 */
export interface MissCounterSDKType {
    validator_address: string;
    miss_counter: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    is(o: any): o is GenesisState;
    isSDK(o: any): o is GenesisStateSDKType;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const FeederDelegation: {
    typeUrl: string;
    is(o: any): o is FeederDelegation;
    isSDK(o: any): o is FeederDelegationSDKType;
    encode(message: FeederDelegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FeederDelegation;
    fromPartial(object: Partial<FeederDelegation>): FeederDelegation;
    fromProtoMsg(message: FeederDelegationProtoMsg): FeederDelegation;
    toProto(message: FeederDelegation): Uint8Array;
    toProtoMsg(message: FeederDelegation): FeederDelegationProtoMsg;
};
export declare const MissCounter: {
    typeUrl: string;
    is(o: any): o is MissCounter;
    isSDK(o: any): o is MissCounterSDKType;
    encode(message: MissCounter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MissCounter;
    fromPartial(object: Partial<MissCounter>): MissCounter;
    fromProtoMsg(message: MissCounterProtoMsg): MissCounter;
    toProto(message: MissCounter): Uint8Array;
    toProtoMsg(message: MissCounter): MissCounterProtoMsg;
};
