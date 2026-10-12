import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The video's granular content rating.
 *
 * Option descriptions:
 *  * `advertisement` - The video contains advertisements.
 *  * `drugs` - The video contains drug or alcohol use.
 *  * `language` - The video contains profanity or sexually suggestive content.
 *  * `nudity` - The video contains nudity.
 *  * `safe` - The video is safe for all audiences.
 *  * `unrated` - The video hasn't been rated.
 *  * `violence` - The video contains violence.
 */
export const ContentRating4 = {
  Advertisement: "advertisement",
  Drugs: "drugs",
  Language: "language",
  Nudity: "nudity",
  Safe: "safe",
  Unrated: "unrated",
  Violence: "violence",
} as const;
export type ContentRating4 = (typeof ContentRating4)[keyof typeof ContentRating4] | (string & {});

export const contentRating4Schema: EnumSchema<ContentRating4> = s.enumOf<ContentRating4>(ContentRating4);
