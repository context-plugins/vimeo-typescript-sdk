import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { alternateAudioTrackSchema, type AlternateAudioTrack } from "./alternate-audio-track.js";
import { pagingSchema, type Paging } from "./paging.js";

export type AlternateAudioTrackConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: AlternateAudioTrack[];
};

export const alternateAudioTrackConnectionSchema: Schema<AlternateAudioTrackConnection> =
  s.object<AlternateAudioTrackConnection>({
    total: s.optional(s.int()),
    page: s.optional(s.int()),
    perPage: s.optional(s.int()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => alternateAudioTrackSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
