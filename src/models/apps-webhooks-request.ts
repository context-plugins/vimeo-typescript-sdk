import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { webhookType1Schema, type WebhookType1 } from "./webhook-type1.js";

export type AppsWebhooksRequest = {
  isEnabled?: boolean;
  secret?: string;
  webhookType?: WebhookType1;
  webhookUrl?: string;
};

export const appsWebhooksRequestSchema: Schema<AppsWebhooksRequest> = s.object<AppsWebhooksRequest>({
  isEnabled: s.optional(s.boolean()),
  secret: s.optional(s.string()),
  webhookType: s.optional(s.lazy(() => webhookType1Schema)),
  webhookUrl: s.optional(s.string()),
  _keysMap: {
    isEnabled: "is_enabled",
    webhookType: "webhook_type",
    webhookUrl: "webhook_url",
  },
});
