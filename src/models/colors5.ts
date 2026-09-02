import { s, type Schema } from "../core/index.js";

export type Colors5 = {
  colorFour: string;
  colorOne: string;
  colorThree: string;
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
