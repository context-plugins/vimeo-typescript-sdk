import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fieldSchema, type Field } from "./field.js";

export type TeamsCustomMetadataRequest = {
  fields?: Field[];
};

export const teamsCustomMetadataRequestSchema: Schema<TeamsCustomMetadataRequest> =
  s.object<TeamsCustomMetadataRequest>({
    fields: s.optional(s.array(s.lazy(() => fieldSchema))),
  });
