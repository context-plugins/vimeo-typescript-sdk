import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { onDemandGenreSchema, type OnDemandGenre } from "./on-demand-genre.js";
import { pagingSchema, type Paging } from "./paging.js";

export type OnDemandGenreConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: OnDemandGenre[];
};

export const onDemandGenreConnectionSchema: Schema<OnDemandGenreConnection> =
  s.object<OnDemandGenreConnection>({
    total: s.optional(s.int()),
    page: s.optional(s.int()),
    perPage: s.optional(s.int()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => onDemandGenreSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
