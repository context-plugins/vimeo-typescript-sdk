import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The unit that's used to compute quota.
 *
 * Option descriptions:
 *  * `video_size` - The quota is calculated using the byte size of the videos.
 */
export const Unit2 = {
  VideoSize: "video_size",
} as const;
export type Unit2 = (typeof Unit2)[keyof typeof Unit2] | (string & {});

export const unit2Schema: EnumSchema<Unit2> = s.enumOf<Unit2>(Unit2);
