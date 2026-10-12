import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type43Schema, type Type43 } from "./type43.js";

export type Field = {
  /**
   * The value applied by default when a video doesn't specify one. For `str` fields, the default
   * can be up to 50 characters.
   */
  defaultValue?: string | null;
  /** When `true`, combined with `id`, deletes the field and all values assigned to it. */
  delete?: boolean;
  /** A short explanation of the field's purpose. Up to 1024 characters. */
  description?: string | null;
  /** The ID of an existing field. Omit to create a new field. */
  id?: number;
  /**
   * Whether videos must have a value for this field. Required when creating a new field. Can only
   * be relaxed (`true` to `false`) after creation, not made stricter.
   */
  mandatory?: boolean;
  /** The display name of the field. Required when creating a new field. Up to 255 characters. */
  name?: string;
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
  type?: Type43;
  /** The list of allowed values. Required for `select` and `multi-select` fields. */
  values?: string[] | null;
};

export const fieldSchema: Schema<Field> = s.object<Field>({
  defaultValue: s.optionalNullable(s.string()),
  delete: s.optional(s.boolean()),
  description: s.optionalNullable(s.string()),
  id: s.optional(s.float64()),
  mandatory: s.optional(s.boolean()),
  name: s.optional(s.string()),
  type: s.optional(s.lazy(() => type43Schema)),
  values: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    defaultValue: "default_value",
  },
});
