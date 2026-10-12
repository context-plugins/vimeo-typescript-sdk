import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How the embeddable player handles the video owner's information.
 *
 * Option descriptions:
 *  * `hide` - The owner's information is hidden.
 *  * `show` - The owner's information is shown.
 *  * `user` - The owner's information can be toggled to `show` or `hide` by the user.
 */
export const Byline = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Byline = (typeof Byline)[keyof typeof Byline] | (string & {});

export const bylineSchema: EnumSchema<Byline> = s.enumOf<Byline>(Byline);
