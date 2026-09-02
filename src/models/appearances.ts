import { s, type Schema } from "../core/index.js";

export type Appearances = {
  options: string[];
  total: number;
  uri: string;
};

export const appearancesSchema: Schema<Appearances> = s.object<Appearances>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
