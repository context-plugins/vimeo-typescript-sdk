import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventDestinationSchema, type EventDestination } from "./event-destination.js";
import { pagingSchema, type Paging } from "./paging.js";

export type EventDestinationConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: EventDestination[];
};

export const eventDestinationConnectionSchema: Schema<EventDestinationConnection> =
  s.object<EventDestinationConnection>({
    total: s.optional(s.number()),
    page: s.optional(s.number()),
    perPage: s.optional(s.number()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => eventDestinationSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
