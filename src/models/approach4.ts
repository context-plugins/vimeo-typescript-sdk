import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The approach by which to upload the version.
 *
 * Option descriptions:
 *  * `post` - Use the POST approach.
 *  * `pull` - Use the pull approach.
 *  * `tus` - Use the tus approach.
 */
export const Approach4 = {
  Post: "post",
  Pull: "pull",
  Tus: "tus",
} as const;
export type Approach4 = (typeof Approach4)[keyof typeof Approach4] | (string & {});

export const approach4Schema: EnumSchema<Approach4> = s.enumOf<Approach4>(Approach4);
