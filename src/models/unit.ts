import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The unit that's used to compute quota.
 *
 * Option descriptions:
 *  * `video_count` - The quota is calculated using the count of the videos.
 *  * `video_size` - The quota is calculated using the byte size of the videos.
 */
export const Unit = {
  VideoCount: "video_count",
  VideoSize: "video_size",
} as const;
export type Unit = (typeof Unit)[keyof typeof Unit] | (string & {});

export const unitSchema: EnumSchema<Unit> = s.enumOf<Unit>(Unit);
