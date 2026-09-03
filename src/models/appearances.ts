import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
