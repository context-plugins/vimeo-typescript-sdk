import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const View1 = {
  Anybody: "anybody",
  Contacts: "contacts",
  Disable: "disable",
  Nobody: "nobody",
  Password: "password",
  Unlisted: "unlisted",
  Users: "users",
} as const;
export type View1 = (typeof View1)[keyof typeof View1] | (string & {});

export const view1Schema: EnumSchema<View1> = s.enumOf<View1>(View1);
