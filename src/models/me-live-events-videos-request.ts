import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { videos16Schema, type Videos16 } from "./videos16.js";

export type MeLiveEventsVideosRequest = {
  /** An array of video objects. */
  videos?: Videos16[];
};

export const meLiveEventsVideosRequestSchema: Schema<MeLiveEventsVideosRequest> =
  s.object<MeLiveEventsVideosRequest>({
    videos: s.optional(s.array(s.lazy(() => videos16Schema))),
  });
