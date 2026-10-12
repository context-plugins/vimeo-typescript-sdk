import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of event that triggers the webhook.
 *
 * Option descriptions:
 *  * `automatic-thumbnail-available` - The webhook is called when the automatically generated
 *    thumbnail is available.
 *  * `content-scan-completed` - The webhook is called when content moderation scan results are
 *    available.
 *  * `live-event-archive-available` - The webhook is called when an archive of the event is
 *    available.
 *  * `live-event-clip-created` - The webhook is called when a new video of the event is created.
 *  * `live-event-deleted` - The webhook is called when an event is deleted.
 *  * `live-event-ended` - The webhook is called when an event is ended.
 *  * `live-event-started` - The webhook is called when an event is started.
 *  * `live-event-updated` - The webhook is called when an event is updated.
 *  * `transcript-status-complete` - The webhook is called when a transcript status is either
 *    `completed` or `failed`.
 *  * `transcript-status-updated` - The webhook is called when a transcript status is updated.
 *  * `video-created` - The webhook is called when a video is created.
 *  * `video-deleted` - The webhook is called when a video is deleted.
 *  * `video-transcode-complete` - The webhook is called when a video finishes transcoding.
 *  * `video-transcode-fully-playable` - The webhook is called when a video is playable in all
 *    resolutions, up to either the source quality or 4K, whichever is lower, at standard
 *    definition.
 *  * `video-transcode-playable` - The webhook is called when a video is playable.
 *  * `video-updated` - The webhook is called when a video is updated.
 *  * `video-upload-failed` - The webhook is called when a video upload fails.
 */
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
