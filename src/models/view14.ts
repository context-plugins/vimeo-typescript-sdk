import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const View14 = {
  Anybody: "anybody",
  Contacts: "contacts",
  Disable: "disable",
  Nobody: "nobody",
  Password: "password",
  Team: "team",
  Unlisted: "unlisted",
  Users: "users",
} as const;
export type View14 = (typeof View14)[keyof typeof View14] | (string & {});

export const view14Schema: EnumSchema<View14> = s.enumOf<View14>(View14);
