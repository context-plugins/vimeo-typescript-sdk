import { s, type Schema } from "../core/index.js";
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
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => onDemandPageSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
