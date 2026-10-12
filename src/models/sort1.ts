import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The default video sort order of the portfolio.
 *
 * Option descriptions:
 *  * `alphabetical` - The default sort order is alphabetical by name.
 *  * `clips` - The default sort order is video creation date.
 *  * `modified` - The default sort order is the order in which the videos were modified.
 *  * `recent` - The default sort order is the order in which the videos were added.
 */
export const Sort1 = {
  Alphabetical: "alphabetical",
  Clips: "clips",
  Modified: "modified",
  Recent: "recent",
} as const;
export type Sort1 = (typeof Sort1)[keyof typeof Sort1] | (string & {});

export const sort1Schema: EnumSchema<Sort1> = s.enumOf<Sort1>(Sort1);
