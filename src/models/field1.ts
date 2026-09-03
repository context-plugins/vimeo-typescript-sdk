import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Field1 = {
  fieldId?: number;
  fieldValue?: string | null;
};

export const field1Schema: Schema<Field1> = s.object<Field1>({
  fieldId: s.optional(s.number()),
  fieldValue: s.optionalNullable(s.string()),
  _keysMap: {
    fieldId: "field_id",
    fieldValue: "field_value",
  },
});
