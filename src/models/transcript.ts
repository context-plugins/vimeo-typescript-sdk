import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status7Schema, type Status7 } from "./status7.js";

/**
 * The transcript information of the video. This data requires a bearer token with the `private`
 * scope.
 */
export type Transcript = {
  /**
   * The video transcript's language. This data requires a bearer token with the `private` scope.
   */
  language: string | null;
  /**
   * The video transcript's availability status. This data requires a bearer token with the
   * `private` scope.
   *
   * Option descriptions:
   *  * `blocked` - The transcription is blocked.
   *  * `completed` - Transcription is completed. The transcript is available.
   *  * `exceeds_maximum_duration` - The audio track is too long to be transcribed.
   *  * `failed` - There was a transcription error. The transcript isn't available.
   *  * `in_progress` - Transcription is currently underway. The transcript isn't available yet.
   *  * `language_not_supported` - We currently don't support transcribing audio for this video's
   *    language.
   *  * `no_speech` - Transcription was completed, but there were no words in the audio to
   *    transcribe.
   *  * `not_started` - The transcript job hasn't started.
   *  * `unknown` - There isn't a record of this video's transcription job.
   */
  status?: Status7;
};

export const transcriptSchema: Schema<Transcript> = s.object<Transcript>({
  language: s.nullable(s.string()),
  status: s.optional(s.lazy(() => status7Schema)),
});
