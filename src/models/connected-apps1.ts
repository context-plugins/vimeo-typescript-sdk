import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectedApps1 = {
  /**
   * The list of all the scopes on the connected app that are needed for a particular Vimeo feature.
   */
  allScopes?: Record<string, unknown>;
  /** Whether the authenticated user is connected to the connected app. */
  isConnected?: boolean;
  /**
   * The list of the remaining scopes on the connected app that the authenticated user needs for a
   * particular Vimeo feature.
   */
  neededScopes?: Record<string, unknown>;
  /** An array of HTTP methods permitted on this URI. */
  options?: string[];
  /** The URI of the connected app. */
  uri?: string;
};

export const connectedApps1Schema: Schema<ConnectedApps1> = s.object<ConnectedApps1>({
  allScopes: s.optional(s.record(s.string(), s.unknown())),
  isConnected: s.optional(s.boolean()),
  neededScopes: s.optional(s.record(s.string(), s.unknown())),
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
  _keysMap: {
    allScopes: "all_scopes",
    isConnected: "is_connected",
    neededScopes: "needed_scopes",
  },
});
