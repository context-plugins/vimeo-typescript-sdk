import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Size = {
  /** The height of the picture in pixels. */
  height: number;
  /**
   * The direct link to the image file. For information about the format of the image file, see our
   * [Working with Thumbnail
   * Uploads](https://developer.vimeo.com/api/upload/thumbnails#returning-the-link-to-a-thumbnail)
   * guide.
   */
  link: string;
  /**
   * The direct link to the image file with a play button overlay. For information about the format
   * of the image file, see our [Working with Thumbnail
   * Uploads](https://developer.vimeo.com/api/upload/thumbnails#returning-the-link-to-a-thumbnail)
   * guide.
   */
  linkWithPlayButton?: string;
  /** The width of the picture in pixels. */
  width: number;
};

export const sizeSchema: Schema<Size> = s.object<Size>({
  height: s.float64(),
  link: s.string(),
  linkWithPlayButton: s.optional(s.string()),
  width: s.float64(),
  _keysMap: {
    linkWithPlayButton: "link_with_play_button",
  },
});
