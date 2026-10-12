import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FolderPermissionPolicy = {
  /** The permission policy's name. */
  name: string;
  /** The permission policy's API URI. */
  uri: string;
};

export const folderPermissionPolicySchema: Schema<FolderPermissionPolicy> = s.object<FolderPermissionPolicy>({
  name: s.string(),
  uri: s.string(),
});
