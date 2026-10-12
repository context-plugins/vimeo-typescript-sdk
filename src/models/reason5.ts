import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
