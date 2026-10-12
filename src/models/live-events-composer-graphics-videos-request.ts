import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LiveEventsComposerGraphicsVideosRequest = {
  /** The ID of the associated video. */
  videoId: number;
};

export const liveEventsComposerGraphicsVideosRequestSchema: Schema<LiveEventsComposerGraphicsVideosRequest> =
  s.object<LiveEventsComposerGraphicsVideosRequest>({
    videoId: s.float64(),
    _keysMap: {
      videoId: "video_id",
    },
  });
