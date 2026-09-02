import { s, type Schema } from "../core/index.js";

export type ImportApps = {
  options?: string[];
  total?: number;
  uri?: string;
};

export const importAppsSchema: Schema<ImportApps> = s.object<ImportApps>({
  options: s.optional(s.array(s.string())),
  total: s.optional(s.number()),
  uri: s.optional(s.string()),
});
