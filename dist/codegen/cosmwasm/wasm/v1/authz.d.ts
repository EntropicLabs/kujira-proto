import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorization {
    $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
    /** Grants for contract executions */
    grants: ContractGrant[];
}
export interface ContractExecutionAuthorizationProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
    value: Uint8Array;
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorizationSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
    grants: ContractGrantSDKType[];
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorization {
    $typeUrl?: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
    /** Grants for contract migrations */
    grants: ContractGrant[];
}
export interface ContractMigrationAuthorizationProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
    value: Uint8Array;
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorizationSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
    grants: ContractGrantSDKType[];
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrant {
    /** Contract is the bech32 address of the smart contract */
    contract: string;
    /**
     * Limit defines execution limits that are enforced and updated when the grant
     * is applied. When the limit lapsed the grant is removed.
     */
    limit?: MaxCallsLimit | MaxFundsLimit | CombinedLimit | Any | undefined;
    /**
     * Filter define more fine-grained control on the message payload passed
     * to the contract in the operation. When no filter applies on execution, the
     * operation is prohibited.
     */
    filter?: AllowAllMessagesFilter | AcceptedMessageKeysFilter | AcceptedMessagesFilter | Any | undefined;
}
export interface ContractGrantProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ContractGrant";
    value: Uint8Array;
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrantSDKType {
    contract: string;
    limit?: MaxCallsLimitSDKType | MaxFundsLimitSDKType | CombinedLimitSDKType | AnySDKType | undefined;
    filter?: AllowAllMessagesFilterSDKType | AcceptedMessageKeysFilterSDKType | AcceptedMessagesFilterSDKType | AnySDKType | undefined;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimit {
    $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
    /** Remaining number that is decremented on each execution */
    remaining: bigint;
}
export interface MaxCallsLimitProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit";
    value: Uint8Array;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimitSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
    remaining: bigint;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimit {
    $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: Coin[];
}
export interface MaxFundsLimitProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit";
    value: Uint8Array;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimitSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
    amounts: CoinSDKType[];
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimit {
    $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
    /** Remaining number that is decremented on each execution */
    callsRemaining: bigint;
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: Coin[];
}
export interface CombinedLimitProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.CombinedLimit";
    value: Uint8Array;
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimitSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
    calls_remaining: bigint;
    amounts: CoinSDKType[];
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilter {
    $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
}
export interface AllowAllMessagesFilterProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
    value: Uint8Array;
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilterSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilter {
    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
    /** Messages is the list of unique keys */
    keys: string[];
}
export interface AcceptedMessageKeysFilterProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
    value: Uint8Array;
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilterSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
    keys: string[];
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilter {
    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
    /** Messages is the list of raw contract messages */
    messages: Uint8Array[];
}
export interface AcceptedMessagesFilterProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
    value: Uint8Array;
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilterSDKType {
    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
    messages: Uint8Array[];
}
export declare const ContractExecutionAuthorization: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ContractExecutionAuthorization;
    isSDK(o: any): o is ContractExecutionAuthorizationSDKType;
    encode(message: ContractExecutionAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractExecutionAuthorization;
    fromPartial(object: Partial<ContractExecutionAuthorization>): ContractExecutionAuthorization;
    fromProtoMsg(message: ContractExecutionAuthorizationProtoMsg): ContractExecutionAuthorization;
    toProto(message: ContractExecutionAuthorization): Uint8Array;
    toProtoMsg(message: ContractExecutionAuthorization): ContractExecutionAuthorizationProtoMsg;
};
export declare const ContractMigrationAuthorization: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ContractMigrationAuthorization;
    isSDK(o: any): o is ContractMigrationAuthorizationSDKType;
    encode(message: ContractMigrationAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractMigrationAuthorization;
    fromPartial(object: Partial<ContractMigrationAuthorization>): ContractMigrationAuthorization;
    fromProtoMsg(message: ContractMigrationAuthorizationProtoMsg): ContractMigrationAuthorization;
    toProto(message: ContractMigrationAuthorization): Uint8Array;
    toProtoMsg(message: ContractMigrationAuthorization): ContractMigrationAuthorizationProtoMsg;
};
export declare const ContractGrant: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ContractGrant;
    isSDK(o: any): o is ContractGrantSDKType;
    encode(message: ContractGrant, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractGrant;
    fromPartial(object: Partial<ContractGrant>): ContractGrant;
    fromProtoMsg(message: ContractGrantProtoMsg): ContractGrant;
    toProto(message: ContractGrant): Uint8Array;
    toProtoMsg(message: ContractGrant): ContractGrantProtoMsg;
};
export declare const MaxCallsLimit: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MaxCallsLimit;
    isSDK(o: any): o is MaxCallsLimitSDKType;
    encode(message: MaxCallsLimit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MaxCallsLimit;
    fromPartial(object: Partial<MaxCallsLimit>): MaxCallsLimit;
    fromProtoMsg(message: MaxCallsLimitProtoMsg): MaxCallsLimit;
    toProto(message: MaxCallsLimit): Uint8Array;
    toProtoMsg(message: MaxCallsLimit): MaxCallsLimitProtoMsg;
};
export declare const MaxFundsLimit: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MaxFundsLimit;
    isSDK(o: any): o is MaxFundsLimitSDKType;
    encode(message: MaxFundsLimit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MaxFundsLimit;
    fromPartial(object: Partial<MaxFundsLimit>): MaxFundsLimit;
    fromProtoMsg(message: MaxFundsLimitProtoMsg): MaxFundsLimit;
    toProto(message: MaxFundsLimit): Uint8Array;
    toProtoMsg(message: MaxFundsLimit): MaxFundsLimitProtoMsg;
};
export declare const CombinedLimit: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is CombinedLimit;
    isSDK(o: any): o is CombinedLimitSDKType;
    encode(message: CombinedLimit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CombinedLimit;
    fromPartial(object: Partial<CombinedLimit>): CombinedLimit;
    fromProtoMsg(message: CombinedLimitProtoMsg): CombinedLimit;
    toProto(message: CombinedLimit): Uint8Array;
    toProtoMsg(message: CombinedLimit): CombinedLimitProtoMsg;
};
export declare const AllowAllMessagesFilter: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AllowAllMessagesFilter;
    isSDK(o: any): o is AllowAllMessagesFilterSDKType;
    encode(_: AllowAllMessagesFilter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllowAllMessagesFilter;
    fromPartial(_: Partial<AllowAllMessagesFilter>): AllowAllMessagesFilter;
    fromProtoMsg(message: AllowAllMessagesFilterProtoMsg): AllowAllMessagesFilter;
    toProto(message: AllowAllMessagesFilter): Uint8Array;
    toProtoMsg(message: AllowAllMessagesFilter): AllowAllMessagesFilterProtoMsg;
};
export declare const AcceptedMessageKeysFilter: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AcceptedMessageKeysFilter;
    isSDK(o: any): o is AcceptedMessageKeysFilterSDKType;
    encode(message: AcceptedMessageKeysFilter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AcceptedMessageKeysFilter;
    fromPartial(object: Partial<AcceptedMessageKeysFilter>): AcceptedMessageKeysFilter;
    fromProtoMsg(message: AcceptedMessageKeysFilterProtoMsg): AcceptedMessageKeysFilter;
    toProto(message: AcceptedMessageKeysFilter): Uint8Array;
    toProtoMsg(message: AcceptedMessageKeysFilter): AcceptedMessageKeysFilterProtoMsg;
};
export declare const AcceptedMessagesFilter: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AcceptedMessagesFilter;
    isSDK(o: any): o is AcceptedMessagesFilterSDKType;
    encode(message: AcceptedMessagesFilter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AcceptedMessagesFilter;
    fromPartial(object: Partial<AcceptedMessagesFilter>): AcceptedMessagesFilter;
    fromProtoMsg(message: AcceptedMessagesFilterProtoMsg): AcceptedMessagesFilter;
    toProto(message: AcceptedMessagesFilter): Uint8Array;
    toProtoMsg(message: AcceptedMessagesFilter): AcceptedMessagesFilterProtoMsg;
};
