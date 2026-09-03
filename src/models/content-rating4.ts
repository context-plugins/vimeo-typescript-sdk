import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
