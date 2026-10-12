import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The content rating of the video, given either as a comma-separated list or as a JSON array,
 * depending on the request format.
 *
 * Option descriptions:
 *  * `drugs` - The video contains drug or alcohol use.
 *  * `language` - The video contains profanity or sexually suggestive content.
 *  * `nudity` - The video contains nudity.
 *  * `safe` - The video is suitable for all audiences.
 *  * `unrated` - The video hasn't been rated.
 *  * `violence` - The video contains violent or graphic content.
 */
export const ContentRating1 = {
  Drugs: "drugs",
  Language: "language",
  Nudity: "nudity",
  Safe: "safe",
  Unrated: "unrated",
  Violence: "violence",
} as const;
export type ContentRating1 = (typeof ContentRating1)[keyof typeof ContentRating1] | (string & {});

export const contentRating1Schema: EnumSchema<ContentRating1> = s.enumOf<ContentRating1>(ContentRating1);
