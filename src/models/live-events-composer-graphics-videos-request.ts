import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LiveEventsComposerGraphicsVideosRequest = {
  videoId: number;
};

export const liveEventsComposerGraphicsVideosRequestSchema: Schema<LiveEventsComposerGraphicsVideosRequest> =
  s.object<LiveEventsComposerGraphicsVideosRequest>({
    videoId: s.number(),
    _keysMap: {
      videoId: "video_id",
    },
  });
