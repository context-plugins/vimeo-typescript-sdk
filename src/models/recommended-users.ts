import { s, type Schema } from "../core/index.js";

export type RecommendedUsers = {
  options?: string[];
  total?: number;
  uri?: string;
};

export const recommendedUsersSchema: Schema<RecommendedUsers> = s.object<RecommendedUsers>({
  options: s.optional(s.array(s.string())),
  total: s.optional(s.number()),
  uri: s.optional(s.string()),
});
