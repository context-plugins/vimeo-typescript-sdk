import { s, type Schema } from "../core/index.js";

export type Colors1 = {
  colorFour?: string;
  colorOne?: string;
  colorThree?: string;
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
