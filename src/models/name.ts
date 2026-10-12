import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How the embeddable player handles the video title.
 *
 * Option descriptions:
 *  * `hide` - The title is hidden.
 *  * `show` - The title is shown.
 *  * `user` - The title can be toggled to `show` or `hide` by the user.
 */
export const Name = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Name = (typeof Name)[keyof typeof Name] | (string & {});

export const nameSchema: EnumSchema<Name> = s.enumOf<Name>(Name);
