import { s, type Schema } from "../core/index.js";
import { videos16Schema, type Videos16 } from "./videos16.js";

export type MeLiveEventsVideosRequest = {
  videos?: Videos16[];
};

export const meLiveEventsVideosRequestSchema: Schema<MeLiveEventsVideosRequest> =
  s.object<MeLiveEventsVideosRequest>({
    videos: s.optional(s.array(s.lazy(() => videos16Schema))),
  });
