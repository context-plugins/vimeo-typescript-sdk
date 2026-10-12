import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the video.
 *
 * Option descriptions:
 *  * `done` - The video is finished processing.
 *  * `failed` - Video processing has failed.
 *  * `processing` - The video is still being processed.
 */
export const Status2 = {
  Done: "done",
  Failed: "failed",
  Processing: "processing",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
