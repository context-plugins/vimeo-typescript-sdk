import { s, type EnumSchema } from "../core/index.js";

export const PermissionLevel = {
  Admin: "Admin",
  Contributor: "Contributor",
  ContributorPlus: "Contributor Plus",
  Owner: "Owner",
  Uploader: "Uploader",
  Viewer: "Viewer",
} as const;
export type PermissionLevel = (typeof PermissionLevel)[keyof typeof PermissionLevel] | (string & {});

export const permissionLevelSchema: EnumSchema<PermissionLevel> = s.enumOf<PermissionLevel>(PermissionLevel);
