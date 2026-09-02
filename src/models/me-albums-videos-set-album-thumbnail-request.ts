import { s, type Schema } from "../core/index.js";

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
