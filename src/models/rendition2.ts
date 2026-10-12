import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The rendition of the audio track.
 *
 * Option descriptions:
 *  * `source` - The audio is the source file.
 */
export const Rendition2 = {
  Source: "source",
} as const;
export type Rendition2 = (typeof Rendition2)[keyof typeof Rendition2] | (string & {});

export const rendition2Schema: EnumSchema<Rendition2> = s.enumOf<Rendition2>(Rendition2);
