import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

export type ContentRating = {
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
  code: Code;
  /** The name of the content rating. */
  name: string;
  /** The canonical relative URI of the content rating. */
  uri: string | null;
};

export const contentRatingSchema: Schema<ContentRating> = s.object<ContentRating>({
  code: codeSchema,
  name: s.string(),
  uri: s.nullable(s.string()),
});
