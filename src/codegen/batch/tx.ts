import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../binary";
import { GlobalDecoderRegistry } from "../registry";
/**
 * MsgWithdrawAllDelegatorRewards represents delegation withdrawal to a delegator
 * from all staked validators.
 */
export interface MsgWithdrawAllDelegatorRewards {
  delegatorAddress: string;
}
export interface MsgWithdrawAllDelegatorRewardsProtoMsg {
  typeUrl: "/batch.MsgWithdrawAllDelegatorRewards";
  value: Uint8Array;
}
/**
 * MsgWithdrawAllDelegatorRewards represents delegation withdrawal to a delegator
 * from all staked validators.
 */
export interface MsgWithdrawAllDelegatorRewardsSDKType {
  delegator_address: string;
}
/** MsgWithdrawAllDelegatorRewardsResponse defines the Msg/WithdrawAllDelegatorRewards response type. */
export interface MsgWithdrawAllDelegatorRewardsResponse {
  amount: Coin[];
}
export interface MsgWithdrawAllDelegatorRewardsResponseProtoMsg {
  typeUrl: "/batch.MsgWithdrawAllDelegatorRewardsResponse";
  value: Uint8Array;
}
/** MsgWithdrawAllDelegatorRewardsResponse defines the Msg/WithdrawAllDelegatorRewards response type. */
export interface MsgWithdrawAllDelegatorRewardsResponseSDKType {
  amount: CoinSDKType[];
}
export interface MsgBatchResetDelegation {
  delegatorAddress: string;
  validators: string[];
  amounts: string[];
}
export interface MsgBatchResetDelegationProtoMsg {
  typeUrl: "/batch.MsgBatchResetDelegation";
  value: Uint8Array;
}
export interface MsgBatchResetDelegationSDKType {
  delegator_address: string;
  validators: string[];
  amounts: string[];
}
export interface MsgBatchResetDelegationResponse {}
export interface MsgBatchResetDelegationResponseProtoMsg {
  typeUrl: "/batch.MsgBatchResetDelegationResponse";
  value: Uint8Array;
}
export interface MsgBatchResetDelegationResponseSDKType {}
function createBaseMsgWithdrawAllDelegatorRewards(): MsgWithdrawAllDelegatorRewards {
  return {
    delegatorAddress: ""
  };
}
export const MsgWithdrawAllDelegatorRewards = {
  typeUrl: "/batch.MsgWithdrawAllDelegatorRewards",
  is(o: any): o is MsgWithdrawAllDelegatorRewards {
    return o && (o.$typeUrl === MsgWithdrawAllDelegatorRewards.typeUrl || typeof o.delegatorAddress === "string");
  },
  isSDK(o: any): o is MsgWithdrawAllDelegatorRewardsSDKType {
    return o && (o.$typeUrl === MsgWithdrawAllDelegatorRewards.typeUrl || typeof o.delegator_address === "string");
  },
  encode(message: MsgWithdrawAllDelegatorRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawAllDelegatorRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllDelegatorRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawAllDelegatorRewards>): MsgWithdrawAllDelegatorRewards {
    const message = createBaseMsgWithdrawAllDelegatorRewards();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromProtoMsg(message: MsgWithdrawAllDelegatorRewardsProtoMsg): MsgWithdrawAllDelegatorRewards {
    return MsgWithdrawAllDelegatorRewards.decode(message.value);
  },
  toProto(message: MsgWithdrawAllDelegatorRewards): Uint8Array {
    return MsgWithdrawAllDelegatorRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawAllDelegatorRewards): MsgWithdrawAllDelegatorRewardsProtoMsg {
    return {
      typeUrl: "/batch.MsgWithdrawAllDelegatorRewards",
      value: MsgWithdrawAllDelegatorRewards.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWithdrawAllDelegatorRewards.typeUrl, MsgWithdrawAllDelegatorRewards);
function createBaseMsgWithdrawAllDelegatorRewardsResponse(): MsgWithdrawAllDelegatorRewardsResponse {
  return {
    amount: []
  };
}
export const MsgWithdrawAllDelegatorRewardsResponse = {
  typeUrl: "/batch.MsgWithdrawAllDelegatorRewardsResponse",
  is(o: any): o is MsgWithdrawAllDelegatorRewardsResponse {
    return o && (o.$typeUrl === MsgWithdrawAllDelegatorRewardsResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is MsgWithdrawAllDelegatorRewardsResponseSDKType {
    return o && (o.$typeUrl === MsgWithdrawAllDelegatorRewardsResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  encode(message: MsgWithdrawAllDelegatorRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawAllDelegatorRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllDelegatorRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawAllDelegatorRewardsResponse>): MsgWithdrawAllDelegatorRewardsResponse {
    const message = createBaseMsgWithdrawAllDelegatorRewardsResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: MsgWithdrawAllDelegatorRewardsResponseProtoMsg): MsgWithdrawAllDelegatorRewardsResponse {
    return MsgWithdrawAllDelegatorRewardsResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawAllDelegatorRewardsResponse): Uint8Array {
    return MsgWithdrawAllDelegatorRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawAllDelegatorRewardsResponse): MsgWithdrawAllDelegatorRewardsResponseProtoMsg {
    return {
      typeUrl: "/batch.MsgWithdrawAllDelegatorRewardsResponse",
      value: MsgWithdrawAllDelegatorRewardsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWithdrawAllDelegatorRewardsResponse.typeUrl, MsgWithdrawAllDelegatorRewardsResponse);
function createBaseMsgBatchResetDelegation(): MsgBatchResetDelegation {
  return {
    delegatorAddress: "",
    validators: [],
    amounts: []
  };
}
export const MsgBatchResetDelegation = {
  typeUrl: "/batch.MsgBatchResetDelegation",
  is(o: any): o is MsgBatchResetDelegation {
    return o && (o.$typeUrl === MsgBatchResetDelegation.typeUrl || typeof o.delegatorAddress === "string" && Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string") && Array.isArray(o.amounts) && (!o.amounts.length || typeof o.amounts[0] === "string"));
  },
  isSDK(o: any): o is MsgBatchResetDelegationSDKType {
    return o && (o.$typeUrl === MsgBatchResetDelegation.typeUrl || typeof o.delegator_address === "string" && Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string") && Array.isArray(o.amounts) && (!o.amounts.length || typeof o.amounts[0] === "string"));
  },
  encode(message: MsgBatchResetDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    for (const v of message.validators) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.amounts) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBatchResetDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchResetDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validators.push(reader.string());
          break;
        case 3:
          message.amounts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBatchResetDelegation>): MsgBatchResetDelegation {
    const message = createBaseMsgBatchResetDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validators = object.validators?.map(e => e) || [];
    message.amounts = object.amounts?.map(e => e) || [];
    return message;
  },
  fromProtoMsg(message: MsgBatchResetDelegationProtoMsg): MsgBatchResetDelegation {
    return MsgBatchResetDelegation.decode(message.value);
  },
  toProto(message: MsgBatchResetDelegation): Uint8Array {
    return MsgBatchResetDelegation.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchResetDelegation): MsgBatchResetDelegationProtoMsg {
    return {
      typeUrl: "/batch.MsgBatchResetDelegation",
      value: MsgBatchResetDelegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBatchResetDelegation.typeUrl, MsgBatchResetDelegation);
function createBaseMsgBatchResetDelegationResponse(): MsgBatchResetDelegationResponse {
  return {};
}
export const MsgBatchResetDelegationResponse = {
  typeUrl: "/batch.MsgBatchResetDelegationResponse",
  is(o: any): o is MsgBatchResetDelegationResponse {
    return o && o.$typeUrl === MsgBatchResetDelegationResponse.typeUrl;
  },
  isSDK(o: any): o is MsgBatchResetDelegationResponseSDKType {
    return o && o.$typeUrl === MsgBatchResetDelegationResponse.typeUrl;
  },
  encode(_: MsgBatchResetDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBatchResetDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchResetDelegationResponse();
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
  fromPartial(_: Partial<MsgBatchResetDelegationResponse>): MsgBatchResetDelegationResponse {
    const message = createBaseMsgBatchResetDelegationResponse();
    return message;
  },
  fromProtoMsg(message: MsgBatchResetDelegationResponseProtoMsg): MsgBatchResetDelegationResponse {
    return MsgBatchResetDelegationResponse.decode(message.value);
  },
  toProto(message: MsgBatchResetDelegationResponse): Uint8Array {
    return MsgBatchResetDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchResetDelegationResponse): MsgBatchResetDelegationResponseProtoMsg {
    return {
      typeUrl: "/batch.MsgBatchResetDelegationResponse",
      value: MsgBatchResetDelegationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBatchResetDelegationResponse.typeUrl, MsgBatchResetDelegationResponse);