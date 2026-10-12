import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChannelsVideosCreditsRequest = {
  /** The email address of the credited person. */
  email: string;
  /** The name of the credited person. */
  name: string;
  /** The role of the credited person. */
  role: string;
  /** The Vimeo URI of the credited person. */
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
