import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The privacy level of the channel.
 *
 * Option descriptions:
 *  * `anybody` - Anyone can access the channel.
 *  * `moderators` - Only moderators can access the channel.
 *  * `user` - Only moderators and designated users can access the channel.
 */
export const Privacy7 = {
  Anybody: "anybody",
  Moderators: "moderators",
  User: "user",
} as const;
export type Privacy7 = (typeof Privacy7)[keyof typeof Privacy7] | (string & {});

export const privacy7Schema: EnumSchema<Privacy7> = s.enumOf<Privacy7>(Privacy7);
