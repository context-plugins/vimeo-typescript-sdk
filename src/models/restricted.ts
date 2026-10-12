import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { unit2Schema, type Unit2 } from "./unit2.js";

/** The restricted video storage quota (for embeddable and private videos). */
export type Restricted = {
  /** The number of bytes remaining in the authenticated user's restricted video storage quota. */
  free: number | null;
  /**
   * The total number of bytes that the authenticated user can use for restricted videos (embeddable
   * or private).
   */
  max: number | null;
  /**
   * The unit that's used to compute quota.
   *
   * Option descriptions:
   *  * `video_size` - The quota is calculated using the byte size of the videos.
   */
  unit: Unit2;
  /** The number of bytes that the authenticated user has already used for restricted videos. */
  used: number;
};

export const restrictedSchema: Schema<Restricted> = s.object<Restricted>({
  free: s.nullable(s.float64()),
  max: s.nullable(s.float64()),
  unit: unit2Schema,
  used: s.float64(),
});
