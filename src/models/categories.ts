import { s, type Schema } from "../core/index.js";

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
