import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { positionSchema, type Position } from "./position.js";

/** An object representing the play button's settings. */
export type PlayButton3 = {
  /**
   * The position of the play button within the embeddable player.
   *
   * Option descriptions:
   *  * `auto` - Use Vimeo's default positioning for the play button.
   *  * `bottom` - The play button is positioned at the bottom of the player, except when in tiny
   *    mode.
   *  * `center` - The play button is positioned in the center of the player.
   */
  position?: Position;
};

export const playButton3Schema: Schema<PlayButton3> = s.object<PlayButton3>({
  position: s.optional(s.lazy(() => positionSchema)),
});
