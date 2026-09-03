import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Filter12 = {
  Moderated: "moderated",
} as const;
export type Filter12 = (typeof Filter12)[keyof typeof Filter12] | (string & {});

export const filter12Schema: EnumSchema<Filter12> = s.enumOf<Filter12>(Filter12);
