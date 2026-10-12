import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pictureSchema, type Picture } from "./picture.js";

/** The share options that appear after the video ends. */
export type Share = {
  /** The image to display behind the share options. */
  picture?: Picture | null;
  /** The URI of the background image that appears behind the share options. */
  pictureUri?: string | null;
};

export const shareSchema: Schema<Share> = s.object<Share>({
  picture: s.optionalNullable(s.lazy(() => pictureSchema)),
  pictureUri: s.optionalNullable(s.string()),
  _keysMap: {
    pictureUri: "picture_uri",
  },
});
