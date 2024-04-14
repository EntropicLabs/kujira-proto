import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
function createBasePageRequest() {
    return {
        key: new Uint8Array(),
        offset: BigInt(0),
        limit: BigInt(0),
        countTotal: false,
        reverse: false
    };
}
export const PageRequest = {
    typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
    aminoType: "cosmos-sdk/PageRequest",
    is(o) {
        return o && (o.$typeUrl === PageRequest.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && typeof o.offset === "bigint" && typeof o.limit === "bigint" && typeof o.countTotal === "boolean" && typeof o.reverse === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === PageRequest.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && typeof o.offset === "bigint" && typeof o.limit === "bigint" && typeof o.count_total === "boolean" && typeof o.reverse === "boolean");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.offset !== BigInt(0)) {
            writer.uint32(16).uint64(message.offset);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(24).uint64(message.limit);
        }
        if (message.countTotal === true) {
            writer.uint32(32).bool(message.countTotal);
        }
        if (message.reverse === true) {
            writer.uint32(40).bool(message.reverse);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.offset = reader.uint64();
                    break;
                case 3:
                    message.limit = reader.uint64();
                    break;
                case 4:
                    message.countTotal = reader.bool();
                    break;
                case 5:
                    message.reverse = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePageRequest();
        message.key = object.key ?? new Uint8Array();
        message.offset = object.offset !== undefined && object.offset !== null ? BigInt(object.offset.toString()) : BigInt(0);
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
        message.countTotal = object.countTotal ?? false;
        message.reverse = object.reverse ?? false;
        return message;
    },
    fromProtoMsg(message) {
        return PageRequest.decode(message.value);
    },
    toProto(message) {
        return PageRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
            value: PageRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(PageRequest.typeUrl, PageRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(PageRequest.aminoType, PageRequest.typeUrl);
function createBasePageResponse() {
    return {
        nextKey: new Uint8Array(),
        total: BigInt(0)
    };
}
export const PageResponse = {
    typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
    aminoType: "cosmos-sdk/PageResponse",
    is(o) {
        return o && (o.$typeUrl === PageResponse.typeUrl || (o.nextKey instanceof Uint8Array || typeof o.nextKey === "string") && typeof o.total === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === PageResponse.typeUrl || (o.next_key instanceof Uint8Array || typeof o.next_key === "string") && typeof o.total === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.nextKey.length !== 0) {
            writer.uint32(10).bytes(message.nextKey);
        }
        if (message.total !== BigInt(0)) {
            writer.uint32(16).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextKey = reader.bytes();
                    break;
                case 2:
                    message.total = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePageResponse();
        message.nextKey = object.nextKey ?? new Uint8Array();
        message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return PageResponse.decode(message.value);
    },
    toProto(message) {
        return PageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
            value: PageResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(PageResponse.typeUrl, PageResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(PageResponse.aminoType, PageResponse.typeUrl);
//# sourceMappingURL=pagination.js.map