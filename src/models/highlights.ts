import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason5Schema, type Reason5 } from "./reason5.js";

/** Information about where and how to create a highlight for the video. */
export type Highlights = {
  /** Whether the interaction is disabled for the video. */
  disabled?: boolean;
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /**
   * The reason why the interaction is disabled.
   *
   * Option descriptions:
   *  * `owner_disabled_feature_group` - The owner has disabled the feature group.
   *  * `transcript_status_does_not_exist` - The transcript doesn't exist.
   *  * `transcript_status_failed` - The transcript job failed.
   *  * `transcript_status_in_progress` - The transcript job is in progress.
   *  * `transcript_status_no_speech` - There's no speech detected for the transcript.
   *  * `transcript_status_not_started` - The transcript job hasn't started.
   *  * `transcript_status_unknown` - The transcript job status is unknown.
   *  * `video_not_ready` - The video isn't ready.
   *  * `video_resolution_too_low` - The video resolution is below the 360p minimum requirement.
   *  * `video_too_short` - The video is too short.
   *  * `video_transcript_too_short` - The video transcript is too short.
   */
  reason?: Reason5;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const highlightsSchema: Schema<Highlights> = s.object<Highlights>({
  disabled: s.optional(s.boolean()),
  options: s.array(s.string()),
  reason: s.optional(s.lazy(() => reason5Schema)),
  uri: s.string(),
});
