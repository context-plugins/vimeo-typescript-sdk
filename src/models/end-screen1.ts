import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { imageSchema, type Image } from "./image.js";
import { linkSchema, type Link } from "./link.js";
import { shareSchema, type Share } from "./share.js";
import { textSchema, type Text } from "./text.js";
import { type25Schema, type Type25 } from "./type25.js";
import { videos15Schema, type Videos15 } from "./videos15.js";

/** A representation of the end screen settings. */
export type EndScreen1 = {
  /** The custom image that appears after the video ends. */
  image?: Image;
  /** The links that appear after the video ends. */
  link?: Link;
  /** The share options that appear after the video ends. */
  share?: Share;
  /** The text block that appears after the video ends. */
  text?: Text;
  /**
   * The elements that appear after the video ends.
   *
   * Option descriptions:
   *  * `beginning` - The end screen is a thumbnail.
   *  * `custom` - The end screen is custom.
   *  * `email` - The end screen is an email form.
   *  * `image` - The end screen is an image.
   *  * `link` - The end screen is a link.
   *  * `loop` - The end screen is a loop.
   *  * `nothing` - There is no end screen.
   *  * `share` - The end screen is a share button.
   *  * `text` - The end screen is text.
   *  * `threevideos` - The end screen is three video suggestions.
   *  * `videos` - The end screen is video suggestions.
   */
  type: Type25;
  /** The additional videos that are offered after the main video ends. */
  videos?: Videos15;
};

export const endScreen1Schema: Schema<EndScreen1> = s.object<EndScreen1>({
  image: s.optional(s.lazy(() => imageSchema)),
  link: s.optional(s.lazy(() => linkSchema)),
  share: s.optional(s.lazy(() => shareSchema)),
  text: s.optional(s.lazy(() => textSchema)),
  type: type25Schema,
  videos: s.optional(s.lazy(() => videos15Schema)),
});
