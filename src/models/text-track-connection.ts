import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => textTrackSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
