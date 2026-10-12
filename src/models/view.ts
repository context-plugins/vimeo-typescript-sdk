import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The privacy setting of the channel.
 *
 * Option descriptions:
 *  * `anybody` - Anyone can access the channel. This privacy setting appears as `Public` on the
 *    Vimeo front end.
 *  * `moderators` - Only moderators can access the channel.
 *  * `users` - Only registered users can access the channel. _This field is deprecated._
 */
export const View = {
  Anybody: "anybody",
  Moderators: "moderators",
  Users: "users",
} as const;
export type View = (typeof View)[keyof typeof View] | (string & {});

export const viewSchema: EnumSchema<View> = s.enumOf<View>(View);
