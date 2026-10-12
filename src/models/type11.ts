import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of audio track.
 *
 * Option descriptions:
 *  * `commentary` - The audio track is a commentary.
 *  * `descriptive` - The audio track is descriptive for accessibility.
 *  * `main` - The audio track is dubbed audio.
 *  * `unknown` - The audio track category is unknown.
 */
export const Type11 = {
  Commentary: "commentary",
  Descriptive: "descriptive",
  Main: "main",
  Unknown: "unknown",
} as const;
export type Type11 = (typeof Type11)[keyof typeof Type11] | (string & {});

export const type11Schema: EnumSchema<Type11> = s.enumOf<Type11>(Type11);
