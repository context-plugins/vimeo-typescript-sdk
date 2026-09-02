import { s, type Schema } from "../core/index.js";

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
