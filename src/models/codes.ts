import { s, type Schema } from "../core/index.js";

export type Codes = {
  options: string[];
  total: number;
  uri: string;
};

export const codesSchema: Schema<Codes> = s.object<Codes>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
