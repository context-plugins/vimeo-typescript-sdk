import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pictureSchema, type Picture } from "./picture.js";

/** The video's uploader. */
export type Uploader = {
  /** The profile link of the user who uploaded the video. */
  link: string;
  /** The display name of the user who uploaded the video. */
  name: string;
  /** The active portrait of the user who uploaded the video. */
  pictures: Picture;
};

export const uploaderSchema: Schema<Uploader> = s.object<Uploader>({
  link: s.string(),
  name: s.string(),
  pictures: pictureSchema,
});
