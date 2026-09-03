import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosAnimatedThumbsetsRequest = {
  duration: number;
  startTime?: number;
};

export const videosAnimatedThumbsetsRequestSchema: Schema<VideosAnimatedThumbsetsRequest> =
  s.object<VideosAnimatedThumbsetsRequest>({
    duration: s.number(),
    startTime: s.optional(s.number()),
    _keysMap: {
      startTime: "start_time",
    },
  });
