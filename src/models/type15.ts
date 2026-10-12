import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Vimeo content to which the comment relates.
 *
 * Option descriptions:
 *  * `video` - The comment is about a video.
 */
export const Type15 = {
  Video: "video",
} as const;
export type Type15 = (typeof Type15)[keyof typeof Type15] | (string & {});

export const type15Schema: EnumSchema<Type15> = s.enumOf<Type15>(Type15);
