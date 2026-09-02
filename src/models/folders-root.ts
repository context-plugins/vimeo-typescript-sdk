import { s, type Schema } from "../core/index.js";

export type FoldersRoot = {
  options: string[];
  uri: string;
};

export const foldersRootSchema: Schema<FoldersRoot> = s.object<FoldersRoot>({
  options: s.array(s.string()),
  uri: s.string(),
});
