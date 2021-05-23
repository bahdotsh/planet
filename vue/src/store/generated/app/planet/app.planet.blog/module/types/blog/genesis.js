/* eslint-disable */
import { TimedoutPost } from "../blog/timedoutPost";
import { SentPost } from "../blog/sentPost";
import { Post } from "../blog/post";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "app.planet.blog";
const baseGenesisState = { portId: "" };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.timedoutPostList) {
            TimedoutPost.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.sentPostList) {
            SentPost.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.postList) {
            Post.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.timedoutPostList = [];
        message.sentPostList = [];
        message.postList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    message.timedoutPostList.push(TimedoutPost.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.timedoutPostList = [];
        message.sentPostList = [];
        message.postList = [];
        if (object.timedoutPostList !== undefined &&
            object.timedoutPostList !== null) {
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
        }
        else {
            message.portId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.timedoutPostList) {
            obj.timedoutPostList = message.timedoutPostList.map((e) => e ? TimedoutPost.toJSON(e) : undefined);
        }
        else {
            obj.timedoutPostList = [];
        }
        if (message.sentPostList) {
            obj.sentPostList = message.sentPostList.map((e) => e ? SentPost.toJSON(e) : undefined);
        }
        else {
            obj.sentPostList = [];
        }
        if (message.postList) {
            obj.postList = message.postList.map((e) => e ? Post.toJSON(e) : undefined);
        }
        else {
            obj.postList = [];
        }
        message.portId !== undefined && (obj.portId = message.portId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.timedoutPostList = [];
        message.sentPostList = [];
        message.postList = [];
        if (object.timedoutPostList !== undefined &&
            object.timedoutPostList !== null) {
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
        }
        else {
            message.portId = "";
        }
        return message;
    },
};
