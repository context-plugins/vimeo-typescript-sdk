import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChannelsVideosRequest1 = {
  /**
   * A member of an array representing the URIs of the videos to add. For each member in the array,
   * use the format `{"video_uri":"x"}` where **x** is a video URI. For more information on batch
   * requests like this, see [Using Common Formats and
   * Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).
   */
  videoUri: string;
};

export const channelsVideosRequest1Schema: Schema<ChannelsVideosRequest1> = s.object<ChannelsVideosRequest1>({
  videoUri: s.string(),
  _keysMap: {
    videoUri: "video_uri",
  },
});
