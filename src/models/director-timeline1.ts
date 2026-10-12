import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DirectorTimeline1 = {
  /**
   * The 360 director timeline pitch. This value must be between `−90` and `90`, and it's required
   * only when **spatial.director_timeline** is defined.
   */
  pitch: number;
  /** The 360 director timeline roll. */
  roll?: number;
  /**
   * The 360 director timeline time code. This field is required only when
   * **spatial.director_timeline** is defined.
   */
  timeCode: number;
  /**
   * The 360 director timeline yaw. This value must be between `0` and `360`, and it's required only
   * when **spatial.director_timeline** is defined.
   */
  yaw: number;
};

export const directorTimeline1Schema: Schema<DirectorTimeline1> = s.object<DirectorTimeline1>({
  pitch: s.float64(),
  roll: s.optional(s.float64()),
  timeCode: s.float64(),
  yaw: s.float64(),
  _keysMap: {
    timeCode: "time_code",
  },
});
