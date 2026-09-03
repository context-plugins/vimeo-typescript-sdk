import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Codes = {
  options: string[];
  total: number;
  uri: string;
};

export const codesSchema: Schema<Codes> = s.object<Codes>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
