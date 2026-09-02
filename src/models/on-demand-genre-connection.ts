import { s, type Schema } from "../core/index.js";
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
    total: s.optional(s.number()),
    page: s.optional(s.number()),
    perPage: s.optional(s.number()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => onDemandGenreSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
