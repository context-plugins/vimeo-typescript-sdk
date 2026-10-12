import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PermissionPolicy = {
  /** The time at which the permission policy was created. */
  createdOn: string;
  /** The display description of the permission policy, translated where applicable. */
  displayDescription: string;
  /** The display name of the permission policy, translated where applicable. */
  displayName: string;
  /** The time at which the permission policy was last modified. */
  modifiedOn: string | null;
  /** The name of the permission policy. */
  name: string;
  /** The permission actions associated with the policy. */
  permissionActions: Record<string, unknown>;
  /** The URI of the permission policy. */
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
