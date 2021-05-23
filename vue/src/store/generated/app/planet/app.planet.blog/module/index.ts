// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteSentPost } from "./types/blog/tx";
import { MsgCreateTimedoutPost } from "./types/blog/tx";
import { MsgDeleteTimedoutPost } from "./types/blog/tx";
import { MsgUpdatePost } from "./types/blog/tx";
import { MsgUpdateTimedoutPost } from "./types/blog/tx";
import { MsgCreatePost } from "./types/blog/tx";
import { MsgCreateSentPost } from "./types/blog/tx";
import { MsgDeletePost } from "./types/blog/tx";
import { MsgUpdateSentPost } from "./types/blog/tx";


const types = [
  ["/app.planet.blog.MsgDeleteSentPost", MsgDeleteSentPost],
  ["/app.planet.blog.MsgCreateTimedoutPost", MsgCreateTimedoutPost],
  ["/app.planet.blog.MsgDeleteTimedoutPost", MsgDeleteTimedoutPost],
  ["/app.planet.blog.MsgUpdatePost", MsgUpdatePost],
  ["/app.planet.blog.MsgUpdateTimedoutPost", MsgUpdateTimedoutPost],
  ["/app.planet.blog.MsgCreatePost", MsgCreatePost],
  ["/app.planet.blog.MsgCreateSentPost", MsgCreateSentPost],
  ["/app.planet.blog.MsgDeletePost", MsgDeletePost],
  ["/app.planet.blog.MsgUpdateSentPost", MsgUpdateSentPost],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgDeleteSentPost: (data: MsgDeleteSentPost): EncodeObject => ({ typeUrl: "/app.planet.blog.MsgDeleteSentPost", value: data }),
    msgCreateTimedoutPost: (data: MsgCreateTimedoutPost): EncodeObject => ({ typeUrl: "/app.planet.blog.MsgCreateTimedoutPost", value: data }),
    msgDeleteTimedoutPost: (data: MsgDeleteTimedoutPost): EncodeObject => ({ typeUrl: "/app.planet.blog.MsgDeleteTimedoutPost", value: data }),
    msgUpdatePost: (data: MsgUpdatePost): EncodeObject => ({ typeUrl: "/app.planet.blog.MsgUpdatePost", value: data }),
    msgUpdateTimedoutPost: (data: MsgUpdateTimedoutPost): EncodeObject => ({ typeUrl: "/app.planet.blog.MsgUpdateTimedoutPost", value: data }),
    msgCreatePost: (data: MsgCreatePost): EncodeObject => ({ typeUrl: "/app.planet.blog.MsgCreatePost", value: data }),
    msgCreateSentPost: (data: MsgCreateSentPost): EncodeObject => ({ typeUrl: "/app.planet.blog.MsgCreateSentPost", value: data }),
    msgDeletePost: (data: MsgDeletePost): EncodeObject => ({ typeUrl: "/app.planet.blog.MsgDeletePost", value: data }),
    msgUpdateSentPost: (data: MsgUpdateSentPost): EncodeObject => ({ typeUrl: "/app.planet.blog.MsgUpdateSentPost", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
