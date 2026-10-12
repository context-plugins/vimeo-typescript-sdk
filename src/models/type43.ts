import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The data type of the field. Required when creating a new field. **Immutable** after creation.
 *
 * Option descriptions:
 *  * `bool` - Boolean value (`true` or `false`).
 *  * `date` - Calendar date in `YYYY-MM-DD` format.
 *  * `int` - Integer value.
 *  * `multi-select` - One or more values chosen from the field's `values` list.
 *  * `select` - A single value chosen from the field's `values` list.
 *  * `str` - Freeform string value.
 */
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
