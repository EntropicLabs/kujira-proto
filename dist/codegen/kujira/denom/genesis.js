import { Params } from "./params";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        factoryDenoms: []
    };
}
export const GenesisState = {
    typeUrl: "/kujira.denom.GenesisState",
    is(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.factoryDenoms) && (!o.factoryDenoms.length || GenesisDenom.is(o.factoryDenoms[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.factory_denoms) && (!o.factory_denoms.length || GenesisDenom.isSDK(o.factory_denoms[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.factoryDenoms) {
            GenesisDenom.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.factoryDenoms.push(GenesisDenom.decode(reader, reader.uint32()));
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
        message.factoryDenoms = object.factoryDenoms?.map(e => GenesisDenom.fromPartial(e)) || [];
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
            typeUrl: "/kujira.denom.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
function createBaseGenesisDenom() {
    return {
        denom: "",
        authorityMetadata: DenomAuthorityMetadata.fromPartial({})
    };
}
export const GenesisDenom = {
    typeUrl: "/kujira.denom.GenesisDenom",
    is(o) {
        return o && (o.$typeUrl === GenesisDenom.typeUrl || typeof o.denom === "string" && DenomAuthorityMetadata.is(o.authorityMetadata));
    },
    isSDK(o) {
        return o && (o.$typeUrl === GenesisDenom.typeUrl || typeof o.denom === "string" && DenomAuthorityMetadata.isSDK(o.authority_metadata));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.authorityMetadata !== undefined) {
            DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisDenom();
        message.denom = object.denom ?? "";
        message.authorityMetadata = object.authorityMetadata !== undefined && object.authorityMetadata !== null ? DenomAuthorityMetadata.fromPartial(object.authorityMetadata) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return GenesisDenom.decode(message.value);
    },
    toProto(message) {
        return GenesisDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/kujira.denom.GenesisDenom",
            value: GenesisDenom.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GenesisDenom.typeUrl, GenesisDenom);
//# sourceMappingURL=genesis.js.map