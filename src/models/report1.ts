import { s, type Schema } from "../core/index.js";

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
