import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChannelsModeratorsRequest = {
  /** The URI of a user to remove as a moderator. */
  userUri: string;
};

export const channelsModeratorsRequestSchema: Schema<ChannelsModeratorsRequest> =
  s.object<ChannelsModeratorsRequest>({
    userUri: s.string(),
    _keysMap: {
      userUri: "user_uri",
    },
  });
