import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
