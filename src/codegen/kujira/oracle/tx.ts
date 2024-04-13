import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 */
export interface MsgAggregateExchangeRatePrevote {
  hash: string;
  feeder: string;
  validator: string;
}
export interface MsgAggregateExchangeRatePrevoteProtoMsg {
  typeUrl: "/kujira.oracle.MsgAggregateExchangeRatePrevote";
  value: Uint8Array;
}
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 */
export interface MsgAggregateExchangeRatePrevoteSDKType {
  hash: string;
  feeder: string;
  validator: string;
}
/** MsgAggregateExchangeRatePrevoteResponse defines the Msg/AggregateExchangeRatePrevote response type. */
export interface MsgAggregateExchangeRatePrevoteResponse {}
export interface MsgAggregateExchangeRatePrevoteResponseProtoMsg {
  typeUrl: "/kujira.oracle.MsgAggregateExchangeRatePrevoteResponse";
  value: Uint8Array;
}
/** MsgAggregateExchangeRatePrevoteResponse defines the Msg/AggregateExchangeRatePrevote response type. */
export interface MsgAggregateExchangeRatePrevoteResponseSDKType {}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVote {
  salt: string;
  exchangeRates: string;
  feeder: string;
  validator: string;
}
export interface MsgAggregateExchangeRateVoteProtoMsg {
  typeUrl: "/kujira.oracle.MsgAggregateExchangeRateVote";
  value: Uint8Array;
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVoteSDKType {
  salt: string;
  exchange_rates: string;
  feeder: string;
  validator: string;
}
/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponse {}
export interface MsgAggregateExchangeRateVoteResponseProtoMsg {
  typeUrl: "/kujira.oracle.MsgAggregateExchangeRateVoteResponse";
  value: Uint8Array;
}
/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponseSDKType {}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsent {
  operator: string;
  delegate: string;
}
export interface MsgDelegateFeedConsentProtoMsg {
  typeUrl: "/kujira.oracle.MsgDelegateFeedConsent";
  value: Uint8Array;
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsentSDKType {
  operator: string;
  delegate: string;
}
/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponse {}
export interface MsgDelegateFeedConsentResponseProtoMsg {
  typeUrl: "/kujira.oracle.MsgDelegateFeedConsentResponse";
  value: Uint8Array;
}
/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponseSDKType {}
function createBaseMsgAggregateExchangeRatePrevote(): MsgAggregateExchangeRatePrevote {
  return {
    hash: "",
    feeder: "",
    validator: ""
  };
}
export const MsgAggregateExchangeRatePrevote = {
  typeUrl: "/kujira.oracle.MsgAggregateExchangeRatePrevote",
  is(o: any): o is MsgAggregateExchangeRatePrevote {
    return o && (o.$typeUrl === MsgAggregateExchangeRatePrevote.typeUrl || typeof o.hash === "string" && typeof o.feeder === "string" && typeof o.validator === "string");
  },
  isSDK(o: any): o is MsgAggregateExchangeRatePrevoteSDKType {
    return o && (o.$typeUrl === MsgAggregateExchangeRatePrevote.typeUrl || typeof o.hash === "string" && typeof o.feeder === "string" && typeof o.validator === "string");
  },
  encode(message: MsgAggregateExchangeRatePrevote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRatePrevote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRatePrevote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        case 3:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAggregateExchangeRatePrevote>): MsgAggregateExchangeRatePrevote {
    const message = createBaseMsgAggregateExchangeRatePrevote();
    message.hash = object.hash ?? "";
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
  fromProtoMsg(message: MsgAggregateExchangeRatePrevoteProtoMsg): MsgAggregateExchangeRatePrevote {
    return MsgAggregateExchangeRatePrevote.decode(message.value);
  },
  toProto(message: MsgAggregateExchangeRatePrevote): Uint8Array {
    return MsgAggregateExchangeRatePrevote.encode(message).finish();
  },
  toProtoMsg(message: MsgAggregateExchangeRatePrevote): MsgAggregateExchangeRatePrevoteProtoMsg {
    return {
      typeUrl: "/kujira.oracle.MsgAggregateExchangeRatePrevote",
      value: MsgAggregateExchangeRatePrevote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAggregateExchangeRatePrevote.typeUrl, MsgAggregateExchangeRatePrevote);
function createBaseMsgAggregateExchangeRatePrevoteResponse(): MsgAggregateExchangeRatePrevoteResponse {
  return {};
}
export const MsgAggregateExchangeRatePrevoteResponse = {
  typeUrl: "/kujira.oracle.MsgAggregateExchangeRatePrevoteResponse",
  is(o: any): o is MsgAggregateExchangeRatePrevoteResponse {
    return o && o.$typeUrl === MsgAggregateExchangeRatePrevoteResponse.typeUrl;
  },
  isSDK(o: any): o is MsgAggregateExchangeRatePrevoteResponseSDKType {
    return o && o.$typeUrl === MsgAggregateExchangeRatePrevoteResponse.typeUrl;
  },
  encode(_: MsgAggregateExchangeRatePrevoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRatePrevoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRatePrevoteResponse();
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
  fromPartial(_: Partial<MsgAggregateExchangeRatePrevoteResponse>): MsgAggregateExchangeRatePrevoteResponse {
    const message = createBaseMsgAggregateExchangeRatePrevoteResponse();
    return message;
  },
  fromProtoMsg(message: MsgAggregateExchangeRatePrevoteResponseProtoMsg): MsgAggregateExchangeRatePrevoteResponse {
    return MsgAggregateExchangeRatePrevoteResponse.decode(message.value);
  },
  toProto(message: MsgAggregateExchangeRatePrevoteResponse): Uint8Array {
    return MsgAggregateExchangeRatePrevoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAggregateExchangeRatePrevoteResponse): MsgAggregateExchangeRatePrevoteResponseProtoMsg {
    return {
      typeUrl: "/kujira.oracle.MsgAggregateExchangeRatePrevoteResponse",
      value: MsgAggregateExchangeRatePrevoteResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAggregateExchangeRatePrevoteResponse.typeUrl, MsgAggregateExchangeRatePrevoteResponse);
function createBaseMsgAggregateExchangeRateVote(): MsgAggregateExchangeRateVote {
  return {
    salt: "",
    exchangeRates: "",
    feeder: "",
    validator: ""
  };
}
export const MsgAggregateExchangeRateVote = {
  typeUrl: "/kujira.oracle.MsgAggregateExchangeRateVote",
  is(o: any): o is MsgAggregateExchangeRateVote {
    return o && (o.$typeUrl === MsgAggregateExchangeRateVote.typeUrl || typeof o.salt === "string" && typeof o.exchangeRates === "string" && typeof o.feeder === "string" && typeof o.validator === "string");
  },
  isSDK(o: any): o is MsgAggregateExchangeRateVoteSDKType {
    return o && (o.$typeUrl === MsgAggregateExchangeRateVote.typeUrl || typeof o.salt === "string" && typeof o.exchange_rates === "string" && typeof o.feeder === "string" && typeof o.validator === "string");
  },
  encode(message: MsgAggregateExchangeRateVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.salt !== "") {
      writer.uint32(10).string(message.salt);
    }
    if (message.exchangeRates !== "") {
      writer.uint32(18).string(message.exchangeRates);
    }
    if (message.feeder !== "") {
      writer.uint32(26).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRateVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.salt = reader.string();
          break;
        case 2:
          message.exchangeRates = reader.string();
          break;
        case 3:
          message.feeder = reader.string();
          break;
        case 4:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAggregateExchangeRateVote>): MsgAggregateExchangeRateVote {
    const message = createBaseMsgAggregateExchangeRateVote();
    message.salt = object.salt ?? "";
    message.exchangeRates = object.exchangeRates ?? "";
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
  fromProtoMsg(message: MsgAggregateExchangeRateVoteProtoMsg): MsgAggregateExchangeRateVote {
    return MsgAggregateExchangeRateVote.decode(message.value);
  },
  toProto(message: MsgAggregateExchangeRateVote): Uint8Array {
    return MsgAggregateExchangeRateVote.encode(message).finish();
  },
  toProtoMsg(message: MsgAggregateExchangeRateVote): MsgAggregateExchangeRateVoteProtoMsg {
    return {
      typeUrl: "/kujira.oracle.MsgAggregateExchangeRateVote",
      value: MsgAggregateExchangeRateVote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAggregateExchangeRateVote.typeUrl, MsgAggregateExchangeRateVote);
function createBaseMsgAggregateExchangeRateVoteResponse(): MsgAggregateExchangeRateVoteResponse {
  return {};
}
export const MsgAggregateExchangeRateVoteResponse = {
  typeUrl: "/kujira.oracle.MsgAggregateExchangeRateVoteResponse",
  is(o: any): o is MsgAggregateExchangeRateVoteResponse {
    return o && o.$typeUrl === MsgAggregateExchangeRateVoteResponse.typeUrl;
  },
  isSDK(o: any): o is MsgAggregateExchangeRateVoteResponseSDKType {
    return o && o.$typeUrl === MsgAggregateExchangeRateVoteResponse.typeUrl;
  },
  encode(_: MsgAggregateExchangeRateVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRateVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRateVoteResponse();
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
  fromPartial(_: Partial<MsgAggregateExchangeRateVoteResponse>): MsgAggregateExchangeRateVoteResponse {
    const message = createBaseMsgAggregateExchangeRateVoteResponse();
    return message;
  },
  fromProtoMsg(message: MsgAggregateExchangeRateVoteResponseProtoMsg): MsgAggregateExchangeRateVoteResponse {
    return MsgAggregateExchangeRateVoteResponse.decode(message.value);
  },
  toProto(message: MsgAggregateExchangeRateVoteResponse): Uint8Array {
    return MsgAggregateExchangeRateVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAggregateExchangeRateVoteResponse): MsgAggregateExchangeRateVoteResponseProtoMsg {
    return {
      typeUrl: "/kujira.oracle.MsgAggregateExchangeRateVoteResponse",
      value: MsgAggregateExchangeRateVoteResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAggregateExchangeRateVoteResponse.typeUrl, MsgAggregateExchangeRateVoteResponse);
function createBaseMsgDelegateFeedConsent(): MsgDelegateFeedConsent {
  return {
    operator: "",
    delegate: ""
  };
}
export const MsgDelegateFeedConsent = {
  typeUrl: "/kujira.oracle.MsgDelegateFeedConsent",
  is(o: any): o is MsgDelegateFeedConsent {
    return o && (o.$typeUrl === MsgDelegateFeedConsent.typeUrl || typeof o.operator === "string" && typeof o.delegate === "string");
  },
  isSDK(o: any): o is MsgDelegateFeedConsentSDKType {
    return o && (o.$typeUrl === MsgDelegateFeedConsent.typeUrl || typeof o.operator === "string" && typeof o.delegate === "string");
  },
  encode(message: MsgDelegateFeedConsent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateFeedConsent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateFeedConsent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.delegate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDelegateFeedConsent>): MsgDelegateFeedConsent {
    const message = createBaseMsgDelegateFeedConsent();
    message.operator = object.operator ?? "";
    message.delegate = object.delegate ?? "";
    return message;
  },
  fromProtoMsg(message: MsgDelegateFeedConsentProtoMsg): MsgDelegateFeedConsent {
    return MsgDelegateFeedConsent.decode(message.value);
  },
  toProto(message: MsgDelegateFeedConsent): Uint8Array {
    return MsgDelegateFeedConsent.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateFeedConsent): MsgDelegateFeedConsentProtoMsg {
    return {
      typeUrl: "/kujira.oracle.MsgDelegateFeedConsent",
      value: MsgDelegateFeedConsent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDelegateFeedConsent.typeUrl, MsgDelegateFeedConsent);
function createBaseMsgDelegateFeedConsentResponse(): MsgDelegateFeedConsentResponse {
  return {};
}
export const MsgDelegateFeedConsentResponse = {
  typeUrl: "/kujira.oracle.MsgDelegateFeedConsentResponse",
  is(o: any): o is MsgDelegateFeedConsentResponse {
    return o && o.$typeUrl === MsgDelegateFeedConsentResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDelegateFeedConsentResponseSDKType {
    return o && o.$typeUrl === MsgDelegateFeedConsentResponse.typeUrl;
  },
  encode(_: MsgDelegateFeedConsentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateFeedConsentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateFeedConsentResponse();
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
  fromPartial(_: Partial<MsgDelegateFeedConsentResponse>): MsgDelegateFeedConsentResponse {
    const message = createBaseMsgDelegateFeedConsentResponse();
    return message;
  },
  fromProtoMsg(message: MsgDelegateFeedConsentResponseProtoMsg): MsgDelegateFeedConsentResponse {
    return MsgDelegateFeedConsentResponse.decode(message.value);
  },
  toProto(message: MsgDelegateFeedConsentResponse): Uint8Array {
    return MsgDelegateFeedConsentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateFeedConsentResponse): MsgDelegateFeedConsentResponseProtoMsg {
    return {
      typeUrl: "/kujira.oracle.MsgDelegateFeedConsentResponse",
      value: MsgDelegateFeedConsentResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDelegateFeedConsentResponse.typeUrl, MsgDelegateFeedConsentResponse);