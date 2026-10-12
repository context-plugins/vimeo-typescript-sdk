import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { animatedThumbsetSchema, type AnimatedThumbset } from "./animated-thumbset.js";
import { pagingSchema, type Paging } from "./paging.js";

export type AnimatedThumbsetConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: AnimatedThumbset[];
};

export const animatedThumbsetConnectionSchema: Schema<AnimatedThumbsetConnection> =
  s.object<AnimatedThumbsetConnection>({
    total: s.optional(s.int()),
    page: s.optional(s.int()),
    perPage: s.optional(s.int()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => animatedThumbsetSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
