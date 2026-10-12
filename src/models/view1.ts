import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The authenticated user's privacy preference for views.
 *
 * Option descriptions:
 *  * `anybody` - Anyone can view the user's videos. This privacy setting appears as `Public` on the
 *    Vimeo front end.
 *  * `contacts` - Only contacts can view the user's videos. _This field is deprecated._
 *  * `disable` - Views are disabled for the user's videos. This privacy setting appears as `Embed
 *    only` on the Vimeo front end.
 *  * `nobody` - No one except the user can view the user's videos. This privacy setting appears as
 *    `Private` on the Vimeo front end.
 *  * `password` - Only those with the password can view the user's videos.
 *  * `unlisted` - Anybody can view the user's videos if they have a link.
 *  * `users` - Only other Vimeo members can view the user's videos. _This field is deprecated._
 */
export const View1 = {
  Anybody: "anybody",
  Contacts: "contacts",
  Disable: "disable",
  Nobody: "nobody",
  Password: "password",
  Unlisted: "unlisted",
  Users: "users",
} as const;
export type View1 = (typeof View1)[keyof typeof View1] | (string & {});

export const view1Schema: EnumSchema<View1> = s.enumOf<View1>(View1);
