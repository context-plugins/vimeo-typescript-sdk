import { s, type Schema } from "../core/index.js";

export type Colors = {
  colorFour: string;
  colorOne: string;
  colorThree: string;
  colorTwo: string;
};

export const colorsSchema: Schema<Colors> = s.object<Colors>({
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
