import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { composerScenesSchema, type ComposerScenes } from "./composer-scenes.js";
import { pagingSchema, type Paging } from "./paging.js";

export type ComposerScenesConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: ComposerScenes[];
};

export const composerScenesConnectionSchema: Schema<ComposerScenesConnection> =
  s.object<ComposerScenesConnection>({
    total: s.optional(s.int()),
    page: s.optional(s.int()),
    perPage: s.optional(s.int()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => composerScenesSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
