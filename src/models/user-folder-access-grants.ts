import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { folderPermissionPolicySchema, type FolderPermissionPolicy } from "./folder-permission-policy.js";

/** Information about the folder's user folder access grants. */
export type UserFolderAccessGrants = {
  /** Information about the owner's folder permission policies. */
  folderPermissionPolicies: FolderPermissionPolicy[];
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of user folder access grants on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const userFolderAccessGrantsSchema: Schema<UserFolderAccessGrants> = s.object<UserFolderAccessGrants>({
  folderPermissionPolicies: s.array(s.lazy(() => folderPermissionPolicySchema)),
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
  _keysMap: {
    folderPermissionPolicies: "folder_permission_policies",
  },
});
