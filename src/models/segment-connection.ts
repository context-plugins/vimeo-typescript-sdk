import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => segmentSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
