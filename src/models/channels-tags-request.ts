import { s, type Schema } from "../core/index.js";

export type ChannelsTagsRequest = {
  name: string;
};

export const channelsTagsRequestSchema: Schema<ChannelsTagsRequest> = s.object<ChannelsTagsRequest>({
  name: s.string(),
});
