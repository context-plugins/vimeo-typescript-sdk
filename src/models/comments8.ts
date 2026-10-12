import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The privacy level required to comment on the video.
 *
 * Option descriptions:
 *  * `anybody` - Anyone can comment on the video.
 *  * `contacts` - Only the owner's contacts can comment on the video.
 *  * `nobody` - No one can comment on the video.
 */
export const Comments8 = {
  Anybody: "anybody",
  Contacts: "contacts",
  Nobody: "nobody",
} as const;
export type Comments8 = (typeof Comments8)[keyof typeof Comments8] | (string & {});

export const comments8Schema: EnumSchema<Comments8> = s.enumOf<Comments8>(Comments8);
