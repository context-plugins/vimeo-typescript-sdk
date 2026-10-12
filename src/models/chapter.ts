import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pictureSchema, type Picture } from "./picture.js";

export type Chapter = {
  /** The URI of the active thumbnail. */
  activeThumbnailUri?: string;
  /** The thumbnails associated with the video chapter. */
  thumbnails: Picture[];
  /** The timecode of the chapter in seconds from the start of the video. */
  timecode: number;
  /** The title of the chapter. */
  title: string;
  /** The relative URI of the chapter. */
  uri: string;
};

export const chapterSchema: Schema<Chapter> = s.object<Chapter>({
  activeThumbnailUri: s.optional(s.string()),
  thumbnails: s.array(s.lazy(() => pictureSchema)),
  timecode: s.float64(),
  title: s.string(),
  uri: s.string(),
  _keysMap: {
    activeThumbnailUri: "active_thumbnail_uri",
  },
});
