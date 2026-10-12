import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason3Schema, type Reason3 } from "./reason3.js";

/**
 * Information about where and how to submit questions by managers to the AI service for this video.
 */
export type AskAiManager = {
  /** Whether the summary method is disabled. */
  disabled: boolean;
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /**
   * The reason why the summary method is disabled.
   *
   * Option descriptions:
   *  * `transcript_ready_but_not_english` - The transcript is ready, but it isn't in English.
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
  reason: Reason3 | null;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const askAiManagerSchema: Schema<AskAiManager> = s.object<AskAiManager>({
  disabled: s.boolean(),
  options: s.array(s.string()),
  reason: s.nullable(s.lazy(() => reason3Schema)),
  uri: s.string(),
});
