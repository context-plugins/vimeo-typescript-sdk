import { s, type Schema } from "../core/index.js";

export type Pages = {
  options: string[];
  uri: string;
};

export const pagesSchema: Schema<Pages> = s.object<Pages>({
  options: s.array(s.string()),
  uri: s.string(),
});
