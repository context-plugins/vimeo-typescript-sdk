import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Rating = {
  Drugs: "drugs",
  Language: "language",
  Nudity: "nudity",
  Safe: "safe",
  Unrated: "unrated",
  Violence: "violence",
} as const;
export type Rating = (typeof Rating)[keyof typeof Rating] | (string & {});

export const ratingSchema: EnumSchema<Rating> = s.enumOf<Rating>(Rating);
