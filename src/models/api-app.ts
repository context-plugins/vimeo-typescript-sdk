import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiApp = {
  /** The app's capabilities list. */
  capabilities: Record<string, unknown>;
  /** The name of the API app. */
  name: string;
  /** The canonical URI of the API app. */
  uri: string;
};

export const apiAppSchema: Schema<ApiApp> = s.object<ApiApp>({
  capabilities: s.record(s.string(), s.unknown()),
  name: s.string(),
  uri: s.string(),
});
