import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort24 = {
  Alphabetical: "alphabetical",
  Date: "date",
  Name: "name",
} as const;
export type Sort24 = (typeof Sort24)[keyof typeof Sort24] | (string & {});

export const sort24Schema: EnumSchema<Sort24> = s.enumOf<Sort24>(Sort24);
