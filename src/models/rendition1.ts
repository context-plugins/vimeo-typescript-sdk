import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
