import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Comments8 = {
  Anybody: "anybody",
  Contacts: "contacts",
  Nobody: "nobody",
} as const;
export type Comments8 = (typeof Comments8)[keyof typeof Comments8] | (string & {});

export const comments8Schema: EnumSchema<Comments8> = s.enumOf<Comments8>(Comments8);
