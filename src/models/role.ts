import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
