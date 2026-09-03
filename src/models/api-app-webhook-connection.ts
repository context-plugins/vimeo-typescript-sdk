import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiAppWebhookSchema, type ApiAppWebhook } from "./api-app-webhook.js";
import { pagingSchema, type Paging } from "./paging.js";

export type ApiAppWebhookConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: ApiAppWebhook[];
};

export const apiAppWebhookConnectionSchema: Schema<ApiAppWebhookConnection> =
  s.object<ApiAppWebhookConnection>({
    total: s.optional(s.number()),
    page: s.optional(s.number()),
    perPage: s.optional(s.number()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => apiAppWebhookSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
