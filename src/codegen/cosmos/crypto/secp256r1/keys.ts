import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKey {
  /**
   * Point on secp256r1 curve in a compressed representation as specified in section
   * 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998
   */
  key: Uint8Array;
}
export interface PubKeyProtoMsg {
  typeUrl: "/cosmos.crypto.secp256r1.PubKey";
  value: Uint8Array;
}
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKeySDKType {
  key: Uint8Array;
}
/** PrivKey defines a secp256r1 ECDSA private key. */
export interface PrivKey {
  /** secret number serialized using big-endian encoding */
  secret: Uint8Array;
}
export interface PrivKeyProtoMsg {
  typeUrl: "/cosmos.crypto.secp256r1.PrivKey";
  value: Uint8Array;
}
/** PrivKey defines a secp256r1 ECDSA private key. */
export interface PrivKeySDKType {
  secret: Uint8Array;
}
function createBasePubKey(): PubKey {
  return {
    key: new Uint8Array()
  };
}
export const PubKey = {
  typeUrl: "/cosmos.crypto.secp256r1.PubKey",
  aminoType: "cosmos-sdk/PubKey",
  is(o: any): o is PubKey {
    return o && (o.$typeUrl === PubKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  isSDK(o: any): o is PubKeySDKType {
    return o && (o.$typeUrl === PubKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  encode(message: PubKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PubKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PubKey>): PubKey {
    const message = createBasePubKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: PubKeyProtoMsg): PubKey {
    return PubKey.decode(message.value);
  },
  toProto(message: PubKey): Uint8Array {
    return PubKey.encode(message).finish();
  },
  toProtoMsg(message: PubKey): PubKeyProtoMsg {
    return {
      typeUrl: "/cosmos.crypto.secp256r1.PubKey",
      value: PubKey.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PubKey.typeUrl, PubKey);
GlobalDecoderRegistry.registerAminoProtoMapping(PubKey.aminoType, PubKey.typeUrl);
function createBasePrivKey(): PrivKey {
  return {
    secret: new Uint8Array()
  };
}
export const PrivKey = {
  typeUrl: "/cosmos.crypto.secp256r1.PrivKey",
  aminoType: "cosmos-sdk/PrivKey",
  is(o: any): o is PrivKey {
    return o && (o.$typeUrl === PrivKey.typeUrl || o.secret instanceof Uint8Array || typeof o.secret === "string");
  },
  isSDK(o: any): o is PrivKeySDKType {
    return o && (o.$typeUrl === PrivKey.typeUrl || o.secret instanceof Uint8Array || typeof o.secret === "string");
  },
  encode(message: PrivKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.secret.length !== 0) {
      writer.uint32(10).bytes(message.secret);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrivKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secret = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PrivKey>): PrivKey {
    const message = createBasePrivKey();
    message.secret = object.secret ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: PrivKeyProtoMsg): PrivKey {
    return PrivKey.decode(message.value);
  },
  toProto(message: PrivKey): Uint8Array {
    return PrivKey.encode(message).finish();
  },
  toProtoMsg(message: PrivKey): PrivKeyProtoMsg {
    return {
      typeUrl: "/cosmos.crypto.secp256r1.PrivKey",
      value: PrivKey.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PrivKey.typeUrl, PrivKey);
GlobalDecoderRegistry.registerAminoProtoMapping(PrivKey.aminoType, PrivKey.typeUrl);