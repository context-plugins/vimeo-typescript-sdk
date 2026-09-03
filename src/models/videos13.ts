import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Videos13 = {
  options: string[];
  total: number;
  uri: string;
};

export const videos13Schema: Schema<Videos13> = s.object<Videos13>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
