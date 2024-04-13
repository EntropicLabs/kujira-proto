import * as _47 from "./wasm/v1/authz";
import * as _48 from "./wasm/v1/genesis";
import * as _49 from "./wasm/v1/ibc";
import * as _50 from "./wasm/v1/proposal";
import * as _51 from "./wasm/v1/query";
import * as _52 from "./wasm/v1/tx";
import * as _53 from "./wasm/v1/types";
import * as _103 from "./wasm/v1/query.rpc.Query";
import * as _104 from "./wasm/v1/tx.rpc.msg";
import * as _114 from "./rpc.query";
import * as _115 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._103,
      ..._104
    };
  }
  export const ClientFactory = {
    ..._114,
    ..._115
  };
}