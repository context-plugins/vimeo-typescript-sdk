import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An array of the user's default content ratings.
 *
 * Option descriptions:
 *  * `drugs` - The video contains drug or alcohol use.
 *  * `language` - The video contains profanity or sexually suggestive content.
 *  * `nudity` - The video contains nudity.
 *  * `safe` - The video is suitable for all audiences.
 *  * `unrated` - The video hasn't been rated.
 *  * `violence` - The video contains violent or graphic content.
 */
export const Rating1 = {
  Drugs: "drugs",
  Language: "language",
  Nudity: "nudity",
  Safe: "safe",
  Unrated: "unrated",
  Violence: "violence",
} as const;
export type Rating1 = (typeof Rating1)[keyof typeof Rating1] | (string & {});

export const rating1Schema: EnumSchema<Rating1> = s.enumOf<Rating1>(Rating1);
