import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about whether a user has permissions to view the privacy of the showcase. */
export type ViewPrivacy1 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const viewPrivacy1Schema: Schema<ViewPrivacy1> = s.object<ViewPrivacy1>({
  options: s.array(s.string()),
  uri: s.string(),
});
