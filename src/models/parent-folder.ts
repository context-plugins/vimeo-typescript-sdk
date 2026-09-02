import { s, type Schema } from "../core/index.js";

export type ParentFolder = {
  options: string[];
  uri: string;
};

export const parentFolderSchema: Schema<ParentFolder> = s.object<ParentFolder>({
  options: s.array(s.string()),
  uri: s.string(),
});
