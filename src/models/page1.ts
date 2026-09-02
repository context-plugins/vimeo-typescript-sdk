import { s, type Schema } from "../core/index.js";

export type Page1 = {
  added: boolean;
  options: string[];
  uri: string;
};

export const page1Schema: Schema<Page1> = s.object<Page1>({
  added: s.boolean(),
  options: s.array(s.string()),
  uri: s.string(),
});
