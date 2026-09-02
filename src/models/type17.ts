import { s, type EnumSchema } from "../core/index.js";

export const Type17 = {
  Bool: "bool",
  Date: "date",
  Int: "int",
  MultiSelect: "multi-select",
  Select: "select",
  Str: "str",
} as const;
export type Type17 = (typeof Type17)[keyof typeof Type17] | (string & {});

export const type17Schema: EnumSchema<Type17> = s.enumOf<Type17>(Type17);
