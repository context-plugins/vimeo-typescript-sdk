import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How to handle the owner information in the title bar of the embeddable player.
 *
 * Option descriptions:
 *  * `hide` - Hide the owner info.
 *  * `show` - Show the owner info.
 *  * `user` - Enable the user to decide.
 */
export const Owner2 = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Owner2 = (typeof Owner2)[keyof typeof Owner2] | (string & {});

export const owner2Schema: EnumSchema<Owner2> = s.enumOf<Owner2>(Owner2);
