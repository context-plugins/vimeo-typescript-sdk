import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Trim = {
  options: string[];
  uri: string;
};

export const trimSchema: Schema<Trim> = s.object<Trim>({
  options: s.array(s.string()),
  uri: s.string(),
});
