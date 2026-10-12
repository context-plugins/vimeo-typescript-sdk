import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The video's availability status.
 *
 * Option descriptions:
 *  * `complete` - Transcoding is complete. The video is available.
 *  * `error` - There was a transcoding error. The video isn't available.
 *  * `in_progress` - Transcoding is currently underway. The video isn't available yet.
 */
export const Status6 = {
  Complete: "complete",
  Error: "error",
  InProgress: "in_progress",
} as const;
export type Status6 = (typeof Status6)[keyof typeof Status6] | (string & {});

export const status6Schema: EnumSchema<Status6> = s.enumOf<Status6>(Status6);
