import { s, type Schema } from "../core/index.js";
import { categorySchema, type Category } from "./category.js";
import { pagingSchema, type Paging } from "./paging.js";

export type CategoryConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Category[];
};

export const categoryConnectionSchema: Schema<CategoryConnection> = s.object<CategoryConnection>({
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => categorySchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
