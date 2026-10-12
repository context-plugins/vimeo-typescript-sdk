import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { videos17Schema, type Videos17 } from "./videos17.js";

export type MeLiveEventsVideosRequest1 = {
  /** An array of video objects. */
  videos?: Videos17[];
};

export const meLiveEventsVideosRequest1Schema: Schema<MeLiveEventsVideosRequest1> =
  s.object<MeLiveEventsVideosRequest1>({
    videos: s.optional(s.array(s.lazy(() => videos17Schema))),
  });
