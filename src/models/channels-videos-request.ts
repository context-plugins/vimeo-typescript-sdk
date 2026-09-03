import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChannelsVideosRequest = {
  videoUri: string;
};

export const channelsVideosRequestSchema: Schema<ChannelsVideosRequest> = s.object<ChannelsVideosRequest>({
  videoUri: s.string(),
  _keysMap: {
    videoUri: "video_uri",
  },
});
