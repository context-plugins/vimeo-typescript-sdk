import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { showingSchema, type Showing } from "./showing.js";
import { unitSchema, type Unit } from "./unit.js";

/** Information about the authenticated user's upload space remaining for the current period. */
export type Space = {
  /** The number of bytes or videos remaining in the authenticated user's upload quota. */
  free: number;
  /** The maximum number of bytes or videos allotted to the authenticated user's upload quota. */
  max: number | null;
  /**
   * The type of quota for the values of the **upload_quota.space** field.
   *
   * Option descriptions:
   *  * `lifetime` - The quota type is lifetime.
   *  * `periodic` - The quota type is periodic.
   */
  showing: Showing;
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
   * quota.
   */
  used: number;
};

export const spaceSchema: Schema<Space> = s.object<Space>({
  free: s.float64(),
  max: s.nullable(s.float64()),
  showing: showingSchema,
  unit: s.nullable(s.lazy(() => unitSchema)),
  used: s.float64(),
});
