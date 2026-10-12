import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the video.
 *
 * Option descriptions:
 *  * `extra` - The video type is extra footage.
 *  * `main` - The video type is the main video.
 *  * `trailer` - The video type is a trailer.
 */
export const Type42 = {
  Extra: "extra",
  Main: "main",
  Trailer: "trailer",
} as const;
export type Type42 = (typeof Type42)[keyof typeof Type42] | (string & {});

export const type42Schema: EnumSchema<Type42> = s.enumOf<Type42>(Type42);
