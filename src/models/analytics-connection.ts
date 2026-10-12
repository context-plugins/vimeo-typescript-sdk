import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { analyticsSchema, type Analytics } from "./analytics.js";
import { pagingSchema, type Paging } from "./paging.js";

export type AnalyticsConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Analytics[];
};

export const analyticsConnectionSchema: Schema<AnalyticsConnection> = s.object<AnalyticsConnection>({
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => analyticsSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
