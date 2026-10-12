import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Vimeo content to which the reply relates.
 *
 * Option descriptions:
 *  * `video` - The comment is about a video.
 */
export const Type13 = {
  Video: "video",
} as const;
export type Type13 = (typeof Type13)[keyof typeof Type13] | (string & {});

export const type13Schema: EnumSchema<Type13> = s.enumOf<Type13>(Type13);
