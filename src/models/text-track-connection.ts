import { s, type Schema } from "../core/index.js";
import { pagingSchema, type Paging } from "./paging.js";
import { textTrackSchema, type TextTrack } from "./text-track.js";

export type TextTrackConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: TextTrack[];
};

export const textTrackConnectionSchema: Schema<TextTrackConnection> = s.object<TextTrackConnection>({
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => textTrackSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
