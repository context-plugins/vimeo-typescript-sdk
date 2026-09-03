import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort7 = {
  Alphabetical: "alphabetical",
  Date: "date",
  Default: "default",
  Followers: "followers",
  Relevant: "relevant",
  Videos: "videos",
} as const;
export type Sort7 = (typeof Sort7)[keyof typeof Sort7] | (string & {});

export const sort7Schema: EnumSchema<Sort7> = s.enumOf<Sort7>(Sort7);
