import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Edit3 = {
  options: string[];
  uri: string;
};

export const edit3Schema: Schema<Edit3> = s.object<Edit3>({
  options: s.array(s.string()),
  uri: s.string(),
});
