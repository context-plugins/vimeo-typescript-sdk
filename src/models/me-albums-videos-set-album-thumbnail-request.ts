import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeAlbumsVideosSetAlbumThumbnailRequest = {
  timeCode?: number;
};

export const meAlbumsVideosSetAlbumThumbnailRequestSchema: Schema<MeAlbumsVideosSetAlbumThumbnailRequest> =
  s.object<MeAlbumsVideosSetAlbumThumbnailRequest>({
    timeCode: s.optional(s.number()),
    _keysMap: {
      timeCode: "time_code",
    },
  });
