import { s, type Schema } from "../core/index.js";

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
