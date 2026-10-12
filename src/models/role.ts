import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The untranslated role of the user who made the request.
 *
 * Option descriptions:
 *  * `Admin` - The team member has admin permissions. They can upload and edit videos for the
 *    entire team and perform team administration tasks.
 *  * `Contributor` - The team member has contributor permissions. They can upload and edit videos
 *    for the entire team but can’t perform team administration tasks.
 *  * `Contributor Plus` - The team member has contributor-plus permissions. They can upload and
 *    edit videos for the entire team and have additional sets of permissions but can't perform team
 *    administration tasks.
 *  * `Owner` - The team member has owner permissions.
 *  * `Uploader` - The team member has uploader permissions. They can upload videos for the entire
 *    team but can’t edit videos.
 *  * `Viewer` - The team member has viewer permissions. They can access team videos and specific
 *    team folders but can’t upload or edit videos.
 */
export const Role = {
  Admin: "Admin",
  Contributor: "Contributor",
  ContributorPlus: "Contributor Plus",
  Owner: "Owner",
  Uploader: "Uploader",
  Viewer: "Viewer",
} as const;
export type Role = (typeof Role)[keyof typeof Role] | (string & {});

export const roleSchema: EnumSchema<Role> = s.enumOf<Role>(Role);
