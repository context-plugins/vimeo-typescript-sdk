import { s, type Schema } from "../core/index.js";

export type CustomMetadataValues = {
  default?: string | null;
  description?: string | null;
  fieldId: number;
  fieldValue?: string | null;
  mandatory: boolean;
  name: string;
  type: string;
  values?: string[] | null;
};

export const customMetadataValuesSchema: Schema<CustomMetadataValues> = s.object<CustomMetadataValues>({
  default: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  fieldId: s.number(),
  fieldValue: s.optionalNullable(s.string()),
  mandatory: s.boolean(),
  name: s.string(),
  type: s.string(),
  values: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    fieldId: "field_id",
    fieldValue: "field_value",
  },
});
