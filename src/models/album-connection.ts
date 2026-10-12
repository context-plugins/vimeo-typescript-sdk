import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { albumSchema, type Album } from "./album.js";
import { pagingSchema, type Paging } from "./paging.js";

export type AlbumConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Album[];
};

export const albumConnectionSchema: Schema<AlbumConnection> = s.object<AlbumConnection>({
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => albumSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
