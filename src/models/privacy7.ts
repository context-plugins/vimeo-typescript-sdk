import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Privacy7 = {
  Anybody: "anybody",
  Moderators: "moderators",
  User: "user",
} as const;
export type Privacy7 = (typeof Privacy7)[keyof typeof Privacy7] | (string & {});

export const privacy7Schema: EnumSchema<Privacy7> = s.enumOf<Privacy7>(Privacy7);
