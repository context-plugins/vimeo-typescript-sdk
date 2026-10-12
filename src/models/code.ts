import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The reason for the content rating.
 *
 * Option descriptions:
 *  * `advertisement` - The content contains an advertisement.
 *  * `drugs` - The content contains drug or alcohol use.
 *  * `language` - The content contains profanity or sexually suggestive language.
 *  * `nudity` - The content contains nudity.
 *  * `safe` - The content is suitable for all audiences.
 *  * `unrated` - The content hasn't been rated.
 *  * `violence` - The content contains violence or is graphic.
 */
export const Code = {
  Advertisement: "advertisement",
  Drugs: "drugs",
  Language: "language",
  Nudity: "nudity",
  Safe: "safe",
  Unrated: "unrated",
  Violence: "violence",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);
