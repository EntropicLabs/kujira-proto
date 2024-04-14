import * as _5 from "./auth/v1beta1/auth";
import * as _6 from "./auth/v1beta1/genesis";
import * as _7 from "./auth/v1beta1/query";
import * as _8 from "./authz/v1beta1/authz";
import * as _9 from "./authz/v1beta1/event";
import * as _10 from "./authz/v1beta1/genesis";
import * as _11 from "./authz/v1beta1/query";
import * as _12 from "./authz/v1beta1/tx";
import * as _13 from "./bank/v1beta1/authz";
import * as _14 from "./bank/v1beta1/bank";
import * as _15 from "./bank/v1beta1/genesis";
import * as _16 from "./bank/v1beta1/query";
import * as _17 from "./bank/v1beta1/tx";
import * as _18 from "./base/abci/v1beta1/abci";
import * as _19 from "./base/query/v1beta1/pagination";
import * as _20 from "./base/reflection/v2alpha1/reflection";
import * as _21 from "./base/v1beta1/coin";
import * as _22 from "./crypto/ed25519/keys";
import * as _23 from "./crypto/hd/v1/hd";
import * as _24 from "./crypto/keyring/v1/record";
import * as _25 from "./crypto/multisig/keys";
import * as _26 from "./crypto/secp256k1/keys";
import * as _27 from "./crypto/secp256r1/keys";
import * as _28 from "./distribution/v1beta1/distribution";
import * as _29 from "./distribution/v1beta1/genesis";
import * as _30 from "./distribution/v1beta1/query";
import * as _31 from "./distribution/v1beta1/tx";
import * as _32 from "./gov/v1beta1/genesis";
import * as _33 from "./gov/v1beta1/gov";
import * as _34 from "./gov/v1beta1/query";
import * as _35 from "./gov/v1beta1/tx";
import * as _36 from "./staking/v1beta1/authz";
import * as _37 from "./staking/v1beta1/genesis";
import * as _38 from "./staking/v1beta1/query";
import * as _39 from "./staking/v1beta1/staking";
import * as _40 from "./staking/v1beta1/tx";
import * as _41 from "./tx/signing/v1beta1/signing";
import * as _42 from "./tx/v1beta1/service";
import * as _43 from "./tx/v1beta1/tx";
import * as _44 from "./upgrade/v1beta1/query";
import * as _45 from "./upgrade/v1beta1/tx";
import * as _46 from "./upgrade/v1beta1/upgrade";
import * as _89 from "./auth/v1beta1/query.rpc.Query";
import * as _90 from "./authz/v1beta1/query.rpc.Query";
import * as _91 from "./bank/v1beta1/query.rpc.Query";
import * as _92 from "./distribution/v1beta1/query.rpc.Query";
import * as _93 from "./gov/v1beta1/query.rpc.Query";
import * as _94 from "./staking/v1beta1/query.rpc.Query";
import * as _95 from "./tx/v1beta1/service.rpc.Service";
import * as _96 from "./upgrade/v1beta1/query.rpc.Query";
import * as _97 from "./authz/v1beta1/tx.rpc.msg";
import * as _98 from "./bank/v1beta1/tx.rpc.msg";
import * as _99 from "./distribution/v1beta1/tx.rpc.msg";
import * as _100 from "./gov/v1beta1/tx.rpc.msg";
import * as _101 from "./staking/v1beta1/tx.rpc.msg";
import * as _102 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _112 from "./rpc.query";
import * as _113 from "./rpc.tx";
export var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._5,
            ..._6,
            ..._7,
            ..._89
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        authz.v1beta1 = {
            ..._8,
            ..._9,
            ..._10,
            ..._11,
            ..._12,
            ..._90,
            ..._97
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
            ..._13,
            ..._14,
            ..._15,
            ..._16,
            ..._17,
            ..._91,
            ..._98
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._18
            };
        })(abci = base.abci || (base.abci = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._19
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v2alpha1 = {
                ..._20
            };
        })(reflection = base.reflection || (base.reflection = {}));
        base.v1beta1 = {
            ..._21
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._22
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._23
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._24
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._25
        };
        crypto.secp256k1 = {
            ..._26
        };
        crypto.secp256r1 = {
            ..._27
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
            ..._28,
            ..._29,
            ..._30,
            ..._31,
            ..._92,
            ..._99
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let gov;
    (function (gov) {
        gov.v1beta1 = {
            ..._32,
            ..._33,
            ..._34,
            ..._35,
            ..._93,
            ..._100
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._36,
            ..._37,
            ..._38,
            ..._39,
            ..._40,
            ..._94,
            ..._101
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._41
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._42,
            ..._43,
            ..._95
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._44,
            ..._45,
            ..._46,
            ..._96,
            ..._102
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    cosmos.ClientFactory = {
        ..._112,
        ..._113
    };
})(cosmos || (cosmos = {}));
//# sourceMappingURL=bundle.js.map