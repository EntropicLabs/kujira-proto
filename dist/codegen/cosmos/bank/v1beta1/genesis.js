import { Params, Metadata } from "./bank";
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        balances: [],
        supply: [],
        denomMetadata: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.bank.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.balances) && (!o.balances.length || Balance.is(o.balances[0])) && Array.isArray(o.supply) && (!o.supply.length || Coin.is(o.supply[0])) && Array.isArray(o.denomMetadata) && (!o.denomMetadata.length || Metadata.is(o.denomMetadata[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.balances) && (!o.balances.length || Balance.isSDK(o.balances[0])) && Array.isArray(o.supply) && (!o.supply.length || Coin.isSDK(o.supply[0])) && Array.isArray(o.denom_metadata) && (!o.denom_metadata.length || Metadata.isSDK(o.denom_metadata[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.balances) {
            Balance.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.supply) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.denomMetadata) {
            Metadata.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.balances.push(Balance.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.supply.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.denomMetadata.push(Metadata.decode(reader, reader.uint32()));
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
        message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
        message.supply = object.supply?.map(e => Coin.fromPartial(e)) || [];
        message.denomMetadata = object.denomMetadata?.map(e => Metadata.fromPartial(e)) || [];
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
            typeUrl: "/cosmos.bank.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
function createBaseBalance() {
    return {
        address: "",
        coins: []
    };
}
export const Balance = {
    typeUrl: "/cosmos.bank.v1beta1.Balance",
    aminoType: "cosmos-sdk/Balance",
    is(o) {
        return o && (o.$typeUrl === Balance.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Balance.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBalance();
        message.address = object.address ?? "";
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromProtoMsg(message) {
        return Balance.decode(message.value);
    },
    toProto(message) {
        return Balance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Balance",
            value: Balance.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Balance.typeUrl, Balance);
GlobalDecoderRegistry.registerAminoProtoMapping(Balance.aminoType, Balance.typeUrl);
//# sourceMappingURL=genesis.js.map