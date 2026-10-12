import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The video's privacy setting. When this value is `users`, `application/json` is the only valid
 * content type. Also, some privacy settings are unavailable to Vimeo Free members; for more
 * information, see our [Help Center](https://vimeo.zendesk.com/hc/en-us/articles/224817847).
 *
 * Option descriptions:
 *  * `anybody` - Anyone can access the video. This privacy setting appears as `Public` on the Vimeo
 *    front end.
 *  * `contacts` - Only those who follow the owner on Vimeo can access the video. _This field is
 *    deprecated._
 *  * `disable` - The video is embeddable, but it's hidden on Vimeo and can't be played. This
 *    privacy setting appears as `Embed only` on the Vimeo front end.
 *  * `nobody` - No one except the owner can access the video. This privacy setting appears as
 *    `Private` on the Vimeo front end.
 *  * `password` - Only those with the password can access the video.
 *  * `team` - Anyone on the team can access the video. This privacy setting appears as `Company
 *    only` on the Vimeo front end.
 *  * `unlisted` - Only those with the private link can access the video.
 *  * `users` - Only Vimeo members can access the video. _This field is deprecated._
 */
export const View14 = {
  Anybody: "anybody",
  Contacts: "contacts",
  Disable: "disable",
  Nobody: "nobody",
  Password: "password",
  Team: "team",
  Unlisted: "unlisted",
  Users: "users",
} as const;
export type View14 = (typeof View14)[keyof typeof View14] | (string & {});

export const view14Schema: EnumSchema<View14> = s.enumOf<View14>(View14);
