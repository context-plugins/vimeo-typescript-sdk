import { s, type Schema } from "../core/index.js";

export type ViewPrivacy = {
  options: string[];
  uri: string;
};

export const viewPrivacySchema: Schema<ViewPrivacy> = s.object<ViewPrivacy>({
  options: s.array(s.string()),
  uri: s.string(),
});
