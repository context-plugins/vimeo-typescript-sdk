import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
