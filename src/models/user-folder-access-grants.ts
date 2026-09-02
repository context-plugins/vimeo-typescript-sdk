import { s, type Schema } from "../core/index.js";
import { folderPermissionPolicySchema, type FolderPermissionPolicy } from "./folder-permission-policy.js";

export type UserFolderAccessGrants = {
  folderPermissionPolicies: FolderPermissionPolicy[];
  options: string[];
  total: number;
  uri: string;
};

export const userFolderAccessGrantsSchema: Schema<UserFolderAccessGrants> = s.object<UserFolderAccessGrants>({
  folderPermissionPolicies: s.array(s.lazy(() => folderPermissionPolicySchema)),
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
  _keysMap: {
    folderPermissionPolicies: "folder_permission_policies",
  },
});
