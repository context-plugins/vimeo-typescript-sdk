import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Comments3 = {
  options: string[];
  total: number;
  uri: string;
};

export const comments3Schema: Schema<Comments3> = s.object<Comments3>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
