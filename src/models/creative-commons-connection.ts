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
    total: s.optional(s.int()),
    page: s.optional(s.int()),
    perPage: s.optional(s.int()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => creativeCommonsSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
