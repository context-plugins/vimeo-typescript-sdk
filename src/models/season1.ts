import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
