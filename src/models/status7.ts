import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The video transcript's availability status. This data requires a bearer token with the `private`
 * scope.
 *
 * Option descriptions:
 *  * `blocked` - The transcription is blocked.
 *  * `completed` - Transcription is completed. The transcript is available.
 *  * `exceeds_maximum_duration` - The audio track is too long to be transcribed.
 *  * `failed` - There was a transcription error. The transcript isn't available.
 *  * `in_progress` - Transcription is currently underway. The transcript isn't available yet.
 *  * `language_not_supported` - We currently don't support transcribing audio for this video's
 *    language.
 *  * `no_speech` - Transcription was completed, but there were no words in the audio to transcribe.
 *  * `not_started` - The transcript job hasn't started.
 *  * `unknown` - There isn't a record of this video's transcription job.
 */
export const Status7 = {
  Blocked: "blocked",
  Completed: "completed",
  ExceedsMaximumDuration: "exceeds_maximum_duration",
  Failed: "failed",
  InProgress: "in_progress",
  LanguageNotSupported: "language_not_supported",
  NoSpeech: "no_speech",
  NotStarted: "not_started",
  Unknown: "unknown",
} as const;
export type Status7 = (typeof Status7)[keyof typeof Status7] | (string & {});

export const status7Schema: EnumSchema<Status7> = s.enumOf<Status7>(Status7);
