import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { position2Schema, type Position2 } from "./position2.js";

/** A representation of the play button's settings. */
export type PlayButton1 = {
  /**
   * The position of the play button within the video page player.
   *
   * Option descriptions:
   *  * `auto` - Use Vimeo's default positioning for the play button.
   *  * `bottom` - The play button is positioned at the bottom of the player, except when in tiny
   *    mode.
   *  * `center` - The play button is positioned in the center of the player.
   */
  position?: Position2;
};

export const playButton1Schema: Schema<PlayButton1> = s.object<PlayButton1>({
  position: s.optional(s.lazy(() => position2Schema)),
});
