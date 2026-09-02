import { s, type Schema } from "../core/index.js";

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
