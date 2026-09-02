import { s, type Schema } from "../core/index.js";
import { videos16Schema, type Videos16 } from "./videos16.js";

export type LiveEventsVideosRequest = {
  videos?: Videos16[];
};

export const liveEventsVideosRequestSchema: Schema<LiveEventsVideosRequest> =
  s.object<LiveEventsVideosRequest>({
    videos: s.optional(s.array(s.lazy(() => videos16Schema))),
  });
