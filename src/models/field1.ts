import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Field1 = {
  /** The ID of the custom metadata field, as returned by `GET /teams/{user_id}/custom_metadata`. */
  fieldId?: number;
  /**
   * The value to assign to the field. Send `null` to clear an existing value. For `str` fields, the
   * value can be up to 50 characters; other types have their own format constraints (see the
   * description above).
   */
  fieldValue?: string | null;
};

export const field1Schema: Schema<Field1> = s.object<Field1>({
  fieldId: s.optional(s.float64()),
  fieldValue: s.optionalNullable(s.string()),
  _keysMap: {
    fieldId: "field_id",
    fieldValue: "field_value",
  },
});
