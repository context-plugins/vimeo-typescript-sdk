import { s, type EnumSchema } from "../core/index.js";

export const ContentRatingClass = {
  Explicit: "explicit",
  Safe: "safe",
  Unrated: "unrated",
} as const;
export type ContentRatingClass = (typeof ContentRatingClass)[keyof typeof ContentRatingClass] | (string & {});

export const contentRatingClassSchema: EnumSchema<ContentRatingClass> =
  s.enumOf<ContentRatingClass>(ContentRatingClass);
