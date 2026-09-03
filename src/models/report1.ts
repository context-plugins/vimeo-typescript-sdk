import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Report1 = {
  options: string[];
  reason: string[];
  uri: string;
};

export const report1Schema: Schema<Report1> = s.object<Report1>({
  options: s.array(s.string()),
  reason: s.array(s.string()),
  uri: s.string(),
});
