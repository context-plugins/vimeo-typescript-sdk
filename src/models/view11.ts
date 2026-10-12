import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Who can access the user's videos by default.
 *
 * Option descriptions:
 *  * `anybody` - Anyone can access the videos. This privacy setting appears as `Public` on the
 *    Vimeo front end.
 *  * `contacts` - Only the user's contacts can access the videos. _This field is deprecated._
 *  * `disable` - The videos are disabled. This privacy setting appears as `Embed only` on the Vimeo
 *    front end.
 *  * `nobody` - No one can access the videos. This privacy setting appears as `Private` on the
 *    Vimeo front end.
 *  * `password` - Only those with the password can access the videos.
 *  * `unlisted` - The videos are unlisted.
 *  * `users` - Only other Vimeo members can access the videos. _This field is deprecated._
 */
export const View11 = {
  Anybody: "anybody",
  Contacts: "contacts",
  Disable: "disable",
  Nobody: "nobody",
  Password: "password",
  Unlisted: "unlisted",
  Users: "users",
} as const;
export type View11 = (typeof View11)[keyof typeof View11] | (string & {});

export const view11Schema: EnumSchema<View11> = s.enumOf<View11>(View11);
