import { s, type Schema } from "../core/index.js";
import { activity31Schema, type Activity31 } from "./activity31.js";
import { pagingSchema, type Paging } from "./paging.js";

export type Activity31Connection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Activity31[];
};

export const activity31ConnectionSchema: Schema<Activity31Connection> = s.object<Activity31Connection>({
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => activity31Schema))),
  _keysMap: {
    perPage: "per_page",
  },
});
