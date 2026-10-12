import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The video quality as determined by height and width.
 *
 * Option descriptions:
 *  * `audio` - The file is audio-only.
 *  * `hd` - The video is in high definition.
 *  * `hls` - The video is suitable for HTTP live streaming.
 *  * `mobile` - The video is mobile quality.
 *  * `sd` - The video is in standard definition.
 *  * `source` - The video's source file.
 *  * `uhd` - The video resolution is 2K or higher.
 */
export const Quality = {
  Audio: "audio",
  Hd: "hd",
  Hls: "hls",
  Mobile: "mobile",
  Sd: "sd",
  Source: "source",
  Uhd: "uhd",
} as const;
export type Quality = (typeof Quality)[keyof typeof Quality] | (string & {});

export const qualitySchema: EnumSchema<Quality> = s.enumOf<Quality>(Quality);
