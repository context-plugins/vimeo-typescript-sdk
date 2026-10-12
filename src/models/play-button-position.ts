import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The position of the player's play button.
 *
 * Option descriptions:
 *  * `0` - The play button has the default position.
 *  * `1` - The play button appears at the bottom of the interface.
 *  * `2` - The play button appears in the center of the interface.
 */
export const PlayButtonPosition = {
  _0: "0",
  _1: "1",
  _2: "2",
} as const;
export type PlayButtonPosition = (typeof PlayButtonPosition)[keyof typeof PlayButtonPosition] | (string & {});

export const playButtonPositionSchema: EnumSchema<PlayButtonPosition> =
  s.enumOf<PlayButtonPosition>(PlayButtonPosition);
