import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiatePermission?: AccessConfig;
  /** UnpinCode code on upload, optional */
  unpinCode: boolean;
  /** Source is the URL where the code is hosted */
  source: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */
  builder: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */
  codeHash: Uint8Array;
}
export interface StoreCodeProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal";
  value: Uint8Array;
}
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeProposal";
  title: string;
  description: string;
  run_as: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission?: AccessConfigSDKType;
  unpin_code: boolean;
  source: string;
  builder: string;
  code_hash: Uint8Array;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContractProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}
export interface InstantiateContractProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal";
  value: Uint8Array;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContractProposal";
  title: string;
  description: string;
  run_as: string;
  admin: string;
  code_id: bigint;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/**
 * InstantiateContract2Proposal gov proposal content type to instantiate
 * contract 2
 */
export interface InstantiateContract2Proposal {
  $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContract2Proposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's enviroment as sender */
  runAs: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encode message to be passed to the contract on instantiation */
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
export interface InstantiateContract2ProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal";
  value: Uint8Array;
}
/**
 * InstantiateContract2Proposal gov proposal content type to instantiate
 * contract 2
 */
export interface InstantiateContract2ProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContract2Proposal";
  title: string;
  description: string;
  run_as: string;
  admin: string;
  code_id: bigint;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
  salt: Uint8Array;
  fix_msg: boolean;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.MigrateContractProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** CodeID references the new WASM code */
  codeId: bigint;
  /** Msg json encoded message to be passed to the contract on migration */
  msg: Uint8Array;
}
export interface MigrateContractProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal";
  value: Uint8Array;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.MigrateContractProposal";
  title: string;
  description: string;
  contract: string;
  code_id: bigint;
  msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.SudoContractProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as sudo */
  msg: Uint8Array;
}
export interface SudoContractProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal";
  value: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.SudoContractProposal";
  title: string;
  description: string;
  contract: string;
  msg: Uint8Array;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.ExecuteContractProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as execute */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}
export interface ExecuteContractProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal";
  value: Uint8Array;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.ExecuteContractProposal";
  title: string;
  description: string;
  run_as: string;
  contract: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.UpdateAdminProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** NewAdmin address to be set */
  newAdmin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface UpdateAdminProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal";
  value: Uint8Array;
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.UpdateAdminProposal";
  title: string;
  description: string;
  new_admin: string;
  contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.ClearAdminProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface ClearAdminProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal";
  value: Uint8Array;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.ClearAdminProposal";
  title: string;
  description: string;
  contract: string;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.PinCodesProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the new WASM codes */
  codeIds: bigint[];
}
export interface PinCodesProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal";
  value: Uint8Array;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.PinCodesProposal";
  title: string;
  description: string;
  code_ids: bigint[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.UnpinCodesProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the WASM codes */
  codeIds: bigint[];
}
export interface UnpinCodesProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal";
  value: Uint8Array;
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.UnpinCodesProposal";
  title: string;
  description: string;
  code_ids: bigint[];
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdate {
  /** CodeID is the reference to the stored WASM code to be updated */
  codeId: bigint;
  /** InstantiatePermission to apply to the set of code ids */
  instantiatePermission: AccessConfig;
}
export interface AccessConfigUpdateProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.AccessConfigUpdate";
  value: Uint8Array;
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdateSDKType {
  code_id: bigint;
  instantiate_permission: AccessConfigSDKType;
}
/**
 * UpdateInstantiateConfigProposal gov proposal content type to update
 * instantiate config to a  set of code ids.
 */
export interface UpdateInstantiateConfigProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /**
   * AccessConfigUpdate contains the list of code ids and the access config
   * to be applied.
   */
  accessConfigUpdates: AccessConfigUpdate[];
}
export interface UpdateInstantiateConfigProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
  value: Uint8Array;
}
/**
 * UpdateInstantiateConfigProposal gov proposal content type to update
 * instantiate config to a  set of code ids.
 */
export interface UpdateInstantiateConfigProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
  title: string;
  description: string;
  access_config_updates: AccessConfigUpdateSDKType[];
}
/**
 * StoreAndInstantiateContractProposal gov proposal content type to store
 * and instantiate the contract.
 */
export interface StoreAndInstantiateContractProposal {
  $typeUrl?: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiatePermission?: AccessConfig;
  /** UnpinCode code on upload, optional */
  unpinCode: boolean;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
  /** Source is the URL where the code is hosted */
  source: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */
  builder: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */
  codeHash: Uint8Array;
}
export interface StoreAndInstantiateContractProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
  value: Uint8Array;
}
/**
 * StoreAndInstantiateContractProposal gov proposal content type to store
 * and instantiate the contract.
 */
export interface StoreAndInstantiateContractProposalSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
  title: string;
  description: string;
  run_as: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission?: AccessConfigSDKType;
  unpin_code: boolean;
  admin: string;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
  source: string;
  builder: string;
  code_hash: Uint8Array;
}
function createBaseStoreCodeProposal(): StoreCodeProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
    title: "",
    description: "",
    runAs: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: undefined,
    unpinCode: false,
    source: "",
    builder: "",
    codeHash: new Uint8Array()
  };
}
export const StoreCodeProposal = {
  typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
  aminoType: "wasm/StoreCodeProposal",
  is(o: any): o is StoreCodeProposal {
    return o && (o.$typeUrl === StoreCodeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.runAs === "string" && (o.wasmByteCode instanceof Uint8Array || typeof o.wasmByteCode === "string") && typeof o.unpinCode === "boolean" && typeof o.source === "string" && typeof o.builder === "string" && (o.codeHash instanceof Uint8Array || typeof o.codeHash === "string"));
  },
  isSDK(o: any): o is StoreCodeProposalSDKType {
    return o && (o.$typeUrl === StoreCodeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string") && typeof o.unpin_code === "boolean" && typeof o.source === "string" && typeof o.builder === "string" && (o.code_hash instanceof Uint8Array || typeof o.code_hash === "string"));
  },
  encode(message: StoreCodeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(34).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(58).fork()).ldelim();
    }
    if (message.unpinCode === true) {
      writer.uint32(64).bool(message.unpinCode);
    }
    if (message.source !== "") {
      writer.uint32(74).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(82).string(message.builder);
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(90).bytes(message.codeHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreCodeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreCodeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.runAs = reader.string();
          break;
        case 4:
          message.wasmByteCode = reader.bytes();
          break;
        case 7:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        case 8:
          message.unpinCode = reader.bool();
          break;
        case 9:
          message.source = reader.string();
          break;
        case 10:
          message.builder = reader.string();
          break;
        case 11:
          message.codeHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StoreCodeProposal>): StoreCodeProposal {
    const message = createBaseStoreCodeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    message.unpinCode = object.unpinCode ?? false;
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.codeHash = object.codeHash ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: StoreCodeProposalProtoMsg): StoreCodeProposal {
    return StoreCodeProposal.decode(message.value);
  },
  toProto(message: StoreCodeProposal): Uint8Array {
    return StoreCodeProposal.encode(message).finish();
  },
  toProtoMsg(message: StoreCodeProposal): StoreCodeProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
      value: StoreCodeProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StoreCodeProposal.typeUrl, StoreCodeProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(StoreCodeProposal.aminoType, StoreCodeProposal.typeUrl);
function createBaseInstantiateContractProposal(): InstantiateContractProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
    title: "",
    description: "",
    runAs: "",
    admin: "",
    codeId: BigInt(0),
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const InstantiateContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
  aminoType: "wasm/InstantiateContractProposal",
  is(o: any): o is InstantiateContractProposal {
    return o && (o.$typeUrl === InstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.runAs === "string" && typeof o.admin === "string" && typeof o.codeId === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])));
  },
  isSDK(o: any): o is InstantiateContractProposalSDKType {
    return o && (o.$typeUrl === InstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])));
  },
  encode(message: InstantiateContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(40).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InstantiateContractProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.runAs = reader.string();
          break;
        case 4:
          message.admin = reader.string();
          break;
        case 5:
          message.codeId = reader.uint64();
          break;
        case 6:
          message.label = reader.string();
          break;
        case 7:
          message.msg = reader.bytes();
          break;
        case 8:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<InstantiateContractProposal>): InstantiateContractProposal {
    const message = createBaseInstantiateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: InstantiateContractProposalProtoMsg): InstantiateContractProposal {
    return InstantiateContractProposal.decode(message.value);
  },
  toProto(message: InstantiateContractProposal): Uint8Array {
    return InstantiateContractProposal.encode(message).finish();
  },
  toProtoMsg(message: InstantiateContractProposal): InstantiateContractProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
      value: InstantiateContractProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InstantiateContractProposal.typeUrl, InstantiateContractProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(InstantiateContractProposal.aminoType, InstantiateContractProposal.typeUrl);
