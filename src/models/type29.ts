import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of text track.
 *
 * Option descriptions:
 *  * `captions` - The text track is the captions type.
 *  * `chapters` - The text track is the chapters type.
 *  * `descriptions` - The text track is the descriptions type.
 *  * `metadata` - The text track is the metadata type.
 *  * `subtitles` - The text track is the subtitles type.
 */
export const Type29 = {
  Captions: "captions",
  Chapters: "chapters",
  Descriptions: "descriptions",
  Metadata: "metadata",
  Subtitles: "subtitles",
} as const;
export type Type29 = (typeof Type29)[keyof typeof Type29] | (string & {});

export const type29Schema: EnumSchema<Type29> = s.enumOf<Type29>(Type29);
