import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { period3Schema, type Period3 } from "./period3.js";
import { unitSchema, type Unit } from "./unit.js";

/** Information about the authenticated user's usage for the current period. */
export type Periodic = {
  /**
   * The number of bytes or video count remaining in the authenticated user's upload quota for the
   * current period.
   */
  free: number | null;
  /** The total number of bytes or videos that the authenticated user can upload per period. */
  max: number | null;
  /**
   * The renewal frequency of the quota.
   *
   * Option descriptions:
   *  * `lifetime` - The user doesn't have a periodic quota.
   *  * `month` - The quota renews monthly.
   *  * `week` - The quota renews weekly.
   *  * `year` - The quota renews yearly.
   */
  period: Period3 | null;
  /** The time in ISO 8601 format when the authenticated user's upload quota resets. */
  resetDate: string | null;
  /**
   * The unit that's used to compute quota.
   *
   * Option descriptions:
   *  * `video_count` - The quota is calculated using the count of the videos.
   *  * `video_size` - The quota is calculated using the byte size of the videos.
   */
  unit: Unit | null;
  /**
   * The number of bytes or video count that the authenticated user has already uploaded against
   * their quota in the current period.
   */
  used: number | null;
};

export const periodicSchema: Schema<Periodic> = s.object<Periodic>({
  free: s.nullable(s.float64()),
  max: s.nullable(s.float64()),
  period: s.nullable(s.lazy(() => period3Schema)),
  resetDate: s.nullable(s.string()),
  unit: s.nullable(s.lazy(() => unitSchema)),
  used: s.nullable(s.float64()),
  _keysMap: {
    resetDate: "reset_date",
  },
});