function createBaseInstantiateContract2Proposal(): InstantiateContract2Proposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
    title: "",
    description: "",
    runAs: "",
    admin: "",
    codeId: BigInt(0),
    label: "",
    msg: new Uint8Array(),
    funds: [],
    salt: new Uint8Array(),
    fixMsg: false
  };
}
export const InstantiateContract2Proposal = {
  typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
  aminoType: "wasm/InstantiateContract2Proposal",
  is(o: any): o is InstantiateContract2Proposal {
    return o && (o.$typeUrl === InstantiateContract2Proposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.runAs === "string" && typeof o.admin === "string" && typeof o.codeId === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && typeof o.fixMsg === "boolean");
  },
  isSDK(o: any): o is InstantiateContract2ProposalSDKType {
    return o && (o.$typeUrl === InstantiateContract2Proposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && typeof o.fix_msg === "boolean");
  },
  encode(message: InstantiateContract2Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(40).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.salt.length !== 0) {
      writer.uint32(74).bytes(message.salt);
    }
    if (message.fixMsg === true) {
      writer.uint32(80).bool(message.fixMsg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InstantiateContract2Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContract2Proposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.runAs = reader.string();
          break;
        case 4:
          message.admin = reader.string();
          break;
        case 5:
          message.codeId = reader.uint64();
          break;
        case 6:
          message.label = reader.string();
          break;
        case 7:
          message.msg = reader.bytes();
          break;
        case 8:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.salt = reader.bytes();
          break;
        case 10:
          message.fixMsg = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<InstantiateContract2Proposal>): InstantiateContract2Proposal {
    const message = createBaseInstantiateContract2Proposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.salt = object.salt ?? new Uint8Array();
    message.fixMsg = object.fixMsg ?? false;
    return message;
  },
  fromProtoMsg(message: InstantiateContract2ProposalProtoMsg): InstantiateContract2Proposal {
    return InstantiateContract2Proposal.decode(message.value);
  },
  toProto(message: InstantiateContract2Proposal): Uint8Array {
    return InstantiateContract2Proposal.encode(message).finish();
  },
  toProtoMsg(message: InstantiateContract2Proposal): InstantiateContract2ProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
      value: InstantiateContract2Proposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InstantiateContract2Proposal.typeUrl, InstantiateContract2Proposal);
GlobalDecoderRegistry.registerAminoProtoMapping(InstantiateContract2Proposal.aminoType, InstantiateContract2Proposal.typeUrl);
function createBaseMigrateContractProposal(): MigrateContractProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
    title: "",
    description: "",
    contract: "",
    codeId: BigInt(0),
    msg: new Uint8Array()
  };
}
export const MigrateContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
  aminoType: "wasm/MigrateContractProposal",
  is(o: any): o is MigrateContractProposal {
    return o && (o.$typeUrl === MigrateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && typeof o.codeId === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  isSDK(o: any): o is MigrateContractProposalSDKType {
    return o && (o.$typeUrl === MigrateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && typeof o.code_id === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  encode(message: MigrateContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(40).uint64(message.codeId);
    }
    if (message.msg.length !== 0) {
      writer.uint32(50).bytes(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MigrateContractProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
          message.codeId = reader.uint64();
          break;
        case 6:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MigrateContractProposal>): MigrateContractProposal {
    const message = createBaseMigrateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: MigrateContractProposalProtoMsg): MigrateContractProposal {
    return MigrateContractProposal.decode(message.value);
  },
  toProto(message: MigrateContractProposal): Uint8Array {
    return MigrateContractProposal.encode(message).finish();
  },
  toProtoMsg(message: MigrateContractProposal): MigrateContractProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
      value: MigrateContractProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MigrateContractProposal.typeUrl, MigrateContractProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(MigrateContractProposal.aminoType, MigrateContractProposal.typeUrl);
function createBaseSudoContractProposal(): SudoContractProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
    title: "",
    description: "",
    contract: "",
    msg: new Uint8Array()
  };
}
export const SudoContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
  aminoType: "wasm/SudoContractProposal",
  is(o: any): o is SudoContractProposal {
    return o && (o.$typeUrl === SudoContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  isSDK(o: any): o is SudoContractProposalSDKType {
    return o && (o.$typeUrl === SudoContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  encode(message: SudoContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SudoContractProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contract = reader.string();
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
  fromPartial(object: Partial<SudoContractProposal>): SudoContractProposal {
    const message = createBaseSudoContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: SudoContractProposalProtoMsg): SudoContractProposal {
    return SudoContractProposal.decode(message.value);
  },
  toProto(message: SudoContractProposal): Uint8Array {
    return SudoContractProposal.encode(message).finish();
  },
  toProtoMsg(message: SudoContractProposal): SudoContractProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
      value: SudoContractProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SudoContractProposal.typeUrl, SudoContractProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(SudoContractProposal.aminoType, SudoContractProposal.typeUrl);
function createBaseExecuteContractProposal(): ExecuteContractProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
    title: "",
    description: "",
    runAs: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const ExecuteContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
  aminoType: "wasm/ExecuteContractProposal",
  is(o: any): o is ExecuteContractProposal {
    return o && (o.$typeUrl === ExecuteContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.runAs === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])));
  },
  isSDK(o: any): o is ExecuteContractProposalSDKType {
    return o && (o.$typeUrl === ExecuteContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])));
  },
  encode(message: ExecuteContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExecuteContractProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.runAs = reader.string();
          break;
        case 4:
          message.contract = reader.string();
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
  fromPartial(object: Partial<ExecuteContractProposal>): ExecuteContractProposal {
    const message = createBaseExecuteContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: ExecuteContractProposalProtoMsg): ExecuteContractProposal {
    return ExecuteContractProposal.decode(message.value);
  },
  toProto(message: ExecuteContractProposal): Uint8Array {
    return ExecuteContractProposal.encode(message).finish();
  },
  toProtoMsg(message: ExecuteContractProposal): ExecuteContractProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
      value: ExecuteContractProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecuteContractProposal.typeUrl, ExecuteContractProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(ExecuteContractProposal.aminoType, ExecuteContractProposal.typeUrl);
function createBaseUpdateAdminProposal(): UpdateAdminProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
    title: "",
    description: "",
    newAdmin: "",
    contract: ""
  };
}
export const UpdateAdminProposal = {
  typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
  aminoType: "wasm/UpdateAdminProposal",
  is(o: any): o is UpdateAdminProposal {
    return o && (o.$typeUrl === UpdateAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.newAdmin === "string" && typeof o.contract === "string");
  },
  isSDK(o: any): o is UpdateAdminProposalSDKType {
    return o && (o.$typeUrl === UpdateAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.new_admin === "string" && typeof o.contract === "string");
  },
  encode(message: UpdateAdminProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateAdminProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpdateAdminProposal>): UpdateAdminProposal {
    const message = createBaseUpdateAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromProtoMsg(message: UpdateAdminProposalProtoMsg): UpdateAdminProposal {
    return UpdateAdminProposal.decode(message.value);
  },
  toProto(message: UpdateAdminProposal): Uint8Array {
    return UpdateAdminProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateAdminProposal): UpdateAdminProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
      value: UpdateAdminProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UpdateAdminProposal.typeUrl, UpdateAdminProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(UpdateAdminProposal.aminoType, UpdateAdminProposal.typeUrl);
function createBaseClearAdminProposal(): ClearAdminProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
    title: "",
    description: "",
    contract: ""
  };
}
export const ClearAdminProposal = {
  typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
  aminoType: "wasm/ClearAdminProposal",
  is(o: any): o is ClearAdminProposal {
    return o && (o.$typeUrl === ClearAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string");
  },
  isSDK(o: any): o is ClearAdminProposalSDKType {
    return o && (o.$typeUrl === ClearAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string");
  },
  encode(message: ClearAdminProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClearAdminProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearAdminProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
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
  fromPartial(object: Partial<ClearAdminProposal>): ClearAdminProposal {
    const message = createBaseClearAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromProtoMsg(message: ClearAdminProposalProtoMsg): ClearAdminProposal {
    return ClearAdminProposal.decode(message.value);
  },
  toProto(message: ClearAdminProposal): Uint8Array {
    return ClearAdminProposal.encode(message).finish();
  },
  toProtoMsg(message: ClearAdminProposal): ClearAdminProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
      value: ClearAdminProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClearAdminProposal.typeUrl, ClearAdminProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(ClearAdminProposal.aminoType, ClearAdminProposal.typeUrl);
function createBasePinCodesProposal(): PinCodesProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
    title: "",
    description: "",
    codeIds: []
  };
}
export const PinCodesProposal = {
  typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
  aminoType: "wasm/PinCodesProposal",
  is(o: any): o is PinCodesProposal {
    return o && (o.$typeUrl === PinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.codeIds) && (!o.codeIds.length || typeof o.codeIds[0] === "bigint"));
  },
  isSDK(o: any): o is PinCodesProposalSDKType {
    return o && (o.$typeUrl === PinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
  },
  encode(message: PinCodesProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PinCodesProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePinCodesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PinCodesProposal>): PinCodesProposal {
    const message = createBasePinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromProtoMsg(message: PinCodesProposalProtoMsg): PinCodesProposal {
    return PinCodesProposal.decode(message.value);
  },
  toProto(message: PinCodesProposal): Uint8Array {
    return PinCodesProposal.encode(message).finish();
  },
  toProtoMsg(message: PinCodesProposal): PinCodesProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
      value: PinCodesProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PinCodesProposal.typeUrl, PinCodesProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(PinCodesProposal.aminoType, PinCodesProposal.typeUrl);
function createBaseUnpinCodesProposal(): UnpinCodesProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
    title: "",
    description: "",
    codeIds: []
  };
}
export const UnpinCodesProposal = {
  typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
  aminoType: "wasm/UnpinCodesProposal",
  is(o: any): o is UnpinCodesProposal {
    return o && (o.$typeUrl === UnpinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.codeIds) && (!o.codeIds.length || typeof o.codeIds[0] === "bigint"));
  },
  isSDK(o: any): o is UnpinCodesProposalSDKType {
    return o && (o.$typeUrl === UnpinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
  },
  encode(message: UnpinCodesProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnpinCodesProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpinCodesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UnpinCodesProposal>): UnpinCodesProposal {
    const message = createBaseUnpinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromProtoMsg(message: UnpinCodesProposalProtoMsg): UnpinCodesProposal {
    return UnpinCodesProposal.decode(message.value);
  },
  toProto(message: UnpinCodesProposal): Uint8Array {
    return UnpinCodesProposal.encode(message).finish();
  },
  toProtoMsg(message: UnpinCodesProposal): UnpinCodesProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
      value: UnpinCodesProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UnpinCodesProposal.typeUrl, UnpinCodesProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(UnpinCodesProposal.aminoType, UnpinCodesProposal.typeUrl);
function createBaseAccessConfigUpdate(): AccessConfigUpdate {
  return {
    codeId: BigInt(0),
    instantiatePermission: AccessConfig.fromPartial({})
  };
}
export const AccessConfigUpdate = {
  typeUrl: "/cosmwasm.wasm.v1.AccessConfigUpdate",
  aminoType: "wasm/AccessConfigUpdate",
  is(o: any): o is AccessConfigUpdate {
    return o && (o.$typeUrl === AccessConfigUpdate.typeUrl || typeof o.codeId === "bigint" && AccessConfig.is(o.instantiatePermission));
  },
  isSDK(o: any): o is AccessConfigUpdateSDKType {
    return o && (o.$typeUrl === AccessConfigUpdate.typeUrl || typeof o.code_id === "bigint" && AccessConfig.isSDK(o.instantiate_permission));
  },
  encode(message: AccessConfigUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccessConfigUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessConfigUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AccessConfigUpdate>): AccessConfigUpdate {
    const message = createBaseAccessConfigUpdate();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  },
  fromProtoMsg(message: AccessConfigUpdateProtoMsg): AccessConfigUpdate {
    return AccessConfigUpdate.decode(message.value);
  },
  toProto(message: AccessConfigUpdate): Uint8Array {
    return AccessConfigUpdate.encode(message).finish();
  },
  toProtoMsg(message: AccessConfigUpdate): AccessConfigUpdateProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AccessConfigUpdate",
      value: AccessConfigUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccessConfigUpdate.typeUrl, AccessConfigUpdate);
GlobalDecoderRegistry.registerAminoProtoMapping(AccessConfigUpdate.aminoType, AccessConfigUpdate.typeUrl);
function createBaseUpdateInstantiateConfigProposal(): UpdateInstantiateConfigProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
    title: "",
    description: "",
    accessConfigUpdates: []
  };
}
export const UpdateInstantiateConfigProposal = {
  typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
  aminoType: "wasm/UpdateInstantiateConfigProposal",
  is(o: any): o is UpdateInstantiateConfigProposal {
    return o && (o.$typeUrl === UpdateInstantiateConfigProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.accessConfigUpdates) && (!o.accessConfigUpdates.length || AccessConfigUpdate.is(o.accessConfigUpdates[0])));
  },
  isSDK(o: any): o is UpdateInstantiateConfigProposalSDKType {
    return o && (o.$typeUrl === UpdateInstantiateConfigProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.access_config_updates) && (!o.access_config_updates.length || AccessConfigUpdate.isSDK(o.access_config_updates[0])));
  },
  encode(message: UpdateInstantiateConfigProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.accessConfigUpdates) {
      AccessConfigUpdate.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateInstantiateConfigProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInstantiateConfigProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.accessConfigUpdates.push(AccessConfigUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpdateInstantiateConfigProposal>): UpdateInstantiateConfigProposal {
    const message = createBaseUpdateInstantiateConfigProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.accessConfigUpdates = object.accessConfigUpdates?.map(e => AccessConfigUpdate.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: UpdateInstantiateConfigProposalProtoMsg): UpdateInstantiateConfigProposal {
    return UpdateInstantiateConfigProposal.decode(message.value);
  },
  toProto(message: UpdateInstantiateConfigProposal): Uint8Array {
    return UpdateInstantiateConfigProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateInstantiateConfigProposal): UpdateInstantiateConfigProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
      value: UpdateInstantiateConfigProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UpdateInstantiateConfigProposal.typeUrl, UpdateInstantiateConfigProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(UpdateInstantiateConfigProposal.aminoType, UpdateInstantiateConfigProposal.typeUrl);
function createBaseStoreAndInstantiateContractProposal(): StoreAndInstantiateContractProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
    title: "",
    description: "",
    runAs: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: undefined,
    unpinCode: false,
    admin: "",
    label: "",
    msg: new Uint8Array(),
    funds: [],
    source: "",
    builder: "",
    codeHash: new Uint8Array()
  };
}
export const StoreAndInstantiateContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
  aminoType: "wasm/StoreAndInstantiateContractProposal",
  is(o: any): o is StoreAndInstantiateContractProposal {
    return o && (o.$typeUrl === StoreAndInstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.runAs === "string" && (o.wasmByteCode instanceof Uint8Array || typeof o.wasmByteCode === "string") && typeof o.unpinCode === "boolean" && typeof o.admin === "string" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])) && typeof o.source === "string" && typeof o.builder === "string" && (o.codeHash instanceof Uint8Array || typeof o.codeHash === "string"));
  },
  isSDK(o: any): o is StoreAndInstantiateContractProposalSDKType {
    return o && (o.$typeUrl === StoreAndInstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string") && typeof o.unpin_code === "boolean" && typeof o.admin === "string" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])) && typeof o.source === "string" && typeof o.builder === "string" && (o.code_hash instanceof Uint8Array || typeof o.code_hash === "string"));
  },
  encode(message: StoreAndInstantiateContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(34).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
    }
    if (message.unpinCode === true) {
      writer.uint32(48).bool(message.unpinCode);
    }
    if (message.admin !== "") {
      writer.uint32(58).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(66).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(74).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(90).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(98).string(message.builder);
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(106).bytes(message.codeHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreAndInstantiateContractProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreAndInstantiateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.runAs = reader.string();
          break;
        case 4:
          message.wasmByteCode = reader.bytes();
          break;
        case 5:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        case 6:
          message.unpinCode = reader.bool();
          break;
        case 7:
          message.admin = reader.string();
          break;
        case 8:
          message.label = reader.string();
          break;
        case 9:
          message.msg = reader.bytes();
          break;
        case 10:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 11:
          message.source = reader.string();
          break;
        case 12:
          message.builder = reader.string();
          break;
        case 13:
          message.codeHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StoreAndInstantiateContractProposal>): StoreAndInstantiateContractProposal {
    const message = createBaseStoreAndInstantiateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    message.unpinCode = object.unpinCode ?? false;
    message.admin = object.admin ?? "";
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.codeHash = object.codeHash ?? new Uint8Array();
    return message;
  },
  fromProtoMsg(message: StoreAndInstantiateContractProposalProtoMsg): StoreAndInstantiateContractProposal {
    return StoreAndInstantiateContractProposal.decode(message.value);
  },
  toProto(message: StoreAndInstantiateContractProposal): Uint8Array {
    return StoreAndInstantiateContractProposal.encode(message).finish();
  },
  toProtoMsg(message: StoreAndInstantiateContractProposal): StoreAndInstantiateContractProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
      value: StoreAndInstantiateContractProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StoreAndInstantiateContractProposal.typeUrl, StoreAndInstantiateContractProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(StoreAndInstantiateContractProposal.aminoType, StoreAndInstantiateContractProposal.typeUrl);