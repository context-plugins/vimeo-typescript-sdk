import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status code for the availability of the uploaded video.
 *
 * Option descriptions:
 *  * `canceled` - The upload was canceled.
 *  * `complete` - The upload is complete.
 *  * `error` - The upload ended with an error.
 *  * `in_progress` - The upload is underway.
 */
export const Status8 = {
  Canceled: "canceled",
  Complete: "complete",
  Error: "error",
  InProgress: "in_progress",
} as const;
export type Status8 = (typeof Status8)[keyof typeof Status8] | (string & {});

export const status8Schema: EnumSchema<Status8> = s.enumOf<Status8>(Status8);
