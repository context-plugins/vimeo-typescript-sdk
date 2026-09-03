import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Colors6 = {
  colorFour?: string;
  colorOne?: string;
  colorThree?: string;
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
