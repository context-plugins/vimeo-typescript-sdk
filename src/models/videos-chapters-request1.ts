import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosChaptersRequest1 = {
  activeThumbnailUri?: string;
  timecode?: number | null;
  title?: string | null;
};

export const videosChaptersRequest1Schema: Schema<VideosChaptersRequest1> = s.object<VideosChaptersRequest1>({
  activeThumbnailUri: s.optional(s.string()),
  timecode: s.optionalNullable(s.number()),
  title: s.optionalNullable(s.string()),
  _keysMap: {
    activeThumbnailUri: "active_thumbnail_uri",
  },
});
