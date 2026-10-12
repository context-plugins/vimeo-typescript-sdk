import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rendition2Schema, type Rendition2 } from "./rendition2.js";

export type Download1 = {
  /** The time in ISO 8601 format when the audio track link expires. */
  expires: string;
  /** The file extension of the audio file. */
  extension: string;
  /** The URL of the audio track download. */
  link: string;
  /**
   * The rendition of the audio track.
   *
   * Option descriptions:
   *  * `source` - The audio is the source file.
   */
  rendition: Rendition2;
};

export const download1Schema: Schema<Download1> = s.object<Download1>({
  expires: s.string(),
  extension: s.string(),
  link: s.string(),
  rendition: rendition2Schema,
});
