import { s, type Schema } from "../core/index.js";

export type Season1 = {
  name: string;
  options: string[];
  uri: string;
};

export const season1Schema: Schema<Season1> = s.object<Season1>({
  name: s.string(),
  options: s.array(s.string()),
  uri: s.string(),
});
