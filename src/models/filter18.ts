import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Filter18 = {
  Film: "film",
  Series: "series",
} as const;
export type Filter18 = (typeof Filter18)[keyof typeof Filter18] | (string & {});

export const filter18Schema: EnumSchema<Filter18> = s.enumOf<Filter18>(Filter18);
