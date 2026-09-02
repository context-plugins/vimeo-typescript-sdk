import { s, type Schema } from "../core/index.js";

export type Portfolios = {
  options: string[];
  total: number;
  uri: string;
};

export const portfoliosSchema: Schema<Portfolios> = s.object<Portfolios>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
