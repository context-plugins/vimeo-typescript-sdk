import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  applicablePermissionPoliciesSchema,
  type ApplicablePermissionPolicies,
} from "./applicable-permission-policies.js";
import { metadata26Schema, type Metadata26 } from "./metadata26.js";
import { permissionLevel1Schema, type PermissionLevel1 } from "./permission-level1.js";
import { status21Schema, type Status21 } from "./status21.js";
import { teamRoleSchema, type TeamRole } from "./team-role.js";
import { userSchema, type User } from "./user.js";

export type TeamMembership = {
  accessGrant: Record<string, unknown> | null;
  active: boolean;
  applicablePermissionPolicies: ApplicablePermissionPolicies;
  applicableRoles: TeamRole[];
  createdTime: string;
  email: string;
  excludeSso: boolean | null;
  hasFolderAccess?: boolean;
  hasLmsUser?: boolean;
  inviteUrl: string | null;
  joinedTime: string;
  metadata: Metadata26;
  modifiedTime: string;
  permissionActions: string[];
  permissionLevel: PermissionLevel1;
  recentlyReminded?: boolean;
  resourceKey: string;
  role: string;
  status: Status21;
  uri: string;
  user: User | null;
};

export const teamMembershipSchema: Schema<TeamMembership> = s.object<TeamMembership>({
  accessGrant: s.nullable(s.record(s.string(), s.unknown())),
  active: s.boolean(),
  applicablePermissionPolicies: applicablePermissionPoliciesSchema,
  applicableRoles: s.array(s.lazy(() => teamRoleSchema)),
  createdTime: s.string(),
  email: s.string(),
  excludeSso: s.nullable(s.boolean()),
  hasFolderAccess: s.optional(s.boolean()),
  hasLmsUser: s.optional(s.boolean()),
  inviteUrl: s.nullable(s.string()),
  joinedTime: s.string(),
  metadata: metadata26Schema,
  modifiedTime: s.string(),
  permissionActions: s.array(s.string()),
  permissionLevel: permissionLevel1Schema,
  recentlyReminded: s.optional(s.boolean()),
  resourceKey: s.string(),
  role: s.string(),
  status: status21Schema,
  uri: s.string(),
  user: s.nullable(s.lazy(() => userSchema)),
  _keysMap: {
    accessGrant: "access_grant",
    applicablePermissionPolicies: "applicable_permission_policies",
    applicableRoles: "applicable_roles",
    createdTime: "created_time",
    excludeSso: "exclude_sso",
    hasFolderAccess: "has_folder_access",
    hasLmsUser: "has_lms_user",
    inviteUrl: "invite_url",
    joinedTime: "joined_time",
    modifiedTime: "modified_time",
    permissionActions: "permission_actions",
    permissionLevel: "permission_level",
    recentlyReminded: "recently_reminded",
    resourceKey: "resource_key",
  },
});
