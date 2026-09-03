import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChannelsTagsRequest = {
  name: string;
};

export const channelsTagsRequestSchema: Schema<ChannelsTagsRequest> = s.object<ChannelsTagsRequest>({
  name: s.string(),
});
