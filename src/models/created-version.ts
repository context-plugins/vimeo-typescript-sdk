import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreatedVersion = {
  options: string[];
  uri: string;
};

export const createdVersionSchema: Schema<CreatedVersion> = s.object<CreatedVersion>({
  options: s.array(s.string()),
  uri: s.string(),
});
