import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
function createBasePlan() {
    return {
        name: "",
        time: new Date(),
        height: BigInt(0),
        info: "",
        upgradedClientState: undefined
    };
}
export const Plan = {
    typeUrl: "/cosmos.upgrade.v1beta1.Plan",
    aminoType: "cosmos-sdk/Plan",
    is(o) {
        return o && (o.$typeUrl === Plan.typeUrl || typeof o.name === "string" && Timestamp.is(o.time) && typeof o.height === "bigint" && typeof o.info === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Plan.typeUrl || typeof o.name === "string" && Timestamp.isSDK(o.time) && typeof o.height === "bigint" && typeof o.info === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.upgradedClientState !== undefined) {
            Any.encode(message.upgradedClientState, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlan();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.upgradedClientState = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePlan();
        message.name = object.name ?? "";
        message.time = object.time ?? undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.info = object.info ?? "";
        message.upgradedClientState = object.upgradedClientState !== undefined && object.upgradedClientState !== null ? Any.fromPartial(object.upgradedClientState) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return Plan.decode(message.value);
    },
    toProto(message) {
        return Plan.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.Plan",
            value: Plan.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Plan.typeUrl, Plan);
GlobalDecoderRegistry.registerAminoProtoMapping(Plan.aminoType, Plan.typeUrl);
function createBaseSoftwareUpgradeProposal() {
    return {
        $typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
        title: "",
        description: "",
        plan: Plan.fromPartial({})
    };
}
export const SoftwareUpgradeProposal = {
    typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
    aminoType: "cosmos-sdk/SoftwareUpgradeProposal",
    is(o) {
        return o && (o.$typeUrl === SoftwareUpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Plan.is(o.plan));
    },
    isSDK(o) {
        return o && (o.$typeUrl === SoftwareUpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Plan.isSDK(o.plan));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.plan !== undefined) {
            Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSoftwareUpgradeProposal();
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
                    message.plan = Plan.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSoftwareUpgradeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
        return message;
    },
    fromProtoMsg(message) {
        return SoftwareUpgradeProposal.decode(message.value);
    },
    toProto(message) {
        return SoftwareUpgradeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
            value: SoftwareUpgradeProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(SoftwareUpgradeProposal.typeUrl, SoftwareUpgradeProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(SoftwareUpgradeProposal.aminoType, SoftwareUpgradeProposal.typeUrl);
function createBaseCancelSoftwareUpgradeProposal() {
    return {
        $typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
        title: "",
        description: ""
    };
}
export const CancelSoftwareUpgradeProposal = {
    typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
    aminoType: "cosmos-sdk/CancelSoftwareUpgradeProposal",
    is(o) {
        return o && (o.$typeUrl === CancelSoftwareUpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === CancelSoftwareUpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelSoftwareUpgradeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCancelSoftwareUpgradeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        return message;
    },
    fromProtoMsg(message) {
        return CancelSoftwareUpgradeProposal.decode(message.value);
    },
    toProto(message) {
        return CancelSoftwareUpgradeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
            value: CancelSoftwareUpgradeProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(CancelSoftwareUpgradeProposal.typeUrl, CancelSoftwareUpgradeProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(CancelSoftwareUpgradeProposal.aminoType, CancelSoftwareUpgradeProposal.typeUrl);
function createBaseModuleVersion() {
    return {
        name: "",
        version: BigInt(0)
    };
}
export const ModuleVersion = {
    typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion",
    aminoType: "cosmos-sdk/ModuleVersion",
    is(o) {
        return o && (o.$typeUrl === ModuleVersion.typeUrl || typeof o.name === "string" && typeof o.version === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === ModuleVersion.typeUrl || typeof o.name === "string" && typeof o.version === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.version !== BigInt(0)) {
            writer.uint32(16).uint64(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.version = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleVersion();
        message.name = object.name ?? "";
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        return message;
    },
    fromProtoMsg(message) {
        return ModuleVersion.decode(message.value);
    },
    toProto(message) {
        return ModuleVersion.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion",
            value: ModuleVersion.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ModuleVersion.typeUrl, ModuleVersion);
GlobalDecoderRegistry.registerAminoProtoMapping(ModuleVersion.aminoType, ModuleVersion.typeUrl);
//# sourceMappingURL=upgrade.js.map