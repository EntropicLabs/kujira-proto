import { BinaryReader, BinaryWriter } from "../../../binary";
/** EventGrant is emitted on Msg/Grant */
export interface EventGrant {
    /** Msg type URL for which an autorization is granted */
    msgTypeUrl: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
export interface EventGrantProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.EventGrant";
    value: Uint8Array;
}
/** EventGrant is emitted on Msg/Grant */
export interface EventGrantSDKType {
    msg_type_url: string;
    granter: string;
    grantee: string;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevoke {
    /** Msg type URL for which an autorization is revoked */
    msgTypeUrl: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
export interface EventRevokeProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.EventRevoke";
    value: Uint8Array;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevokeSDKType {
    msg_type_url: string;
    granter: string;
    grantee: string;
}
export declare const EventGrant: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EventGrant;
    isSDK(o: any): o is EventGrantSDKType;
    encode(message: EventGrant, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventGrant;
    fromPartial(object: Partial<EventGrant>): EventGrant;
    fromProtoMsg(message: EventGrantProtoMsg): EventGrant;
    toProto(message: EventGrant): Uint8Array;
    toProtoMsg(message: EventGrant): EventGrantProtoMsg;
};
export declare const EventRevoke: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EventRevoke;
    isSDK(o: any): o is EventRevokeSDKType;
    encode(message: EventRevoke, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventRevoke;
    fromPartial(object: Partial<EventRevoke>): EventRevoke;
    fromProtoMsg(message: EventRevokeProtoMsg): EventRevoke;
    toProto(message: EventRevoke): Uint8Array;
    toProtoMsg(message: EventRevoke): EventRevokeProtoMsg;
};
