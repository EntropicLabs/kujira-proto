import { BinaryReader } from "../binary";
import { MsgWithdrawAllDelegatorRewards, MsgWithdrawAllDelegatorRewardsResponse, MsgBatchResetDelegation, MsgBatchResetDelegationResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.withdrawAllDelegatorRewards = this.withdrawAllDelegatorRewards.bind(this);
        this.batchResetDelegation = this.batchResetDelegation.bind(this);
    }
    withdrawAllDelegatorRewards(request) {
        const data = MsgWithdrawAllDelegatorRewards.encode(request).finish();
        const promise = this.rpc.request("batch.Msg", "WithdrawAllDelegatorRewards", data);
        return promise.then(data => MsgWithdrawAllDelegatorRewardsResponse.decode(new BinaryReader(data)));
    }
    batchResetDelegation(request) {
        const data = MsgBatchResetDelegation.encode(request).finish();
        const promise = this.rpc.request("batch.Msg", "BatchResetDelegation", data);
        return promise.then(data => MsgBatchResetDelegationResponse.decode(new BinaryReader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map