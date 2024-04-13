import { Rpc } from "../helpers";
import { BinaryReader } from "../binary";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.withdrawAllDelegatorRewards = this.withdrawAllDelegatorRewards.bind(this);
    this.batchResetDelegation = this.batchResetDelegation.bind(this);
  }
  withdrawAllDelegatorRewards(request: MsgWithdrawAllDelegatorRewards): Promise<MsgWithdrawAllDelegatorRewardsResponse> {
    const data = MsgWithdrawAllDelegatorRewards.encode(request).finish();
    const promise = this.rpc.request("batch.Msg", "WithdrawAllDelegatorRewards", data);
    return promise.then(data => MsgWithdrawAllDelegatorRewardsResponse.decode(new BinaryReader(data)));
  }
  batchResetDelegation(request: MsgBatchResetDelegation): Promise<MsgBatchResetDelegationResponse> {
    const data = MsgBatchResetDelegation.encode(request).finish();
    const promise = this.rpc.request("batch.Msg", "BatchResetDelegation", data);
    return promise.then(data => MsgBatchResetDelegationResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};