import { s, type Schema } from "../core/index.js";

export type UsersAlbumsVideosVideoIdSetAlbumThumbnailRequest = {
  timeCode?: number;
};

export const usersAlbumsVideosVideoIdSetAlbumThumbnailRequestSchema: Schema<UsersAlbumsVideosVideoIdSetAlbumThumbnailRequest> =
  s.object<UsersAlbumsVideosVideoIdSetAlbumThumbnailRequest>({
    timeCode: s.optional(s.number()),
    _keysMap: {
      timeCode: "time_code",
    },
  });
