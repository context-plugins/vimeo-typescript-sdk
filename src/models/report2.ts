import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Report2 = {
  options: string[];
  reason: string[];
  uri: string;
};

export const report2Schema: Schema<Report2> = s.object<Report2>({
  options: s.array(s.string()),
  reason: s.array(s.string()),
  uri: s.string(),
});
