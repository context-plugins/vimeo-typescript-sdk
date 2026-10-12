import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentRatingSchema, type ContentRating } from "./content-rating.js";
import { pagingSchema, type Paging } from "./paging.js";

export type ContentRatingConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: ContentRating[];
};

export const contentRatingConnectionSchema: Schema<ContentRatingConnection> =
  s.object<ContentRatingConnection>({
    total: s.optional(s.int()),
    page: s.optional(s.int()),
    perPage: s.optional(s.int()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => contentRatingSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
