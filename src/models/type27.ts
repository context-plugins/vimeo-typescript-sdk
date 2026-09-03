import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type27 = {
  All: "all",
  OneTime: "one_time",
  Recurring: "recurring",
} as const;
export type Type27 = (typeof Type27)[keyof typeof Type27] | (string & {});

export const type27Schema: EnumSchema<Type27> = s.enumOf<Type27>(Type27);
