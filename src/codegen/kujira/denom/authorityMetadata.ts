import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
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
function createBaseDenomAuthorityMetadata(): DenomAuthorityMetadata {
  return {
    Admin: ""
  };
}
export const DenomAuthorityMetadata = {
  typeUrl: "/kujira.denom.DenomAuthorityMetadata",
  is(o: any): o is DenomAuthorityMetadata {
    return o && (o.$typeUrl === DenomAuthorityMetadata.typeUrl || typeof o.Admin === "string");
  },
  isSDK(o: any): o is DenomAuthorityMetadataSDKType {
    return o && (o.$typeUrl === DenomAuthorityMetadata.typeUrl || typeof o.Admin === "string");
  },
  encode(message: DenomAuthorityMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Admin !== "") {
      writer.uint32(10).string(message.Admin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomAuthorityMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomAuthorityMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Admin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomAuthorityMetadata>): DenomAuthorityMetadata {
    const message = createBaseDenomAuthorityMetadata();
    message.Admin = object.Admin ?? "";
    return message;
  },
  fromProtoMsg(message: DenomAuthorityMetadataProtoMsg): DenomAuthorityMetadata {
    return DenomAuthorityMetadata.decode(message.value);
  },
  toProto(message: DenomAuthorityMetadata): Uint8Array {
    return DenomAuthorityMetadata.encode(message).finish();
  },
  toProtoMsg(message: DenomAuthorityMetadata): DenomAuthorityMetadataProtoMsg {
    return {
      typeUrl: "/kujira.denom.DenomAuthorityMetadata",
      value: DenomAuthorityMetadata.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DenomAuthorityMetadata.typeUrl, DenomAuthorityMetadata);