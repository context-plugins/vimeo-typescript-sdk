import { s, type EnumSchema } from "../core/index.js";

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
