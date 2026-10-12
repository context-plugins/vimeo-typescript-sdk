import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => groupSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
