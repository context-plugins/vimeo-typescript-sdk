import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The grant type. The value of this field must be `vimeo_oauth1`.
 *
 * Option descriptions:
 *  * `vimeo_oauth1` - The grant type is for the OAuth1 token.
 */
export const GrantType2 = {
  VimeoOauth1: "vimeo_oauth1",
} as const;
export type GrantType2 = (typeof GrantType2)[keyof typeof GrantType2] | (string & {});

export const grantType2Schema: EnumSchema<GrantType2> = s.enumOf<GrantType2>(GrantType2);
