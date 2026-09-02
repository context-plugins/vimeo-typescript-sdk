import { s, type Schema } from "../core/index.js";
import { creditSchema, type Credit } from "./credit.js";
import { pagingSchema, type Paging } from "./paging.js";

export type CreditConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Credit[];
};

export const creditConnectionSchema: Schema<CreditConnection> = s.object<CreditConnection>({
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => creditSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
