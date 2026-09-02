import { s, type EnumSchema } from "../core/index.js";

export const Filter46 = {
  Related: "related",
} as const;
export type Filter46 = (typeof Filter46)[keyof typeof Filter46] | (string & {});

export const filter46Schema: EnumSchema<Filter46> = s.enumOf<Filter46>(Filter46);
