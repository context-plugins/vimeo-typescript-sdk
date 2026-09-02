import { s, type Schema } from "../core/index.js";
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
    total: s.optional(s.number()),
    page: s.optional(s.number()),
    perPage: s.optional(s.number()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => alternateAudioTrackSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
