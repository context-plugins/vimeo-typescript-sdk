import { s, type Schema } from "../core/index.js";

export type Comments1 = {
  options: string[];
  total: number;
  uri: string;
};

export const comments1Schema: Schema<Comments1> = s.object<Comments1>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
