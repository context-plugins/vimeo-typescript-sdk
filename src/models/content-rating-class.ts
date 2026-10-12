import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The video's high-level content rating class.
 *
 * Option descriptions:
 *  * `explicit` - The video contains one or more explicit content rating types.
 *  * `safe` - The video contains no explicit content rating types.
 *  * `unrated` - The video doesn't belong to a content rating class.
 */
export const ContentRatingClass = {
  Explicit: "explicit",
  Safe: "safe",
  Unrated: "unrated",
} as const;
export type ContentRatingClass = (typeof ContentRatingClass)[keyof typeof ContentRatingClass] | (string & {});

export const contentRatingClassSchema: EnumSchema<ContentRatingClass> =
  s.enumOf<ContentRatingClass>(ContentRatingClass);
