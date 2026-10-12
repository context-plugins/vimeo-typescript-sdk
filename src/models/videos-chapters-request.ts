import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosChaptersRequest = {
  /** The URI of the chapter's active thumbnail. */
  activeThumbnailUri?: string;
  /** An array of URIs of the thumbnails associated with the video chapter. */
  thumbnailUris?: string[];
  /** The timecode of the chapter in seconds from the start of the video. */
  timecode?: number | null;
  /** The title of the chapter. */
  title?: string | null;
};

export const videosChaptersRequestSchema: Schema<VideosChaptersRequest> = s.object<VideosChaptersRequest>({
  activeThumbnailUri: s.optional(s.string()),
  thumbnailUris: s.optional(s.array(s.string())),
  timecode: s.optionalNullable(s.float64()),
  title: s.optionalNullable(s.string()),
  _keysMap: {
    activeThumbnailUri: "active_thumbnail_uri",
    thumbnailUris: "thumbnail_uris",
  },
});
