import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { videos17Schema, type Videos17 } from "./videos17.js";

export type LiveEventsVideosRequest1 = {
  /** An array of video objects. */
  videos?: Videos17[];
};

export const liveEventsVideosRequest1Schema: Schema<LiveEventsVideosRequest1> =
  s.object<LiveEventsVideosRequest1>({
    videos: s.optional(s.array(s.lazy(() => videos17Schema))),
  });
