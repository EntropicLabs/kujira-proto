import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Coin } from "../../base/v1beta1/coin";
import { Params, Metadata } from "./bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
function createBaseQueryBalanceRequest() {
    return {
        address: "",
        denom: ""
    };
}
export const QueryBalanceRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QueryBalanceRequest",
    aminoType: "cosmos-sdk/QueryBalanceRequest",
    is(o) {
        return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceRequest();
        message.address = object.address ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return QueryBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryBalanceRequest",
            value: QueryBalanceRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryBalanceRequest.typeUrl, QueryBalanceRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryBalanceRequest.aminoType, QueryBalanceRequest.typeUrl);
function createBaseQueryBalanceResponse() {
    return {
        balance: undefined
    };
}
export const QueryBalanceResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QueryBalanceResponse",
    aminoType: "cosmos-sdk/QueryBalanceResponse",
    is(o) {
        return o && o.$typeUrl === QueryBalanceResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryBalanceResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceResponse();
        message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryBalanceResponse",
            value: QueryBalanceResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryBalanceResponse.typeUrl, QueryBalanceResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryBalanceResponse.aminoType, QueryBalanceResponse.typeUrl);
function createBaseQueryAllBalancesRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
export const QueryAllBalancesRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesRequest",
    aminoType: "cosmos-sdk/QueryAllBalancesRequest",
    is(o) {
        return o && (o.$typeUrl === QueryAllBalancesRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryAllBalancesRequest.typeUrl || typeof o.address === "string");
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
        const message = createBaseQueryAllBalancesRequest();
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
        const message = createBaseQueryAllBalancesRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryAllBalancesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllBalancesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesRequest",
            value: QueryAllBalancesRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAllBalancesRequest.typeUrl, QueryAllBalancesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllBalancesRequest.aminoType, QueryAllBalancesRequest.typeUrl);
