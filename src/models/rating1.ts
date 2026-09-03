import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Rating1 = {
  Drugs: "drugs",
  Language: "language",
  Nudity: "nudity",
  Safe: "safe",
  Unrated: "unrated",
  Violence: "violence",
} as const;
export type Rating1 = (typeof Rating1)[keyof typeof Rating1] | (string & {});

export const rating1Schema: EnumSchema<Rating1> = s.enumOf<Rating1>(Rating1);
