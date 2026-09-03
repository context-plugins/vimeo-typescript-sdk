import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort4 = {
  Alphabetical: "alphabetical",
  Date: "date",
  Followers: "followers",
  Videos: "videos",
} as const;
export type Sort4 = (typeof Sort4)[keyof typeof Sort4] | (string & {});

export const sort4Schema: EnumSchema<Sort4> = s.enumOf<Sort4>(Sort4);
