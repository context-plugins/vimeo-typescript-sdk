import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status code for the availability of the video version.
 *
 * Option descriptions:
 *  * `complete` - Transcoding is complete. The video version is available.
 *  * `error` - There was a transcoding error. The video version isn't available.
 *  * `in_progress` - Transcoding is in progress. The video version isn't available yet.
 */
export const Status23 = {
  Complete: "complete",
  Error: "error",
  InProgress: "in_progress",
} as const;
export type Status23 = (typeof Status23)[keyof typeof Status23] | (string & {});

export const status23Schema: EnumSchema<Status23> = s.enumOf<Status23>(Status23);
