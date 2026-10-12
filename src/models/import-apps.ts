import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the authenticated user's auto upload apps. */
export type ImportApps = {
  /** An array of HTTP methods permitted on this URI. */
  options?: string[];
  /** The total number of auto upload apps on this connection. */
  total?: number;
  /** The API URI that resolves to the connection data. */
  uri?: string;
};

export const importAppsSchema: Schema<ImportApps> = s.object<ImportApps>({
  options: s.optional(s.array(s.string())),
  total: s.optional(s.float64()),
  uri: s.optional(s.string()),
});
