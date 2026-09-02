import { s, type EnumSchema } from "../core/index.js";

export const Sort8 = {
  Alphabetical: "alphabetical",
  Date: "date",
} as const;
export type Sort8 = (typeof Sort8)[keyof typeof Sort8] | (string & {});

export const sort8Schema: EnumSchema<Sort8> = s.enumOf<Sort8>(Sort8);
