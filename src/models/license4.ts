import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Creative Commons license under which the video is offered.
 *
 * Option descriptions:
 *  * `by` - The video is offered under CC BY, or the attibution-only license.
 *  * `by-nc` - The video is offered under CC BY-NC, or the Attribution-NonCommercial license.
 *  * `by-nc-nd` - The video is offered under CC BY-NC-ND, or the Attribution-NonCommercian-NoDerivs
 *    license.
 *  * `by-nc-sa` - The video is offered under CC BY-NC-SA, or the
 *    Attribution-NonCommercial-ShareAlike licence.
 *  * `by-nd` - The video is offered under CC BY-ND, or the Attribution-NoDerivs license.
 *  * `by-sa` - The video is offered under CC BY-SA, or the Attribution-ShareAlike license.
 *  * `cc0` - The video is offered under CC0, or public domain, videos.
 */
export const License4 = {
  By: "by",
  ByNc: "by-nc",
  ByNcNd: "by-nc-nd",
  ByNcSa: "by-nc-sa",
  ByNd: "by-nd",
  BySa: "by-sa",
  Cc0: "cc0",
} as const;
export type License4 = (typeof License4)[keyof typeof License4] | (string & {});

export const license4Schema: EnumSchema<License4> = s.enumOf<License4>(License4);
