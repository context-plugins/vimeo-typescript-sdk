import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A collection of information about the colors in the video page player. */
export type Colors1 = {
  /** The fourth player color, which controls the player background color. */
  colorFour?: string;
  /** The first player color, which controls the color of the progress bar, buttons, and more. */
  colorOne?: string;
  /** The third player color, which controls the color of text and icons. */
  colorThree?: string;
  /** The second player color, which controls the player accent color. */
  colorTwo?: string;
};

export const colors1Schema: Schema<Colors1> = s.object<Colors1>({
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
