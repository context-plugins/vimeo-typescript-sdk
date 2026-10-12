import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of Creative Commons license.
 *
 * Option descriptions:
 *  * `by` - Attribution.
 *  * `by-nc` - Attribution Non-Commercial.
 *  * `by-nc-nd` - Attribution Non-Commercial No Derivatives.
 *  * `by-nc-sa` - Attribution Non-Commercial Share Alike.
 *  * `by-nd` - Attribution No Derivatives.
 *  * `by-sa` - Attribution Share Alike.
 *  * `cc0` - Public Domain Dedication.
 */
export const Code1 = {
  By: "by",
  ByNc: "by-nc",
  ByNcNd: "by-nc-nd",
  ByNcSa: "by-nc-sa",
  ByNd: "by-nd",
  BySa: "by-sa",
  Cc0: "cc0",
} as const;
export type Code1 = (typeof Code1)[keyof typeof Code1] | (string & {});

export const code1Schema: EnumSchema<Code1> = s.enumOf<Code1>(Code1);
