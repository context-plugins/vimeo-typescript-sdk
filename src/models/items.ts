import { s, type Schema } from "../core/index.js";

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
