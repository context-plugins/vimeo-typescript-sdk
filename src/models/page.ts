import { s, type Schema } from "../core/index.js";

export type Page = {
  added: boolean;
  options: string[];
  uri: string;
};

export const pageSchema: Schema<Page> = s.object<Page>({
  added: s.boolean(),
  options: s.array(s.string()),
  uri: s.string(),
});
