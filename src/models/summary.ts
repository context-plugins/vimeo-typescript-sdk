import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason6Schema, type Reason6 } from "./reason6.js";

/** Information about whether the current user can create or get a summary for the video. */
export type Summary = {
  /** Whether the summary method is disabled. */
  disabled: boolean;
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /**
   * The reason why the summary method is disabled.
   *
   * Option descriptions:
   *  * `owner_disabled_feature_group` - The owner has disabled the feature group.
   *  * `transcript_status_does_not_exist` - The transcript doesn't exist.
   *  * `transcript_status_exceeds_maximum_duration` - The transcript duration is too long.
   *  * `transcript_status_failed` - The transcript job failed.
   *  * `transcript_status_in_progress` - The transcript job is in progress.
   *  * `transcript_status_language_not_supported` - The transcript's language isn't supported.
   *  * `transcript_status_no_speech` - There's no speech detected for the transcript.
   *  * `transcript_status_not_started` - The transcript job hasn't started.
   *  * `transcript_status_unknown` - The transcript job status is unknown.
   *  * `video_not_ready` - The video isn't ready.
   *  * `video_too_short` - The video is too short.
   *  * `video_transcript_too_short` - The video transcript is too short.
   */
  reason: Reason6 | null;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const summarySchema: Schema<Summary> = s.object<Summary>({
  disabled: s.boolean(),
  options: s.array(s.string()),
  reason: s.nullable(s.lazy(() => reason6Schema)),
  uri: s.string(),
});
