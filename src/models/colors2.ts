import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The first and second colors of the On Demand page. */
export type Colors2 = {
  /** The hexadecimal color code for the On Demand page's first color. */
  primary: string;
  /** The hexadecimal color code for the On Demand page's second color. */
  secondary: string;
};

export const colors2Schema: Schema<Colors2> = s.object<Colors2>({
  primary: s.string(),
  secondary: s.string(),
});
