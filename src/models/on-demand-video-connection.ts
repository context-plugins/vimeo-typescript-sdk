import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { onDemandVideoSchema, type OnDemandVideo } from "./on-demand-video.js";
import { pagingSchema, type Paging } from "./paging.js";

export type OnDemandVideoConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: OnDemandVideo[];
};

export const onDemandVideoConnectionSchema: Schema<OnDemandVideoConnection> =
  s.object<OnDemandVideoConnection>({
    total: s.optional(s.int()),
    page: s.optional(s.int()),
    perPage: s.optional(s.int()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => onDemandVideoSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
