import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const View11 = {
  Anybody: "anybody",
  Contacts: "contacts",
  Disable: "disable",
  Nobody: "nobody",
  Password: "password",
  Unlisted: "unlisted",
  Users: "users",
} as const;
export type View11 = (typeof View11)[keyof typeof View11] | (string & {});

export const view11Schema: EnumSchema<View11> = s.enumOf<View11>(View11);
