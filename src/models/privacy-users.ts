import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PrivacyUsers = {
  options: string[];
  total: number;
  uri: string;
};

export const privacyUsersSchema: Schema<PrivacyUsers> = s.object<PrivacyUsers>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
