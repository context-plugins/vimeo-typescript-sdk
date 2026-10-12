import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type17Schema, type Type17 } from "./type17.js";

export type CustomMetadataSettings = {
  /** Default value for the metadata field. */
  default?: string | null;
  /** Optional description of the metadata field. */
  description?: string | null;
  /** The unique identifier of the metadata field. */
  id: number;
  /** Whether this metadata field is required. */
  mandatory: boolean;
  /** The name of the metadata field. */
  name: string;
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
  type: Type17;
  /** Allowed values for select/multi-select types. */
  values?: string[] | null;
};

export const customMetadataSettingsSchema: Schema<CustomMetadataSettings> = s.object<CustomMetadataSettings>({
  default: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  id: s.float64(),
  mandatory: s.boolean(),
  name: s.string(),
  type: type17Schema,
  values: s.optionalNullable(s.array(s.string())),
});
