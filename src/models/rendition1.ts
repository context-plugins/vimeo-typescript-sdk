import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The video rendition.
 *
 * Option descriptions:
 *  * `2k` - The video has 2K resolution.
 *  * `4k` - The video has 4K resolution.
 *  * `5k` - The video has 5K resolution.
 *  * `6k` - The video has 6K resolution.
 *  * `7k` - The video has 7K resolution.
 *  * `8k` - The video has 8K resolution.
 *  * `240p` - The video has 240p resolution.
 *  * `360p` - The video has 360p resolution.
 *  * `480p` - The video has 480p resolution.
 *  * `540p` - The video has 540p resolution.
 *  * `720p` - The video has 720p resolution.
 *  * `1080p` - The video has 1080p resolution.
 */
export const Rendition1 = {
  _2K: "2k",
  _4K: "4k",
  _5K: "5k",
  _6K: "6k",
  _7K: "7k",
  _8K: "8k",
  _240P: "240p",
  _360P: "360p",
  _480P: "480p",
  _540P: "540p",
  _720P: "720p",
  _1080P: "1080p",
} as const;
export type Rendition1 = (typeof Rendition1)[keyof typeof Rendition1] | (string & {});

export const rendition1Schema: EnumSchema<Rendition1> = s.enumOf<Rendition1>(Rendition1);
