import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The privacy level of the showcase.
 *
 * Option descriptions:
 *  * `anybody` - Anyone can access the showcase, either on Vimeo or through an embed.
 *  * `embed_only` - The showcase doesn't appear on Vimeo, but it can be embedded on other sites.
 *  * `nobody` - No one can access the showcase, including the authenticated user.
 *  * `password` - Only those with the password can access the showcase.
 *  * `team` - Only members of the authenticated user's team can access the showcase.
 *  * `unlisted` - The showcase can't be accessed if the URL omits its unlisted hash.
 */
export const Privacy11 = {
  Anybody: "anybody",
  EmbedOnly: "embed_only",
  Nobody: "nobody",
  Password: "password",
  Team: "team",
  Unlisted: "unlisted",
} as const;
export type Privacy11 = (typeof Privacy11)[keyof typeof Privacy11] | (string & {});

export const privacy11Schema: EnumSchema<Privacy11> = s.enumOf<Privacy11>(Privacy11);
