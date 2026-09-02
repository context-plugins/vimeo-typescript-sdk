import { s, type Schema } from "../core/index.js";

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
