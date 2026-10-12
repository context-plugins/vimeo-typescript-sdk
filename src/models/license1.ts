import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The [Creative Commons](http://creativecommons.org/licenses/) license that the video is given
 * under.
 *
 * Option descriptions:
 *  * `` - No Creative Commons license has been set for the video.
 *  * `by` - The video is given under the Attribution license.
 *  * `by-nc` - The video is given under the Attribution Non-Commercial license.
 *  * `by-nc-nd` - The video is given under the Attribution Non-Commercial No Derivatives license.
 *  * `by-nc-sa` - The video is given under the Attribution Non-Commercial Share Alike license.
 *  * `by-nd` - The video is given under the Attribution No Derivatives license.
 *  * `by-sa` - The video is given under the Attribution Share Alike license.
 *  * `cc0` - The video is given under the Public Domain Dedication license.
 */
export const License1 = {
  By: "by",
  ByNc: "by-nc",
  ByNcNd: "by-nc-nd",
  ByNcSa: "by-nc-sa",
  ByNd: "by-nd",
  BySa: "by-sa",
  Cc0: "cc0",
} as const;
export type License1 = (typeof License1)[keyof typeof License1] | (string & {});

export const license1Schema: EnumSchema<License1> = s.enumOf<License1>(License1);
