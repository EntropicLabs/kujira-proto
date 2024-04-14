import { Rpc } from "../helpers";
import { MsgWithdrawAllDelegatorRewards, MsgWithdrawAllDelegatorRewardsResponse, MsgBatchResetDelegation, MsgBatchResetDelegationResponse } from "./tx";
/** Msg defines the batch Msg service. */
export interface Msg {
    /**
     * WithdrawAllDelegatorRewards defines a method to withdraw rewards of delegator
     * from all staked validators.
     */
    withdrawAllDelegatorRewards(request: MsgWithdrawAllDelegatorRewards): Promise<MsgWithdrawAllDelegatorRewardsResponse>;
    /**
     * BatchResetDelegation defines a method to delegate or undelegate in batches
     * from existing delegation and target delegation amount
     */
    batchResetDelegation(request: MsgBatchResetDelegation): Promise<MsgBatchResetDelegationResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    withdrawAllDelegatorRewards(request: MsgWithdrawAllDelegatorRewards): Promise<MsgWithdrawAllDelegatorRewardsResponse>;
    batchResetDelegation(request: MsgBatchResetDelegation): Promise<MsgBatchResetDelegationResponse>;
}
