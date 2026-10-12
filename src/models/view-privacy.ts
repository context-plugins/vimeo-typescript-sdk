import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about whether a user has permissions to view the privacy of the video. */
export type ViewPrivacy = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const viewPrivacySchema: Schema<ViewPrivacy> = s.object<ViewPrivacy>({
  options: s.array(s.string()),
  uri: s.string(),
});
