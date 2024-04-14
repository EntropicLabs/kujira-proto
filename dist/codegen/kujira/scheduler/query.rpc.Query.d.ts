import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetHookRequest, QueryGetHookResponse, QueryAllHookRequest, QueryAllHookResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Hook by id. */
    hook(request: QueryGetHookRequest): Promise<QueryGetHookResponse>;
    /** Queries a list of Hook items. */
    hookAll(request?: QueryAllHookRequest): Promise<QueryAllHookResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    hook(request: QueryGetHookRequest): Promise<QueryGetHookResponse>;
    hookAll(request?: QueryAllHookRequest): Promise<QueryAllHookResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    hook(request: QueryGetHookRequest): Promise<QueryGetHookResponse>;
    hookAll(request?: QueryAllHookRequest): Promise<QueryAllHookResponse>;
};
