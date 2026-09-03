import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Filter8 = {
  NotInFolder: "not_in_folder",
  NotInShowcase: "not_in_showcase",
} as const;
export type Filter8 = (typeof Filter8)[keyof typeof Filter8] | (string & {});

export const filter8Schema: EnumSchema<Filter8> = s.enumOf<Filter8>(Filter8);
