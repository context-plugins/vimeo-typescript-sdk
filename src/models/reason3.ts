import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const Reason3 = {
  TranscriptReadyButNotEnglish: "transcript_ready_but_not_english",
  TranscriptStatusDoesNotExist: "transcript_status_does_not_exist",
  TranscriptStatusExceedsMaximumDuration: "transcript_status_exceeds_maximum_duration",
  TranscriptStatusFailed: "transcript_status_failed",
  TranscriptStatusInProgress: "transcript_status_in_progress",
  TranscriptStatusLanguageNotSupported: "transcript_status_language_not_supported",
  TranscriptStatusNoSpeech: "transcript_status_no_speech",
  TranscriptStatusNotStarted: "transcript_status_not_started",
  TranscriptStatusUnknown: "transcript_status_unknown",
  VideoNotReady: "video_not_ready",
  VideoTooShort: "video_too_short",
  VideoTranscriptTooShort: "video_transcript_too_short",
} as const;
export type Reason3 = (typeof Reason3)[keyof typeof Reason3] | (string & {});

export const reason3Schema: EnumSchema<Reason3> = s.enumOf<Reason3>(Reason3);
