import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The end screen type.
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
export const Type38 = {
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
export type Type38 = (typeof Type38)[keyof typeof Type38] | (string & {});

export const type38Schema: EnumSchema<Type38> = s.enumOf<Type38>(Type38);
