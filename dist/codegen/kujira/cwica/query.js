import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
function createBaseQueryInterchainAccountRequest() {
    return {
        owner: "",
        connectionId: "",
        accountId: ""
    };
}
export const QueryInterchainAccountRequest = {
    typeUrl: "/kujira.cwica.QueryInterchainAccountRequest",
    is(o) {
        return o && (o.$typeUrl === QueryInterchainAccountRequest.typeUrl || typeof o.owner === "string" && typeof o.connectionId === "string" && typeof o.accountId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryInterchainAccountRequest.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string" && typeof o.account_id === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.accountId !== "") {
            writer.uint32(26).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInterchainAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.accountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryInterchainAccountRequest();
        message.owner = object.owner ?? "";
        message.connectionId = object.connectionId ?? "";
        message.accountId = object.accountId ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return QueryInterchainAccountRequest.decode(message.value);
    },
    toProto(message) {
        return QueryInterchainAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.cwica.QueryInterchainAccountRequest",
            value: QueryInterchainAccountRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryInterchainAccountRequest.typeUrl, QueryInterchainAccountRequest);
function createBaseQueryInterchainAccountResponse() {
    return {
        interchainAccountAddress: ""
    };
}
export const QueryInterchainAccountResponse = {
    typeUrl: "/kujira.cwica.QueryInterchainAccountResponse",
    is(o) {
        return o && (o.$typeUrl === QueryInterchainAccountResponse.typeUrl || typeof o.interchainAccountAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryInterchainAccountResponse.typeUrl || typeof o.interchain_account_address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.interchainAccountAddress !== "") {
            writer.uint32(10).string(message.interchainAccountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInterchainAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interchainAccountAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryInterchainAccountResponse();
        message.interchainAccountAddress = object.interchainAccountAddress ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return QueryInterchainAccountResponse.decode(message.value);
    },
    toProto(message) {
        return QueryInterchainAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.cwica.QueryInterchainAccountResponse",
            value: QueryInterchainAccountResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryInterchainAccountResponse.typeUrl, QueryInterchainAccountResponse);
//# sourceMappingURL=query.js.map