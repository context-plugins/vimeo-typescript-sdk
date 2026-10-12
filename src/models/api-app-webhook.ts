import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { webhookTypeSchema, type WebhookType } from "./webhook-type.js";

export type ApiAppWebhook = {
  /** The URI of the API app for which the webhook is created. */
  appUri: number;
  /** The time in ISO 8601 format when the webhook was created. */
  createdOn: string;
  /**
   * The time in ISO 8601 format when the webhook was most recently disabled. If this field isn't
   * present in the response, the webhook isn't disabled.
   */
  disabledOn?: string;
  /**
   * The time in ISO 8601 format when the webhook was most recently enabled. If this field doesn't
   * appear in the response, the webhook is disabled.
   */
  enabledOn?: string;
  /**
   * The failure error rate at the time that the webhook was most recently disabled. If this field
   * doesn't appear in the response, the webhook wasn't disabled after being active.
   */
  failureRateBeforeDisabling?: number;
  /** Whether the webhook is activated. */
  isEnabled: boolean;
  /**
   * The time in ISO 8601 format when the last request to the webhook URL was made before the
   * webhook was disabled. If this field doesn't appear in the response, the webhook wasn't disabled
   * after being active.
   */
  lastRequestTimeBeforeDisabling?: string;
  /** The time in ISO 8601 format when the webhook was most recently modified. */
  modifiedOn: string;
  /**
   * The number of requests that were executed before the webhook was most recently disabled. If
   * this field doesn't appear in the response, the webhook wasn't disabled after being active.
   */
  requestsExecutedBeforeDisabling?: number;
  /**
   * The number of requests that failed before the webhook was most recently disabled. If this field
   * doesn't appear in the response, the webhook wasn't disabled after being active.
   */
  requestsFailedBeforeDisabling?: number;
  /**
   * The secret key that is passed on webhook payloads. If this field isn't present in the response,
   * no secret key is passed.
   */
  secret?: string;
  /**
   * The time period in seconds over which requests were executed before the webhook was most
   * recently disabled. If this field doesn't appear in the response, the webhook wasn't disabled
   * after being active.
   */
  timePeriodFailureRate?: number;
  /** The URI of the webhook. */
  uri: string;
  /**
   * The type of event that triggers the webhook.
   *
   * Option descriptions:
   *  * `automatic-thumbnail-available` - The webhook is called when the automatically generated
   *    thumbnail is available.
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
  webhookType: WebhookType;
  /** The URL to which data is sent when the webhook is triggered. */
  webhookUrl: string;
};

export const apiAppWebhookSchema: Schema<ApiAppWebhook> = s.object<ApiAppWebhook>({
  appUri: s.float64(),
  createdOn: s.string(),
  disabledOn: s.optional(s.string()),
  enabledOn: s.optional(s.string()),
  failureRateBeforeDisabling: s.optional(s.float64()),
  isEnabled: s.boolean(),
  lastRequestTimeBeforeDisabling: s.optional(s.string()),
  modifiedOn: s.string(),
  requestsExecutedBeforeDisabling: s.optional(s.float64()),
  requestsFailedBeforeDisabling: s.optional(s.float64()),
  secret: s.optional(s.string()),
  timePeriodFailureRate: s.optional(s.float64()),
  uri: s.string(),
  webhookType: webhookTypeSchema,
  webhookUrl: s.string(),
  _keysMap: {
    appUri: "app_uri",
    createdOn: "created_on",
    disabledOn: "disabled_on",
    enabledOn: "enabled_on",
    failureRateBeforeDisabling: "failure_rate_before_disabling",
    isEnabled: "is_enabled",
    lastRequestTimeBeforeDisabling: "last_request_time_before_disabling",
    modifiedOn: "modified_on",
    requestsExecutedBeforeDisabling: "requests_executed_before_disabling",
    requestsFailedBeforeDisabling: "requests_failed_before_disabling",
    timePeriodFailureRate: "time_period_failure_rate",
    webhookType: "webhook_type",
    webhookUrl: "webhook_url",
  },
});
