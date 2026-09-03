import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Filter27 = {
  Viewable: "viewable",
} as const;
export type Filter27 = (typeof Filter27)[keyof typeof Filter27] | (string & {});

export const filter27Schema: EnumSchema<Filter27> = s.enumOf<Filter27>(Filter27);
