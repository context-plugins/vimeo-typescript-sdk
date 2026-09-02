import { s, type Schema } from "../core/index.js";

export type FolderPermissionPolicy = {
  name: string;
  uri: string;
};

export const folderPermissionPolicySchema: Schema<FolderPermissionPolicy> = s.object<FolderPermissionPolicy>({
  name: s.string(),
  uri: s.string(),
});
