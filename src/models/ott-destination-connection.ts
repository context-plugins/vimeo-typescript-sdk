import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ottDestinationSchema, type OttDestination } from "./ott-destination.js";
import { pagingSchema, type Paging } from "./paging.js";

export type OttDestinationConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: OttDestination[];
};

export const ottDestinationConnectionSchema: Schema<OttDestinationConnection> =
  s.object<OttDestinationConnection>({
    total: s.optional(s.int()),
    page: s.optional(s.int()),
    perPage: s.optional(s.int()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => ottDestinationSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
