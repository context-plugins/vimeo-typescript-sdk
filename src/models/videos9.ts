import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
