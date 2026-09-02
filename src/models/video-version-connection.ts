import { s, type Schema } from "../core/index.js";
import { pagingSchema, type Paging } from "./paging.js";
import { videoVersionSchema, type VideoVersion } from "./video-version.js";

export type VideoVersionConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: VideoVersion[];
};

export const videoVersionConnectionSchema: Schema<VideoVersionConnection> = s.object<VideoVersionConnection>({
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => videoVersionSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
