import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagingSchema, type Paging } from "./paging.js";
import { videoSchema, type Video } from "./video.js";

export type VideoConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Video[];
};

export const videoConnectionSchema: Schema<VideoConnection> = s.object<VideoConnection>({
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => videoSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
