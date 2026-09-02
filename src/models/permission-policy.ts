import { s, type Schema } from "../core/index.js";

export type PermissionPolicy = {
  createdOn: string;
  displayDescription: string;
  displayName: string;
  modifiedOn: string | null;
  name: string;
  permissionActions: Record<string, unknown>;
  uri: string;
};

export const permissionPolicySchema: Schema<PermissionPolicy> = s.object<PermissionPolicy>({
  createdOn: s.string(),
  displayDescription: s.string(),
  displayName: s.string(),
  modifiedOn: s.nullable(s.string()),
  name: s.string(),
  permissionActions: s.record(s.string(), s.unknown()),
  uri: s.string(),
  _keysMap: {
    createdOn: "created_on",
    displayDescription: "display_description",
    displayName: "display_name",
    modifiedOn: "modified_on",
    permissionActions: "permission_actions",
  },
});
