import { s, type Schema } from "../core/index.js";

export type TeamsCustomMetadataBackfillRequest = {
  fieldId: number;
  fieldValue: string;
  overrideExisting?: boolean;
};

export const teamsCustomMetadataBackfillRequestSchema: Schema<TeamsCustomMetadataBackfillRequest> =
  s.object<TeamsCustomMetadataBackfillRequest>({
    fieldId: s.number(),
    fieldValue: s.string(),
    overrideExisting: s.optional(s.boolean()),
    _keysMap: {
      fieldId: "field_id",
      fieldValue: "field_value",
      overrideExisting: "override_existing",
    },
  });
