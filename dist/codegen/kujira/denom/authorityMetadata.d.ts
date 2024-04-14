import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadata {
    /** Can be empty for no admin, or a valid kujira address */
    Admin: string;
}
export interface DenomAuthorityMetadataProtoMsg {
    typeUrl: "/kujira.denom.DenomAuthorityMetadata";
    value: Uint8Array;
}
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadataSDKType {
    Admin: string;
}
export declare const DenomAuthorityMetadata: {
    typeUrl: string;
    is(o: any): o is DenomAuthorityMetadata;
    isSDK(o: any): o is DenomAuthorityMetadataSDKType;
    encode(message: DenomAuthorityMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DenomAuthorityMetadata;
    fromPartial(object: Partial<DenomAuthorityMetadata>): DenomAuthorityMetadata;
    fromProtoMsg(message: DenomAuthorityMetadataProtoMsg): DenomAuthorityMetadata;
    toProto(message: DenomAuthorityMetadata): Uint8Array;
    toProtoMsg(message: DenomAuthorityMetadata): DenomAuthorityMetadataProtoMsg;
};
