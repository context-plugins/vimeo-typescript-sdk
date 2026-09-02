import { s, type Schema } from "../core/index.js";
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
    total: s.optional(s.number()),
    page: s.optional(s.number()),
    perPage: s.optional(s.number()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => composerGraphicsSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
