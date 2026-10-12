import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The access level of the showcase.
 *
 * Option descriptions:
 *  * `anybody` - Anyone can access the showcase. This privacy setting appears as `Public` on the
 *    Vimeo front end.
 *  * `embed_only` - The showcase doesn't appear on Vimeo, but the owner can embed it on other
 *    sites.
 *  * `nobody` - No one can access the showacse, including the owner. This privacy setting appears
 *    as `Private` on the Vimeo front end.
 *  * `password` - Only those with the password can access the showcase.
 *  * `team` - Only the owner and members of the owner's team can access the showcase.
 *  * `unlisted` - The showcase can't be accessed if the URL omits its unlisted hash.
 */
export const View6 = {
  Anybody: "anybody",
  EmbedOnly: "embed_only",
  Nobody: "nobody",
  Password: "password",
  Team: "team",
  Unlisted: "unlisted",
} as const;
export type View6 = (typeof View6)[keyof typeof View6] | (string & {});

export const view6Schema: EnumSchema<View6> = s.enumOf<View6>(View6);
