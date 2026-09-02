import { s, type Schema } from "../core/index.js";

export type Watchlater = {
  options: string[];
  total: number;
  uri: string;
};

export const watchlaterSchema: Schema<Watchlater> = s.object<Watchlater>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
