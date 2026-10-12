import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How the embeddable player handles the end screen.
 *
 * Option descriptions:
 *  * `empty` - The end screen is empty.
 *  * `loop` - The end screen loops the video playback.
 *  * `share` - The end screen includes sharing options.
 *  * `thumbnail` - The end screen includes the thumbnail of the video.
 */
export const Type4 = {
  Empty: "empty",
  Loop: "loop",
  Share: "share",
  Thumbnail: "thumbnail",
} as const;
export type Type4 = (typeof Type4)[keyof typeof Type4] | (string & {});

export const type4Schema: EnumSchema<Type4> = s.enumOf<Type4>(Type4);
