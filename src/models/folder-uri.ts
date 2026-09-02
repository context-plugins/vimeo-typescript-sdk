import { s, type Schema } from "../core/index.js";

export type FolderUri = {
  required: boolean;
  value: string;
};

export const folderUriSchema: Schema<FolderUri> = s.object<FolderUri>({
  required: s.boolean(),
  value: s.string(),
});
