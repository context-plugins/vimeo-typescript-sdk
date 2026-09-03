import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pictureSchema, type Picture } from "./picture.js";

export type Uploader = {
  link: string;
  name: string;
  pictures: Picture;
};

export const uploaderSchema: Schema<Uploader> = s.object<Uploader>({
  link: s.string(),
  name: s.string(),
  pictures: pictureSchema,
});
