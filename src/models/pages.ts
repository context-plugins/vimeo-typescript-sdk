import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pages = {
  options: string[];
  uri: string;
};

export const pagesSchema: Schema<Pages> = s.object<Pages>({
  options: s.array(s.string()),
  uri: s.string(),
});
