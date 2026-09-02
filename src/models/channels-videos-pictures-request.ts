import { s, type Schema } from "../core/index.js";

export type ChannelsVideosPicturesRequest = {
  active?: boolean;
  time?: number;
};

export const channelsVideosPicturesRequestSchema: Schema<ChannelsVideosPicturesRequest> =
  s.object<ChannelsVideosPicturesRequest>({
    active: s.optional(s.boolean()),
    time: s.optional(s.number()),
  });
