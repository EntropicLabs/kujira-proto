import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetHookRequest, QueryGetHookResponse, QueryAllHookRequest, QueryAllHookResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.hook = this.hook.bind(this);
        this.hookAll = this.hookAll.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.scheduler.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    hook(request) {
        const data = QueryGetHookRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.scheduler.Query", "Hook", data);
        return promise.then(data => QueryGetHookResponse.decode(new BinaryReader(data)));
    }
    hookAll(request = {
        pagination: undefined
    }) {
        const data = QueryAllHookRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.scheduler.Query", "HookAll", data);
        return promise.then(data => QueryAllHookResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        hook(request) {
            return queryService.hook(request);
        },
        hookAll(request) {
            return queryService.hookAll(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map