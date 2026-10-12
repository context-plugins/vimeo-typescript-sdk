import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The event's granular content ratings.
 *
 * Option descriptions:
 *  * `advertisement` - The event contains advertisements.
 *  * `drugs` - The event contains drug or alcohol use.
 *  * `language` - The event contains profanity or sexually suggestive content.
 *  * `nudity` - The event contains nudity.
 *  * `safe` - The event is safe for all audiences.
 *  * `unrated` - The event hasn't been rated.
 *  * `violence` - The event contains violence.
 */
export const ContentRating2 = {
  Advertisement: "advertisement",
  Drugs: "drugs",
  Language: "language",
  Nudity: "nudity",
  Safe: "safe",
  Unrated: "unrated",
  Violence: "violence",
} as const;
export type ContentRating2 = (typeof ContentRating2)[keyof typeof ContentRating2] | (string & {});

export const contentRating2Schema: EnumSchema<ContentRating2> = s.enumOf<ContentRating2>(ContentRating2);
