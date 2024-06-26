import { Any } from "../../../../google/protobuf/any";
import { BIP44Params } from "../../hd/v1/hd";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
function createBaseRecord() {
    return {
        name: "",
        pubKey: undefined,
        local: undefined,
        ledger: undefined,
        multi: undefined,
        offline: undefined
    };
}
export const Record = {
    typeUrl: "/cosmos.crypto.keyring.v1.Record",
    aminoType: "cosmos-sdk/Record",
    is(o) {
        return o && (o.$typeUrl === Record.typeUrl || typeof o.name === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Record.typeUrl || typeof o.name === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.pubKey !== undefined) {
            Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.local !== undefined) {
            Record_Local.encode(message.local, writer.uint32(26).fork()).ldelim();
        }
        if (message.ledger !== undefined) {
            Record_Ledger.encode(message.ledger, writer.uint32(34).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            Record_Multi.encode(message.multi, writer.uint32(42).fork()).ldelim();
        }
        if (message.offline !== undefined) {
            Record_Offline.encode(message.offline, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.pubKey = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.local = Record_Local.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ledger = Record_Ledger.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.multi = Record_Multi.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.offline = Record_Offline.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRecord();
        message.name = object.name ?? "";
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
        message.local = object.local !== undefined && object.local !== null ? Record_Local.fromPartial(object.local) : undefined;
        message.ledger = object.ledger !== undefined && object.ledger !== null ? Record_Ledger.fromPartial(object.ledger) : undefined;
        message.multi = object.multi !== undefined && object.multi !== null ? Record_Multi.fromPartial(object.multi) : undefined;
        message.offline = object.offline !== undefined && object.offline !== null ? Record_Offline.fromPartial(object.offline) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return Record.decode(message.value);
    },
    toProto(message) {
        return Record.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Record",
            value: Record.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Record.typeUrl, Record);
GlobalDecoderRegistry.registerAminoProtoMapping(Record.aminoType, Record.typeUrl);
function createBaseRecord_Local() {
    return {
        privKey: undefined,
        privKeyType: ""
    };
}
export const Record_Local = {
    typeUrl: "/cosmos.crypto.keyring.v1.Local",
    aminoType: "cosmos-sdk/Local",
    is(o) {
        return o && (o.$typeUrl === Record_Local.typeUrl || typeof o.privKeyType === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Record_Local.typeUrl || typeof o.priv_key_type === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.privKey !== undefined) {
            Any.encode(message.privKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.privKeyType !== "") {
            writer.uint32(18).string(message.privKeyType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Local();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privKey = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.privKeyType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRecord_Local();
        message.privKey = object.privKey !== undefined && object.privKey !== null ? Any.fromPartial(object.privKey) : undefined;
        message.privKeyType = object.privKeyType ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return Record_Local.decode(message.value);
    },
    toProto(message) {
        return Record_Local.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Local",
            value: Record_Local.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Record_Local.typeUrl, Record_Local);
GlobalDecoderRegistry.registerAminoProtoMapping(Record_Local.aminoType, Record_Local.typeUrl);
function createBaseRecord_Ledger() {
    return {
        path: undefined
    };
}
export const Record_Ledger = {
    typeUrl: "/cosmos.crypto.keyring.v1.Ledger",
    aminoType: "cosmos-sdk/Ledger",
    is(o) {
        return o && o.$typeUrl === Record_Ledger.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === Record_Ledger.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.path !== undefined) {
            BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Ledger();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = BIP44Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRecord_Ledger();
        message.path = object.path !== undefined && object.path !== null ? BIP44Params.fromPartial(object.path) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return Record_Ledger.decode(message.value);
    },
    toProto(message) {
        return Record_Ledger.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Ledger",
            value: Record_Ledger.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Record_Ledger.typeUrl, Record_Ledger);
GlobalDecoderRegistry.registerAminoProtoMapping(Record_Ledger.aminoType, Record_Ledger.typeUrl);
function createBaseRecord_Multi() {
    return {};
}
export const Record_Multi = {
    typeUrl: "/cosmos.crypto.keyring.v1.Multi",
    aminoType: "cosmos-sdk/Multi",
    is(o) {
        return o && o.$typeUrl === Record_Multi.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === Record_Multi.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Multi();
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
        const message = createBaseRecord_Multi();
        return message;
    },
    fromProtoMsg(message) {
        return Record_Multi.decode(message.value);
    },
    toProto(message) {
        return Record_Multi.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Multi",
            value: Record_Multi.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Record_Multi.typeUrl, Record_Multi);
GlobalDecoderRegistry.registerAminoProtoMapping(Record_Multi.aminoType, Record_Multi.typeUrl);
function createBaseRecord_Offline() {
    return {};
}
export const Record_Offline = {
    typeUrl: "/cosmos.crypto.keyring.v1.Offline",
    aminoType: "cosmos-sdk/Offline",
    is(o) {
        return o && o.$typeUrl === Record_Offline.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === Record_Offline.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Offline();
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
        const message = createBaseRecord_Offline();
        return message;
    },
    fromProtoMsg(message) {
        return Record_Offline.decode(message.value);
    },
    toProto(message) {
        return Record_Offline.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Offline",
            value: Record_Offline.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Record_Offline.typeUrl, Record_Offline);
GlobalDecoderRegistry.registerAminoProtoMapping(Record_Offline.aminoType, Record_Offline.typeUrl);
//# sourceMappingURL=record.js.map