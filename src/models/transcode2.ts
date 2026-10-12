import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status23Schema, type Status23 } from "./status23.js";

/** The version's transcode information. */
export type Transcode2 = {
  /**
   * The status code for the availability of the video version.
   *
   * Option descriptions:
   *  * `complete` - Transcoding is complete. The video version is available.
   *  * `error` - There was a transcoding error. The video version isn't available.
   *  * `in_progress` - Transcoding is in progress. The video version isn't available yet.
   */
  status?: Status23;
};

export const transcode2Schema: Schema<Transcode2> = s.object<Transcode2>({
  status: s.optional(s.lazy(() => status23Schema)),
});
