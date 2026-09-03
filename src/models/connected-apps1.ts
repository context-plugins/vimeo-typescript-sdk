import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectedApps1 = {
  allScopes?: Record<string, unknown>;
  isConnected?: boolean;
  neededScopes?: Record<string, unknown>;
  options?: string[];
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
