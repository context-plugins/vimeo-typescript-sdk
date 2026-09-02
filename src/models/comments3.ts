import { s, type Schema } from "../core/index.js";

export type Comments3 = {
  options: string[];
  total: number;
  uri: string;
};

export const comments3Schema: Schema<Comments3> = s.object<Comments3>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
