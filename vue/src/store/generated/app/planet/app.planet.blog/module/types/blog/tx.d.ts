import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "app.planet.blog";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateTimedoutPost {
    creator: string;
    title: string;
    chain: string;
}
export interface MsgCreateTimedoutPostResponse {
    id: number;
}
export interface MsgUpdateTimedoutPost {
    creator: string;
    id: number;
    title: string;
    chain: string;
}
export interface MsgUpdateTimedoutPostResponse {
}
export interface MsgDeleteTimedoutPost {
    creator: string;
    id: number;
}
export interface MsgDeleteTimedoutPostResponse {
}
export interface MsgCreateSentPost {
    creator: string;
    postID: string;
    title: string;
    chain: string;
}
export interface MsgCreateSentPostResponse {
    id: number;
}
export interface MsgUpdateSentPost {
    creator: string;
    id: number;
    postID: string;
    title: string;
    chain: string;
}
export interface MsgUpdateSentPostResponse {
}
export interface MsgDeleteSentPost {
    creator: string;
    id: number;
}
export interface MsgDeleteSentPostResponse {
}
export interface MsgCreatePost {
    creator: string;
    title: string;
    content: string;
}
export interface MsgCreatePostResponse {
    id: number;
}
export interface MsgUpdatePost {
    creator: string;
    id: number;
    title: string;
    content: string;
}
export interface MsgUpdatePostResponse {
}
export interface MsgDeletePost {
    creator: string;
    id: number;
}
export interface MsgDeletePostResponse {
}
export declare const MsgCreateTimedoutPost: {
    encode(message: MsgCreateTimedoutPost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTimedoutPost;
    fromJSON(object: any): MsgCreateTimedoutPost;
    toJSON(message: MsgCreateTimedoutPost): unknown;
    fromPartial(object: DeepPartial<MsgCreateTimedoutPost>): MsgCreateTimedoutPost;
};
export declare const MsgCreateTimedoutPostResponse: {
    encode(message: MsgCreateTimedoutPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTimedoutPostResponse;
    fromJSON(object: any): MsgCreateTimedoutPostResponse;
    toJSON(message: MsgCreateTimedoutPostResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateTimedoutPostResponse>): MsgCreateTimedoutPostResponse;
};
export declare const MsgUpdateTimedoutPost: {
    encode(message: MsgUpdateTimedoutPost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTimedoutPost;
    fromJSON(object: any): MsgUpdateTimedoutPost;
    toJSON(message: MsgUpdateTimedoutPost): unknown;
    fromPartial(object: DeepPartial<MsgUpdateTimedoutPost>): MsgUpdateTimedoutPost;
};
export declare const MsgUpdateTimedoutPostResponse: {
    encode(_: MsgUpdateTimedoutPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTimedoutPostResponse;
    fromJSON(_: any): MsgUpdateTimedoutPostResponse;
    toJSON(_: MsgUpdateTimedoutPostResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateTimedoutPostResponse>): MsgUpdateTimedoutPostResponse;
};
export declare const MsgDeleteTimedoutPost: {
    encode(message: MsgDeleteTimedoutPost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTimedoutPost;
    fromJSON(object: any): MsgDeleteTimedoutPost;
    toJSON(message: MsgDeleteTimedoutPost): unknown;
    fromPartial(object: DeepPartial<MsgDeleteTimedoutPost>): MsgDeleteTimedoutPost;
};
export declare const MsgDeleteTimedoutPostResponse: {
    encode(_: MsgDeleteTimedoutPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTimedoutPostResponse;
    fromJSON(_: any): MsgDeleteTimedoutPostResponse;
    toJSON(_: MsgDeleteTimedoutPostResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteTimedoutPostResponse>): MsgDeleteTimedoutPostResponse;
};
export declare const MsgCreateSentPost: {
    encode(message: MsgCreateSentPost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSentPost;
    fromJSON(object: any): MsgCreateSentPost;
    toJSON(message: MsgCreateSentPost): unknown;
    fromPartial(object: DeepPartial<MsgCreateSentPost>): MsgCreateSentPost;
};
export declare const MsgCreateSentPostResponse: {
    encode(message: MsgCreateSentPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSentPostResponse;
    fromJSON(object: any): MsgCreateSentPostResponse;
    toJSON(message: MsgCreateSentPostResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateSentPostResponse>): MsgCreateSentPostResponse;
};
export declare const MsgUpdateSentPost: {
    encode(message: MsgUpdateSentPost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSentPost;
    fromJSON(object: any): MsgUpdateSentPost;
    toJSON(message: MsgUpdateSentPost): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSentPost>): MsgUpdateSentPost;
};
export declare const MsgUpdateSentPostResponse: {
    encode(_: MsgUpdateSentPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSentPostResponse;
    fromJSON(_: any): MsgUpdateSentPostResponse;
    toJSON(_: MsgUpdateSentPostResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSentPostResponse>): MsgUpdateSentPostResponse;
};
export declare const MsgDeleteSentPost: {
    encode(message: MsgDeleteSentPost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSentPost;
    fromJSON(object: any): MsgDeleteSentPost;
    toJSON(message: MsgDeleteSentPost): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSentPost>): MsgDeleteSentPost;
};
export declare const MsgDeleteSentPostResponse: {
    encode(_: MsgDeleteSentPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSentPostResponse;
    fromJSON(_: any): MsgDeleteSentPostResponse;
    toJSON(_: MsgDeleteSentPostResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSentPostResponse>): MsgDeleteSentPostResponse;
};
export declare const MsgCreatePost: {
    encode(message: MsgCreatePost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePost;
    fromJSON(object: any): MsgCreatePost;
    toJSON(message: MsgCreatePost): unknown;
    fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost;
};
export declare const MsgCreatePostResponse: {
    encode(message: MsgCreatePostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePostResponse;
    fromJSON(object: any): MsgCreatePostResponse;
    toJSON(message: MsgCreatePostResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePostResponse>): MsgCreatePostResponse;
};
export declare const MsgUpdatePost: {
    encode(message: MsgUpdatePost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePost;
    fromJSON(object: any): MsgUpdatePost;
    toJSON(message: MsgUpdatePost): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePost>): MsgUpdatePost;
};
export declare const MsgUpdatePostResponse: {
    encode(_: MsgUpdatePostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePostResponse;
    fromJSON(_: any): MsgUpdatePostResponse;
    toJSON(_: MsgUpdatePostResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePostResponse>): MsgUpdatePostResponse;
};
export declare const MsgDeletePost: {
    encode(message: MsgDeletePost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePost;
    fromJSON(object: any): MsgDeletePost;
    toJSON(message: MsgDeletePost): unknown;
    fromPartial(object: DeepPartial<MsgDeletePost>): MsgDeletePost;
};
export declare const MsgDeletePostResponse: {
    encode(_: MsgDeletePostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePostResponse;
    fromJSON(_: any): MsgDeletePostResponse;
    toJSON(_: MsgDeletePostResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePostResponse>): MsgDeletePostResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateTimedoutPost(request: MsgCreateTimedoutPost): Promise<MsgCreateTimedoutPostResponse>;
    UpdateTimedoutPost(request: MsgUpdateTimedoutPost): Promise<MsgUpdateTimedoutPostResponse>;
    DeleteTimedoutPost(request: MsgDeleteTimedoutPost): Promise<MsgDeleteTimedoutPostResponse>;
    CreateSentPost(request: MsgCreateSentPost): Promise<MsgCreateSentPostResponse>;
    UpdateSentPost(request: MsgUpdateSentPost): Promise<MsgUpdateSentPostResponse>;
    DeleteSentPost(request: MsgDeleteSentPost): Promise<MsgDeleteSentPostResponse>;
    CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
    UpdatePost(request: MsgUpdatePost): Promise<MsgUpdatePostResponse>;
    DeletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateTimedoutPost(request: MsgCreateTimedoutPost): Promise<MsgCreateTimedoutPostResponse>;
    UpdateTimedoutPost(request: MsgUpdateTimedoutPost): Promise<MsgUpdateTimedoutPostResponse>;
    DeleteTimedoutPost(request: MsgDeleteTimedoutPost): Promise<MsgDeleteTimedoutPostResponse>;
    CreateSentPost(request: MsgCreateSentPost): Promise<MsgCreateSentPostResponse>;
    UpdateSentPost(request: MsgUpdateSentPost): Promise<MsgUpdateSentPostResponse>;
    DeleteSentPost(request: MsgDeleteSentPost): Promise<MsgDeleteSentPostResponse>;
    CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
    UpdatePost(request: MsgUpdatePost): Promise<MsgUpdatePostResponse>;
    DeletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
