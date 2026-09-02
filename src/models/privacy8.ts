import { s, type EnumSchema } from "../core/index.js";

export const Privacy8 = {
  Anybody: "anybody",
  Moderators: "moderators",
  Users: "users",
} as const;
export type Privacy8 = (typeof Privacy8)[keyof typeof Privacy8] | (string & {});

export const privacy8Schema: EnumSchema<Privacy8> = s.enumOf<Privacy8>(Privacy8);
