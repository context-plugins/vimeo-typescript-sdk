import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  applicablePermissionPolicies1Schema,
  type ApplicablePermissionPolicies1,
} from "./applicable-permission-policies1.js";
import { permissionLevelSchema, type PermissionLevel } from "./permission-level.js";
import { roleSchema, type Role } from "./role.js";

export type TeamRole = {
  applicablePermissionPolicies?: ApplicablePermissionPolicies1;
  count?: number;
  displayDescription?: string;
  displayName?: string;
  isDisabled?: boolean;
  permissionLevel: PermissionLevel | null;
  role: Role | null;
  uri: string;
};

export const teamRoleSchema: Schema<TeamRole> = s.object<TeamRole>({
  applicablePermissionPolicies: s.optional(s.lazy(() => applicablePermissionPolicies1Schema)),
  count: s.optional(s.number()),
  displayDescription: s.optional(s.string()),
  displayName: s.optional(s.string()),
  isDisabled: s.optional(s.boolean()),
  permissionLevel: s.nullable(s.lazy(() => permissionLevelSchema)),
  role: s.nullable(s.lazy(() => roleSchema)),
  uri: s.string(),
  _keysMap: {
    applicablePermissionPolicies: "applicable_permission_policies",
    displayDescription: "display_description",
    displayName: "display_name",
    isDisabled: "is_disabled",
    permissionLevel: "permission_level",
  },
});
