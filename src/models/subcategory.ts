import { s, type Schema } from "../core/index.js";

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
