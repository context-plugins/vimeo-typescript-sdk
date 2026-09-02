import { s, type Schema } from "../core/index.js";

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
