import { s, type EnumSchema } from "../core/index.js";

export const Type43 = {
  Bool: "bool",
  Date: "date",
  Int: "int",
  MultiSelect: "multi-select",
  Select: "select",
  Str: "str",
} as const;
export type Type43 = (typeof Type43)[keyof typeof Type43] | (string & {});

export const type43Schema: EnumSchema<Type43> = s.enumOf<Type43>(Type43);
