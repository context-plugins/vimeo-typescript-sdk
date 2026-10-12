import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => creditSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
