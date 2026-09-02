import { s, type Schema } from "../core/index.js";

export type Groups1 = {
  options: string[];
  total: number;
  uri: string;
};

export const groups1Schema: Schema<Groups1> = s.object<Groups1>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
