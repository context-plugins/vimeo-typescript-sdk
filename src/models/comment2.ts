import { s, type EnumSchema } from "../core/index.js";

export const Comment2 = {
  All: "all",
  Members: "members",
} as const;
export type Comment2 = (typeof Comment2)[keyof typeof Comment2] | (string & {});

export const comment2Schema: EnumSchema<Comment2> = s.enumOf<Comment2>(Comment2);
