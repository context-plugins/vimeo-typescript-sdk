import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of audio track.
 *
 * Option descriptions:
 *  * `commentary` - The audio track is the commentary type.
 *  * `descriptive` - The audio track is the descriptive type.
 *  * `main` - The audio track is the main type.
 */
export const Type57 = {
  Commentary: "commentary",
  Descriptive: "descriptive",
  Main: "main",
} as const;
export type Type57 = (typeof Type57)[keyof typeof Type57] | (string & {});

export const type57Schema: EnumSchema<Type57> = s.enumOf<Type57>(Type57);
