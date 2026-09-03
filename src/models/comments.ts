import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Comments = {
  Anybody: "anybody",
  Contacts: "contacts",
  Nobody: "nobody",
} as const;
export type Comments = (typeof Comments)[keyof typeof Comments] | (string & {});

export const commentsSchema: EnumSchema<Comments> = s.enumOf<Comments>(Comments);
