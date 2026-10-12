import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Colors6 = {
  /**
   * The hexadecimal color code of the fourth player color, which controls the player background
   * color.
   */
  colorFour?: string;
  /**
   * The hexadecimal color code of the first player color, which controls the color of the progress
   * bar, buttons, and more.
   */
  colorOne?: string;
  /**
   * The hexadecimal color code of the third player color, which controls the color of text and
   * icons.
   */
  colorThree?: string;
  /**
   * The hexadecimal color code of the second player color, which controls the player accent color.
   */
  colorTwo?: string;
};

export const colors6Schema: Schema<Colors6> = s.object<Colors6>({
  colorFour: s.optional(s.string()),
  colorOne: s.optional(s.string()),
  colorThree: s.optional(s.string()),
  colorTwo: s.optional(s.string()),
  _keysMap: {
    colorFour: "color_four",
    colorOne: "color_one",
    colorThree: "color_three",
    colorTwo: "color_two",
  },
});
