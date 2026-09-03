import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Items = {
  options: string[];
  total: number;
  uri: string;
};

export const itemsSchema: Schema<Items> = s.object<Items>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
