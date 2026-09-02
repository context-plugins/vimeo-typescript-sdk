import { s, type Schema } from "../core/index.js";
import { onDemandRegionSchema, type OnDemandRegion } from "./on-demand-region.js";
import { pagingSchema, type Paging } from "./paging.js";

export type OnDemandRegionConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: OnDemandRegion[];
};

export const onDemandRegionConnectionSchema: Schema<OnDemandRegionConnection> =
  s.object<OnDemandRegionConnection>({
    total: s.optional(s.number()),
    page: s.optional(s.number()),
    perPage: s.optional(s.number()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => onDemandRegionSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
