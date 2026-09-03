import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Filter26 = {
  Batch: "batch",
  Default: "default",
  Single: "single",
  Vip: "vip",
} as const;
export type Filter26 = (typeof Filter26)[keyof typeof Filter26] | (string & {});

export const filter26Schema: EnumSchema<Filter26> = s.enumOf<Filter26>(Filter26);
