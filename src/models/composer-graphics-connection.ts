import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { composerGraphicsSchema, type ComposerGraphics } from "./composer-graphics.js";
import { pagingSchema, type Paging } from "./paging.js";

export type ComposerGraphicsConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: ComposerGraphics[];
};

export const composerGraphicsConnectionSchema: Schema<ComposerGraphicsConnection> =
  s.object<ComposerGraphicsConnection>({
    total: s.optional(s.int()),
    page: s.optional(s.int()),
    perPage: s.optional(s.int()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => composerGraphicsSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
