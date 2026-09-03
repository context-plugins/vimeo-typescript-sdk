import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChannelsVideosCreditsRequest = {
  email: string;
  name: string;
  role: string;
  userUri: string;
};

export const channelsVideosCreditsRequestSchema: Schema<ChannelsVideosCreditsRequest> =
  s.object<ChannelsVideosCreditsRequest>({
    email: s.string(),
    name: s.string(),
    role: s.string(),
    userUri: s.string(),
    _keysMap: {
      userUri: "user_uri",
    },
  });
