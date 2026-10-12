import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How the embeddable player handles the video owner's portrait.
 *
 * Option descriptions:
 *  * `hide` - The owner's portrait is hidden.
 *  * `show` - The owner's portrait is shown.
 *  * `user` - The owner's portrait can be toggled to `show` or `hide` by the user.
 */
export const Portrait1 = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Portrait1 = (typeof Portrait1)[keyof typeof Portrait1] | (string & {});

export const portrait1Schema: EnumSchema<Portrait1> = s.enumOf<Portrait1>(Portrait1);
