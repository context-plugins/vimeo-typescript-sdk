import { s, type Schema } from "../core/index.js";

export type ApiApp = {
  capabilities: Record<string, unknown>;
  name: string;
  uri: string;
};

export const apiAppSchema: Schema<ApiApp> = s.object<ApiApp>({
  capabilities: s.record(s.string(), s.unknown()),
  name: s.string(),
  uri: s.string(),
});
