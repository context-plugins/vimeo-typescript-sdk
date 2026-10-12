import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeAlbumsVideosSetAlbumThumbnailRequest = {
  /** The time in seconds of the video frame to use as the thumbnail image. */
  timeCode?: number;
};

export const meAlbumsVideosSetAlbumThumbnailRequestSchema: Schema<MeAlbumsVideosSetAlbumThumbnailRequest> =
  s.object<MeAlbumsVideosSetAlbumThumbnailRequest>({
    timeCode: s.optional(s.float64()),
    _keysMap: {
      timeCode: "time_code",
    },
  });
