import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Rendition = {
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
  Adaptive: "adaptive",
  Audio: "audio",
  Source: "source",
} as const;
export type Rendition = (typeof Rendition)[keyof typeof Rendition] | (string & {});

export const renditionSchema: EnumSchema<Rendition> = s.enumOf<Rendition>(Rendition);
