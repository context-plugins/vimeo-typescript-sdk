import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { optionSchema, type Option } from "./option.js";

export type TeamsCustomMetadataOptionsRequest = {
  fieldId: number;
  options: Option[];
};

export const teamsCustomMetadataOptionsRequestSchema: Schema<TeamsCustomMetadataOptionsRequest> =
  s.object<TeamsCustomMetadataOptionsRequest>({
    fieldId: s.number(),
    options: s.array(s.lazy(() => optionSchema)),
    _keysMap: {
      fieldId: "field_id",
    },
  });
