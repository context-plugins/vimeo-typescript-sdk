import { s, type Schema } from "../core/index.js";

export type ChannelsCategoriesRequest = {
  channels: string[];
};

export const channelsCategoriesRequestSchema: Schema<ChannelsCategoriesRequest> =
  s.object<ChannelsCategoriesRequest>({
    channels: s.array(s.string()),
  });
