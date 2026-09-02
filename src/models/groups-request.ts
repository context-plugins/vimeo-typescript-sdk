import { s, type Schema } from "../core/index.js";

export type GroupsRequest = {
  description?: string;
  name: string;
};

export const groupsRequestSchema: Schema<GroupsRequest> = s.object<GroupsRequest>({
  description: s.optional(s.string()),
  name: s.string(),
});
