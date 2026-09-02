import { s, type Schema } from "../core/index.js";
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
