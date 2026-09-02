import { s, type Schema } from "../core/index.js";

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
