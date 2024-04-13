import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountRequest {
  owner: string;
  connectionId: string;
  accountId: string;
}
export interface QueryInterchainAccountRequestProtoMsg {
  typeUrl: "/kujira.cwica.QueryInterchainAccountRequest";
  value: Uint8Array;
}
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountRequestSDKType {
  owner: string;
  connection_id: string;
  account_id: string;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountResponse {
  interchainAccountAddress: string;
}
export interface QueryInterchainAccountResponseProtoMsg {
  typeUrl: "/kujira.cwica.QueryInterchainAccountResponse";
  value: Uint8Array;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountResponseSDKType {
  interchain_account_address: string;
}
function createBaseQueryInterchainAccountRequest(): QueryInterchainAccountRequest {
  return {
    owner: "",
    connectionId: "",
    accountId: ""
  };
}
export const QueryInterchainAccountRequest = {
  typeUrl: "/kujira.cwica.QueryInterchainAccountRequest",
  is(o: any): o is QueryInterchainAccountRequest {
    return o && (o.$typeUrl === QueryInterchainAccountRequest.typeUrl || typeof o.owner === "string" && typeof o.connectionId === "string" && typeof o.accountId === "string");
  },
  isSDK(o: any): o is QueryInterchainAccountRequestSDKType {
    return o && (o.$typeUrl === QueryInterchainAccountRequest.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string" && typeof o.account_id === "string");
  },
  encode(message: QueryInterchainAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountRequest {
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
  fromPartial(object: Partial<QueryInterchainAccountRequest>): QueryInterchainAccountRequest {
    const message = createBaseQueryInterchainAccountRequest();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.accountId = object.accountId ?? "";
    return message;
  },
  fromProtoMsg(message: QueryInterchainAccountRequestProtoMsg): QueryInterchainAccountRequest {
    return QueryInterchainAccountRequest.decode(message.value);
  },
  toProto(message: QueryInterchainAccountRequest): Uint8Array {
    return QueryInterchainAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInterchainAccountRequest): QueryInterchainAccountRequestProtoMsg {
    return {
      typeUrl: "/kujira.cwica.QueryInterchainAccountRequest",
      value: QueryInterchainAccountRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryInterchainAccountRequest.typeUrl, QueryInterchainAccountRequest);
function createBaseQueryInterchainAccountResponse(): QueryInterchainAccountResponse {
  return {
    interchainAccountAddress: ""
  };
}
export const QueryInterchainAccountResponse = {
  typeUrl: "/kujira.cwica.QueryInterchainAccountResponse",
  is(o: any): o is QueryInterchainAccountResponse {
    return o && (o.$typeUrl === QueryInterchainAccountResponse.typeUrl || typeof o.interchainAccountAddress === "string");
  },
  isSDK(o: any): o is QueryInterchainAccountResponseSDKType {
    return o && (o.$typeUrl === QueryInterchainAccountResponse.typeUrl || typeof o.interchain_account_address === "string");
  },
  encode(message: QueryInterchainAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interchainAccountAddress !== "") {
      writer.uint32(10).string(message.interchainAccountAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountResponse {
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
  fromPartial(object: Partial<QueryInterchainAccountResponse>): QueryInterchainAccountResponse {
    const message = createBaseQueryInterchainAccountResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? "";
    return message;
  },
  fromProtoMsg(message: QueryInterchainAccountResponseProtoMsg): QueryInterchainAccountResponse {
    return QueryInterchainAccountResponse.decode(message.value);
  },
  toProto(message: QueryInterchainAccountResponse): Uint8Array {
    return QueryInterchainAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInterchainAccountResponse): QueryInterchainAccountResponseProtoMsg {
    return {
      typeUrl: "/kujira.cwica.QueryInterchainAccountResponse",
      value: QueryInterchainAccountResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryInterchainAccountResponse.typeUrl, QueryInterchainAccountResponse);