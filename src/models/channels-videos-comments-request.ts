import { s, type Schema } from "../core/index.js";

export type ChannelsVideosCommentsRequest = {
  richtext?: string;
  text?: string;
};

export const channelsVideosCommentsRequestSchema: Schema<ChannelsVideosCommentsRequest> =
  s.object<ChannelsVideosCommentsRequest>({
    richtext: s.optional(s.string()),
    text: s.optional(s.string()),
  });
