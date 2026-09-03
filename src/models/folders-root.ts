import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FoldersRoot = {
  options: string[];
  uri: string;
};

export const foldersRootSchema: Schema<FoldersRoot> = s.object<FoldersRoot>({
  options: s.array(s.string()),
  uri: s.string(),
});
