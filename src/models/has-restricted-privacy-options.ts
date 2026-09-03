import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HasRestrictedPrivacyOptions = {
  options: string[];
  uri: string;
};

export const hasRestrictedPrivacyOptionsSchema: Schema<HasRestrictedPrivacyOptions> =
  s.object<HasRestrictedPrivacyOptions>({
    options: s.array(s.string()),
    uri: s.string(),
  });
