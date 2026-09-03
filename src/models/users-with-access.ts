import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersWithAccess = {
  options?: string[];
  total?: number;
  uri?: string;
};

export const usersWithAccessSchema: Schema<UsersWithAccess> = s.object<UsersWithAccess>({
  options: s.optional(s.array(s.string())),
  total: s.optional(s.number()),
  uri: s.optional(s.string()),
});
