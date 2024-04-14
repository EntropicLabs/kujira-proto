import { Params, ParamsSDKType } from "./params";
import { Hook, HookSDKType } from "./hook";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the scheduler module's genesis state. */
export interface GenesisState {
    params: Params;
    hookList: Hook[];
    hookCount: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kujira.scheduler.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the scheduler module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    hookList: HookSDKType[];
    hookCount: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    is(o: any): o is GenesisState;
    isSDK(o: any): o is GenesisStateSDKType;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
