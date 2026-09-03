import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ContentRatingClass = {
  Explicit: "explicit",
  Safe: "safe",
  Unrated: "unrated",
} as const;
export type ContentRatingClass = (typeof ContentRatingClass)[keyof typeof ContentRatingClass] | (string & {});

export const contentRatingClassSchema: EnumSchema<ContentRatingClass> =
  s.enumOf<ContentRatingClass>(ContentRatingClass);
