import { BinaryReader } from "../../binary";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createDenom = this.createDenom.bind(this);
        this.mint = this.mint.bind(this);
        this.burn = this.burn.bind(this);
        this.changeAdmin = this.changeAdmin.bind(this);
    }
    createDenom(request) {
        const data = MsgCreateDenom.encode(request).finish();
        const promise = this.rpc.request("kujira.denom.Msg", "CreateDenom", data);
        return promise.then(data => MsgCreateDenomResponse.decode(new BinaryReader(data)));
    }
    mint(request) {
        const data = MsgMint.encode(request).finish();
        const promise = this.rpc.request("kujira.denom.Msg", "Mint", data);
        return promise.then(data => MsgMintResponse.decode(new BinaryReader(data)));
    }
    burn(request) {
        const data = MsgBurn.encode(request).finish();
        const promise = this.rpc.request("kujira.denom.Msg", "Burn", data);
        return promise.then(data => MsgBurnResponse.decode(new BinaryReader(data)));
    }
    changeAdmin(request) {
        const data = MsgChangeAdmin.encode(request).finish();
        const promise = this.rpc.request("kujira.denom.Msg", "ChangeAdmin", data);
        return promise.then(data => MsgChangeAdminResponse.decode(new BinaryReader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map