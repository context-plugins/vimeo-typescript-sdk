import { s, type Schema } from "../core/index.js";

export type AddPrivacyUser = {
  options?: string[];
  uri?: string;
};

export const addPrivacyUserSchema: Schema<AddPrivacyUser> = s.object<AddPrivacyUser>({
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
