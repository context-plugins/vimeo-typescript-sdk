import { s, type Schema } from "../core/index.js";

export type ConnectedApps = {
  options?: string[];
  total?: number;
  uri?: string;
};

export const connectedAppsSchema: Schema<ConnectedApps> = s.object<ConnectedApps>({
  options: s.optional(s.array(s.string())),
  total: s.optional(s.number()),
  uri: s.optional(s.string()),
});
