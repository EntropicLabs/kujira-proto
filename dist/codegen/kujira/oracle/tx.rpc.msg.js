import { BinaryReader } from "../../binary";
import { MsgAggregateExchangeRatePrevote, MsgAggregateExchangeRatePrevoteResponse, MsgAggregateExchangeRateVote, MsgAggregateExchangeRateVoteResponse, MsgDelegateFeedConsent, MsgDelegateFeedConsentResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.aggregateExchangeRatePrevote = this.aggregateExchangeRatePrevote.bind(this);
        this.aggregateExchangeRateVote = this.aggregateExchangeRateVote.bind(this);
        this.delegateFeedConsent = this.delegateFeedConsent.bind(this);
    }
    aggregateExchangeRatePrevote(request) {
        const data = MsgAggregateExchangeRatePrevote.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Msg", "AggregateExchangeRatePrevote", data);
        return promise.then(data => MsgAggregateExchangeRatePrevoteResponse.decode(new BinaryReader(data)));
    }
    aggregateExchangeRateVote(request) {
        const data = MsgAggregateExchangeRateVote.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Msg", "AggregateExchangeRateVote", data);
        return promise.then(data => MsgAggregateExchangeRateVoteResponse.decode(new BinaryReader(data)));
    }
    delegateFeedConsent(request) {
        const data = MsgDelegateFeedConsent.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Msg", "DelegateFeedConsent", data);
        return promise.then(data => MsgDelegateFeedConsentResponse.decode(new BinaryReader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map