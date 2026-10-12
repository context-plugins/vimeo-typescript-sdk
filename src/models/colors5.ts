import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Colors5 = {
  /** The fourth player color, which controls the player background color. */
  colorFour: string;
  /** The first player color, which controls the color of the progress bar, buttons, and more. */
  colorOne: string;
  /** The third player color, which controls the color of text and icons. */
  colorThree: string;
  /**
   * The second player color, which controls the player accent color. _This field is identical to
   * **color**._
   */
  colorTwo: string;
};

export const colors5Schema: Schema<Colors5> = s.object<Colors5>({
  colorFour: s.string(),
  colorOne: s.string(),
  colorThree: s.string(),
  colorTwo: s.string(),
  _keysMap: {
    colorFour: "color_four",
    colorOne: "color_one",
    colorThree: "color_three",
    colorTwo: "color_two",
  },
});
