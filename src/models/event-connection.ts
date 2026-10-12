import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import { pagingSchema, type Paging } from "./paging.js";

export type EventConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Event[];
};

export const eventConnectionSchema: Schema<EventConnection> = s.object<EventConnection>({
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => eventSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
