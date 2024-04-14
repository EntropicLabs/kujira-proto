import { Params, CodeInfo, ContractInfo, Model, ContractCodeHistoryEntry } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
function createBaseGenesisState() {
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
    is(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.codes) && (!o.codes.length || Code.is(o.codes[0])) && Array.isArray(o.contracts) && (!o.contracts.length || Contract.is(o.contracts[0])) && Array.isArray(o.sequences) && (!o.sequences.length || Sequence.is(o.sequences[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.codes) && (!o.codes.length || Code.isSDK(o.codes[0])) && Array.isArray(o.contracts) && (!o.contracts.length || Contract.isSDK(o.contracts[0])) && Array.isArray(o.sequences) && (!o.sequences.length || Sequence.isSDK(o.sequences[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.codes) {
            Code.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contracts) {
            Contract.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sequences) {
            Sequence.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.codes = object.codes?.map(e => Code.fromPartial(e)) || [];
        message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
        message.sequences = object.sequences?.map(e => Sequence.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
function createBaseCode() {
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
    is(o) {
        return o && (o.$typeUrl === Code.typeUrl || typeof o.codeId === "bigint" && CodeInfo.is(o.codeInfo) && (o.codeBytes instanceof Uint8Array || typeof o.codeBytes === "string") && typeof o.pinned === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Code.typeUrl || typeof o.code_id === "bigint" && CodeInfo.isSDK(o.code_info) && (o.code_bytes instanceof Uint8Array || typeof o.code_bytes === "string") && typeof o.pinned === "boolean");
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseCode();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfo.fromPartial(object.codeInfo) : undefined;
        message.codeBytes = object.codeBytes ?? new Uint8Array();
        message.pinned = object.pinned ?? false;
        return message;
    },
    fromProtoMsg(message) {
        return Code.decode(message.value);
    },
    toProto(message) {
        return Code.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Code",
            value: Code.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Code.typeUrl, Code);
GlobalDecoderRegistry.registerAminoProtoMapping(Code.aminoType, Code.typeUrl);
function createBaseContract() {
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
    is(o) {
        return o && (o.$typeUrl === Contract.typeUrl || typeof o.contractAddress === "string" && ContractInfo.is(o.contractInfo) && Array.isArray(o.contractState) && (!o.contractState.length || Model.is(o.contractState[0])) && Array.isArray(o.contractCodeHistory) && (!o.contractCodeHistory.length || ContractCodeHistoryEntry.is(o.contractCodeHistory[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Contract.typeUrl || typeof o.contract_address === "string" && ContractInfo.isSDK(o.contract_info) && Array.isArray(o.contract_state) && (!o.contract_state.length || Model.isSDK(o.contract_state[0])) && Array.isArray(o.contract_code_history) && (!o.contract_code_history.length || ContractCodeHistoryEntry.isSDK(o.contract_code_history[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.contractInfo !== undefined) {
            ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contractState) {
            Model.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.contractCodeHistory) {
            ContractCodeHistoryEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseContract();
        message.contractAddress = object.contractAddress ?? "";
        message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : undefined;
        message.contractState = object.contractState?.map(e => Model.fromPartial(e)) || [];
        message.contractCodeHistory = object.contractCodeHistory?.map(e => ContractCodeHistoryEntry.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return Contract.decode(message.value);
    },
    toProto(message) {
        return Contract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Contract",
            value: Contract.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Contract.typeUrl, Contract);
GlobalDecoderRegistry.registerAminoProtoMapping(Contract.aminoType, Contract.typeUrl);
function createBaseSequence() {
    return {
        idKey: new Uint8Array(),
        value: BigInt(0)
    };
}
export const Sequence = {
    typeUrl: "/cosmwasm.wasm.v1.Sequence",
    aminoType: "wasm/Sequence",
    is(o) {
        return o && (o.$typeUrl === Sequence.typeUrl || (o.idKey instanceof Uint8Array || typeof o.idKey === "string") && typeof o.value === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Sequence.typeUrl || (o.id_key instanceof Uint8Array || typeof o.id_key === "string") && typeof o.value === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.idKey.length !== 0) {
            writer.uint32(10).bytes(message.idKey);
        }
        if (message.value !== BigInt(0)) {
            writer.uint32(16).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseSequence();
        message.idKey = object.idKey ?? new Uint8Array();
        message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return Sequence.decode(message.value);
    },
    toProto(message) {
        return Sequence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Sequence",
            value: Sequence.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Sequence.typeUrl, Sequence);
GlobalDecoderRegistry.registerAminoProtoMapping(Sequence.aminoType, Sequence.typeUrl);
//# sourceMappingURL=genesis.js.map