import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChannelsVideosPicturesRequest = {
  active?: boolean;
  time?: number;
};

export const channelsVideosPicturesRequestSchema: Schema<ChannelsVideosPicturesRequest> =
  s.object<ChannelsVideosPicturesRequest>({
    active: s.optional(s.boolean()),
    time: s.optional(s.number()),
  });
