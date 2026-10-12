import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The approach for uploading the video.
 *
 * Option descriptions:
 *  * `post` - The video upload uses the POST approach.
 *  * `pull` - The video upload uses the pull approach.
 *  * `tus` - The video upload uses the tus approach.
 */
export const Approach = {
  Post: "post",
  Pull: "pull",
  Tus: "tus",
} as const;
export type Approach = (typeof Approach)[keyof typeof Approach] | (string & {});

export const approachSchema: EnumSchema<Approach> = s.enumOf<Approach>(Approach);
