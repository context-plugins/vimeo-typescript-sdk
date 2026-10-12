import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type29Schema, type Type29 } from "./type29.js";

export type VideosTexttracksRequest1 = {
  /**
   * Whether the current text track is the *active text track,* or the one that appears in the
   * player. Only one text track per language and per type can be active.
   */
  active?: boolean;
  /**
   * The language of the text track. For a full list of supported languages, use the
   * [`/languages?filter=texttracks`](https://developer.vimeo.com/api/reference/videos#get_languages)
   * endpoint.
   */
  language?: string;
  /** The name of the text track. */
  name?: string;
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
  type?: Type29;
};

export const videosTexttracksRequest1Schema: Schema<VideosTexttracksRequest1> =
  s.object<VideosTexttracksRequest1>({
    active: s.optional(s.boolean()),
    language: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.optional(s.lazy(() => type29Schema)),
  });
