import { s, type Schema } from "../core/index.js";
import { fieldSchema, type Field } from "./field.js";

export type TeamsCustomMetadataRequest = {
  fields?: Field[];
};

export const teamsCustomMetadataRequestSchema: Schema<TeamsCustomMetadataRequest> =
  s.object<TeamsCustomMetadataRequest>({
    fields: s.optional(s.array(s.lazy(() => fieldSchema))),
  });
