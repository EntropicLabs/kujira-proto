import * as _60 from "./cwica/callback";
import * as _61 from "./cwica/query";
import * as _62 from "./cwica/tx";
import * as _63 from "./denom/authorityMetadata";
import * as _64 from "./denom/genesis";
import * as _65 from "./denom/params";
import * as _66 from "./denom/query";
import * as _67 from "./denom/tx";
import * as _68 from "./oracle/genesis";
import * as _69 from "./oracle/oracle";
import * as _70 from "./oracle/query";
import * as _71 from "./oracle/tx";
import * as _72 from "./scheduler/genesis";
import * as _73 from "./scheduler/hook";
import * as _74 from "./scheduler/params";
import * as _75 from "./scheduler/proposal";
import * as _76 from "./scheduler/query";
import * as _105 from "./cwica/query.rpc.Query";
import * as _106 from "./denom/query.rpc.Query";
import * as _107 from "./oracle/query.rpc.Query";
import * as _108 from "./scheduler/query.rpc.Query";
import * as _109 from "./denom/tx.rpc.msg";
import * as _110 from "./oracle/tx.rpc.msg";
import * as _116 from "./rpc.query";
import * as _117 from "./rpc.tx";
export namespace kujira {
  export const cwica = {
    ..._60,
    ..._61,
    ..._62,
    ..._105
  };
  export const denom = {
    ..._63,
    ..._64,
    ..._65,
    ..._66,
    ..._67,
    ..._106,
    ..._109
  };
  export const oracle = {
    ..._68,
    ..._69,
    ..._70,
    ..._71,
    ..._107,
    ..._110
  };
  export const scheduler = {
    ..._72,
    ..._73,
    ..._74,
    ..._75,
    ..._76,
    ..._108
  };
  export const ClientFactory = {
    ..._116,
    ..._117
  };
}