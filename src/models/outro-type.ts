import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the video outro.
 *
 * Option descriptions:
 *  * `beginning` - The outro is a thumbnail.
 *  * `custom` - The outro is custom.
 *  * `email` - The outro is an email form.
 *  * `image` - The outro is an image.
 *  * `link` - The outro is a link.
 *  * `loop` - The outro is a loop.
 *  * `nothing` - There is no outro.
 *  * `share` - The outro is a share button.
 *  * `text` - The outro is text.
 *  * `threevideos` - The outro is three video suggestions.
 *  * `videos` - The outro is video suggestions.
 */
export const OutroType = {
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
export type OutroType = (typeof OutroType)[keyof typeof OutroType] | (string & {});

export const outroTypeSchema: EnumSchema<OutroType> = s.enumOf<OutroType>(OutroType);
