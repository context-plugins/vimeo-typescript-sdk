import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosChaptersRequest = {
  activeThumbnailUri?: string;
  thumbnailUris?: string[];
  timecode?: number | null;
  title?: string | null;
};

export const videosChaptersRequestSchema: Schema<VideosChaptersRequest> = s.object<VideosChaptersRequest>({
  activeThumbnailUri: s.optional(s.string()),
  thumbnailUris: s.optional(s.array(s.string())),
  timecode: s.optionalNullable(s.number()),
  title: s.optionalNullable(s.string()),
  _keysMap: {
    activeThumbnailUri: "active_thumbnail_uri",
    thumbnailUris: "thumbnail_uris",
  },
});
