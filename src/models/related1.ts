import { s, type Schema } from "../core/index.js";

export type Related1 = {
  options: string[];
  uri: string;
};

export const related1Schema: Schema<Related1> = s.object<Related1>({
  options: s.array(s.string()),
  uri: s.string(),
});
