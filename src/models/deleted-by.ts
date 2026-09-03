import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pictureSchema, type Picture } from "./picture.js";

export type DeletedBy = {
  name: string;
  pictures: Picture;
  uri: string;
};

export const deletedBySchema: Schema<DeletedBy> = s.object<DeletedBy>({
  name: s.string(),
  pictures: pictureSchema,
  uri: s.string(),
});
