import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The position of the play button within the video page player.
 *
 * Option descriptions:
 *  * `auto` - Use Vimeo's default positioning for the play button.
 *  * `bottom` - The play button is positioned at the bottom of the player, except when in tiny
 *    mode.
 *  * `center` - The play button is positioned in the center of the player.
 */
export const Position2 = {
  Auto: "auto",
  Bottom: "bottom",
  Center: "center",
} as const;
export type Position2 = (typeof Position2)[keyof typeof Position2] | (string & {});

export const position2Schema: EnumSchema<Position2> = s.enumOf<Position2>(Position2);
