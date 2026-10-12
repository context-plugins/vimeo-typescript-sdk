import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The general privacy setting for generated videos and the embed privacy of the entire collection.
 *
 * Option descriptions:
 *  * `anybody` - Anyone can access the videos. This privacy setting appears as `Public` on the
 *    Vimeo front end.
 *  * `embed_only` - The videos don't appear on Vimeo, but they can be embedded elsewhere.
 *  * `nobody` - Only the event owner can access the videos. This privacy setting appears as
 *    `Private` on the Vimeo front end.
 *  * `password` - Only those with the password can access the videos.
 *  * `team` - Anyone on this team can access the videos. This privacy setting appears as `Company
 *    only` on the Vimeo front end.
 *  * `unlisted` - Only those with the private link can access the videos.
 */
export const View7 = {
  Anybody: "anybody",
  EmbedOnly: "embed_only",
  Nobody: "nobody",
  Password: "password",
  Team: "team",
  Unlisted: "unlisted",
} as const;
export type View7 = (typeof View7)[keyof typeof View7] | (string & {});

export const view7Schema: EnumSchema<View7> = s.enumOf<View7>(View7);
