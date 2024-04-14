import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 *
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorization {
    $typeUrl?: "/cosmos.bank.v1beta1.SendAuthorization";
    spendLimit: Coin[];
}
export interface SendAuthorizationProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.SendAuthorization";
    value: Uint8Array;
}
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 *
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorizationSDKType {
    $typeUrl?: "/cosmos.bank.v1beta1.SendAuthorization";
    spend_limit: CoinSDKType[];
}
export declare const SendAuthorization: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SendAuthorization;
    isSDK(o: any): o is SendAuthorizationSDKType;
    encode(message: SendAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SendAuthorization;
    fromPartial(object: Partial<SendAuthorization>): SendAuthorization;
    fromProtoMsg(message: SendAuthorizationProtoMsg): SendAuthorization;
    toProto(message: SendAuthorization): Uint8Array;
    toProtoMsg(message: SendAuthorization): SendAuthorizationProtoMsg;
};
