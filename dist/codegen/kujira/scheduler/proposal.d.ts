import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface CreateHookProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** The account that will execute the msg on the schedule */
    executor: string;
    /** The contract that the msg is called on */
    contract: string;
    msg: Uint8Array;
    frequency: bigint;
    funds: Coin[];
}
export interface CreateHookProposalProtoMsg {
    typeUrl: "/kujira.scheduler.CreateHookProposal";
    value: Uint8Array;
}
export interface CreateHookProposalSDKType {
    title: string;
    description: string;
    executor: string;
    contract: string;
    msg: Uint8Array;
    frequency: bigint;
    funds: CoinSDKType[];
}
export interface UpdateHookProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    id: bigint;
    executor: string;
    contract: string;
    msg: Uint8Array;
    frequency: bigint;
    funds: Coin[];
}
export interface UpdateHookProposalProtoMsg {
    typeUrl: "/kujira.scheduler.UpdateHookProposal";
    value: Uint8Array;
}
export interface UpdateHookProposalSDKType {
    title: string;
    description: string;
    id: bigint;
    executor: string;
    contract: string;
    msg: Uint8Array;
    frequency: bigint;
    funds: CoinSDKType[];
}
export interface DeleteHookProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    id: bigint;
}
export interface DeleteHookProposalProtoMsg {
    typeUrl: "/kujira.scheduler.DeleteHookProposal";
    value: Uint8Array;
}
export interface DeleteHookProposalSDKType {
    title: string;
    description: string;
    id: bigint;
}
export declare const CreateHookProposal: {
    typeUrl: string;
    is(o: any): o is CreateHookProposal;
    isSDK(o: any): o is CreateHookProposalSDKType;
    encode(message: CreateHookProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CreateHookProposal;
    fromPartial(object: Partial<CreateHookProposal>): CreateHookProposal;
    fromProtoMsg(message: CreateHookProposalProtoMsg): CreateHookProposal;
    toProto(message: CreateHookProposal): Uint8Array;
    toProtoMsg(message: CreateHookProposal): CreateHookProposalProtoMsg;
};
export declare const UpdateHookProposal: {
    typeUrl: string;
    is(o: any): o is UpdateHookProposal;
    isSDK(o: any): o is UpdateHookProposalSDKType;
    encode(message: UpdateHookProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpdateHookProposal;
    fromPartial(object: Partial<UpdateHookProposal>): UpdateHookProposal;
    fromProtoMsg(message: UpdateHookProposalProtoMsg): UpdateHookProposal;
    toProto(message: UpdateHookProposal): Uint8Array;
    toProtoMsg(message: UpdateHookProposal): UpdateHookProposalProtoMsg;
};
export declare const DeleteHookProposal: {
    typeUrl: string;
    is(o: any): o is DeleteHookProposal;
    isSDK(o: any): o is DeleteHookProposalSDKType;
    encode(message: DeleteHookProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DeleteHookProposal;
    fromPartial(object: Partial<DeleteHookProposal>): DeleteHookProposal;
    fromProtoMsg(message: DeleteHookProposalProtoMsg): DeleteHookProposal;
    toProto(message: DeleteHookProposal): Uint8Array;
    toProtoMsg(message: DeleteHookProposal): DeleteHookProposalProtoMsg;
};
