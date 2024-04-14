import * as _1 from "./genesis";
import * as _2 from "./params";
import * as _3 from "./tx";
import * as _88 from "./tx.rpc.msg";
export declare const batch: {
    ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            batch: _88.MsgClientImpl;
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
    };
    MsgClientImpl: typeof _88.MsgClientImpl;
    MsgWithdrawAllDelegatorRewards: {
        typeUrl: string;
        is(o: any): o is _3.MsgWithdrawAllDelegatorRewards;
        isSDK(o: any): o is _3.MsgWithdrawAllDelegatorRewardsSDKType;
        encode(message: _3.MsgWithdrawAllDelegatorRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.MsgWithdrawAllDelegatorRewards;
        fromPartial(object: Partial<_3.MsgWithdrawAllDelegatorRewards>): _3.MsgWithdrawAllDelegatorRewards;
        fromProtoMsg(message: _3.MsgWithdrawAllDelegatorRewardsProtoMsg): _3.MsgWithdrawAllDelegatorRewards;
        toProto(message: _3.MsgWithdrawAllDelegatorRewards): Uint8Array;
        toProtoMsg(message: _3.MsgWithdrawAllDelegatorRewards): _3.MsgWithdrawAllDelegatorRewardsProtoMsg;
    };
    MsgWithdrawAllDelegatorRewardsResponse: {
        typeUrl: string;
        is(o: any): o is _3.MsgWithdrawAllDelegatorRewardsResponse;
        isSDK(o: any): o is _3.MsgWithdrawAllDelegatorRewardsResponseSDKType;
        encode(message: _3.MsgWithdrawAllDelegatorRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.MsgWithdrawAllDelegatorRewardsResponse;
        fromPartial(object: Partial<_3.MsgWithdrawAllDelegatorRewardsResponse>): _3.MsgWithdrawAllDelegatorRewardsResponse;
        fromProtoMsg(message: _3.MsgWithdrawAllDelegatorRewardsResponseProtoMsg): _3.MsgWithdrawAllDelegatorRewardsResponse;
        toProto(message: _3.MsgWithdrawAllDelegatorRewardsResponse): Uint8Array;
        toProtoMsg(message: _3.MsgWithdrawAllDelegatorRewardsResponse): _3.MsgWithdrawAllDelegatorRewardsResponseProtoMsg;
    };
    MsgBatchResetDelegation: {
        typeUrl: string;
        is(o: any): o is _3.MsgBatchResetDelegation;
        isSDK(o: any): o is _3.MsgBatchResetDelegationSDKType;
        encode(message: _3.MsgBatchResetDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.MsgBatchResetDelegation;
        fromPartial(object: Partial<_3.MsgBatchResetDelegation>): _3.MsgBatchResetDelegation;
        fromProtoMsg(message: _3.MsgBatchResetDelegationProtoMsg): _3.MsgBatchResetDelegation;
        toProto(message: _3.MsgBatchResetDelegation): Uint8Array;
        toProtoMsg(message: _3.MsgBatchResetDelegation): _3.MsgBatchResetDelegationProtoMsg;
    };
    MsgBatchResetDelegationResponse: {
        typeUrl: string;
        is(o: any): o is _3.MsgBatchResetDelegationResponse;
        isSDK(o: any): o is _3.MsgBatchResetDelegationResponseSDKType;
        encode(_: _3.MsgBatchResetDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.MsgBatchResetDelegationResponse;
        fromPartial(_: Partial<_3.MsgBatchResetDelegationResponse>): _3.MsgBatchResetDelegationResponse;
        fromProtoMsg(message: _3.MsgBatchResetDelegationResponseProtoMsg): _3.MsgBatchResetDelegationResponse;
        toProto(message: _3.MsgBatchResetDelegationResponse): Uint8Array;
        toProtoMsg(message: _3.MsgBatchResetDelegationResponse): _3.MsgBatchResetDelegationResponseProtoMsg;
    };
    Params: {
        typeUrl: string;
        is(o: any): o is _2.Params;
        isSDK(o: any): o is _2.ParamsSDKType;
        encode(_: _2.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _2.Params;
        fromPartial(_: Partial<_2.Params>): _2.Params;
        fromProtoMsg(message: _2.ParamsProtoMsg): _2.Params;
        toProto(message: _2.Params): Uint8Array;
        toProtoMsg(message: _2.Params): _2.ParamsProtoMsg;
    };
    GenesisState: {
        typeUrl: string;
        is(o: any): o is _1.GenesisState;
        isSDK(o: any): o is _1.GenesisStateSDKType;
        encode(message: _1.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.GenesisState;
        fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
        fromProtoMsg(message: _1.GenesisStateProtoMsg): _1.GenesisState;
        toProto(message: _1.GenesisState): Uint8Array;
        toProtoMsg(message: _1.GenesisState): _1.GenesisStateProtoMsg;
    };
};
