import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { SendAuthorization, SendAuthorizationSDKType } from "../../bank/v1beta1/authz";
import { StakeAuthorization, StakeAuthorizationSDKType } from "../../staking/v1beta1/authz";
import { ContractExecutionAuthorization, ContractExecutionAuthorizationSDKType, ContractMigrationAuthorization, ContractMigrationAuthorizationSDKType } from "../../../cosmwasm/wasm/v1/authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { toTimestamp, fromTimestamp } from "../../../helpers";
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
  $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
  /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
  msg: string;
}
export interface GenericAuthorizationProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization";
  value: Uint8Array;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationSDKType {
  $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
  msg: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
  authorization?: GenericAuthorization | SendAuthorization | StakeAuthorization | ContractExecutionAuthorization | ContractMigrationAuthorization | Any | undefined;
  /**
   * time when the grant will expire and will be pruned. If null, then the grant
   * doesn't have a time expiration (other conditions  in `authorization`
   * may apply to invalidate the grant)
   */
  expiration?: Date;
}
export interface GrantProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.Grant";
  value: Uint8Array;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantSDKType {
  authorization?: GenericAuthorizationSDKType | SendAuthorizationSDKType | StakeAuthorizationSDKType | ContractExecutionAuthorizationSDKType | ContractMigrationAuthorizationSDKType | AnySDKType | undefined;
  expiration?: Date;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorization {
  granter: string;
  grantee: string;
  authorization?: GenericAuthorization | SendAuthorization | StakeAuthorization | ContractExecutionAuthorization | ContractMigrationAuthorization | Any | undefined;
  expiration?: Date;
}
export interface GrantAuthorizationProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization";
  value: Uint8Array;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorizationSDKType {
  granter: string;
  grantee: string;
  authorization?: GenericAuthorizationSDKType | SendAuthorizationSDKType | StakeAuthorizationSDKType | ContractExecutionAuthorizationSDKType | ContractMigrationAuthorizationSDKType | AnySDKType | undefined;
  expiration?: Date;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItem {
  /** msg_type_urls contains the list of TypeURL of a sdk.Msg. */
  msgTypeUrls: string[];
}
export interface GrantQueueItemProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem";
  value: Uint8Array;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItemSDKType {
  msg_type_urls: string[];
}
function createBaseGenericAuthorization(): GenericAuthorization {
  return {
    $typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
    msg: ""
  };
}
export const GenericAuthorization = {
  typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
  aminoType: "cosmos-sdk/GenericAuthorization",
  is(o: any): o is GenericAuthorization {
    return o && (o.$typeUrl === GenericAuthorization.typeUrl || typeof o.msg === "string");
  },
  isSDK(o: any): o is GenericAuthorizationSDKType {
    return o && (o.$typeUrl === GenericAuthorization.typeUrl || typeof o.msg === "string");
  },
  encode(message: GenericAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenericAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenericAuthorization>): GenericAuthorization {
    const message = createBaseGenericAuthorization();
    message.msg = object.msg ?? "";
    return message;
  },
  fromProtoMsg(message: GenericAuthorizationProtoMsg): GenericAuthorization {
    return GenericAuthorization.decode(message.value);
  },
  toProto(message: GenericAuthorization): Uint8Array {
    return GenericAuthorization.encode(message).finish();
  },
  toProtoMsg(message: GenericAuthorization): GenericAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
      value: GenericAuthorization.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenericAuthorization.typeUrl, GenericAuthorization);
GlobalDecoderRegistry.registerAminoProtoMapping(GenericAuthorization.aminoType, GenericAuthorization.typeUrl);
function createBaseGrant(): Grant {
  return {
    authorization: undefined,
    expiration: undefined
  };
}
export const Grant = {
  typeUrl: "/cosmos.authz.v1beta1.Grant",
  aminoType: "cosmos-sdk/Grant",
  is(o: any): o is Grant {
    return o && o.$typeUrl === Grant.typeUrl;
  },
  isSDK(o: any): o is GrantSDKType {
    return o && o.$typeUrl === Grant.typeUrl;
  },
  encode(message: Grant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authorization !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.authorization), writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Grant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 2:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Grant>): Grant {
    const message = createBaseGrant();
    message.authorization = object.authorization !== undefined && object.authorization !== null ? GlobalDecoderRegistry.fromPartial(object.authorization) : undefined;
    message.expiration = object.expiration ?? undefined;
    return message;
  },
  fromProtoMsg(message: GrantProtoMsg): Grant {
    return Grant.decode(message.value);
  },
  toProto(message: Grant): Uint8Array {
    return Grant.encode(message).finish();
  },
  toProtoMsg(message: Grant): GrantProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.Grant",
      value: Grant.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Grant.typeUrl, Grant);
GlobalDecoderRegistry.registerAminoProtoMapping(Grant.aminoType, Grant.typeUrl);
function createBaseGrantAuthorization(): GrantAuthorization {
  return {
    granter: "",
    grantee: "",
    authorization: undefined,
    expiration: undefined
  };
}
export const GrantAuthorization = {
  typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
  aminoType: "cosmos-sdk/GrantAuthorization",
  is(o: any): o is GrantAuthorization {
    return o && (o.$typeUrl === GrantAuthorization.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isSDK(o: any): o is GrantAuthorizationSDKType {
    return o && (o.$typeUrl === GrantAuthorization.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  encode(message: GrantAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.authorization !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.authorization), writer.uint32(26).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GrantAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.authorization = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 4:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GrantAuthorization>): GrantAuthorization {
    const message = createBaseGrantAuthorization();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.authorization = object.authorization !== undefined && object.authorization !== null ? GlobalDecoderRegistry.fromPartial(object.authorization) : undefined;
    message.expiration = object.expiration ?? undefined;
    return message;
  },
  fromProtoMsg(message: GrantAuthorizationProtoMsg): GrantAuthorization {
    return GrantAuthorization.decode(message.value);
  },
  toProto(message: GrantAuthorization): Uint8Array {
    return GrantAuthorization.encode(message).finish();
  },
  toProtoMsg(message: GrantAuthorization): GrantAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
      value: GrantAuthorization.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GrantAuthorization.typeUrl, GrantAuthorization);
GlobalDecoderRegistry.registerAminoProtoMapping(GrantAuthorization.aminoType, GrantAuthorization.typeUrl);
function createBaseGrantQueueItem(): GrantQueueItem {
  return {
    msgTypeUrls: []
  };
}
export const GrantQueueItem = {
  typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
  aminoType: "cosmos-sdk/GrantQueueItem",
  is(o: any): o is GrantQueueItem {
    return o && (o.$typeUrl === GrantQueueItem.typeUrl || Array.isArray(o.msgTypeUrls) && (!o.msgTypeUrls.length || typeof o.msgTypeUrls[0] === "string"));
  },
  isSDK(o: any): o is GrantQueueItemSDKType {
    return o && (o.$typeUrl === GrantQueueItem.typeUrl || Array.isArray(o.msg_type_urls) && (!o.msg_type_urls.length || typeof o.msg_type_urls[0] === "string"));
  },
  encode(message: GrantQueueItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.msgTypeUrls) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GrantQueueItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantQueueItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GrantQueueItem>): GrantQueueItem {
    const message = createBaseGrantQueueItem();
    message.msgTypeUrls = object.msgTypeUrls?.map(e => e) || [];
    return message;
  },
  fromProtoMsg(message: GrantQueueItemProtoMsg): GrantQueueItem {
    return GrantQueueItem.decode(message.value);
  },
  toProto(message: GrantQueueItem): Uint8Array {
    return GrantQueueItem.encode(message).finish();
  },
  toProtoMsg(message: GrantQueueItem): GrantQueueItemProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
      value: GrantQueueItem.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GrantQueueItem.typeUrl, GrantQueueItem);
GlobalDecoderRegistry.registerAminoProtoMapping(GrantQueueItem.aminoType, GrantQueueItem.typeUrl);