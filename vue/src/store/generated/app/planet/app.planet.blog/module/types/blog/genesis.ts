/* eslint-disable */
import { TimedoutPost } from "../blog/timedoutPost";
import { SentPost } from "../blog/sentPost";
import { Post } from "../blog/post";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "app.planet.blog";

/** GenesisState defines the blog module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  timedoutPostList: TimedoutPost[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  sentPostList: SentPost[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  postList: Post[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  portId: string;
}

const baseGenesisState: object = { portId: "" };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.timedoutPostList) {
      TimedoutPost.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sentPostList) {
      SentPost.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.postList) {
      Post.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.timedoutPostList = [];
    message.sentPostList = [];
    message.postList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.timedoutPostList.push(
            TimedoutPost.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.sentPostList.push(SentPost.decode(reader, reader.uint32()));
          break;
        case 2:
          message.postList.push(Post.decode(reader, reader.uint32()));
          break;
        case 1:
          message.portId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.timedoutPostList = [];
    message.sentPostList = [];
    message.postList = [];
    if (
      object.timedoutPostList !== undefined &&
      object.timedoutPostList !== null
    ) {
      for (const e of object.timedoutPostList) {
        message.timedoutPostList.push(TimedoutPost.fromJSON(e));
      }
    }
    if (object.sentPostList !== undefined && object.sentPostList !== null) {
      for (const e of object.sentPostList) {
        message.sentPostList.push(SentPost.fromJSON(e));
      }
    }
    if (object.postList !== undefined && object.postList !== null) {
      for (const e of object.postList) {
        message.postList.push(Post.fromJSON(e));
      }
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = "";
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.timedoutPostList) {
      obj.timedoutPostList = message.timedoutPostList.map((e) =>
        e ? TimedoutPost.toJSON(e) : undefined
      );
    } else {
      obj.timedoutPostList = [];
    }
    if (message.sentPostList) {
      obj.sentPostList = message.sentPostList.map((e) =>
        e ? SentPost.toJSON(e) : undefined
      );
    } else {
      obj.sentPostList = [];
    }
    if (message.postList) {
      obj.postList = message.postList.map((e) =>
        e ? Post.toJSON(e) : undefined
      );
    } else {
      obj.postList = [];
    }
    message.portId !== undefined && (obj.portId = message.portId);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.timedoutPostList = [];
    message.sentPostList = [];
    message.postList = [];
    if (
      object.timedoutPostList !== undefined &&
      object.timedoutPostList !== null
    ) {
      for (const e of object.timedoutPostList) {
        message.timedoutPostList.push(TimedoutPost.fromPartial(e));
      }
    }
    if (object.sentPostList !== undefined && object.sentPostList !== null) {
      for (const e of object.sentPostList) {
        message.sentPostList.push(SentPost.fromPartial(e));
      }
    }
    if (object.postList !== undefined && object.postList !== null) {
      for (const e of object.postList) {
        message.postList.push(Post.fromPartial(e));
      }
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
