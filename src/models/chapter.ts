import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pictureSchema, type Picture } from "./picture.js";

export type Chapter = {
  activeThumbnailUri?: string;
  thumbnails: Picture[];
  timecode: number;
  title: string;
  uri: string;
};

export const chapterSchema: Schema<Chapter> = s.object<Chapter>({
  activeThumbnailUri: s.optional(s.string()),
  thumbnails: s.array(s.lazy(() => pictureSchema)),
  timecode: s.number(),
  title: s.string(),
  uri: s.string(),
  _keysMap: {
    activeThumbnailUri: "active_thumbnail_uri",
  },
});
