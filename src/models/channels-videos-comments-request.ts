import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChannelsVideosCommentsRequest = {
  richtext?: string;
  text?: string;
};

export const channelsVideosCommentsRequestSchema: Schema<ChannelsVideosCommentsRequest> =
  s.object<ChannelsVideosCommentsRequest>({
    richtext: s.optional(s.string()),
    text: s.optional(s.string()),
  });
