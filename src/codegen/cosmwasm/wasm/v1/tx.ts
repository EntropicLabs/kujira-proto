import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCode {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /**
   * InstantiatePermission access control to apply on contract creation,
   * optional
   */
  instantiatePermission?: AccessConfig;
}
export interface MsgStoreCodeProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode";
  value: Uint8Array;
}
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCodeSDKType {
  sender: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission?: AccessConfigSDKType;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponse {
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
  /** Checksum is the sha256 hash of the stored code */
  checksum: Uint8Array;
}
export interface MsgStoreCodeResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse";
  value: Uint8Array;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseSDKType {
  code_id: bigint;
  checksum: Uint8Array;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
  /** Label is optional metadata to be stored with a contract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}
export interface MsgInstantiateContractProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract";
  value: Uint8Array;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContractSDKType {
  sender: string;
  admin: string;
  code_id: bigint;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2 {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
  /** Label is optional metadata to be stored with a contract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
  /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
  salt: Uint8Array;
  /**
   * FixMsg include the msg value into the hash for the predictable address.
   * Default is false
   */
  fixMsg: boolean;
}
export interface MsgInstantiateContract2ProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2";
  value: Uint8Array;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2SDKType {
  sender: string;
  admin: string;
  code_id: bigint;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
  salt: Uint8Array;
  fix_msg: boolean;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponse {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgInstantiateContractResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse";
  value: Uint8Array;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponseSDKType {
  address: string;
  data: Uint8Array;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2Response {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgInstantiateContract2ResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2Response";
  value: Uint8Array;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2ResponseSDKType {
  address: string;
  data: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */
  funds: Coin[];
}
export interface MsgExecuteContractProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract";
  value: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContractSDKType {
  sender: string;
  contract: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponse {
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgExecuteContractResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse";
  value: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponseSDKType {
  data: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** CodeID references the new WASM code */
  codeId: bigint;
  /** Msg json encoded message to be passed to the contract on migration */
  msg: Uint8Array;
}
export interface MsgMigrateContractProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract";
  value: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContractSDKType {
  sender: string;
  contract: string;
  code_id: bigint;
  msg: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponse {
  /**
   * Data contains same raw bytes returned as data from the wasm contract.
   * (May be empty)
   */
  data: Uint8Array;
}
export interface MsgMigrateContractResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse";
  value: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponseSDKType {
  data: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdmin {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** NewAdmin address to be set */
  newAdmin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface MsgUpdateAdminProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin";
  value: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdminSDKType {
  sender: string;
  new_admin: string;
  contract: string;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponse {}
export interface MsgUpdateAdminResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse";
  value: Uint8Array;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponseSDKType {}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdmin {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface MsgClearAdminProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin";
  value: Uint8Array;
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdminSDKType {
  sender: string;
  contract: string;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponse {}
export interface MsgClearAdminResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse";
  value: Uint8Array;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponseSDKType {}
function createBaseMsgStoreCode(): MsgStoreCode {
  return {
    sender: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: undefined
  };
}
export const MsgStoreCode = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
  aminoType: "wasm/MsgStoreCode",
  is(o: any): o is MsgStoreCode {
    return o && (o.$typeUrl === MsgStoreCode.typeUrl || typeof o.sender === "string" && (o.wasmByteCode instanceof Uint8Array || typeof o.wasmByteCode === "string"));
  },
  isSDK(o: any): o is MsgStoreCodeSDKType {
    return o && (o.$typeUrl === MsgStoreCode.typeUrl || typeof o.sender === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string"));
  },
  encode(message: MsgStoreCode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.wasmByteCode = reader.bytes();
          break;
        case 5:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgStoreCode>): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    message.sender = object.sender ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  },
  fromProtoMsg(message: MsgStoreCodeProtoMsg): MsgStoreCode {
    return MsgStoreCode.decode(message.value);
  },
  toProto(message: MsgStoreCode): Uint8Array {
    return MsgStoreCode.encode(message).finish();
  },
  toProtoMsg(message: MsgStoreCode): MsgStoreCodeProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
      value: MsgStoreCode.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgStoreCode.typeUrl, MsgStoreCode);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgStoreCode.aminoType, MsgStoreCode.typeUrl);
function createBaseMsgStoreCodeResponse(): MsgStoreCodeResponse {
  return {
    codeId: BigInt(0),
    checksum: new Uint8Array()
  };
}
export const MsgStoreCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse",
  aminoType: "wasm/MsgStoreCodeResponse",
  is(o: any): o is MsgStoreCodeResponse {
    return o && (o.$typeUrl === MsgStoreCodeResponse.typeUrl || typeof o.codeId === "bigint" && (o.checksum instanceof Uint8Array || typeof o.checksum === "string"));
  },
  isSDK(o: any): o is MsgStoreCodeResponseSDKType {
    return o && (o.$typeUrl === MsgStoreCodeResponse.typeUrl || typeof o.code_id === "bigint" && (o.checksum instanceof Uint8Array || typeof o.checksum === "string"));
  },
  encode(message: MsgStoreCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.checksum = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgStoreCodeResponse>): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.checksum = object.checksum ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: MsgStoreCodeResponseProtoMsg): MsgStoreCodeResponse {
    return MsgStoreCodeResponse.decode(message.value);
  },
  toProto(message: MsgStoreCodeResponse): Uint8Array {
    return MsgStoreCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse",
      value: MsgStoreCodeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgStoreCodeResponse.typeUrl, MsgStoreCodeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgStoreCodeResponse.aminoType, MsgStoreCodeResponse.typeUrl);
function createBaseMsgInstantiateContract(): MsgInstantiateContract {
  return {
    sender: "",
    admin: "",
    codeId: BigInt(0),
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const MsgInstantiateContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
  aminoType: "wasm/MsgInstantiateContract",
  is(o: any): o is MsgInstantiateContract {
    return o && (o.$typeUrl === MsgInstantiateContract.typeUrl || typeof o.sender === "string" && typeof o.admin === "string" && typeof o.codeId === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])));
  },
  isSDK(o: any): o is MsgInstantiateContractSDKType {
    return o && (o.$typeUrl === MsgInstantiateContract.typeUrl || typeof o.sender === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])));
  },
  encode(message: MsgInstantiateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.codeId = reader.uint64();
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgInstantiateContract>): MsgInstantiateContract {
    const message = createBaseMsgInstantiateContract();
    message.sender = object.sender ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: MsgInstantiateContractProtoMsg): MsgInstantiateContract {
    return MsgInstantiateContract.decode(message.value);
  },
  toProto(message: MsgInstantiateContract): Uint8Array {
    return MsgInstantiateContract.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateContract): MsgInstantiateContractProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
      value: MsgInstantiateContract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInstantiateContract.typeUrl, MsgInstantiateContract);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInstantiateContract.aminoType, MsgInstantiateContract.typeUrl);
function createBaseMsgInstantiateContract2(): MsgInstantiateContract2 {
  return {
    sender: "",
    admin: "",
    codeId: BigInt(0),
    label: "",
    msg: new Uint8Array(),
    funds: [],
    salt: new Uint8Array(),
    fixMsg: false
  };
}
export const MsgInstantiateContract2 = {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
  aminoType: "wasm/MsgInstantiateContract2",
  is(o: any): o is MsgInstantiateContract2 {
    return o && (o.$typeUrl === MsgInstantiateContract2.typeUrl || typeof o.sender === "string" && typeof o.admin === "string" && typeof o.codeId === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && typeof o.fixMsg === "boolean");
  },
  isSDK(o: any): o is MsgInstantiateContract2SDKType {
    return o && (o.$typeUrl === MsgInstantiateContract2.typeUrl || typeof o.sender === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && typeof o.fix_msg === "boolean");
  },
  encode(message: MsgInstantiateContract2, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.salt.length !== 0) {
      writer.uint32(58).bytes(message.salt);
    }
    if (message.fixMsg === true) {
      writer.uint32(64).bool(message.fixMsg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract2 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.codeId = reader.uint64();
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.salt = reader.bytes();
          break;
        case 8:
          message.fixMsg = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgInstantiateContract2>): MsgInstantiateContract2 {
    const message = createBaseMsgInstantiateContract2();
    message.sender = object.sender ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.salt = object.salt ?? new Uint8Array();
    message.fixMsg = object.fixMsg ?? false;
    return message;
  },
  fromProtoMsg(message: MsgInstantiateContract2ProtoMsg): MsgInstantiateContract2 {
    return MsgInstantiateContract2.decode(message.value);
  },
  toProto(message: MsgInstantiateContract2): Uint8Array {
    return MsgInstantiateContract2.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateContract2): MsgInstantiateContract2ProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
      value: MsgInstantiateContract2.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInstantiateContract2.typeUrl, MsgInstantiateContract2);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInstantiateContract2.aminoType, MsgInstantiateContract2.typeUrl);
function createBaseMsgInstantiateContractResponse(): MsgInstantiateContractResponse {
  return {
    address: "",
    data: new Uint8Array()
  };
}
export const MsgInstantiateContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse",
  aminoType: "wasm/MsgInstantiateContractResponse",
  is(o: any): o is MsgInstantiateContractResponse {
    return o && (o.$typeUrl === MsgInstantiateContractResponse.typeUrl || typeof o.address === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isSDK(o: any): o is MsgInstantiateContractResponseSDKType {
    return o && (o.$typeUrl === MsgInstantiateContractResponse.typeUrl || typeof o.address === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  encode(message: MsgInstantiateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgInstantiateContractResponse>): MsgInstantiateContractResponse {
    const message = createBaseMsgInstantiateContractResponse();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: MsgInstantiateContractResponseProtoMsg): MsgInstantiateContractResponse {
    return MsgInstantiateContractResponse.decode(message.value);
  },
  toProto(message: MsgInstantiateContractResponse): Uint8Array {
    return MsgInstantiateContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse",
      value: MsgInstantiateContractResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInstantiateContractResponse.typeUrl, MsgInstantiateContractResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInstantiateContractResponse.aminoType, MsgInstantiateContractResponse.typeUrl);
function createBaseMsgInstantiateContract2Response(): MsgInstantiateContract2Response {
  return {
    address: "",
    data: new Uint8Array()
  };
}
export const MsgInstantiateContract2Response = {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2Response",
  aminoType: "wasm/MsgInstantiateContract2Response",
  is(o: any): o is MsgInstantiateContract2Response {
    return o && (o.$typeUrl === MsgInstantiateContract2Response.typeUrl || typeof o.address === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isSDK(o: any): o is MsgInstantiateContract2ResponseSDKType {
    return o && (o.$typeUrl === MsgInstantiateContract2Response.typeUrl || typeof o.address === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  encode(message: MsgInstantiateContract2Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract2Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract2Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgInstantiateContract2Response>): MsgInstantiateContract2Response {
    const message = createBaseMsgInstantiateContract2Response();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: MsgInstantiateContract2ResponseProtoMsg): MsgInstantiateContract2Response {
    return MsgInstantiateContract2Response.decode(message.value);
  },
  toProto(message: MsgInstantiateContract2Response): Uint8Array {
    return MsgInstantiateContract2Response.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateContract2Response): MsgInstantiateContract2ResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2Response",
      value: MsgInstantiateContract2Response.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInstantiateContract2Response.typeUrl, MsgInstantiateContract2Response);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInstantiateContract2Response.aminoType, MsgInstantiateContract2Response.typeUrl);
function createBaseMsgExecuteContract(): MsgExecuteContract {
  return {
    sender: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const MsgExecuteContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
  aminoType: "wasm/MsgExecuteContract",
  is(o: any): o is MsgExecuteContract {
    return o && (o.$typeUrl === MsgExecuteContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])));
  },
  isSDK(o: any): o is MsgExecuteContractSDKType {
    return o && (o.$typeUrl === MsgExecuteContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])));
  },
  encode(message: MsgExecuteContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.msg = reader.bytes();
          break;
        case 5:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgExecuteContract>): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: MsgExecuteContractProtoMsg): MsgExecuteContract {
    return MsgExecuteContract.decode(message.value);
  },
  toProto(message: MsgExecuteContract): Uint8Array {
    return MsgExecuteContract.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteContract): MsgExecuteContractProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExecuteContract.typeUrl, MsgExecuteContract);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExecuteContract.aminoType, MsgExecuteContract.typeUrl);
function createBaseMsgExecuteContractResponse(): MsgExecuteContractResponse {
  return {
    data: new Uint8Array()
  };
}
export const MsgExecuteContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse",
  aminoType: "wasm/MsgExecuteContractResponse",
  is(o: any): o is MsgExecuteContractResponse {
    return o && (o.$typeUrl === MsgExecuteContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isSDK(o: any): o is MsgExecuteContractResponseSDKType {
    return o && (o.$typeUrl === MsgExecuteContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: MsgExecuteContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgExecuteContractResponse>): MsgExecuteContractResponse {
    const message = createBaseMsgExecuteContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: MsgExecuteContractResponseProtoMsg): MsgExecuteContractResponse {
    return MsgExecuteContractResponse.decode(message.value);
  },
  toProto(message: MsgExecuteContractResponse): Uint8Array {
    return MsgExecuteContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteContractResponse): MsgExecuteContractResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse",
      value: MsgExecuteContractResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExecuteContractResponse.typeUrl, MsgExecuteContractResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExecuteContractResponse.aminoType, MsgExecuteContractResponse.typeUrl);
function createBaseMsgMigrateContract(): MsgMigrateContract {
  return {
    sender: "",
    contract: "",
    codeId: BigInt(0),
    msg: new Uint8Array()
  };
}
export const MsgMigrateContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
  aminoType: "wasm/MsgMigrateContract",
  is(o: any): o is MsgMigrateContract {
    return o && (o.$typeUrl === MsgMigrateContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && typeof o.codeId === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  isSDK(o: any): o is MsgMigrateContractSDKType {
    return o && (o.$typeUrl === MsgMigrateContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && typeof o.code_id === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  encode(message: MsgMigrateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.codeId = reader.uint64();
          break;
        case 4:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMigrateContract>): MsgMigrateContract {
    const message = createBaseMsgMigrateContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: MsgMigrateContractProtoMsg): MsgMigrateContract {
    return MsgMigrateContract.decode(message.value);
  },
  toProto(message: MsgMigrateContract): Uint8Array {
    return MsgMigrateContract.encode(message).finish();
  },
  toProtoMsg(message: MsgMigrateContract): MsgMigrateContractProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
      value: MsgMigrateContract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgMigrateContract.typeUrl, MsgMigrateContract);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgMigrateContract.aminoType, MsgMigrateContract.typeUrl);
function createBaseMsgMigrateContractResponse(): MsgMigrateContractResponse {
  return {
    data: new Uint8Array()
  };
}
export const MsgMigrateContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse",
  aminoType: "wasm/MsgMigrateContractResponse",
  is(o: any): o is MsgMigrateContractResponse {
    return o && (o.$typeUrl === MsgMigrateContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isSDK(o: any): o is MsgMigrateContractResponseSDKType {
    return o && (o.$typeUrl === MsgMigrateContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: MsgMigrateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMigrateContractResponse>): MsgMigrateContractResponse {
    const message = createBaseMsgMigrateContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: MsgMigrateContractResponseProtoMsg): MsgMigrateContractResponse {
    return MsgMigrateContractResponse.decode(message.value);
  },
  toProto(message: MsgMigrateContractResponse): Uint8Array {
    return MsgMigrateContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse",
      value: MsgMigrateContractResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgMigrateContractResponse.typeUrl, MsgMigrateContractResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgMigrateContractResponse.aminoType, MsgMigrateContractResponse.typeUrl);
function createBaseMsgUpdateAdmin(): MsgUpdateAdmin {
  return {
    sender: "",
    newAdmin: "",
    contract: ""
  };
}
export const MsgUpdateAdmin = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
  aminoType: "wasm/MsgUpdateAdmin",
  is(o: any): o is MsgUpdateAdmin {
    return o && (o.$typeUrl === MsgUpdateAdmin.typeUrl || typeof o.sender === "string" && typeof o.newAdmin === "string" && typeof o.contract === "string");
  },
  isSDK(o: any): o is MsgUpdateAdminSDKType {
    return o && (o.$typeUrl === MsgUpdateAdmin.typeUrl || typeof o.sender === "string" && typeof o.new_admin === "string" && typeof o.contract === "string");
  },
  encode(message: MsgUpdateAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.newAdmin = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateAdmin>): MsgUpdateAdmin {
    const message = createBaseMsgUpdateAdmin();
    message.sender = object.sender ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromProtoMsg(message: MsgUpdateAdminProtoMsg): MsgUpdateAdmin {
    return MsgUpdateAdmin.decode(message.value);
  },
  toProto(message: MsgUpdateAdmin): Uint8Array {
    return MsgUpdateAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAdmin): MsgUpdateAdminProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
      value: MsgUpdateAdmin.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateAdmin.typeUrl, MsgUpdateAdmin);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateAdmin.aminoType, MsgUpdateAdmin.typeUrl);
function createBaseMsgUpdateAdminResponse(): MsgUpdateAdminResponse {
  return {};
}
export const MsgUpdateAdminResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse",
  aminoType: "wasm/MsgUpdateAdminResponse",
  is(o: any): o is MsgUpdateAdminResponse {
    return o && o.$typeUrl === MsgUpdateAdminResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateAdminResponseSDKType {
    return o && o.$typeUrl === MsgUpdateAdminResponse.typeUrl;
  },
  encode(_: MsgUpdateAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdminResponse();
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
  fromPartial(_: Partial<MsgUpdateAdminResponse>): MsgUpdateAdminResponse {
    const message = createBaseMsgUpdateAdminResponse();
    return message;
  },
  fromProtoMsg(message: MsgUpdateAdminResponseProtoMsg): MsgUpdateAdminResponse {
    return MsgUpdateAdminResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAdminResponse): Uint8Array {
    return MsgUpdateAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAdminResponse): MsgUpdateAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse",
      value: MsgUpdateAdminResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateAdminResponse.typeUrl, MsgUpdateAdminResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateAdminResponse.aminoType, MsgUpdateAdminResponse.typeUrl);
function createBaseMsgClearAdmin(): MsgClearAdmin {
  return {
    sender: "",
    contract: ""
  };
}
export const MsgClearAdmin = {
  typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
  aminoType: "wasm/MsgClearAdmin",
  is(o: any): o is MsgClearAdmin {
    return o && (o.$typeUrl === MsgClearAdmin.typeUrl || typeof o.sender === "string" && typeof o.contract === "string");
  },
  isSDK(o: any): o is MsgClearAdminSDKType {
    return o && (o.$typeUrl === MsgClearAdmin.typeUrl || typeof o.sender === "string" && typeof o.contract === "string");
  },
  encode(message: MsgClearAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClearAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClearAdmin>): MsgClearAdmin {
    const message = createBaseMsgClearAdmin();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromProtoMsg(message: MsgClearAdminProtoMsg): MsgClearAdmin {
    return MsgClearAdmin.decode(message.value);
  },
  toProto(message: MsgClearAdmin): Uint8Array {
    return MsgClearAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgClearAdmin): MsgClearAdminProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
      value: MsgClearAdmin.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClearAdmin.typeUrl, MsgClearAdmin);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClearAdmin.aminoType, MsgClearAdmin.typeUrl);
function createBaseMsgClearAdminResponse(): MsgClearAdminResponse {
  return {};
}
export const MsgClearAdminResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse",
  aminoType: "wasm/MsgClearAdminResponse",
  is(o: any): o is MsgClearAdminResponse {
    return o && o.$typeUrl === MsgClearAdminResponse.typeUrl;
  },
  isSDK(o: any): o is MsgClearAdminResponseSDKType {
    return o && o.$typeUrl === MsgClearAdminResponse.typeUrl;
  },
  encode(_: MsgClearAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClearAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdminResponse();
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
  fromPartial(_: Partial<MsgClearAdminResponse>): MsgClearAdminResponse {
    const message = createBaseMsgClearAdminResponse();
    return message;
  },
  fromProtoMsg(message: MsgClearAdminResponseProtoMsg): MsgClearAdminResponse {
    return MsgClearAdminResponse.decode(message.value);
  },
  toProto(message: MsgClearAdminResponse): Uint8Array {
    return MsgClearAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClearAdminResponse): MsgClearAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse",
      value: MsgClearAdminResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClearAdminResponse.typeUrl, MsgClearAdminResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClearAdminResponse.aminoType, MsgClearAdminResponse.typeUrl);