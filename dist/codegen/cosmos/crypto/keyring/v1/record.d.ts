import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { BIP44Params, BIP44ParamsSDKType } from "../../hd/v1/hd";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Record is used for representing a key in the keyring. */
export interface Record {
    /** name represents a name of Record */
    name: string;
    /** pub_key represents a public key in any format */
    pubKey?: Any;
    /** local stores the public information about a locally stored key */
    local?: Record_Local;
    /** ledger stores the public information about a Ledger key */
    ledger?: Record_Ledger;
    /** Multi does not store any information. */
    multi?: Record_Multi;
    /** Offline does not store any information. */
    offline?: Record_Offline;
}
export interface RecordProtoMsg {
    typeUrl: "/cosmos.crypto.keyring.v1.Record";
    value: Uint8Array;
}
/** Record is used for representing a key in the keyring. */
export interface RecordSDKType {
    name: string;
    pub_key?: AnySDKType;
    local?: Record_LocalSDKType;
    ledger?: Record_LedgerSDKType;
    multi?: Record_MultiSDKType;
    offline?: Record_OfflineSDKType;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_Local {
    privKey?: Any;
    privKeyType: string;
}
export interface Record_LocalProtoMsg {
    typeUrl: "/cosmos.crypto.keyring.v1.Local";
    value: Uint8Array;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_LocalSDKType {
    priv_key?: AnySDKType;
    priv_key_type: string;
}
/** Ledger item */
export interface Record_Ledger {
    path?: BIP44Params;
}
export interface Record_LedgerProtoMsg {
    typeUrl: "/cosmos.crypto.keyring.v1.Ledger";
    value: Uint8Array;
}
/** Ledger item */
export interface Record_LedgerSDKType {
    path?: BIP44ParamsSDKType;
}
/** Multi item */
export interface Record_Multi {
}
export interface Record_MultiProtoMsg {
    typeUrl: "/cosmos.crypto.keyring.v1.Multi";
    value: Uint8Array;
}
/** Multi item */
export interface Record_MultiSDKType {
}
/** Offline item */
export interface Record_Offline {
}
export interface Record_OfflineProtoMsg {
    typeUrl: "/cosmos.crypto.keyring.v1.Offline";
    value: Uint8Array;
}
/** Offline item */
export interface Record_OfflineSDKType {
}
export declare const Record: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Record;
    isSDK(o: any): o is RecordSDKType;
    encode(message: Record, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Record;
    fromPartial(object: Partial<Record>): Record;
    fromProtoMsg(message: RecordProtoMsg): Record;
    toProto(message: Record): Uint8Array;
    toProtoMsg(message: Record): RecordProtoMsg;
};
export declare const Record_Local: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Record_Local;
    isSDK(o: any): o is Record_LocalSDKType;
    encode(message: Record_Local, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Record_Local;
    fromPartial(object: Partial<Record_Local>): Record_Local;
    fromProtoMsg(message: Record_LocalProtoMsg): Record_Local;
    toProto(message: Record_Local): Uint8Array;
    toProtoMsg(message: Record_Local): Record_LocalProtoMsg;
};
export declare const Record_Ledger: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Record_Ledger;
    isSDK(o: any): o is Record_LedgerSDKType;
    encode(message: Record_Ledger, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Record_Ledger;
    fromPartial(object: Partial<Record_Ledger>): Record_Ledger;
    fromProtoMsg(message: Record_LedgerProtoMsg): Record_Ledger;
    toProto(message: Record_Ledger): Uint8Array;
    toProtoMsg(message: Record_Ledger): Record_LedgerProtoMsg;
};
export declare const Record_Multi: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Record_Multi;
    isSDK(o: any): o is Record_MultiSDKType;
    encode(_: Record_Multi, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Record_Multi;
    fromPartial(_: Partial<Record_Multi>): Record_Multi;
    fromProtoMsg(message: Record_MultiProtoMsg): Record_Multi;
    toProto(message: Record_Multi): Uint8Array;
    toProtoMsg(message: Record_Multi): Record_MultiProtoMsg;
};
export declare const Record_Offline: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Record_Offline;
    isSDK(o: any): o is Record_OfflineSDKType;
    encode(_: Record_Offline, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Record_Offline;
    fromPartial(_: Partial<Record_Offline>): Record_Offline;
    fromProtoMsg(message: Record_OfflineProtoMsg): Record_Offline;
    toProto(message: Record_Offline): Uint8Array;
    toProtoMsg(message: Record_Offline): Record_OfflineProtoMsg;
};
