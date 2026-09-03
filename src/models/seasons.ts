import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
