import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomMetadatum = {
  /** Default value for the metadata field. */
  default?: string | null;
  /** Optional description of the metadata field. */
  description?: string | null;
  /** The unique identifier of the metadata field. */
  fieldId: number;
  /** The current value of this metadata field for the video. */
  fieldValue?: string | null;
  /** Whether this metadata field is required. */
  mandatory: boolean;
  /** The name of the metadata field. */
  name: string;
  /** The data type of the metadata field. */
  type: string;
  /** Allowed values for select/multi-select types. */
  values?: string[] | null;
};

export const customMetadatumSchema: Schema<CustomMetadatum> = s.object<CustomMetadatum>({
  default: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  fieldId: s.float64(),
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
