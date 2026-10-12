import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const Type25 = {
  Beginning: "beginning",
  Custom: "custom",
  Email: "email",
  Image: "image",
  Link: "link",
  Loop: "loop",
  Nothing: "nothing",
  Share: "share",
  Text: "text",
  Threevideos: "threevideos",
  Videos: "videos",
} as const;
export type Type25 = (typeof Type25)[keyof typeof Type25] | (string & {});

export const type25Schema: EnumSchema<Type25> = s.enumOf<Type25>(Type25);
