import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChannelsVideosRequest1 = {
  videoUri: string;
};

export const channelsVideosRequest1Schema: Schema<ChannelsVideosRequest1> = s.object<ChannelsVideosRequest1>({
  videoUri: s.string(),
  _keysMap: {
    videoUri: "video_uri",
  },
});
