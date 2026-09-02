import { s, type Schema } from "../core/index.js";
import { groupSchema, type Group } from "./group.js";
import { pagingSchema, type Paging } from "./paging.js";

export type GroupConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Group[];
};

export const groupConnectionSchema: Schema<GroupConnection> = s.object<GroupConnection>({
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => groupSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
