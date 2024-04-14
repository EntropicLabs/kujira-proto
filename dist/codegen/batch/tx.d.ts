import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../binary";
/**
 * MsgWithdrawAllDelegatorRewards represents delegation withdrawal to a delegator
 * from all staked validators.
 */
export interface MsgWithdrawAllDelegatorRewards {
    delegatorAddress: string;
}
export interface MsgWithdrawAllDelegatorRewardsProtoMsg {
    typeUrl: "/batch.MsgWithdrawAllDelegatorRewards";
    value: Uint8Array;
}
/**
 * MsgWithdrawAllDelegatorRewards represents delegation withdrawal to a delegator
 * from all staked validators.
 */
export interface MsgWithdrawAllDelegatorRewardsSDKType {
    delegator_address: string;
}
/** MsgWithdrawAllDelegatorRewardsResponse defines the Msg/WithdrawAllDelegatorRewards response type. */
export interface MsgWithdrawAllDelegatorRewardsResponse {
    amount: Coin[];
}
export interface MsgWithdrawAllDelegatorRewardsResponseProtoMsg {
    typeUrl: "/batch.MsgWithdrawAllDelegatorRewardsResponse";
    value: Uint8Array;
}
/** MsgWithdrawAllDelegatorRewardsResponse defines the Msg/WithdrawAllDelegatorRewards response type. */
export interface MsgWithdrawAllDelegatorRewardsResponseSDKType {
    amount: CoinSDKType[];
}
export interface MsgBatchResetDelegation {
    delegatorAddress: string;
    validators: string[];
    amounts: string[];
}
export interface MsgBatchResetDelegationProtoMsg {
    typeUrl: "/batch.MsgBatchResetDelegation";
    value: Uint8Array;
}
export interface MsgBatchResetDelegationSDKType {
    delegator_address: string;
    validators: string[];
    amounts: string[];
}
export interface MsgBatchResetDelegationResponse {
}
export interface MsgBatchResetDelegationResponseProtoMsg {
    typeUrl: "/batch.MsgBatchResetDelegationResponse";
    value: Uint8Array;
}
export interface MsgBatchResetDelegationResponseSDKType {
}
export declare const MsgWithdrawAllDelegatorRewards: {
    typeUrl: string;
    is(o: any): o is MsgWithdrawAllDelegatorRewards;
    isSDK(o: any): o is MsgWithdrawAllDelegatorRewardsSDKType;
    encode(message: MsgWithdrawAllDelegatorRewards, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawAllDelegatorRewards;
    fromPartial(object: Partial<MsgWithdrawAllDelegatorRewards>): MsgWithdrawAllDelegatorRewards;
    fromProtoMsg(message: MsgWithdrawAllDelegatorRewardsProtoMsg): MsgWithdrawAllDelegatorRewards;
    toProto(message: MsgWithdrawAllDelegatorRewards): Uint8Array;
    toProtoMsg(message: MsgWithdrawAllDelegatorRewards): MsgWithdrawAllDelegatorRewardsProtoMsg;
};
export declare const MsgWithdrawAllDelegatorRewardsResponse: {
    typeUrl: string;
    is(o: any): o is MsgWithdrawAllDelegatorRewardsResponse;
    isSDK(o: any): o is MsgWithdrawAllDelegatorRewardsResponseSDKType;
    encode(message: MsgWithdrawAllDelegatorRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawAllDelegatorRewardsResponse;
    fromPartial(object: Partial<MsgWithdrawAllDelegatorRewardsResponse>): MsgWithdrawAllDelegatorRewardsResponse;
    fromProtoMsg(message: MsgWithdrawAllDelegatorRewardsResponseProtoMsg): MsgWithdrawAllDelegatorRewardsResponse;
    toProto(message: MsgWithdrawAllDelegatorRewardsResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawAllDelegatorRewardsResponse): MsgWithdrawAllDelegatorRewardsResponseProtoMsg;
};
export declare const MsgBatchResetDelegation: {
    typeUrl: string;
    is(o: any): o is MsgBatchResetDelegation;
    isSDK(o: any): o is MsgBatchResetDelegationSDKType;
    encode(message: MsgBatchResetDelegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBatchResetDelegation;
    fromPartial(object: Partial<MsgBatchResetDelegation>): MsgBatchResetDelegation;
    fromProtoMsg(message: MsgBatchResetDelegationProtoMsg): MsgBatchResetDelegation;
    toProto(message: MsgBatchResetDelegation): Uint8Array;
    toProtoMsg(message: MsgBatchResetDelegation): MsgBatchResetDelegationProtoMsg;
};
export declare const MsgBatchResetDelegationResponse: {
    typeUrl: string;
    is(o: any): o is MsgBatchResetDelegationResponse;
    isSDK(o: any): o is MsgBatchResetDelegationResponseSDKType;
    encode(_: MsgBatchResetDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBatchResetDelegationResponse;
    fromPartial(_: Partial<MsgBatchResetDelegationResponse>): MsgBatchResetDelegationResponse;
    fromProtoMsg(message: MsgBatchResetDelegationResponseProtoMsg): MsgBatchResetDelegationResponse;
    toProto(message: MsgBatchResetDelegationResponse): Uint8Array;
    toProtoMsg(message: MsgBatchResetDelegationResponse): MsgBatchResetDelegationResponseProtoMsg;
};
