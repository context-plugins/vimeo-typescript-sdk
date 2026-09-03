import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { domainSchema, type Domain } from "./domain.js";
import { pagingSchema, type Paging } from "./paging.js";

export type DomainConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Domain[];
};

export const domainConnectionSchema: Schema<DomainConnection> = s.object<DomainConnection>({
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => domainSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
