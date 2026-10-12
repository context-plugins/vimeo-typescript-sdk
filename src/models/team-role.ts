import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  applicablePermissionPolicies1Schema,
  type ApplicablePermissionPolicies1,
} from "./applicable-permission-policies1.js";
import { permissionLevelSchema, type PermissionLevel } from "./permission-level.js";
import { roleSchema, type Role } from "./role.js";

export type TeamRole = {
  /** The applicable permission policies for the role. */
  applicablePermissionPolicies?: ApplicablePermissionPolicies1;
  /** The total number of team members with this role. */
  count?: number;
  /** The translated display description of the role. */
  displayDescription?: string;
  /** The translated display name of the role. */
  displayName?: string;
  /** Whether the role is disabled for certain team members. */
  isDisabled?: boolean;
  /**
   * The untranslated role of the user who made the request.
   *
   * Option descriptions:
   *  * `Admin` - The team member has admin permissions. They can upload and edit videos for the
   *    entire team and perform team administration tasks.
   *  * `Contributor` - The team member has contributor permissions. They can upload and edit videos
   *    for the entire team but can’t perform team administration tasks.
   *  * `Contributor Plus` - The team member has contributor-plus permissions. They can upload and
   *    edit videos for the entire team and have additional sets of permissions but can't perform
   *    team administration tasks.
   *  * `Owner` - The team member has owner permissions.
   *  * `Uploader` - The team member has uploader permissions. They can upload videos for the entire
   *    team but can't edit videos.
   *  * `Viewer` - The team member has viewer permissions. They can access team videos and specific
   *    team folders but can't upload or edit videos.
   */
  permissionLevel: PermissionLevel | null;
  /**
   * The untranslated role of the user who made the request.
   *
   * Option descriptions:
   *  * `Admin` - The team member has admin permissions. They can upload and edit videos for the
   *    entire team and perform team administration tasks.
   *  * `Contributor` - The team member has contributor permissions. They can upload and edit videos
   *    for the entire team but can’t perform team administration tasks.
   *  * `Contributor Plus` - The team member has contributor-plus permissions. They can upload and
   *    edit videos for the entire team and have additional sets of permissions but can't perform
   *    team administration tasks.
   *  * `Owner` - The team member has owner permissions.
   *  * `Uploader` - The team member has uploader permissions. They can upload videos for the entire
   *    team but can’t edit videos.
   *  * `Viewer` - The team member has viewer permissions. They can access team videos and specific
   *    team folders but can’t upload or edit videos.
   */
  role: Role | null;
  /** The URI of the team role. */
  uri: string;
};

export const teamRoleSchema: Schema<TeamRole> = s.object<TeamRole>({
  applicablePermissionPolicies: s.optional(s.lazy(() => applicablePermissionPolicies1Schema)),
  count: s.optional(s.float64()),
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
