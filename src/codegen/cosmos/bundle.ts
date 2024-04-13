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
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._89
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._90,
      ..._97
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._91,
      ..._98
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._18
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._19
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._20
      };
    }
    export const v1beta1 = {
      ..._21
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._22
    };
    export namespace hd {
      export const v1 = {
        ..._23
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._24
      };
    }
    export const multisig = {
      ..._25
    };
    export const secp256k1 = {
      ..._26
    };
    export const secp256r1 = {
      ..._27
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._92,
      ..._99
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._93,
      ..._100
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._94,
      ..._101
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._41
      };
    }
    export const v1beta1 = {
      ..._42,
      ..._43,
      ..._95
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._44,
      ..._45,
      ..._46,
      ..._96,
      ..._102
    };
  }
  export const ClientFactory = {
    ..._112,
    ..._113
  };
}