import { s, type EnumSchema } from "../core/index.js";

export const Filter24 = {
  Country: "country",
  MyRegion: "my_region",
} as const;
export type Filter24 = (typeof Filter24)[keyof typeof Filter24] | (string & {});

export const filter24Schema: EnumSchema<Filter24> = s.enumOf<Filter24>(Filter24);
