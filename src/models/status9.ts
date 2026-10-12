import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The transcode status of the audio track.
 *
 * Option descriptions:
 *  * `complete` - Transcoding is complete. The audio track is available.
 *  * `error` - There was a transcoding error. The audio track isn't available.
 *  * `in_progress` - Transcoding is in progress. The audio track isn't available yet.
 */
export const Status9 = {
  Complete: "complete",
  Error: "error",
  InProgress: "in_progress",
} as const;
export type Status9 = (typeof Status9)[keyof typeof Status9] | (string & {});

export const status9Schema: EnumSchema<Status9> = s.enumOf<Status9>(Status9);
