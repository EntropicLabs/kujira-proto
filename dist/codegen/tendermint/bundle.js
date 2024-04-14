import * as _77 from "./abci/types";
import * as _78 from "./crypto/keys";
import * as _79 from "./crypto/proof";
import * as _80 from "./libs/bits/types";
import * as _81 from "./p2p/types";
import * as _82 from "./types/block";
import * as _83 from "./types/evidence";
import * as _84 from "./types/params";
import * as _85 from "./types/types";
import * as _86 from "./types/validator";
import * as _87 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._77
    };
    tendermint.crypto = {
        ..._78,
        ..._79
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._80
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._81
    };
    tendermint.types = {
        ..._82,
        ..._83,
        ..._84,
        ..._85,
        ..._86
    };
    tendermint.version = {
        ..._87
    };
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map