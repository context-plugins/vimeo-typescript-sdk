import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Folders = {
  options: string[];
  total: number;
  uri: string;
};

export const foldersSchema: Schema<Folders> = s.object<Folders>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
