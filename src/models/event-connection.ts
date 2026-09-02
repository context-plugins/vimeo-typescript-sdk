import { s, type Schema } from "../core/index.js";
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
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => eventSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
