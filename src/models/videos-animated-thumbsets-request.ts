import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosAnimatedThumbsetsRequest = {
  /** The duration of the animation in seconds. The maximum value is 6. */
  duration: number;
  /**
   * The time in seconds corresponding to the start of the animation in the video. The default value
   * is 0.
   */
  startTime?: number;
};

export const videosAnimatedThumbsetsRequestSchema: Schema<VideosAnimatedThumbsetsRequest> =
  s.object<VideosAnimatedThumbsetsRequest>({
    duration: s.float64(),
    startTime: s.optional(s.float64()),
    _keysMap: {
      startTime: "start_time",
    },
  });
