import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { unitSchema, type Unit } from "./unit.js";

/** Information about the authenticated user's lifetime upload usage. */
export type Lifetime = {
  /** The number of bytes or videos remaining in the authenticated user's lifetime maximum. */
  free: number | null;
  /**
   * The total number of bytes or videos that the authenticated user can upload across the lifetime
   * of their account.
   */
  max: number | null;
  /**
   * The unit that's used to compute quota.
   *
   * Option descriptions:
   *  * `video_count` - The quota is calculated using the count of the videos.
   *  * `video_size` - The quota is calculated using the byte size of the videos.
   */
  unit: Unit | null;
  /**
   * The number of bytes or videos that the authenticated user has already uploaded against their
   * lifetime limit.
   */
  used: number | null;
};

export const lifetimeSchema: Schema<Lifetime> = s.object<Lifetime>({
  free: s.nullable(s.float64()),
  max: s.nullable(s.float64()),
  unit: s.nullable(s.lazy(() => unitSchema)),
  used: s.nullable(s.float64()),
});
