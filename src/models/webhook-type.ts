import { s, type EnumSchema } from "../core/index.js";

export const WebhookType = {
  AutomaticThumbnailAvailable: "automatic-thumbnail-available",
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
export type WebhookType = (typeof WebhookType)[keyof typeof WebhookType] | (string & {});

export const webhookTypeSchema: EnumSchema<WebhookType> = s.enumOf<WebhookType>(WebhookType);
