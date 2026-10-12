import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Who can comment on the group.
 *
 * Option descriptions:
 *  * `all` - Anyone can comment on the group.
 *  * `members` - Only group members can comment on the group.
 */
export const Comment2 = {
  All: "all",
  Members: "members",
} as const;
export type Comment2 = (typeof Comment2)[keyof typeof Comment2] | (string & {});

export const comment2Schema: EnumSchema<Comment2> = s.enumOf<Comment2>(Comment2);
