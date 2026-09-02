import { s, type Schema } from "../core/index.js";
import { videos17Schema, type Videos17 } from "./videos17.js";

export type LiveEventsVideosRequest1 = {
  videos?: Videos17[];
};

export const liveEventsVideosRequest1Schema: Schema<LiveEventsVideosRequest1> =
  s.object<LiveEventsVideosRequest1>({
    videos: s.optional(s.array(s.lazy(() => videos17Schema))),
  });
