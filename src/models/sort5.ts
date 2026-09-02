import { s, type EnumSchema } from "../core/index.js";

export const Sort5 = {
  Alphabetical: "alphabetical",
  Date: "date",
  Members: "members",
  Videos: "videos",
} as const;
export type Sort5 = (typeof Sort5)[keyof typeof Sort5] | (string & {});

export const sort5Schema: EnumSchema<Sort5> = s.enumOf<Sort5>(Sort5);
