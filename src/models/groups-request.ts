import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GroupsRequest = {
  description?: string;
  name: string;
};

export const groupsRequestSchema: Schema<GroupsRequest> = s.object<GroupsRequest>({
  description: s.optional(s.string()),
  name: s.string(),
});
