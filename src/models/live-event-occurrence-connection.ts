import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { liveEventOccurrenceSchema, type LiveEventOccurrence } from "./live-event-occurrence.js";
import { pagingSchema, type Paging } from "./paging.js";

export type LiveEventOccurrenceConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: LiveEventOccurrence[];
};

export const liveEventOccurrenceConnectionSchema: Schema<LiveEventOccurrenceConnection> =
  s.object<LiveEventOccurrenceConnection>({
    total: s.optional(s.int()),
    page: s.optional(s.int()),
    perPage: s.optional(s.int()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => liveEventOccurrenceSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
