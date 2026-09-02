import { s, type Schema } from "../core/index.js";

export type Seasons = {
  options: string[];
  total: number;
  uri: string;
};

export const seasonsSchema: Schema<Seasons> = s.object<Seasons>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
