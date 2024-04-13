import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.hook = this.hook.bind(this);
    this.hookAll = this.hookAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kujira.scheduler.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  hook(request: QueryGetHookRequest): Promise<QueryGetHookResponse> {
    const data = QueryGetHookRequest.encode(request).finish();
    const promise = this.rpc.request("kujira.scheduler.Query", "Hook", data);
    return promise.then(data => QueryGetHookResponse.decode(new BinaryReader(data)));
  }
  hookAll(request: QueryAllHookRequest = {
    pagination: undefined
  }): Promise<QueryAllHookResponse> {
    const data = QueryAllHookRequest.encode(request).finish();
    const promise = this.rpc.request("kujira.scheduler.Query", "HookAll", data);
    return promise.then(data => QueryAllHookResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    hook(request: QueryGetHookRequest): Promise<QueryGetHookResponse> {
      return queryService.hook(request);
    },
    hookAll(request?: QueryAllHookRequest): Promise<QueryAllHookResponse> {
      return queryService.hookAll(request);
    }
  };
};