import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of text track.
 *
 * Option descriptions:
 *  * `captions` - The text track is for captions.
 *  * `subtitles` - The text track is for subtitles.
 */
export const Type28 = {
  Captions: "captions",
  Subtitles: "subtitles",
} as const;
export type Type28 = (typeof Type28)[keyof typeof Type28] | (string & {});

export const type28Schema: EnumSchema<Type28> = s.enumOf<Type28>(Type28);
