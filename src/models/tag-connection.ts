import { s, type Schema } from "../core/index.js";
import { pagingSchema, type Paging } from "./paging.js";
import { tagSchema, type Tag } from "./tag.js";

export type TagConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Tag[];
};

export const tagConnectionSchema: Schema<TagConnection> = s.object<TagConnection>({
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => tagSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
