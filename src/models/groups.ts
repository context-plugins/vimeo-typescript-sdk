import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Groups = {
  options: string[];
  total: number;
  uri: string;
};

export const groupsSchema: Schema<Groups> = s.object<Groups>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
