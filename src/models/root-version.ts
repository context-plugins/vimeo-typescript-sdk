import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RootVersion = {
  options: string[];
  uri: string;
};

export const rootVersionSchema: Schema<RootVersion> = s.object<RootVersion>({
  options: s.array(s.string()),
  uri: s.string(),
});
