import { s, type Schema } from "../core/index.js";
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
    total: s.optional(s.number()),
    page: s.optional(s.number()),
    perPage: s.optional(s.number()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => contentRatingSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
