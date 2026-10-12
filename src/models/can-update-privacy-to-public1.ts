import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Whether the user can update the showcase privacy to public. */
export type CanUpdatePrivacyToPublic1 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const canUpdatePrivacyToPublic1Schema: Schema<CanUpdatePrivacyToPublic1> =
  s.object<CanUpdatePrivacyToPublic1>({
    options: s.array(s.string()),
    uri: s.string(),
  });
