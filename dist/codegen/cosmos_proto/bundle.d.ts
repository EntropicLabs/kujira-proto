import * as _4 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _4.ScalarType;
    scalarTypeToJSON(object: _4.ScalarType): string;
    ScalarType: typeof _4.ScalarType;
    ScalarTypeSDKType: typeof _4.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        is(o: any): o is _4.InterfaceDescriptor;
        isSDK(o: any): o is _4.InterfaceDescriptorSDKType;
        encode(message: _4.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _4.InterfaceDescriptor;
        fromPartial(object: Partial<_4.InterfaceDescriptor>): _4.InterfaceDescriptor;
        fromProtoMsg(message: _4.InterfaceDescriptorProtoMsg): _4.InterfaceDescriptor;
        toProto(message: _4.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _4.InterfaceDescriptor): _4.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        is(o: any): o is _4.ScalarDescriptor;
        isSDK(o: any): o is _4.ScalarDescriptorSDKType;
        encode(message: _4.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _4.ScalarDescriptor;
        fromPartial(object: Partial<_4.ScalarDescriptor>): _4.ScalarDescriptor;
        fromProtoMsg(message: _4.ScalarDescriptorProtoMsg): _4.ScalarDescriptor;
        toProto(message: _4.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _4.ScalarDescriptor): _4.ScalarDescriptorProtoMsg;
    };
};
