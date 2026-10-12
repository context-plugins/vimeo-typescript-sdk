import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the video.
 *
 * Option descriptions:
 *  * `live` - The video is or was an event.
 *  * `stock` - The video is a Vimeo Stock video.
 *  * `video` - The video is a standard Vimeo video.
 */
export const Type7 = {
  Live: "live",
  Stock: "stock",
  Video: "video",
} as const;
export type Type7 = (typeof Type7)[keyof typeof Type7] | (string & {});

export const type7Schema: EnumSchema<Type7> = s.enumOf<Type7>(Type7);
