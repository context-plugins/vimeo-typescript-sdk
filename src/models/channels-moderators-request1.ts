import { s, type Schema } from "../core/index.js";

export type ChannelsModeratorsRequest1 = {
  userUri: string;
};

export const channelsModeratorsRequest1Schema: Schema<ChannelsModeratorsRequest1> =
  s.object<ChannelsModeratorsRequest1>({
    userUri: s.string(),
    _keysMap: {
      userUri: "user_uri",
    },
  });
