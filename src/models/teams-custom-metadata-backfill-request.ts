import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamsCustomMetadataBackfillRequest = {
  /** The ID of the custom metadata field to populate. */
  fieldId: number;
  /**
   * The value to assign to the field. Must match the field's data type. For `str` fields, the value
   * can be up to 50 characters.
   */
  fieldValue: string;
  /**
   * Whether to overwrite values that are already set. When `false` (the default), only videos that
   * don't yet have a value are updated.
   */
  overrideExisting?: boolean;
};

export const teamsCustomMetadataBackfillRequestSchema: Schema<TeamsCustomMetadataBackfillRequest> =
  s.object<TeamsCustomMetadataBackfillRequest>({
    fieldId: s.float64(),
    fieldValue: s.string(),
    overrideExisting: s.optional(s.boolean()),
    _keysMap: {
      fieldId: "field_id",
      fieldValue: "field_value",
      overrideExisting: "override_existing",
    },
  });
