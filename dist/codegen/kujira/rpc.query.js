import { connectComet } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({ rpcEndpoint }) => {
    const tmClient = await connectComet(rpcEndpoint);
    const client = new QueryClient(tmClient);
    return {
        cosmos: {
            auth: {
                v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            authz: {
                v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            bank: {
                v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            distribution: {
                v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            gov: {
                v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            staking: {
                v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            tx: {
                v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
            },
            upgrade: {
                v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            }
        },
        kujira: {
            cwica: (await import("./cwica/query.rpc.Query")).createRpcQueryExtension(client),
            denom: (await import("./denom/query.rpc.Query")).createRpcQueryExtension(client),
            oracle: (await import("./oracle/query.rpc.Query")).createRpcQueryExtension(client),
            scheduler: (await import("./scheduler/query.rpc.Query")).createRpcQueryExtension(client)
        }
    };
};
//# sourceMappingURL=rpc.query.js.map