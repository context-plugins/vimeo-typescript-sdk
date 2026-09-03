import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reason6 = {
  OwnerDisabledFeatureGroup: "owner_disabled_feature_group",
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
export type Reason6 = (typeof Reason6)[keyof typeof Reason6] | (string & {});

export const reason6Schema: EnumSchema<Reason6> = s.enumOf<Reason6>(Reason6);
