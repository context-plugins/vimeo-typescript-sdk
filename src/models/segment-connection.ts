import { s, type Schema } from "../core/index.js";
import { pagingSchema, type Paging } from "./paging.js";
import { segmentSchema, type Segment } from "./segment.js";

export type SegmentConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Segment[];
};

export const segmentConnectionSchema: Schema<SegmentConnection> = s.object<SegmentConnection>({
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => segmentSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
