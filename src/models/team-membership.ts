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
  /**
   * Information about an access grant that applies to the team member on the folder. _This field is
   * deprecated because grants are no longer exposed via API responses._
   *
   * @deprecated
   */
  accessGrant: Record<string, unknown> | null;
  /** Whether the team membership is currently active. */
  active: boolean;
  /** Information about permission policies that can apply to the team member. */
  applicablePermissionPolicies: ApplicablePermissionPolicies;
  /** An array of the team roles this team member can have. */
  applicableRoles: TeamRole[];
  /** The time in ISO 8601 format when the invite was sent. */
  createdTime: string;
  /** The team member's email. */
  email: string;
  /** Whether the team member should be excluded from single sign-on. */
  excludeSso: boolean | null;
  /** Whether the team member has folder access. */
  hasFolderAccess?: boolean;
  /** Whether the team member has an LMS user. */
  hasLmsUser?: boolean;
  /**
   * The URL for the invited user to join the team. The value of this field is null if the invited
   * user has already joined.
   */
  inviteUrl: string | null;
  /** The time in ISO 8601 format when the invite was accepted. */
  joinedTime: string;
  /** The metadata of the team membership. */
  metadata: Metadata26;
  /** The time in ISO 8601 format when the team membership was last modified. */
  modifiedTime: string;
  /**
   * The allowable permission actions of the team user.
   *
   * @deprecated
   */
  permissionActions: string[];
  /**
   * The team member's permission level.
   *
   * Option descriptions:
   *  * `Admin` - The team member has admin permissions. They can upload and edit videos for the
   *    entire team and perform team administration tasks.
   *  * `Contributor` - The team member has contributor permissions. They can upload and edit videos
   *    for the entire team but can't perform team administration tasks.
   *  * `Contributor Plus` - The team member has contributor plus permissions. They can upload and
   *    edit videos for the entire team, and have additional sets of permissions, but can't perform
   *    team administration tasks.
   *  * `Owner` - The team member has owner permissions.
   *  * `Uploader` - The team member has uploader permissions. They can upload videos for the entire
   *    team but can't edit videos.
   *  * `Viewer` - The team member has viewer permissions. They can access team videos and specific
   *    team folders but can't upload or edit videos.
   */
  permissionLevel: PermissionLevel1;
  /** Whether the team member has been reminded about the invite. */
  recentlyReminded?: boolean;
  /** The resource key of the team membership. */
  resourceKey: string;
  /** The team member's role, translated. */
  role: string;
  /**
   * The status of the team membership invite.
   *
   * Option descriptions:
   *  * `accepted` - Team membership has been accepted.
   *  * `pending` - Team membership has been offered but not yet accepted.
   */
  status: Status21;
  /** The URI of the team membership resource. */
  uri: string;
  /** The team member. The value of this field is null if the user hasn't joined the team yet. */
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
