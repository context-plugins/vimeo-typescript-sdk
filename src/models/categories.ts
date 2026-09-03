import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Categories = {
  options: string[];
  total: number;
  uri: string;
};

export const categoriesSchema: Schema<Categories> = s.object<Categories>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
