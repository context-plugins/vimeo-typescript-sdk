import { s, type Schema } from "../core/index.js";

export type Videos9 = {
  options: string[];
  total: number;
  uri: string;
};

export const videos9Schema: Schema<Videos9> = s.object<Videos9>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
