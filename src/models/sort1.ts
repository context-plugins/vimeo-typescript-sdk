import { s, type EnumSchema } from "../core/index.js";

export const Sort1 = {
  Alphabetical: "alphabetical",
  Clips: "clips",
  Modified: "modified",
  Recent: "recent",
} as const;
export type Sort1 = (typeof Sort1)[keyof typeof Sort1] | (string & {});

export const sort1Schema: EnumSchema<Sort1> = s.enumOf<Sort1>(Sort1);
