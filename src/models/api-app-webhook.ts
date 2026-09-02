import { s, type Schema } from "../core/index.js";
import { webhookTypeSchema, type WebhookType } from "./webhook-type.js";

export type ApiAppWebhook = {
  appUri: number;
  createdOn: string;
  disabledOn?: string;
  enabledOn?: string;
  failureRateBeforeDisabling?: number;
  isEnabled: boolean;
  lastRequestTimeBeforeDisabling?: string;
  modifiedOn: string;
  requestsExecutedBeforeDisabling?: number;
  requestsFailedBeforeDisabling?: number;
  secret?: string;
  timePeriodFailureRate?: number;
  uri: string;
  webhookType: WebhookType;
  webhookUrl: string;
};

export const apiAppWebhookSchema: Schema<ApiAppWebhook> = s.object<ApiAppWebhook>({
  appUri: s.number(),
  createdOn: s.string(),
  disabledOn: s.optional(s.string()),
  enabledOn: s.optional(s.string()),
  failureRateBeforeDisabling: s.optional(s.number()),
  isEnabled: s.boolean(),
  lastRequestTimeBeforeDisabling: s.optional(s.string()),
  modifiedOn: s.string(),
  requestsExecutedBeforeDisabling: s.optional(s.number()),
  requestsFailedBeforeDisabling: s.optional(s.number()),
  secret: s.optional(s.string()),
  timePeriodFailureRate: s.optional(s.number()),
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
