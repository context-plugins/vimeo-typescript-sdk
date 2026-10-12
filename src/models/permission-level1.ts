import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const PermissionLevel1 = {
  Admin: "Admin",
  Contributor: "Contributor",
  ContributorPlus: "Contributor Plus",
  Owner: "Owner",
  Uploader: "Uploader",
  Viewer: "Viewer",
} as const;
export type PermissionLevel1 = (typeof PermissionLevel1)[keyof typeof PermissionLevel1] | (string & {});

export const permissionLevel1Schema: EnumSchema<PermissionLevel1> =
  s.enumOf<PermissionLevel1>(PermissionLevel1);
