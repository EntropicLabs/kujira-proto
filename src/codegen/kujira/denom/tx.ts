import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * MsgCreateDenom is the sdk.Msg type for allowing an account to create
 * a new denom.  It requires a sender address and a unique nonce
 * (to allow accounts to create multiple denoms)
 */
export interface MsgCreateDenom {
  sender: string;
  nonce: string;
}
export interface MsgCreateDenomProtoMsg {
  typeUrl: "/kujira.denom.MsgCreateDenom";
  value: Uint8Array;
}
/**
 * MsgCreateDenom is the sdk.Msg type for allowing an account to create
 * a new denom.  It requires a sender address and a unique nonce
 * (to allow accounts to create multiple denoms)
 */
export interface MsgCreateDenomSDKType {
  sender: string;
  nonce: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponse {
  newTokenDenom: string;
}
export interface MsgCreateDenomResponseProtoMsg {
  typeUrl: "/kujira.denom.MsgCreateDenomResponse";
  value: Uint8Array;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponseSDKType {
  new_token_denom: string;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.
 */
export interface MsgMint {
  sender: string;
  amount: Coin;
  recipient: string;
}
export interface MsgMintProtoMsg {
  typeUrl: "/kujira.denom.MsgMint";
  value: Uint8Array;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.
 */
export interface MsgMintSDKType {
  sender: string;
  amount: CoinSDKType;
  recipient: string;
}
export interface MsgMintResponse {}
export interface MsgMintResponseProtoMsg {
  typeUrl: "/kujira.denom.MsgMintResponse";
  value: Uint8Array;
}
export interface MsgMintResponseSDKType {}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurn {
  sender: string;
  amount: Coin;
}
export interface MsgBurnProtoMsg {
  typeUrl: "/kujira.denom.MsgBurn";
  value: Uint8Array;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurnSDKType {
  sender: string;
  amount: CoinSDKType;
}
export interface MsgBurnResponse {}
export interface MsgBurnResponseProtoMsg {
  typeUrl: "/kujira.denom.MsgBurnResponse";
  value: Uint8Array;
}
export interface MsgBurnResponseSDKType {}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdmin {
  sender: string;
  denom: string;
  newAdmin: string;
}
export interface MsgChangeAdminProtoMsg {
  typeUrl: "/kujira.denom.MsgChangeAdmin";
  value: Uint8Array;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdminSDKType {
  sender: string;
  denom: string;
  newAdmin: string;
}
export interface MsgChangeAdminResponse {}
export interface MsgChangeAdminResponseProtoMsg {
  typeUrl: "/kujira.denom.MsgChangeAdminResponse";
  value: Uint8Array;
}
export interface MsgChangeAdminResponseSDKType {}
function createBaseMsgCreateDenom(): MsgCreateDenom {
  return {
    sender: "",
    nonce: ""
  };
}
export const MsgCreateDenom = {
  typeUrl: "/kujira.denom.MsgCreateDenom",
  is(o: any): o is MsgCreateDenom {
    return o && (o.$typeUrl === MsgCreateDenom.typeUrl || typeof o.sender === "string" && typeof o.nonce === "string");
  },
  isSDK(o: any): o is MsgCreateDenomSDKType {
    return o && (o.$typeUrl === MsgCreateDenom.typeUrl || typeof o.sender === "string" && typeof o.nonce === "string");
  },
  encode(message: MsgCreateDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.nonce !== "") {
      writer.uint32(18).string(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.nonce = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateDenom>): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.sender = object.sender ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
  fromProtoMsg(message: MsgCreateDenomProtoMsg): MsgCreateDenom {
    return MsgCreateDenom.decode(message.value);
  },
  toProto(message: MsgCreateDenom): Uint8Array {
    return MsgCreateDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenom): MsgCreateDenomProtoMsg {
    return {
      typeUrl: "/kujira.denom.MsgCreateDenom",
      value: MsgCreateDenom.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateDenom.typeUrl, MsgCreateDenom);
function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return {
    newTokenDenom: ""
  };
}
export const MsgCreateDenomResponse = {
  typeUrl: "/kujira.denom.MsgCreateDenomResponse",
  is(o: any): o is MsgCreateDenomResponse {
    return o && (o.$typeUrl === MsgCreateDenomResponse.typeUrl || typeof o.newTokenDenom === "string");
  },
  isSDK(o: any): o is MsgCreateDenomResponseSDKType {
    return o && (o.$typeUrl === MsgCreateDenomResponse.typeUrl || typeof o.new_token_denom === "string");
  },
  encode(message: MsgCreateDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newTokenDenom !== "") {
      writer.uint32(10).string(message.newTokenDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newTokenDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateDenomResponse>): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    message.newTokenDenom = object.newTokenDenom ?? "";
    return message;
  },
  fromProtoMsg(message: MsgCreateDenomResponseProtoMsg): MsgCreateDenomResponse {
    return MsgCreateDenomResponse.decode(message.value);
  },
  toProto(message: MsgCreateDenomResponse): Uint8Array {
    return MsgCreateDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenomResponse): MsgCreateDenomResponseProtoMsg {
    return {
      typeUrl: "/kujira.denom.MsgCreateDenomResponse",
      value: MsgCreateDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateDenomResponse.typeUrl, MsgCreateDenomResponse);
function createBaseMsgMint(): MsgMint {
  return {
    sender: "",
    amount: Coin.fromPartial({}),
    recipient: ""
  };
}
export const MsgMint = {
  typeUrl: "/kujira.denom.MsgMint",
  is(o: any): o is MsgMint {
    return o && (o.$typeUrl === MsgMint.typeUrl || typeof o.sender === "string" && Coin.is(o.amount) && typeof o.recipient === "string");
  },
  isSDK(o: any): o is MsgMintSDKType {
    return o && (o.$typeUrl === MsgMint.typeUrl || typeof o.sender === "string" && Coin.isSDK(o.amount) && typeof o.recipient === "string");
  },
  encode(message: MsgMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMint>): MsgMint {
    const message = createBaseMsgMint();
    message.sender = object.sender ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromProtoMsg(message: MsgMintProtoMsg): MsgMint {
    return MsgMint.decode(message.value);
  },
  toProto(message: MsgMint): Uint8Array {
    return MsgMint.encode(message).finish();
  },
  toProtoMsg(message: MsgMint): MsgMintProtoMsg {
    return {
      typeUrl: "/kujira.denom.MsgMint",
      value: MsgMint.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgMint.typeUrl, MsgMint);
function createBaseMsgMintResponse(): MsgMintResponse {
  return {};
}
export const MsgMintResponse = {
  typeUrl: "/kujira.denom.MsgMintResponse",
  is(o: any): o is MsgMintResponse {
    return o && o.$typeUrl === MsgMintResponse.typeUrl;
  },
  isSDK(o: any): o is MsgMintResponseSDKType {
    return o && o.$typeUrl === MsgMintResponse.typeUrl;
  },
  encode(_: MsgMintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgMintResponse>): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  },
  fromProtoMsg(message: MsgMintResponseProtoMsg): MsgMintResponse {
    return MsgMintResponse.decode(message.value);
  },
  toProto(message: MsgMintResponse): Uint8Array {
    return MsgMintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintResponse): MsgMintResponseProtoMsg {
    return {
      typeUrl: "/kujira.denom.MsgMintResponse",
      value: MsgMintResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgMintResponse.typeUrl, MsgMintResponse);
function createBaseMsgBurn(): MsgBurn {
  return {
    sender: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgBurn = {
  typeUrl: "/kujira.denom.MsgBurn",
  is(o: any): o is MsgBurn {
    return o && (o.$typeUrl === MsgBurn.typeUrl || typeof o.sender === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgBurnSDKType {
    return o && (o.$typeUrl === MsgBurn.typeUrl || typeof o.sender === "string" && Coin.isSDK(o.amount));
  },
  encode(message: MsgBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.sender = object.sender ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn {
    return MsgBurn.decode(message.value);
  },
  toProto(message: MsgBurn): Uint8Array {
    return MsgBurn.encode(message).finish();
  },
  toProtoMsg(message: MsgBurn): MsgBurnProtoMsg {
    return {
      typeUrl: "/kujira.denom.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBurn.typeUrl, MsgBurn);
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}
export const MsgBurnResponse = {
  typeUrl: "/kujira.denom.MsgBurnResponse",
  is(o: any): o is MsgBurnResponse {
    return o && o.$typeUrl === MsgBurnResponse.typeUrl;
  },
  isSDK(o: any): o is MsgBurnResponseSDKType {
    return o && o.$typeUrl === MsgBurnResponse.typeUrl;
  },
  encode(_: MsgBurnResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse {
    return MsgBurnResponse.decode(message.value);
  },
  toProto(message: MsgBurnResponse): Uint8Array {
    return MsgBurnResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg {
    return {
      typeUrl: "/kujira.denom.MsgBurnResponse",
      value: MsgBurnResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBurnResponse.typeUrl, MsgBurnResponse);
function createBaseMsgChangeAdmin(): MsgChangeAdmin {
  return {
    sender: "",
    denom: "",
    newAdmin: ""
  };
}
export const MsgChangeAdmin = {
  typeUrl: "/kujira.denom.MsgChangeAdmin",
  is(o: any): o is MsgChangeAdmin {
    return o && (o.$typeUrl === MsgChangeAdmin.typeUrl || typeof o.sender === "string" && typeof o.denom === "string" && typeof o.newAdmin === "string");
  },
  isSDK(o: any): o is MsgChangeAdminSDKType {
    return o && (o.$typeUrl === MsgChangeAdmin.typeUrl || typeof o.sender === "string" && typeof o.denom === "string" && typeof o.newAdmin === "string");
  },
  encode(message: MsgChangeAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChangeAdmin>): MsgChangeAdmin {
    const message = createBaseMsgChangeAdmin();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromProtoMsg(message: MsgChangeAdminProtoMsg): MsgChangeAdmin {
    return MsgChangeAdmin.decode(message.value);
  },
  toProto(message: MsgChangeAdmin): Uint8Array {
    return MsgChangeAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeAdmin): MsgChangeAdminProtoMsg {
    return {
      typeUrl: "/kujira.denom.MsgChangeAdmin",
      value: MsgChangeAdmin.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChangeAdmin.typeUrl, MsgChangeAdmin);
function createBaseMsgChangeAdminResponse(): MsgChangeAdminResponse {
  return {};
}
export const MsgChangeAdminResponse = {
  typeUrl: "/kujira.denom.MsgChangeAdminResponse",
  is(o: any): o is MsgChangeAdminResponse {
    return o && o.$typeUrl === MsgChangeAdminResponse.typeUrl;
  },
  isSDK(o: any): o is MsgChangeAdminResponseSDKType {
    return o && o.$typeUrl === MsgChangeAdminResponse.typeUrl;
  },
  encode(_: MsgChangeAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgChangeAdminResponse>): MsgChangeAdminResponse {
    const message = createBaseMsgChangeAdminResponse();
    return message;
  },
  fromProtoMsg(message: MsgChangeAdminResponseProtoMsg): MsgChangeAdminResponse {
    return MsgChangeAdminResponse.decode(message.value);
  },
  toProto(message: MsgChangeAdminResponse): Uint8Array {
    return MsgChangeAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeAdminResponse): MsgChangeAdminResponseProtoMsg {
    return {
      typeUrl: "/kujira.denom.MsgChangeAdminResponse",
      value: MsgChangeAdminResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChangeAdminResponse.typeUrl, MsgChangeAdminResponse);