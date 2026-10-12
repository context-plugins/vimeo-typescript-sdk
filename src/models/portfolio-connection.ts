import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagingSchema, type Paging } from "./paging.js";
import { portfolioSchema, type Portfolio } from "./portfolio.js";

export type PortfolioConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Portfolio[];
};

export const portfolioConnectionSchema: Schema<PortfolioConnection> = s.object<PortfolioConnection>({
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => portfolioSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
