import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The upload approach.
 *
 * Option descriptions:
 *  * `post` - Use the POST approach.
 *  * `pull` - Use the pull approach.
 *  * `tus` - Use the tus approach.
 */
export const Approach2 = {
  Post: "post",
  Pull: "pull",
  Tus: "tus",
} as const;
export type Approach2 = (typeof Approach2)[keyof typeof Approach2] | (string & {});

export const approach2Schema: EnumSchema<Approach2> = s.enumOf<Approach2>(Approach2);
