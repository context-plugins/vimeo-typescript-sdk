import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ParentFolder = {
  options: string[];
  uri: string;
};

export const parentFolderSchema: Schema<ParentFolder> = s.object<ParentFolder>({
  options: s.array(s.string()),
  uri: s.string(),
});
