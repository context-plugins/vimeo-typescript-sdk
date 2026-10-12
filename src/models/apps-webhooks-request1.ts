import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { webhookType1Schema, type WebhookType1 } from "./webhook-type1.js";

export type AppsWebhooksRequest1 = {
  /** Whether the webhook is activated. */
  isEnabled?: boolean;
  /**
   * The secret key that is passed on webhook payloads. The null value means that no secret key is
   * passed.
   */
  secret?: string | null;
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
  webhookType?: WebhookType1;
  /** The URL to which data is sent. */
  webhookUrl?: string;
};

export const appsWebhooksRequest1Schema: Schema<AppsWebhooksRequest1> = s.object<AppsWebhooksRequest1>({
  isEnabled: s.optional(s.boolean()),
  secret: s.optionalNullable(s.string()),
  webhookType: s.optional(s.lazy(() => webhookType1Schema)),
  webhookUrl: s.optional(s.string()),
  _keysMap: {
    isEnabled: "is_enabled",
    webhookType: "webhook_type",
    webhookUrl: "webhook_url",
  },
});
