import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CanUpdatePrivacyToPublic1 = {
  options: string[];
  uri: string;
};

export const canUpdatePrivacyToPublic1Schema: Schema<CanUpdatePrivacyToPublic1> =
  s.object<CanUpdatePrivacyToPublic1>({
    options: s.array(s.string()),
    uri: s.string(),
  });
