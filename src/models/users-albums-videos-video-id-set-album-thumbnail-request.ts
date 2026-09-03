import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