function createBaseQueryAllBalancesResponse() {
    return {
        balances: [],
        pagination: undefined
    };
}
export const QueryAllBalancesResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesResponse",
    aminoType: "cosmos-sdk/QueryAllBalancesResponse",
    is(o) {
        return o && (o.$typeUrl === QueryAllBalancesResponse.typeUrl || Array.isArray(o.balances) && (!o.balances.length || Coin.is(o.balances[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryAllBalancesResponse.typeUrl || Array.isArray(o.balances) && (!o.balances.length || Coin.isSDK(o.balances[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.balances) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(Coin.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAllBalancesResponse();
        message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryAllBalancesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllBalancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesResponse",
            value: QueryAllBalancesResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAllBalancesResponse.typeUrl, QueryAllBalancesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllBalancesResponse.aminoType, QueryAllBalancesResponse.typeUrl);
function createBaseQuerySpendableBalancesRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
export const QuerySpendableBalancesRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesRequest",
    aminoType: "cosmos-sdk/QuerySpendableBalancesRequest",
    is(o) {
        return o && (o.$typeUrl === QuerySpendableBalancesRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QuerySpendableBalancesRequest.typeUrl || typeof o.address === "string");
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
        const message = createBaseQuerySpendableBalancesRequest();
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
        const message = createBaseQuerySpendableBalancesRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QuerySpendableBalancesRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySpendableBalancesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesRequest",
            value: QuerySpendableBalancesRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QuerySpendableBalancesRequest.typeUrl, QuerySpendableBalancesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySpendableBalancesRequest.aminoType, QuerySpendableBalancesRequest.typeUrl);
function createBaseQuerySpendableBalancesResponse() {
    return {
        balances: [],
        pagination: undefined
    };
}
export const QuerySpendableBalancesResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesResponse",
    aminoType: "cosmos-sdk/QuerySpendableBalancesResponse",
    is(o) {
        return o && (o.$typeUrl === QuerySpendableBalancesResponse.typeUrl || Array.isArray(o.balances) && (!o.balances.length || Coin.is(o.balances[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QuerySpendableBalancesResponse.typeUrl || Array.isArray(o.balances) && (!o.balances.length || Coin.isSDK(o.balances[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.balances) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpendableBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(Coin.decode(reader, reader.uint32()));
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
        const message = createBaseQuerySpendableBalancesResponse();
        message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QuerySpendableBalancesResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySpendableBalancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesResponse",
            value: QuerySpendableBalancesResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QuerySpendableBalancesResponse.typeUrl, QuerySpendableBalancesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySpendableBalancesResponse.aminoType, QuerySpendableBalancesResponse.typeUrl);
function createBaseQueryTotalSupplyRequest() {
    return {
        pagination: undefined
    };
}
export const QueryTotalSupplyRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest",
    aminoType: "cosmos-sdk/QueryTotalSupplyRequest",
    is(o) {
        return o && o.$typeUrl === QueryTotalSupplyRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryTotalSupplyRequest.typeUrl;
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
        const message = createBaseQueryTotalSupplyRequest();
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
        const message = createBaseQueryTotalSupplyRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryTotalSupplyRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalSupplyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest",
            value: QueryTotalSupplyRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryTotalSupplyRequest.typeUrl, QueryTotalSupplyRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalSupplyRequest.aminoType, QueryTotalSupplyRequest.typeUrl);
function createBaseQueryTotalSupplyResponse() {
    return {
        supply: [],
        pagination: undefined
    };
}
export const QueryTotalSupplyResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse",
    aminoType: "cosmos-sdk/QueryTotalSupplyResponse",
    is(o) {
        return o && (o.$typeUrl === QueryTotalSupplyResponse.typeUrl || Array.isArray(o.supply) && (!o.supply.length || Coin.is(o.supply[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryTotalSupplyResponse.typeUrl || Array.isArray(o.supply) && (!o.supply.length || Coin.isSDK(o.supply[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.supply) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supply.push(Coin.decode(reader, reader.uint32()));
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
        const message = createBaseQueryTotalSupplyResponse();
        message.supply = object.supply?.map(e => Coin.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryTotalSupplyResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalSupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse",
            value: QueryTotalSupplyResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryTotalSupplyResponse.typeUrl, QueryTotalSupplyResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalSupplyResponse.aminoType, QueryTotalSupplyResponse.typeUrl);
function createBaseQuerySupplyOfRequest() {
    return {
        denom: ""
    };
}
export const QuerySupplyOfRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfRequest",
    aminoType: "cosmos-sdk/QuerySupplyOfRequest",
    is(o) {
        return o && (o.$typeUrl === QuerySupplyOfRequest.typeUrl || typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QuerySupplyOfRequest.typeUrl || typeof o.denom === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyOfRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyOfRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return QuerySupplyOfRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySupplyOfRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfRequest",
            value: QuerySupplyOfRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QuerySupplyOfRequest.typeUrl, QuerySupplyOfRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySupplyOfRequest.aminoType, QuerySupplyOfRequest.typeUrl);
function createBaseQuerySupplyOfResponse() {
    return {
        amount: Coin.fromPartial({})
    };
}
export const QuerySupplyOfResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfResponse",
    aminoType: "cosmos-sdk/QuerySupplyOfResponse",
    is(o) {
        return o && (o.$typeUrl === QuerySupplyOfResponse.typeUrl || Coin.is(o.amount));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QuerySupplyOfResponse.typeUrl || Coin.isSDK(o.amount));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyOfResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyOfResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QuerySupplyOfResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySupplyOfResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfResponse",
            value: QuerySupplyOfResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QuerySupplyOfResponse.typeUrl, QuerySupplyOfResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySupplyOfResponse.aminoType, QuerySupplyOfResponse.typeUrl);
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QueryParamsRequest",
    aminoType: "cosmos-sdk/QueryParamsRequest",
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
            typeUrl: "/cosmos.bank.v1beta1.QueryParamsRequest",
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
    typeUrl: "/cosmos.bank.v1beta1.QueryParamsResponse",
    aminoType: "cosmos-sdk/QueryParamsResponse",
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
            typeUrl: "/cosmos.bank.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseQueryDenomsMetadataRequest() {
    return {
        pagination: undefined
    };
}
export const QueryDenomsMetadataRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataRequest",
    aminoType: "cosmos-sdk/QueryDenomsMetadataRequest",
    is(o) {
        return o && o.$typeUrl === QueryDenomsMetadataRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryDenomsMetadataRequest.typeUrl;
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
        const message = createBaseQueryDenomsMetadataRequest();
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
        const message = createBaseQueryDenomsMetadataRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryDenomsMetadataRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsMetadataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataRequest",
            value: QueryDenomsMetadataRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryDenomsMetadataRequest.typeUrl, QueryDenomsMetadataRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomsMetadataRequest.aminoType, QueryDenomsMetadataRequest.typeUrl);
function createBaseQueryDenomsMetadataResponse() {
    return {
        metadatas: [],
        pagination: undefined
    };
}
export const QueryDenomsMetadataResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataResponse",
    aminoType: "cosmos-sdk/QueryDenomsMetadataResponse",
    is(o) {
        return o && (o.$typeUrl === QueryDenomsMetadataResponse.typeUrl || Array.isArray(o.metadatas) && (!o.metadatas.length || Metadata.is(o.metadatas[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryDenomsMetadataResponse.typeUrl || Array.isArray(o.metadatas) && (!o.metadatas.length || Metadata.isSDK(o.metadatas[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.metadatas) {
            Metadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadatas.push(Metadata.decode(reader, reader.uint32()));
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
        const message = createBaseQueryDenomsMetadataResponse();
        message.metadatas = object.metadatas?.map(e => Metadata.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryDenomsMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataResponse",
            value: QueryDenomsMetadataResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryDenomsMetadataResponse.typeUrl, QueryDenomsMetadataResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomsMetadataResponse.aminoType, QueryDenomsMetadataResponse.typeUrl);
function createBaseQueryDenomMetadataRequest() {
    return {
        denom: ""
    };
}
export const QueryDenomMetadataRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataRequest",
    aminoType: "cosmos-sdk/QueryDenomMetadataRequest",
    is(o) {
        return o && (o.$typeUrl === QueryDenomMetadataRequest.typeUrl || typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryDenomMetadataRequest.typeUrl || typeof o.denom === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomMetadataRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return QueryDenomMetadataRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomMetadataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataRequest",
            value: QueryDenomMetadataRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryDenomMetadataRequest.typeUrl, QueryDenomMetadataRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomMetadataRequest.aminoType, QueryDenomMetadataRequest.typeUrl);
function createBaseQueryDenomMetadataResponse() {
    return {
        metadata: Metadata.fromPartial({})
    };
}
export const QueryDenomMetadataResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse",
    aminoType: "cosmos-sdk/QueryDenomMetadataResponse",
    is(o) {
        return o && (o.$typeUrl === QueryDenomMetadataResponse.typeUrl || Metadata.is(o.metadata));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryDenomMetadataResponse.typeUrl || Metadata.isSDK(o.metadata));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomMetadataResponse();
        message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryDenomMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse",
            value: QueryDenomMetadataResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryDenomMetadataResponse.typeUrl, QueryDenomMetadataResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomMetadataResponse.aminoType, QueryDenomMetadataResponse.typeUrl);
function createBaseQueryDenomOwnersRequest() {
    return {
        denom: "",
        pagination: undefined
    };
}
export const QueryDenomOwnersRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersRequest",
    aminoType: "cosmos-sdk/QueryDenomOwnersRequest",
    is(o) {
        return o && (o.$typeUrl === QueryDenomOwnersRequest.typeUrl || typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryDenomOwnersRequest.typeUrl || typeof o.denom === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomOwnersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
        const message = createBaseQueryDenomOwnersRequest();
        message.denom = object.denom ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryDenomOwnersRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomOwnersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersRequest",
            value: QueryDenomOwnersRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryDenomOwnersRequest.typeUrl, QueryDenomOwnersRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomOwnersRequest.aminoType, QueryDenomOwnersRequest.typeUrl);
function createBaseDenomOwner() {
    return {
        address: "",
        balance: Coin.fromPartial({})
    };
}
export const DenomOwner = {
    typeUrl: "/cosmos.bank.v1beta1.DenomOwner",
    aminoType: "cosmos-sdk/DenomOwner",
    is(o) {
        return o && (o.$typeUrl === DenomOwner.typeUrl || typeof o.address === "string" && Coin.is(o.balance));
    },
    isSDK(o) {
        return o && (o.$typeUrl === DenomOwner.typeUrl || typeof o.address === "string" && Coin.isSDK(o.balance));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.balance = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDenomOwner();
        message.address = object.address ?? "";
        message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return DenomOwner.decode(message.value);
    },
    toProto(message) {
        return DenomOwner.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.DenomOwner",
            value: DenomOwner.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(DenomOwner.typeUrl, DenomOwner);
GlobalDecoderRegistry.registerAminoProtoMapping(DenomOwner.aminoType, DenomOwner.typeUrl);
function createBaseQueryDenomOwnersResponse() {
    return {
        denomOwners: [],
        pagination: undefined
    };
}
export const QueryDenomOwnersResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersResponse",
    aminoType: "cosmos-sdk/QueryDenomOwnersResponse",
    is(o) {
        return o && (o.$typeUrl === QueryDenomOwnersResponse.typeUrl || Array.isArray(o.denomOwners) && (!o.denomOwners.length || DenomOwner.is(o.denomOwners[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryDenomOwnersResponse.typeUrl || Array.isArray(o.denom_owners) && (!o.denom_owners.length || DenomOwner.isSDK(o.denom_owners[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.denomOwners) {
            DenomOwner.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomOwnersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomOwners.push(DenomOwner.decode(reader, reader.uint32()));
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
        const message = createBaseQueryDenomOwnersResponse();
        message.denomOwners = object.denomOwners?.map(e => DenomOwner.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return QueryDenomOwnersResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomOwnersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersResponse",
            value: QueryDenomOwnersResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryDenomOwnersResponse.typeUrl, QueryDenomOwnersResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomOwnersResponse.aminoType, QueryDenomOwnersResponse.typeUrl);
//# sourceMappingURL=query.js.map