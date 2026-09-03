import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Subcategory = {
  link: string;
  name: string;
  uri: string;
};

export const subcategorySchema: Schema<Subcategory> = s.object<Subcategory>({
  link: s.string(),
  name: s.string(),
  uri: s.string(),
});
