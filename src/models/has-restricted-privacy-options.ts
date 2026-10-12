import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about whether the video has restricted privacy options. */
export type HasRestrictedPrivacyOptions = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const hasRestrictedPrivacyOptionsSchema: Schema<HasRestrictedPrivacyOptions> =
  s.object<HasRestrictedPrivacyOptions>({
    options: s.array(s.string()),
    uri: s.string(),
  });
