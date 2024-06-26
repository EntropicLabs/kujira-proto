import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractCodeHistoryEntry, Model, AccessConfig, Params } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
function createBaseQueryContractInfoRequest() {
    return {
        address: ""
    };
}
export const QueryContractInfoRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
    aminoType: "wasm/QueryContractInfoRequest",
    is(o) {
        return o && (o.$typeUrl === QueryContractInfoRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryContractInfoRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryContractInfoRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return QueryContractInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryContractInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
            value: QueryContractInfoRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryContractInfoRequest.typeUrl, QueryContractInfoRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryContractInfoRequest.aminoType, QueryContractInfoRequest.typeUrl);
function createBaseQueryContractInfoResponse() {
    return {
        address: "",
        contractInfo: ContractInfo.fromPartial({})
    };
}
export const QueryContractInfoResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
    aminoType: "wasm/QueryContractInfoResponse",
    is(o) {
        return o && (o.$typeUrl === QueryContractInfoResponse.typeUrl || typeof o.address === "string" && ContractInfo.is(o.contractInfo));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryContractInfoResponse.typeUrl || typeof o.address === "string" && ContractInfo.isSDK(o.contract_info));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.contractInfo !== undefined) {
            ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.contractInfo = ContractInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryContractInfoResponse();
        message.address = object.address ?? "";
        message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryContractInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryContractInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
            value: QueryContractInfoResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryContractInfoResponse.typeUrl, QueryContractInfoResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryContractInfoResponse.aminoType, QueryContractInfoResponse.typeUrl);
function createBaseQueryContractHistoryRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
export const QueryContractHistoryRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
    aminoType: "wasm/QueryContractHistoryRequest",
    is(o) {
        return o && (o.$typeUrl === QueryContractHistoryRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryContractHistoryRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryContractHistoryRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryContractHistoryRequest.decode(message.value);
    },
    toProto(message) {
        return QueryContractHistoryRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
            value: QueryContractHistoryRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryContractHistoryRequest.typeUrl, QueryContractHistoryRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryContractHistoryRequest.aminoType, QueryContractHistoryRequest.typeUrl);
function createBaseQueryContractHistoryResponse() {
    return {
        entries: [],
        pagination: undefined
    };
}
export const QueryContractHistoryResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
    aminoType: "wasm/QueryContractHistoryResponse",
    is(o) {
        return o && (o.$typeUrl === QueryContractHistoryResponse.typeUrl || Array.isArray(o.entries) && (!o.entries.length || ContractCodeHistoryEntry.is(o.entries[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryContractHistoryResponse.typeUrl || Array.isArray(o.entries) && (!o.entries.length || ContractCodeHistoryEntry.isSDK(o.entries[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.entries) {
            ContractCodeHistoryEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryContractHistoryResponse();
        message.entries = object.entries?.map(e => ContractCodeHistoryEntry.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryContractHistoryResponse.decode(message.value);
    },
    toProto(message) {
        return QueryContractHistoryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
            value: QueryContractHistoryResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryContractHistoryResponse.typeUrl, QueryContractHistoryResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryContractHistoryResponse.aminoType, QueryContractHistoryResponse.typeUrl);
function createBaseQueryContractsByCodeRequest() {
    return {
        codeId: BigInt(0),
        pagination: undefined
    };
}
export const QueryContractsByCodeRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
    aminoType: "wasm/QueryContractsByCodeRequest",
    is(o) {
        return o && (o.$typeUrl === QueryContractsByCodeRequest.typeUrl || typeof o.codeId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryContractsByCodeRequest.typeUrl || typeof o.code_id === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractsByCodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryContractsByCodeRequest();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryContractsByCodeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryContractsByCodeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
            value: QueryContractsByCodeRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryContractsByCodeRequest.typeUrl, QueryContractsByCodeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryContractsByCodeRequest.aminoType, QueryContractsByCodeRequest.typeUrl);
function createBaseQueryContractsByCodeResponse() {
    return {
        contracts: [],
        pagination: undefined
    };
}
export const QueryContractsByCodeResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
    aminoType: "wasm/QueryContractsByCodeResponse",
    is(o) {
        return o && (o.$typeUrl === QueryContractsByCodeResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || typeof o.contracts[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryContractsByCodeResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || typeof o.contracts[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.contracts) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractsByCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contracts.push(reader.string());
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryContractsByCodeResponse();
        message.contracts = object.contracts?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryContractsByCodeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryContractsByCodeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
            value: QueryContractsByCodeResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryContractsByCodeResponse.typeUrl, QueryContractsByCodeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryContractsByCodeResponse.aminoType, QueryContractsByCodeResponse.typeUrl);
function createBaseQueryAllContractStateRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
export const QueryAllContractStateRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
    aminoType: "wasm/QueryAllContractStateRequest",
    is(o) {
        return o && (o.$typeUrl === QueryAllContractStateRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryAllContractStateRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllContractStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAllContractStateRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryAllContractStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllContractStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
            value: QueryAllContractStateRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAllContractStateRequest.typeUrl, QueryAllContractStateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllContractStateRequest.aminoType, QueryAllContractStateRequest.typeUrl);
function createBaseQueryAllContractStateResponse() {
    return {
        models: [],
        pagination: undefined
    };
}
export const QueryAllContractStateResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
    aminoType: "wasm/QueryAllContractStateResponse",
    is(o) {
        return o && (o.$typeUrl === QueryAllContractStateResponse.typeUrl || Array.isArray(o.models) && (!o.models.length || Model.is(o.models[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryAllContractStateResponse.typeUrl || Array.isArray(o.models) && (!o.models.length || Model.isSDK(o.models[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.models) {
            Model.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllContractStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.models.push(Model.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAllContractStateResponse();
        message.models = object.models?.map(e => Model.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryAllContractStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllContractStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
            value: QueryAllContractStateResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAllContractStateResponse.typeUrl, QueryAllContractStateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllContractStateResponse.aminoType, QueryAllContractStateResponse.typeUrl);
function createBaseQueryRawContractStateRequest() {
    return {
        address: "",
        queryData: new Uint8Array()
    };
}
export const QueryRawContractStateRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
    aminoType: "wasm/QueryRawContractStateRequest",
    is(o) {
        return o && (o.$typeUrl === QueryRawContractStateRequest.typeUrl || typeof o.address === "string" && (o.queryData instanceof Uint8Array || typeof o.queryData === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryRawContractStateRequest.typeUrl || typeof o.address === "string" && (o.query_data instanceof Uint8Array || typeof o.query_data === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.queryData.length !== 0) {
            writer.uint32(18).bytes(message.queryData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRawContractStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.queryData = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryRawContractStateRequest();
        message.address = object.address ?? "";
        message.queryData = object.queryData ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return QueryRawContractStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryRawContractStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
            value: QueryRawContractStateRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryRawContractStateRequest.typeUrl, QueryRawContractStateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryRawContractStateRequest.aminoType, QueryRawContractStateRequest.typeUrl);
function createBaseQueryRawContractStateResponse() {
    return {
        data: new Uint8Array()
    };
}
export const QueryRawContractStateResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
    aminoType: "wasm/QueryRawContractStateResponse",
    is(o) {
        return o && (o.$typeUrl === QueryRawContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryRawContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRawContractStateResponse();
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
    fromPartial(object) {
        const message = createBaseQueryRawContractStateResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return QueryRawContractStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryRawContractStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
            value: QueryRawContractStateResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryRawContractStateResponse.typeUrl, QueryRawContractStateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryRawContractStateResponse.aminoType, QueryRawContractStateResponse.typeUrl);
function createBaseQuerySmartContractStateRequest() {
    return {
        address: "",
        queryData: new Uint8Array()
    };
}
export const QuerySmartContractStateRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
    aminoType: "wasm/QuerySmartContractStateRequest",
    is(o) {
        return o && (o.$typeUrl === QuerySmartContractStateRequest.typeUrl || typeof o.address === "string" && (o.queryData instanceof Uint8Array || typeof o.queryData === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QuerySmartContractStateRequest.typeUrl || typeof o.address === "string" && (o.query_data instanceof Uint8Array || typeof o.query_data === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.queryData.length !== 0) {
            writer.uint32(18).bytes(message.queryData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySmartContractStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.queryData = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySmartContractStateRequest();
        message.address = object.address ?? "";
        message.queryData = object.queryData ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return QuerySmartContractStateRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySmartContractStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
            value: QuerySmartContractStateRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QuerySmartContractStateRequest.typeUrl, QuerySmartContractStateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySmartContractStateRequest.aminoType, QuerySmartContractStateRequest.typeUrl);
function createBaseQuerySmartContractStateResponse() {
    return {
        data: new Uint8Array()
    };
}
export const QuerySmartContractStateResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
    aminoType: "wasm/QuerySmartContractStateResponse",
    is(o) {
        return o && (o.$typeUrl === QuerySmartContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QuerySmartContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySmartContractStateResponse();
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
    fromPartial(object) {
        const message = createBaseQuerySmartContractStateResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return QuerySmartContractStateResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySmartContractStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
            value: QuerySmartContractStateResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QuerySmartContractStateResponse.typeUrl, QuerySmartContractStateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySmartContractStateResponse.aminoType, QuerySmartContractStateResponse.typeUrl);
function createBaseQueryCodeRequest() {
    return {
        codeId: BigInt(0)
    };
}
export const QueryCodeRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
    aminoType: "wasm/QueryCodeRequest",
    is(o) {
        return o && (o.$typeUrl === QueryCodeRequest.typeUrl || typeof o.codeId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryCodeRequest.typeUrl || typeof o.code_id === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCodeRequest();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return QueryCodeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCodeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
            value: QueryCodeRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryCodeRequest.typeUrl, QueryCodeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCodeRequest.aminoType, QueryCodeRequest.typeUrl);
function createBaseCodeInfoResponse() {
    return {
        codeId: BigInt(0),
        creator: "",
        dataHash: new Uint8Array(),
        instantiatePermission: AccessConfig.fromPartial({})
    };
}
export const CodeInfoResponse = {
    typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
    aminoType: "wasm/CodeInfoResponse",
    is(o) {
        return o && (o.$typeUrl === CodeInfoResponse.typeUrl || typeof o.codeId === "bigint" && typeof o.creator === "string" && (o.dataHash instanceof Uint8Array || typeof o.dataHash === "string") && AccessConfig.is(o.instantiatePermission));
    },
    isSDK(o) {
        return o && (o.$typeUrl === CodeInfoResponse.typeUrl || typeof o.code_id === "bigint" && typeof o.creator === "string" && (o.data_hash instanceof Uint8Array || typeof o.data_hash === "string") && AccessConfig.isSDK(o.instantiate_permission));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.dataHash.length !== 0) {
            writer.uint32(26).bytes(message.dataHash);
        }
        if (message.instantiatePermission !== undefined) {
            AccessConfig.encode(message.instantiatePermission, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCodeInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.dataHash = reader.bytes();
                    break;
                case 6:
                    message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCodeInfoResponse();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.creator = object.creator ?? "";
        message.dataHash = object.dataHash ?? new Uint8Array();
        message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return CodeInfoResponse.decode(message.value);
    },
    toProto(message) {
        return CodeInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
            value: CodeInfoResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(CodeInfoResponse.typeUrl, CodeInfoResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(CodeInfoResponse.aminoType, CodeInfoResponse.typeUrl);
function createBaseQueryCodeResponse() {
    return {
        codeInfo: undefined,
        data: new Uint8Array()
    };
}
export const QueryCodeResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
    aminoType: "wasm/QueryCodeResponse",
    is(o) {
        return o && (o.$typeUrl === QueryCodeResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryCodeResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.codeInfo !== undefined) {
            CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeInfo = CodeInfoResponse.decode(reader, reader.uint32());
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
    fromPartial(object) {
        const message = createBaseQueryCodeResponse();
        message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfoResponse.fromPartial(object.codeInfo) : undefined;
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromProtoMsg(message) {
        return QueryCodeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCodeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
            value: QueryCodeResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryCodeResponse.typeUrl, QueryCodeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCodeResponse.aminoType, QueryCodeResponse.typeUrl);
function createBaseQueryCodesRequest() {
    return {
        pagination: undefined
    };
}
export const QueryCodesRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
    aminoType: "wasm/QueryCodesRequest",
    is(o) {
        return o && o.$typeUrl === QueryCodesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryCodesRequest.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCodesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryCodesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCodesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
            value: QueryCodesRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryCodesRequest.typeUrl, QueryCodesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCodesRequest.aminoType, QueryCodesRequest.typeUrl);
function createBaseQueryCodesResponse() {
    return {
        codeInfos: [],
        pagination: undefined
    };
}
export const QueryCodesResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
    aminoType: "wasm/QueryCodesResponse",
    is(o) {
        return o && (o.$typeUrl === QueryCodesResponse.typeUrl || Array.isArray(o.codeInfos) && (!o.codeInfos.length || CodeInfoResponse.is(o.codeInfos[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryCodesResponse.typeUrl || Array.isArray(o.code_infos) && (!o.code_infos.length || CodeInfoResponse.isSDK(o.code_infos[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.codeInfos) {
            CodeInfoResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeInfos.push(CodeInfoResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCodesResponse();
        message.codeInfos = object.codeInfos?.map(e => CodeInfoResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryCodesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCodesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
            value: QueryCodesResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryCodesResponse.typeUrl, QueryCodesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCodesResponse.aminoType, QueryCodesResponse.typeUrl);
function createBaseQueryPinnedCodesRequest() {
    return {
        pagination: undefined
    };
}
export const QueryPinnedCodesRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
    aminoType: "wasm/QueryPinnedCodesRequest",
    is(o) {
        return o && o.$typeUrl === QueryPinnedCodesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryPinnedCodesRequest.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPinnedCodesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPinnedCodesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryPinnedCodesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPinnedCodesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
            value: QueryPinnedCodesRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryPinnedCodesRequest.typeUrl, QueryPinnedCodesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPinnedCodesRequest.aminoType, QueryPinnedCodesRequest.typeUrl);
function createBaseQueryPinnedCodesResponse() {
    return {
        codeIds: [],
        pagination: undefined
    };
}
export const QueryPinnedCodesResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
    aminoType: "wasm/QueryPinnedCodesResponse",
    is(o) {
        return o && (o.$typeUrl === QueryPinnedCodesResponse.typeUrl || Array.isArray(o.codeIds) && (!o.codeIds.length || typeof o.codeIds[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryPinnedCodesResponse.typeUrl || Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
    },
    encode(message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.codeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPinnedCodesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.codeIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.codeIds.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPinnedCodesResponse();
        message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryPinnedCodesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPinnedCodesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
            value: QueryPinnedCodesResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryPinnedCodesResponse.typeUrl, QueryPinnedCodesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPinnedCodesResponse.aminoType, QueryPinnedCodesResponse.typeUrl);
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest",
    aminoType: "wasm/QueryParamsRequest",
    is(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsRequest.aminoType, QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse",
    aminoType: "wasm/QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseQueryContractsByCreatorRequest() {
    return {
        creatorAddress: "",
        pagination: undefined
    };
}
export const QueryContractsByCreatorRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest",
    aminoType: "wasm/QueryContractsByCreatorRequest",
    is(o) {
        return o && (o.$typeUrl === QueryContractsByCreatorRequest.typeUrl || typeof o.creatorAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryContractsByCreatorRequest.typeUrl || typeof o.creator_address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.creatorAddress !== "") {
            writer.uint32(10).string(message.creatorAddress);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractsByCreatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creatorAddress = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryContractsByCreatorRequest();
        message.creatorAddress = object.creatorAddress ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryContractsByCreatorRequest.decode(message.value);
    },
    toProto(message) {
        return QueryContractsByCreatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest",
            value: QueryContractsByCreatorRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryContractsByCreatorRequest.typeUrl, QueryContractsByCreatorRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryContractsByCreatorRequest.aminoType, QueryContractsByCreatorRequest.typeUrl);
function createBaseQueryContractsByCreatorResponse() {
    return {
        contractAddresses: [],
        pagination: undefined
    };
}
export const QueryContractsByCreatorResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse",
    aminoType: "wasm/QueryContractsByCreatorResponse",
    is(o) {
        return o && (o.$typeUrl === QueryContractsByCreatorResponse.typeUrl || Array.isArray(o.contractAddresses) && (!o.contractAddresses.length || typeof o.contractAddresses[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryContractsByCreatorResponse.typeUrl || Array.isArray(o.contract_addresses) && (!o.contract_addresses.length || typeof o.contract_addresses[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.contractAddresses) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractsByCreatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddresses.push(reader.string());
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryContractsByCreatorResponse();
        message.contractAddresses = object.contractAddresses?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryContractsByCreatorResponse.decode(message.value);
    },
    toProto(message) {
        return QueryContractsByCreatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse",
            value: QueryContractsByCreatorResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryContractsByCreatorResponse.typeUrl, QueryContractsByCreatorResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryContractsByCreatorResponse.aminoType, QueryContractsByCreatorResponse.typeUrl);
//# sourceMappingURL=query.js.map