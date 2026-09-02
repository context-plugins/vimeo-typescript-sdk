import { s, type EnumSchema } from "../core/index.js";

export const Sort13 = {
  Alphabetical: "alphabetical",
  Date: "date",
  Followers: "followers",
  Relevant: "relevant",
  Videos: "videos",
} as const;
export type Sort13 = (typeof Sort13)[keyof typeof Sort13] | (string & {});

export const sort13Schema: EnumSchema<Sort13> = s.enumOf<Sort13>(Sort13);
