import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The authenticated user's content filters.
 *
 * Option descriptions:
 *  * `drugs` - The content contains drug or alcohol use.
 *  * `language` - The content contains profanity or sexually suggestive language.
 *  * `nudity` - The content contains nudity.
 *  * `safe` - The content is suitable for all audiences.
 *  * `unrated` - The content hasn't been rated.
 *  * `violence` - The content contains violence or is graphic.
 */
export const ContentFilter = {
  Drugs: "drugs",
  Language: "language",
  Nudity: "nudity",
  Safe: "safe",
  Unrated: "unrated",
  Violence: "violence",
} as const;
export type ContentFilter = (typeof ContentFilter)[keyof typeof ContentFilter] | (string & {});

export const contentFilterSchema: EnumSchema<ContentFilter> = s.enumOf<ContentFilter>(ContentFilter);
