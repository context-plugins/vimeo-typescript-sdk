import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Who can comment on the user's video uploads by default.
 *
 * Option descriptions:
 *  * `anybody` - Anyone can comment.
 *  * `contacts` - Only the user's contacts can comment.
 *  * `nobody` - No one can comment.
 */
export const Comments4 = {
  Anybody: "anybody",
  Contacts: "contacts",
  Nobody: "nobody",
} as const;
export type Comments4 = (typeof Comments4)[keyof typeof Comments4] | (string & {});

export const comments4Schema: EnumSchema<Comments4> = s.enumOf<Comments4>(Comments4);
