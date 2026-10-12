import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChannelsCategoriesRequest = {
  /** The array of category URIs to add. */
  channels: string[];
};

export const channelsCategoriesRequestSchema: Schema<ChannelsCategoriesRequest> =
  s.object<ChannelsCategoriesRequest>({
    channels: s.array(s.string()),
  });
