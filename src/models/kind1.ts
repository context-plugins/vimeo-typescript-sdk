import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of caption that the segment originates from.
 *
 * Option descriptions:
 *  * `captions` - The segment originates from a captions file.
 *  * `subtitles` - The segment originates from a captions and subtitles file.
 */
export const Kind1 = {
  Captions: "captions",
  Subtitles: "subtitles",
} as const;
export type Kind1 = (typeof Kind1)[keyof typeof Kind1] | (string & {});

export const kind1Schema: EnumSchema<Kind1> = s.enumOf<Kind1>(Kind1);
