import * as _47 from "./wasm/v1/authz";
import * as _48 from "./wasm/v1/genesis";
import * as _49 from "./wasm/v1/ibc";
import * as _50 from "./wasm/v1/proposal";
import * as _51 from "./wasm/v1/query";
import * as _52 from "./wasm/v1/tx";
import * as _53 from "./wasm/v1/types";
import * as _103 from "./wasm/v1/query.rpc.Query";
import * as _104 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _104.MsgClientImpl;
            QueryClientImpl: typeof _103.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _51.QueryContractInfoRequest): Promise<_51.QueryContractInfoResponse>;
                contractHistory(request: _51.QueryContractHistoryRequest): Promise<_51.QueryContractHistoryResponse>;
                contractsByCode(request: _51.QueryContractsByCodeRequest): Promise<_51.QueryContractsByCodeResponse>;
                allContractState(request: _51.QueryAllContractStateRequest): Promise<_51.QueryAllContractStateResponse>;
                rawContractState(request: _51.QueryRawContractStateRequest): Promise<_51.QueryRawContractStateResponse>;
                smartContractState(request: _51.QuerySmartContractStateRequest): Promise<_51.QuerySmartContractStateResponse>;
                code(request: _51.QueryCodeRequest): Promise<_51.QueryCodeResponse>;
                codes(request?: _51.QueryCodesRequest): Promise<_51.QueryCodesResponse>;
                pinnedCodes(request?: _51.QueryPinnedCodesRequest): Promise<_51.QueryPinnedCodesResponse>;
                params(request?: _51.QueryParamsRequest): Promise<_51.QueryParamsResponse>;
                contractsByCreator(request: _51.QueryContractsByCreatorRequest): Promise<_51.QueryContractsByCreatorResponse>;
            };
            accessTypeFromJSON(object: any): _53.AccessType;
            accessTypeToJSON(object: _53.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _53.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _53.ContractCodeHistoryOperationType): string;
            AccessType: typeof _53.AccessType;
            AccessTypeSDKType: typeof _53.AccessType;
            ContractCodeHistoryOperationType: typeof _53.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _53.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _53.AccessTypeParam;
                isSDK(o: any): o is _53.AccessTypeParamSDKType;
                encode(message: _53.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.AccessTypeParam;
                fromPartial(object: Partial<_53.AccessTypeParam>): _53.AccessTypeParam;
                fromProtoMsg(message: _53.AccessTypeParamProtoMsg): _53.AccessTypeParam;
                toProto(message: _53.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _53.AccessTypeParam): _53.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _53.AccessConfig;
                isSDK(o: any): o is _53.AccessConfigSDKType;
                encode(message: _53.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.AccessConfig;
                fromPartial(object: Partial<_53.AccessConfig>): _53.AccessConfig;
                fromProtoMsg(message: _53.AccessConfigProtoMsg): _53.AccessConfig;
                toProto(message: _53.AccessConfig): Uint8Array;
                toProtoMsg(message: _53.AccessConfig): _53.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _53.Params;
                isSDK(o: any): o is _53.ParamsSDKType;
                encode(message: _53.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.Params;
                fromPartial(object: Partial<_53.Params>): _53.Params;
                fromProtoMsg(message: _53.ParamsProtoMsg): _53.Params;
                toProto(message: _53.Params): Uint8Array;
                toProtoMsg(message: _53.Params): _53.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _53.CodeInfo;
                isSDK(o: any): o is _53.CodeInfoSDKType;
                encode(message: _53.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.CodeInfo;
                fromPartial(object: Partial<_53.CodeInfo>): _53.CodeInfo;
                fromProtoMsg(message: _53.CodeInfoProtoMsg): _53.CodeInfo;
                toProto(message: _53.CodeInfo): Uint8Array;
                toProtoMsg(message: _53.CodeInfo): _53.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _53.ContractInfo;
                isSDK(o: any): o is _53.ContractInfoSDKType;
                encode(message: _53.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.ContractInfo;
                fromPartial(object: Partial<_53.ContractInfo>): _53.ContractInfo;
                fromProtoMsg(message: _53.ContractInfoProtoMsg): _53.ContractInfo;
                toProto(message: _53.ContractInfo): Uint8Array;
                toProtoMsg(message: _53.ContractInfo): _53.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _53.ContractCodeHistoryEntry;
                isSDK(o: any): o is _53.ContractCodeHistoryEntrySDKType;
                encode(message: _53.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_53.ContractCodeHistoryEntry>): _53.ContractCodeHistoryEntry;
                fromProtoMsg(message: _53.ContractCodeHistoryEntryProtoMsg): _53.ContractCodeHistoryEntry;
                toProto(message: _53.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _53.ContractCodeHistoryEntry): _53.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _53.AbsoluteTxPosition;
                isSDK(o: any): o is _53.AbsoluteTxPositionSDKType;
                encode(message: _53.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.AbsoluteTxPosition;
                fromPartial(object: Partial<_53.AbsoluteTxPosition>): _53.AbsoluteTxPosition;
                fromProtoMsg(message: _53.AbsoluteTxPositionProtoMsg): _53.AbsoluteTxPosition;
                toProto(message: _53.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _53.AbsoluteTxPosition): _53.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _53.Model;
                isSDK(o: any): o is _53.ModelSDKType;
                encode(message: _53.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.Model;
                fromPartial(object: Partial<_53.Model>): _53.Model;
                fromProtoMsg(message: _53.ModelProtoMsg): _53.Model;
                toProto(message: _53.Model): Uint8Array;
                toProtoMsg(message: _53.Model): _53.ModelProtoMsg;
            };
            MsgStoreCode: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _52.MsgStoreCode;
                isSDK(o: any): o is _52.MsgStoreCodeSDKType;
                encode(message: _52.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgStoreCode;
                fromPartial(object: Partial<_52.MsgStoreCode>): _52.MsgStoreCode;
                fromProtoMsg(message: _52.MsgStoreCodeProtoMsg): _52.MsgStoreCode;
                toProto(message: _52.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _52.MsgStoreCode): _52.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _52.MsgStoreCodeResponse;
                isSDK(o: any): o is _52.MsgStoreCodeResponseSDKType;
                encode(message: _52.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgStoreCodeResponse;
                fromPartial(object: Partial<_52.MsgStoreCodeResponse>): _52.MsgStoreCodeResponse;
                fromProtoMsg(message: _52.MsgStoreCodeResponseProtoMsg): _52.MsgStoreCodeResponse;
                toProto(message: _52.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _52.MsgStoreCodeResponse): _52.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _52.MsgInstantiateContract;
                isSDK(o: any): o is _52.MsgInstantiateContractSDKType;
                encode(message: _52.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgInstantiateContract;
                fromPartial(object: Partial<_52.MsgInstantiateContract>): _52.MsgInstantiateContract;
                fromProtoMsg(message: _52.MsgInstantiateContractProtoMsg): _52.MsgInstantiateContract;
                toProto(message: _52.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _52.MsgInstantiateContract): _52.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _52.MsgInstantiateContract2;
                isSDK(o: any): o is _52.MsgInstantiateContract2SDKType;
                encode(message: _52.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgInstantiateContract2;
                fromPartial(object: Partial<_52.MsgInstantiateContract2>): _52.MsgInstantiateContract2;
                fromProtoMsg(message: _52.MsgInstantiateContract2ProtoMsg): _52.MsgInstantiateContract2;
                toProto(message: _52.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _52.MsgInstantiateContract2): _52.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _52.MsgInstantiateContractResponse;
                isSDK(o: any): o is _52.MsgInstantiateContractResponseSDKType;
                encode(message: _52.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_52.MsgInstantiateContractResponse>): _52.MsgInstantiateContractResponse;
                fromProtoMsg(message: _52.MsgInstantiateContractResponseProtoMsg): _52.MsgInstantiateContractResponse;
                toProto(message: _52.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _52.MsgInstantiateContractResponse): _52.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _52.MsgInstantiateContract2Response;
                isSDK(o: any): o is _52.MsgInstantiateContract2ResponseSDKType;
                encode(message: _52.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_52.MsgInstantiateContract2Response>): _52.MsgInstantiateContract2Response;
                fromProtoMsg(message: _52.MsgInstantiateContract2ResponseProtoMsg): _52.MsgInstantiateContract2Response;
                toProto(message: _52.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _52.MsgInstantiateContract2Response): _52.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _52.MsgExecuteContract;
                isSDK(o: any): o is _52.MsgExecuteContractSDKType;
                encode(message: _52.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgExecuteContract;
                fromPartial(object: Partial<_52.MsgExecuteContract>): _52.MsgExecuteContract;
                fromProtoMsg(message: _52.MsgExecuteContractProtoMsg): _52.MsgExecuteContract;
                toProto(message: _52.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _52.MsgExecuteContract): _52.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _52.MsgExecuteContractResponse;
                isSDK(o: any): o is _52.MsgExecuteContractResponseSDKType;
                encode(message: _52.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgExecuteContractResponse;
                fromPartial(object: Partial<_52.MsgExecuteContractResponse>): _52.MsgExecuteContractResponse;
                fromProtoMsg(message: _52.MsgExecuteContractResponseProtoMsg): _52.MsgExecuteContractResponse;
                toProto(message: _52.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _52.MsgExecuteContractResponse): _52.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _52.MsgMigrateContract;
                isSDK(o: any): o is _52.MsgMigrateContractSDKType;
                encode(message: _52.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgMigrateContract;
                fromPartial(object: Partial<_52.MsgMigrateContract>): _52.MsgMigrateContract;
                fromProtoMsg(message: _52.MsgMigrateContractProtoMsg): _52.MsgMigrateContract;
                toProto(message: _52.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _52.MsgMigrateContract): _52.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _52.MsgMigrateContractResponse;
                isSDK(o: any): o is _52.MsgMigrateContractResponseSDKType;
                encode(message: _52.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgMigrateContractResponse;
                fromPartial(object: Partial<_52.MsgMigrateContractResponse>): _52.MsgMigrateContractResponse;
                fromProtoMsg(message: _52.MsgMigrateContractResponseProtoMsg): _52.MsgMigrateContractResponse;
                toProto(message: _52.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _52.MsgMigrateContractResponse): _52.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _52.MsgUpdateAdmin;
                isSDK(o: any): o is _52.MsgUpdateAdminSDKType;
                encode(message: _52.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgUpdateAdmin;
                fromPartial(object: Partial<_52.MsgUpdateAdmin>): _52.MsgUpdateAdmin;
                fromProtoMsg(message: _52.MsgUpdateAdminProtoMsg): _52.MsgUpdateAdmin;
                toProto(message: _52.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _52.MsgUpdateAdmin): _52.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _52.MsgUpdateAdminResponse;
                isSDK(o: any): o is _52.MsgUpdateAdminResponseSDKType;
                encode(_: _52.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_52.MsgUpdateAdminResponse>): _52.MsgUpdateAdminResponse;
                fromProtoMsg(message: _52.MsgUpdateAdminResponseProtoMsg): _52.MsgUpdateAdminResponse;
                toProto(message: _52.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _52.MsgUpdateAdminResponse): _52.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _52.MsgClearAdmin;
                isSDK(o: any): o is _52.MsgClearAdminSDKType;
                encode(message: _52.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgClearAdmin;
                fromPartial(object: Partial<_52.MsgClearAdmin>): _52.MsgClearAdmin;
                fromProtoMsg(message: _52.MsgClearAdminProtoMsg): _52.MsgClearAdmin;
                toProto(message: _52.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _52.MsgClearAdmin): _52.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _52.MsgClearAdminResponse;
                isSDK(o: any): o is _52.MsgClearAdminResponseSDKType;
                encode(_: _52.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgClearAdminResponse;
                fromPartial(_: Partial<_52.MsgClearAdminResponse>): _52.MsgClearAdminResponse;
                fromProtoMsg(message: _52.MsgClearAdminResponseProtoMsg): _52.MsgClearAdminResponse;
                toProto(message: _52.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _52.MsgClearAdminResponse): _52.MsgClearAdminResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryContractInfoRequest;
                isSDK(o: any): o is _51.QueryContractInfoRequestSDKType;
                encode(message: _51.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryContractInfoRequest;
                fromPartial(object: Partial<_51.QueryContractInfoRequest>): _51.QueryContractInfoRequest;
                fromProtoMsg(message: _51.QueryContractInfoRequestProtoMsg): _51.QueryContractInfoRequest;
                toProto(message: _51.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _51.QueryContractInfoRequest): _51.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryContractInfoResponse;
                isSDK(o: any): o is _51.QueryContractInfoResponseSDKType;
                encode(message: _51.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryContractInfoResponse;
                fromPartial(object: Partial<_51.QueryContractInfoResponse>): _51.QueryContractInfoResponse;
                fromProtoMsg(message: _51.QueryContractInfoResponseProtoMsg): _51.QueryContractInfoResponse;
                toProto(message: _51.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _51.QueryContractInfoResponse): _51.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryContractHistoryRequest;
                isSDK(o: any): o is _51.QueryContractHistoryRequestSDKType;
                encode(message: _51.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryContractHistoryRequest;
                fromPartial(object: Partial<_51.QueryContractHistoryRequest>): _51.QueryContractHistoryRequest;
                fromProtoMsg(message: _51.QueryContractHistoryRequestProtoMsg): _51.QueryContractHistoryRequest;
                toProto(message: _51.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _51.QueryContractHistoryRequest): _51.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryContractHistoryResponse;
                isSDK(o: any): o is _51.QueryContractHistoryResponseSDKType;
                encode(message: _51.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryContractHistoryResponse;
                fromPartial(object: Partial<_51.QueryContractHistoryResponse>): _51.QueryContractHistoryResponse;
                fromProtoMsg(message: _51.QueryContractHistoryResponseProtoMsg): _51.QueryContractHistoryResponse;
                toProto(message: _51.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _51.QueryContractHistoryResponse): _51.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryContractsByCodeRequest;
                isSDK(o: any): o is _51.QueryContractsByCodeRequestSDKType;
                encode(message: _51.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_51.QueryContractsByCodeRequest>): _51.QueryContractsByCodeRequest;
                fromProtoMsg(message: _51.QueryContractsByCodeRequestProtoMsg): _51.QueryContractsByCodeRequest;
                toProto(message: _51.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _51.QueryContractsByCodeRequest): _51.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryContractsByCodeResponse;
                isSDK(o: any): o is _51.QueryContractsByCodeResponseSDKType;
                encode(message: _51.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_51.QueryContractsByCodeResponse>): _51.QueryContractsByCodeResponse;
                fromProtoMsg(message: _51.QueryContractsByCodeResponseProtoMsg): _51.QueryContractsByCodeResponse;
                toProto(message: _51.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _51.QueryContractsByCodeResponse): _51.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryAllContractStateRequest;
                isSDK(o: any): o is _51.QueryAllContractStateRequestSDKType;
                encode(message: _51.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryAllContractStateRequest;
                fromPartial(object: Partial<_51.QueryAllContractStateRequest>): _51.QueryAllContractStateRequest;
                fromProtoMsg(message: _51.QueryAllContractStateRequestProtoMsg): _51.QueryAllContractStateRequest;
                toProto(message: _51.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _51.QueryAllContractStateRequest): _51.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryAllContractStateResponse;
                isSDK(o: any): o is _51.QueryAllContractStateResponseSDKType;
                encode(message: _51.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryAllContractStateResponse;
                fromPartial(object: Partial<_51.QueryAllContractStateResponse>): _51.QueryAllContractStateResponse;
                fromProtoMsg(message: _51.QueryAllContractStateResponseProtoMsg): _51.QueryAllContractStateResponse;
                toProto(message: _51.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _51.QueryAllContractStateResponse): _51.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryRawContractStateRequest;
                isSDK(o: any): o is _51.QueryRawContractStateRequestSDKType;
                encode(message: _51.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryRawContractStateRequest;
                fromPartial(object: Partial<_51.QueryRawContractStateRequest>): _51.QueryRawContractStateRequest;
                fromProtoMsg(message: _51.QueryRawContractStateRequestProtoMsg): _51.QueryRawContractStateRequest;
                toProto(message: _51.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _51.QueryRawContractStateRequest): _51.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryRawContractStateResponse;
                isSDK(o: any): o is _51.QueryRawContractStateResponseSDKType;
                encode(message: _51.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryRawContractStateResponse;
                fromPartial(object: Partial<_51.QueryRawContractStateResponse>): _51.QueryRawContractStateResponse;
                fromProtoMsg(message: _51.QueryRawContractStateResponseProtoMsg): _51.QueryRawContractStateResponse;
                toProto(message: _51.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _51.QueryRawContractStateResponse): _51.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QuerySmartContractStateRequest;
                isSDK(o: any): o is _51.QuerySmartContractStateRequestSDKType;
                encode(message: _51.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_51.QuerySmartContractStateRequest>): _51.QuerySmartContractStateRequest;
                fromProtoMsg(message: _51.QuerySmartContractStateRequestProtoMsg): _51.QuerySmartContractStateRequest;
                toProto(message: _51.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _51.QuerySmartContractStateRequest): _51.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QuerySmartContractStateResponse;
                isSDK(o: any): o is _51.QuerySmartContractStateResponseSDKType;
                encode(message: _51.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_51.QuerySmartContractStateResponse>): _51.QuerySmartContractStateResponse;
                fromProtoMsg(message: _51.QuerySmartContractStateResponseProtoMsg): _51.QuerySmartContractStateResponse;
                toProto(message: _51.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _51.QuerySmartContractStateResponse): _51.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryCodeRequest;
                isSDK(o: any): o is _51.QueryCodeRequestSDKType;
                encode(message: _51.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryCodeRequest;
                fromPartial(object: Partial<_51.QueryCodeRequest>): _51.QueryCodeRequest;
                fromProtoMsg(message: _51.QueryCodeRequestProtoMsg): _51.QueryCodeRequest;
                toProto(message: _51.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _51.QueryCodeRequest): _51.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.CodeInfoResponse;
                isSDK(o: any): o is _51.CodeInfoResponseSDKType;
                encode(message: _51.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.CodeInfoResponse;
                fromPartial(object: Partial<_51.CodeInfoResponse>): _51.CodeInfoResponse;
                fromProtoMsg(message: _51.CodeInfoResponseProtoMsg): _51.CodeInfoResponse;
                toProto(message: _51.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _51.CodeInfoResponse): _51.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryCodeResponse;
                isSDK(o: any): o is _51.QueryCodeResponseSDKType;
                encode(message: _51.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryCodeResponse;
                fromPartial(object: Partial<_51.QueryCodeResponse>): _51.QueryCodeResponse;
                fromProtoMsg(message: _51.QueryCodeResponseProtoMsg): _51.QueryCodeResponse;
                toProto(message: _51.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _51.QueryCodeResponse): _51.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryCodesRequest;
                isSDK(o: any): o is _51.QueryCodesRequestSDKType;
                encode(message: _51.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryCodesRequest;
                fromPartial(object: Partial<_51.QueryCodesRequest>): _51.QueryCodesRequest;
                fromProtoMsg(message: _51.QueryCodesRequestProtoMsg): _51.QueryCodesRequest;
                toProto(message: _51.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _51.QueryCodesRequest): _51.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryCodesResponse;
                isSDK(o: any): o is _51.QueryCodesResponseSDKType;
                encode(message: _51.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryCodesResponse;
                fromPartial(object: Partial<_51.QueryCodesResponse>): _51.QueryCodesResponse;
                fromProtoMsg(message: _51.QueryCodesResponseProtoMsg): _51.QueryCodesResponse;
                toProto(message: _51.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _51.QueryCodesResponse): _51.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryPinnedCodesRequest;
                isSDK(o: any): o is _51.QueryPinnedCodesRequestSDKType;
                encode(message: _51.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_51.QueryPinnedCodesRequest>): _51.QueryPinnedCodesRequest;
                fromProtoMsg(message: _51.QueryPinnedCodesRequestProtoMsg): _51.QueryPinnedCodesRequest;
                toProto(message: _51.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _51.QueryPinnedCodesRequest): _51.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryPinnedCodesResponse;
                isSDK(o: any): o is _51.QueryPinnedCodesResponseSDKType;
                encode(message: _51.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_51.QueryPinnedCodesResponse>): _51.QueryPinnedCodesResponse;
                fromProtoMsg(message: _51.QueryPinnedCodesResponseProtoMsg): _51.QueryPinnedCodesResponse;
                toProto(message: _51.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _51.QueryPinnedCodesResponse): _51.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryParamsRequest;
                isSDK(o: any): o is _51.QueryParamsRequestSDKType;
                encode(_: _51.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryParamsRequest;
                fromPartial(_: Partial<_51.QueryParamsRequest>): _51.QueryParamsRequest;
                fromProtoMsg(message: _51.QueryParamsRequestProtoMsg): _51.QueryParamsRequest;
                toProto(message: _51.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _51.QueryParamsRequest): _51.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryParamsResponse;
                isSDK(o: any): o is _51.QueryParamsResponseSDKType;
                encode(message: _51.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryParamsResponse;
                fromPartial(object: Partial<_51.QueryParamsResponse>): _51.QueryParamsResponse;
                fromProtoMsg(message: _51.QueryParamsResponseProtoMsg): _51.QueryParamsResponse;
                toProto(message: _51.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _51.QueryParamsResponse): _51.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryContractsByCreatorRequest;
                isSDK(o: any): o is _51.QueryContractsByCreatorRequestSDKType;
                encode(message: _51.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_51.QueryContractsByCreatorRequest>): _51.QueryContractsByCreatorRequest;
                fromProtoMsg(message: _51.QueryContractsByCreatorRequestProtoMsg): _51.QueryContractsByCreatorRequest;
                toProto(message: _51.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _51.QueryContractsByCreatorRequest): _51.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _51.QueryContractsByCreatorResponse;
                isSDK(o: any): o is _51.QueryContractsByCreatorResponseSDKType;
                encode(message: _51.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_51.QueryContractsByCreatorResponse>): _51.QueryContractsByCreatorResponse;
                fromProtoMsg(message: _51.QueryContractsByCreatorResponseProtoMsg): _51.QueryContractsByCreatorResponse;
                toProto(message: _51.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _51.QueryContractsByCreatorResponse): _51.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _50.StoreCodeProposal;
                isSDK(o: any): o is _50.StoreCodeProposalSDKType;
                encode(message: _50.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.StoreCodeProposal;
                fromPartial(object: Partial<_50.StoreCodeProposal>): _50.StoreCodeProposal;
                fromProtoMsg(message: _50.StoreCodeProposalProtoMsg): _50.StoreCodeProposal;
                toProto(message: _50.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _50.StoreCodeProposal): _50.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _50.InstantiateContractProposal;
                isSDK(o: any): o is _50.InstantiateContractProposalSDKType;
                encode(message: _50.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.InstantiateContractProposal;
                fromPartial(object: Partial<_50.InstantiateContractProposal>): _50.InstantiateContractProposal;
                fromProtoMsg(message: _50.InstantiateContractProposalProtoMsg): _50.InstantiateContractProposal;
                toProto(message: _50.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _50.InstantiateContractProposal): _50.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _50.InstantiateContract2Proposal;
                isSDK(o: any): o is _50.InstantiateContract2ProposalSDKType;
                encode(message: _50.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.InstantiateContract2Proposal;
                fromPartial(object: Partial<_50.InstantiateContract2Proposal>): _50.InstantiateContract2Proposal;
                fromProtoMsg(message: _50.InstantiateContract2ProposalProtoMsg): _50.InstantiateContract2Proposal;
                toProto(message: _50.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _50.InstantiateContract2Proposal): _50.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _50.MigrateContractProposal;
                isSDK(o: any): o is _50.MigrateContractProposalSDKType;
                encode(message: _50.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.MigrateContractProposal;
                fromPartial(object: Partial<_50.MigrateContractProposal>): _50.MigrateContractProposal;
                fromProtoMsg(message: _50.MigrateContractProposalProtoMsg): _50.MigrateContractProposal;
                toProto(message: _50.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _50.MigrateContractProposal): _50.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _50.SudoContractProposal;
                isSDK(o: any): o is _50.SudoContractProposalSDKType;
                encode(message: _50.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.SudoContractProposal;
                fromPartial(object: Partial<_50.SudoContractProposal>): _50.SudoContractProposal;
                fromProtoMsg(message: _50.SudoContractProposalProtoMsg): _50.SudoContractProposal;
                toProto(message: _50.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _50.SudoContractProposal): _50.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _50.ExecuteContractProposal;
                isSDK(o: any): o is _50.ExecuteContractProposalSDKType;
                encode(message: _50.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.ExecuteContractProposal;
                fromPartial(object: Partial<_50.ExecuteContractProposal>): _50.ExecuteContractProposal;
                fromProtoMsg(message: _50.ExecuteContractProposalProtoMsg): _50.ExecuteContractProposal;
                toProto(message: _50.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _50.ExecuteContractProposal): _50.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _50.UpdateAdminProposal;
                isSDK(o: any): o is _50.UpdateAdminProposalSDKType;
                encode(message: _50.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.UpdateAdminProposal;
                fromPartial(object: Partial<_50.UpdateAdminProposal>): _50.UpdateAdminProposal;
                fromProtoMsg(message: _50.UpdateAdminProposalProtoMsg): _50.UpdateAdminProposal;
                toProto(message: _50.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _50.UpdateAdminProposal): _50.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _50.ClearAdminProposal;
                isSDK(o: any): o is _50.ClearAdminProposalSDKType;
                encode(message: _50.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.ClearAdminProposal;
                fromPartial(object: Partial<_50.ClearAdminProposal>): _50.ClearAdminProposal;
                fromProtoMsg(message: _50.ClearAdminProposalProtoMsg): _50.ClearAdminProposal;
                toProto(message: _50.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _50.ClearAdminProposal): _50.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _50.PinCodesProposal;
                isSDK(o: any): o is _50.PinCodesProposalSDKType;
                encode(message: _50.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.PinCodesProposal;
                fromPartial(object: Partial<_50.PinCodesProposal>): _50.PinCodesProposal;
                fromProtoMsg(message: _50.PinCodesProposalProtoMsg): _50.PinCodesProposal;
                toProto(message: _50.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _50.PinCodesProposal): _50.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _50.UnpinCodesProposal;
                isSDK(o: any): o is _50.UnpinCodesProposalSDKType;
                encode(message: _50.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.UnpinCodesProposal;
                fromPartial(object: Partial<_50.UnpinCodesProposal>): _50.UnpinCodesProposal;
                fromProtoMsg(message: _50.UnpinCodesProposalProtoMsg): _50.UnpinCodesProposal;
                toProto(message: _50.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _50.UnpinCodesProposal): _50.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _50.AccessConfigUpdate;
                isSDK(o: any): o is _50.AccessConfigUpdateSDKType;
                encode(message: _50.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.AccessConfigUpdate;
                fromPartial(object: Partial<_50.AccessConfigUpdate>): _50.AccessConfigUpdate;
                fromProtoMsg(message: _50.AccessConfigUpdateProtoMsg): _50.AccessConfigUpdate;
                toProto(message: _50.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _50.AccessConfigUpdate): _50.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _50.UpdateInstantiateConfigProposal;
                isSDK(o: any): o is _50.UpdateInstantiateConfigProposalSDKType;
                encode(message: _50.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_50.UpdateInstantiateConfigProposal>): _50.UpdateInstantiateConfigProposal;
                fromProtoMsg(message: _50.UpdateInstantiateConfigProposalProtoMsg): _50.UpdateInstantiateConfigProposal;
                toProto(message: _50.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _50.UpdateInstantiateConfigProposal): _50.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _50.StoreAndInstantiateContractProposal;
                isSDK(o: any): o is _50.StoreAndInstantiateContractProposalSDKType;
                encode(message: _50.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_50.StoreAndInstantiateContractProposal>): _50.StoreAndInstantiateContractProposal;
                fromProtoMsg(message: _50.StoreAndInstantiateContractProposalProtoMsg): _50.StoreAndInstantiateContractProposal;
                toProto(message: _50.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _50.StoreAndInstantiateContractProposal): _50.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _49.MsgIBCSend;
                isSDK(o: any): o is _49.MsgIBCSendSDKType;
                encode(message: _49.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgIBCSend;
                fromPartial(object: Partial<_49.MsgIBCSend>): _49.MsgIBCSend;
                fromProtoMsg(message: _49.MsgIBCSendProtoMsg): _49.MsgIBCSend;
                toProto(message: _49.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _49.MsgIBCSend): _49.MsgIBCSendProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _49.MsgIBCCloseChannel;
                isSDK(o: any): o is _49.MsgIBCCloseChannelSDKType;
                encode(message: _49.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgIBCCloseChannel;
                fromPartial(object: Partial<_49.MsgIBCCloseChannel>): _49.MsgIBCCloseChannel;
                fromProtoMsg(message: _49.MsgIBCCloseChannelProtoMsg): _49.MsgIBCCloseChannel;
                toProto(message: _49.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _49.MsgIBCCloseChannel): _49.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _48.GenesisState;
                isSDK(o: any): o is _48.GenesisStateSDKType;
                encode(message: _48.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.GenesisState;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
                fromProtoMsg(message: _48.GenesisStateProtoMsg): _48.GenesisState;
                toProto(message: _48.GenesisState): Uint8Array;
                toProtoMsg(message: _48.GenesisState): _48.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _48.Code;
                isSDK(o: any): o is _48.CodeSDKType;
                encode(message: _48.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.Code;
                fromPartial(object: Partial<_48.Code>): _48.Code;
                fromProtoMsg(message: _48.CodeProtoMsg): _48.Code;
                toProto(message: _48.Code): Uint8Array;
                toProtoMsg(message: _48.Code): _48.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _48.Contract;
                isSDK(o: any): o is _48.ContractSDKType;
                encode(message: _48.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.Contract;
                fromPartial(object: Partial<_48.Contract>): _48.Contract;
                fromProtoMsg(message: _48.ContractProtoMsg): _48.Contract;
                toProto(message: _48.Contract): Uint8Array;
                toProtoMsg(message: _48.Contract): _48.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _48.Sequence;
                isSDK(o: any): o is _48.SequenceSDKType;
                encode(message: _48.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.Sequence;
                fromPartial(object: Partial<_48.Sequence>): _48.Sequence;
                fromProtoMsg(message: _48.SequenceProtoMsg): _48.Sequence;
                toProto(message: _48.Sequence): Uint8Array;
                toProtoMsg(message: _48.Sequence): _48.SequenceProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.ContractExecutionAuthorization;
                isSDK(o: any): o is _47.ContractExecutionAuthorizationSDKType;
                encode(message: _47.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.ContractExecutionAuthorization;
                fromPartial(object: Partial<_47.ContractExecutionAuthorization>): _47.ContractExecutionAuthorization;
                fromProtoMsg(message: _47.ContractExecutionAuthorizationProtoMsg): _47.ContractExecutionAuthorization;
                toProto(message: _47.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _47.ContractExecutionAuthorization): _47.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.ContractMigrationAuthorization;
                isSDK(o: any): o is _47.ContractMigrationAuthorizationSDKType;
                encode(message: _47.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.ContractMigrationAuthorization;
                fromPartial(object: Partial<_47.ContractMigrationAuthorization>): _47.ContractMigrationAuthorization;
                fromProtoMsg(message: _47.ContractMigrationAuthorizationProtoMsg): _47.ContractMigrationAuthorization;
                toProto(message: _47.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _47.ContractMigrationAuthorization): _47.ContractMigrationAuthorizationProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.ContractGrant;
                isSDK(o: any): o is _47.ContractGrantSDKType;
                encode(message: _47.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.ContractGrant;
                fromPartial(object: Partial<_47.ContractGrant>): _47.ContractGrant;
                fromProtoMsg(message: _47.ContractGrantProtoMsg): _47.ContractGrant;
                toProto(message: _47.ContractGrant): Uint8Array;
                toProtoMsg(message: _47.ContractGrant): _47.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.MaxCallsLimit;
                isSDK(o: any): o is _47.MaxCallsLimitSDKType;
                encode(message: _47.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.MaxCallsLimit;
                fromPartial(object: Partial<_47.MaxCallsLimit>): _47.MaxCallsLimit;
                fromProtoMsg(message: _47.MaxCallsLimitProtoMsg): _47.MaxCallsLimit;
                toProto(message: _47.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _47.MaxCallsLimit): _47.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.MaxFundsLimit;
                isSDK(o: any): o is _47.MaxFundsLimitSDKType;
                encode(message: _47.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.MaxFundsLimit;
                fromPartial(object: Partial<_47.MaxFundsLimit>): _47.MaxFundsLimit;
                fromProtoMsg(message: _47.MaxFundsLimitProtoMsg): _47.MaxFundsLimit;
                toProto(message: _47.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _47.MaxFundsLimit): _47.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.CombinedLimit;
                isSDK(o: any): o is _47.CombinedLimitSDKType;
                encode(message: _47.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.CombinedLimit;
                fromPartial(object: Partial<_47.CombinedLimit>): _47.CombinedLimit;
                fromProtoMsg(message: _47.CombinedLimitProtoMsg): _47.CombinedLimit;
                toProto(message: _47.CombinedLimit): Uint8Array;
                toProtoMsg(message: _47.CombinedLimit): _47.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.AllowAllMessagesFilter;
                isSDK(o: any): o is _47.AllowAllMessagesFilterSDKType;
                encode(_: _47.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.AllowAllMessagesFilter;
                fromPartial(_: Partial<_47.AllowAllMessagesFilter>): _47.AllowAllMessagesFilter;
                fromProtoMsg(message: _47.AllowAllMessagesFilterProtoMsg): _47.AllowAllMessagesFilter;
                toProto(message: _47.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _47.AllowAllMessagesFilter): _47.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.AcceptedMessageKeysFilter;
                isSDK(o: any): o is _47.AcceptedMessageKeysFilterSDKType;
                encode(message: _47.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_47.AcceptedMessageKeysFilter>): _47.AcceptedMessageKeysFilter;
                fromProtoMsg(message: _47.AcceptedMessageKeysFilterProtoMsg): _47.AcceptedMessageKeysFilter;
                toProto(message: _47.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _47.AcceptedMessageKeysFilter): _47.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.AcceptedMessagesFilter;
                isSDK(o: any): o is _47.AcceptedMessagesFilterSDKType;
                encode(message: _47.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.AcceptedMessagesFilter;
                fromPartial(object: Partial<_47.AcceptedMessagesFilter>): _47.AcceptedMessagesFilter;
                fromProtoMsg(message: _47.AcceptedMessagesFilterProtoMsg): _47.AcceptedMessagesFilter;
                toProto(message: _47.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _47.AcceptedMessagesFilter): _47.AcceptedMessagesFilterProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _104.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _51.QueryContractInfoRequest): Promise<_51.QueryContractInfoResponse>;
                        contractHistory(request: _51.QueryContractHistoryRequest): Promise<_51.QueryContractHistoryResponse>;
                        contractsByCode(request: _51.QueryContractsByCodeRequest): Promise<_51.QueryContractsByCodeResponse>;
                        allContractState(request: _51.QueryAllContractStateRequest): Promise<_51.QueryAllContractStateResponse>;
                        rawContractState(request: _51.QueryRawContractStateRequest): Promise<_51.QueryRawContractStateResponse>;
                        smartContractState(request: _51.QuerySmartContractStateRequest): Promise<_51.QuerySmartContractStateResponse>;
                        code(request: _51.QueryCodeRequest): Promise<_51.QueryCodeResponse>;
                        codes(request?: _51.QueryCodesRequest): Promise<_51.QueryCodesResponse>;
                        pinnedCodes(request?: _51.QueryPinnedCodesRequest): Promise<_51.QueryPinnedCodesResponse>;
                        params(request?: _51.QueryParamsRequest): Promise<_51.QueryParamsResponse>;
                        contractsByCreator(request: _51.QueryContractsByCreatorRequest): Promise<_51.QueryContractsByCreatorResponse>;
                    };
                };
            };
        }>;
    };
}
