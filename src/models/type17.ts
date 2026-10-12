import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The data type of the metadata field.
 *
 * Option descriptions:
 *  * `bool` - Boolean value.
 *  * `date` - Date value.
 *  * `int` - Integer value.
 *  * `multi-select` - Multi-select from allowed values.
 *  * `select` - Single-select from allowed values.
 *  * `str` - String value.
 */
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
