import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { optionSchema, type Option } from "./option.js";

export type TeamsCustomMetadataOptionsRequest = {
  /** The ID of the `select` or `multi-select` custom metadata field to modify. */
  fieldId: number;
  /** The list of changes to apply to the field's allowed values. */
  options: Option[];
};

export const teamsCustomMetadataOptionsRequestSchema: Schema<TeamsCustomMetadataOptionsRequest> =
  s.object<TeamsCustomMetadataOptionsRequest>({
    fieldId: s.float64(),
    options: s.array(s.lazy(() => optionSchema)),
    _keysMap: {
      fieldId: "field_id",
    },
  });
