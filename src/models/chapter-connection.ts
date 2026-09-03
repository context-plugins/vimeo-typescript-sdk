import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chapterSchema, type Chapter } from "./chapter.js";
import { pagingSchema, type Paging } from "./paging.js";

export type ChapterConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Chapter[];
};

export const chapterConnectionSchema: Schema<ChapterConnection> = s.object<ChapterConnection>({
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => chapterSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
