import { s, type EnumSchema } from "../core/index.js";

export const Comments4 = {
  Anybody: "anybody",
  Contacts: "contacts",
  Nobody: "nobody",
} as const;
export type Comments4 = (typeof Comments4)[keyof typeof Comments4] | (string & {});

export const comments4Schema: EnumSchema<Comments4> = s.enumOf<Comments4>(Comments4);
