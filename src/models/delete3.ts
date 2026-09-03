import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Delete3 = {
  options: string[];
  uri: string;
};

export const delete3Schema: Schema<Delete3> = s.object<Delete3>({
  options: s.array(s.string()),
  uri: s.string(),
});
