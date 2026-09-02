import { s, type Schema } from "../core/index.js";

export type ChannelsVideosRequest = {
  videoUri: string;
};

export const channelsVideosRequestSchema: Schema<ChannelsVideosRequest> = s.object<ChannelsVideosRequest>({
  videoUri: s.string(),
  _keysMap: {
    videoUri: "video_uri",
  },
});
