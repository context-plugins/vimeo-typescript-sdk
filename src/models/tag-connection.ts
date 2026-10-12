import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => tagSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
