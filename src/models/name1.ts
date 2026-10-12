import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How to handle the video title in the title bar of the embeddable player.
 *
 * Option descriptions:
 *  * `hide` - Hide the video title.
 *  * `show` - Show the video title.
 *  * `user` - Enable the user to decide.
 */
export const Name1 = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Name1 = (typeof Name1)[keyof typeof Name1] | (string & {});

export const name1Schema: EnumSchema<Name1> = s.enumOf<Name1>(Name1);
