import { Plan, PlanSDKType } from "./upgrade";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgrade {
    /** authority is the address of the governance account. */
    authority: string;
    /** plan is the upgrade plan. */
    plan: Plan;
}
export interface MsgSoftwareUpgradeProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade";
    value: Uint8Array;
}
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeSDKType {
    authority: string;
    plan: PlanSDKType;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponse {
}
export interface MsgSoftwareUpgradeResponseProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse";
    value: Uint8Array;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponseSDKType {
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgrade {
    /** authority is the address of the governance account. */
    authority: string;
}
export interface MsgCancelUpgradeProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade";
    value: Uint8Array;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeSDKType {
    authority: string;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponse {
}
export interface MsgCancelUpgradeResponseProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse";
    value: Uint8Array;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponseSDKType {
}
export declare const MsgSoftwareUpgrade: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSoftwareUpgrade;
    isSDK(o: any): o is MsgSoftwareUpgradeSDKType;
    encode(message: MsgSoftwareUpgrade, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSoftwareUpgrade;
    fromPartial(object: Partial<MsgSoftwareUpgrade>): MsgSoftwareUpgrade;
    fromProtoMsg(message: MsgSoftwareUpgradeProtoMsg): MsgSoftwareUpgrade;
    toProto(message: MsgSoftwareUpgrade): Uint8Array;
    toProtoMsg(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeProtoMsg;
};
export declare const MsgSoftwareUpgradeResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSoftwareUpgradeResponse;
    isSDK(o: any): o is MsgSoftwareUpgradeResponseSDKType;
    encode(_: MsgSoftwareUpgradeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSoftwareUpgradeResponse;
    fromPartial(_: Partial<MsgSoftwareUpgradeResponse>): MsgSoftwareUpgradeResponse;
    fromProtoMsg(message: MsgSoftwareUpgradeResponseProtoMsg): MsgSoftwareUpgradeResponse;
    toProto(message: MsgSoftwareUpgradeResponse): Uint8Array;
    toProtoMsg(message: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseProtoMsg;
};
export declare const MsgCancelUpgrade: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCancelUpgrade;
    isSDK(o: any): o is MsgCancelUpgradeSDKType;
    encode(message: MsgCancelUpgrade, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUpgrade;
    fromPartial(object: Partial<MsgCancelUpgrade>): MsgCancelUpgrade;
    fromProtoMsg(message: MsgCancelUpgradeProtoMsg): MsgCancelUpgrade;
    toProto(message: MsgCancelUpgrade): Uint8Array;
    toProtoMsg(message: MsgCancelUpgrade): MsgCancelUpgradeProtoMsg;
};
export declare const MsgCancelUpgradeResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCancelUpgradeResponse;
    isSDK(o: any): o is MsgCancelUpgradeResponseSDKType;
    encode(_: MsgCancelUpgradeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUpgradeResponse;
    fromPartial(_: Partial<MsgCancelUpgradeResponse>): MsgCancelUpgradeResponse;
    fromProtoMsg(message: MsgCancelUpgradeResponseProtoMsg): MsgCancelUpgradeResponse;
    toProto(message: MsgCancelUpgradeResponse): Uint8Array;
    toProtoMsg(message: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseProtoMsg;
};
