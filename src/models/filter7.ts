import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Filter7 = {
  Audiotracks: "audiotracks",
  Texttracks: "texttracks",
} as const;
export type Filter7 = (typeof Filter7)[keyof typeof Filter7] | (string & {});

export const filter7Schema: EnumSchema<Filter7> = s.enumOf<Filter7>(Filter7);
