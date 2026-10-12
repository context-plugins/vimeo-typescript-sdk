import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The [Creative Commons](http://creativecommons.org/licenses/) license that the user has set to be
 * the default.
 *
 * Option descriptions:
 *  * `by` - The video is given under the Attribution license.
 *  * `by-nc` - The video is given under the Attribution Non-Commercial license.
 *  * `by-nc-nd` - The video is given under the Attribution Non-Commercial No Derivatives license.
 *  * `by-nc-sa` - The video is given under the Attribution Non-Commercial Share Alike license.
 *  * `by-nd` - The video is given under the Attribution No Derivatives license.
 *  * `by-sa` - The video is given under the Attribution Share Alike license.
 *  * `cc0` - The video is given under the Public Domain Dedication license.
 */
export const License = {
  By: "by",
  ByNc: "by-nc",
  ByNcNd: "by-nc-nd",
  ByNcSa: "by-nc-sa",
  ByNd: "by-nd",
  BySa: "by-sa",
  Cc0: "cc0",
} as const;
export type License = (typeof License)[keyof typeof License] | (string & {});

export const licenseSchema: EnumSchema<License> = s.enumOf<License>(License);
