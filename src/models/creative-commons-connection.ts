import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creativeCommonsSchema, type CreativeCommons } from "./creative-commons.js";
import { pagingSchema, type Paging } from "./paging.js";

export type CreativeCommonsConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: CreativeCommons[];
};

export const creativeCommonsConnectionSchema: Schema<CreativeCommonsConnection> =
  s.object<CreativeCommonsConnection>({
    total: s.optional(s.number()),
    page: s.optional(s.number()),
    perPage: s.optional(s.number()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => creativeCommonsSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
