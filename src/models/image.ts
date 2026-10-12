import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pictureSchema, type Picture } from "./picture.js";

/** The custom image that appears after the video ends. */
export type Image = {
  /** The description of the custom image's content. */
  description?: string;
  /** The URL that loads upon clicking the custom image. */
  link?: string;
  /** The custom image to display. */
  picture?: Picture | null;
  /** The URI of the custom image to use in the background. */
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
