import { s, type EnumSchema } from "../core/index.js";

export const Filter1 = {
  Featured: "featured",
} as const;
export type Filter1 = (typeof Filter1)[keyof typeof Filter1] | (string & {});

export const filter1Schema: EnumSchema<Filter1> = s.enumOf<Filter1>(Filter1);
