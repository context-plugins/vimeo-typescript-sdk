import { s, type Schema } from "../core/index.js";

export type ChannelsModeratorsRequest = {
  userUri: string;
};

export const channelsModeratorsRequestSchema: Schema<ChannelsModeratorsRequest> =
  s.object<ChannelsModeratorsRequest>({
    userUri: s.string(),
    _keysMap: {
      userUri: "user_uri",
    },
  });
