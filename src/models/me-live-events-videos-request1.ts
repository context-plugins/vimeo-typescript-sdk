import { s, type Schema } from "../core/index.js";
import { videos17Schema, type Videos17 } from "./videos17.js";

export type MeLiveEventsVideosRequest1 = {
  videos?: Videos17[];
};

export const meLiveEventsVideosRequest1Schema: Schema<MeLiveEventsVideosRequest1> =
  s.object<MeLiveEventsVideosRequest1>({
    videos: s.optional(s.array(s.lazy(() => videos17Schema))),
  });
