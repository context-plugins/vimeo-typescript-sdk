import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Option = {
  /** The replacement value. Required for rename and add; omit (or set to `null`) when deleting. */
  newValue?: string | null;
  /**
   * The existing value the operation targets. Required for rename and delete; omit (or set to
   * `null`) when adding a new value.
   */
  oldValue?: string | null;
};

export const optionSchema: Schema<Option> = s.object<Option>({
  newValue: s.optionalNullable(s.string()),
  oldValue: s.optionalNullable(s.string()),
  _keysMap: {
    newValue: "new_value",
    oldValue: "old_value",
  },
});
