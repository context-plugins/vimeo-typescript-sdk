import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddPrivacyUser = {
  options?: string[];
  uri?: string;
};

export const addPrivacyUserSchema: Schema<AddPrivacyUser> = s.object<AddPrivacyUser>({
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
