import { s, type EnumSchema } from "../core/index.js";

export const Comments2 = {
  Anybody: "anybody",
  Contacts: "contacts",
  Nobody: "nobody",
} as const;
export type Comments2 = (typeof Comments2)[keyof typeof Comments2] | (string & {});

export const comments2Schema: EnumSchema<Comments2> = s.enumOf<Comments2>(Comments2);
