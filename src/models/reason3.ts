import { s, type EnumSchema } from "../core/index.js";

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
