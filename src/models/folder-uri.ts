import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FolderUri = {
  required: boolean;
  value: string;
};

export const folderUriSchema: Schema<FolderUri> = s.object<FolderUri>({
  required: s.boolean(),
  value: s.string(),
});
