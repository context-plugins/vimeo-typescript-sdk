import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reason5 = {
  OwnerDisabledFeatureGroup: "owner_disabled_feature_group",
  TranscriptStatusDoesNotExist: "transcript_status_does_not_exist",
  TranscriptStatusFailed: "transcript_status_failed",
  TranscriptStatusInProgress: "transcript_status_in_progress",
  TranscriptStatusNoSpeech: "transcript_status_no_speech",
  TranscriptStatusNotStarted: "transcript_status_not_started",
  TranscriptStatusUnknown: "transcript_status_unknown",
  VideoNotReady: "video_not_ready",
  VideoResolutionTooLow: "video_resolution_too_low",
  VideoTooShort: "video_too_short",
  VideoTranscriptTooShort: "video_transcript_too_short",
} as const;
export type Reason5 = (typeof Reason5)[keyof typeof Reason5] | (string & {});

export const reason5Schema: EnumSchema<Reason5> = s.enumOf<Reason5>(Reason5);
