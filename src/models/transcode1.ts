import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status9Schema, type Status9 } from "./status9.js";

/** The transcode information for the audio track. */
export type Transcode1 = {
  /**
   * The transcode status of the audio track.
   *
   * Option descriptions:
   *  * `complete` - Transcoding is complete. The audio track is available.
   *  * `error` - There was a transcoding error. The audio track isn't available.
   *  * `in_progress` - Transcoding is in progress. The audio track isn't available yet.
   */
  status: Status9;
};

export const transcode1Schema: Schema<Transcode1> = s.object<Transcode1>({
  status: status9Schema,
});
