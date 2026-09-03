import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Users1 = {
  options: string[];
  total: number;
  uri: string;
};

export const users1Schema: Schema<Users1> = s.object<Users1>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
