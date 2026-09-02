import { s, type Schema } from "../core/index.js";

export type Pictures1 = {
  options: string[];
  total: number;
  uri: string;
};

export const pictures1Schema: Schema<Pictures1> = s.object<Pictures1>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
