import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Clip = {
  options: string[];
  uri: string;
};

export const clipSchema: Schema<Clip> = s.object<Clip>({
  options: s.array(s.string()),
  uri: s.string(),
});
