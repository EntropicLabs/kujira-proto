import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface Hook {
    id: bigint;
    executor: string;
    contract: string;
    msg: Uint8Array;
    frequency: bigint;
    funds: Coin[];
}
export interface HookProtoMsg {
    typeUrl: "/kujira.scheduler.Hook";
    value: Uint8Array;
}
export interface HookSDKType {
    id: bigint;
    executor: string;
    contract: string;
    msg: Uint8Array;
    frequency: bigint;
    funds: CoinSDKType[];
}
export declare const Hook: {
    typeUrl: string;
    is(o: any): o is Hook;
    isSDK(o: any): o is HookSDKType;
    encode(message: Hook, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Hook;
    fromPartial(object: Partial<Hook>): Hook;
    fromProtoMsg(message: HookProtoMsg): Hook;
    toProto(message: Hook): Uint8Array;
    toProtoMsg(message: Hook): HookProtoMsg;
};
