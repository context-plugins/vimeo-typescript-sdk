import { s, type Schema } from "../core/index.js";

export type HasRestrictedPrivacyOptions = {
  options: string[];
  uri: string;
};

export const hasRestrictedPrivacyOptionsSchema: Schema<HasRestrictedPrivacyOptions> =
  s.object<HasRestrictedPrivacyOptions>({
    options: s.array(s.string()),
    uri: s.string(),
  });
