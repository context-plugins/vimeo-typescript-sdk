import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CanUpdatePrivacyToPublic = {
  options: string[];
  uri: string;
};

export const canUpdatePrivacyToPublicSchema: Schema<CanUpdatePrivacyToPublic> =
  s.object<CanUpdatePrivacyToPublic>({
    options: s.array(s.string()),
    uri: s.string(),
  });
