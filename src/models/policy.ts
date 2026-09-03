import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Policy = {
  options: string[];
  title: string;
  uri: string;
};

export const policySchema: Schema<Policy> = s.object<Policy>({
  options: s.array(s.string()),
  title: s.string(),
  uri: s.string(),
});
