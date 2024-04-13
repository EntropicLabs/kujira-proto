import { Params, ParamsSDKType, CodeInfo, CodeInfoSDKType, ContractInfo, ContractInfoSDKType, Model, ModelSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntrySDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
  params: Params;
  codes: Code[];
  contracts: Contract[];
  sequences: Sequence[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  codes: CodeSDKType[];
  contracts: ContractSDKType[];
  sequences: SequenceSDKType[];
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
  codeId: bigint;
  codeInfo: CodeInfo;
  codeBytes: Uint8Array;
  /** Pinned to wasmvm cache */
  pinned: boolean;
}
export interface CodeProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.Code";
  value: Uint8Array;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeSDKType {
  code_id: bigint;
  code_info: CodeInfoSDKType;
  code_bytes: Uint8Array;
  pinned: boolean;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
  contractAddress: string;
  contractInfo: ContractInfo;
  contractState: Model[];
  contractCodeHistory: ContractCodeHistoryEntry[];
}
export interface ContractProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.Contract";
  value: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractSDKType {
  contract_address: string;
  contract_info: ContractInfoSDKType;
  contract_state: ModelSDKType[];
  contract_code_history: ContractCodeHistoryEntrySDKType[];
}
/** Sequence key and value of an id generation counter */
export interface Sequence {
  idKey: Uint8Array;
  value: bigint;
}
export interface SequenceProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.Sequence";
  value: Uint8Array;
}
/** Sequence key and value of an id generation counter */
export interface SequenceSDKType {
  id_key: Uint8Array;
  value: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    codes: [],
    contracts: [],
    sequences: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmwasm.wasm.v1.GenesisState",
  aminoType: "wasm/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.codes) && (!o.codes.length || Code.is(o.codes[0])) && Array.isArray(o.contracts) && (!o.contracts.length || Contract.is(o.contracts[0])) && Array.isArray(o.sequences) && (!o.sequences.length || Sequence.is(o.sequences[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.codes) && (!o.codes.length || Code.isSDK(o.codes[0])) && Array.isArray(o.contracts) && (!o.contracts.length || Contract.isSDK(o.contracts[0])) && Array.isArray(o.sequences) && (!o.sequences.length || Sequence.isSDK(o.sequences[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.codes) {
      Code.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.codes = object.codes?.map(e => Code.fromPartial(e)) || [];
    message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
function createBaseCode(): Code {
  return {
    codeId: BigInt(0),
    codeInfo: CodeInfo.fromPartial({}),
    codeBytes: new Uint8Array(),
    pinned: false
  };
}
export const Code = {
  typeUrl: "/cosmwasm.wasm.v1.Code",
  aminoType: "wasm/Code",
  is(o: any): o is Code {
    return o && (o.$typeUrl === Code.typeUrl || typeof o.codeId === "bigint" && CodeInfo.is(o.codeInfo) && (o.codeBytes instanceof Uint8Array || typeof o.codeBytes === "string") && typeof o.pinned === "boolean");
  },
  isSDK(o: any): o is CodeSDKType {
    return o && (o.$typeUrl === Code.typeUrl || typeof o.code_id === "bigint" && CodeInfo.isSDK(o.code_info) && (o.code_bytes instanceof Uint8Array || typeof o.code_bytes === "string") && typeof o.pinned === "boolean");
  },
  encode(message: Code, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.codeInfo !== undefined) {
      CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.codeBytes.length !== 0) {
      writer.uint32(26).bytes(message.codeBytes);
    }
    if (message.pinned === true) {
      writer.uint32(32).bool(message.pinned);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Code {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.codeInfo = CodeInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.codeBytes = reader.bytes();
          break;
        case 4:
          message.pinned = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Code>): Code {
    const message = createBaseCode();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfo.fromPartial(object.codeInfo) : undefined;
    message.codeBytes = object.codeBytes ?? new Uint8Array();
    message.pinned = object.pinned ?? false;
    return message;
  },
  fromProtoMsg(message: CodeProtoMsg): Code {
    return Code.decode(message.value);
  },
  toProto(message: Code): Uint8Array {
    return Code.encode(message).finish();
  },
  toProtoMsg(message: Code): CodeProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Code",
      value: Code.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Code.typeUrl, Code);
GlobalDecoderRegistry.registerAminoProtoMapping(Code.aminoType, Code.typeUrl);
function createBaseContract(): Contract {
  return {
    contractAddress: "",
    contractInfo: ContractInfo.fromPartial({}),
    contractState: [],
    contractCodeHistory: []
  };
}
export const Contract = {
  typeUrl: "/cosmwasm.wasm.v1.Contract",
  aminoType: "wasm/Contract",
  is(o: any): o is Contract {
    return o && (o.$typeUrl === Contract.typeUrl || typeof o.contractAddress === "string" && ContractInfo.is(o.contractInfo) && Array.isArray(o.contractState) && (!o.contractState.length || Model.is(o.contractState[0])) && Array.isArray(o.contractCodeHistory) && (!o.contractCodeHistory.length || ContractCodeHistoryEntry.is(o.contractCodeHistory[0])));
  },
  isSDK(o: any): o is ContractSDKType {
    return o && (o.$typeUrl === Contract.typeUrl || typeof o.contract_address === "string" && ContractInfo.isSDK(o.contract_info) && Array.isArray(o.contract_state) && (!o.contract_state.length || Model.isSDK(o.contract_state[0])) && Array.isArray(o.contract_code_history) && (!o.contract_code_history.length || ContractCodeHistoryEntry.isSDK(o.contract_code_history[0])));
  },
  encode(message: Contract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contractState) {
      Model.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.contractCodeHistory) {
      ContractCodeHistoryEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Contract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.contractState.push(Model.decode(reader, reader.uint32()));
          break;
        case 4:
          message.contractCodeHistory.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Contract>): Contract {
    const message = createBaseContract();
    message.contractAddress = object.contractAddress ?? "";
    message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : undefined;
    message.contractState = object.contractState?.map(e => Model.fromPartial(e)) || [];
    message.contractCodeHistory = object.contractCodeHistory?.map(e => ContractCodeHistoryEntry.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: ContractProtoMsg): Contract {
    return Contract.decode(message.value);
  },
  toProto(message: Contract): Uint8Array {
    return Contract.encode(message).finish();
  },
  toProtoMsg(message: Contract): ContractProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Contract",
      value: Contract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Contract.typeUrl, Contract);
GlobalDecoderRegistry.registerAminoProtoMapping(Contract.aminoType, Contract.typeUrl);
function createBaseSequence(): Sequence {
  return {
    idKey: new Uint8Array(),
    value: BigInt(0)
  };
}
export const Sequence = {
  typeUrl: "/cosmwasm.wasm.v1.Sequence",
  aminoType: "wasm/Sequence",
  is(o: any): o is Sequence {
    return o && (o.$typeUrl === Sequence.typeUrl || (o.idKey instanceof Uint8Array || typeof o.idKey === "string") && typeof o.value === "bigint");
  },
  isSDK(o: any): o is SequenceSDKType {
    return o && (o.$typeUrl === Sequence.typeUrl || (o.id_key instanceof Uint8Array || typeof o.id_key === "string") && typeof o.value === "bigint");
  },
  encode(message: Sequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.idKey.length !== 0) {
      writer.uint32(10).bytes(message.idKey);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Sequence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idKey = reader.bytes();
          break;
        case 2:
          message.value = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Sequence>): Sequence {
    const message = createBaseSequence();
    message.idKey = object.idKey ?? new Uint8Array();
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: SequenceProtoMsg): Sequence {
    return Sequence.decode(message.value);
  },
  toProto(message: Sequence): Uint8Array {
    return Sequence.encode(message).finish();
  },
  toProtoMsg(message: Sequence): SequenceProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Sequence",
      value: Sequence.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Sequence.typeUrl, Sequence);
GlobalDecoderRegistry.registerAminoProtoMapping(Sequence.aminoType, Sequence.typeUrl);