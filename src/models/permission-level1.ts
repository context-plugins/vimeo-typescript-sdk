import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
