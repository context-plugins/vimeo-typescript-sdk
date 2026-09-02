import { s, type EnumSchema } from "../core/index.js";

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
