import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
