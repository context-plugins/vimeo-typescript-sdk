import { s, type EnumSchema } from "../core/index.js";

export const WebhookType1 = {
  AutomaticThumbnailAvailable: "automatic-thumbnail-available",
  ContentScanCompleted: "content-scan-completed",
  LiveEventArchiveAvailable: "live-event-archive-available",
  LiveEventClipCreated: "live-event-clip-created",
  LiveEventDeleted: "live-event-deleted",
  LiveEventEnded: "live-event-ended",
  LiveEventStarted: "live-event-started",
  LiveEventUpdated: "live-event-updated",
  TranscriptStatusComplete: "transcript-status-complete",
  TranscriptStatusUpdated: "transcript-status-updated",
  VideoCreated: "video-created",
  VideoDeleted: "video-deleted",
  VideoTranscodeComplete: "video-transcode-complete",
  VideoTranscodeFullyPlayable: "video-transcode-fully-playable",
  VideoTranscodePlayable: "video-transcode-playable",
  VideoUpdated: "video-updated",
  VideoUploadFailed: "video-upload-failed",
} as const;
export type WebhookType1 = (typeof WebhookType1)[keyof typeof WebhookType1] | (string & {});

export const webhookType1Schema: EnumSchema<WebhookType1> = s.enumOf<WebhookType1>(WebhookType1);
