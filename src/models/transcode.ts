import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status6Schema, type Status6 } from "./status6.js";

/** The transcode information of the video upload. */
export type Transcode = {
  /**
   * The video's availability status.
   *
   * Option descriptions:
   *  * `complete` - Transcoding is complete. The video is available.
   *  * `error` - There was a transcoding error. The video isn't available.
   *  * `in_progress` - Transcoding is currently underway. The video isn't available yet.
   */
  status?: Status6;
};

export const transcodeSchema: Schema<Transcode> = s.object<Transcode>({
  status: s.optional(s.lazy(() => status6Schema)),
});
