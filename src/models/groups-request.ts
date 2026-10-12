import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GroupsRequest = {
  /** The description of the group. */
  description?: string;
  /** The name of the group. */
  name: string;
};

export const groupsRequestSchema: Schema<GroupsRequest> = s.object<GroupsRequest>({
  description: s.optional(s.string()),
  name: s.string(),
});
