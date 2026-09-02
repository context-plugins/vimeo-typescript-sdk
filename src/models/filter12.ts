import { s, type EnumSchema } from "../core/index.js";

export const Filter12 = {
  Moderated: "moderated",
} as const;
export type Filter12 = (typeof Filter12)[keyof typeof Filter12] | (string & {});

export const filter12Schema: EnumSchema<Filter12> = s.enumOf<Filter12>(Filter12);
