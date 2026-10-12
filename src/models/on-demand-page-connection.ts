import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { onDemandPageSchema, type OnDemandPage } from "./on-demand-page.js";
import { pagingSchema, type Paging } from "./paging.js";

export type OnDemandPageConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: OnDemandPage[];
};

export const onDemandPageConnectionSchema: Schema<OnDemandPageConnection> = s.object<OnDemandPageConnection>({
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => onDemandPageSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
