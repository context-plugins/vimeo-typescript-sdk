import { s, type Schema } from "../core/index.js";

export type CanUpdatePrivacyToPublic = {
  options: string[];
  uri: string;
};

export const canUpdatePrivacyToPublicSchema: Schema<CanUpdatePrivacyToPublic> =
  s.object<CanUpdatePrivacyToPublic>({
    options: s.array(s.string()),
    uri: s.string(),
  });
