import { s, type Schema } from "../core/index.js";
import { pictureSchema, type Picture } from "./picture.js";

export type Image = {
  description?: string;
  link?: string;
  picture?: Picture | null;
  pictureUri?: string | null;
};

export const imageSchema: Schema<Image> = s.object<Image>({
  description: s.optional(s.string()),
  link: s.optional(s.string()),
  picture: s.optionalNullable(s.lazy(() => pictureSchema)),
  pictureUri: s.optionalNullable(s.string()),
  _keysMap: {
    pictureUri: "picture_uri",
  },
});
