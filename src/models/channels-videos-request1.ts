import { s, type Schema } from "../core/index.js";

export type ChannelsVideosRequest1 = {
  videoUri: string;
};

export const channelsVideosRequest1Schema: Schema<ChannelsVideosRequest1> = s.object<ChannelsVideosRequest1>({
  videoUri: s.string(),
  _keysMap: {
    videoUri: "video_uri",
  },
});
