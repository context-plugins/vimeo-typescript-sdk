import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
