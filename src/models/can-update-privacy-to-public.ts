import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Whether a user can update the video privacy to public. */
export type CanUpdatePrivacyToPublic = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const canUpdatePrivacyToPublicSchema: Schema<CanUpdatePrivacyToPublic> =
  s.object<CanUpdatePrivacyToPublic>({
    options: s.array(s.string()),
    uri: s.string(),
  });
