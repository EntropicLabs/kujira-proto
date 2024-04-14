import * as _60 from "./cwica/callback";
import * as _61 from "./cwica/query";
import * as _63 from "./denom/authorityMetadata";
import * as _64 from "./denom/genesis";
import * as _65 from "./denom/params";
import * as _66 from "./denom/query";
import * as _67 from "./denom/tx";
import * as _68 from "./oracle/genesis";
import * as _69 from "./oracle/oracle";
import * as _70 from "./oracle/query";
import * as _71 from "./oracle/tx";
import * as _72 from "./scheduler/genesis";
import * as _73 from "./scheduler/hook";
import * as _74 from "./scheduler/params";
import * as _75 from "./scheduler/proposal";
import * as _76 from "./scheduler/query";
import * as _105 from "./cwica/query.rpc.Query";
import * as _106 from "./denom/query.rpc.Query";
import * as _107 from "./oracle/query.rpc.Query";
import * as _108 from "./scheduler/query.rpc.Query";
import * as _109 from "./denom/tx.rpc.msg";
import * as _110 from "./oracle/tx.rpc.msg";
export declare namespace kujira {
    const cwica: {
        QueryClientImpl: typeof _105.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            interchainAccount(request: _61.QueryInterchainAccountRequest): Promise<_61.QueryInterchainAccountResponse>;
        };
        QueryInterchainAccountRequest: {
            typeUrl: string;
            is(o: any): o is _61.QueryInterchainAccountRequest;
            isSDK(o: any): o is _61.QueryInterchainAccountRequestSDKType;
            encode(message: _61.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryInterchainAccountRequest;
            fromPartial(object: Partial<_61.QueryInterchainAccountRequest>): _61.QueryInterchainAccountRequest;
            fromProtoMsg(message: _61.QueryInterchainAccountRequestProtoMsg): _61.QueryInterchainAccountRequest;
            toProto(message: _61.QueryInterchainAccountRequest): Uint8Array;
            toProtoMsg(message: _61.QueryInterchainAccountRequest): _61.QueryInterchainAccountRequestProtoMsg;
        };
        QueryInterchainAccountResponse: {
            typeUrl: string;
            is(o: any): o is _61.QueryInterchainAccountResponse;
            isSDK(o: any): o is _61.QueryInterchainAccountResponseSDKType;
            encode(message: _61.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryInterchainAccountResponse;
            fromPartial(object: Partial<_61.QueryInterchainAccountResponse>): _61.QueryInterchainAccountResponse;
            fromProtoMsg(message: _61.QueryInterchainAccountResponseProtoMsg): _61.QueryInterchainAccountResponse;
            toProto(message: _61.QueryInterchainAccountResponse): Uint8Array;
            toProtoMsg(message: _61.QueryInterchainAccountResponse): _61.QueryInterchainAccountResponseProtoMsg;
        };
        CallbackData: {
            typeUrl: string;
            is(o: any): o is _60.CallbackData;
            isSDK(o: any): o is _60.CallbackDataSDKType;
            encode(message: _60.CallbackData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.CallbackData;
            fromPartial(object: Partial<_60.CallbackData>): _60.CallbackData;
            fromProtoMsg(message: _60.CallbackDataProtoMsg): _60.CallbackData;
            toProto(message: _60.CallbackData): Uint8Array;
            toProtoMsg(message: _60.CallbackData): _60.CallbackDataProtoMsg;
        };
    };
    const denom: {
        MsgClientImpl: typeof _109.MsgClientImpl;
        QueryClientImpl: typeof _106.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
            denomAuthorityMetadata(request: _66.QueryDenomAuthorityMetadataRequest): Promise<_66.QueryDenomAuthorityMetadataResponse>;
            denomsFromCreator(request: _66.QueryDenomsFromCreatorRequest): Promise<_66.QueryDenomsFromCreatorResponse>;
        };
        MsgCreateDenom: {
            typeUrl: string;
            is(o: any): o is _67.MsgCreateDenom;
            isSDK(o: any): o is _67.MsgCreateDenomSDKType;
            encode(message: _67.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.MsgCreateDenom;
            fromPartial(object: Partial<_67.MsgCreateDenom>): _67.MsgCreateDenom;
            fromProtoMsg(message: _67.MsgCreateDenomProtoMsg): _67.MsgCreateDenom;
            toProto(message: _67.MsgCreateDenom): Uint8Array;
            toProtoMsg(message: _67.MsgCreateDenom): _67.MsgCreateDenomProtoMsg;
        };
        MsgCreateDenomResponse: {
            typeUrl: string;
            is(o: any): o is _67.MsgCreateDenomResponse;
            isSDK(o: any): o is _67.MsgCreateDenomResponseSDKType;
            encode(message: _67.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.MsgCreateDenomResponse;
            fromPartial(object: Partial<_67.MsgCreateDenomResponse>): _67.MsgCreateDenomResponse;
            fromProtoMsg(message: _67.MsgCreateDenomResponseProtoMsg): _67.MsgCreateDenomResponse;
            toProto(message: _67.MsgCreateDenomResponse): Uint8Array;
            toProtoMsg(message: _67.MsgCreateDenomResponse): _67.MsgCreateDenomResponseProtoMsg;
        };
        MsgMint: {
            typeUrl: string;
            is(o: any): o is _67.MsgMint;
            isSDK(o: any): o is _67.MsgMintSDKType;
            encode(message: _67.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.MsgMint;
            fromPartial(object: Partial<_67.MsgMint>): _67.MsgMint;
            fromProtoMsg(message: _67.MsgMintProtoMsg): _67.MsgMint;
            toProto(message: _67.MsgMint): Uint8Array;
            toProtoMsg(message: _67.MsgMint): _67.MsgMintProtoMsg;
        };
        MsgMintResponse: {
            typeUrl: string;
            is(o: any): o is _67.MsgMintResponse;
            isSDK(o: any): o is _67.MsgMintResponseSDKType;
            encode(_: _67.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.MsgMintResponse;
            fromPartial(_: Partial<_67.MsgMintResponse>): _67.MsgMintResponse;
            fromProtoMsg(message: _67.MsgMintResponseProtoMsg): _67.MsgMintResponse;
            toProto(message: _67.MsgMintResponse): Uint8Array;
            toProtoMsg(message: _67.MsgMintResponse): _67.MsgMintResponseProtoMsg;
        };
        MsgBurn: {
            typeUrl: string;
            is(o: any): o is _67.MsgBurn;
            isSDK(o: any): o is _67.MsgBurnSDKType;
            encode(message: _67.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.MsgBurn;
            fromPartial(object: Partial<_67.MsgBurn>): _67.MsgBurn;
            fromProtoMsg(message: _67.MsgBurnProtoMsg): _67.MsgBurn;
            toProto(message: _67.MsgBurn): Uint8Array;
            toProtoMsg(message: _67.MsgBurn): _67.MsgBurnProtoMsg;
        };
        MsgBurnResponse: {
            typeUrl: string;
            is(o: any): o is _67.MsgBurnResponse;
            isSDK(o: any): o is _67.MsgBurnResponseSDKType;
            encode(_: _67.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.MsgBurnResponse;
            fromPartial(_: Partial<_67.MsgBurnResponse>): _67.MsgBurnResponse;
            fromProtoMsg(message: _67.MsgBurnResponseProtoMsg): _67.MsgBurnResponse;
            toProto(message: _67.MsgBurnResponse): Uint8Array;
            toProtoMsg(message: _67.MsgBurnResponse): _67.MsgBurnResponseProtoMsg;
        };
        MsgChangeAdmin: {
            typeUrl: string;
            is(o: any): o is _67.MsgChangeAdmin;
            isSDK(o: any): o is _67.MsgChangeAdminSDKType;
            encode(message: _67.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.MsgChangeAdmin;
            fromPartial(object: Partial<_67.MsgChangeAdmin>): _67.MsgChangeAdmin;
            fromProtoMsg(message: _67.MsgChangeAdminProtoMsg): _67.MsgChangeAdmin;
            toProto(message: _67.MsgChangeAdmin): Uint8Array;
            toProtoMsg(message: _67.MsgChangeAdmin): _67.MsgChangeAdminProtoMsg;
        };
        MsgChangeAdminResponse: {
            typeUrl: string;
            is(o: any): o is _67.MsgChangeAdminResponse;
            isSDK(o: any): o is _67.MsgChangeAdminResponseSDKType;
            encode(_: _67.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.MsgChangeAdminResponse;
            fromPartial(_: Partial<_67.MsgChangeAdminResponse>): _67.MsgChangeAdminResponse;
            fromProtoMsg(message: _67.MsgChangeAdminResponseProtoMsg): _67.MsgChangeAdminResponse;
            toProto(message: _67.MsgChangeAdminResponse): Uint8Array;
            toProtoMsg(message: _67.MsgChangeAdminResponse): _67.MsgChangeAdminResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            is(o: any): o is _66.QueryParamsRequest;
            isSDK(o: any): o is _66.QueryParamsRequestSDKType;
            encode(_: _66.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryParamsRequest;
            fromPartial(_: Partial<_66.QueryParamsRequest>): _66.QueryParamsRequest;
            fromProtoMsg(message: _66.QueryParamsRequestProtoMsg): _66.QueryParamsRequest;
            toProto(message: _66.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            is(o: any): o is _66.QueryParamsResponse;
            isSDK(o: any): o is _66.QueryParamsResponseSDKType;
            encode(message: _66.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryParamsResponse;
            fromPartial(object: Partial<_66.QueryParamsResponse>): _66.QueryParamsResponse;
            fromProtoMsg(message: _66.QueryParamsResponseProtoMsg): _66.QueryParamsResponse;
            toProto(message: _66.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseProtoMsg;
        };
        QueryDenomAuthorityMetadataRequest: {
            typeUrl: string;
            is(o: any): o is _66.QueryDenomAuthorityMetadataRequest;
            isSDK(o: any): o is _66.QueryDenomAuthorityMetadataRequestSDKType;
            encode(message: _66.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryDenomAuthorityMetadataRequest;
            fromPartial(object: Partial<_66.QueryDenomAuthorityMetadataRequest>): _66.QueryDenomAuthorityMetadataRequest;
            fromProtoMsg(message: _66.QueryDenomAuthorityMetadataRequestProtoMsg): _66.QueryDenomAuthorityMetadataRequest;
            toProto(message: _66.QueryDenomAuthorityMetadataRequest): Uint8Array;
            toProtoMsg(message: _66.QueryDenomAuthorityMetadataRequest): _66.QueryDenomAuthorityMetadataRequestProtoMsg;
        };
        QueryDenomAuthorityMetadataResponse: {
            typeUrl: string;
            is(o: any): o is _66.QueryDenomAuthorityMetadataResponse;
            isSDK(o: any): o is _66.QueryDenomAuthorityMetadataResponseSDKType;
            encode(message: _66.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryDenomAuthorityMetadataResponse;
            fromPartial(object: Partial<_66.QueryDenomAuthorityMetadataResponse>): _66.QueryDenomAuthorityMetadataResponse;
            fromProtoMsg(message: _66.QueryDenomAuthorityMetadataResponseProtoMsg): _66.QueryDenomAuthorityMetadataResponse;
            toProto(message: _66.QueryDenomAuthorityMetadataResponse): Uint8Array;
            toProtoMsg(message: _66.QueryDenomAuthorityMetadataResponse): _66.QueryDenomAuthorityMetadataResponseProtoMsg;
        };
        QueryDenomsFromCreatorRequest: {
            typeUrl: string;
            is(o: any): o is _66.QueryDenomsFromCreatorRequest;
            isSDK(o: any): o is _66.QueryDenomsFromCreatorRequestSDKType;
            encode(message: _66.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryDenomsFromCreatorRequest;
            fromPartial(object: Partial<_66.QueryDenomsFromCreatorRequest>): _66.QueryDenomsFromCreatorRequest;
            fromProtoMsg(message: _66.QueryDenomsFromCreatorRequestProtoMsg): _66.QueryDenomsFromCreatorRequest;
            toProto(message: _66.QueryDenomsFromCreatorRequest): Uint8Array;
            toProtoMsg(message: _66.QueryDenomsFromCreatorRequest): _66.QueryDenomsFromCreatorRequestProtoMsg;
        };
        QueryDenomsFromCreatorResponse: {
            typeUrl: string;
            is(o: any): o is _66.QueryDenomsFromCreatorResponse;
            isSDK(o: any): o is _66.QueryDenomsFromCreatorResponseSDKType;
            encode(message: _66.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.QueryDenomsFromCreatorResponse;
            fromPartial(object: Partial<_66.QueryDenomsFromCreatorResponse>): _66.QueryDenomsFromCreatorResponse;
            fromProtoMsg(message: _66.QueryDenomsFromCreatorResponseProtoMsg): _66.QueryDenomsFromCreatorResponse;
            toProto(message: _66.QueryDenomsFromCreatorResponse): Uint8Array;
            toProtoMsg(message: _66.QueryDenomsFromCreatorResponse): _66.QueryDenomsFromCreatorResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            is(o: any): o is _65.Params;
            isSDK(o: any): o is _65.ParamsSDKType;
            encode(message: _65.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.Params;
            fromPartial(object: Partial<_65.Params>): _65.Params;
            fromProtoMsg(message: _65.ParamsProtoMsg): _65.Params;
            toProto(message: _65.Params): Uint8Array;
            toProtoMsg(message: _65.Params): _65.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            is(o: any): o is _64.GenesisState;
            isSDK(o: any): o is _64.GenesisStateSDKType;
            encode(message: _64.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.GenesisState;
            fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
            fromProtoMsg(message: _64.GenesisStateProtoMsg): _64.GenesisState;
            toProto(message: _64.GenesisState): Uint8Array;
            toProtoMsg(message: _64.GenesisState): _64.GenesisStateProtoMsg;
        };
        GenesisDenom: {
            typeUrl: string;
            is(o: any): o is _64.GenesisDenom;
            isSDK(o: any): o is _64.GenesisDenomSDKType;
            encode(message: _64.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.GenesisDenom;
            fromPartial(object: Partial<_64.GenesisDenom>): _64.GenesisDenom;
            fromProtoMsg(message: _64.GenesisDenomProtoMsg): _64.GenesisDenom;
            toProto(message: _64.GenesisDenom): Uint8Array;
            toProtoMsg(message: _64.GenesisDenom): _64.GenesisDenomProtoMsg;
        };
        DenomAuthorityMetadata: {
            typeUrl: string;
            is(o: any): o is _63.DenomAuthorityMetadata;
            isSDK(o: any): o is _63.DenomAuthorityMetadataSDKType;
            encode(message: _63.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.DenomAuthorityMetadata;
            fromPartial(object: Partial<_63.DenomAuthorityMetadata>): _63.DenomAuthorityMetadata;
            fromProtoMsg(message: _63.DenomAuthorityMetadataProtoMsg): _63.DenomAuthorityMetadata;
            toProto(message: _63.DenomAuthorityMetadata): Uint8Array;
            toProtoMsg(message: _63.DenomAuthorityMetadata): _63.DenomAuthorityMetadataProtoMsg;
        };
    };
    const oracle: {
        MsgClientImpl: typeof _110.MsgClientImpl;
        QueryClientImpl: typeof _107.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            exchangeRate(request: _70.QueryExchangeRateRequest): Promise<_70.QueryExchangeRateResponse>;
            exchangeRates(request?: _70.QueryExchangeRatesRequest): Promise<_70.QueryExchangeRatesResponse>;
            actives(request?: _70.QueryActivesRequest): Promise<_70.QueryActivesResponse>;
            feederDelegation(request: _70.QueryFeederDelegationRequest): Promise<_70.QueryFeederDelegationResponse>;
            missCounter(request: _70.QueryMissCounterRequest): Promise<_70.QueryMissCounterResponse>;
            aggregatePrevote(request: _70.QueryAggregatePrevoteRequest): Promise<_70.QueryAggregatePrevoteResponse>;
            aggregatePrevotes(request?: _70.QueryAggregatePrevotesRequest): Promise<_70.QueryAggregatePrevotesResponse>;
            aggregateVote(request: _70.QueryAggregateVoteRequest): Promise<_70.QueryAggregateVoteResponse>;
            aggregateVotes(request?: _70.QueryAggregateVotesRequest): Promise<_70.QueryAggregateVotesResponse>;
            params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
        };
        MsgAggregateExchangeRatePrevote: {
            typeUrl: string;
            is(o: any): o is _71.MsgAggregateExchangeRatePrevote;
            isSDK(o: any): o is _71.MsgAggregateExchangeRatePrevoteSDKType;
            encode(message: _71.MsgAggregateExchangeRatePrevote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.MsgAggregateExchangeRatePrevote;
            fromPartial(object: Partial<_71.MsgAggregateExchangeRatePrevote>): _71.MsgAggregateExchangeRatePrevote;
            fromProtoMsg(message: _71.MsgAggregateExchangeRatePrevoteProtoMsg): _71.MsgAggregateExchangeRatePrevote;
            toProto(message: _71.MsgAggregateExchangeRatePrevote): Uint8Array;
            toProtoMsg(message: _71.MsgAggregateExchangeRatePrevote): _71.MsgAggregateExchangeRatePrevoteProtoMsg;
        };
        MsgAggregateExchangeRatePrevoteResponse: {
            typeUrl: string;
            is(o: any): o is _71.MsgAggregateExchangeRatePrevoteResponse;
            isSDK(o: any): o is _71.MsgAggregateExchangeRatePrevoteResponseSDKType;
            encode(_: _71.MsgAggregateExchangeRatePrevoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.MsgAggregateExchangeRatePrevoteResponse;
            fromPartial(_: Partial<_71.MsgAggregateExchangeRatePrevoteResponse>): _71.MsgAggregateExchangeRatePrevoteResponse;
            fromProtoMsg(message: _71.MsgAggregateExchangeRatePrevoteResponseProtoMsg): _71.MsgAggregateExchangeRatePrevoteResponse;
            toProto(message: _71.MsgAggregateExchangeRatePrevoteResponse): Uint8Array;
            toProtoMsg(message: _71.MsgAggregateExchangeRatePrevoteResponse): _71.MsgAggregateExchangeRatePrevoteResponseProtoMsg;
        };
        MsgAggregateExchangeRateVote: {
            typeUrl: string;
            is(o: any): o is _71.MsgAggregateExchangeRateVote;
            isSDK(o: any): o is _71.MsgAggregateExchangeRateVoteSDKType;
            encode(message: _71.MsgAggregateExchangeRateVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.MsgAggregateExchangeRateVote;
            fromPartial(object: Partial<_71.MsgAggregateExchangeRateVote>): _71.MsgAggregateExchangeRateVote;
            fromProtoMsg(message: _71.MsgAggregateExchangeRateVoteProtoMsg): _71.MsgAggregateExchangeRateVote;
            toProto(message: _71.MsgAggregateExchangeRateVote): Uint8Array;
            toProtoMsg(message: _71.MsgAggregateExchangeRateVote): _71.MsgAggregateExchangeRateVoteProtoMsg;
        };
        MsgAggregateExchangeRateVoteResponse: {
            typeUrl: string;
            is(o: any): o is _71.MsgAggregateExchangeRateVoteResponse;
            isSDK(o: any): o is _71.MsgAggregateExchangeRateVoteResponseSDKType;
            encode(_: _71.MsgAggregateExchangeRateVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.MsgAggregateExchangeRateVoteResponse;
            fromPartial(_: Partial<_71.MsgAggregateExchangeRateVoteResponse>): _71.MsgAggregateExchangeRateVoteResponse;
            fromProtoMsg(message: _71.MsgAggregateExchangeRateVoteResponseProtoMsg): _71.MsgAggregateExchangeRateVoteResponse;
            toProto(message: _71.MsgAggregateExchangeRateVoteResponse): Uint8Array;
            toProtoMsg(message: _71.MsgAggregateExchangeRateVoteResponse): _71.MsgAggregateExchangeRateVoteResponseProtoMsg;
        };
        MsgDelegateFeedConsent: {
            typeUrl: string;
            is(o: any): o is _71.MsgDelegateFeedConsent;
            isSDK(o: any): o is _71.MsgDelegateFeedConsentSDKType;
            encode(message: _71.MsgDelegateFeedConsent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.MsgDelegateFeedConsent;
            fromPartial(object: Partial<_71.MsgDelegateFeedConsent>): _71.MsgDelegateFeedConsent;
            fromProtoMsg(message: _71.MsgDelegateFeedConsentProtoMsg): _71.MsgDelegateFeedConsent;
            toProto(message: _71.MsgDelegateFeedConsent): Uint8Array;
            toProtoMsg(message: _71.MsgDelegateFeedConsent): _71.MsgDelegateFeedConsentProtoMsg;
        };
        MsgDelegateFeedConsentResponse: {
            typeUrl: string;
            is(o: any): o is _71.MsgDelegateFeedConsentResponse;
            isSDK(o: any): o is _71.MsgDelegateFeedConsentResponseSDKType;
            encode(_: _71.MsgDelegateFeedConsentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.MsgDelegateFeedConsentResponse;
            fromPartial(_: Partial<_71.MsgDelegateFeedConsentResponse>): _71.MsgDelegateFeedConsentResponse;
            fromProtoMsg(message: _71.MsgDelegateFeedConsentResponseProtoMsg): _71.MsgDelegateFeedConsentResponse;
            toProto(message: _71.MsgDelegateFeedConsentResponse): Uint8Array;
            toProtoMsg(message: _71.MsgDelegateFeedConsentResponse): _71.MsgDelegateFeedConsentResponseProtoMsg;
        };
        QueryExchangeRateRequest: {
            typeUrl: string;
            is(o: any): o is _70.QueryExchangeRateRequest;
            isSDK(o: any): o is _70.QueryExchangeRateRequestSDKType;
            encode(message: _70.QueryExchangeRateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryExchangeRateRequest;
            fromPartial(object: Partial<_70.QueryExchangeRateRequest>): _70.QueryExchangeRateRequest;
            fromProtoMsg(message: _70.QueryExchangeRateRequestProtoMsg): _70.QueryExchangeRateRequest;
            toProto(message: _70.QueryExchangeRateRequest): Uint8Array;
            toProtoMsg(message: _70.QueryExchangeRateRequest): _70.QueryExchangeRateRequestProtoMsg;
        };
        QueryExchangeRateResponse: {
            typeUrl: string;
            is(o: any): o is _70.QueryExchangeRateResponse;
            isSDK(o: any): o is _70.QueryExchangeRateResponseSDKType;
            encode(message: _70.QueryExchangeRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryExchangeRateResponse;
            fromPartial(object: Partial<_70.QueryExchangeRateResponse>): _70.QueryExchangeRateResponse;
            fromProtoMsg(message: _70.QueryExchangeRateResponseProtoMsg): _70.QueryExchangeRateResponse;
            toProto(message: _70.QueryExchangeRateResponse): Uint8Array;
            toProtoMsg(message: _70.QueryExchangeRateResponse): _70.QueryExchangeRateResponseProtoMsg;
        };
        QueryExchangeRatesRequest: {
            typeUrl: string;
            is(o: any): o is _70.QueryExchangeRatesRequest;
            isSDK(o: any): o is _70.QueryExchangeRatesRequestSDKType;
            encode(_: _70.QueryExchangeRatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryExchangeRatesRequest;
            fromPartial(_: Partial<_70.QueryExchangeRatesRequest>): _70.QueryExchangeRatesRequest;
            fromProtoMsg(message: _70.QueryExchangeRatesRequestProtoMsg): _70.QueryExchangeRatesRequest;
            toProto(message: _70.QueryExchangeRatesRequest): Uint8Array;
            toProtoMsg(message: _70.QueryExchangeRatesRequest): _70.QueryExchangeRatesRequestProtoMsg;
        };
        QueryExchangeRatesResponse: {
            typeUrl: string;
            is(o: any): o is _70.QueryExchangeRatesResponse;
            isSDK(o: any): o is _70.QueryExchangeRatesResponseSDKType;
            encode(message: _70.QueryExchangeRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryExchangeRatesResponse;
            fromPartial(object: Partial<_70.QueryExchangeRatesResponse>): _70.QueryExchangeRatesResponse;
            fromProtoMsg(message: _70.QueryExchangeRatesResponseProtoMsg): _70.QueryExchangeRatesResponse;
            toProto(message: _70.QueryExchangeRatesResponse): Uint8Array;
            toProtoMsg(message: _70.QueryExchangeRatesResponse): _70.QueryExchangeRatesResponseProtoMsg;
        };
        QueryActivesRequest: {
            typeUrl: string;
            is(o: any): o is _70.QueryActivesRequest;
            isSDK(o: any): o is _70.QueryActivesRequestSDKType;
            encode(_: _70.QueryActivesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryActivesRequest;
            fromPartial(_: Partial<_70.QueryActivesRequest>): _70.QueryActivesRequest;
            fromProtoMsg(message: _70.QueryActivesRequestProtoMsg): _70.QueryActivesRequest;
            toProto(message: _70.QueryActivesRequest): Uint8Array;
            toProtoMsg(message: _70.QueryActivesRequest): _70.QueryActivesRequestProtoMsg;
        };
        QueryActivesResponse: {
            typeUrl: string;
            is(o: any): o is _70.QueryActivesResponse;
            isSDK(o: any): o is _70.QueryActivesResponseSDKType;
            encode(message: _70.QueryActivesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryActivesResponse;
            fromPartial(object: Partial<_70.QueryActivesResponse>): _70.QueryActivesResponse;
            fromProtoMsg(message: _70.QueryActivesResponseProtoMsg): _70.QueryActivesResponse;
            toProto(message: _70.QueryActivesResponse): Uint8Array;
            toProtoMsg(message: _70.QueryActivesResponse): _70.QueryActivesResponseProtoMsg;
        };
        QueryVoteTargetsRequest: {
            typeUrl: string;
            is(o: any): o is _70.QueryVoteTargetsRequest;
            isSDK(o: any): o is _70.QueryVoteTargetsRequestSDKType;
            encode(_: _70.QueryVoteTargetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryVoteTargetsRequest;
            fromPartial(_: Partial<_70.QueryVoteTargetsRequest>): _70.QueryVoteTargetsRequest;
            fromProtoMsg(message: _70.QueryVoteTargetsRequestProtoMsg): _70.QueryVoteTargetsRequest;
            toProto(message: _70.QueryVoteTargetsRequest): Uint8Array;
            toProtoMsg(message: _70.QueryVoteTargetsRequest): _70.QueryVoteTargetsRequestProtoMsg;
        };
        QueryVoteTargetsResponse: {
            typeUrl: string;
            is(o: any): o is _70.QueryVoteTargetsResponse;
            isSDK(o: any): o is _70.QueryVoteTargetsResponseSDKType;
            encode(message: _70.QueryVoteTargetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryVoteTargetsResponse;
            fromPartial(object: Partial<_70.QueryVoteTargetsResponse>): _70.QueryVoteTargetsResponse;
            fromProtoMsg(message: _70.QueryVoteTargetsResponseProtoMsg): _70.QueryVoteTargetsResponse;
            toProto(message: _70.QueryVoteTargetsResponse): Uint8Array;
            toProtoMsg(message: _70.QueryVoteTargetsResponse): _70.QueryVoteTargetsResponseProtoMsg;
        };
        QueryFeederDelegationRequest: {
            typeUrl: string;
            is(o: any): o is _70.QueryFeederDelegationRequest;
            isSDK(o: any): o is _70.QueryFeederDelegationRequestSDKType;
            encode(message: _70.QueryFeederDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryFeederDelegationRequest;
            fromPartial(object: Partial<_70.QueryFeederDelegationRequest>): _70.QueryFeederDelegationRequest;
            fromProtoMsg(message: _70.QueryFeederDelegationRequestProtoMsg): _70.QueryFeederDelegationRequest;
            toProto(message: _70.QueryFeederDelegationRequest): Uint8Array;
            toProtoMsg(message: _70.QueryFeederDelegationRequest): _70.QueryFeederDelegationRequestProtoMsg;
        };
        QueryFeederDelegationResponse: {
            typeUrl: string;
            is(o: any): o is _70.QueryFeederDelegationResponse;
            isSDK(o: any): o is _70.QueryFeederDelegationResponseSDKType;
            encode(message: _70.QueryFeederDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryFeederDelegationResponse;
            fromPartial(object: Partial<_70.QueryFeederDelegationResponse>): _70.QueryFeederDelegationResponse;
            fromProtoMsg(message: _70.QueryFeederDelegationResponseProtoMsg): _70.QueryFeederDelegationResponse;
            toProto(message: _70.QueryFeederDelegationResponse): Uint8Array;
            toProtoMsg(message: _70.QueryFeederDelegationResponse): _70.QueryFeederDelegationResponseProtoMsg;
        };
        QueryMissCounterRequest: {
            typeUrl: string;
            is(o: any): o is _70.QueryMissCounterRequest;
            isSDK(o: any): o is _70.QueryMissCounterRequestSDKType;
            encode(message: _70.QueryMissCounterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryMissCounterRequest;
            fromPartial(object: Partial<_70.QueryMissCounterRequest>): _70.QueryMissCounterRequest;
            fromProtoMsg(message: _70.QueryMissCounterRequestProtoMsg): _70.QueryMissCounterRequest;
            toProto(message: _70.QueryMissCounterRequest): Uint8Array;
            toProtoMsg(message: _70.QueryMissCounterRequest): _70.QueryMissCounterRequestProtoMsg;
        };
        QueryMissCounterResponse: {
            typeUrl: string;
            is(o: any): o is _70.QueryMissCounterResponse;
            isSDK(o: any): o is _70.QueryMissCounterResponseSDKType;
            encode(message: _70.QueryMissCounterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryMissCounterResponse;
            fromPartial(object: Partial<_70.QueryMissCounterResponse>): _70.QueryMissCounterResponse;
            fromProtoMsg(message: _70.QueryMissCounterResponseProtoMsg): _70.QueryMissCounterResponse;
            toProto(message: _70.QueryMissCounterResponse): Uint8Array;
            toProtoMsg(message: _70.QueryMissCounterResponse): _70.QueryMissCounterResponseProtoMsg;
        };
        QueryAggregatePrevoteRequest: {
            typeUrl: string;
            is(o: any): o is _70.QueryAggregatePrevoteRequest;
            isSDK(o: any): o is _70.QueryAggregatePrevoteRequestSDKType;
            encode(message: _70.QueryAggregatePrevoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryAggregatePrevoteRequest;
            fromPartial(object: Partial<_70.QueryAggregatePrevoteRequest>): _70.QueryAggregatePrevoteRequest;
            fromProtoMsg(message: _70.QueryAggregatePrevoteRequestProtoMsg): _70.QueryAggregatePrevoteRequest;
            toProto(message: _70.QueryAggregatePrevoteRequest): Uint8Array;
            toProtoMsg(message: _70.QueryAggregatePrevoteRequest): _70.QueryAggregatePrevoteRequestProtoMsg;
        };
        QueryAggregatePrevoteResponse: {
            typeUrl: string;
            is(o: any): o is _70.QueryAggregatePrevoteResponse;
            isSDK(o: any): o is _70.QueryAggregatePrevoteResponseSDKType;
            encode(message: _70.QueryAggregatePrevoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryAggregatePrevoteResponse;
            fromPartial(object: Partial<_70.QueryAggregatePrevoteResponse>): _70.QueryAggregatePrevoteResponse;
            fromProtoMsg(message: _70.QueryAggregatePrevoteResponseProtoMsg): _70.QueryAggregatePrevoteResponse;
            toProto(message: _70.QueryAggregatePrevoteResponse): Uint8Array;
            toProtoMsg(message: _70.QueryAggregatePrevoteResponse): _70.QueryAggregatePrevoteResponseProtoMsg;
        };
        QueryAggregatePrevotesRequest: {
            typeUrl: string;
            is(o: any): o is _70.QueryAggregatePrevotesRequest;
            isSDK(o: any): o is _70.QueryAggregatePrevotesRequestSDKType;
            encode(_: _70.QueryAggregatePrevotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryAggregatePrevotesRequest;
            fromPartial(_: Partial<_70.QueryAggregatePrevotesRequest>): _70.QueryAggregatePrevotesRequest;
            fromProtoMsg(message: _70.QueryAggregatePrevotesRequestProtoMsg): _70.QueryAggregatePrevotesRequest;
            toProto(message: _70.QueryAggregatePrevotesRequest): Uint8Array;
            toProtoMsg(message: _70.QueryAggregatePrevotesRequest): _70.QueryAggregatePrevotesRequestProtoMsg;
        };
        QueryAggregatePrevotesResponse: {
            typeUrl: string;
            is(o: any): o is _70.QueryAggregatePrevotesResponse;
            isSDK(o: any): o is _70.QueryAggregatePrevotesResponseSDKType;
            encode(message: _70.QueryAggregatePrevotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryAggregatePrevotesResponse;
            fromPartial(object: Partial<_70.QueryAggregatePrevotesResponse>): _70.QueryAggregatePrevotesResponse;
            fromProtoMsg(message: _70.QueryAggregatePrevotesResponseProtoMsg): _70.QueryAggregatePrevotesResponse;
            toProto(message: _70.QueryAggregatePrevotesResponse): Uint8Array;
            toProtoMsg(message: _70.QueryAggregatePrevotesResponse): _70.QueryAggregatePrevotesResponseProtoMsg;
        };
        QueryAggregateVoteRequest: {
            typeUrl: string;
            is(o: any): o is _70.QueryAggregateVoteRequest;
            isSDK(o: any): o is _70.QueryAggregateVoteRequestSDKType;
            encode(message: _70.QueryAggregateVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryAggregateVoteRequest;
            fromPartial(object: Partial<_70.QueryAggregateVoteRequest>): _70.QueryAggregateVoteRequest;
            fromProtoMsg(message: _70.QueryAggregateVoteRequestProtoMsg): _70.QueryAggregateVoteRequest;
            toProto(message: _70.QueryAggregateVoteRequest): Uint8Array;
            toProtoMsg(message: _70.QueryAggregateVoteRequest): _70.QueryAggregateVoteRequestProtoMsg;
        };
        QueryAggregateVoteResponse: {
            typeUrl: string;
            is(o: any): o is _70.QueryAggregateVoteResponse;
            isSDK(o: any): o is _70.QueryAggregateVoteResponseSDKType;
            encode(message: _70.QueryAggregateVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryAggregateVoteResponse;
            fromPartial(object: Partial<_70.QueryAggregateVoteResponse>): _70.QueryAggregateVoteResponse;
            fromProtoMsg(message: _70.QueryAggregateVoteResponseProtoMsg): _70.QueryAggregateVoteResponse;
            toProto(message: _70.QueryAggregateVoteResponse): Uint8Array;
            toProtoMsg(message: _70.QueryAggregateVoteResponse): _70.QueryAggregateVoteResponseProtoMsg;
        };
        QueryAggregateVotesRequest: {
            typeUrl: string;
            is(o: any): o is _70.QueryAggregateVotesRequest;
            isSDK(o: any): o is _70.QueryAggregateVotesRequestSDKType;
            encode(_: _70.QueryAggregateVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryAggregateVotesRequest;
            fromPartial(_: Partial<_70.QueryAggregateVotesRequest>): _70.QueryAggregateVotesRequest;
            fromProtoMsg(message: _70.QueryAggregateVotesRequestProtoMsg): _70.QueryAggregateVotesRequest;
            toProto(message: _70.QueryAggregateVotesRequest): Uint8Array;
            toProtoMsg(message: _70.QueryAggregateVotesRequest): _70.QueryAggregateVotesRequestProtoMsg;
        };
        QueryAggregateVotesResponse: {
            typeUrl: string;
            is(o: any): o is _70.QueryAggregateVotesResponse;
            isSDK(o: any): o is _70.QueryAggregateVotesResponseSDKType;
            encode(message: _70.QueryAggregateVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryAggregateVotesResponse;
            fromPartial(object: Partial<_70.QueryAggregateVotesResponse>): _70.QueryAggregateVotesResponse;
            fromProtoMsg(message: _70.QueryAggregateVotesResponseProtoMsg): _70.QueryAggregateVotesResponse;
            toProto(message: _70.QueryAggregateVotesResponse): Uint8Array;
            toProtoMsg(message: _70.QueryAggregateVotesResponse): _70.QueryAggregateVotesResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            is(o: any): o is _70.QueryParamsRequest;
            isSDK(o: any): o is _70.QueryParamsRequestSDKType;
            encode(_: _70.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryParamsRequest;
            fromPartial(_: Partial<_70.QueryParamsRequest>): _70.QueryParamsRequest;
            fromProtoMsg(message: _70.QueryParamsRequestProtoMsg): _70.QueryParamsRequest;
            toProto(message: _70.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _70.QueryParamsRequest): _70.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            is(o: any): o is _70.QueryParamsResponse;
            isSDK(o: any): o is _70.QueryParamsResponseSDKType;
            encode(message: _70.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.QueryParamsResponse;
            fromPartial(object: Partial<_70.QueryParamsResponse>): _70.QueryParamsResponse;
            fromProtoMsg(message: _70.QueryParamsResponseProtoMsg): _70.QueryParamsResponse;
            toProto(message: _70.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _70.QueryParamsResponse): _70.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            is(o: any): o is _69.Params;
            isSDK(o: any): o is _69.ParamsSDKType;
            encode(message: _69.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.Params;
            fromPartial(object: Partial<_69.Params>): _69.Params;
            fromProtoMsg(message: _69.ParamsProtoMsg): _69.Params;
            toProto(message: _69.Params): Uint8Array;
            toProtoMsg(message: _69.Params): _69.ParamsProtoMsg;
        };
        Denom: {
            typeUrl: string;
            is(o: any): o is _69.Denom;
            isSDK(o: any): o is _69.DenomSDKType;
            encode(message: _69.Denom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.Denom;
            fromPartial(object: Partial<_69.Denom>): _69.Denom;
            fromProtoMsg(message: _69.DenomProtoMsg): _69.Denom;
            toProto(message: _69.Denom): Uint8Array;
            toProtoMsg(message: _69.Denom): _69.DenomProtoMsg;
        };
        AggregateExchangeRatePrevote: {
            typeUrl: string;
            is(o: any): o is _69.AggregateExchangeRatePrevote;
            isSDK(o: any): o is _69.AggregateExchangeRatePrevoteSDKType;
            encode(message: _69.AggregateExchangeRatePrevote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.AggregateExchangeRatePrevote;
            fromPartial(object: Partial<_69.AggregateExchangeRatePrevote>): _69.AggregateExchangeRatePrevote;
            fromProtoMsg(message: _69.AggregateExchangeRatePrevoteProtoMsg): _69.AggregateExchangeRatePrevote;
            toProto(message: _69.AggregateExchangeRatePrevote): Uint8Array;
            toProtoMsg(message: _69.AggregateExchangeRatePrevote): _69.AggregateExchangeRatePrevoteProtoMsg;
        };
        AggregateExchangeRateVote: {
            typeUrl: string;
            is(o: any): o is _69.AggregateExchangeRateVote;
            isSDK(o: any): o is _69.AggregateExchangeRateVoteSDKType;
            encode(message: _69.AggregateExchangeRateVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.AggregateExchangeRateVote;
            fromPartial(object: Partial<_69.AggregateExchangeRateVote>): _69.AggregateExchangeRateVote;
            fromProtoMsg(message: _69.AggregateExchangeRateVoteProtoMsg): _69.AggregateExchangeRateVote;
            toProto(message: _69.AggregateExchangeRateVote): Uint8Array;
            toProtoMsg(message: _69.AggregateExchangeRateVote): _69.AggregateExchangeRateVoteProtoMsg;
        };
        ExchangeRateTuple: {
            typeUrl: string;
            is(o: any): o is _69.ExchangeRateTuple;
            isSDK(o: any): o is _69.ExchangeRateTupleSDKType;
            encode(message: _69.ExchangeRateTuple, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.ExchangeRateTuple;
            fromPartial(object: Partial<_69.ExchangeRateTuple>): _69.ExchangeRateTuple;
            fromProtoMsg(message: _69.ExchangeRateTupleProtoMsg): _69.ExchangeRateTuple;
            toProto(message: _69.ExchangeRateTuple): Uint8Array;
            toProtoMsg(message: _69.ExchangeRateTuple): _69.ExchangeRateTupleProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            is(o: any): o is _68.GenesisState;
            isSDK(o: any): o is _68.GenesisStateSDKType;
            encode(message: _68.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.GenesisState;
            fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
            fromProtoMsg(message: _68.GenesisStateProtoMsg): _68.GenesisState;
            toProto(message: _68.GenesisState): Uint8Array;
            toProtoMsg(message: _68.GenesisState): _68.GenesisStateProtoMsg;
        };
        FeederDelegation: {
            typeUrl: string;
            is(o: any): o is _68.FeederDelegation;
            isSDK(o: any): o is _68.FeederDelegationSDKType;
            encode(message: _68.FeederDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.FeederDelegation;
            fromPartial(object: Partial<_68.FeederDelegation>): _68.FeederDelegation;
            fromProtoMsg(message: _68.FeederDelegationProtoMsg): _68.FeederDelegation;
            toProto(message: _68.FeederDelegation): Uint8Array;
            toProtoMsg(message: _68.FeederDelegation): _68.FeederDelegationProtoMsg;
        };
        MissCounter: {
            typeUrl: string;
            is(o: any): o is _68.MissCounter;
            isSDK(o: any): o is _68.MissCounterSDKType;
            encode(message: _68.MissCounter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MissCounter;
            fromPartial(object: Partial<_68.MissCounter>): _68.MissCounter;
            fromProtoMsg(message: _68.MissCounterProtoMsg): _68.MissCounter;
            toProto(message: _68.MissCounter): Uint8Array;
            toProtoMsg(message: _68.MissCounter): _68.MissCounterProtoMsg;
        };
    };
    const scheduler: {
        QueryClientImpl: typeof _108.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
            hook(request: _76.QueryGetHookRequest): Promise<_76.QueryGetHookResponse>;
            hookAll(request?: _76.QueryAllHookRequest): Promise<_76.QueryAllHookResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            is(o: any): o is _76.QueryParamsRequest;
            isSDK(o: any): o is _76.QueryParamsRequestSDKType;
            encode(_: _76.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryParamsRequest;
            fromPartial(_: Partial<_76.QueryParamsRequest>): _76.QueryParamsRequest;
            fromProtoMsg(message: _76.QueryParamsRequestProtoMsg): _76.QueryParamsRequest;
            toProto(message: _76.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _76.QueryParamsRequest): _76.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            is(o: any): o is _76.QueryParamsResponse;
            isSDK(o: any): o is _76.QueryParamsResponseSDKType;
            encode(message: _76.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryParamsResponse;
            fromPartial(object: Partial<_76.QueryParamsResponse>): _76.QueryParamsResponse;
            fromProtoMsg(message: _76.QueryParamsResponseProtoMsg): _76.QueryParamsResponse;
            toProto(message: _76.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _76.QueryParamsResponse): _76.QueryParamsResponseProtoMsg;
        };
        QueryGetHookRequest: {
            typeUrl: string;
            is(o: any): o is _76.QueryGetHookRequest;
            isSDK(o: any): o is _76.QueryGetHookRequestSDKType;
            encode(message: _76.QueryGetHookRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryGetHookRequest;
            fromPartial(object: Partial<_76.QueryGetHookRequest>): _76.QueryGetHookRequest;
            fromProtoMsg(message: _76.QueryGetHookRequestProtoMsg): _76.QueryGetHookRequest;
            toProto(message: _76.QueryGetHookRequest): Uint8Array;
            toProtoMsg(message: _76.QueryGetHookRequest): _76.QueryGetHookRequestProtoMsg;
        };
        QueryGetHookResponse: {
            typeUrl: string;
            is(o: any): o is _76.QueryGetHookResponse;
            isSDK(o: any): o is _76.QueryGetHookResponseSDKType;
            encode(message: _76.QueryGetHookResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryGetHookResponse;
            fromPartial(object: Partial<_76.QueryGetHookResponse>): _76.QueryGetHookResponse;
            fromProtoMsg(message: _76.QueryGetHookResponseProtoMsg): _76.QueryGetHookResponse;
            toProto(message: _76.QueryGetHookResponse): Uint8Array;
            toProtoMsg(message: _76.QueryGetHookResponse): _76.QueryGetHookResponseProtoMsg;
        };
        QueryAllHookRequest: {
            typeUrl: string;
            is(o: any): o is _76.QueryAllHookRequest;
            isSDK(o: any): o is _76.QueryAllHookRequestSDKType;
            encode(message: _76.QueryAllHookRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryAllHookRequest;
            fromPartial(object: Partial<_76.QueryAllHookRequest>): _76.QueryAllHookRequest;
            fromProtoMsg(message: _76.QueryAllHookRequestProtoMsg): _76.QueryAllHookRequest;
            toProto(message: _76.QueryAllHookRequest): Uint8Array;
            toProtoMsg(message: _76.QueryAllHookRequest): _76.QueryAllHookRequestProtoMsg;
        };
        QueryAllHookResponse: {
            typeUrl: string;
            is(o: any): o is _76.QueryAllHookResponse;
            isSDK(o: any): o is _76.QueryAllHookResponseSDKType;
            encode(message: _76.QueryAllHookResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryAllHookResponse;
            fromPartial(object: Partial<_76.QueryAllHookResponse>): _76.QueryAllHookResponse;
            fromProtoMsg(message: _76.QueryAllHookResponseProtoMsg): _76.QueryAllHookResponse;
            toProto(message: _76.QueryAllHookResponse): Uint8Array;
            toProtoMsg(message: _76.QueryAllHookResponse): _76.QueryAllHookResponseProtoMsg;
        };
        CreateHookProposal: {
            typeUrl: string;
            is(o: any): o is _75.CreateHookProposal;
            isSDK(o: any): o is _75.CreateHookProposalSDKType;
            encode(message: _75.CreateHookProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.CreateHookProposal;
            fromPartial(object: Partial<_75.CreateHookProposal>): _75.CreateHookProposal;
            fromProtoMsg(message: _75.CreateHookProposalProtoMsg): _75.CreateHookProposal;
            toProto(message: _75.CreateHookProposal): Uint8Array;
            toProtoMsg(message: _75.CreateHookProposal): _75.CreateHookProposalProtoMsg;
        };
        UpdateHookProposal: {
            typeUrl: string;
            is(o: any): o is _75.UpdateHookProposal;
            isSDK(o: any): o is _75.UpdateHookProposalSDKType;
            encode(message: _75.UpdateHookProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.UpdateHookProposal;
            fromPartial(object: Partial<_75.UpdateHookProposal>): _75.UpdateHookProposal;
            fromProtoMsg(message: _75.UpdateHookProposalProtoMsg): _75.UpdateHookProposal;
            toProto(message: _75.UpdateHookProposal): Uint8Array;
            toProtoMsg(message: _75.UpdateHookProposal): _75.UpdateHookProposalProtoMsg;
        };
        DeleteHookProposal: {
            typeUrl: string;
            is(o: any): o is _75.DeleteHookProposal;
            isSDK(o: any): o is _75.DeleteHookProposalSDKType;
            encode(message: _75.DeleteHookProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.DeleteHookProposal;
            fromPartial(object: Partial<_75.DeleteHookProposal>): _75.DeleteHookProposal;
            fromProtoMsg(message: _75.DeleteHookProposalProtoMsg): _75.DeleteHookProposal;
            toProto(message: _75.DeleteHookProposal): Uint8Array;
            toProtoMsg(message: _75.DeleteHookProposal): _75.DeleteHookProposalProtoMsg;
        };
        Params: {
            typeUrl: string;
            is(o: any): o is _74.Params;
            isSDK(o: any): o is _74.ParamsSDKType;
            encode(_: _74.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Params;
            fromPartial(_: Partial<_74.Params>): _74.Params;
            fromProtoMsg(message: _74.ParamsProtoMsg): _74.Params;
            toProto(message: _74.Params): Uint8Array;
            toProtoMsg(message: _74.Params): _74.ParamsProtoMsg;
        };
        Hook: {
            typeUrl: string;
            is(o: any): o is _73.Hook;
            isSDK(o: any): o is _73.HookSDKType;
            encode(message: _73.Hook, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.Hook;
            fromPartial(object: Partial<_73.Hook>): _73.Hook;
            fromProtoMsg(message: _73.HookProtoMsg): _73.Hook;
            toProto(message: _73.Hook): Uint8Array;
            toProtoMsg(message: _73.Hook): _73.HookProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            is(o: any): o is _72.GenesisState;
            isSDK(o: any): o is _72.GenesisStateSDKType;
            encode(message: _72.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.GenesisState;
            fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
            fromProtoMsg(message: _72.GenesisStateProtoMsg): _72.GenesisState;
            toProto(message: _72.GenesisState): Uint8Array;
            toProtoMsg(message: _72.GenesisState): _72.GenesisStateProtoMsg;
        };
    };
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
            kujira: {
                denom: _109.MsgClientImpl;
                oracle: _110.MsgClientImpl;
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
            kujira: {
                cwica: {
                    interchainAccount(request: _61.QueryInterchainAccountRequest): Promise<_61.QueryInterchainAccountResponse>;
                };
                denom: {
                    params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                    denomAuthorityMetadata(request: _66.QueryDenomAuthorityMetadataRequest): Promise<_66.QueryDenomAuthorityMetadataResponse>;
                    denomsFromCreator(request: _66.QueryDenomsFromCreatorRequest): Promise<_66.QueryDenomsFromCreatorResponse>;
                };
                oracle: {
                    exchangeRate(request: _70.QueryExchangeRateRequest): Promise<_70.QueryExchangeRateResponse>;
                    exchangeRates(request?: _70.QueryExchangeRatesRequest): Promise<_70.QueryExchangeRatesResponse>;
                    actives(request?: _70.QueryActivesRequest): Promise<_70.QueryActivesResponse>;
                    feederDelegation(request: _70.QueryFeederDelegationRequest): Promise<_70.QueryFeederDelegationResponse>;
                    missCounter(request: _70.QueryMissCounterRequest): Promise<_70.QueryMissCounterResponse>;
                    aggregatePrevote(request: _70.QueryAggregatePrevoteRequest): Promise<_70.QueryAggregatePrevoteResponse>;
                    aggregatePrevotes(request?: _70.QueryAggregatePrevotesRequest): Promise<_70.QueryAggregatePrevotesResponse>;
                    aggregateVote(request: _70.QueryAggregateVoteRequest): Promise<_70.QueryAggregateVoteResponse>;
                    aggregateVotes(request?: _70.QueryAggregateVotesRequest): Promise<_70.QueryAggregateVotesResponse>;
                    params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                };
                scheduler: {
                    params(request?: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                    hook(request: _76.QueryGetHookRequest): Promise<_76.QueryGetHookResponse>;
                    hookAll(request?: _76.QueryAllHookRequest): Promise<_76.QueryAllHookResponse>;
                };
            };
        }>;
    };
}
