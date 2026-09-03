import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Report = {
  options: string[];
  reason: string[];
  uri: string;
};

export const reportSchema: Schema<Report> = s.object<Report>({
  options: s.array(s.string()),
  reason: s.array(s.string()),
  uri: s.string(),
});
