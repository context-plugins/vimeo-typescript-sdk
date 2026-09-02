import { s, type EnumSchema } from "../core/index.js";

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
