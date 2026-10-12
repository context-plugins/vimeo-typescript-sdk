import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DirectorTimeline = {
  /** The timeline pitch value, ranging from a minimum of `-90` to a maximum of `90`. */
  pitch?: number;
  /** The timeline roll value. */
  roll?: number;
  /** The timeline time code. */
  timeCode?: number;
  /** The timeline yaw value, ranging from a minimum of `0` to a maximum of `360`. */
  yaw?: number;
};

export const directorTimelineSchema: Schema<DirectorTimeline> = s.object<DirectorTimeline>({
  pitch: s.optional(s.float64()),
  roll: s.optional(s.float64()),
  timeCode: s.optional(s.float64()),
  yaw: s.optional(s.float64()),
  _keysMap: {
    timeCode: "time_code",
  },
});
