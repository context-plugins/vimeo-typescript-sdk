import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The privacy level required to comment on the video.
 *
 * Option descriptions:
 *  * `anybody` - Anyone can comment on the video.
 *  * `contacts` - Only the video owner's contacts can comment on the video.
 *  * `nobody` - No one can comment on the video.
 */
export const Comments5 = {
  Anybody: "anybody",
  Contacts: "contacts",
  Nobody: "nobody",
} as const;
export type Comments5 = (typeof Comments5)[keyof typeof Comments5] | (string & {});

export const comments5Schema: EnumSchema<Comments5> = s.enumOf<Comments5>(Comments5);
