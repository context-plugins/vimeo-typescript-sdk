import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The authenticated user's privacy preference for comments.
 *
 * Option descriptions:
 *  * `anybody` - Anyone can comment on the user's videos.
 *  * `contacts` - Only contacts can comment on the user's videos.
 *  * `nobody` - No one can comment on the user's videos.
 */
export const Comments = {
  Anybody: "anybody",
  Contacts: "contacts",
  Nobody: "nobody",
} as const;
export type Comments = (typeof Comments)[keyof typeof Comments] | (string & {});

export const commentsSchema: EnumSchema<Comments> = s.enumOf<Comments>(Comments);
