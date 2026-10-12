import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosChaptersRequest1 = {
  /** The URI of the chapter's active thumbnail. */
  activeThumbnailUri?: string;
  /** The timecode of the chapter in seconds from the start of the video. */
  timecode?: number | null;
  /** The title of the chapter. */
  title?: string | null;
};

export const videosChaptersRequest1Schema: Schema<VideosChaptersRequest1> = s.object<VideosChaptersRequest1>({
  activeThumbnailUri: s.optional(s.string()),
  timecode: s.optionalNullable(s.float64()),
  title: s.optionalNullable(s.string()),
  _keysMap: {
    activeThumbnailUri: "active_thumbnail_uri",
  },
});
