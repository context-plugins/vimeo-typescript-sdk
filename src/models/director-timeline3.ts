import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DirectorTimeline3 = {
  pitch: number;
  roll?: number;
  timeCode: number;
  yaw: number;
};

export const directorTimeline3Schema: Schema<DirectorTimeline3> = s.object<DirectorTimeline3>({
  pitch: s.number(),
  roll: s.optional(s.number()),
  timeCode: s.number(),
  yaw: s.number(),
  _keysMap: {
    timeCode: "time_code",
  },
});
